type NewBlock<H, N> = { [Key in keyof Omit<H, keyof N>]: H[Key] } & { [Key in keyof Omit<N, keyof H>]: N[Key] }
type Diff<H, N> = { [Key in keyof NewBlock<H, N>]: NewBlock<H, N>[Key] }
