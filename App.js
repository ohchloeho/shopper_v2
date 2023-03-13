// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import { SplashScreen } from "./src/screens/splash";
import { TabNavigator } from "./src/navigators/navigator";

// contexts
import { RecipesContextProvider } from "./src/data/recipeService";
import { ListContextProvider } from "./src/data/shoppingList.service";

// fonts
import {
  useFonts,
  OxygenMono_400Regular,
} from "@expo-google-fonts/oxygen-mono";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    OxygenMono_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <RecipesContextProvider>
      <ListContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="splash" component={SplashScreen} />
            <Stack.Screen name="navigator" component={TabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </ListContextProvider>
    </RecipesContextProvider>
  );
}
