import * as React from "react";

import styles from "./App.module.scss";
import api from "../api";

import ItemList from "../App/components/ItemList";
import Item from "../App/components/Item";
import Modal from "../App/components/Modal";
import AddItem from "../App/components/AddItem";
import Button from "../App/components/Button";

import { IItem } from "../types/Item";

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [items, setItems] = React.useState<IItem[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const handleDelete = (deleteId: string) => {
    api.deleteById(deleteId).then((id) => {
      setItems((prevItems) => prevItems.filter((item) => item.id != id));
    });
  };

  const handleAddItem = (text: string) => {
    api.addItem(text).then((newItem) => {
      setItems((prevItems) => prevItems.concat(newItem));
      toggleModal();
    });
  };

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  React.useEffect(() => {
    api.getItems().then((data) => {
      console.log("pinto effect");
      setItems([...data]);
      setLoading(false);
    });
  }, []);

  if (loading) return <h3>Loading...</h3>;

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
      <Button action={toggleModal} text="Add Item" />
      <Modal modalOpen={modalOpen}>
        <AddItem onAddItem={handleAddItem} toggleModal={toggleModal} />
      </Modal>
    </main>
  );
};

export default App;
