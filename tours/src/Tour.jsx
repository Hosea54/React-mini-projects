import { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readmore, setReadmore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>

        <p className="tour-info">
          {readmore ? info : `${info.substring(0, 100)}... `}
          <button className="info-btn" onClick={() => setReadmore(!readmore)}>
            {readmore ? "show less" : "read more"}
          </button>
        </p>
        <button
          type="button"
          className="delete-btn btn-block btn"
          onClick={() => removeTour(id)}
        >
          Remove tour
        </button>
      </div>
    </article>
  );
};
export default Tour;
