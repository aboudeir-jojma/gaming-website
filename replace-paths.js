import fs from "fs";
import path from "path";

const targetFiles = [
  "./games.json",
  "./src/components/Hero.jsx",
  "./src/components/GameCard.jsx",
  // ajoute ici les fichiers à modifier
];

targetFiles.forEach(file => {
  let content = fs.readFileSync(file, "utf8");

  // remplacer .png ou .jpg par .webp et changer le dossier
  content = content.replace(/\/imggames\/(.*?)(\.png|\.jpg)/g, "/imggames-webp/$1.webp");

  fs.writeFileSync(file, content, "utf8");
  console.log(`✅ ${file} mis à jour`);
});
