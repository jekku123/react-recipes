import { useNavigate, useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import classes from './index.module.css';

const { url } = require('../../config/api.json');

const RecipeInfo = () => {
    const path = useParams();
    const navigate = useNavigate();
    const [data, isLoading] = useAxios(`${url}?name=${path.name}`);

    return isLoading || data.country === undefined ? (
        <p>Loading..</p>
    ) : (
        <div className={classes.container}>
            <h2>{data.name}</h2>

            <img
                className={classes.image}
                src={data.imageUrl}
                alt={data.name}
            />
            <img
                className={classes.flag}
                src={`https://flagsapi.com/${data.country}/shiny/64.png`}
                alt={data.country}
            />

            <h3>Ingredients: </h3>
            {data.ingredients?.map((ingredient, i) => (
                <p key={i}>
                    {ingredient.quantity} - {ingredient.ingredient}
                </p>
            ))}

            <p>Description: {data.description}</p>
            <p>Author: {data.author}</p>
            <p>Preparation: {data.instructions}</p>

            <button onClick={() => navigate(-1)}>Go back</button>
        </div>
    );
};

export default RecipeInfo;
