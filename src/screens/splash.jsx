import { SafeArea, PageView } from "../styled-components/views";
import { Texts } from "../styled-components/texts";
import { FlexRow } from "../styled-components/views";
import { TextBtn } from "../styled-components/buttons";
import { Image } from "react-native";

export const SplashScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <PageView center={"space-between"}>
        <Texts variant={"header"}>shopper 2.0</Texts>
        <Image
          style={{ width: 400, height: 400 }}
          source={{
            uri: "/Users/chloeho/Desktop/coding things/freelance work/whats_in_my_fridge_project/shopper_v2/assets/shopping-cart.gif",
          }}
        />
        <FlexRow>
          <TextBtn
            text="shopping list"
            onPress={() => {
              navigation.navigate("navigator", { screen: "shopping-list" });
            }}
          />
          <TextBtn
            text="recipes"
            onPress={() => {
              navigation.navigate("navigator", { screen: "recipes" });
            }}
          />
        </FlexRow>
      </PageView>
    </SafeArea>
  );
};
