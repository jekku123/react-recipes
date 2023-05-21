import classes from './index.module.css';

const TextArea = ({ label, name, handler, value, size = 'md' }) => {
    return (
        <div className={classes.container}>
            <label htmlFor={name}>{label}</label>
            <textarea
                className={
                    (size === 'sm' && classes.sm) ||
                    (size === 'md' && classes.md) ||
                    (size === 'xl' && classes.xl)
                }
                id={name}
                name={name}
                onChange={handler}
                value={value}
                rows='4'
                required
            ></textarea>
        </div>
    );
};

export default TextArea;
