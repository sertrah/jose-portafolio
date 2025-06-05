import React from "react";

export enum ButtonAppearance {
  DEFAULT = "default",
  OUTLINED = "outlined",
  GHOST = "ghost",
  DANGER = "danger",
}

interface ButtonProps {
  appearance?: ButtonAppearance;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ appearance = ButtonAppearance.DEFAULT, children }) => {
  return (
    <button
      className={`font-bold mt-8 px-6 py-3 rounded shadow transition ${getButtonStyles(
        appearance
      )}`}
    >
      {children}
    </button>
  );
};

const getButtonStyles = (appearance: ButtonAppearance) => {
  switch (appearance) {
    case ButtonAppearance.OUTLINED:
      return "border border-2 border-gray-300 bg-transparent border-green-1 text-green-1 hover:bg-green-1 hover:text-white";
    case ButtonAppearance.GHOST:
      return "text-gray-300 bg-transparent hover:bg-gray-300 hover:text-black";
    case ButtonAppearance.DANGER:
      return "bg-red-500 text-white hover:bg-red-600";
    default:
      return "bg-gray-200 text-black hover:bg-gray-300";
  }
};

export default Button;
