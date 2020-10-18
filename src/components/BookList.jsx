import React from "react";
import Book from "../components/Book";

const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/610XW8KT1qL._AC_SL1000_.jpg",
    title: "I LOVE You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/610XW8KT1qL._AC_SL1000_.jpg",
    title: "I LOVE You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id: 3,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/610XW8KT1qL._AC_SL1000_.jpg",
    title: "I LOVE You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id: 4,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/610XW8KT1qL._AC_SL1000_.jpg",
    title: "I LOVE You to the Moon and Back",
    author: "Amelia Hepworth",
  },
];
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
        // return <Book key={book.id} book={book} />;
      })}
    </section>
  );
}

export default BookList;
