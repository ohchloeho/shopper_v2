import React, { useState, useContext } from "react";
import { ColorPickerInput } from "../colorPickerInput";
import { InputField } from "../inputs";
import { Texts } from "../texts";
import { SafeArea, PageView } from "../views";
import { TextBtn } from "../buttons";
import { ListContext, ShoppingList } from "../../data/shoppingList.service";
import { Alert } from "react-native";
import { Loader } from "../loader";

export const CreateNewShoppingListScreen = ({ navigation }) => {
  const [listName, setListName] = useState("");
  const [listDescription, setListDescription] = useState("");
  const [color, setColor] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // service functions
  const { addNewListToDB } = useContext(ListContext);

  return (
    <SafeArea>
      <PageView>
        <Texts variant={"subheader"} color={color}>
          new shopping list
        </Texts>
        <Texts variant="label">list title</Texts>
        <InputField
          placeholder={"pizza party groceries"}
          onChangeText={(e) => {
            setListName(e);
          }}
          value={listName}
        />
        <Texts variant="label">description</Texts>
        <InputField
          placeholder={"necessary ingredients for pizzas"}
          onChangeText={(e) => {
            setListDescription(e);
          }}
          value={listDescription}
        />
        <Texts variant="label">color tag:</Texts>
        <ColorPickerInput
          colorSet={(e) => {
            setColor(e);
          }}
        />
        <TextBtn
          text="create list"
          onPress={() => {
            if (listName && listDescription && color) {
              const newShoppingList = new ShoppingList(
                listName,
                listDescription,
                color
              );
              addNewListToDB(newShoppingList);
              setIsLoading(true);
              setTimeout(() => {
                // clear fields
                alert(`${listName} has been created`);
                navigation.navigate("shopping-list-screen");
                setListName("");
                setListDescription("");
                setColor("");
                setIsLoading(false);
              }, 2000);
            } else {
              Alert.alert("error", "please ensure all fields are not blank");
            }
          }}
        />
        <TextBtn
          text="cancel"
          onPress={() => {
            !listName && !listDescription && !color
              ? navigation.navigate("shopping-list-screen")
              : Alert.alert(
                  "cancel",
                  "are you sure you want to cancel? changes won't be saved",
                  [
                    {
                      text: "discard changes",
                      onPress: () => {
                        navigation.navigate("shopping-list-screen");
                        setListName("");
                        setListDescription("");
                        setColor("");
                      },
                    },
                    {
                      text: "go back",
                    },
                  ]
                );
          }}
        />
        <Loader display={isLoading} />
      </PageView>
    </SafeArea>
  );
};
