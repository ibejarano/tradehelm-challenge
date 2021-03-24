import React from "react";

interface Props {
  action: () => void;
  text: string;
}

const Button: React.FC<Props> = ({ action, text }) => {
  return <button onClick={action}>{text}</button>;
};

export default Button;
