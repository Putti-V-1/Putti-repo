import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        color: "red",
        fontSize: "20em",
        padding: "5%",
        backgroundColor: "white",
    },
    nav: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        height: "110%",
        paddingTop: "2%",
        top: "195%",
        backgroundColor: "lightgray",
    }
});

export { styles }