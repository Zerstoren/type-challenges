type StringToArray<T extends string> = T extends `${infer F}${infer R}` ? [F, ...StringToArray<R>] : []
type StringToUnion<T extends string> = StringToArray<T>[number]

