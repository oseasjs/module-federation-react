const pokemon = require("./pokemon-data");

const getPokemonPrice = ({ base }) =>
  Math.round(Object.values(base).reduce((a, n) => a + n) / 6);

const pokemonWithPrices = pokemon.map((p) => ({
  ...p,
  price: getPokemonPrice(p),
}));

const getProductById = (id) => {
  const qId = parseInt(id);
  return pokemonWithPrices.find(({ id }) => id === qId) || null;
};

const searchProduct = (name) => 
  pokemonWithPrices
    .filter(({ name: { english } }) => english.toLowerCase().includes(name))
    .map((pokemon) => ({
      ...pokemon,
    }))
    .slice(0, 30)

const getProductImage = (pokemon) => {
  // return `http://localhost:9020/images/${pokemon.name.english.toLowerCase().replace(" ", "-")}.jpg`
  return `https://github.com/oseasjs/module-federation-react/tree/main/applications/home/public/images/${pokemon.name.english.toLowerCase().replace(" ", "-")}.jpg`
}

module.exports = {
  getProductById,
  searchProduct,
  getProductImage
};
      