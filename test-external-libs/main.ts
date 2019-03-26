// docs https://github.com/silentmatt/expr-eval

import {Parser} from '../node_modules/expr-eval';

var parser = new Parser();

// or
Parser.evaluate('6 * x', { x: 7 }) // 42

// Il system tira fuori la matematica dal component_matematica dell'entità
// Nel caso più generico sarà un array di [expr, target]
const component_matematica = {
    expr: '2 * mod_for + 1',
    target: 'forza'
}

// il system vede che c'è mod_for nella formula e -cerca di- tirare fuori il component del modificatore alla forza dall'entity
const mod_for_component = {
    value: -1
}

// il system si fà dare il component target, cioé forza, e fa il calcolo della formula
const forza_component = {
    value: 16
}

let actualModifica = parser.parse(component_matematica.expr).evaluate({mod_for: mod_for_component.value});
console.log('Modificatore alla forza:', actualModifica);

// upgrado il component della forza
console.log('Forza prima:', forza_component.value);
forza_component.value += actualModifica;
console.log('Forza dopo:', forza_component.value);