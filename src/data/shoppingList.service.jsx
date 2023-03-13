import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ListContext = createContext();

export const ListContextProvider = ({ children }) => {
  const [listData, setListData] = useState([]);

  // for adding new item to list
  const updateItemsInList = (items) => {
    setListData([...listData, ...items]);
    updateLocalDB(listData);
  };
  // for deleting items from list
  const removeItemsFromList = (item) => {
    const newList = listData.filter((i) => i.name != item.name);
    setListData(newList);
    updateLocalDB(listData);
  };
  // update item status
  const updateItemStatus = (item, isChecked) => {
    const itemIndex = listData.findIndex((i) => {
      return i.name == item.name;
    });
    listData[itemIndex].isChecked = isChecked;
    updateLocalDB(listData);
  };

  // sorting function
  const sortByProperty = (array, property) => {
    const sortedList = array.sort((a, b) =>
      a[property] > b[property] ? 1 : -1
    );
    return sortedList;
  };

  // local DB methods
  const updateLocalDB = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@listsData", jsonValue);
    } catch (e) {
      // saving error
    }
  };
  const getListDataFromLocalDB = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@listsData");
      jsonValue != null ? setListData(JSON.parse(jsonValue)) : null;
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getListDataFromLocalDB();
  }, []);
  useEffect(() => {
    updateLocalDB(listData);
  }, [listData]);

  return (
    <ListContext.Provider
      value={{
        listData,
        updateItemsInList,
        removeItemsFromList,
        updateItemStatus,
        sortByProperty,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export class Item {
  constructor(name, unitMeasure, category) {
    this.name = name;
    this.qty = "";
    this.category = category;
    this.unit = unitMeasure ? unitMeasure : "serving";
    this.isChecked = false;
  }
  setUnitMeasure(value) {
    this.unitMeasure = value;
  }
  addToQty(qty) {
    this.qty += qty;
  }
  removeFromQty(qty) {
    this.qty -= qty;
  }
}
