import {v4 as uuid} from 'uuid';

export class Entity {
    name: string;
    id: string;
    components: Component[] = [];

    constructor(name: string){
        this.name = name;
        this.id = uuid();
    }

    getComponent(componentName: string){
        return this.components.find(x => x.name === componentName);
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
    type: ComponentType;

    constructor(type: ComponentType, name: string, value: number){
        this.type = type;
        this.name = name;
        this.value = value;
    }
}

export enum ComponentType {
    Forza,
    Destrezza,
    ModificatoreForza
}

export class System {
    name: string;
    entities: Entity[];

    constructor(entities: Entity[], name: string){
        this.name = name;
        this.entities = entities;
    }

    run(): void{
        for (let entity of this.entities) {
            console.log('running', entity);
            let actualComponent = entity.getComponent("Mod_Forza");
            let actualValue = actualComponent.value;

            //let forzaComponent = 
        }
    }
}