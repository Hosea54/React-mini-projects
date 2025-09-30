const FilterButtons = ({ category, filterItems }) => {
  return (
    <div className="btn-container">
      {category.map((category) => {
        return (
          <button
            className="btn"
            type="button"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default FilterButtons;
