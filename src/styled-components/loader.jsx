import React, { useEffect, useState } from "react";
import { View } from "react-native";
import styled from "styled-components";
import { Texts } from "./texts";

const LoaderWrapper = styled(View)`
  flex-direction: row;
`;

export const Loader = ({ display }) => {
  const [loadingText, setloadingText] = useState("loading");
  const loadAnim = () => {
    setTimeout(() => {
      setloadingText("loading");
    }, 0);
    setTimeout(() => {
      setloadingText("loading.");
    }, 300);
    setTimeout(() => {
      setloadingText("loading..");
    }, 600);
    setTimeout(() => {
      setloadingText("loading...");
    }, 900);
  };
  useEffect(() => {
    setInterval(loadAnim, 1500);
  }, []);

  if (!display) {
    return;
  }
  return (
    <LoaderWrapper>
      <Texts variant="body">{loadingText}</Texts>
    </LoaderWrapper>
  );
};
