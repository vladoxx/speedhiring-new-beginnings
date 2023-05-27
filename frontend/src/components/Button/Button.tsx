import "./Button.css";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string; // Adicionando uma propriedade opcional para classNames adicionais
  width?: string;
}

export default function Button({
  text,
  onClick,
  className,
  width,
}: ButtonProps) {
  const buttonStyles = {
    width: width || "10.625rem",
  };

  const combinedClassName = `button__all ${className || ""}`;
  return (
    <button
      className={combinedClassName}
      style={buttonStyles}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
