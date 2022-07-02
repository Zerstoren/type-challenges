type First<T extends unknown[]> = T[number] extends never ? never : T[0]
