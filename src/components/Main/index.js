import { Outlet } from 'react-router-dom';
import './index.css';

const Main = () => {
    return (
        <main>
            <Outlet />
        </main>
    );
};

export default Main;
