import { IItem } from "../types/Item";

const MOCK_ITEMS: IItem[] = [
  { id: "1", text: "De la api 1" },
  {
    id: "2",
    text: "de la api 2",
  },
];

function generateId() {
  return (Math.random() * 1000000).toFixed(2);
}

export default {
  getItems: (): Promise<IItem[]> => {
    return new Promise<IItem[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(MOCK_ITEMS);
      }, 1000);
    });
  },
  addItem: (text: IItem["text"]): Promise<IItem> => {
    return new Promise<IItem>((resolve, reject) => {
      setTimeout(() => {
        resolve({ id: generateId(), text });
      }, 1000);
    });
  },

  deleteById: (id: string): Promise<IItem["id"]> => {
    return new Promise<IItem["id"]>((resolve, reject) => {
      setTimeout(() => {
        resolve(id);
      }, 600);
    });
  },
};
