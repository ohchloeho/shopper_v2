import React, { useContext, useEffect, useState } from "react";
import { FlexRow, PageView } from "../styled-components/views";
import { Texts } from "../styled-components/texts";
import { SafeArea } from "../styled-components/views";
import { Item, ListContext } from "../data/shoppingList.service";
import { FlatList } from "react-native";
import { ShoppingItemComp } from "../styled-components/shoppinglist-components/itemComponent.itemList";
import { TextBtn } from "../styled-components/buttons";

export const ShoppingListScreen = ({ navigation }) => {
  const { listData, sortByProperty } = useContext(ListContext);
  const [sortProperty, setSortProperty] = useState(false);
  const [sortedListByProp, setSortedListByProp] = useState(() => {
    if (!sortProperty) {
      return sortByProperty(listData, "qty");
    }
  });
  // if sortProperty = true ? "name" : "qty"
  useEffect(() => {
    if (sortProperty) {
      setSortedListByProp(sortByProperty(listData, "name"));
    } else {
      setSortedListByProp(sortByProperty(listData, "qty"));
    }
  }, [listData]);

  return (
    <SafeArea>
      <PageView>
        <Texts variant={"header"}>shopping list</Texts>
        <FlatList
          data={sortedListByProp}
          keyExtractor={(item) => Math.random()}
          renderItem={({ item }) => {
            const shoppingItem = new Item(item.name, item.unit);
            shoppingItem.addToQty(item.qty);
            return (
              <ShoppingItemComp item={shoppingItem} onReRender={() => {}} />
            );
          }}
        />
        <FlexRow>
          <TextBtn
            text="add items"
            onPress={() => {
              navigation.navigate("shopping-list-add-items");
            }}
          />
          <TextBtn
            text={`sort by ${sortProperty ? "qty" : "name"}`}
            onPress={() => {
              setSortProperty(!sortProperty);
              if (!sortProperty) {
                setSortedListByProp(sortByProperty(listData, "name"));
              } else {
                setSortedListByProp(sortByProperty(listData, "qty"));
              }
            }}
          />
        </FlexRow>
      </PageView>
    </SafeArea>
  );
};
