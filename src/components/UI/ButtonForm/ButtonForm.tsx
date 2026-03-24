type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
const ButtonForm: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default ButtonForm;
