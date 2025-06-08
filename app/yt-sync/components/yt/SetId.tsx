import { Text } from "react-native";
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

type SetIdProps = {
    setUserId: (id: string) => void;
};

export default function SetId({ setUserId }: SetIdProps) {

    const [input, setInput] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ytsync-silph</Text>
            <View style={styles.idBox}>
                <Text style={styles.label}>Enter your User ID:</Text>
                <Text style={styles.hint}>(you should generate it in the extension)</Text>
                <TextInput
                    value={input}
                    onChangeText={setInput}
                    placeholder="User ID"
                    placeholderTextColor="#bdbdbd"
                    style={styles.input}
                />
                <Button title="Set User ID" onPress={() => setUserId(input)} />
            </View>
            <Text style={styles.footer}>built chill, thanks.{"\n"}by silph</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#18181b",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
    },
    title: {
        color: "#f3f3f7",
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 18,
        letterSpacing: 1,
    },
    idBox: {
        backgroundColor: "#23232b",
        padding: 18,
        borderRadius: 12,
        alignItems: "center",
        marginBottom: 18,
        width: 260,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
    },
    label: {
        color: "#bdbdbd",
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 4,
    },
    hint: {
        color: "#bdbdbd",
        fontSize: 12,
        marginBottom: 12,
    },
    input: {
        width: 180,
        borderWidth: 1,
        borderColor: "#333",
        backgroundColor: "#18181b",
        color: "#f3f3f7",
        padding: 8,
        borderRadius: 6,
        marginBottom: 12,
        fontSize: 16,
        textAlign: "center",
    },
    footer: {
        color: "#bdbdbd",
        fontSize: 15,
        textAlign: "center",
        letterSpacing: 0.2,
        marginTop: 10,
    },
});