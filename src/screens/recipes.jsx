import React, { useState, useContext, useEffect } from "react";
import { FlatList, Image } from "react-native";
import { Searchbar } from "react-native-paper";
import { RecipesContext } from "../data/recipeService";
import { RecipeRenderItem } from "../styled-components/recipe-components/recipe-render-item.component";
import { PageView, SafeArea } from "../styled-components/views";
import { fontTheme } from "../styled-components/font-themes";
import { Loader } from "../styled-components/loader";
import { Texts } from "../styled-components/texts";

export const RecipesScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { setSearchPhrase, recipes } = useContext(RecipesContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (recipes) {
      setIsLoading(false);
    }
  }, [recipes]);

  return (
    <SafeArea>
      <PageView>
        <Searchbar
          style={{
            borderColor: "black",
            borderWidth: 3,
          }}
          inputStyle={{
            fontFamily: fontTheme.fontFamily,
          }}
          placeholder="search recipes"
          placeholderTextColor={"grey"}
          onChangeText={(e) => {
            setSearchQuery(e);
          }}
          value={searchQuery}
          onSubmitEditing={() => {
            setIsLoading(true);
            setTimeout(() => {
              setSearchPhrase(searchQuery);
            }, 4000);
            setTimeout(() => {
              setIsLoading(false);
            }, 3000);
          }}
          autoCapitalize={false}
          autoComplete={false}
          autoCorrect={false}
        />
        <PageView center noPadding>
          {/* {!isLoading ? (
            <>
              {recipes ? (
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={recipes.results}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => {
                    return (
                      <RecipeRenderItem
                        recipeTitle={item.title}
                        servings={item.servings}
                        cookTime={item.readyInMinutes}
                        onPress={() => {
                          navigation.navigate("recipe_detail_splash", {
                            recipe: item,
                          });
                        }}
                      />
                    );
                  }}
                />
              ) : (
                <>
                  <Texts variant="body">search for a recipe!</Texts>
                  <Image
                    style={{ width: 400, height: 400 }}
                    source={{
                      uri: "/Users/chloeho/Desktop/coding things/freelance work/whats_in_my_fridge_project/shopper_v2/assets/hot-pan.gif",
                    }}
                  />
                </>
              )}
            </>
          ) : (
            <Loader display={isLoading} />
          )} */}
          {isLoading ? (
            <>
              <Loader display={isLoading} />
              <Image
                style={{ width: 400, height: 400 }}
                source={{
                  uri: "/Users/chloeho/Desktop/coding things/freelance work/whats_in_my_fridge_project/shopper_v2/assets/hot-pan.gif",
                }}
              />
            </>
          ) : (
            <>
              {recipes ? (
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={recipes.results}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => {
                    return (
                      <RecipeRenderItem
                        recipeTitle={item.title}
                        servings={item.servings}
                        cookTime={item.readyInMinutes}
                        onPress={() => {
                          navigation.navigate("recipe_detail_splash", {
                            recipe: item,
                          });
                        }}
                      />
                    );
                  }}
                />
              ) : (
                <>
                  <Texts variant="body">search for a recipe!</Texts>
                  <Image
                    style={{ width: 400, height: 400 }}
                    source={{
                      uri: "/Users/chloeho/Desktop/coding things/freelance work/whats_in_my_fridge_project/shopper_v2/assets/hot-pan.gif",
                    }}
                  />
                </>
              )}
            </>
          )}
        </PageView>
      </PageView>
    </SafeArea>
  );
};
