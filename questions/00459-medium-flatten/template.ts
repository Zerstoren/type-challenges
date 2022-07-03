type Cast<TValue> = TValue extends unknown[] ? TValue : [TValue]
type Flatten<TArray> = TArray extends [infer First, ...infer Rest]
  ? [...Cast<Flatten<First>>, ...Flatten<Rest>]
  : TArray
