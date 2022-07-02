type SN = string | number
type TupleToObject<T extends readonly SN[]> = { [K in T[number]]: K }
