import React from "react";

import styles from "./AddItem.module.scss";

import Button from "../Button";
interface Props {
  onAddItem: (text: string) => void;
  onAddMultiple: (textList: string[]) => void;
  toggleModal: () => void;
}

const AddItem: React.FC<Props> = ({
  onAddItem,
  onAddMultiple,
  toggleModal,
}) => {
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

  return (
    <div className={styles.container}>
      <h3>Add item(s)</h3>
      <p>Hint: Type comma ( , ) between entries to add multiple items.</p>
      <input
        autoFocus
        type="text"
        placeholder="Type here..."
        value={text}
        onChange={handleChange}
      />
      <div>
        <Button action={toggleModal} text="Cancel" variant={true} />
        <Button
          action={handleAdd}
          text="Add"
          disabled={text.length == 0 ? true : false}
        />
      </div>
    </div>
  );
};

export default AddItem;
