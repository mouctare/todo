import React, { useState } from "react";

export const UseStateArray = () => {
  const [people, setPeople] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });
  const changeMessage = () => {
    // setPeople({ message: "hello world" });
    // autre solution
    setPeople({ ...people, message: "hello world" });
  };
  return (
    <section style={{ margin: "4rem 0" }}>
      <h3>{people.name}</h3>
      <h3>{people.age}</h3>
      <h3>{people.message}</h3>
      <button onClik={changeMessage}>Change message</button>
    </section>
  );
};
