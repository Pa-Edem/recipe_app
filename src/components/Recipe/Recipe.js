import React from 'react';
import { Icon } from '@material-ui/core';
import classes from './Recipe.module.css';

const Recipe = ({ title, ingredients, image, drawer, ...props }) => {
	const cls = [classes.recipe];
	if (!drawer) {
		cls.push(classes.close);
	}

	return (
		<div className={cls.join(' ')}>
			<Icon
				className={classes.recipe_icon}
				onClick={() => props.onClouseHandler()}>
				close
			</Icon>
			<div className={classes.recipe_title}>{title}</div>
			<ol>
				{ingredients.map((ingredient, index) => (
					<li className={classes.recipe_list} key={index}>
						{ingredient.text}
					</li>
				))}
			</ol>
			<img className={classes.recipe_image} src={image} alt="" />
		</div>
	);
};

export default Recipe;
