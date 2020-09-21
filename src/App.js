import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import './App.css';

const App= () => {
  const APP_KEY = "87df26fdf8f6c938eb293d9fc5ab1d2c";
  const APP_ID = "aeb9a8f7";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('');
//variable initiation

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes= async() => {
    const response= await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  //event to update search bar
  const updateSearch = e => {
    setSearch(e.target.value);
  };

  //the search part of our search bar
  const getSearch = e => {
    e.preventDefault();//stops page refresh
    setQuery(search);
    setSearch('');//clears search bar after search
  };
  
  return(
    <div className= "App">
      
      <div className= 'titler'>RecipEase</div>

      <form onSubmit={getSearch} className= "search-form">

        <input
          className= "search-bar"
          type= "text"
          value={search}
          onChange={updateSearch}
        />

        <button className= "search-button" type= "submit">
          Search
        </button>

      </form>

      <div className= "recipes">
      {recipes.map(recipe => (
        <Recipe 
          key= {recipe.recipe.label}  
          title= {recipe.recipe.label} 
          calories= {recipe.recipe.calories}
          image= {recipe.recipe.image}
          ingredients= {recipe.recipe.ingredients}
          //healthLabels= {recipe.recipe.healthLabels}
          //totalNutrients= {recipe.recipe.totalNutrients}
          totalTime= {recipe.recipe.totalTime}
          yields= {recipe.recipe.yield}
          dietLabels= {recipe.recipe.dietLabels}
        />
      ))}
      </div>

    </div>  //end app   
  );//end of return

};//end App

export default App;
