import React from "react";

import Button from "../Button";
interface Props {
  onAddItem: (text: string) => void;
  toggleModal: () => void;
}

const AddItem: React.FC<Props> = ({ onAddItem, toggleModal }) => {
  const [text, setText] = React.useState<string>("");

  const handleAdd = () => {
    onAddItem(text);
    setText("");
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setText(event.currentTarget.value);
  };

  return (
    <div>
      <h3>Add item</h3>
      <input
        type="text"
        placeholder="Type here..."
        value={text}
        onChange={handleChange}
      />
      <Button action={handleAdd} text="Add" />
      <Button action={toggleModal} text="Cancel" />
    </div>
  );
};

export default AddItem;
