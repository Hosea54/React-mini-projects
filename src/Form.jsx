import React, { useState } from "react";
import { toast } from "react-toastify";
const Form = ({ addItem }) => {
  const [itemValue, setItemValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemValue) {
      toast.error("No Value entered");
      return;
    }

    addItem(itemValue);
    toast.success("Item added Successfully");
    setItemValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>To Do List</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={itemValue}
          onChange={(e) => setItemValue(e.target.value)}
        />
        <button type="submit" className="btn">
          Add items
        </button>
      </div>
    </form>
  );
};

export default Form;
