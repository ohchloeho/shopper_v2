import styled from "styled-components";
import { View, SafeAreaView, ScrollView } from "react-native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;
export const PageView = styled(View)`
  flex: 1;
  flex-direction: column;
  padding: ${(props) => (props.noPadding ? "0px" : "10px")}
  justify-content: ${(props) => (props.center ? props.center : "flex-start")};
`;
export const ScrollableView = styled(ScrollView)`
  flex: 1;
`;

export const FlexRow = styled(View)`
  flex-direction: row;
  justify-content: ${(props) => (props.align ? props.align : "flex-start")};
  align-items: center;
`;
export const FlexColumn = styled(View)`
  flex-direction: column;
  align-items: ${(props) => (props.center ? "center" : "flex-start")};
  justify-content: space-between;
`;
