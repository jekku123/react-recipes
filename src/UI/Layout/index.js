import Header from '../Header';
import Main from '..//Main';
import Footer from '../Footer';
import './index.css';
const Layout = () => {
    return (
        <div className='page-container'>
            <div className='page-content'>
                <Header />
                <Main />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
