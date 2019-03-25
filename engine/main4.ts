// Provo ad utilizzare
// 1 - math.js (libreria per evaluating al volo una stringa e buildare un'espressione matematica)
// 2 - Filtrex (parsing condizioni booleane)

// la roba in capslock viene da un enum

// entity - associazione per composizione invece che dictionary
const entity_pg = {
    nome: 'gambo Fiore',
    components: [
        {
            nome: 'CLASSE',
            value: 'elfo'
        },
        {
            nome: 'FORZA',
            value: 18
        },
        {
            nome: 'DESTREZZA',
            value: 14
        },
        {
            nome: 'COSTITUZIONE',
            value: 17
        },
        {
            nome: 'CARICA',
            value: false
        },
        {
            nome: 'VOLARE',
            value: true
        },
        {
            nome: 'DANNO',
            value: 0
        },
        {
            nome: 'TALENTI',
            value: [
                'CaricaDellElfoVolante'
            ]
        }
    ]
};

// entity
const entity_caricaDellElfoVolante = {
    nome: 'CaricaDellElfoVolante',
    components: [
        {
            nome: 'MODIFICA',
            effects: [
                {
                    value: '10 + 0.5 * DESTREZZA',
                    target: 'FORZA',
                    condition: 'FORZA % 4 == 0'
                },
                {
                    value: '10',
                    target: 'DESTREZZA',
                    condition: 'true'
                }
            ]
        }
    ]
};

// simulo system
let talenti = {
    nome: 'TALENTI',
    value: [
        'CaricaDellElfoVolante'
    ]
}

console.log('talenti', talenti);

