// docs https://github.com/silentmatt/expr-eval

import { Parser } from '../node_modules/expr-eval';

var parser = new Parser();

// or
Parser.evaluate('6 * x', { x: 7 }) // 42

// Il system tira fuori la matematica dal component_matematica dell'entità "Carica dell'elfo volante"
// [expr, target, condition]
// condition è un array -> un array di condizioni logiche (unite da 'OR', 'AND', 'NOT')
const component_matematica = {
    effects: [
        {
            expr: '10', // Cioé da + 10 ai danni
            target: 'danni',
            condition: {
                bool_logic: 'AND',
                operands: [
                    // 1 - devi essere un elfo
                    {
                        left: 'classe',
                        comparisonSign: '==',
                        right: 'elfo'
                    },
                    // 2 - devi essere in carica
                    {
                        left: 'carica',
                        comparisonSign: '==',
                        right: 'true'
                    },
                    // 3 - devi essere in volo
                    {
                        left: 'volo',
                        comparisonSign: '==',
                        right: 'true'
                    }
                ]
            }
        },
        {
            expr: '2 * mod_for + 1',
            target: 'forza',
            condition: [

            ]
        },
        {
            // senza condition
            expr: '2 * des + 1',
            target: 'des'
        }
    ]
}

// il system vede che c'è mod_for nella formula e -cerca di- tirare fuori il component del modificatore alla forza dall'entity
const mod_for_component = {
    value: -1
}

// il system si fà dare il component target, cioé forza, e fa il calcolo della formula
const forza_component = {
    value: 16
}

let actualModifica = parser.parse(component_matematica.expr).evaluate({ mod_for: mod_for_component.value });
console.log('Modificatore alla forza:', actualModifica);

// upgrado il component della forza
console.log('Forza prima:', forza_component.value);
forza_component.value += actualModifica;
console.log('Forza dopo:', forza_component.value);