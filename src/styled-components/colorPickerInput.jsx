import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components";

const ColorPickerWrapper = styled(View)`
  padding: 10px;
  background-color: ${(props) => props.color};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ColorPickerDot = styled(TouchableOpacity)`
  border: none;
  border-radius: 30px;
  padding: 15px;
  background-color: ${(props) => (props.color ? props.color : "black")};
`;

export const ColorPickerInput = ({ colorSet }) => {
  // find a more minimal solution - i.e. provide preset colors
  const [color, setColor] = useState("");
  useEffect(() => {
    colorSet(color);
  }, [color]);

  return (
    <ColorPickerWrapper>
      <ColorPickerDot
        color={"#C5283D"}
        onPress={() => {
          setColor("#C5283D");
        }}
      />
      <ColorPickerDot
        color={"#E9724C"}
        onPress={() => {
          setColor("#E9724C");
        }}
      />
      <ColorPickerDot
        color={"#EDD83D"}
        onPress={() => {
          setColor("#EDD83D");
        }}
      />
      <ColorPickerDot
        color={"#13B958"}
        onPress={() => {
          setColor("#13B958");
        }}
      />
      <ColorPickerDot
        color={"#1E5E9F"}
        onPress={() => {
          setColor("#1E5E9F");
        }}
      />
      <ColorPickerDot
        color={"#817AE4"}
        onPress={() => {
          setColor("#817AE4");
        }}
      />
      <ColorPickerDot
        color={"#261452"}
        onPress={() => {
          setColor("#261452");
        }}
      />
      <ColorPickerDot
        color={"#F2E3BC"}
        onPress={() => {
          setColor("#F2E3BC");
        }}
      />
      <ColorPickerDot
        color={"#525252"}
        onPress={() => {
          setColor("#525252");
        }}
      />
    </ColorPickerWrapper>
  );
};
