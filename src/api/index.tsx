import { IItem } from "../types/Item";

const LOCAL_STORAGE_NAME = "tradehelm-challenge-api";

let db: IItem[] = [];

const localSave: string | null = window.localStorage.getItem(LOCAL_STORAGE_NAME);

if (localSave) {
  db.push(...JSON.parse(localSave));
}

function generateId() {
  return (Math.random() * 1000000).toFixed(0);
}

export default {
  getItems: (): Promise<IItem[]> => {
    return new Promise<IItem[]>((resolve, _) => {
      setTimeout(() => {
        resolve(db);
      }, 1000);
    });
  },
  addItem: (text: IItem["text"]): Promise<IItem> => {
    return new Promise<IItem>((resolve, _) => {
      setTimeout(() => {
        const newItem: IItem = { id: generateId(), text };

        db.push(newItem);
        window.localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(db));

        resolve(newItem);
      }, 1000);
    });
  },

  addMultipleItem: (textList: IItem["text"][]): Promise<IItem[]> => {
    return new Promise<IItem[]>((resolve, _) => {
      setTimeout(() => {
        const newItems: IItem[] = textList.map((text) => ({
          id: generateId(),
          text,
        }));

        db.push(...newItems);
        window.localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(db));

        resolve(newItems);
      }, 1000);
    });
  },

  deleteById: (id: string): Promise<IItem["id"]> => {
    return new Promise<IItem["id"]>((resolve, _) => {
      setTimeout(() => {
        db = db.filter((item) => item.id != id);
        window.localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(db));

        resolve(id);
      }, 600);
    });
  },
};
