import { ECSSession } from './core/ECSSession';
import { Entity } from './core/Entity';
import { Component, ModificatoreComponent, Effect } from './core/Component';
import { RootProperty } from './core/RootProperty';

import filtrex from "./external-libs/filtrex";

// creo la sessione
const session = new ECSSession();

// creo il pg
const bardonecchio = new Entity('pg0');
console.log(bardonecchio);

// Creo il component del nome e della forza
const bardonecchioNameComponent = new Component('name', 'Bardonecchio');
const forzaComponent = new Component('forza', 'forza');

// Associo i component al pg
session.map[bardonecchio.id] = [];
session.map[bardonecchio.id].push(bardonecchioNameComponent);
session.map[bardonecchio.id].push(forzaComponent);
console.log('bardonecchio\'s components', session.map[bardonecchio.id]);

// creo il JOAT - teoricamente associato a bardonecchio
const jackOfAllTrades = new Entity('tal0');
const joatNameComponent = new Component('name', 'Jack of all trades');
const joatModificatoreComponent = new ModificatoreComponent('modificatore',
    [
        new Effect('effetto di test', [`$${bardonecchio.id}.name$==\'pippo\'`], '5', ['forza']),
        new Effect('modifica la forza', ['true'], '0.5 * forza', ['forza']),
        new Effect('modifica la destrezza', ['true'], '0.5 * destrezza', ['destrezza'])
    ]);
session.map[jackOfAllTrades.id] = [];
session.map[jackOfAllTrades.id].push(joatNameComponent);
session.map[jackOfAllTrades.id].push(joatModificatoreComponent);
console.log('JOAT\'s components', session.map[jackOfAllTrades.id]);

// SYSTEM ---------------------------------------------------------------

// prendo tutti i component "modificatore" dentro la session e li risolvo
// ...
// ad un certo punto prenderò il component joatModificatoreComponent, dato che è di tipo 'modificatore'
// il system fa 4 cose
// 1 - estrae gli effetti dal component
// 2 - per ogni effetto valuta se le conditions sono verificate
// 3 - Se le conditions sono verificate calcola il valore della modifica
// 4 - Modifica il component del target del valore della modifica al punto 3
// I punti 2, 3 e 4 necessitano di un "parser" che acquisisca i component da dentro la stringa e li cerchi all'interno della session

// 1
const effetti = joatModificatoreComponent.effects;
effetti.forEach(effetto => {
    // 2
    console.log('effetto', effetto);

    const conditions = effetto.conditions;
    conditions.forEach(condition => {
        console.log('condition', condition);
        let conditionParsed: boolean = false;

        // Qui ci sarà una classe che parsa la stringa "name=='pippo'"" e restituisce il component corretto, cioé il component 'name' del pg
        const parsedKeyValue: RootProperty[] = ParseString_KeyValue(condition);

        if (parsedKeyValue) {
            console.log('parsedKeyValue', parsedKeyValue);

            parsedKeyValue.forEach(x => {
                let entity = session.getEntityById(x.root);
                let component = session.getComponentsByTypeAndEntityId(x.root, x.property);
                console.log('entity from session', entity);
                console.log('component from session', component);
            });

            // adesso posso valutare la condizione logica della condition $name$==\'pippo\'
            // Mi serve una classe ad hoc che sostituisce $name$ con il nome giusto
            // faccio il controllo se ho check oppure no

            // .. rimasto qui
        } else {
            // ... rimasto qui
        }


        if (conditionParsed) {
            // OK
            // 3 - calcolo l'effetto
            const value = effetto.value;
            // stesso discorso di prima, parso la stringa e mi faccio dare i component interessati
            // prendo i valori dei component e ci calcolo il value

            // 4 - Prendo il component target e lo aggiorno
        } else {
            // KO
            // return
        }
    });
});



// da esternalizzare ----------------------------------------------
function ParseString(input: string): string[] {
    let split = input.split('$');
    console.log('split', split);

    var filtered = split.filter(function (element, index, array) {
        return ((index + 1) % 2 === 0);
    });

    return filtered;
}

function ParseString_KeyValue(input: string): RootProperty[] {
    let split = input.split('$');
    console.log('split', split);

    var filtered = split.filter(function (element, index, array) {
        return ((index + 1) % 2 === 0);
    });

    console.log('filtered', filtered);

    let keyValueArray: RootProperty[] = [];

    filtered.forEach(x => {
        let rp = new RootProperty(x.split('.')[0], x.split('.')[1]);
        keyValueArray.push(rp)
    });

    return keyValueArray;
}