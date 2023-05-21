import { useState } from 'react';
import RecipeCard from '../../components/RecipeCard';
import useAxios from '../../hooks/useAxios';
import classes from './index.module.css';
import Input from '../../components/Input';

const { url } = require('../../config/api.json');

const RecipeList = () => {
    const [searchInput, setSearchInput] = useState('');
    const [data, isLoading] = useAxios(url);

    return isLoading ? (
        <p>Loading..</p>
    ) : (
        <div className={classes.container}>
            <h2 className={classes.h2}>Search for recipes:</h2>
            <Input
                handler={(e) => setSearchInput(e.target.value)}
                placeholder='Search..'
                size='md'
            />
            <h3 className={classes.h3}>Our recipes</h3>
            <div className={classes.list}>
                {data
                    .filter((recipe) =>
                        recipe.name.toLowerCase().includes(searchInput)
                    )
                    .map((recipe) => (
                        <RecipeCard
                            key={recipe.id}
                            name={recipe.name}
                            country={recipe.country}
                            url={recipe.imageUrl}
                        />
                    ))}
            </div>
        </div>
    );
};

export default RecipeList;
