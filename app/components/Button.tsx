"use client";

import { IconType } from "react-icons";

interface Props {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  outline?: boolean;
  disabled?: boolean;

  small?: boolean;
  icon?: IconType;
}

export default function Button({
  label,
  onClick,
  outline,
  disabled,
  small,
  icon: Icon,
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative disable:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full 
      ${
        outline
          ? "bg-white border-black text-black"
          : "bg-rose-500 border-rose-500 text-white"
      }
      ${
        small
          ? "py-1 text-sm font-light border-[1px]"
          : "py-3 text-md font-semibold border-2"
      }
      `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
}
