import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
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
