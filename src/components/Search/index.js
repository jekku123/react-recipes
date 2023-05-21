import classes from './index.module.css';

const Search = () => {
    return (
        <>
            <h3>Search from listed pokemons</h3>

            <div className='search'>
                <input
                    type='text'
                    id='search-input'
                    placeholder='Search for pokemon..'
                />
            </div>
        </>
    );
};

export default Search;
