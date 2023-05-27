import "./Button.css";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string; // Adicionando uma propriedade opcional para classNames adicionais
}

export default function Button({ text, onClick, className }: ButtonProps) {
  const combinedClassName = `button__all ${className || ""}`;
  return (
    <button className={combinedClassName} onClick={onClick}>
      {text}
    </button>
  );
}
