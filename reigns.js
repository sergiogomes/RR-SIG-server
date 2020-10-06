const reigns = [
  { id: 0, name: "Random", creatures: ["Random"] },
  { id: 1, name: "Mankind", creatures: ["Humans"] },
  { id: 2, name: "Narnians", creatures: ["Centaurs, Fauns, Satirs"] },
  { id: 3, name: "Dark Forest", creatures: ["Elfs"] },
  { id: 4, name: "Under the Mountain", creatures: ["Dwarfs, Minotaurs"] },
  { id: 5, name: "Northern Mages", creatures: ["Gremilings, Mages"] },
  { id: 6, name: "East Tribes", creatures: ["Orcs, Ogres"] },
];

const getReign = (id) => reigns.find((reign) => reign.id === id);

module.exports = { getReign };
