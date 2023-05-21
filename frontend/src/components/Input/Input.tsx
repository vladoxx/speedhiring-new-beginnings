import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: string;
}

function Input({ placeholder, type, ...props }: InputProps) {
  return (
    <input
      className="register-company__input"
      type={type}
      placeholder={placeholder}
      required
      {...props}
    />
  );
}

export default Input;
