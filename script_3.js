let etages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
etages = parseInt(etages);

// Vérifie si l'entrée est un nombre valide
if (!isNaN(etages) && etages > 0) {
  // Génère la pyramide
  for (let i = 1; i <= etages; i++) {
    // Espace et hashtags pour chaque étage
    let espace = " ".repeat(etages - i);
    let blocs = "#".repeat(i);
    console.log(espace + blocs);
  }
} else {
  console.log("Veuillez entrer un nombre valide.");
}