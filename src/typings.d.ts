declare namespace GlobalType {
  const styles: {
    [x: string]: string
  }
  const filePath: string
  const text: string
  const any: any
  type IsOptional<Key extends keyof Obj, Obj> = {} extends Pick<Obj, Key> ? Key : never
}

declare module '*.css' {
  export = GlobalType.styles
}
declare module '*.less' {
  export = GlobalType.styles
}

declare module '*.png' {
  export = GlobalType.filePath
}
declare module '*.svg' {
  export = GlobalType.filePath
}
declare module '*.jpg' {
  export = GlobalType.filePath
}
declare module '*.jpeg' {
  export = GlobalType.filePath
}
declare module '*.gif' {
  export = GlobalType.filePath
}

declare module '*.mp4' {
  export = GlobalType.filePath
}
declare module '*.webm' {
  export = GlobalType.filePath
}
declare module '*.ogg' {
  export = GlobalType.filePath
}
declare module '*.mp3' {
  export = GlobalType.filePath
}
declare module '*.wav' {
  export = GlobalType.filePath
}
declare module '*.flac' {
  export = GlobalType.filePath
}
declare module '*.aac' {
  export = GlobalType.filePath
}

declare interface Process {
  env: {
    NODE_ENV: 'development' | 'production'
  }
}

declare const WEBPACK_VERSION: string
declare const WEBPACK_MODE: 'development' | 'production'
declare const WEBPACK_ENV: 'dev' | 'test' | 'verify' | 'prod'
declare const WEBPACK_API: Record<keyof Api.Result, string>

/**
 * 类似Promise
 * 可约束Promise.catch的类型
 * 不能对async/await的返回值类型约束
 */
declare type AsPromise<T, R> = {
  readonly [Symbol.toStringTag]: string
  finally(onfinally?: (() => void) | undefined | null): AsPromise<T, R>
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: R) => TResult2 | PromiseLike<TResult2>) | undefined | null): AsPromise<TResult1 | TResult2, R>
  catch<TResult = never>(onrejected?: ((reason: R) => TResult | PromiseLike<TResult>) | undefined | null): AsPromise<T | TResult, R>
}

/** 深层Partial */
declare type DeepPartial<Obj> = {
  [Key in keyof Obj]?: GlobalType.IsOptional<Key, Obj> extends never ? Obj[Key] : DeepPartial<Obj[Key]>
}

declare namespace Api {
  type Result = {
    1: Base
  }
  type Error = {
    1?: null | Omit<Base, 'status'> & {
      status?: null | number
    }
  }
  type Base<T = any> = {
    status: 0
    message?: null | string
    data?: T
  }
}
