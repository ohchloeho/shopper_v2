import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecipesScreen } from "../screens/recipes";
import { RecipeDetailsSplash } from "../styled-components/recipe-components/recipe-details-splash.screen";

const RecipeStack = createNativeStackNavigator();

export const RecipeNavigator = () => {
  return (
    <RecipeStack.Navigator screenOptions={{ headerShown: false }}>
      <RecipeStack.Screen name={"recipes_screen"} component={RecipesScreen} />
      <RecipeStack.Screen
        name={"recipe_detail_splash"}
        component={RecipeDetailsSplash}
      />
    </RecipeStack.Navigator>
  );
};
