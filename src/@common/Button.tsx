import React from "react";

interface ButtonSecondaryProps {
  children: React.ReactNode;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  className?: string;
  childrenClassName?: string;
  type: "primary" | "secondary";
  disbaled?: boolean;
  loading?: boolean;
  attributeType?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonSecondaryProps> = ({
  children,
  onClick,
  attributeType = "button",
  className,
  childrenClassName,
  type,
  disbaled = false,
  loading = false,
}) => {
  return (
    <button
      className={`py-4 rounded-lg text-sm border border-solid relative ${className} 
      ${
        type === "primary"
          ? `!bg-gradient-to-r from-green4 to-secondary border-transparent`
          : `bg-[#58BF5626] border-green4`
      }
      ${disbaled && "opacity-50 cursor-not-allowed"}
      `}
      onClick={onClick}
      disabled={disbaled}
      type={attributeType}
    >
      <div
        className={`loader absolute top-1/2  w-full ${
          loading ? "opacity-100" : "opacity-0"
        }
          `}
      >
        <span></span>
      </div>
      <span
        className={`font-semibold text-charcoal text-center ${childrenClassName} ${
          type === "primary"
            ? "!text-white"
            : ` bg-gradient-to-r from-green4 to-secondary text-transparent bg-clip-text`
        }
        ${loading ? "opacity-0" : "opacity-100"}
          `}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
