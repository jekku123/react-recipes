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
            <div className={classes.gridContainer}>
                <div className={classes.gridItem}>
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
                </div>
                <div className={classes.gridItem}>
                    <p>{data.description}</p>
                    <p>{data.author}</p>
                </div>
                <div className={classes.gridItem}>
                    <h3>Ingredients: </h3>
                    {data.ingredients?.map((ingredient, i) => (
                        <div className={classes.ingredientRow} key={i}>
                            {ingredient.quantity} - {ingredient.ingredient}
                        </div>
                    ))}
                </div>

                <div className={classes.gridItem}>
                    <h3>Preparation</h3>
                    <p>{data.instructions}</p>
                </div>
            </div>
        </div>
    );
};

export default RecipeInfo;
