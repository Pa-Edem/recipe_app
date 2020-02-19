import React from 'react';
import classes from './RecipeList.module.css';

const RecipeList = ({ title, calories, image, ingredients, ...props }) => {
	return (
		<div className={classes.recipelist}>
			<div
				className={classes.recipelist_backdrop}
				onClick={() => props.onRecipe(title, ingredients, image)}></div>
			<div className={classes.recipelist_title}>{title}</div>
			<img className={classes.recipelist_image} src={image} alt="" />
			<div className={classes.recipelist_calories}>{calories}&nbsp;kcal</div>
		</div>
	);
};

export default RecipeList;
