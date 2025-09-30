import Item from "./Item";

const ItemList = ({ menuItems }) => {
  return (
    <section className="section-center">
      {menuItems.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </section>
  );
};
export default ItemList;
