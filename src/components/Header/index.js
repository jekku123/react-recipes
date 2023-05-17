import { Link } from 'react-router-dom';
import Nav from '../../UI/Nav';

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <h1>Recipes App</h1>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
