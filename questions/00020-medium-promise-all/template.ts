type UnPackPromise<T> = T extends Promise<infer P> ? P : T
declare function PromiseAll<T extends readonly any[]>(values: readonly [...T]): Promise<{
  [K in keyof T]: UnPackPromise<T[K]>
}>
