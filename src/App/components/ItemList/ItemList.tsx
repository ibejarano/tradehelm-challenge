import React from "react";

import styles from "./ItemList.module.scss";

const ItemList: React.FC = ({ children }) => {
  return <ul className={styles.container}>{children}</ul>;
};

export default ItemList;
