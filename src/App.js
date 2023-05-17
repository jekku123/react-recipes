import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './UI/Layout';
import Home from './pages/Home';
import RecipeList from './pages/RecipeList';
import RecipeInfo from './pages/RecipeInfo';
import CreateRecipeForm from './pages/CreateRecipeForm';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/recipes' element={<RecipeList />} />
            <Route path='/recipes/create' element={<CreateRecipeForm />} />
            <Route path='/recipes/:name' element={<RecipeInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
