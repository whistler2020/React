const produits = [
  {
    id: 1,
    name: "Riz",
    Image: "https://static4.depositphotos.com/1015060/448/i/950/depositphotos_4482309-stock-photo-rice-bowl.jpg",
    quantite : 0,
    desc: "nourriture alimentaire",
  },
  {
    id: 2,
    name: "viande",
    Image: "https://static4.depositphotos.com/1012068/316/i/950/depositphotos_3163785-stock-photo-assorted-raw-meats.jpg",
    quantite: 0,
    desc: "viande de boeuf",
  },
  {
    id: 3,
    name: "pain",
    Image: "https://st.depositphotos.com/1011514/1878/i/950/depositphotos_18783003-stock-photo-variety-of-bread.jpg",
    quantite: 0,
    desc: "pain avec farine blanc",
  },
  {
    id: 4,
    name: "lait",
    Image: "https://st.depositphotos.com/1011833/3195/i/950/depositphotos_31958787-stock-photo-milk-jug-and-glass-on.jpg",
    quantite: 0,
    desc: "lait de vache",
  },
  {
    id: 5,
    name: "papier toilette",
    Image: "https://media.istockphoto.com/vectors/toilet-paper-vector-id1220649965?s=612x612",
    quantite: 0,
    desc: "souple et facile a utiliser pour la toilette",
  },
  {
    id: 6,
    name: "boisson zazeuse",
    Image: "https://media.istockphoto.com/photos/set-of-drink-cans-picture-id459458845?s=2048x2048",
    quantite: 0,
    desc: "boisson de contenant pas trop d'alcool",
  },
];

const produit = {
  id: 1,
  name: "riz",
  quantite: 0,
  desc: "nourriture alimentaire",
};

export function searchProduit(term) {
  return produits.find((item) => item.name === term);
}

export function getProduits() {
  return produits;
}

export function readProduit(produitId) {
  return produit;
}

