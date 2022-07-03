type Simple = string | number | boolean | Function
// type DeepReadonly<T> = { +readonly [K in keyof T]: Simple extends T[K] ? T[K] : DeepReadonly<T[K]> }
type DeepReadonly<T> = { +readonly [K in keyof T]: T[K] extends Simple ? T[K] : DeepReadonly<T[K]> }
