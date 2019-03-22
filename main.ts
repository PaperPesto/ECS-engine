import {Entity, Component} from './ecs';

// creo l'entity
//let pg = new Entity("Bardonecchio");

// creo due component
let forza = new Component("Forza", 16);
let destrezza = new Component("Destrezza", 12);

// Aggancio l'entity ai due component
// creo un dictionary. qui il nome della caratteristica è una chiave primaria
let pg: {[id: number] : Component;} = {}
pg["forza"] = forza;
pg["destrezza"] = destrezza;

console.log(pg);