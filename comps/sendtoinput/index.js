import React from "react";
import { Text, View, TextInput } from "react-native";

const SendToInput = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text>To:</Text>
      <TextInput
        placeholder="Search..."
        style={{
          backgroundColor: "#F8F9FA",
          width: 288,
          height: 50,
          paddingLeft: 20,
          marginLeft: 10,
          borderRadius: 100
        }}
      />
    </View>
  );
};

export default SendToInput;
