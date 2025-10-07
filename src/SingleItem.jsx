import { useState } from "react";

const SingleItem = ({ item, deleteBtn, editItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isCompleted}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: "capitlize",
          textDecoration: item.isCompleted && "line-through",
        }}
      >
        {item.name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => deleteBtn(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
