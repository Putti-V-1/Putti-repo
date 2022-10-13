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
        backgroundColor: "darkgreen",
    },
    drawer: {
        flex: 1,
        marginBottom: "10%",
    },
    logout: {
        position: "relative",
        alignSelf: "flex-end",
    },
    tripBtn: {
        backgroundColor: "white",
        width: "50%",
        padding: 15,
        borderRadius: 10,
        borderColor: "black",
        borderWidth: "1px",
        alignItems: "center",
        marginBottom: "10%",
    },
    tripBtnText: {
        color: "black",
        fontSize: 50,
    },
});

export { styles }