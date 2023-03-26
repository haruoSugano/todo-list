import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#000000"
    },
    logo: {
        marginTop: "12%"
    },
    form: {
        width: "92%",
        flexDirection: "row",
        marginTop: 36,
    },
    input: {
        flex: 1,
        height: 52,
        backgroundColor: "#1F1E25",
        borderRadius: 5,
        color: "#FDFCFE",
        padding: 16,
        fontSize: 16,
        marginRight: 7
    },
    button: {
        width: 52,
        height: 52,
        borderRadius: 5,
        backgroundColor: "#1E6F9F",
        padding: 18
    },
    clipboard: {
        width: "92%",
        borderWidth: 0.5,
        borderTopColor: "#808080",
        marginTop: 20
    },
    listEmpty: {
        alignItems: "center",
    },
    clipboardImage: {
        marginTop: "15%",
    },
    emptyText: {
        color: "#808080",
        fontWeight: "bold",
        marginTop: "4%"
    },
    emptySubText: {
        color: "#808080",
        fontSize: 13,
    }
});
