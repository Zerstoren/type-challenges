type KebabCase<S extends string> =
  S extends `${infer F}${infer R}`
    ? Uncapitalize<R> extends R
      ? `${Lowercase<F>}${KebabCase<R>}`
      : `${Lowercase<F>}-${KebabCase<R>}`
    : S
