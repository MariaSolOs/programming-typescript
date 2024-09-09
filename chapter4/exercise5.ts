function is<T>(arg1: T, ...args: T[]): boolean {
    return args.every((arg) => arg === arg1);
}

console.log(is('string', 'other'));
console.log(is(true, false));
console.log(is(42, 42));
console.log(is([1], [1, 2], [1, 2, 3]));
