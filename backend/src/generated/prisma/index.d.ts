
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AcceptedTerm
 * 
 */
export type AcceptedTerm = $Result.DefaultSelection<Prisma.$AcceptedTermPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AcceptedTerms
 * const acceptedTerms = await prisma.acceptedTerm.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AcceptedTerms
   * const acceptedTerms = await prisma.acceptedTerm.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.acceptedTerm`: Exposes CRUD operations for the **AcceptedTerm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AcceptedTerms
    * const acceptedTerms = await prisma.acceptedTerm.findMany()
    * ```
    */
  get acceptedTerm(): Prisma.AcceptedTermDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AcceptedTerm: 'AcceptedTerm'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "acceptedTerm"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AcceptedTerm: {
        payload: Prisma.$AcceptedTermPayload<ExtArgs>
        fields: Prisma.AcceptedTermFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcceptedTermFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedTermPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcceptedTermFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedTermPayload>
          }
          findFirst: {
            args: Prisma.AcceptedTermFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedTermPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcceptedTermFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedTermPayload>
          }
          findMany: {
            args: Prisma.AcceptedTermFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedTermPayload>[]
          }
          create: {
            args: Prisma.AcceptedTermCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedTermPayload>
          }
          createMany: {
            args: Prisma.AcceptedTermCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AcceptedTermCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedTermPayload>[]
          }
          delete: {
            args: Prisma.AcceptedTermDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedTermPayload>
          }
          update: {
            args: Prisma.AcceptedTermUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedTermPayload>
          }
          deleteMany: {
            args: Prisma.AcceptedTermDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AcceptedTermUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AcceptedTermUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedTermPayload>[]
          }
          upsert: {
            args: Prisma.AcceptedTermUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedTermPayload>
          }
          aggregate: {
            args: Prisma.AcceptedTermAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcceptedTerm>
          }
          groupBy: {
            args: Prisma.AcceptedTermGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcceptedTermGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcceptedTermCountArgs<ExtArgs>
            result: $Utils.Optional<AcceptedTermCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    acceptedTerm?: AcceptedTermOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model AcceptedTerm
   */

  export type AggregateAcceptedTerm = {
    _count: AcceptedTermCountAggregateOutputType | null
    _min: AcceptedTermMinAggregateOutputType | null
    _max: AcceptedTermMaxAggregateOutputType | null
  }

  export type AcceptedTermMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    timestamp: Date | null
  }

  export type AcceptedTermMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    timestamp: Date | null
  }

  export type AcceptedTermCountAggregateOutputType = {
    id: number
    clientId: number
    timestamp: number
    _all: number
  }


  export type AcceptedTermMinAggregateInputType = {
    id?: true
    clientId?: true
    timestamp?: true
  }

  export type AcceptedTermMaxAggregateInputType = {
    id?: true
    clientId?: true
    timestamp?: true
  }

  export type AcceptedTermCountAggregateInputType = {
    id?: true
    clientId?: true
    timestamp?: true
    _all?: true
  }

  export type AcceptedTermAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcceptedTerm to aggregate.
     */
    where?: AcceptedTermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcceptedTerms to fetch.
     */
    orderBy?: AcceptedTermOrderByWithRelationInput | AcceptedTermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcceptedTermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcceptedTerms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcceptedTerms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AcceptedTerms
    **/
    _count?: true | AcceptedTermCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcceptedTermMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcceptedTermMaxAggregateInputType
  }

  export type GetAcceptedTermAggregateType<T extends AcceptedTermAggregateArgs> = {
        [P in keyof T & keyof AggregateAcceptedTerm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcceptedTerm[P]>
      : GetScalarType<T[P], AggregateAcceptedTerm[P]>
  }




  export type AcceptedTermGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcceptedTermWhereInput
    orderBy?: AcceptedTermOrderByWithAggregationInput | AcceptedTermOrderByWithAggregationInput[]
    by: AcceptedTermScalarFieldEnum[] | AcceptedTermScalarFieldEnum
    having?: AcceptedTermScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcceptedTermCountAggregateInputType | true
    _min?: AcceptedTermMinAggregateInputType
    _max?: AcceptedTermMaxAggregateInputType
  }

  export type AcceptedTermGroupByOutputType = {
    id: string
    clientId: string
    timestamp: Date
    _count: AcceptedTermCountAggregateOutputType | null
    _min: AcceptedTermMinAggregateOutputType | null
    _max: AcceptedTermMaxAggregateOutputType | null
  }

  type GetAcceptedTermGroupByPayload<T extends AcceptedTermGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcceptedTermGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcceptedTermGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcceptedTermGroupByOutputType[P]>
            : GetScalarType<T[P], AcceptedTermGroupByOutputType[P]>
        }
      >
    >


  export type AcceptedTermSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["acceptedTerm"]>

  export type AcceptedTermSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["acceptedTerm"]>

  export type AcceptedTermSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["acceptedTerm"]>

  export type AcceptedTermSelectScalar = {
    id?: boolean
    clientId?: boolean
    timestamp?: boolean
  }

  export type AcceptedTermOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "timestamp", ExtArgs["result"]["acceptedTerm"]>

  export type $AcceptedTermPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AcceptedTerm"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      timestamp: Date
    }, ExtArgs["result"]["acceptedTerm"]>
    composites: {}
  }

  type AcceptedTermGetPayload<S extends boolean | null | undefined | AcceptedTermDefaultArgs> = $Result.GetResult<Prisma.$AcceptedTermPayload, S>

  type AcceptedTermCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AcceptedTermFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AcceptedTermCountAggregateInputType | true
    }

  export interface AcceptedTermDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AcceptedTerm'], meta: { name: 'AcceptedTerm' } }
    /**
     * Find zero or one AcceptedTerm that matches the filter.
     * @param {AcceptedTermFindUniqueArgs} args - Arguments to find a AcceptedTerm
     * @example
     * // Get one AcceptedTerm
     * const acceptedTerm = await prisma.acceptedTerm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcceptedTermFindUniqueArgs>(args: SelectSubset<T, AcceptedTermFindUniqueArgs<ExtArgs>>): Prisma__AcceptedTermClient<$Result.GetResult<Prisma.$AcceptedTermPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AcceptedTerm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AcceptedTermFindUniqueOrThrowArgs} args - Arguments to find a AcceptedTerm
     * @example
     * // Get one AcceptedTerm
     * const acceptedTerm = await prisma.acceptedTerm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcceptedTermFindUniqueOrThrowArgs>(args: SelectSubset<T, AcceptedTermFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AcceptedTermClient<$Result.GetResult<Prisma.$AcceptedTermPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcceptedTerm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedTermFindFirstArgs} args - Arguments to find a AcceptedTerm
     * @example
     * // Get one AcceptedTerm
     * const acceptedTerm = await prisma.acceptedTerm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcceptedTermFindFirstArgs>(args?: SelectSubset<T, AcceptedTermFindFirstArgs<ExtArgs>>): Prisma__AcceptedTermClient<$Result.GetResult<Prisma.$AcceptedTermPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcceptedTerm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedTermFindFirstOrThrowArgs} args - Arguments to find a AcceptedTerm
     * @example
     * // Get one AcceptedTerm
     * const acceptedTerm = await prisma.acceptedTerm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcceptedTermFindFirstOrThrowArgs>(args?: SelectSubset<T, AcceptedTermFindFirstOrThrowArgs<ExtArgs>>): Prisma__AcceptedTermClient<$Result.GetResult<Prisma.$AcceptedTermPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AcceptedTerms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedTermFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AcceptedTerms
     * const acceptedTerms = await prisma.acceptedTerm.findMany()
     * 
     * // Get first 10 AcceptedTerms
     * const acceptedTerms = await prisma.acceptedTerm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const acceptedTermWithIdOnly = await prisma.acceptedTerm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AcceptedTermFindManyArgs>(args?: SelectSubset<T, AcceptedTermFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcceptedTermPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AcceptedTerm.
     * @param {AcceptedTermCreateArgs} args - Arguments to create a AcceptedTerm.
     * @example
     * // Create one AcceptedTerm
     * const AcceptedTerm = await prisma.acceptedTerm.create({
     *   data: {
     *     // ... data to create a AcceptedTerm
     *   }
     * })
     * 
     */
    create<T extends AcceptedTermCreateArgs>(args: SelectSubset<T, AcceptedTermCreateArgs<ExtArgs>>): Prisma__AcceptedTermClient<$Result.GetResult<Prisma.$AcceptedTermPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AcceptedTerms.
     * @param {AcceptedTermCreateManyArgs} args - Arguments to create many AcceptedTerms.
     * @example
     * // Create many AcceptedTerms
     * const acceptedTerm = await prisma.acceptedTerm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AcceptedTermCreateManyArgs>(args?: SelectSubset<T, AcceptedTermCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AcceptedTerms and returns the data saved in the database.
     * @param {AcceptedTermCreateManyAndReturnArgs} args - Arguments to create many AcceptedTerms.
     * @example
     * // Create many AcceptedTerms
     * const acceptedTerm = await prisma.acceptedTerm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AcceptedTerms and only return the `id`
     * const acceptedTermWithIdOnly = await prisma.acceptedTerm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AcceptedTermCreateManyAndReturnArgs>(args?: SelectSubset<T, AcceptedTermCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcceptedTermPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AcceptedTerm.
     * @param {AcceptedTermDeleteArgs} args - Arguments to delete one AcceptedTerm.
     * @example
     * // Delete one AcceptedTerm
     * const AcceptedTerm = await prisma.acceptedTerm.delete({
     *   where: {
     *     // ... filter to delete one AcceptedTerm
     *   }
     * })
     * 
     */
    delete<T extends AcceptedTermDeleteArgs>(args: SelectSubset<T, AcceptedTermDeleteArgs<ExtArgs>>): Prisma__AcceptedTermClient<$Result.GetResult<Prisma.$AcceptedTermPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AcceptedTerm.
     * @param {AcceptedTermUpdateArgs} args - Arguments to update one AcceptedTerm.
     * @example
     * // Update one AcceptedTerm
     * const acceptedTerm = await prisma.acceptedTerm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AcceptedTermUpdateArgs>(args: SelectSubset<T, AcceptedTermUpdateArgs<ExtArgs>>): Prisma__AcceptedTermClient<$Result.GetResult<Prisma.$AcceptedTermPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AcceptedTerms.
     * @param {AcceptedTermDeleteManyArgs} args - Arguments to filter AcceptedTerms to delete.
     * @example
     * // Delete a few AcceptedTerms
     * const { count } = await prisma.acceptedTerm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AcceptedTermDeleteManyArgs>(args?: SelectSubset<T, AcceptedTermDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcceptedTerms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedTermUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AcceptedTerms
     * const acceptedTerm = await prisma.acceptedTerm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AcceptedTermUpdateManyArgs>(args: SelectSubset<T, AcceptedTermUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcceptedTerms and returns the data updated in the database.
     * @param {AcceptedTermUpdateManyAndReturnArgs} args - Arguments to update many AcceptedTerms.
     * @example
     * // Update many AcceptedTerms
     * const acceptedTerm = await prisma.acceptedTerm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AcceptedTerms and only return the `id`
     * const acceptedTermWithIdOnly = await prisma.acceptedTerm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AcceptedTermUpdateManyAndReturnArgs>(args: SelectSubset<T, AcceptedTermUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcceptedTermPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AcceptedTerm.
     * @param {AcceptedTermUpsertArgs} args - Arguments to update or create a AcceptedTerm.
     * @example
     * // Update or create a AcceptedTerm
     * const acceptedTerm = await prisma.acceptedTerm.upsert({
     *   create: {
     *     // ... data to create a AcceptedTerm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AcceptedTerm we want to update
     *   }
     * })
     */
    upsert<T extends AcceptedTermUpsertArgs>(args: SelectSubset<T, AcceptedTermUpsertArgs<ExtArgs>>): Prisma__AcceptedTermClient<$Result.GetResult<Prisma.$AcceptedTermPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AcceptedTerms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedTermCountArgs} args - Arguments to filter AcceptedTerms to count.
     * @example
     * // Count the number of AcceptedTerms
     * const count = await prisma.acceptedTerm.count({
     *   where: {
     *     // ... the filter for the AcceptedTerms we want to count
     *   }
     * })
    **/
    count<T extends AcceptedTermCountArgs>(
      args?: Subset<T, AcceptedTermCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcceptedTermCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AcceptedTerm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedTermAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AcceptedTermAggregateArgs>(args: Subset<T, AcceptedTermAggregateArgs>): Prisma.PrismaPromise<GetAcceptedTermAggregateType<T>>

    /**
     * Group by AcceptedTerm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedTermGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AcceptedTermGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcceptedTermGroupByArgs['orderBy'] }
        : { orderBy?: AcceptedTermGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AcceptedTermGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcceptedTermGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AcceptedTerm model
   */
  readonly fields: AcceptedTermFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AcceptedTerm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcceptedTermClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AcceptedTerm model
   */
  interface AcceptedTermFieldRefs {
    readonly id: FieldRef<"AcceptedTerm", 'String'>
    readonly clientId: FieldRef<"AcceptedTerm", 'String'>
    readonly timestamp: FieldRef<"AcceptedTerm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AcceptedTerm findUnique
   */
  export type AcceptedTermFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedTerm
     */
    select?: AcceptedTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedTerm
     */
    omit?: AcceptedTermOmit<ExtArgs> | null
    /**
     * Filter, which AcceptedTerm to fetch.
     */
    where: AcceptedTermWhereUniqueInput
  }

  /**
   * AcceptedTerm findUniqueOrThrow
   */
  export type AcceptedTermFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedTerm
     */
    select?: AcceptedTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedTerm
     */
    omit?: AcceptedTermOmit<ExtArgs> | null
    /**
     * Filter, which AcceptedTerm to fetch.
     */
    where: AcceptedTermWhereUniqueInput
  }

  /**
   * AcceptedTerm findFirst
   */
  export type AcceptedTermFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedTerm
     */
    select?: AcceptedTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedTerm
     */
    omit?: AcceptedTermOmit<ExtArgs> | null
    /**
     * Filter, which AcceptedTerm to fetch.
     */
    where?: AcceptedTermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcceptedTerms to fetch.
     */
    orderBy?: AcceptedTermOrderByWithRelationInput | AcceptedTermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcceptedTerms.
     */
    cursor?: AcceptedTermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcceptedTerms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcceptedTerms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcceptedTerms.
     */
    distinct?: AcceptedTermScalarFieldEnum | AcceptedTermScalarFieldEnum[]
  }

  /**
   * AcceptedTerm findFirstOrThrow
   */
  export type AcceptedTermFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedTerm
     */
    select?: AcceptedTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedTerm
     */
    omit?: AcceptedTermOmit<ExtArgs> | null
    /**
     * Filter, which AcceptedTerm to fetch.
     */
    where?: AcceptedTermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcceptedTerms to fetch.
     */
    orderBy?: AcceptedTermOrderByWithRelationInput | AcceptedTermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcceptedTerms.
     */
    cursor?: AcceptedTermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcceptedTerms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcceptedTerms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcceptedTerms.
     */
    distinct?: AcceptedTermScalarFieldEnum | AcceptedTermScalarFieldEnum[]
  }

  /**
   * AcceptedTerm findMany
   */
  export type AcceptedTermFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedTerm
     */
    select?: AcceptedTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedTerm
     */
    omit?: AcceptedTermOmit<ExtArgs> | null
    /**
     * Filter, which AcceptedTerms to fetch.
     */
    where?: AcceptedTermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcceptedTerms to fetch.
     */
    orderBy?: AcceptedTermOrderByWithRelationInput | AcceptedTermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AcceptedTerms.
     */
    cursor?: AcceptedTermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcceptedTerms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcceptedTerms.
     */
    skip?: number
    distinct?: AcceptedTermScalarFieldEnum | AcceptedTermScalarFieldEnum[]
  }

  /**
   * AcceptedTerm create
   */
  export type AcceptedTermCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedTerm
     */
    select?: AcceptedTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedTerm
     */
    omit?: AcceptedTermOmit<ExtArgs> | null
    /**
     * The data needed to create a AcceptedTerm.
     */
    data: XOR<AcceptedTermCreateInput, AcceptedTermUncheckedCreateInput>
  }

  /**
   * AcceptedTerm createMany
   */
  export type AcceptedTermCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AcceptedTerms.
     */
    data: AcceptedTermCreateManyInput | AcceptedTermCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AcceptedTerm createManyAndReturn
   */
  export type AcceptedTermCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedTerm
     */
    select?: AcceptedTermSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedTerm
     */
    omit?: AcceptedTermOmit<ExtArgs> | null
    /**
     * The data used to create many AcceptedTerms.
     */
    data: AcceptedTermCreateManyInput | AcceptedTermCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AcceptedTerm update
   */
  export type AcceptedTermUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedTerm
     */
    select?: AcceptedTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedTerm
     */
    omit?: AcceptedTermOmit<ExtArgs> | null
    /**
     * The data needed to update a AcceptedTerm.
     */
    data: XOR<AcceptedTermUpdateInput, AcceptedTermUncheckedUpdateInput>
    /**
     * Choose, which AcceptedTerm to update.
     */
    where: AcceptedTermWhereUniqueInput
  }

  /**
   * AcceptedTerm updateMany
   */
  export type AcceptedTermUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AcceptedTerms.
     */
    data: XOR<AcceptedTermUpdateManyMutationInput, AcceptedTermUncheckedUpdateManyInput>
    /**
     * Filter which AcceptedTerms to update
     */
    where?: AcceptedTermWhereInput
    /**
     * Limit how many AcceptedTerms to update.
     */
    limit?: number
  }

  /**
   * AcceptedTerm updateManyAndReturn
   */
  export type AcceptedTermUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedTerm
     */
    select?: AcceptedTermSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedTerm
     */
    omit?: AcceptedTermOmit<ExtArgs> | null
    /**
     * The data used to update AcceptedTerms.
     */
    data: XOR<AcceptedTermUpdateManyMutationInput, AcceptedTermUncheckedUpdateManyInput>
    /**
     * Filter which AcceptedTerms to update
     */
    where?: AcceptedTermWhereInput
    /**
     * Limit how many AcceptedTerms to update.
     */
    limit?: number
  }

  /**
   * AcceptedTerm upsert
   */
  export type AcceptedTermUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedTerm
     */
    select?: AcceptedTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedTerm
     */
    omit?: AcceptedTermOmit<ExtArgs> | null
    /**
     * The filter to search for the AcceptedTerm to update in case it exists.
     */
    where: AcceptedTermWhereUniqueInput
    /**
     * In case the AcceptedTerm found by the `where` argument doesn't exist, create a new AcceptedTerm with this data.
     */
    create: XOR<AcceptedTermCreateInput, AcceptedTermUncheckedCreateInput>
    /**
     * In case the AcceptedTerm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcceptedTermUpdateInput, AcceptedTermUncheckedUpdateInput>
  }

  /**
   * AcceptedTerm delete
   */
  export type AcceptedTermDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedTerm
     */
    select?: AcceptedTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedTerm
     */
    omit?: AcceptedTermOmit<ExtArgs> | null
    /**
     * Filter which AcceptedTerm to delete.
     */
    where: AcceptedTermWhereUniqueInput
  }

  /**
   * AcceptedTerm deleteMany
   */
  export type AcceptedTermDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcceptedTerms to delete
     */
    where?: AcceptedTermWhereInput
    /**
     * Limit how many AcceptedTerms to delete.
     */
    limit?: number
  }

  /**
   * AcceptedTerm without action
   */
  export type AcceptedTermDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedTerm
     */
    select?: AcceptedTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedTerm
     */
    omit?: AcceptedTermOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AcceptedTermScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    timestamp: 'timestamp'
  };

  export type AcceptedTermScalarFieldEnum = (typeof AcceptedTermScalarFieldEnum)[keyof typeof AcceptedTermScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AcceptedTermWhereInput = {
    AND?: AcceptedTermWhereInput | AcceptedTermWhereInput[]
    OR?: AcceptedTermWhereInput[]
    NOT?: AcceptedTermWhereInput | AcceptedTermWhereInput[]
    id?: StringFilter<"AcceptedTerm"> | string
    clientId?: StringFilter<"AcceptedTerm"> | string
    timestamp?: DateTimeFilter<"AcceptedTerm"> | Date | string
  }

  export type AcceptedTermOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    timestamp?: SortOrder
  }

  export type AcceptedTermWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AcceptedTermWhereInput | AcceptedTermWhereInput[]
    OR?: AcceptedTermWhereInput[]
    NOT?: AcceptedTermWhereInput | AcceptedTermWhereInput[]
    clientId?: StringFilter<"AcceptedTerm"> | string
    timestamp?: DateTimeFilter<"AcceptedTerm"> | Date | string
  }, "id">

  export type AcceptedTermOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    timestamp?: SortOrder
    _count?: AcceptedTermCountOrderByAggregateInput
    _max?: AcceptedTermMaxOrderByAggregateInput
    _min?: AcceptedTermMinOrderByAggregateInput
  }

  export type AcceptedTermScalarWhereWithAggregatesInput = {
    AND?: AcceptedTermScalarWhereWithAggregatesInput | AcceptedTermScalarWhereWithAggregatesInput[]
    OR?: AcceptedTermScalarWhereWithAggregatesInput[]
    NOT?: AcceptedTermScalarWhereWithAggregatesInput | AcceptedTermScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AcceptedTerm"> | string
    clientId?: StringWithAggregatesFilter<"AcceptedTerm"> | string
    timestamp?: DateTimeWithAggregatesFilter<"AcceptedTerm"> | Date | string
  }

  export type AcceptedTermCreateInput = {
    id?: string
    clientId: string
    timestamp?: Date | string
  }

  export type AcceptedTermUncheckedCreateInput = {
    id?: string
    clientId: string
    timestamp?: Date | string
  }

  export type AcceptedTermUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcceptedTermUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcceptedTermCreateManyInput = {
    id?: string
    clientId: string
    timestamp?: Date | string
  }

  export type AcceptedTermUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcceptedTermUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AcceptedTermCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    timestamp?: SortOrder
  }

  export type AcceptedTermMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    timestamp?: SortOrder
  }

  export type AcceptedTermMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    timestamp?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}