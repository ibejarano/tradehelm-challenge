import * as React from "react";

import styles from "./App.module.scss";

import ItemList from "../App/components/ItemList";
import Item from "../App/components/Item";
import Modal from "../App/components/Modal";
import AddItem from "../App/components/AddItem";

import { IItem } from "../types/Item";

const App: React.FC = () => {
  const [modalOpen, toggleModal] = React.useState<boolean>(false);
  const [items, setItems] = React.useState<IItem[]>([
    {
      text: "Hola mundo",
      id: "123",
    },
    {
      text: "Adios mundo",
      id: "456",
    },
  ]);

  const handleDelete = (deleteId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id != deleteId));
  };

  const handleAddItem = (text: string) => {
    setItems((prevItems) =>
      prevItems.concat({ id: (Math.random() * 1000000).toFixed(2), text })
    );
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>Supermarket List</h1>
        <h3>{items.length} item(s)</h3>
      </header>
      <ItemList>
        {items.map((item) => (
          <Item key={item.id} onDelete={() => handleDelete(item.id)}>
            {item.text}
          </Item>
        ))}
      </ItemList>
      <Modal modalOpen={modalOpen} toggleModal={toggleModal}>
        <AddItem onAddItem={handleAddItem} />
      </Modal>
    </main>
  );
};

export default App;
