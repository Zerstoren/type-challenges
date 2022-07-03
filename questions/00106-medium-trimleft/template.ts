type trim = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${trim}${infer R}` ? TrimLeft<R> : S
