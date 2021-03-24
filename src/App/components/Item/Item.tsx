import React from "react";

interface Props {
  onDelete: VoidFunction;
}

const Item: React.FC<Props> = ({ children, onDelete }) => {
  return (
    <li>
      {children} <button onClick={onDelete}>delete</button>{" "}
    </li>
  );
};

export default Item;
