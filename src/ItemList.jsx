import SingleItem from "./SingleItem";

const ItemList = ({ showItem, deleteBtn, editItem }) => {
  return (
    <div className="items">
      {showItem.map((item) => {
        return (
          <SingleItem
            item={item}
            key={item.id}
            deleteBtn={deleteBtn}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};
export default ItemList;
