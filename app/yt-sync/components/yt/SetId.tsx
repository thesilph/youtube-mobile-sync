import { Text } from "react-native";
import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

type SetIdProps = {
    setUserId: (id: string) => void;
};

export default function SetId({ setUserId }: SetIdProps) {

    const [input, setInput] = useState("");

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 16 }}>
            <Text>Enter your User ID:</Text>
            <Text>(you should generate it in the extension)</Text>
            <TextInput
                value={input}
                onChangeText={setInput}
                placeholder="User ID"
                style={{ width:150, borderWidth: 1, padding: 8, marginVertical: 8 }}
            />
            <Button title="Set User ID" onPress={() => setUserId(input)} />

        </View>
    );
}