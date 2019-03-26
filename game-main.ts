import {ECSSession} from './core/ECSSession';
import { Entity } from './core/Entity';
import { Component } from './core/Component';


// creo la sessione
const session = new ECSSession();

// creo il pg
const bardonecchio = new Entity();
console.log(bardonecchio);

// Creo il component del nome e della forza
const nameComponent = new Component('nome');
const forzaComponent = new Component('forza');

// Associo i component al pg
session.map[bardonecchio.id].push(nameComponent);
session.map[bardonecchio.id].push(forzaComponent);
console.log('sessione', session);