import React, { useEffect, useState } from 'react';
import classes from './App.module.css';

import RecipeList from './components/RecipeList/RecipeList';
import Recipe from './components/Recipe/Recipe';
import Backdrop from './components/Backdrop/Backdrop';

const App = () => {
	const APP_ID = '7b590ca8';
	const APP_KEY = 'b2bcf131d5b9812e4e28072ef955bde3';

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('salmon');
	const [drawer, setDrawer] = useState(false);
	const [recTitle, setRecTitle] = useState('');
	const [recIngrad, setRecIngrad] = useState([]);
	const [recImg, setRecImg] = useState('');

	useEffect(() => {
		getRecipes(query);
	}, [query]);

	const getRecipes = async str => {
		const response = await fetch(
			`https://api.edamam.com/search?q=${str}&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		const data = await response.json();
		setRecipes(data.hits);
	};

	const updateSearch = event => {
		setSearch(event.target.value);
	};

	const getSearch = event => {
		event.preventDefault();
		setQuery(search);
		setSearch('');
	};

	const onRecipe = (title, ingredients, image) => {
		setRecTitle(title);
		setRecIngrad(ingredients);
		setRecImg(image);
		setDrawer(true);
	};

	const onClouseHandler = () => {
		if (drawer) {
			setDrawer(false);
		}
	};

	return (
		<div className={classes.app}>
			<Recipe
				title={recTitle}
				ingredients={recIngrad}
				image={recImg}
				drawer={drawer}
				onClouseHandler={onClouseHandler}
			/>

			{drawer ? <Backdrop onClick={onClouseHandler} /> : null}

			<form className={classes.search_form} onSubmit={getSearch}>
				<input
					className={classes.search_input}
					type="text"
					value={search}
					onChange={updateSearch}
				/>
				<button className={classes.search_button} type="submit">
					Search
				</button>
			</form>
			<div className={classes.recipes}>
				{recipes.map((recipe, index) => {
					const res = recipe.recipe;
					return (
						<RecipeList
							key={index}
							title={res.label}
							ingredients={res.ingredients}
							calories={res.calories.toFixed(0)}
							image={res.image}
							onRecipe={onRecipe}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default App;
