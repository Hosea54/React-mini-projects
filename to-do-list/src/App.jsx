import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import ItemList from "./ItemList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};
const defaultList = JSON.parse(localStorage.getItem("list") || "[]");
const App = () => {
  const [showItem, setShowItem] = useState(defaultList);

  const addItem = (itemName) => {
    const newItem = {
      id: nanoid(),
      isCompleted: false,
      name: itemName,
    };
    const newItems = [...showItem, newItem];
    setShowItem(newItems);
    setLocalStorage(newItems);
  };
  const deleteBtn = (id) => {
    const newList = showItem.filter((itemId) => itemId.id !== id);
    setShowItem(newList);
    setLocalStorage(newList);
    toast.success("item removed");
  };
  const editItem = (id) => {
    const newItems = showItem.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, isCompleted: !item.isCompleted };
        return newItem;
      }
      return item;
    });
    setShowItem(newItems);
    setLocalStorage(newItems);
  };
  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <ItemList showItem={showItem} deleteBtn={deleteBtn} editItem={editItem} />
    </section>
  );
};

export default App;
