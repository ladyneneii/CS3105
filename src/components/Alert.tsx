interface Props {
  color: string;
  children: string;
}

const Alert = ({ color, children }: Props) => {
  return (
    <div className={`alert alert-${color}`} role="alert">
      {children}
    </div>
  );
};

export default Alert;
