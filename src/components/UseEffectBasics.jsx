import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const UseEffectBasics = () => {
  // par défaut, s'exécute après chaque nouvelle présentation
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    // console.log(users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3>github Users</h3>
      <ul>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectBasics;
