import * as React from "react";

import styles from "./App.module.scss";

import Button from "../App/components/Button";
import ItemList from "../App/components/ItemList";
import Item from "../App/components/Item";
import Modal from "../App/components/Modal";

import { IItem } from "../types/Item";

const App: React.FC = () => {
  const [modalOpen, toggleModal] = React.useState<boolean>(false);
  const [items, setitems] = React.useState<IItem[]>([
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
    setitems((prevItems) => prevItems.filter((item) => item.id != deleteId));
  };

  const handleAddItem = () => {
    setitems((prevItems) => prevItems.concat({ id: "678", text: "Agarrao" }));
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
        Estoy en el modal!
      </Modal>
    </main>
  );
};

export default App;
