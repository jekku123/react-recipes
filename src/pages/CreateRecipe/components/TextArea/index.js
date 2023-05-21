import classes from './index.module.css';

const TextArea = ({ label, name, handler, value, size = 'md', errors }) => {
    return (
        <div className={classes.container}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.textarea}>
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
                <span>{errors}</span>
            </div>
        </div>
    );
};

export default TextArea;
