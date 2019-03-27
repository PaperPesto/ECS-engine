export class Component {
    type: string;
    value: string;

    constructor(type: string, value: string) {
        this.type = type;
        this.value = value;
    }
}

export class ModificatoreComponent {
    name: string;
    effects: Effect[];

    constructor(name: string, effects: Effect[]) {
        this.name = name;
        this.effects = effects;
    }
}

export class Effect {
    name: string;

    conditions: string[];
    value: string;  // f(x)
    targets: string[];

    constructor(name: string, conditions: string[], value: string, targets: string[]) {
        this.name = name;
        this.conditions = conditions;
        this.value = value;
        this.targets = targets;
    }
}