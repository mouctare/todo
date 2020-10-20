import React from "react";
import "./App.css";
import BookList from "./components/BookList";
import Todo from "./components/Todo";
import UseStateBasics from "./components/UseStateBasics";

//<Todo/>
function App() {
  return (
    <div>
      <BookList />
      <UseStateBasics />
    </div>
  );
}

export default App;
