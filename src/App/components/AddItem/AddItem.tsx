import React from "react";

interface Props {
  onAddItem: (text: string) => void;
}

const AddItem: React.FC<Props> = ({ onAddItem }) => {
  const [text, setText] = React.useState<string>("");
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    onAddItem(text);
    setText("");
  };
  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setText(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add item</h3>
      <input
        type="text"
        placeholder="Type here..."
        value={text}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddItem;
