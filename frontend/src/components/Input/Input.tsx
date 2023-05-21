import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

function Input({ placeholder, ...props }: InputProps) {
  return (
    <input
      className="register-company__input"
      placeholder={placeholder}
      required
      {...props}
    />
  );
}

export default Input;
