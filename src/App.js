import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './UI/Layout';
import Home from './pages/Home';
import RecipeList from './pages/RecipeList';
import CreateRecipe from './pages/CreateRecipe';
import RecipeDetails from './pages/RecipeDetails';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='/recipes' element={<RecipeList />} />
                        <Route path='/create' element={<CreateRecipe />} />
                        <Route
                            path='/recipes/:name'
                            element={<RecipeDetails />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
