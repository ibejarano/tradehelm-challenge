import React from "react";

import styles from "./Button.module.scss";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<Props> = ({ children, variant = "primary", ...props }) => {
  return (
    <button className={`${styles.container} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
