import { Component } from "./Component";

export class ECSSession {
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
}