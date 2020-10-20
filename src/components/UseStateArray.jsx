import React from "react";

export const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    // removeItem réçoit en paramètre l'id de l'élément à supprimer
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      <button className="btn" onClick={() => setPeople([])}>
        {/*  Ici je nettoi tout le tableau car il fait référence au state */}{" "}
        clea items
      </button>
    </>
  );
};
