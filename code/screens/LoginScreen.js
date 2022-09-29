import { useNavigation } from '@react-navigation/core'
import React, {useEffect, useState} from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {auth} from "../firebase"
import { ref, set } from 'firebase/database';


const LoginScreen = () => {
    const [loginEmail, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            global.user = user;
            global.stackNav = navigation;
            navigation.replace("Home");
          }
        })
    
        return unsubscribe
      }, [])

    const signUp = () => {
        auth
            .createUserWithEmailAndPassword(loginEmail, password)
            .then(userCredentials => {
            const user = userCredentials.user;
            set(ref(global.db, 'users/' + user.uid), {
                email: loginEmail,
                driver: false,
            });
            })
            .catch(error => alert(error.message))
    }

    const login = () => {
        auth
            .signInWithEmailAndPassword(loginEmail, password)
            .then(userCredentials => {
            const user = userCredentials.user;
            })
            .catch(error => alert(error.message))
    }

    const devLog = () => {  // FYRIR DEVELOPMENT
        auth
            .signInWithEmailAndPassword("a@a.com", "password")
            .then(userCredentials => {
            const user = userCredentials.user;
            })
            .catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={loginEmail}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={login}
                    style={styles.button}
                    >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={signUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={devLog}  // FYRIR DEVELOPMENT
                    style={styles.button}
                    >
                    <Text style={styles.buttonText}>Dev Login</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    },
    button: {
        backgroundColor: "#0782F9",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16,
    },
    buttonOutline: {
        backgroundColor: "white",
        marginTop: 5,
        borderColor: "#0782F9",
        borderWidth: 2,
    },
    buttonOutlineText: {
        color: "#0782F9",
        fontWeight: "700",
        fontSize: 16,
    }
})