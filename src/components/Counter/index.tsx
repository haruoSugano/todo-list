import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
    counter: (isCreated: boolean) => number;
}

export function Counter({ counter }: Props) {
    return (
        <View style={styles.task}>
            <View style={styles.info}>
                <Text style={styles.created}>
                    Criadas
                </Text>
                <Text style={styles.counter}>
                    {
                        counter(true)
                    }
                </Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.done}>
                    Concluídas
                </Text>
                <Text style={styles.counter}>
                    {
                        counter(false)
                    }
                </Text>
            </View>
        </View>
    );
}