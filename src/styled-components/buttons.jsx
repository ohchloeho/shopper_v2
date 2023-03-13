import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { Texts } from "./texts";

const ButtonWrapper = styled(TouchableOpacity)`
  border: 2px solid black;
  margin-right: 5px;
  padding: 8px;
`;

export const TextBtn = ({ text = "textbtn", onPress }) => {
  return (
    <ButtonWrapper onPress={onPress}>
      <Texts variant="body">{text}</Texts>
    </ButtonWrapper>
  );
};
