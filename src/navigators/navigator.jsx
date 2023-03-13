import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ShoppingListNavigator } from "./shopping-list.navigator";
import { RecipeNavigator } from "./recipes-navigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { fontTheme } from "../styled-components/font-themes";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === "shopping-list") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "recipes") {
            iconName = "food-turkey";
          }
          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={30} color={color} />
          );
        },
        tabBarStyle: { paddingTop: 8, height: 85 },
        tabBarLabelStyle: { fontSize: 10, fontFamily: fontTheme.fontFamily },
      })}
    >
      <Tab.Screen name="shopping-list" component={ShoppingListNavigator} />
      <Tab.Screen name="recipes" component={RecipeNavigator} />
    </Tab.Navigator>
  );
};
