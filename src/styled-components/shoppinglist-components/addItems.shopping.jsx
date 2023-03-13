import React, { useContext, useState } from "react";
import { PageView, SafeArea } from "../views";
import { Texts } from "../texts";
import { InputField } from "../inputs";
import { TextBtn } from "../buttons";
import { Alert } from "react-native";
import { Item, ListContext } from "../../data/shoppingList.service";

export const AddItemsToList = ({ navigation }) => {
  const [itemName, setItemName] = useState("");
  const [itemQty, setItemQty] = useState('');
  const [itemUnit, setItemUnit] = useState("");
  const { updateItemsInList } = useContext(ListContext);

  return (
    <SafeArea>
      <PageView>
        <Texts variant={"subheader"}>add new item</Texts>
        <Texts variant="label">item name</Texts>
        <InputField
          placeholder={"lemons"}
          onChangeText={(e) => {
            setItemName(e);
          }}
          value={itemName}
        />
        <Texts variant="label">quantity</Texts>
        <InputField
          keyboardType="numeric"
          placeholder={"400"}
          onChangeText={(e) => {
            setItemQty(e);
          }}
          value={itemQty}
        />
        <Texts variant="label">unit measure</Texts>
        <InputField
          placeholder={"grams"}
          onChangeText={(e) => {
            setItemUnit(e);
          }}
          value={itemUnit}
        />
        <TextBtn
          text="add item"
          onPress={() => {
            if (itemName && itemQty && itemUnit) {
              const newItem = new Item(itemName, itemUnit.toLocaleLowerCase());
              newItem.addToQty(itemQty);
              updateItemsInList([newItem]);
              navigation.navigate("shopping-list-screen")
              setItemName("")
              setItemQty(0)
              setItemUnit("")
              Alert.alert("success", `${itemName} has been added`);
            }
          }}
        />
        <TextBtn
          text="cancel"
          onPress={() => {
            !itemName && !itemQty && !itemUnit
              ? navigation.navigate("shopping-list-screen")
              : Alert.alert(
                  "cancel",
                  "are you sure you want to cancel? changes won't be saved",
                  [
                    {
                      text: "discard changes",
                      onPress: () => {
                        navigation.navigate("shopping-list-screen");
                        setItemName("");
                        setItemQty(0);
                        setItemUnit("");
                        setItemCategory("");
                      },
                    },
                    {
                      text: "go back",
                    },
                  ]
                );
          }}
        />
      </PageView>
    </SafeArea>
  );
};
