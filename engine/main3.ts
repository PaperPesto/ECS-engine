import {jsep} from '../node_modules/jsep/src/jsep';

let componentVolo = true;
let componentCarica = false;
let componentClasse = 'elfo';
let componentForza = 26;
let componentDanni = 1;

const boolean_condition = `${componentCarica} && ${componentVolo} && (${componentClasse}==='elfo')`;


console.log('jsep:', jsep('true || false'));