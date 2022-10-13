import React, {useState, useEffect} from 'react';
import { Text, Veiw, TouchableOpacity, KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ref, set } from 'firebase/database';


const PlanScreen = () => {

    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [selectedDate, setDate] = useState(new Date());
    const [selectedTime, setTime] = useState(new Date());

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleDateConfirm = (date) => {
        setDate(date);
        hideDatePicker();
    };
    
    const handleTimeConfirm = (time) => {
        setTime(time);
        hideTimePicker();
    };
    
    function confirmRide(){
        if(destination!=null && origin!=null){
            let rideId = global.user["id"] + selectedDate.getDate() + selectedDate.getMonth() + selectedDate.getFullYear() + selectedTime.getHours() + selectedTime.getMinutes();
            set(ref(global.db, 'rides/' + rideId), {
                id: rideId,
                driver: global.user["id"],
                time: selectedDate.getDate() + "-" + String(selectedDate.getMonth() + 1) + "-" + selectedDate.getFullYear() + " " + selectedTime.getHours() + ":" + selectedTime.getMinutes(),
                destination: destination,
                origin: origin,
            });
            set(ref(global.db, 'users/' + global.user["id"] + "/rides/" + rideId), {
                key: rideId,
            });
            global.stackNav.goBack();
            alert("ferð skrað")
        }else{
            alert("PICK PLACE BITCH")
        }
    };

    return (
        <View
            style={styles.container}
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
                    setOrigin({
                        latitude: details.geometry.location.lat,
                        longitude: details.geometry.location.lng,
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
                styles={styles.search2}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    //console.log(details.geometry.location.lat, data.description);
                    setDestination({
                        latitude: details.geometry.location.lat,
                        longitude: details.geometry.location.lng,
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
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
                isDarkModeEnabled={true}
                //display="inline"
                minimumDate={new Date()}
                date={selectedDate}
            />
            <TouchableOpacity onPress={showTimePicker}>
                <Text>{selectedTime.getHours() + ":" + selectedTime.getMinutes()}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleTimeConfirm}
                onCancel={hideTimePicker}
                isDarkModeEnabled={true}
                minimumDate={new Date()}
                date={selectedTime}
            />
            <TouchableOpacity 
                style={styles.confirm}
                onPress={confirmRide}
            >
                <Text>Skra ferð</Text>
            </TouchableOpacity>
        </View>
    );
}

export default PlanScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    confirm: {
        position: "absolute",
        bottom: "10%",
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
        container: {flex: 0, position: "absolute", width: "100%", zIndex: 1, top: "2%" },
        listView: {backgroundColor: "white"}
    },
    search2: {
        container: {flex: 0, position: "absolute", width: "100%", zIndex: 1, top: "8%" },
        listView: {backgroundColor: "white"}
    },
})