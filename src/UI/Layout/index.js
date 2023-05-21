import Header from '../Header';
import Main from '..//Main';
import Footer from '../Footer';
import './index.css';
const Layout = () => {
    return (
        <div className='container'>
            <div className='page-content'>
                <Header />
                <Main />
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
