const Item = ({ category, price, title, desc, img }) => {
  return (
    <article className="menu-item">
      <img src={img} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price">${price}</span>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};
export default Item;
