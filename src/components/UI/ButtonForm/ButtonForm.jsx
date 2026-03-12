import classes from '../ButtonForm/ButtonForm.module.scss';

function ButtonForm({children, ...props}) {
    return (
        <button {...props}>{children}</button>
    )
}

export default ButtonForm;