import React from "react";

const Book = ({ img, title, author }) => {
  // attribute , eventHandler
  // Avec le spread opérator on peut également enlever la constant intérmédiaite et faire de la destructuration dans les props
  // C'est une étape essentielle à comprendre
  // Avec le spread opérator on peut envléver le props.book on péut choisr la méthode q'uon veut
  // const { img, title, author } = props;
  //const { img, title, author } = props.book;
  const clickHandler = (event) => {
    alert(event);
    alert("hello world");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(author);
      }}
    >
      <img src={img} />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        reference example
      </button>
    </article>
  );
};

export default Book;
