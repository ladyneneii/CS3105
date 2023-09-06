import { ReactNode } from "react";

interface Props {
  color: "primary" | "secondary" | "danger";
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ color, children, onClick }: Props) => {
  return (
    <button type="button" className={`btn btn-${color}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
