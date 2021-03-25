import React from "react";

import styles from "./Item.module.scss";
interface Props {
  onDelete: VoidFunction;
}

const Item: React.FC<Props> = ({ children, onDelete }) => {
  const [removing, setRemoving] = React.useState<boolean>(false);

  return (
    <li className={`${styles.container} ${removing && styles.removing}`}>
      <p>{children}</p>
      <button
        onClick={() => {
          setRemoving(true);
          onDelete();
        }}
      >
        delete
      </button>
    </li>
  );
};

export default Item;
