import { Component } from "./Component";

export class ECSSession {
    map: { [key: string]: Component[]; } = {};
}