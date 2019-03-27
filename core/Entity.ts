// import {v4 as uuid} from 'uuid';

export class Entity {
    id: string;

    // constructor(){
    //     this.id = uuid();
    // }
    constructor(id: string){
        this.id = id;
    }
}