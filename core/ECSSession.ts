import { Component } from "./Component";

export class ECSSession {
    [x: string]: any;
    map: any;

    constructor() {
        this.map = {};
    }

    getComponentsByType(type: string) : Component[] {
        let ids: string[] = Object.keys(this.map);

        let components: Component[] = [];

        ids.forEach(id => {
            components.push(this.map[id].filter(x => x.type === type));
        });

        return components;
    }

    getComponentsByTypeAndEntityId(type: string, entityId: string) : Component[] {

        return this.map[entityId].filter(x => x.type === type);
    }

    getEntityById(entityId: string){
        let ids: string[] = Object.keys(this.map);

        return ids.find(x => x === entityId);
    }

    getComponentByTypeAndEntityId(componentType: string){
        // ...
    }
}