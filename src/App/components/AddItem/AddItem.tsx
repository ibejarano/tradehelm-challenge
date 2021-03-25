import React from "react";

import Button from "../Button";

import styles from "./AddItem.module.scss";
interface Props {
  onAddItem: (text: string) => void;
  onAddMultiple: (textList: string[]) => void;
  toggleModal: () => void;
}

const AddItem: React.FC<Props> = ({ onAddItem, onAddMultiple, toggleModal }) => {
  const [text, setText] = React.useState<string>("");

  const handleAdd = () => {
    if (text == "") return;
    else if (text.split(",").length) {
      const textList: string[] = text.split(",").map((t) => t.trim());

      onAddMultiple(textList);
    } else {
      onAddItem(text);
    }

    setText("Adding Item...");
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setText(event.currentTarget.value);
  };

  const handleKeyPress: React.KeyboardEventHandler = (event): void => {
    if (event.key == "Enter") {
      handleAdd();
    }
  };

  return (
    <div className={styles.container} tabIndex={0} onKeyPress={handleKeyPress}>
      <h3>Add item(s)</h3>
      <p>Hint: Type comma ( , ) between entries to add multiple items.</p>
      <input
        autoFocus
        placeholder="Type here..."
        type="text"
        value={text}
        onChange={handleChange}
      />
      <div>
        <Button variant="secondary" onClick={toggleModal}>
          Cancel
        </Button>
        <Button disabled={!(text.length > 0)} onClick={handleAdd}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default AddItem;
