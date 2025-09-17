
// Opción: componente cliente
'use client';
import Link from "next/link";

type ButtonProps = {
  testId: string;
  label: string;
  href: string; // url destino
  variant?: "primary" | "secondary";
};

export const Button: React.FC<ButtonProps> = ({
  testId,
  label,
  href,
  variant = "primary",
}) => {
  const baseClasses =
    "px-8 py-3 rounded-lg m-2 font-semibold transition-colors inline-block";

  const variants = {
    primary: "bg-bonga-yellow text-bonga-blue font-bold hover:bg-yellow-300",
    secondary:
      "border-2 border-white text-white hover:bg-white hover:text-bonga-blue",
  };

  return (
    <Link
      href={href}
      data-testid={testId}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {label}
    </Link>
  );
};
