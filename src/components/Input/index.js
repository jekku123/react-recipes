import classes from './index.module.css';

const Input = ({
    label,
    name,
    handler,
    value,
    type = 'text',
    idx = undefined,
    errors = undefined,
    placeholder = undefined,
    size = 'md',
}) => {
    return (
        <div className={classes.container}>
            <label htmlFor={name}>{label}</label>
            <input
                className={
                    (size === 'sm' && classes.sm) ||
                    (size === 'md' && classes.md) ||
                    (size === 'xl' && classes.xl)
                }
                type={type}
                id={name}
                name={name}
                data-idx={idx}
                onChange={handler}
                value={value}
                placeholder={placeholder}
            />
            <span>{errors}</span>
        </div>
    );
};

export default Input;
