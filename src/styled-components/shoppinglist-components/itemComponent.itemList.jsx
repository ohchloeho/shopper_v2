import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { Texts } from "../texts";
import { ListContext } from "../../data/shoppingList.service";

const ItemWrapper = styled(View)`
  padding: 2% 0%;
  flex-direction: row;
  align-items: center;
`;

export const ShoppingItemComp = ({ item, onReRender }) => {
  const [checkStatus, setCheckStatus] = useState(false);
  const { updateItemStatus, listData, removeItemsFromList } =
    useContext(ListContext);

  useEffect(() => {
    const itemIndex = listData.findIndex((i) => i.name == item.name);
    if (listData[itemIndex] != undefined) {
      setCheckStatus(listData[itemIndex].isChecked);
    }
  }, []);

  return (
    <>
      <ItemWrapper>
        <TouchableOpacity
          onPress={() => {
            setCheckStatus(!checkStatus);
            updateItemStatus(item, !checkStatus);
          }}
          style={{ marginRight: 10 }}
        >
          <Entypo
            name={checkStatus ? "check" : "circle"}
            size={24}
            color={checkStatus ? "green" : "black"}
          />
        </TouchableOpacity>
        <Texts variant="caption">
          {item.qty} {item.unit ? item.unit : "piece"} {item.name}
        </Texts>
        {checkStatus ? (
          <TouchableOpacity
            style={{ marginLeft: "auto" }}
            onPress={() => {
              onReRender();
              removeItemsFromList(item);
            }}
          >
            <FontAwesome5 name="trash-alt" size={24} color="black" />
          </TouchableOpacity>
        ) : null}
      </ItemWrapper>
    </>
  );
};
