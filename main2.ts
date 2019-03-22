import {Entity, Component} from './ecs';

// creo due entity, pg e un La cintura dei giganti
let pg = new Entity("Bardonecchio");
let cinturaDeiGiganti = new Entity("Cintura dei giganti");

// creo due component per il pg
let forza = new Component("Forza", 16);
let destrezza = new Component("Destrezza", 12);
// creo un component per la cintura dei giganti
let mod_forza = new Component("Mod_Forza", 1);

// aggiungo i component al pg
pg.addComponent(forza);
pg.addComponent(destrezza);
// aggiungo il component alla cintura
cinturaDeiGiganti.addComponent(mod_forza);

console.log(pg);

