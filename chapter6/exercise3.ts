type Exclusive<T, U> = (T extends U ? never : T) | (U extends T ? never : U);
//                   = Exclude<T, U> | Exclude<U, T>
