import {v4 as uuid} from 'uuid';

export class Entity {
    name: string;
    id: string;
    components: Component[] = [];

    constructor(name: string){
        this.name = name;
        this.id = uuid();
    }

    addComponent(component: Component){
        this.components.push(component);
    }

    removeComponent(componentName: string){
        this.components = this.components.filter(component => component.name !== componentName);
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