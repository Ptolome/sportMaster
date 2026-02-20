
export type Response<T> = Promise<{ data?: T; isError: boolean }>