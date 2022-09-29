import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, KeyboardAvoidingView, Button, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const PlanScreen = () => {
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setDate] = useState(new Date());

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setDate(date);
        hideDatePicker();
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <GooglePlacesAutocomplete // Search bar með autocomplete
                placeholder='From'
                fetchDetails={true}
                returnKeyType={"search"}
                enablePoweredByContainer={false}
                nearbyPlacesAPI={'GooglePlacesSearch'}
                styles={styles.search}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    //console.log(details.geometry.location.lat, data.description);
                    setFrom({
                        latitude: details.geometry.location.lat,
                        longitude: details.geometry.location.lng,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05,
                    })
                }}
                query={{
                    key: 'AIzaSyAR-R6U3YWpLsuqcAV85z-H-X6mBBdIFnQ',
                    language: 'en',
                    components: 'country:is',
                }}
            />
            <GooglePlacesAutocomplete // Search bar með autocomplete
                placeholder='To'
                fetchDetails={true}
                returnKeyType={"search"}
                enablePoweredByContainer={false}
                nearbyPlacesAPI={'GooglePlacesSearch'}
                styles={styles.search}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    //console.log(details.geometry.location.lat, data.description);
                    setTo({
                        latitude: details.geometry.location.lat,
                        longitude: details.geometry.location.lng,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05,
                    })
                }}
                query={{
                    key: 'AIzaSyAR-R6U3YWpLsuqcAV85z-H-X6mBBdIFnQ',
                    language: 'en',
                    components: 'country:is',
                }}
            />
            <TouchableOpacity onPress={showDatePicker}>
                <Text>{selectedDate.getDate() + "-" + String(selectedDate.getMonth() + 1) + "-" + selectedDate.getFullYear()}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                isDarkModeEnabled={true}
                display="inline"
                minimumDate={new Date()}
                date={selectedDate}
            />
        </KeyboardAvoidingView>
    );
}

export default PlanScreen;

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
    },
    search: {
        container: {flex: 0, position: "absolute", width: "100%", zIndex: 1, top: "0%" },
        listView: {backgroundColor: "white"}
    },
})