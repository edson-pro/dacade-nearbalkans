import React from "react";

export default function Button({ children, variant, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${
        variant === "normal"
          ? "bg-transparent text-zinc-700  border-transparent"
          : variant === "outlined"
          ? "border-zinc-700 text-zinc-700"
          : "bg-zinc-700 text-white  border-accent"
      }   focus:outline-none cursor-pointer leading-4 transition-250ms w-fit border-solid border rounded-full px-5 py-3 rounded-4xl inline-block`}
    >
      {children}
    </button>
  );
}
