type IsEqual<Y, X> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? 'true' : 'false'
type HasElement<T extends readonly any[], U, I = { [K in keyof T]: [T[K]] }[number]> = I extends [infer C] ? 'true' extends IsEqual<U, C> ? true : false : never
type Includes<T extends readonly any[], U> = HasElement<T, U> extends false ? false : true
