export class Component {
    name: string;

    constructor(name: string){
        this.name = name;
    }
}

export class ModificatoreComponent {
    name: string;

    effects: Effect[];
}

class Effect {
    name: string;

    conditions: string[];
    value: string;  // f(x)
    targets: string[];
}