import React from "react";

import styles from "./Button.module.scss";
interface Props {
  action: VoidFunction;
  disabled?: boolean;
  text: string;
}

const Button: React.FC<Props> = ({ action, text, disabled = false }) => {
  return (
    <button onClick={action} className={styles.container} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
