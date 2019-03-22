import {v4 as uuid} from 'uuid';

export class Entity {
    name: string;
    id: string;

    constructor(name: string){
        this.name = name;
        this.id = uuid();
    }
}

export class Component {
    name: string;
    value: number;

    constructor(name: string, value: number){
        this.name = name;
        this.value = value;
    }
}

export class ForzaSystem {

}