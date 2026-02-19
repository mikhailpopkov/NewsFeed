import classes from '../Button/Button.module.scss';

function Button({children, ...props}) {
    return (
        <button className={classes.btn} {...props}>{children}</button>
    )
}

export default Button;