import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ShoppingListScreen } from "../screens/shopping-list";
import { CreateNewShoppingListScreen } from "../styled-components/shoppinglist-components/createNewList.shopping";
import { AddItemsToList } from "../styled-components/shoppinglist-components/addItems.shopping";

const ShoppingListStack = createNativeStackNavigator();

export const ShoppingListNavigator = () => {
  return (
    <ShoppingListStack.Navigator screenOptions={{ headerShown: false }}>
      <ShoppingListStack.Screen
        name="shopping-list-screen"
        component={ShoppingListScreen}
      />
      <ShoppingListStack.Screen
        name="shopping-list-add-items"
        component={AddItemsToList}
      />
    </ShoppingListStack.Navigator>
  );
};
