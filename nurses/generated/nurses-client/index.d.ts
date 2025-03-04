
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
 * Model HomeServices
 * 
 */
export type HomeServices = $Result.DefaultSelection<Prisma.$HomeServicesPayload>
/**
 * Model Services
 * 
 */
export type Services = $Result.DefaultSelection<Prisma.$ServicesPayload>
/**
 * Model Counts
 * 
 */
export type Counts = $Result.DefaultSelection<Prisma.$CountsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  pending: 'pending',
  inProgress: 'inProgress',
  completed: 'completed',
  cancelled: 'cancelled',
  cancelledByPatient: 'cancelledByPatient',
  cancelledByProviders: 'cancelledByProviders',
  autoCancelled: 'autoCancelled'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more HomeServices
 * const homeServices = await prisma.homeServices.findMany()
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
   * // Fetch zero or more HomeServices
   * const homeServices = await prisma.homeServices.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.homeServices`: Exposes CRUD operations for the **HomeServices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HomeServices
    * const homeServices = await prisma.homeServices.findMany()
    * ```
    */
  get homeServices(): Prisma.HomeServicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.services`: Exposes CRUD operations for the **Services** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.services.findMany()
    * ```
    */
  get services(): Prisma.ServicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.counts`: Exposes CRUD operations for the **Counts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Counts
    * const counts = await prisma.counts.findMany()
    * ```
    */
  get counts(): Prisma.CountsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    HomeServices: 'HomeServices',
    Services: 'Services',
    Counts: 'Counts'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "homeServices" | "services" | "counts"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      HomeServices: {
        payload: Prisma.$HomeServicesPayload<ExtArgs>
        fields: Prisma.HomeServicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HomeServicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeServicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HomeServicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeServicesPayload>
          }
          findFirst: {
            args: Prisma.HomeServicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeServicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HomeServicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeServicesPayload>
          }
          findMany: {
            args: Prisma.HomeServicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeServicesPayload>[]
          }
          create: {
            args: Prisma.HomeServicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeServicesPayload>
          }
          createMany: {
            args: Prisma.HomeServicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HomeServicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeServicesPayload>[]
          }
          delete: {
            args: Prisma.HomeServicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeServicesPayload>
          }
          update: {
            args: Prisma.HomeServicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeServicesPayload>
          }
          deleteMany: {
            args: Prisma.HomeServicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HomeServicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HomeServicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeServicesPayload>[]
          }
          upsert: {
            args: Prisma.HomeServicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeServicesPayload>
          }
          aggregate: {
            args: Prisma.HomeServicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHomeServices>
          }
          groupBy: {
            args: Prisma.HomeServicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<HomeServicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.HomeServicesCountArgs<ExtArgs>
            result: $Utils.Optional<HomeServicesCountAggregateOutputType> | number
          }
        }
      }
      Services: {
        payload: Prisma.$ServicesPayload<ExtArgs>
        fields: Prisma.ServicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          findFirst: {
            args: Prisma.ServicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          findMany: {
            args: Prisma.ServicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>[]
          }
          create: {
            args: Prisma.ServicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          createMany: {
            args: Prisma.ServicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>[]
          }
          delete: {
            args: Prisma.ServicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          update: {
            args: Prisma.ServicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          deleteMany: {
            args: Prisma.ServicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>[]
          }
          upsert: {
            args: Prisma.ServicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          aggregate: {
            args: Prisma.ServicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServices>
          }
          groupBy: {
            args: Prisma.ServicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicesCountArgs<ExtArgs>
            result: $Utils.Optional<ServicesCountAggregateOutputType> | number
          }
        }
      }
      Counts: {
        payload: Prisma.$CountsPayload<ExtArgs>
        fields: Prisma.CountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountsPayload>
          }
          findFirst: {
            args: Prisma.CountsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountsPayload>
          }
          findMany: {
            args: Prisma.CountsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountsPayload>[]
          }
          create: {
            args: Prisma.CountsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountsPayload>
          }
          createMany: {
            args: Prisma.CountsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountsPayload>[]
          }
          delete: {
            args: Prisma.CountsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountsPayload>
          }
          update: {
            args: Prisma.CountsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountsPayload>
          }
          deleteMany: {
            args: Prisma.CountsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CountsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountsPayload>[]
          }
          upsert: {
            args: Prisma.CountsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountsPayload>
          }
          aggregate: {
            args: Prisma.CountsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCounts>
          }
          groupBy: {
            args: Prisma.CountsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountsCountArgs<ExtArgs>
            result: $Utils.Optional<CountsCountAggregateOutputType> | number
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
    homeServices?: HomeServicesOmit
    services?: ServicesOmit
    counts?: CountsOmit
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
   * Count Type HomeServicesCountOutputType
   */

  export type HomeServicesCountOutputType = {
    services: number
  }

  export type HomeServicesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | HomeServicesCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * HomeServicesCountOutputType without action
   */
  export type HomeServicesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeServicesCountOutputType
     */
    select?: HomeServicesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HomeServicesCountOutputType without action
   */
  export type HomeServicesCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model HomeServices
   */

  export type AggregateHomeServices = {
    _count: HomeServicesCountAggregateOutputType | null
    _avg: HomeServicesAvgAggregateOutputType | null
    _sum: HomeServicesSumAggregateOutputType | null
    _min: HomeServicesMinAggregateOutputType | null
    _max: HomeServicesMaxAggregateOutputType | null
  }

  export type HomeServicesAvgAggregateOutputType = {
    id: number | null
  }

  export type HomeServicesSumAggregateOutputType = {
    id: number | null
  }

  export type HomeServicesMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HomeServicesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HomeServicesCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HomeServicesAvgAggregateInputType = {
    id?: true
  }

  export type HomeServicesSumAggregateInputType = {
    id?: true
  }

  export type HomeServicesMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HomeServicesMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HomeServicesCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HomeServicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HomeServices to aggregate.
     */
    where?: HomeServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeServices to fetch.
     */
    orderBy?: HomeServicesOrderByWithRelationInput | HomeServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HomeServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HomeServices
    **/
    _count?: true | HomeServicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HomeServicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HomeServicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomeServicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomeServicesMaxAggregateInputType
  }

  export type GetHomeServicesAggregateType<T extends HomeServicesAggregateArgs> = {
        [P in keyof T & keyof AggregateHomeServices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomeServices[P]>
      : GetScalarType<T[P], AggregateHomeServices[P]>
  }




  export type HomeServicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HomeServicesWhereInput
    orderBy?: HomeServicesOrderByWithAggregationInput | HomeServicesOrderByWithAggregationInput[]
    by: HomeServicesScalarFieldEnum[] | HomeServicesScalarFieldEnum
    having?: HomeServicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomeServicesCountAggregateInputType | true
    _avg?: HomeServicesAvgAggregateInputType
    _sum?: HomeServicesSumAggregateInputType
    _min?: HomeServicesMinAggregateInputType
    _max?: HomeServicesMaxAggregateInputType
  }

  export type HomeServicesGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: HomeServicesCountAggregateOutputType | null
    _avg: HomeServicesAvgAggregateOutputType | null
    _sum: HomeServicesSumAggregateOutputType | null
    _min: HomeServicesMinAggregateOutputType | null
    _max: HomeServicesMaxAggregateOutputType | null
  }

  type GetHomeServicesGroupByPayload<T extends HomeServicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HomeServicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomeServicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomeServicesGroupByOutputType[P]>
            : GetScalarType<T[P], HomeServicesGroupByOutputType[P]>
        }
      >
    >


  export type HomeServicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    services?: boolean | HomeServices$servicesArgs<ExtArgs>
    _count?: boolean | HomeServicesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["homeServices"]>

  export type HomeServicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["homeServices"]>

  export type HomeServicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["homeServices"]>

  export type HomeServicesSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HomeServicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["homeServices"]>
  export type HomeServicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | HomeServices$servicesArgs<ExtArgs>
    _count?: boolean | HomeServicesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HomeServicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HomeServicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HomeServicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HomeServices"
    objects: {
      services: Prisma.$ServicesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["homeServices"]>
    composites: {}
  }

  type HomeServicesGetPayload<S extends boolean | null | undefined | HomeServicesDefaultArgs> = $Result.GetResult<Prisma.$HomeServicesPayload, S>

  type HomeServicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HomeServicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HomeServicesCountAggregateInputType | true
    }

  export interface HomeServicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HomeServices'], meta: { name: 'HomeServices' } }
    /**
     * Find zero or one HomeServices that matches the filter.
     * @param {HomeServicesFindUniqueArgs} args - Arguments to find a HomeServices
     * @example
     * // Get one HomeServices
     * const homeServices = await prisma.homeServices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HomeServicesFindUniqueArgs>(args: SelectSubset<T, HomeServicesFindUniqueArgs<ExtArgs>>): Prisma__HomeServicesClient<$Result.GetResult<Prisma.$HomeServicesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one HomeServices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HomeServicesFindUniqueOrThrowArgs} args - Arguments to find a HomeServices
     * @example
     * // Get one HomeServices
     * const homeServices = await prisma.homeServices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HomeServicesFindUniqueOrThrowArgs>(args: SelectSubset<T, HomeServicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HomeServicesClient<$Result.GetResult<Prisma.$HomeServicesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first HomeServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeServicesFindFirstArgs} args - Arguments to find a HomeServices
     * @example
     * // Get one HomeServices
     * const homeServices = await prisma.homeServices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HomeServicesFindFirstArgs>(args?: SelectSubset<T, HomeServicesFindFirstArgs<ExtArgs>>): Prisma__HomeServicesClient<$Result.GetResult<Prisma.$HomeServicesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first HomeServices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeServicesFindFirstOrThrowArgs} args - Arguments to find a HomeServices
     * @example
     * // Get one HomeServices
     * const homeServices = await prisma.homeServices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HomeServicesFindFirstOrThrowArgs>(args?: SelectSubset<T, HomeServicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__HomeServicesClient<$Result.GetResult<Prisma.$HomeServicesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more HomeServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeServicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HomeServices
     * const homeServices = await prisma.homeServices.findMany()
     * 
     * // Get first 10 HomeServices
     * const homeServices = await prisma.homeServices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homeServicesWithIdOnly = await prisma.homeServices.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HomeServicesFindManyArgs>(args?: SelectSubset<T, HomeServicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeServicesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a HomeServices.
     * @param {HomeServicesCreateArgs} args - Arguments to create a HomeServices.
     * @example
     * // Create one HomeServices
     * const HomeServices = await prisma.homeServices.create({
     *   data: {
     *     // ... data to create a HomeServices
     *   }
     * })
     * 
     */
    create<T extends HomeServicesCreateArgs>(args: SelectSubset<T, HomeServicesCreateArgs<ExtArgs>>): Prisma__HomeServicesClient<$Result.GetResult<Prisma.$HomeServicesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many HomeServices.
     * @param {HomeServicesCreateManyArgs} args - Arguments to create many HomeServices.
     * @example
     * // Create many HomeServices
     * const homeServices = await prisma.homeServices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HomeServicesCreateManyArgs>(args?: SelectSubset<T, HomeServicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HomeServices and returns the data saved in the database.
     * @param {HomeServicesCreateManyAndReturnArgs} args - Arguments to create many HomeServices.
     * @example
     * // Create many HomeServices
     * const homeServices = await prisma.homeServices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HomeServices and only return the `id`
     * const homeServicesWithIdOnly = await prisma.homeServices.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HomeServicesCreateManyAndReturnArgs>(args?: SelectSubset<T, HomeServicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeServicesPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a HomeServices.
     * @param {HomeServicesDeleteArgs} args - Arguments to delete one HomeServices.
     * @example
     * // Delete one HomeServices
     * const HomeServices = await prisma.homeServices.delete({
     *   where: {
     *     // ... filter to delete one HomeServices
     *   }
     * })
     * 
     */
    delete<T extends HomeServicesDeleteArgs>(args: SelectSubset<T, HomeServicesDeleteArgs<ExtArgs>>): Prisma__HomeServicesClient<$Result.GetResult<Prisma.$HomeServicesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one HomeServices.
     * @param {HomeServicesUpdateArgs} args - Arguments to update one HomeServices.
     * @example
     * // Update one HomeServices
     * const homeServices = await prisma.homeServices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HomeServicesUpdateArgs>(args: SelectSubset<T, HomeServicesUpdateArgs<ExtArgs>>): Prisma__HomeServicesClient<$Result.GetResult<Prisma.$HomeServicesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more HomeServices.
     * @param {HomeServicesDeleteManyArgs} args - Arguments to filter HomeServices to delete.
     * @example
     * // Delete a few HomeServices
     * const { count } = await prisma.homeServices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HomeServicesDeleteManyArgs>(args?: SelectSubset<T, HomeServicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomeServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeServicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HomeServices
     * const homeServices = await prisma.homeServices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HomeServicesUpdateManyArgs>(args: SelectSubset<T, HomeServicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomeServices and returns the data updated in the database.
     * @param {HomeServicesUpdateManyAndReturnArgs} args - Arguments to update many HomeServices.
     * @example
     * // Update many HomeServices
     * const homeServices = await prisma.homeServices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HomeServices and only return the `id`
     * const homeServicesWithIdOnly = await prisma.homeServices.updateManyAndReturn({
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
    updateManyAndReturn<T extends HomeServicesUpdateManyAndReturnArgs>(args: SelectSubset<T, HomeServicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeServicesPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one HomeServices.
     * @param {HomeServicesUpsertArgs} args - Arguments to update or create a HomeServices.
     * @example
     * // Update or create a HomeServices
     * const homeServices = await prisma.homeServices.upsert({
     *   create: {
     *     // ... data to create a HomeServices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HomeServices we want to update
     *   }
     * })
     */
    upsert<T extends HomeServicesUpsertArgs>(args: SelectSubset<T, HomeServicesUpsertArgs<ExtArgs>>): Prisma__HomeServicesClient<$Result.GetResult<Prisma.$HomeServicesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of HomeServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeServicesCountArgs} args - Arguments to filter HomeServices to count.
     * @example
     * // Count the number of HomeServices
     * const count = await prisma.homeServices.count({
     *   where: {
     *     // ... the filter for the HomeServices we want to count
     *   }
     * })
    **/
    count<T extends HomeServicesCountArgs>(
      args?: Subset<T, HomeServicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomeServicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HomeServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeServicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HomeServicesAggregateArgs>(args: Subset<T, HomeServicesAggregateArgs>): Prisma.PrismaPromise<GetHomeServicesAggregateType<T>>

    /**
     * Group by HomeServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeServicesGroupByArgs} args - Group by arguments.
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
      T extends HomeServicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HomeServicesGroupByArgs['orderBy'] }
        : { orderBy?: HomeServicesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HomeServicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomeServicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HomeServices model
   */
  readonly fields: HomeServicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HomeServices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HomeServicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends HomeServices$servicesArgs<ExtArgs> = {}>(args?: Subset<T, HomeServices$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the HomeServices model
   */ 
  interface HomeServicesFieldRefs {
    readonly id: FieldRef<"HomeServices", 'Int'>
    readonly name: FieldRef<"HomeServices", 'String'>
    readonly createdAt: FieldRef<"HomeServices", 'DateTime'>
    readonly updatedAt: FieldRef<"HomeServices", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HomeServices findUnique
   */
  export type HomeServicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeServices
     */
    select?: HomeServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeServices
     */
    omit?: HomeServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeServicesInclude<ExtArgs> | null
    /**
     * Filter, which HomeServices to fetch.
     */
    where: HomeServicesWhereUniqueInput
  }

  /**
   * HomeServices findUniqueOrThrow
   */
  export type HomeServicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeServices
     */
    select?: HomeServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeServices
     */
    omit?: HomeServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeServicesInclude<ExtArgs> | null
    /**
     * Filter, which HomeServices to fetch.
     */
    where: HomeServicesWhereUniqueInput
  }

  /**
   * HomeServices findFirst
   */
  export type HomeServicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeServices
     */
    select?: HomeServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeServices
     */
    omit?: HomeServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeServicesInclude<ExtArgs> | null
    /**
     * Filter, which HomeServices to fetch.
     */
    where?: HomeServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeServices to fetch.
     */
    orderBy?: HomeServicesOrderByWithRelationInput | HomeServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeServices.
     */
    cursor?: HomeServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeServices.
     */
    distinct?: HomeServicesScalarFieldEnum | HomeServicesScalarFieldEnum[]
  }

  /**
   * HomeServices findFirstOrThrow
   */
  export type HomeServicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeServices
     */
    select?: HomeServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeServices
     */
    omit?: HomeServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeServicesInclude<ExtArgs> | null
    /**
     * Filter, which HomeServices to fetch.
     */
    where?: HomeServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeServices to fetch.
     */
    orderBy?: HomeServicesOrderByWithRelationInput | HomeServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeServices.
     */
    cursor?: HomeServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeServices.
     */
    distinct?: HomeServicesScalarFieldEnum | HomeServicesScalarFieldEnum[]
  }

  /**
   * HomeServices findMany
   */
  export type HomeServicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeServices
     */
    select?: HomeServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeServices
     */
    omit?: HomeServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeServicesInclude<ExtArgs> | null
    /**
     * Filter, which HomeServices to fetch.
     */
    where?: HomeServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeServices to fetch.
     */
    orderBy?: HomeServicesOrderByWithRelationInput | HomeServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HomeServices.
     */
    cursor?: HomeServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeServices.
     */
    skip?: number
    distinct?: HomeServicesScalarFieldEnum | HomeServicesScalarFieldEnum[]
  }

  /**
   * HomeServices create
   */
  export type HomeServicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeServices
     */
    select?: HomeServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeServices
     */
    omit?: HomeServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeServicesInclude<ExtArgs> | null
    /**
     * The data needed to create a HomeServices.
     */
    data: XOR<HomeServicesCreateInput, HomeServicesUncheckedCreateInput>
  }

  /**
   * HomeServices createMany
   */
  export type HomeServicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HomeServices.
     */
    data: HomeServicesCreateManyInput | HomeServicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HomeServices createManyAndReturn
   */
  export type HomeServicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeServices
     */
    select?: HomeServicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HomeServices
     */
    omit?: HomeServicesOmit<ExtArgs> | null
    /**
     * The data used to create many HomeServices.
     */
    data: HomeServicesCreateManyInput | HomeServicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HomeServices update
   */
  export type HomeServicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeServices
     */
    select?: HomeServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeServices
     */
    omit?: HomeServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeServicesInclude<ExtArgs> | null
    /**
     * The data needed to update a HomeServices.
     */
    data: XOR<HomeServicesUpdateInput, HomeServicesUncheckedUpdateInput>
    /**
     * Choose, which HomeServices to update.
     */
    where: HomeServicesWhereUniqueInput
  }

  /**
   * HomeServices updateMany
   */
  export type HomeServicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HomeServices.
     */
    data: XOR<HomeServicesUpdateManyMutationInput, HomeServicesUncheckedUpdateManyInput>
    /**
     * Filter which HomeServices to update
     */
    where?: HomeServicesWhereInput
    /**
     * Limit how many HomeServices to update.
     */
    limit?: number
  }

  /**
   * HomeServices updateManyAndReturn
   */
  export type HomeServicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeServices
     */
    select?: HomeServicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HomeServices
     */
    omit?: HomeServicesOmit<ExtArgs> | null
    /**
     * The data used to update HomeServices.
     */
    data: XOR<HomeServicesUpdateManyMutationInput, HomeServicesUncheckedUpdateManyInput>
    /**
     * Filter which HomeServices to update
     */
    where?: HomeServicesWhereInput
    /**
     * Limit how many HomeServices to update.
     */
    limit?: number
  }

  /**
   * HomeServices upsert
   */
  export type HomeServicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeServices
     */
    select?: HomeServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeServices
     */
    omit?: HomeServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeServicesInclude<ExtArgs> | null
    /**
     * The filter to search for the HomeServices to update in case it exists.
     */
    where: HomeServicesWhereUniqueInput
    /**
     * In case the HomeServices found by the `where` argument doesn't exist, create a new HomeServices with this data.
     */
    create: XOR<HomeServicesCreateInput, HomeServicesUncheckedCreateInput>
    /**
     * In case the HomeServices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HomeServicesUpdateInput, HomeServicesUncheckedUpdateInput>
  }

  /**
   * HomeServices delete
   */
  export type HomeServicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeServices
     */
    select?: HomeServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeServices
     */
    omit?: HomeServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeServicesInclude<ExtArgs> | null
    /**
     * Filter which HomeServices to delete.
     */
    where: HomeServicesWhereUniqueInput
  }

  /**
   * HomeServices deleteMany
   */
  export type HomeServicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HomeServices to delete
     */
    where?: HomeServicesWhereInput
    /**
     * Limit how many HomeServices to delete.
     */
    limit?: number
  }

  /**
   * HomeServices.services
   */
  export type HomeServices$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    where?: ServicesWhereInput
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    cursor?: ServicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * HomeServices without action
   */
  export type HomeServicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeServices
     */
    select?: HomeServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeServices
     */
    omit?: HomeServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeServicesInclude<ExtArgs> | null
  }


  /**
   * Model Services
   */

  export type AggregateServices = {
    _count: ServicesCountAggregateOutputType | null
    _avg: ServicesAvgAggregateOutputType | null
    _sum: ServicesSumAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  export type ServicesAvgAggregateOutputType = {
    id: number | null
    serviceTypeId: number | null
    patientId: number | null
    latitude: number | null
    longitude: number | null
    providersId: number | null
  }

  export type ServicesSumAggregateOutputType = {
    id: number | null
    serviceTypeId: number | null
    patientId: number | null
    latitude: number | null
    longitude: number | null
    providersId: number[]
  }

  export type ServicesMinAggregateOutputType = {
    id: number | null
    serviceTypeId: number | null
    patientId: number | null
    latitude: number | null
    longitude: number | null
    address: string | null
    description: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServicesMaxAggregateOutputType = {
    id: number | null
    serviceTypeId: number | null
    patientId: number | null
    latitude: number | null
    longitude: number | null
    address: string | null
    description: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServicesCountAggregateOutputType = {
    id: number
    serviceTypeId: number
    patientId: number
    latitude: number
    longitude: number
    address: number
    description: number
    patient: number
    providers: number
    status: number
    providersId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServicesAvgAggregateInputType = {
    id?: true
    serviceTypeId?: true
    patientId?: true
    latitude?: true
    longitude?: true
    providersId?: true
  }

  export type ServicesSumAggregateInputType = {
    id?: true
    serviceTypeId?: true
    patientId?: true
    latitude?: true
    longitude?: true
    providersId?: true
  }

  export type ServicesMinAggregateInputType = {
    id?: true
    serviceTypeId?: true
    patientId?: true
    latitude?: true
    longitude?: true
    address?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServicesMaxAggregateInputType = {
    id?: true
    serviceTypeId?: true
    patientId?: true
    latitude?: true
    longitude?: true
    address?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServicesCountAggregateInputType = {
    id?: true
    serviceTypeId?: true
    patientId?: true
    latitude?: true
    longitude?: true
    address?: true
    description?: true
    patient?: true
    providers?: true
    status?: true
    providersId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to aggregate.
     */
    where?: ServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicesMaxAggregateInputType
  }

  export type GetServicesAggregateType<T extends ServicesAggregateArgs> = {
        [P in keyof T & keyof AggregateServices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServices[P]>
      : GetScalarType<T[P], AggregateServices[P]>
  }




  export type ServicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicesWhereInput
    orderBy?: ServicesOrderByWithAggregationInput | ServicesOrderByWithAggregationInput[]
    by: ServicesScalarFieldEnum[] | ServicesScalarFieldEnum
    having?: ServicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicesCountAggregateInputType | true
    _avg?: ServicesAvgAggregateInputType
    _sum?: ServicesSumAggregateInputType
    _min?: ServicesMinAggregateInputType
    _max?: ServicesMaxAggregateInputType
  }

  export type ServicesGroupByOutputType = {
    id: number
    serviceTypeId: number
    patientId: number
    latitude: number
    longitude: number
    address: string
    description: string
    patient: JsonValue
    providers: JsonValue[]
    status: $Enums.Status
    providersId: number[]
    createdAt: Date
    updatedAt: Date
    _count: ServicesCountAggregateOutputType | null
    _avg: ServicesAvgAggregateOutputType | null
    _sum: ServicesSumAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  type GetServicesGroupByPayload<T extends ServicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicesGroupByOutputType[P]>
            : GetScalarType<T[P], ServicesGroupByOutputType[P]>
        }
      >
    >


  export type ServicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceTypeId?: boolean
    patientId?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    description?: boolean
    patient?: boolean
    providers?: boolean
    status?: boolean
    providersId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    serviceType?: boolean | HomeServicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["services"]>

  export type ServicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceTypeId?: boolean
    patientId?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    description?: boolean
    patient?: boolean
    providers?: boolean
    status?: boolean
    providersId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    serviceType?: boolean | HomeServicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["services"]>

  export type ServicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceTypeId?: boolean
    patientId?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    description?: boolean
    patient?: boolean
    providers?: boolean
    status?: boolean
    providersId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    serviceType?: boolean | HomeServicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["services"]>

  export type ServicesSelectScalar = {
    id?: boolean
    serviceTypeId?: boolean
    patientId?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    description?: boolean
    patient?: boolean
    providers?: boolean
    status?: boolean
    providersId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serviceTypeId" | "patientId" | "latitude" | "longitude" | "address" | "description" | "patient" | "providers" | "status" | "providersId" | "createdAt" | "updatedAt", ExtArgs["result"]["services"]>
  export type ServicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceType?: boolean | HomeServicesDefaultArgs<ExtArgs>
  }
  export type ServicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceType?: boolean | HomeServicesDefaultArgs<ExtArgs>
  }
  export type ServicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceType?: boolean | HomeServicesDefaultArgs<ExtArgs>
  }

  export type $ServicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Services"
    objects: {
      serviceType: Prisma.$HomeServicesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      serviceTypeId: number
      patientId: number
      latitude: number
      longitude: number
      address: string
      description: string
      patient: Prisma.JsonValue
      providers: Prisma.JsonValue[]
      status: $Enums.Status
      providersId: number[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["services"]>
    composites: {}
  }

  type ServicesGetPayload<S extends boolean | null | undefined | ServicesDefaultArgs> = $Result.GetResult<Prisma.$ServicesPayload, S>

  type ServicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicesCountAggregateInputType | true
    }

  export interface ServicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Services'], meta: { name: 'Services' } }
    /**
     * Find zero or one Services that matches the filter.
     * @param {ServicesFindUniqueArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicesFindUniqueArgs>(args: SelectSubset<T, ServicesFindUniqueArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Services that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicesFindUniqueOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicesFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesFindFirstArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicesFindFirstArgs>(args?: SelectSubset<T, ServicesFindFirstArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Services that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesFindFirstOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicesFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.services.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.services.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicesWithIdOnly = await prisma.services.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicesFindManyArgs>(args?: SelectSubset<T, ServicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Services.
     * @param {ServicesCreateArgs} args - Arguments to create a Services.
     * @example
     * // Create one Services
     * const Services = await prisma.services.create({
     *   data: {
     *     // ... data to create a Services
     *   }
     * })
     * 
     */
    create<T extends ServicesCreateArgs>(args: SelectSubset<T, ServicesCreateArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Services.
     * @param {ServicesCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const services = await prisma.services.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicesCreateManyArgs>(args?: SelectSubset<T, ServicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServicesCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const services = await prisma.services.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const servicesWithIdOnly = await prisma.services.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicesCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Services.
     * @param {ServicesDeleteArgs} args - Arguments to delete one Services.
     * @example
     * // Delete one Services
     * const Services = await prisma.services.delete({
     *   where: {
     *     // ... filter to delete one Services
     *   }
     * })
     * 
     */
    delete<T extends ServicesDeleteArgs>(args: SelectSubset<T, ServicesDeleteArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Services.
     * @param {ServicesUpdateArgs} args - Arguments to update one Services.
     * @example
     * // Update one Services
     * const services = await prisma.services.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicesUpdateArgs>(args: SelectSubset<T, ServicesUpdateArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Services.
     * @param {ServicesDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.services.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicesDeleteManyArgs>(args?: SelectSubset<T, ServicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const services = await prisma.services.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicesUpdateManyArgs>(args: SelectSubset<T, ServicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServicesUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const services = await prisma.services.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const servicesWithIdOnly = await prisma.services.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServicesUpdateManyAndReturnArgs>(args: SelectSubset<T, ServicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Services.
     * @param {ServicesUpsertArgs} args - Arguments to update or create a Services.
     * @example
     * // Update or create a Services
     * const services = await prisma.services.upsert({
     *   create: {
     *     // ... data to create a Services
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Services we want to update
     *   }
     * })
     */
    upsert<T extends ServicesUpsertArgs>(args: SelectSubset<T, ServicesUpsertArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.services.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServicesCountArgs>(
      args?: Subset<T, ServicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicesAggregateArgs>(args: Subset<T, ServicesAggregateArgs>): Prisma.PrismaPromise<GetServicesAggregateType<T>>

    /**
     * Group by Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesGroupByArgs} args - Group by arguments.
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
      T extends ServicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicesGroupByArgs['orderBy'] }
        : { orderBy?: ServicesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Services model
   */
  readonly fields: ServicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Services.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    serviceType<T extends HomeServicesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HomeServicesDefaultArgs<ExtArgs>>): Prisma__HomeServicesClient<$Result.GetResult<Prisma.$HomeServicesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Services model
   */ 
  interface ServicesFieldRefs {
    readonly id: FieldRef<"Services", 'Int'>
    readonly serviceTypeId: FieldRef<"Services", 'Int'>
    readonly patientId: FieldRef<"Services", 'Int'>
    readonly latitude: FieldRef<"Services", 'Float'>
    readonly longitude: FieldRef<"Services", 'Float'>
    readonly address: FieldRef<"Services", 'String'>
    readonly description: FieldRef<"Services", 'String'>
    readonly patient: FieldRef<"Services", 'Json'>
    readonly providers: FieldRef<"Services", 'Json[]'>
    readonly status: FieldRef<"Services", 'Status'>
    readonly providersId: FieldRef<"Services", 'Int[]'>
    readonly createdAt: FieldRef<"Services", 'DateTime'>
    readonly updatedAt: FieldRef<"Services", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Services findUnique
   */
  export type ServicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where: ServicesWhereUniqueInput
  }

  /**
   * Services findUniqueOrThrow
   */
  export type ServicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where: ServicesWhereUniqueInput
  }

  /**
   * Services findFirst
   */
  export type ServicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * Services findFirstOrThrow
   */
  export type ServicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * Services findMany
   */
  export type ServicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * Services create
   */
  export type ServicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    /**
     * The data needed to create a Services.
     */
    data: XOR<ServicesCreateInput, ServicesUncheckedCreateInput>
  }

  /**
   * Services createMany
   */
  export type ServicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServicesCreateManyInput | ServicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Services createManyAndReturn
   */
  export type ServicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServicesCreateManyInput | ServicesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Services update
   */
  export type ServicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    /**
     * The data needed to update a Services.
     */
    data: XOR<ServicesUpdateInput, ServicesUncheckedUpdateInput>
    /**
     * Choose, which Services to update.
     */
    where: ServicesWhereUniqueInput
  }

  /**
   * Services updateMany
   */
  export type ServicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServicesUpdateManyMutationInput, ServicesUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServicesWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Services updateManyAndReturn
   */
  export type ServicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServicesUpdateManyMutationInput, ServicesUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServicesWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Services upsert
   */
  export type ServicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    /**
     * The filter to search for the Services to update in case it exists.
     */
    where: ServicesWhereUniqueInput
    /**
     * In case the Services found by the `where` argument doesn't exist, create a new Services with this data.
     */
    create: XOR<ServicesCreateInput, ServicesUncheckedCreateInput>
    /**
     * In case the Services was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicesUpdateInput, ServicesUncheckedUpdateInput>
  }

  /**
   * Services delete
   */
  export type ServicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    /**
     * Filter which Services to delete.
     */
    where: ServicesWhereUniqueInput
  }

  /**
   * Services deleteMany
   */
  export type ServicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServicesWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Services without action
   */
  export type ServicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
  }


  /**
   * Model Counts
   */

  export type AggregateCounts = {
    _count: CountsCountAggregateOutputType | null
    _avg: CountsAvgAggregateOutputType | null
    _sum: CountsSumAggregateOutputType | null
    _min: CountsMinAggregateOutputType | null
    _max: CountsMaxAggregateOutputType | null
  }

  export type CountsAvgAggregateOutputType = {
    id: number | null
    completed: number | null
    pending: number | null
    inProgress: number | null
    cancelled: number | null
    cancelledByPatient: number | null
    cancelledByProviders: number | null
  }

  export type CountsSumAggregateOutputType = {
    id: number | null
    completed: number | null
    pending: number | null
    inProgress: number | null
    cancelled: number | null
    cancelledByPatient: number | null
    cancelledByProviders: number | null
  }

  export type CountsMinAggregateOutputType = {
    id: number | null
    completed: number | null
    pending: number | null
    inProgress: number | null
    cancelled: number | null
    cancelledByPatient: number | null
    cancelledByProviders: number | null
  }

  export type CountsMaxAggregateOutputType = {
    id: number | null
    completed: number | null
    pending: number | null
    inProgress: number | null
    cancelled: number | null
    cancelledByPatient: number | null
    cancelledByProviders: number | null
  }

  export type CountsCountAggregateOutputType = {
    id: number
    completed: number
    pending: number
    inProgress: number
    cancelled: number
    cancelledByPatient: number
    cancelledByProviders: number
    _all: number
  }


  export type CountsAvgAggregateInputType = {
    id?: true
    completed?: true
    pending?: true
    inProgress?: true
    cancelled?: true
    cancelledByPatient?: true
    cancelledByProviders?: true
  }

  export type CountsSumAggregateInputType = {
    id?: true
    completed?: true
    pending?: true
    inProgress?: true
    cancelled?: true
    cancelledByPatient?: true
    cancelledByProviders?: true
  }

  export type CountsMinAggregateInputType = {
    id?: true
    completed?: true
    pending?: true
    inProgress?: true
    cancelled?: true
    cancelledByPatient?: true
    cancelledByProviders?: true
  }

  export type CountsMaxAggregateInputType = {
    id?: true
    completed?: true
    pending?: true
    inProgress?: true
    cancelled?: true
    cancelledByPatient?: true
    cancelledByProviders?: true
  }

  export type CountsCountAggregateInputType = {
    id?: true
    completed?: true
    pending?: true
    inProgress?: true
    cancelled?: true
    cancelledByPatient?: true
    cancelledByProviders?: true
    _all?: true
  }

  export type CountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Counts to aggregate.
     */
    where?: CountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Counts to fetch.
     */
    orderBy?: CountsOrderByWithRelationInput | CountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Counts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Counts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Counts
    **/
    _count?: true | CountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountsMaxAggregateInputType
  }

  export type GetCountsAggregateType<T extends CountsAggregateArgs> = {
        [P in keyof T & keyof AggregateCounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCounts[P]>
      : GetScalarType<T[P], AggregateCounts[P]>
  }




  export type CountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountsWhereInput
    orderBy?: CountsOrderByWithAggregationInput | CountsOrderByWithAggregationInput[]
    by: CountsScalarFieldEnum[] | CountsScalarFieldEnum
    having?: CountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountsCountAggregateInputType | true
    _avg?: CountsAvgAggregateInputType
    _sum?: CountsSumAggregateInputType
    _min?: CountsMinAggregateInputType
    _max?: CountsMaxAggregateInputType
  }

  export type CountsGroupByOutputType = {
    id: number
    completed: number
    pending: number
    inProgress: number
    cancelled: number
    cancelledByPatient: number
    cancelledByProviders: number
    _count: CountsCountAggregateOutputType | null
    _avg: CountsAvgAggregateOutputType | null
    _sum: CountsSumAggregateOutputType | null
    _min: CountsMinAggregateOutputType | null
    _max: CountsMaxAggregateOutputType | null
  }

  type GetCountsGroupByPayload<T extends CountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountsGroupByOutputType[P]>
            : GetScalarType<T[P], CountsGroupByOutputType[P]>
        }
      >
    >


  export type CountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    completed?: boolean
    pending?: boolean
    inProgress?: boolean
    cancelled?: boolean
    cancelledByPatient?: boolean
    cancelledByProviders?: boolean
  }, ExtArgs["result"]["counts"]>

  export type CountsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    completed?: boolean
    pending?: boolean
    inProgress?: boolean
    cancelled?: boolean
    cancelledByPatient?: boolean
    cancelledByProviders?: boolean
  }, ExtArgs["result"]["counts"]>

  export type CountsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    completed?: boolean
    pending?: boolean
    inProgress?: boolean
    cancelled?: boolean
    cancelledByPatient?: boolean
    cancelledByProviders?: boolean
  }, ExtArgs["result"]["counts"]>

  export type CountsSelectScalar = {
    id?: boolean
    completed?: boolean
    pending?: boolean
    inProgress?: boolean
    cancelled?: boolean
    cancelledByPatient?: boolean
    cancelledByProviders?: boolean
  }

  export type CountsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "completed" | "pending" | "inProgress" | "cancelled" | "cancelledByPatient" | "cancelledByProviders", ExtArgs["result"]["counts"]>

  export type $CountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Counts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      completed: number
      pending: number
      inProgress: number
      cancelled: number
      cancelledByPatient: number
      cancelledByProviders: number
    }, ExtArgs["result"]["counts"]>
    composites: {}
  }

  type CountsGetPayload<S extends boolean | null | undefined | CountsDefaultArgs> = $Result.GetResult<Prisma.$CountsPayload, S>

  type CountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountsCountAggregateInputType | true
    }

  export interface CountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Counts'], meta: { name: 'Counts' } }
    /**
     * Find zero or one Counts that matches the filter.
     * @param {CountsFindUniqueArgs} args - Arguments to find a Counts
     * @example
     * // Get one Counts
     * const counts = await prisma.counts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountsFindUniqueArgs>(args: SelectSubset<T, CountsFindUniqueArgs<ExtArgs>>): Prisma__CountsClient<$Result.GetResult<Prisma.$CountsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Counts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountsFindUniqueOrThrowArgs} args - Arguments to find a Counts
     * @example
     * // Get one Counts
     * const counts = await prisma.counts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountsFindUniqueOrThrowArgs>(args: SelectSubset<T, CountsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountsClient<$Result.GetResult<Prisma.$CountsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Counts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountsFindFirstArgs} args - Arguments to find a Counts
     * @example
     * // Get one Counts
     * const counts = await prisma.counts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountsFindFirstArgs>(args?: SelectSubset<T, CountsFindFirstArgs<ExtArgs>>): Prisma__CountsClient<$Result.GetResult<Prisma.$CountsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Counts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountsFindFirstOrThrowArgs} args - Arguments to find a Counts
     * @example
     * // Get one Counts
     * const counts = await prisma.counts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountsFindFirstOrThrowArgs>(args?: SelectSubset<T, CountsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountsClient<$Result.GetResult<Prisma.$CountsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Counts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Counts
     * const counts = await prisma.counts.findMany()
     * 
     * // Get first 10 Counts
     * const counts = await prisma.counts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countsWithIdOnly = await prisma.counts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountsFindManyArgs>(args?: SelectSubset<T, CountsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Counts.
     * @param {CountsCreateArgs} args - Arguments to create a Counts.
     * @example
     * // Create one Counts
     * const Counts = await prisma.counts.create({
     *   data: {
     *     // ... data to create a Counts
     *   }
     * })
     * 
     */
    create<T extends CountsCreateArgs>(args: SelectSubset<T, CountsCreateArgs<ExtArgs>>): Prisma__CountsClient<$Result.GetResult<Prisma.$CountsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Counts.
     * @param {CountsCreateManyArgs} args - Arguments to create many Counts.
     * @example
     * // Create many Counts
     * const counts = await prisma.counts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountsCreateManyArgs>(args?: SelectSubset<T, CountsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Counts and returns the data saved in the database.
     * @param {CountsCreateManyAndReturnArgs} args - Arguments to create many Counts.
     * @example
     * // Create many Counts
     * const counts = await prisma.counts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Counts and only return the `id`
     * const countsWithIdOnly = await prisma.counts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountsCreateManyAndReturnArgs>(args?: SelectSubset<T, CountsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Counts.
     * @param {CountsDeleteArgs} args - Arguments to delete one Counts.
     * @example
     * // Delete one Counts
     * const Counts = await prisma.counts.delete({
     *   where: {
     *     // ... filter to delete one Counts
     *   }
     * })
     * 
     */
    delete<T extends CountsDeleteArgs>(args: SelectSubset<T, CountsDeleteArgs<ExtArgs>>): Prisma__CountsClient<$Result.GetResult<Prisma.$CountsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Counts.
     * @param {CountsUpdateArgs} args - Arguments to update one Counts.
     * @example
     * // Update one Counts
     * const counts = await prisma.counts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountsUpdateArgs>(args: SelectSubset<T, CountsUpdateArgs<ExtArgs>>): Prisma__CountsClient<$Result.GetResult<Prisma.$CountsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Counts.
     * @param {CountsDeleteManyArgs} args - Arguments to filter Counts to delete.
     * @example
     * // Delete a few Counts
     * const { count } = await prisma.counts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountsDeleteManyArgs>(args?: SelectSubset<T, CountsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Counts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Counts
     * const counts = await prisma.counts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountsUpdateManyArgs>(args: SelectSubset<T, CountsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Counts and returns the data updated in the database.
     * @param {CountsUpdateManyAndReturnArgs} args - Arguments to update many Counts.
     * @example
     * // Update many Counts
     * const counts = await prisma.counts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Counts and only return the `id`
     * const countsWithIdOnly = await prisma.counts.updateManyAndReturn({
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
    updateManyAndReturn<T extends CountsUpdateManyAndReturnArgs>(args: SelectSubset<T, CountsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Counts.
     * @param {CountsUpsertArgs} args - Arguments to update or create a Counts.
     * @example
     * // Update or create a Counts
     * const counts = await prisma.counts.upsert({
     *   create: {
     *     // ... data to create a Counts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Counts we want to update
     *   }
     * })
     */
    upsert<T extends CountsUpsertArgs>(args: SelectSubset<T, CountsUpsertArgs<ExtArgs>>): Prisma__CountsClient<$Result.GetResult<Prisma.$CountsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Counts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountsCountArgs} args - Arguments to filter Counts to count.
     * @example
     * // Count the number of Counts
     * const count = await prisma.counts.count({
     *   where: {
     *     // ... the filter for the Counts we want to count
     *   }
     * })
    **/
    count<T extends CountsCountArgs>(
      args?: Subset<T, CountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Counts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountsAggregateArgs>(args: Subset<T, CountsAggregateArgs>): Prisma.PrismaPromise<GetCountsAggregateType<T>>

    /**
     * Group by Counts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountsGroupByArgs} args - Group by arguments.
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
      T extends CountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountsGroupByArgs['orderBy'] }
        : { orderBy?: CountsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Counts model
   */
  readonly fields: CountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Counts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Counts model
   */ 
  interface CountsFieldRefs {
    readonly id: FieldRef<"Counts", 'Int'>
    readonly completed: FieldRef<"Counts", 'Int'>
    readonly pending: FieldRef<"Counts", 'Int'>
    readonly inProgress: FieldRef<"Counts", 'Int'>
    readonly cancelled: FieldRef<"Counts", 'Int'>
    readonly cancelledByPatient: FieldRef<"Counts", 'Int'>
    readonly cancelledByProviders: FieldRef<"Counts", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Counts findUnique
   */
  export type CountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counts
     */
    select?: CountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counts
     */
    omit?: CountsOmit<ExtArgs> | null
    /**
     * Filter, which Counts to fetch.
     */
    where: CountsWhereUniqueInput
  }

  /**
   * Counts findUniqueOrThrow
   */
  export type CountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counts
     */
    select?: CountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counts
     */
    omit?: CountsOmit<ExtArgs> | null
    /**
     * Filter, which Counts to fetch.
     */
    where: CountsWhereUniqueInput
  }

  /**
   * Counts findFirst
   */
  export type CountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counts
     */
    select?: CountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counts
     */
    omit?: CountsOmit<ExtArgs> | null
    /**
     * Filter, which Counts to fetch.
     */
    where?: CountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Counts to fetch.
     */
    orderBy?: CountsOrderByWithRelationInput | CountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Counts.
     */
    cursor?: CountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Counts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Counts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Counts.
     */
    distinct?: CountsScalarFieldEnum | CountsScalarFieldEnum[]
  }

  /**
   * Counts findFirstOrThrow
   */
  export type CountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counts
     */
    select?: CountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counts
     */
    omit?: CountsOmit<ExtArgs> | null
    /**
     * Filter, which Counts to fetch.
     */
    where?: CountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Counts to fetch.
     */
    orderBy?: CountsOrderByWithRelationInput | CountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Counts.
     */
    cursor?: CountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Counts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Counts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Counts.
     */
    distinct?: CountsScalarFieldEnum | CountsScalarFieldEnum[]
  }

  /**
   * Counts findMany
   */
  export type CountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counts
     */
    select?: CountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counts
     */
    omit?: CountsOmit<ExtArgs> | null
    /**
     * Filter, which Counts to fetch.
     */
    where?: CountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Counts to fetch.
     */
    orderBy?: CountsOrderByWithRelationInput | CountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Counts.
     */
    cursor?: CountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Counts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Counts.
     */
    skip?: number
    distinct?: CountsScalarFieldEnum | CountsScalarFieldEnum[]
  }

  /**
   * Counts create
   */
  export type CountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counts
     */
    select?: CountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counts
     */
    omit?: CountsOmit<ExtArgs> | null
    /**
     * The data needed to create a Counts.
     */
    data?: XOR<CountsCreateInput, CountsUncheckedCreateInput>
  }

  /**
   * Counts createMany
   */
  export type CountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Counts.
     */
    data: CountsCreateManyInput | CountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Counts createManyAndReturn
   */
  export type CountsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counts
     */
    select?: CountsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Counts
     */
    omit?: CountsOmit<ExtArgs> | null
    /**
     * The data used to create many Counts.
     */
    data: CountsCreateManyInput | CountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Counts update
   */
  export type CountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counts
     */
    select?: CountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counts
     */
    omit?: CountsOmit<ExtArgs> | null
    /**
     * The data needed to update a Counts.
     */
    data: XOR<CountsUpdateInput, CountsUncheckedUpdateInput>
    /**
     * Choose, which Counts to update.
     */
    where: CountsWhereUniqueInput
  }

  /**
   * Counts updateMany
   */
  export type CountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Counts.
     */
    data: XOR<CountsUpdateManyMutationInput, CountsUncheckedUpdateManyInput>
    /**
     * Filter which Counts to update
     */
    where?: CountsWhereInput
    /**
     * Limit how many Counts to update.
     */
    limit?: number
  }

  /**
   * Counts updateManyAndReturn
   */
  export type CountsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counts
     */
    select?: CountsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Counts
     */
    omit?: CountsOmit<ExtArgs> | null
    /**
     * The data used to update Counts.
     */
    data: XOR<CountsUpdateManyMutationInput, CountsUncheckedUpdateManyInput>
    /**
     * Filter which Counts to update
     */
    where?: CountsWhereInput
    /**
     * Limit how many Counts to update.
     */
    limit?: number
  }

  /**
   * Counts upsert
   */
  export type CountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counts
     */
    select?: CountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counts
     */
    omit?: CountsOmit<ExtArgs> | null
    /**
     * The filter to search for the Counts to update in case it exists.
     */
    where: CountsWhereUniqueInput
    /**
     * In case the Counts found by the `where` argument doesn't exist, create a new Counts with this data.
     */
    create: XOR<CountsCreateInput, CountsUncheckedCreateInput>
    /**
     * In case the Counts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountsUpdateInput, CountsUncheckedUpdateInput>
  }

  /**
   * Counts delete
   */
  export type CountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counts
     */
    select?: CountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counts
     */
    omit?: CountsOmit<ExtArgs> | null
    /**
     * Filter which Counts to delete.
     */
    where: CountsWhereUniqueInput
  }

  /**
   * Counts deleteMany
   */
  export type CountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Counts to delete
     */
    where?: CountsWhereInput
    /**
     * Limit how many Counts to delete.
     */
    limit?: number
  }

  /**
   * Counts without action
   */
  export type CountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counts
     */
    select?: CountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counts
     */
    omit?: CountsOmit<ExtArgs> | null
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


  export const HomeServicesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HomeServicesScalarFieldEnum = (typeof HomeServicesScalarFieldEnum)[keyof typeof HomeServicesScalarFieldEnum]


  export const ServicesScalarFieldEnum: {
    id: 'id',
    serviceTypeId: 'serviceTypeId',
    patientId: 'patientId',
    latitude: 'latitude',
    longitude: 'longitude',
    address: 'address',
    description: 'description',
    patient: 'patient',
    providers: 'providers',
    status: 'status',
    providersId: 'providersId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServicesScalarFieldEnum = (typeof ServicesScalarFieldEnum)[keyof typeof ServicesScalarFieldEnum]


  export const CountsScalarFieldEnum: {
    id: 'id',
    completed: 'completed',
    pending: 'pending',
    inProgress: 'inProgress',
    cancelled: 'cancelled',
    cancelledByPatient: 'cancelledByPatient',
    cancelledByProviders: 'cancelledByProviders'
  };

  export type CountsScalarFieldEnum = (typeof CountsScalarFieldEnum)[keyof typeof CountsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    
  /**
   * Deep Input Types
   */


  export type HomeServicesWhereInput = {
    AND?: HomeServicesWhereInput | HomeServicesWhereInput[]
    OR?: HomeServicesWhereInput[]
    NOT?: HomeServicesWhereInput | HomeServicesWhereInput[]
    id?: IntFilter<"HomeServices"> | number
    name?: StringFilter<"HomeServices"> | string
    createdAt?: DateTimeFilter<"HomeServices"> | Date | string
    updatedAt?: DateTimeFilter<"HomeServices"> | Date | string
    services?: ServicesListRelationFilter
  }

  export type HomeServicesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    services?: ServicesOrderByRelationAggregateInput
  }

  export type HomeServicesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: HomeServicesWhereInput | HomeServicesWhereInput[]
    OR?: HomeServicesWhereInput[]
    NOT?: HomeServicesWhereInput | HomeServicesWhereInput[]
    createdAt?: DateTimeFilter<"HomeServices"> | Date | string
    updatedAt?: DateTimeFilter<"HomeServices"> | Date | string
    services?: ServicesListRelationFilter
  }, "id" | "name">

  export type HomeServicesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HomeServicesCountOrderByAggregateInput
    _avg?: HomeServicesAvgOrderByAggregateInput
    _max?: HomeServicesMaxOrderByAggregateInput
    _min?: HomeServicesMinOrderByAggregateInput
    _sum?: HomeServicesSumOrderByAggregateInput
  }

  export type HomeServicesScalarWhereWithAggregatesInput = {
    AND?: HomeServicesScalarWhereWithAggregatesInput | HomeServicesScalarWhereWithAggregatesInput[]
    OR?: HomeServicesScalarWhereWithAggregatesInput[]
    NOT?: HomeServicesScalarWhereWithAggregatesInput | HomeServicesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HomeServices"> | number
    name?: StringWithAggregatesFilter<"HomeServices"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HomeServices"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HomeServices"> | Date | string
  }

  export type ServicesWhereInput = {
    AND?: ServicesWhereInput | ServicesWhereInput[]
    OR?: ServicesWhereInput[]
    NOT?: ServicesWhereInput | ServicesWhereInput[]
    id?: IntFilter<"Services"> | number
    serviceTypeId?: IntFilter<"Services"> | number
    patientId?: IntFilter<"Services"> | number
    latitude?: FloatFilter<"Services"> | number
    longitude?: FloatFilter<"Services"> | number
    address?: StringFilter<"Services"> | string
    description?: StringFilter<"Services"> | string
    patient?: JsonFilter<"Services">
    providers?: JsonNullableListFilter<"Services">
    status?: EnumStatusFilter<"Services"> | $Enums.Status
    providersId?: IntNullableListFilter<"Services">
    createdAt?: DateTimeFilter<"Services"> | Date | string
    updatedAt?: DateTimeFilter<"Services"> | Date | string
    serviceType?: XOR<HomeServicesScalarRelationFilter, HomeServicesWhereInput>
  }

  export type ServicesOrderByWithRelationInput = {
    id?: SortOrder
    serviceTypeId?: SortOrder
    patientId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    description?: SortOrder
    patient?: SortOrder
    providers?: SortOrder
    status?: SortOrder
    providersId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    serviceType?: HomeServicesOrderByWithRelationInput
  }

  export type ServicesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServicesWhereInput | ServicesWhereInput[]
    OR?: ServicesWhereInput[]
    NOT?: ServicesWhereInput | ServicesWhereInput[]
    serviceTypeId?: IntFilter<"Services"> | number
    patientId?: IntFilter<"Services"> | number
    latitude?: FloatFilter<"Services"> | number
    longitude?: FloatFilter<"Services"> | number
    address?: StringFilter<"Services"> | string
    description?: StringFilter<"Services"> | string
    patient?: JsonFilter<"Services">
    providers?: JsonNullableListFilter<"Services">
    status?: EnumStatusFilter<"Services"> | $Enums.Status
    providersId?: IntNullableListFilter<"Services">
    createdAt?: DateTimeFilter<"Services"> | Date | string
    updatedAt?: DateTimeFilter<"Services"> | Date | string
    serviceType?: XOR<HomeServicesScalarRelationFilter, HomeServicesWhereInput>
  }, "id">

  export type ServicesOrderByWithAggregationInput = {
    id?: SortOrder
    serviceTypeId?: SortOrder
    patientId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    description?: SortOrder
    patient?: SortOrder
    providers?: SortOrder
    status?: SortOrder
    providersId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServicesCountOrderByAggregateInput
    _avg?: ServicesAvgOrderByAggregateInput
    _max?: ServicesMaxOrderByAggregateInput
    _min?: ServicesMinOrderByAggregateInput
    _sum?: ServicesSumOrderByAggregateInput
  }

  export type ServicesScalarWhereWithAggregatesInput = {
    AND?: ServicesScalarWhereWithAggregatesInput | ServicesScalarWhereWithAggregatesInput[]
    OR?: ServicesScalarWhereWithAggregatesInput[]
    NOT?: ServicesScalarWhereWithAggregatesInput | ServicesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Services"> | number
    serviceTypeId?: IntWithAggregatesFilter<"Services"> | number
    patientId?: IntWithAggregatesFilter<"Services"> | number
    latitude?: FloatWithAggregatesFilter<"Services"> | number
    longitude?: FloatWithAggregatesFilter<"Services"> | number
    address?: StringWithAggregatesFilter<"Services"> | string
    description?: StringWithAggregatesFilter<"Services"> | string
    patient?: JsonWithAggregatesFilter<"Services">
    providers?: JsonNullableListFilter<"Services">
    status?: EnumStatusWithAggregatesFilter<"Services"> | $Enums.Status
    providersId?: IntNullableListFilter<"Services">
    createdAt?: DateTimeWithAggregatesFilter<"Services"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Services"> | Date | string
  }

  export type CountsWhereInput = {
    AND?: CountsWhereInput | CountsWhereInput[]
    OR?: CountsWhereInput[]
    NOT?: CountsWhereInput | CountsWhereInput[]
    id?: IntFilter<"Counts"> | number
    completed?: IntFilter<"Counts"> | number
    pending?: IntFilter<"Counts"> | number
    inProgress?: IntFilter<"Counts"> | number
    cancelled?: IntFilter<"Counts"> | number
    cancelledByPatient?: IntFilter<"Counts"> | number
    cancelledByProviders?: IntFilter<"Counts"> | number
  }

  export type CountsOrderByWithRelationInput = {
    id?: SortOrder
    completed?: SortOrder
    pending?: SortOrder
    inProgress?: SortOrder
    cancelled?: SortOrder
    cancelledByPatient?: SortOrder
    cancelledByProviders?: SortOrder
  }

  export type CountsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CountsWhereInput | CountsWhereInput[]
    OR?: CountsWhereInput[]
    NOT?: CountsWhereInput | CountsWhereInput[]
    completed?: IntFilter<"Counts"> | number
    pending?: IntFilter<"Counts"> | number
    inProgress?: IntFilter<"Counts"> | number
    cancelled?: IntFilter<"Counts"> | number
    cancelledByPatient?: IntFilter<"Counts"> | number
    cancelledByProviders?: IntFilter<"Counts"> | number
  }, "id">

  export type CountsOrderByWithAggregationInput = {
    id?: SortOrder
    completed?: SortOrder
    pending?: SortOrder
    inProgress?: SortOrder
    cancelled?: SortOrder
    cancelledByPatient?: SortOrder
    cancelledByProviders?: SortOrder
    _count?: CountsCountOrderByAggregateInput
    _avg?: CountsAvgOrderByAggregateInput
    _max?: CountsMaxOrderByAggregateInput
    _min?: CountsMinOrderByAggregateInput
    _sum?: CountsSumOrderByAggregateInput
  }

  export type CountsScalarWhereWithAggregatesInput = {
    AND?: CountsScalarWhereWithAggregatesInput | CountsScalarWhereWithAggregatesInput[]
    OR?: CountsScalarWhereWithAggregatesInput[]
    NOT?: CountsScalarWhereWithAggregatesInput | CountsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Counts"> | number
    completed?: IntWithAggregatesFilter<"Counts"> | number
    pending?: IntWithAggregatesFilter<"Counts"> | number
    inProgress?: IntWithAggregatesFilter<"Counts"> | number
    cancelled?: IntWithAggregatesFilter<"Counts"> | number
    cancelledByPatient?: IntWithAggregatesFilter<"Counts"> | number
    cancelledByProviders?: IntWithAggregatesFilter<"Counts"> | number
  }

  export type HomeServicesCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServicesCreateNestedManyWithoutServiceTypeInput
  }

  export type HomeServicesUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServicesUncheckedCreateNestedManyWithoutServiceTypeInput
  }

  export type HomeServicesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServicesUpdateManyWithoutServiceTypeNestedInput
  }

  export type HomeServicesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServicesUncheckedUpdateManyWithoutServiceTypeNestedInput
  }

  export type HomeServicesCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomeServicesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeServicesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicesCreateInput = {
    patientId: number
    latitude: number
    longitude: number
    address: string
    description: string
    patient: JsonNullValueInput | InputJsonValue
    providers?: ServicesCreateprovidersInput | InputJsonValue[]
    status?: $Enums.Status
    providersId?: ServicesCreateprovidersIdInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceType: HomeServicesCreateNestedOneWithoutServicesInput
  }

  export type ServicesUncheckedCreateInput = {
    id?: number
    serviceTypeId: number
    patientId: number
    latitude: number
    longitude: number
    address: string
    description: string
    patient: JsonNullValueInput | InputJsonValue
    providers?: ServicesCreateprovidersInput | InputJsonValue[]
    status?: $Enums.Status
    providersId?: ServicesCreateprovidersIdInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServicesUpdateInput = {
    patientId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    patient?: JsonNullValueInput | InputJsonValue
    providers?: ServicesUpdateprovidersInput | InputJsonValue[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    providersId?: ServicesUpdateprovidersIdInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceType?: HomeServicesUpdateOneRequiredWithoutServicesNestedInput
  }

  export type ServicesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceTypeId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    patient?: JsonNullValueInput | InputJsonValue
    providers?: ServicesUpdateprovidersInput | InputJsonValue[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    providersId?: ServicesUpdateprovidersIdInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicesCreateManyInput = {
    id?: number
    serviceTypeId: number
    patientId: number
    latitude: number
    longitude: number
    address: string
    description: string
    patient: JsonNullValueInput | InputJsonValue
    providers?: ServicesCreateprovidersInput | InputJsonValue[]
    status?: $Enums.Status
    providersId?: ServicesCreateprovidersIdInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServicesUpdateManyMutationInput = {
    patientId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    patient?: JsonNullValueInput | InputJsonValue
    providers?: ServicesUpdateprovidersInput | InputJsonValue[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    providersId?: ServicesUpdateprovidersIdInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceTypeId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    patient?: JsonNullValueInput | InputJsonValue
    providers?: ServicesUpdateprovidersInput | InputJsonValue[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    providersId?: ServicesUpdateprovidersIdInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountsCreateInput = {
    completed?: number
    pending?: number
    inProgress?: number
    cancelled?: number
    cancelledByPatient?: number
    cancelledByProviders?: number
  }

  export type CountsUncheckedCreateInput = {
    id?: number
    completed?: number
    pending?: number
    inProgress?: number
    cancelled?: number
    cancelledByPatient?: number
    cancelledByProviders?: number
  }

  export type CountsUpdateInput = {
    completed?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    inProgress?: IntFieldUpdateOperationsInput | number
    cancelled?: IntFieldUpdateOperationsInput | number
    cancelledByPatient?: IntFieldUpdateOperationsInput | number
    cancelledByProviders?: IntFieldUpdateOperationsInput | number
  }

  export type CountsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    completed?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    inProgress?: IntFieldUpdateOperationsInput | number
    cancelled?: IntFieldUpdateOperationsInput | number
    cancelledByPatient?: IntFieldUpdateOperationsInput | number
    cancelledByProviders?: IntFieldUpdateOperationsInput | number
  }

  export type CountsCreateManyInput = {
    id?: number
    completed?: number
    pending?: number
    inProgress?: number
    cancelled?: number
    cancelledByPatient?: number
    cancelledByProviders?: number
  }

  export type CountsUpdateManyMutationInput = {
    completed?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    inProgress?: IntFieldUpdateOperationsInput | number
    cancelled?: IntFieldUpdateOperationsInput | number
    cancelledByPatient?: IntFieldUpdateOperationsInput | number
    cancelledByProviders?: IntFieldUpdateOperationsInput | number
  }

  export type CountsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    completed?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    inProgress?: IntFieldUpdateOperationsInput | number
    cancelled?: IntFieldUpdateOperationsInput | number
    cancelledByPatient?: IntFieldUpdateOperationsInput | number
    cancelledByProviders?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type ServicesListRelationFilter = {
    every?: ServicesWhereInput
    some?: ServicesWhereInput
    none?: ServicesWhereInput
  }

  export type ServicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HomeServicesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomeServicesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HomeServicesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomeServicesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomeServicesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonNullableListFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type HomeServicesScalarRelationFilter = {
    is?: HomeServicesWhereInput
    isNot?: HomeServicesWhereInput
  }

  export type ServicesCountOrderByAggregateInput = {
    id?: SortOrder
    serviceTypeId?: SortOrder
    patientId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    description?: SortOrder
    patient?: SortOrder
    providers?: SortOrder
    status?: SortOrder
    providersId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServicesAvgOrderByAggregateInput = {
    id?: SortOrder
    serviceTypeId?: SortOrder
    patientId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    providersId?: SortOrder
  }

  export type ServicesMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceTypeId?: SortOrder
    patientId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServicesMinOrderByAggregateInput = {
    id?: SortOrder
    serviceTypeId?: SortOrder
    patientId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServicesSumOrderByAggregateInput = {
    id?: SortOrder
    serviceTypeId?: SortOrder
    patientId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    providersId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type CountsCountOrderByAggregateInput = {
    id?: SortOrder
    completed?: SortOrder
    pending?: SortOrder
    inProgress?: SortOrder
    cancelled?: SortOrder
    cancelledByPatient?: SortOrder
    cancelledByProviders?: SortOrder
  }

  export type CountsAvgOrderByAggregateInput = {
    id?: SortOrder
    completed?: SortOrder
    pending?: SortOrder
    inProgress?: SortOrder
    cancelled?: SortOrder
    cancelledByPatient?: SortOrder
    cancelledByProviders?: SortOrder
  }

  export type CountsMaxOrderByAggregateInput = {
    id?: SortOrder
    completed?: SortOrder
    pending?: SortOrder
    inProgress?: SortOrder
    cancelled?: SortOrder
    cancelledByPatient?: SortOrder
    cancelledByProviders?: SortOrder
  }

  export type CountsMinOrderByAggregateInput = {
    id?: SortOrder
    completed?: SortOrder
    pending?: SortOrder
    inProgress?: SortOrder
    cancelled?: SortOrder
    cancelledByPatient?: SortOrder
    cancelledByProviders?: SortOrder
  }

  export type CountsSumOrderByAggregateInput = {
    id?: SortOrder
    completed?: SortOrder
    pending?: SortOrder
    inProgress?: SortOrder
    cancelled?: SortOrder
    cancelledByPatient?: SortOrder
    cancelledByProviders?: SortOrder
  }

  export type ServicesCreateNestedManyWithoutServiceTypeInput = {
    create?: XOR<ServicesCreateWithoutServiceTypeInput, ServicesUncheckedCreateWithoutServiceTypeInput> | ServicesCreateWithoutServiceTypeInput[] | ServicesUncheckedCreateWithoutServiceTypeInput[]
    connectOrCreate?: ServicesCreateOrConnectWithoutServiceTypeInput | ServicesCreateOrConnectWithoutServiceTypeInput[]
    createMany?: ServicesCreateManyServiceTypeInputEnvelope
    connect?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
  }

  export type ServicesUncheckedCreateNestedManyWithoutServiceTypeInput = {
    create?: XOR<ServicesCreateWithoutServiceTypeInput, ServicesUncheckedCreateWithoutServiceTypeInput> | ServicesCreateWithoutServiceTypeInput[] | ServicesUncheckedCreateWithoutServiceTypeInput[]
    connectOrCreate?: ServicesCreateOrConnectWithoutServiceTypeInput | ServicesCreateOrConnectWithoutServiceTypeInput[]
    createMany?: ServicesCreateManyServiceTypeInputEnvelope
    connect?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ServicesUpdateManyWithoutServiceTypeNestedInput = {
    create?: XOR<ServicesCreateWithoutServiceTypeInput, ServicesUncheckedCreateWithoutServiceTypeInput> | ServicesCreateWithoutServiceTypeInput[] | ServicesUncheckedCreateWithoutServiceTypeInput[]
    connectOrCreate?: ServicesCreateOrConnectWithoutServiceTypeInput | ServicesCreateOrConnectWithoutServiceTypeInput[]
    upsert?: ServicesUpsertWithWhereUniqueWithoutServiceTypeInput | ServicesUpsertWithWhereUniqueWithoutServiceTypeInput[]
    createMany?: ServicesCreateManyServiceTypeInputEnvelope
    set?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
    disconnect?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
    delete?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
    connect?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
    update?: ServicesUpdateWithWhereUniqueWithoutServiceTypeInput | ServicesUpdateWithWhereUniqueWithoutServiceTypeInput[]
    updateMany?: ServicesUpdateManyWithWhereWithoutServiceTypeInput | ServicesUpdateManyWithWhereWithoutServiceTypeInput[]
    deleteMany?: ServicesScalarWhereInput | ServicesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ServicesUncheckedUpdateManyWithoutServiceTypeNestedInput = {
    create?: XOR<ServicesCreateWithoutServiceTypeInput, ServicesUncheckedCreateWithoutServiceTypeInput> | ServicesCreateWithoutServiceTypeInput[] | ServicesUncheckedCreateWithoutServiceTypeInput[]
    connectOrCreate?: ServicesCreateOrConnectWithoutServiceTypeInput | ServicesCreateOrConnectWithoutServiceTypeInput[]
    upsert?: ServicesUpsertWithWhereUniqueWithoutServiceTypeInput | ServicesUpsertWithWhereUniqueWithoutServiceTypeInput[]
    createMany?: ServicesCreateManyServiceTypeInputEnvelope
    set?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
    disconnect?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
    delete?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
    connect?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
    update?: ServicesUpdateWithWhereUniqueWithoutServiceTypeInput | ServicesUpdateWithWhereUniqueWithoutServiceTypeInput[]
    updateMany?: ServicesUpdateManyWithWhereWithoutServiceTypeInput | ServicesUpdateManyWithWhereWithoutServiceTypeInput[]
    deleteMany?: ServicesScalarWhereInput | ServicesScalarWhereInput[]
  }

  export type ServicesCreateprovidersInput = {
    set: InputJsonValue[]
  }

  export type ServicesCreateprovidersIdInput = {
    set: number[]
  }

  export type HomeServicesCreateNestedOneWithoutServicesInput = {
    create?: XOR<HomeServicesCreateWithoutServicesInput, HomeServicesUncheckedCreateWithoutServicesInput>
    connectOrCreate?: HomeServicesCreateOrConnectWithoutServicesInput
    connect?: HomeServicesWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ServicesUpdateprovidersInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type ServicesUpdateprovidersIdInput = {
    set?: number[]
    push?: number | number[]
  }

  export type HomeServicesUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<HomeServicesCreateWithoutServicesInput, HomeServicesUncheckedCreateWithoutServicesInput>
    connectOrCreate?: HomeServicesCreateOrConnectWithoutServicesInput
    upsert?: HomeServicesUpsertWithoutServicesInput
    connect?: HomeServicesWhereUniqueInput
    update?: XOR<XOR<HomeServicesUpdateToOneWithWhereWithoutServicesInput, HomeServicesUpdateWithoutServicesInput>, HomeServicesUncheckedUpdateWithoutServicesInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type ServicesCreateWithoutServiceTypeInput = {
    patientId: number
    latitude: number
    longitude: number
    address: string
    description: string
    patient: JsonNullValueInput | InputJsonValue
    providers?: ServicesCreateprovidersInput | InputJsonValue[]
    status?: $Enums.Status
    providersId?: ServicesCreateprovidersIdInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServicesUncheckedCreateWithoutServiceTypeInput = {
    id?: number
    patientId: number
    latitude: number
    longitude: number
    address: string
    description: string
    patient: JsonNullValueInput | InputJsonValue
    providers?: ServicesCreateprovidersInput | InputJsonValue[]
    status?: $Enums.Status
    providersId?: ServicesCreateprovidersIdInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServicesCreateOrConnectWithoutServiceTypeInput = {
    where: ServicesWhereUniqueInput
    create: XOR<ServicesCreateWithoutServiceTypeInput, ServicesUncheckedCreateWithoutServiceTypeInput>
  }

  export type ServicesCreateManyServiceTypeInputEnvelope = {
    data: ServicesCreateManyServiceTypeInput | ServicesCreateManyServiceTypeInput[]
    skipDuplicates?: boolean
  }

  export type ServicesUpsertWithWhereUniqueWithoutServiceTypeInput = {
    where: ServicesWhereUniqueInput
    update: XOR<ServicesUpdateWithoutServiceTypeInput, ServicesUncheckedUpdateWithoutServiceTypeInput>
    create: XOR<ServicesCreateWithoutServiceTypeInput, ServicesUncheckedCreateWithoutServiceTypeInput>
  }

  export type ServicesUpdateWithWhereUniqueWithoutServiceTypeInput = {
    where: ServicesWhereUniqueInput
    data: XOR<ServicesUpdateWithoutServiceTypeInput, ServicesUncheckedUpdateWithoutServiceTypeInput>
  }

  export type ServicesUpdateManyWithWhereWithoutServiceTypeInput = {
    where: ServicesScalarWhereInput
    data: XOR<ServicesUpdateManyMutationInput, ServicesUncheckedUpdateManyWithoutServiceTypeInput>
  }

  export type ServicesScalarWhereInput = {
    AND?: ServicesScalarWhereInput | ServicesScalarWhereInput[]
    OR?: ServicesScalarWhereInput[]
    NOT?: ServicesScalarWhereInput | ServicesScalarWhereInput[]
    id?: IntFilter<"Services"> | number
    serviceTypeId?: IntFilter<"Services"> | number
    patientId?: IntFilter<"Services"> | number
    latitude?: FloatFilter<"Services"> | number
    longitude?: FloatFilter<"Services"> | number
    address?: StringFilter<"Services"> | string
    description?: StringFilter<"Services"> | string
    patient?: JsonFilter<"Services">
    providers?: JsonNullableListFilter<"Services">
    status?: EnumStatusFilter<"Services"> | $Enums.Status
    providersId?: IntNullableListFilter<"Services">
    createdAt?: DateTimeFilter<"Services"> | Date | string
    updatedAt?: DateTimeFilter<"Services"> | Date | string
  }

  export type HomeServicesCreateWithoutServicesInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomeServicesUncheckedCreateWithoutServicesInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomeServicesCreateOrConnectWithoutServicesInput = {
    where: HomeServicesWhereUniqueInput
    create: XOR<HomeServicesCreateWithoutServicesInput, HomeServicesUncheckedCreateWithoutServicesInput>
  }

  export type HomeServicesUpsertWithoutServicesInput = {
    update: XOR<HomeServicesUpdateWithoutServicesInput, HomeServicesUncheckedUpdateWithoutServicesInput>
    create: XOR<HomeServicesCreateWithoutServicesInput, HomeServicesUncheckedCreateWithoutServicesInput>
    where?: HomeServicesWhereInput
  }

  export type HomeServicesUpdateToOneWithWhereWithoutServicesInput = {
    where?: HomeServicesWhereInput
    data: XOR<HomeServicesUpdateWithoutServicesInput, HomeServicesUncheckedUpdateWithoutServicesInput>
  }

  export type HomeServicesUpdateWithoutServicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeServicesUncheckedUpdateWithoutServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicesCreateManyServiceTypeInput = {
    id?: number
    patientId: number
    latitude: number
    longitude: number
    address: string
    description: string
    patient: JsonNullValueInput | InputJsonValue
    providers?: ServicesCreateprovidersInput | InputJsonValue[]
    status?: $Enums.Status
    providersId?: ServicesCreateprovidersIdInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServicesUpdateWithoutServiceTypeInput = {
    patientId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    patient?: JsonNullValueInput | InputJsonValue
    providers?: ServicesUpdateprovidersInput | InputJsonValue[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    providersId?: ServicesUpdateprovidersIdInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicesUncheckedUpdateWithoutServiceTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    patient?: JsonNullValueInput | InputJsonValue
    providers?: ServicesUpdateprovidersInput | InputJsonValue[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    providersId?: ServicesUpdateprovidersIdInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicesUncheckedUpdateManyWithoutServiceTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    patient?: JsonNullValueInput | InputJsonValue
    providers?: ServicesUpdateprovidersInput | InputJsonValue[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    providersId?: ServicesUpdateprovidersIdInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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