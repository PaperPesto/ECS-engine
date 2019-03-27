import { Component } from "./Component";

export class ECSSession {
    map: any;

    constructor() {
        this.map = {};
    }

    getComponentsByType(type: string) : Component[] {
        let ids: string[] = Object.keys(this.map);
        console.log('x-map', this.map);

        let components: Component[] = [];

        ids.forEach(id => {
            console.log('X-id', id);
            components.push(this.map[id].filter(x => x.type === type));
        });

        return components;
    }

    getComponentsByTypeAndEntityId(entityId: string, type: string) : Component[] {
        return this.map[entityId].filter(x => x.type === type);
    }

    getEntityById(entityId: string){
        let ids: string[] = Object.keys(this.map);

        return ids.filter(x => x === entityId);
    }
}