import React, { createContext, useEffect, useState } from "react";

export const RecipesContext = createContext();

export const apiKey = "bb3831485f474965a08cea35a547a0e0";

export const RecipesContextProvider = ({ children }) => {
  const [recipes, setRecipes] = useState();
  const [searchPhrase, setSearchPhrase] = useState(null);

  useEffect(() => {
    if (searchPhrase) {
      recipesSearchAPICall(searchPhrase);
    }
    console.log(searchPhrase);
  }, [searchPhrase]);


  const recipesSearchAPICall = async (search) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/search?query=${search}&number=${100}&apiKey=${apiKey}`
    );
    const data = await response.json();
    setRecipes(data);
  };

  return (
    <RecipesContext.Provider value={{ setSearchPhrase, recipes }}>
      {children}
    </RecipesContext.Provider>
  );
};
