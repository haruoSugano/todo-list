import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { checkebox, styles } from "./styles";

type Todo = {
    id: number;
    text: string;
    checked: boolean;
}

type Props = {
    todo: Todo;
    onRemove: (id: number, task: string) => void;
    onChecked: (isChecked: boolean, todo: Todo) => void;
}

export function Todo({ todo, onRemove, onChecked }: Props) {
    return (
        <View style={styles.todoList}>
            <BouncyCheckbox
                style={styles.checkbox}
                size={18}
                fillColor="#5E60CE"
                textComponent={<Text style={checkebox(!todo.checked).textCheckbox}>{todo.text}</Text>}
                iconStyle={{ borderColor: "#5E60CE" }}
                innerIconStyle={{ borderWidth: 2, borderColor: !todo.checked ? "#4EA8DE" : "#5E60CE" }}
                onPress={(isChecked: boolean) => { onChecked(isChecked, todo) }}
            />

            <TouchableOpacity
                style={styles.remove}
                onPress={() => {onRemove(todo.id, todo.text)}}
            >
                <Image
                    source={require("../../../assets/trash.png")}
                />
            </TouchableOpacity>
        </View>
    );
}
