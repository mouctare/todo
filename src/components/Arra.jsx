import React from "react";

export const Arra = () => {
  let friends = [
    ["tot", 24, "fille"],
    ["tata", 31, "garçon"],
  ];
  console.log(friends[0][1]);
  console.log(friends[1][0]);
  // Modifier un élémnent dans un tableau
  friends[1][0] = "jean";
  let array = [12, 10, 8, 6, 4, 2, 0];
  let obj = { a: 1, b: 2, c: 3, d: 4 };
  for (value in obj) {
    console.log(value + " =  " + obj[value]);
    // Array.prototype veut dire que la fonction est utilisable uniquement sur les array
    // la function forEach est composée d'une function callback, une value , un idex, et un array .forEach(callback(value, index, array));
  }
  // Ici on accède au premier tablueau et à la prémière value de ce tableau
  // Les arrays sont un endroit où on va stoker plusieurs données
  const myArray = [5, 6, 4, 3, 1, 2, 4];
  myArray.forEach((item) => console.log(item));
  // C'est à dire pour chaque chiffre dans mon array est dans l'ordre. un array peut contenir plusieurs objets
  const dices = [
    { name: "des #1", value: 5, inline: true },
    { name: "des #2", value: 3, inline: true },
    { name: "des #3", value: 4, inline: true },
  ];
  //dices.forEach((item) => console.log(item.value)); faire le total
  let total = 0;
  dices.forEach((e) => {
    // e corespond à chaque objet dans notre array
    total += e.value;
    // const helloWorld = _ => console.log("Salut")
    // Si on met un endscor cela veut dire qu'on a pas d'argument on puet également mettre les deux parenthéses
    // const helloWorld = () => console.log("Salut")
    // pour un argument const myName = name => console.log(`Bonjour à vous  ${name}`);
    // Par contre à partir de deux arguments et plus , il faut obligatroiment mettre les parenthéses
    const multiplication = (x, y) => x * y;
    // Donc une seulle expréssion pas d'accolade pas de return à partir de deux expression accolade et return obligatoire
    //  pour declare une fonction dans un objet il faut obligatoirement des
    // Une fonction est quelque chose qui prend entrée quelque chose et en sorti renvoi quelque chose exemple une olienne prend entrée du vend et
    // retourne de l'éléctricité; le javaScript ne fait le controle des paramètres c'est pour cela si on ne donne pas tous les arguments passé au préalable
    // à la function , on aura NaN les trois === servent à tester le type
    const foo = () => ({
      name: "Alex",
    });
  });
  const multiplication = (x, y) => {
    const total = x * y;
    return total;
  };

  return <div></div>;
};
