export module Utility {

    export function ParseString(input: string): string[] {
        let split = input.split('$');

        var filtered = split.filter(function (element, index, array) {
            return (index % 2 === 0);
        });

        return filtered;
    }
}