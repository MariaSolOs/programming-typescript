function call<T extends [unknown, string, ...unknown[]], R>(f: (...args: T) => R, ...args: T): R {
    return f(...args);
}

function printAge(age: number, name: string) {
    return `${name}'s age is ${age}.`;
}

call(printAge, 25, 'Maria');
