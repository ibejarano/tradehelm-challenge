import React from "react";

import styles from "./Item.module.scss";
interface Props {
  onDelete: VoidFunction;
}

const Item: React.FC<Props> = ({ children, onDelete }) => {
  return (
    <li className={styles.container}>
      <p>{children}</p>
      <button onClick={onDelete}>delete</button>
    </li>
  );
};

export default Item;
