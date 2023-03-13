import styled from "styled-components";
import { Text } from "react-native";
import { fontTheme } from "./font-themes";

const header = () => `
font-size: 40px;
`;
const subheader = () => `
font-size: 30px;
`;
const body = () => `
font-size: 20px;
`;
const label = () => `
font-size: 25px;
text-decoration: underline;
`;
const caption = () => `
font-size: 15px;
`;

const variants = {
  header,
  subheader,
  body,
  label,
  caption,
};

const hexToRgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export const Texts = styled(Text)`
  ${({ variant }) => variants[variant]}
  font-family: ${fontTheme.fontFamily};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
  background-color: ${(props) => {
    if (props.color) {
      const rgb = hexToRgb(props.color);
      return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.7)`;
    } else {
      return "transparent";
    }
  }};
  filter: opacity(0.5);
  text-align: ${(props) => (props.textCenter ? "center" : "left")};
`;
