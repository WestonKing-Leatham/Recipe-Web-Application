import React from 'react';
import style from './recipe.module.css'

const Recipe = ({ title, calories, image, totalTime, ingredients, yields, dietLabels}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p> Time to Cook: {totalTime} minutes</p>
            <p> Feeds {yields}</p>
            <p>{dietLabels}</p>
            <ol>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ol>           
            <p> Calories: {Math.round(calories)}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    )
}

export default Recipe;