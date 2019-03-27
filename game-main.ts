import { ECSSession } from './core/ECSSession';
import { Entity } from './core/Entity';
import { Component, ModificatoreComponent, Effect } from './core/Component';
import { Root_Property } from './core/RootProperty';


// creo la sessione
const session = new ECSSession();

// creo il pg
const bardonecchio = new Entity();
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
const jackOfAllTrades = new Entity();
const joatNameComponent = new Component('name', 'Jack of all trades');
const joatModificatoreComponent = new ModificatoreComponent('modificatore', [new Effect('modifica alla forza', [`$${bardonecchio.id}.name$==\'pippo\'`], '5', ['forza'])]);
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
    const conditions = effetto.conditions;
    conditions.forEach(condition => {
        console.log('condition', condition);

        // Qui ci sarà una classe che parsa la stringa "name=='pippo'"" e restituisce il component corretto, cioé il component 'name' del pg
        const parsedKeyValue: Root_Property[] = ParseString_KeyValue(condition);
        console.log('parsedKeyValue', parsedKeyValue);

        parsedKeyValue.forEach(x => {
            let entity = session.getEntityById(x);
            let component = session.getComponentByType(x);
            console.log('component from session', componentsFromSession);
        });
        // 27.03.2019 arrivato qui: questo metodo di utility restituisce tutti i component di tipo 'name'. Adesso devo traver un modo di selezionare solo quelli del pg (ancihé anche quello di joat).
        // Quindi qui sotto avrò a disposizione bardonecchioNameComponent
        const name = bardonecchioNameComponent.value;

        // adesso posso valutare la condizione logica della condition $name$==\'pippo\'
        // Mi serve una classe ad hoc che sostituisce $name$ con il nome giusto
        // faccio il controllo se ho check oppure no
        const conditionParsed = `${name === 'pippo'}`;

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

function ParseString_KeyValue(input: string): Root_Property[] {
    let split = input.split('$');
    console.log('split', split);

    var filtered = split.filter(function (element, index, array) {
        return ((index + 1) % 2 === 0);
    });

    console.log('filtered', filtered);

    let keyValueArray: Root_Property[] = [];

    filtered.forEach(x => {
        let rp = new Root_Property(x.split('.')[0], x.split('.')[1]);
        keyValueArray.push(rp)
    });

    return keyValueArray;
}