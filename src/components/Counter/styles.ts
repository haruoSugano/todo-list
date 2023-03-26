import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    task: {
        flexDirection: "row",
        marginTop: 36,
    },
    info: {
        flex: 1,
        flexDirection: "row",
    },
    created: {
        color: "#4EA8DE",
        fontWeight: 'bold',
        marginLeft: 15
    },
    done: {
        flex: 1,
        textAlign: "right",
        color: "#8284FA",
    },
    counter: {
        textAlign: "center",
        width: 26,
        height: 16,
        color: "#D9D9D9",
        borderRadius: 9,
        backgroundColor: "#333333",
        fontWeight: 'bold',
        fontSize: 12,
        marginTop: 1,
        marginLeft: 8,
        marginRight: 15,
    },
});
