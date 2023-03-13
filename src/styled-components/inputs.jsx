import React from "react";
import { TextInput, View } from "react-native";
import styled from "styled-components";
import { fontTheme } from "./font-themes";

const InputFieldWrapper = styled(View)`
  border: 2px solid black;
  padding: 15px;
`;

export const InputField = ({ onChangeText, placeholder, value, keyboardType="default" }) => {
  return (
    <InputFieldWrapper>
      <TextInput
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
        style={{ fontSize: 15, fontFamily: fontTheme.fontFamily }}
      />
    </InputFieldWrapper>
  );
};
