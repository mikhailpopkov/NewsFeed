import classes from "../Button/Button.module.scss";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className={classes.btn} {...props}>
      {children}
    </button>
  );
};

export default Button;
