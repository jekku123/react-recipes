import classes from './index.module.css';
const { countryOptions } = require('../../data/countries.json');

const Select = ({ name, value, handler, errors }) => {
    return (
        <div className={classes.container}>
            <label htmlFor='country'>Recipe is from</label>
            <select name={name} id={name} value={value} onChange={handler}>
                <option value='' default>
                    Choose a country
                </option>
                {countryOptions.map((country) => (
                    <option key={country.code} value={country.code}>
                        {country.name}
                    </option>
                ))}
            </select>
            <span>{errors}</span>
        </div>
    );
};

export default Select;
