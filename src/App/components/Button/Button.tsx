import React from "react";

import styles from "./Button.module.scss";
interface Props {
  action: VoidFunction;
  disabled?: boolean;
  text: string;
  variant?: boolean;
}

const Button: React.FC<Props> = ({
  action,
  text,
  disabled = false,
  variant = false,
}) => {
  return (
    <button
      onClick={action}
      className={variant ? styles.secondary : styles.primary}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
