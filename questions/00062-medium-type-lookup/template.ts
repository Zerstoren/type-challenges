type LookUp<U extends { type: string }, T extends string> = { [K in U as K['type']]: K }[T]
