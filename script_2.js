function factorielle(n) {
  let resultat = 1;
  for (let i = 1; i <= n; i++) {
    resultat *= i;
  }
  return resultat;
}

let nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");
nombre = parseInt(nombre);

if (!isNaN(nombre) && nombre >= 0) {
  console.log("Le résultat est : " + factorielle(nombre));
} else {
  console.log("Veuillez entrer un nombre valide.");
}