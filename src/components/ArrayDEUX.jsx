import React from "react";

export const ArrayDEUX = () => {
  let classeA = [
    {
      nom: "Marc",
      moyenne: 15,
    },
    {
      nom: "Many",
      moyenne: 8,
    },
    {
      nom: "Mala",
      moyenne: 3,
    },
    {
      nom: "Many",
      moyenne: 18,
    },
  ];

  let classeB = [
    {
      nom: "Mamo",
      moyenne: 15,
    },
    {
      nom: "Orange",
      moyenne: 8,
    },
    {
      nom: "Mal",
      moyenne: 3,
    },
    {
      nom: "Mrerr",
      moyenne: 18,
    },
  ];
  function affichzerQuiAlaMoyenne(eleves) {
    for (let i = 0; i < eleves.length; i++) {
      let eleve = eleves[i];
      if (eleves >= 10) {
        return eleve.nom + " la moyenne";
        // La méthode Math permet de traiter tous c'est qui opération mathématique en javascript
        // Math.round(465.42) on peut enchainer les méthodes
        // [data].join('--')
      }
    }
  }
  affichzerQuiAlaMoyenne(classeA);
  affichzerQuiAlaMoyenne(classeB);
  // Maintenant je veux créer un tableau qui contient tous les éléves qui ont la moyenne
  let alaMoyenne = function (eleves) {
    // Je crée un tableau vide qui va contenir l'ensemble des éleves qui ont la moyenne
    let moyennes = [];
    // Je veux parcourir tous les éléves verifier s'ils la moyenne et utilisé la function push pour rajouter les éléves qui ont la moyenne et
    // à la fin je renvois les eleves qui ont la moyenne
    for (let i = 0; i < eleves.length; i++) {
      let eleve = eleves[i];
      // cette variable eleve vérifie les eleves indivudielement
      if (eleve.moyenne >= 10) {
        moyennes.push(eleve);
      }
    }
    return moyenne;
  };
  console.log(alaMoyenne(classeA));
  let phrase =
    "Maintenant je veux créer un tableau qui contient tous les éléves qui ont la moyenne";
  const frequence = (phrase) => {
    let mots = phrase.toLowerCase().split("");
    let compteur = {};
    for (let i = 0; i < mots.length; i++) {
      let mot = mots[i]; // cette variable c'est le mot en question
      if (compteur[mot] == undefined) {
        compteur[mot] = 1;
      } else {
        compteur[mot]++;
      }
    }
    return frequence();
  };

  /*
  On separe notre phrase Grace Aux space (split)
  on cree un compteur
  Si le mot est dans le compteur, je l'increment 
  sinon je lui assigne la valeur 
  affiche compteur la methode split permet de séparer une string selon un critére defini
  */

  let eleve1 = {
    nom: "Mamo",
    notes: [15, 16, 20],
  };
  let eleve2 = {
    nom: "Orange",
    notes: [8, 10, 11],
  };
  // Renvoyer true si eleve1 a la meilleur moyenne que eleve2
  // On crée une function moyenne(eleve) et qui renvoit la moyenne de l'eleve
  // Les variables qui sont définis dans une fonction sont accéssible que dans la fonction dans laquelle elle est définis
  // dans les blocs les variables sont accessibles partotut
  const moyenne = (notes) => {
    let somme = 0;
    for (let i = 0; i < notes.length; i++) {
      somme = somme + notes[i];
    }
    return somme / notes.length;
  };
  let estMeilleur = (a, b) => {
    return moyenne(a.notes) > moyenne(b.notes);
  };
  moyenne(eleve1.notes);

  return <div></div>;
};
