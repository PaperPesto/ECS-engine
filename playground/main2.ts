import {Entity, Component, System, ComponentType} from '../ecs';

// creo due entity, pg e un La cintura dei giganti
let pg = new Entity("Bardonecchio");
let cinturaDeiGiganti = new Entity("Cintura dei giganti");

// creo due component per il pg
let forza = new Component(ComponentType.Forza, "Forza", 16);
let destrezza = new Component(ComponentType.Destrezza, "Destrezza", 12);
// creo un component per la cintura dei giganti
let mod_forza = new Component(ComponentType.ModificatoreForza, "Mod_Forza", 1);

// aggiungo i component al pg
pg.addComponent(forza);
pg.addComponent(destrezza);
// aggiungo il component alla cintura
cinturaDeiGiganti.addComponent(mod_forza);

console.log('pre-pg', pg);

// raccolgo a mano le entities che "hanno" il component modificatore alla forza
let entities: Entity[] = [cinturaDeiGiganti];

// System
// do in pasto al service le entita coinvolte nella modifica della forza
let system = new System(entities, "ForzaSystem");
system.run();

console.log('post-pg', pg);