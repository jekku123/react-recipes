import { NavLink } from 'react-router-dom';
import classes from './index.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/recipes'>Recipes</NavLink>
                </li>
                <li>
                    <NavLink to='/recipes/create'>Add new recipe</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
