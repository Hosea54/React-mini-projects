import FilterButtons from "./FilterButtons";
import ItemList from "./ItemList";
import Title from "./Title";
import menu from "./data";
import { useState } from "react";
const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [category, setCategory] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(menu);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newMenu = menu.filter((item) => item.category === category);
    setMenuItems(newMenu);
  };
  return (
    <main className="menu">
      {console.log(menuItems)}
      <Title title="menu items" />
      <FilterButtons
        menuItems={menuItems}
        category={category}
        filterItems={filterItems}
      />
      <ItemList menuItems={menuItems} />
    </main>
  );
};
export default App;
