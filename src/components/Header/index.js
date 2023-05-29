import { Link } from 'react-router-dom';
import Nav from '../UI/Nav';
import classes from './index.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <Link to='/'>
                <h1>Recipes App</h1>
            </Link>
            <Nav />
        </header>
    );
};

export default Header;
