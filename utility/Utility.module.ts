// da esternalizzare ----------------------------------------------
export function ParseString(input: string): string[] {
    let split = input.split('$');
    console.log('split', split);

    var filtered = split.filter(function (element, index, array) {
        return ((index + 1) % 2 === 0);
    });

    return filtered;
}

export function ParseString_KeyValue(input: string): RootProperty[] {
    let split = input.split('$');
    console.log('split', split);

    var filtered = split.filter(function (element, index, array) {
        return ((index + 1) % 2 === 0);
    });

    console.log('filtered', filtered);

    let keyValueArray: RootProperty[] = [];

    filtered.forEach(x => {
        let rp = new RootProperty(x.split('.')[0], x.split('.')[1]);
        keyValueArray.push(rp)
    });

    return keyValueArray;
}

export class RootProperty {
    root: string;
    property: string;

    constructor(root: string, property: string) {
        this.root = root;
        this.property = property;
    }
}