interface Props {
  color?: "primary" | "secondary" | "success" | "danger" | "warning";
  buttonText: string;
  onClick: () => void;
}

const Button = ({ color = "warning", buttonText, onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
