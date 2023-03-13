import React, { useContext } from "react";
import { FlatList, Modal, View } from "react-native";
import styled from "styled-components";
import { ListContext } from "../data/shoppingList.service";
import { TextBtn } from "./buttons";
import { Texts } from "./texts";

const ModalContainer = styled(View)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  flex: 1;
`;
const ModalWrapper = styled(View)`
  background-color: white;
  border-radius: 15px;
  opacity: 1;
  padding: 15px;
  position: absolute;
`;

export const ModalLists = ({
  modalVisible,
  listData,
  onCloseModal,
  recipeData,
}) => {
  const { updateItemsInList } = useContext(ListContext);
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <ModalContainer>
        <ModalWrapper>
          <Texts variant="label">select a list to add ingredients to</Texts>
          <FlatList
            data={listData}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              return (
                <TextBtn
                  text={item.name}
                  onPress={() => {
                    updateItemsInList(item.name, recipeData);
                    onCloseModal();
                  }}
                />
              );
            }}
          />
          <TextBtn
            text="cancel"
            onPress={() => {
              onCloseModal();
            }}
          />
        </ModalWrapper>
      </ModalContainer>
    </Modal>
  );
};
