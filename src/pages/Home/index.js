import HeroBanner from '../../components/HeroBanner';
import Card from '../../components/UI/Card';
import classes from './index.module.css';

const Home = () => {
    return (
        <div className={classes.home}>
            <HeroBanner />
            <h3>Looking for the recipes?</h3>
            <div className={classes.cards}>
                <Card
                    title='Browse recipes'
                    content='Find your favourites in this collection. You can search recipes based on name or country'
                    path='/recipes'
                    link='All recipes'
                />
                <Card
                    title='Add recipes'
                    content='Recipe from your country is missing? No worries, add one!'
                    path='/create'
                    link='Add recipes'
                />
                <Card
                    title='Want to know more about our projects?'
                    content='Visit our programme homepage'
                    path='https://en.bc.fi/qualifications/full-stack-web-developer-program/'
                    link='Business College Helsinki homepage'
                />
            </div>
        </div>
    );
};

export default Home;
