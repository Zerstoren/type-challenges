type StringToTuple<S extends string> = S extends `${infer First}${infer Rest}` ? [First, ...StringToTuple<Rest>] : []
type LengthOfString1<S extends string> = StringToTuple<S>['length']
