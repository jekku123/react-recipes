import classes from './index.module.css';

const Select = ({
    label,
    name,
    placeholder,
    options,
    value,
    handler,
    errors,
}) => {
    return (
        <div className={classes.container}>
            <label htmlFor={name}>{label}</label>
            <select
                name={name}
                id={name}
                value={value}
                onChange={handler}
                className={`${errors && classes.error}`}
            >
                <option value='' default>
                    {placeholder}
                </option>

                {options.map((option) => (
                    <option key={option.code} value={option.code}>
                        {option.name}
                    </option>
                ))}
            </select>
            <span>{errors}</span>
        </div>
    );
};

export default Select;
