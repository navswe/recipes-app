import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import AdBanner from "./AdBanner";
import RecipeContainer from "./RecipeContainer";

// HomeScreen is a component to displayrecipes fetched from the devmountain recipes API.

const HomeScreen = () => {
  // useState hook to create & keep track of the recipes component
  const [recipes, setRecipes] = useState([]);

  //Fetches recipes from the API and updates the state with the response data.
  const getRecipes = () => {
    axios
      .get("https://recipes.devmountain.com/recipes")
      .then((res) => {
        setRecipes(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //useEffect hook to call the getRecipes function
  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <AdBanner />
      <RecipeContainer recipes={recipes} />
    </div>
  );
};

export default HomeScreen;
