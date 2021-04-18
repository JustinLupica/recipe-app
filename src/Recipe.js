import React from 'react'
import style from './recipe.module.css'

const Recipe = ({title, image}) => {
    return (
      <div className={style.recipe}>
        <h1>{title}</h1>
        <img src={image} alt=""/>
      </div>
    );
}

export default Recipe;