type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer D}` ? D : `${T}`
