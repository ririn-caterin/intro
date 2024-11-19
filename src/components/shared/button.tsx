import { MouseEventHandler, ReactNode } from "react";

type ButtonColors = "primary" | "info" | "danger" | "warning";

type ButtonVariants = "full" | "outline" | "text";

type ButtonProps = {
  color?: ButtonColors;
  variant?: ButtonVariants;
  type?: "submit" | "reset" | "button";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

const stylesMap: Record<ButtonColors, Record<ButtonVariants, string>> = {
  primary: {
    full: "border-blue-700 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white",
    outline:
      "border-blue-700 bg-white hover:bg-blue-50 active:bg-blue-100 text-blue-700",
    text: "border-transparent text-blue-700 hover:text-blue-800",
  },
  info: {
    full: "border-cyan-400 bg-cyan-400 hover:bg-cyan-500 active:bg-cyan-600 text-white",
    outline:
      "border-cyan-400 bg-white hover:bg-cyan-50 active:bg-cyan-100 text-cyan-500",
    text: "border-transparent text-cyan-500 hover:text-cyan-600",
  },
  danger: {
    full: "border-red-600 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white",
    outline:
      "border-red-600 bg-white hover:bg-red-50 active:bg-red-100 text-red-600",
    text: "border-transparent text-red-600 hover:text-red-700",
  },
  warning: {
    full: "border-yellow-400 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-white",
    outline:
      "border-yellow-400 bg-white hover:bg-yellow-50 active:bg-yellow-100 text-yellow-500",
    text: "border-transparent text-yellow-500 hover:text-yellow-600",
  },
};

export const Button = ({
  color = "primary",
  variant = "full",
  type,
  onClick,
  children,
}: ButtonProps) => {
  const baseClassname = "rounded-md px-3 py-2 border";
  const className = `${baseClassname} ${stylesMap[color][variant]}`;

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};
