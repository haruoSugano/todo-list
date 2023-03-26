import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    todoList: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#262626",
        color: "#F2F2F2",
        marginTop: 10,
        borderColor: "#333333",
        borderRadius: 5,
        padding: 4
    },
    checkbox: {
        width: "85%",
        marginLeft: 5,
        textDecorationColor: "#F2F2F2",
        fontWeight: 'bold',
        color: "#F2F2F2",
    },
    remove: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center",
    }
});

export const checkebox = (checked: boolean) => StyleSheet.create({
    textCheckbox: {
        color: checked ? "#F2F2F2" : "#808080",
        textDecorationLine: checked ? "none" : "line-through",
        justifyContent: "center",
        marginLeft: 10,
        padding: 5
    },
});
