import React, { useContext, useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import { apiKey } from "../../data/recipeService";
import { TextBtn } from "../buttons";
import { Texts } from "../texts";
import {
  SafeArea,
  PageView,
  FlexColumn,
  ScrollableView,
  FlexRow,
} from "../views";
import { ListContext } from "../../data/shoppingList.service";

export const RecipeDetailsSplash = ({ route }) => {
  // build and add loader & functionality to add ingredients
  const { recipe } = route.params;
  const { updateItemsInList } = useContext(ListContext);
  const [recipeInfoByID, setRecipeInfoByID] = useState("");
  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const getRecipeInfo = async (recipeID) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${apiKey}`
    );
    const data = await response.json();
    setRecipeInfoByID(data);
  };

  useEffect(() => {
    if (recipe.id) {
      getRecipeInfo(recipe.id);
    }
  }, []);
  useEffect(() => {
    if (recipeInfoByID.analyzedInstructions != undefined) {
      setInstructions(
        recipeInfoByID.analyzedInstructions[0].steps.map((step) => {
          return { step: step.step, number: step.number };
        })
      );
      setIngredients(
        recipeInfoByID.extendedIngredients.map((ingredient) => {
          return {
            name: ingredient.name,
            qty: ingredient.amount,
            unit: ingredient.unit.toLowerCase(),
          };
        })
      );
    }
  }, [recipeInfoByID]);

  return (
    <SafeArea>
      <PageView>
        <Texts variant={"subheader"}>{recipe.title}</Texts>
        <ScrollableView>
          <FlexRow align={"space-between"}>
            <Texts variant={"label"}>Ingredients</Texts>
            <TextBtn
              text="add to list"
              onPress={() => {
                if (ingredients != []) {
                  updateItemsInList(ingredients);
                  Alert.alert(
                    "Success!",
                    `Ingredients for ${recipe.title} has been added to your shopping list`
                  );
                }
              }}
            />
          </FlexRow>
          <FlatList
            scrollEnabled={false}
            data={ingredients}
            renderItem={({ item }) => {
              return (
                <Texts variant={"caption"}>
                  {item.qty.toFixed(1)} {item.unit} of {item.name}
                </Texts>
              );
            }}
          />
          <FlexColumn>
            <Texts variant={"label"}>Instructions</Texts>
            <FlatList
              scrollEnabled={false}
              data={instructions}
              keyExtractor={(item) => item.number}
              renderItem={({ item }) => {
                return (
                  <Texts variant={"caption"}>
                    {item.number}. {item.step}
                  </Texts>
                );
              }}
            />
          </FlexColumn>
        </ScrollableView>
      </PageView>
    </SafeArea>
  );
};
