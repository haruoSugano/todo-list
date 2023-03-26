import React, { useState } from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { Todo } from "../../components/Todos";
import { Counter } from "../../components/Counter";
import { styles } from "./styles";

type Todo = {
    id: number;
    text: string;
    checked: boolean;
}

export function Home() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTask, setNewTask] = useState("");

    function handleTodoAdd() {
        setTodos(prevState => [...prevState, {
            id: Math.floor(Math.random() * 100),
            text: newTask,
            checked: false
        }]);

        setNewTask("");
    };

    function handleTodoRemove(id: number, task: string) {
        Alert.alert("Remover a task", `Remover está task: ${task}?`, [
            {
                text: "Sim",
                onPress: () => setTodos(prevState => prevState.filter(todo => todo.id !== id))
            },
            {
                text: "Não",
                style: "cancel"
            }
        ]);
    };

    function handleCheckbox(isChecked: boolean, todo: Todo) {
        const updatedTodo = {
            ...todo,
            checked: isChecked
        }

        setTodos(prevState => prevState.filter(item => item.id !== todo.id));
        setTodos(prevState => [...prevState, updatedTodo]);
    }

    function counterCreatedAndDone(isCreated: boolean) {

        if (isCreated) {
            return todos.filter(todo => todo.checked === false).length;
        }
        
        return todos.filter(todo => todo.checked === true).length;
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../../../assets/Logo.png")}
            />

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={"#6B6B6B"}
                    value={newTask}
                    onChangeText={e => setNewTask(e)}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleTodoAdd}
                >
                    <Image
                        source={require("../../../assets/plus.png")}
                    />
                </TouchableOpacity>
            </View>

            <Counter 
                counter={counterCreatedAndDone}
            />

            <View style={styles.clipboard}>
                <FlatList
                    data={todos}
                    renderItem={({ item }) => (
                        <Todo 
                        key={item.id}
                        todo={item}
                        onRemove={() => handleTodoRemove(item.id, item.text)}
                        onChecked={(isChecked: boolean) => handleCheckbox(isChecked, item)}
                    />
                    )}
                    ListEmptyComponent={() => (
                        <View style={styles.listEmpty}>
                            <Image
                                style={styles.clipboardImage}
                                source={require("../../../assets/clipboard.png")}
                            />
                            <Text style={styles.emptyText}>
                                Você ainda não tem tarefas cadastradas
                            </Text>
                            <Text style={styles.emptySubText}>
                                Crie tarefas e organize sesus itens a fazer
                            </Text>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}
