type MyReadonly2<T, K extends keyof T = keyof T> = { -readonly [Key in keyof MyOmit<T, K>]: T[Key] } & { readonly [Key in keyof Pick<T, K>]: T[Key] }
