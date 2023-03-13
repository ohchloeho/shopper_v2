import React from "react";
import { TouchableOpacity } from "react-native";
import { Texts } from "../texts";
import styled from "styled-components";
import { FlexColumn } from "../views";

const RenderWrapper = styled(TouchableOpacity)`
  border: 3px solid black;
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const RecipeRenderItem = ({
  recipeTitle,
  servings,
  cookTime,
  onPress,
}) => {
  let shortenedRecipeTitle =
    recipeTitle.length > 15 ? recipeTitle.toString().slice(0, 15) : recipeTitle;
  return (
    <RenderWrapper onPress={onPress}>
      <Texts variant={"subheader"}>{shortenedRecipeTitle}</Texts>
      <FlexColumn>
        <Texts variant={"caption"}>Serves {servings}</Texts>
        <Texts variant={"body"}>{cookTime}mins</Texts>
      </FlexColumn>
    </RenderWrapper>
  );
};
