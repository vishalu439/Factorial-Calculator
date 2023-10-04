import React from "react";

function RecipeList({ recipes }) {
  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <h3>{recipe.name}</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default RecipeList;
