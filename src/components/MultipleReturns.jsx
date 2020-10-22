import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users/mouctare";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>;
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h2>Error...</h2>;
      </div>
    );
  }
  return (
    <>
      <h2>{user}</h2>
      {isError && <h1>Error...</h1>}
      {isError ? <p>there is an error...</p> : <div>there is no error</div>}
    </>
  );
};
export default MultipleReturns;
