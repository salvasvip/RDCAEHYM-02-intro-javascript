import {heroes} from "../data/heroes";
// import {heroes, antiHeroes} from "../data/heroes";

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
// console.log(getHeroeById(4));

export const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === 'DC');
// console.log(getHeroeByOwner('DC'));

// console.log(antiHeroes);