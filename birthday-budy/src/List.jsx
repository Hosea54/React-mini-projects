import { useState } from "react";
import data from "./data";
import Person from "./Person";
const List = () => {
  const [person, setPerson] = useState(data);
  const buttonHandler = () => {
    setPerson([]);
  };
  return (
    <section className="container">
      <h2>we have {person.length} birthdays today</h2>
      {person.map((people) => {
        return (
          <Person key={people.id} {...people} buttonHander={buttonHandler} />
        );
      })}
      <button className="btn btn-block" onClick={buttonHandler}>
        clear all
      </button>
    </section>
  );
};
export default List;
