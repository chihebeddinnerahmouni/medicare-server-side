
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
 * Model Images
 * 
 */
export type Images = $Result.DefaultSelection<Prisma.$ImagesPayload>
/**
 * Model availabilities
 * 
 */
export type availabilities = $Result.DefaultSelection<Prisma.$availabilitiesPayload>
/**
 * Model Reviews
 * 
 */
export type Reviews = $Result.DefaultSelection<Prisma.$ReviewsPayload>
/**
 * Model Pharmacies
 * 
 */
export type Pharmacies = $Result.DefaultSelection<Prisma.$PharmaciesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Images
 * const images = await prisma.images.findMany()
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
   * // Fetch zero or more Images
   * const images = await prisma.images.findMany()
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
   * `prisma.images`: Exposes CRUD operations for the **Images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.images.findMany()
    * ```
    */
  get images(): Prisma.ImagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availabilities`: Exposes CRUD operations for the **availabilities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Availabilities
    * const availabilities = await prisma.availabilities.findMany()
    * ```
    */
  get availabilities(): Prisma.availabilitiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **Reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.ReviewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pharmacies`: Exposes CRUD operations for the **Pharmacies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pharmacies
    * const pharmacies = await prisma.pharmacies.findMany()
    * ```
    */
  get pharmacies(): Prisma.PharmaciesDelegate<ExtArgs, ClientOptions>;
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
    Images: 'Images',
    availabilities: 'availabilities',
    Reviews: 'Reviews',
    Pharmacies: 'Pharmacies'
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
      modelProps: "images" | "availabilities" | "reviews" | "pharmacies"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Images: {
        payload: Prisma.$ImagesPayload<ExtArgs>
        fields: Prisma.ImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          findFirst: {
            args: Prisma.ImagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          findMany: {
            args: Prisma.ImagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>[]
          }
          create: {
            args: Prisma.ImagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          createMany: {
            args: Prisma.ImagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>[]
          }
          delete: {
            args: Prisma.ImagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          update: {
            args: Prisma.ImagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          deleteMany: {
            args: Prisma.ImagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>[]
          }
          upsert: {
            args: Prisma.ImagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          aggregate: {
            args: Prisma.ImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImages>
          }
          groupBy: {
            args: Prisma.ImagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImagesCountArgs<ExtArgs>
            result: $Utils.Optional<ImagesCountAggregateOutputType> | number
          }
        }
      }
      availabilities: {
        payload: Prisma.$availabilitiesPayload<ExtArgs>
        fields: Prisma.availabilitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.availabilitiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availabilitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.availabilitiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availabilitiesPayload>
          }
          findFirst: {
            args: Prisma.availabilitiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availabilitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.availabilitiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availabilitiesPayload>
          }
          findMany: {
            args: Prisma.availabilitiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availabilitiesPayload>[]
          }
          create: {
            args: Prisma.availabilitiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availabilitiesPayload>
          }
          createMany: {
            args: Prisma.availabilitiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.availabilitiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availabilitiesPayload>[]
          }
          delete: {
            args: Prisma.availabilitiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availabilitiesPayload>
          }
          update: {
            args: Prisma.availabilitiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availabilitiesPayload>
          }
          deleteMany: {
            args: Prisma.availabilitiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.availabilitiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.availabilitiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availabilitiesPayload>[]
          }
          upsert: {
            args: Prisma.availabilitiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availabilitiesPayload>
          }
          aggregate: {
            args: Prisma.AvailabilitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailabilities>
          }
          groupBy: {
            args: Prisma.availabilitiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.availabilitiesCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilitiesCountAggregateOutputType> | number
          }
        }
      }
      Reviews: {
        payload: Prisma.$ReviewsPayload<ExtArgs>
        fields: Prisma.ReviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findFirst: {
            args: Prisma.ReviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findMany: {
            args: Prisma.ReviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          create: {
            args: Prisma.ReviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          createMany: {
            args: Prisma.ReviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          delete: {
            args: Prisma.ReviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          update: {
            args: Prisma.ReviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          deleteMany: {
            args: Prisma.ReviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          upsert: {
            args: Prisma.ReviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.ReviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
      Pharmacies: {
        payload: Prisma.$PharmaciesPayload<ExtArgs>
        fields: Prisma.PharmaciesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PharmaciesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaciesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PharmaciesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaciesPayload>
          }
          findFirst: {
            args: Prisma.PharmaciesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaciesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PharmaciesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaciesPayload>
          }
          findMany: {
            args: Prisma.PharmaciesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaciesPayload>[]
          }
          create: {
            args: Prisma.PharmaciesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaciesPayload>
          }
          createMany: {
            args: Prisma.PharmaciesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PharmaciesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaciesPayload>[]
          }
          delete: {
            args: Prisma.PharmaciesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaciesPayload>
          }
          update: {
            args: Prisma.PharmaciesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaciesPayload>
          }
          deleteMany: {
            args: Prisma.PharmaciesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PharmaciesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PharmaciesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaciesPayload>[]
          }
          upsert: {
            args: Prisma.PharmaciesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaciesPayload>
          }
          aggregate: {
            args: Prisma.PharmaciesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePharmacies>
          }
          groupBy: {
            args: Prisma.PharmaciesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PharmaciesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PharmaciesCountArgs<ExtArgs>
            result: $Utils.Optional<PharmaciesCountAggregateOutputType> | number
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
    images?: ImagesOmit
    availabilities?: availabilitiesOmit
    reviews?: ReviewsOmit
    pharmacies?: PharmaciesOmit
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
   * Count Type PharmaciesCountOutputType
   */

  export type PharmaciesCountOutputType = {
    images: number
    availabilities: number
    Reviews: number
  }

  export type PharmaciesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | PharmaciesCountOutputTypeCountImagesArgs
    availabilities?: boolean | PharmaciesCountOutputTypeCountAvailabilitiesArgs
    Reviews?: boolean | PharmaciesCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * PharmaciesCountOutputType without action
   */
  export type PharmaciesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmaciesCountOutputType
     */
    select?: PharmaciesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PharmaciesCountOutputType without action
   */
  export type PharmaciesCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagesWhereInput
  }

  /**
   * PharmaciesCountOutputType without action
   */
  export type PharmaciesCountOutputTypeCountAvailabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: availabilitiesWhereInput
  }

  /**
   * PharmaciesCountOutputType without action
   */
  export type PharmaciesCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Images
   */

  export type AggregateImages = {
    _count: ImagesCountAggregateOutputType | null
    _avg: ImagesAvgAggregateOutputType | null
    _sum: ImagesSumAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  export type ImagesAvgAggregateOutputType = {
    id: number | null
    pharmacyId: number | null
    order: number | null
  }

  export type ImagesSumAggregateOutputType = {
    id: number | null
    pharmacyId: number | null
    order: number | null
  }

  export type ImagesMinAggregateOutputType = {
    id: number | null
    url: string | null
    pharmacyId: number | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImagesMaxAggregateOutputType = {
    id: number | null
    url: string | null
    pharmacyId: number | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImagesCountAggregateOutputType = {
    id: number
    url: number
    pharmacyId: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImagesAvgAggregateInputType = {
    id?: true
    pharmacyId?: true
    order?: true
  }

  export type ImagesSumAggregateInputType = {
    id?: true
    pharmacyId?: true
    order?: true
  }

  export type ImagesMinAggregateInputType = {
    id?: true
    url?: true
    pharmacyId?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImagesMaxAggregateInputType = {
    id?: true
    url?: true
    pharmacyId?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImagesCountAggregateInputType = {
    id?: true
    url?: true
    pharmacyId?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to aggregate.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagesMaxAggregateInputType
  }

  export type GetImagesAggregateType<T extends ImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImages[P]>
      : GetScalarType<T[P], AggregateImages[P]>
  }




  export type ImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagesWhereInput
    orderBy?: ImagesOrderByWithAggregationInput | ImagesOrderByWithAggregationInput[]
    by: ImagesScalarFieldEnum[] | ImagesScalarFieldEnum
    having?: ImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagesCountAggregateInputType | true
    _avg?: ImagesAvgAggregateInputType
    _sum?: ImagesSumAggregateInputType
    _min?: ImagesMinAggregateInputType
    _max?: ImagesMaxAggregateInputType
  }

  export type ImagesGroupByOutputType = {
    id: number
    url: string
    pharmacyId: number
    order: number
    createdAt: Date
    updatedAt: Date
    _count: ImagesCountAggregateOutputType | null
    _avg: ImagesAvgAggregateOutputType | null
    _sum: ImagesSumAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  type GetImagesGroupByPayload<T extends ImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagesGroupByOutputType[P]>
            : GetScalarType<T[P], ImagesGroupByOutputType[P]>
        }
      >
    >


  export type ImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    pharmacyId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Pharmacy?: boolean | PharmaciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>

  export type ImagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    pharmacyId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Pharmacy?: boolean | PharmaciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>

  export type ImagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    pharmacyId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Pharmacy?: boolean | PharmaciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>

  export type ImagesSelectScalar = {
    id?: boolean
    url?: boolean
    pharmacyId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "pharmacyId" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["images"]>
  export type ImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pharmacy?: boolean | PharmaciesDefaultArgs<ExtArgs>
  }
  export type ImagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pharmacy?: boolean | PharmaciesDefaultArgs<ExtArgs>
  }
  export type ImagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pharmacy?: boolean | PharmaciesDefaultArgs<ExtArgs>
  }

  export type $ImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Images"
    objects: {
      Pharmacy: Prisma.$PharmaciesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      pharmacyId: number
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["images"]>
    composites: {}
  }

  type ImagesGetPayload<S extends boolean | null | undefined | ImagesDefaultArgs> = $Result.GetResult<Prisma.$ImagesPayload, S>

  type ImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImagesCountAggregateInputType | true
    }

  export interface ImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Images'], meta: { name: 'Images' } }
    /**
     * Find zero or one Images that matches the filter.
     * @param {ImagesFindUniqueArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImagesFindUniqueArgs>(args: SelectSubset<T, ImagesFindUniqueArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImagesFindUniqueOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImagesFindUniqueOrThrowArgs>(args: SelectSubset<T, ImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindFirstArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImagesFindFirstArgs>(args?: SelectSubset<T, ImagesFindFirstArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindFirstOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImagesFindFirstOrThrowArgs>(args?: SelectSubset<T, ImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.images.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imagesWithIdOnly = await prisma.images.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImagesFindManyArgs>(args?: SelectSubset<T, ImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Images.
     * @param {ImagesCreateArgs} args - Arguments to create a Images.
     * @example
     * // Create one Images
     * const Images = await prisma.images.create({
     *   data: {
     *     // ... data to create a Images
     *   }
     * })
     * 
     */
    create<T extends ImagesCreateArgs>(args: SelectSubset<T, ImagesCreateArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Images.
     * @param {ImagesCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const images = await prisma.images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImagesCreateManyArgs>(args?: SelectSubset<T, ImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImagesCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const images = await prisma.images.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imagesWithIdOnly = await prisma.images.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImagesCreateManyAndReturnArgs>(args?: SelectSubset<T, ImagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Images.
     * @param {ImagesDeleteArgs} args - Arguments to delete one Images.
     * @example
     * // Delete one Images
     * const Images = await prisma.images.delete({
     *   where: {
     *     // ... filter to delete one Images
     *   }
     * })
     * 
     */
    delete<T extends ImagesDeleteArgs>(args: SelectSubset<T, ImagesDeleteArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Images.
     * @param {ImagesUpdateArgs} args - Arguments to update one Images.
     * @example
     * // Update one Images
     * const images = await prisma.images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImagesUpdateArgs>(args: SelectSubset<T, ImagesUpdateArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Images.
     * @param {ImagesDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImagesDeleteManyArgs>(args?: SelectSubset<T, ImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const images = await prisma.images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImagesUpdateManyArgs>(args: SelectSubset<T, ImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImagesUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const images = await prisma.images.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imagesWithIdOnly = await prisma.images.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImagesUpdateManyAndReturnArgs>(args: SelectSubset<T, ImagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Images.
     * @param {ImagesUpsertArgs} args - Arguments to update or create a Images.
     * @example
     * // Update or create a Images
     * const images = await prisma.images.upsert({
     *   create: {
     *     // ... data to create a Images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Images we want to update
     *   }
     * })
     */
    upsert<T extends ImagesUpsertArgs>(args: SelectSubset<T, ImagesUpsertArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.images.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImagesCountArgs>(
      args?: Subset<T, ImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImagesAggregateArgs>(args: Subset<T, ImagesAggregateArgs>): Prisma.PrismaPromise<GetImagesAggregateType<T>>

    /**
     * Group by Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesGroupByArgs} args - Group by arguments.
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
      T extends ImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImagesGroupByArgs['orderBy'] }
        : { orderBy?: ImagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Images model
   */
  readonly fields: ImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pharmacy<T extends PharmaciesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PharmaciesDefaultArgs<ExtArgs>>): Prisma__PharmaciesClient<$Result.GetResult<Prisma.$PharmaciesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Images model
   */ 
  interface ImagesFieldRefs {
    readonly id: FieldRef<"Images", 'Int'>
    readonly url: FieldRef<"Images", 'String'>
    readonly pharmacyId: FieldRef<"Images", 'Int'>
    readonly order: FieldRef<"Images", 'Int'>
    readonly createdAt: FieldRef<"Images", 'DateTime'>
    readonly updatedAt: FieldRef<"Images", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Images findUnique
   */
  export type ImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images findUniqueOrThrow
   */
  export type ImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images findFirst
   */
  export type ImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Images findFirstOrThrow
   */
  export type ImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Images findMany
   */
  export type ImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Images create
   */
  export type ImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Images.
     */
    data: XOR<ImagesCreateInput, ImagesUncheckedCreateInput>
  }

  /**
   * Images createMany
   */
  export type ImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImagesCreateManyInput | ImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Images createManyAndReturn
   */
  export type ImagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImagesCreateManyInput | ImagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Images update
   */
  export type ImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Images.
     */
    data: XOR<ImagesUpdateInput, ImagesUncheckedUpdateInput>
    /**
     * Choose, which Images to update.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images updateMany
   */
  export type ImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImagesWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Images updateManyAndReturn
   */
  export type ImagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImagesWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Images upsert
   */
  export type ImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Images to update in case it exists.
     */
    where: ImagesWhereUniqueInput
    /**
     * In case the Images found by the `where` argument doesn't exist, create a new Images with this data.
     */
    create: XOR<ImagesCreateInput, ImagesUncheckedCreateInput>
    /**
     * In case the Images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImagesUpdateInput, ImagesUncheckedUpdateInput>
  }

  /**
   * Images delete
   */
  export type ImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter which Images to delete.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images deleteMany
   */
  export type ImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImagesWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Images without action
   */
  export type ImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
  }


  /**
   * Model availabilities
   */

  export type AggregateAvailabilities = {
    _count: AvailabilitiesCountAggregateOutputType | null
    _avg: AvailabilitiesAvgAggregateOutputType | null
    _sum: AvailabilitiesSumAggregateOutputType | null
    _min: AvailabilitiesMinAggregateOutputType | null
    _max: AvailabilitiesMaxAggregateOutputType | null
  }

  export type AvailabilitiesAvgAggregateOutputType = {
    id: number | null
    pharmacyId: number | null
  }

  export type AvailabilitiesSumAggregateOutputType = {
    id: number | null
    pharmacyId: number | null
  }

  export type AvailabilitiesMinAggregateOutputType = {
    id: number | null
    pharmacyId: number | null
    start_date: string | null
    end_date: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvailabilitiesMaxAggregateOutputType = {
    id: number | null
    pharmacyId: number | null
    start_date: string | null
    end_date: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvailabilitiesCountAggregateOutputType = {
    id: number
    pharmacyId: number
    start_date: number
    end_date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AvailabilitiesAvgAggregateInputType = {
    id?: true
    pharmacyId?: true
  }

  export type AvailabilitiesSumAggregateInputType = {
    id?: true
    pharmacyId?: true
  }

  export type AvailabilitiesMinAggregateInputType = {
    id?: true
    pharmacyId?: true
    start_date?: true
    end_date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvailabilitiesMaxAggregateInputType = {
    id?: true
    pharmacyId?: true
    start_date?: true
    end_date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvailabilitiesCountAggregateInputType = {
    id?: true
    pharmacyId?: true
    start_date?: true
    end_date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AvailabilitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which availabilities to aggregate.
     */
    where?: availabilitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of availabilities to fetch.
     */
    orderBy?: availabilitiesOrderByWithRelationInput | availabilitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: availabilitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned availabilities
    **/
    _count?: true | AvailabilitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvailabilitiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvailabilitiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilitiesMaxAggregateInputType
  }

  export type GetAvailabilitiesAggregateType<T extends AvailabilitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailabilities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailabilities[P]>
      : GetScalarType<T[P], AggregateAvailabilities[P]>
  }




  export type availabilitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: availabilitiesWhereInput
    orderBy?: availabilitiesOrderByWithAggregationInput | availabilitiesOrderByWithAggregationInput[]
    by: AvailabilitiesScalarFieldEnum[] | AvailabilitiesScalarFieldEnum
    having?: availabilitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilitiesCountAggregateInputType | true
    _avg?: AvailabilitiesAvgAggregateInputType
    _sum?: AvailabilitiesSumAggregateInputType
    _min?: AvailabilitiesMinAggregateInputType
    _max?: AvailabilitiesMaxAggregateInputType
  }

  export type AvailabilitiesGroupByOutputType = {
    id: number
    pharmacyId: number
    start_date: string
    end_date: string
    createdAt: Date
    updatedAt: Date
    _count: AvailabilitiesCountAggregateOutputType | null
    _avg: AvailabilitiesAvgAggregateOutputType | null
    _sum: AvailabilitiesSumAggregateOutputType | null
    _min: AvailabilitiesMinAggregateOutputType | null
    _max: AvailabilitiesMaxAggregateOutputType | null
  }

  type GetAvailabilitiesGroupByPayload<T extends availabilitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilitiesGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilitiesGroupByOutputType[P]>
        }
      >
    >


  export type availabilitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pharmacyId?: boolean
    start_date?: boolean
    end_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Pharmacy?: boolean | PharmaciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilities"]>

  export type availabilitiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pharmacyId?: boolean
    start_date?: boolean
    end_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Pharmacy?: boolean | PharmaciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilities"]>

  export type availabilitiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pharmacyId?: boolean
    start_date?: boolean
    end_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Pharmacy?: boolean | PharmaciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilities"]>

  export type availabilitiesSelectScalar = {
    id?: boolean
    pharmacyId?: boolean
    start_date?: boolean
    end_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type availabilitiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pharmacyId" | "start_date" | "end_date" | "createdAt" | "updatedAt", ExtArgs["result"]["availabilities"]>
  export type availabilitiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pharmacy?: boolean | PharmaciesDefaultArgs<ExtArgs>
  }
  export type availabilitiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pharmacy?: boolean | PharmaciesDefaultArgs<ExtArgs>
  }
  export type availabilitiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pharmacy?: boolean | PharmaciesDefaultArgs<ExtArgs>
  }

  export type $availabilitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "availabilities"
    objects: {
      Pharmacy: Prisma.$PharmaciesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pharmacyId: number
      start_date: string
      end_date: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["availabilities"]>
    composites: {}
  }

  type availabilitiesGetPayload<S extends boolean | null | undefined | availabilitiesDefaultArgs> = $Result.GetResult<Prisma.$availabilitiesPayload, S>

  type availabilitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<availabilitiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailabilitiesCountAggregateInputType | true
    }

  export interface availabilitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['availabilities'], meta: { name: 'availabilities' } }
    /**
     * Find zero or one Availabilities that matches the filter.
     * @param {availabilitiesFindUniqueArgs} args - Arguments to find a Availabilities
     * @example
     * // Get one Availabilities
     * const availabilities = await prisma.availabilities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends availabilitiesFindUniqueArgs>(args: SelectSubset<T, availabilitiesFindUniqueArgs<ExtArgs>>): Prisma__availabilitiesClient<$Result.GetResult<Prisma.$availabilitiesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Availabilities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {availabilitiesFindUniqueOrThrowArgs} args - Arguments to find a Availabilities
     * @example
     * // Get one Availabilities
     * const availabilities = await prisma.availabilities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends availabilitiesFindUniqueOrThrowArgs>(args: SelectSubset<T, availabilitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__availabilitiesClient<$Result.GetResult<Prisma.$availabilitiesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Availabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {availabilitiesFindFirstArgs} args - Arguments to find a Availabilities
     * @example
     * // Get one Availabilities
     * const availabilities = await prisma.availabilities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends availabilitiesFindFirstArgs>(args?: SelectSubset<T, availabilitiesFindFirstArgs<ExtArgs>>): Prisma__availabilitiesClient<$Result.GetResult<Prisma.$availabilitiesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Availabilities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {availabilitiesFindFirstOrThrowArgs} args - Arguments to find a Availabilities
     * @example
     * // Get one Availabilities
     * const availabilities = await prisma.availabilities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends availabilitiesFindFirstOrThrowArgs>(args?: SelectSubset<T, availabilitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__availabilitiesClient<$Result.GetResult<Prisma.$availabilitiesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Availabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {availabilitiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Availabilities
     * const availabilities = await prisma.availabilities.findMany()
     * 
     * // Get first 10 Availabilities
     * const availabilities = await prisma.availabilities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilitiesWithIdOnly = await prisma.availabilities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends availabilitiesFindManyArgs>(args?: SelectSubset<T, availabilitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$availabilitiesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Availabilities.
     * @param {availabilitiesCreateArgs} args - Arguments to create a Availabilities.
     * @example
     * // Create one Availabilities
     * const Availabilities = await prisma.availabilities.create({
     *   data: {
     *     // ... data to create a Availabilities
     *   }
     * })
     * 
     */
    create<T extends availabilitiesCreateArgs>(args: SelectSubset<T, availabilitiesCreateArgs<ExtArgs>>): Prisma__availabilitiesClient<$Result.GetResult<Prisma.$availabilitiesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Availabilities.
     * @param {availabilitiesCreateManyArgs} args - Arguments to create many Availabilities.
     * @example
     * // Create many Availabilities
     * const availabilities = await prisma.availabilities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends availabilitiesCreateManyArgs>(args?: SelectSubset<T, availabilitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Availabilities and returns the data saved in the database.
     * @param {availabilitiesCreateManyAndReturnArgs} args - Arguments to create many Availabilities.
     * @example
     * // Create many Availabilities
     * const availabilities = await prisma.availabilities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Availabilities and only return the `id`
     * const availabilitiesWithIdOnly = await prisma.availabilities.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends availabilitiesCreateManyAndReturnArgs>(args?: SelectSubset<T, availabilitiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$availabilitiesPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Availabilities.
     * @param {availabilitiesDeleteArgs} args - Arguments to delete one Availabilities.
     * @example
     * // Delete one Availabilities
     * const Availabilities = await prisma.availabilities.delete({
     *   where: {
     *     // ... filter to delete one Availabilities
     *   }
     * })
     * 
     */
    delete<T extends availabilitiesDeleteArgs>(args: SelectSubset<T, availabilitiesDeleteArgs<ExtArgs>>): Prisma__availabilitiesClient<$Result.GetResult<Prisma.$availabilitiesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Availabilities.
     * @param {availabilitiesUpdateArgs} args - Arguments to update one Availabilities.
     * @example
     * // Update one Availabilities
     * const availabilities = await prisma.availabilities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends availabilitiesUpdateArgs>(args: SelectSubset<T, availabilitiesUpdateArgs<ExtArgs>>): Prisma__availabilitiesClient<$Result.GetResult<Prisma.$availabilitiesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Availabilities.
     * @param {availabilitiesDeleteManyArgs} args - Arguments to filter Availabilities to delete.
     * @example
     * // Delete a few Availabilities
     * const { count } = await prisma.availabilities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends availabilitiesDeleteManyArgs>(args?: SelectSubset<T, availabilitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {availabilitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Availabilities
     * const availabilities = await prisma.availabilities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends availabilitiesUpdateManyArgs>(args: SelectSubset<T, availabilitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities and returns the data updated in the database.
     * @param {availabilitiesUpdateManyAndReturnArgs} args - Arguments to update many Availabilities.
     * @example
     * // Update many Availabilities
     * const availabilities = await prisma.availabilities.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Availabilities and only return the `id`
     * const availabilitiesWithIdOnly = await prisma.availabilities.updateManyAndReturn({
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
    updateManyAndReturn<T extends availabilitiesUpdateManyAndReturnArgs>(args: SelectSubset<T, availabilitiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$availabilitiesPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Availabilities.
     * @param {availabilitiesUpsertArgs} args - Arguments to update or create a Availabilities.
     * @example
     * // Update or create a Availabilities
     * const availabilities = await prisma.availabilities.upsert({
     *   create: {
     *     // ... data to create a Availabilities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Availabilities we want to update
     *   }
     * })
     */
    upsert<T extends availabilitiesUpsertArgs>(args: SelectSubset<T, availabilitiesUpsertArgs<ExtArgs>>): Prisma__availabilitiesClient<$Result.GetResult<Prisma.$availabilitiesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {availabilitiesCountArgs} args - Arguments to filter Availabilities to count.
     * @example
     * // Count the number of Availabilities
     * const count = await prisma.availabilities.count({
     *   where: {
     *     // ... the filter for the Availabilities we want to count
     *   }
     * })
    **/
    count<T extends availabilitiesCountArgs>(
      args?: Subset<T, availabilitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailabilitiesAggregateArgs>(args: Subset<T, AvailabilitiesAggregateArgs>): Prisma.PrismaPromise<GetAvailabilitiesAggregateType<T>>

    /**
     * Group by Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {availabilitiesGroupByArgs} args - Group by arguments.
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
      T extends availabilitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: availabilitiesGroupByArgs['orderBy'] }
        : { orderBy?: availabilitiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, availabilitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the availabilities model
   */
  readonly fields: availabilitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for availabilities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__availabilitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pharmacy<T extends PharmaciesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PharmaciesDefaultArgs<ExtArgs>>): Prisma__PharmaciesClient<$Result.GetResult<Prisma.$PharmaciesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the availabilities model
   */ 
  interface availabilitiesFieldRefs {
    readonly id: FieldRef<"availabilities", 'Int'>
    readonly pharmacyId: FieldRef<"availabilities", 'Int'>
    readonly start_date: FieldRef<"availabilities", 'String'>
    readonly end_date: FieldRef<"availabilities", 'String'>
    readonly createdAt: FieldRef<"availabilities", 'DateTime'>
    readonly updatedAt: FieldRef<"availabilities", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * availabilities findUnique
   */
  export type availabilitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availabilities
     */
    select?: availabilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the availabilities
     */
    omit?: availabilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: availabilitiesInclude<ExtArgs> | null
    /**
     * Filter, which availabilities to fetch.
     */
    where: availabilitiesWhereUniqueInput
  }

  /**
   * availabilities findUniqueOrThrow
   */
  export type availabilitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availabilities
     */
    select?: availabilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the availabilities
     */
    omit?: availabilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: availabilitiesInclude<ExtArgs> | null
    /**
     * Filter, which availabilities to fetch.
     */
    where: availabilitiesWhereUniqueInput
  }

  /**
   * availabilities findFirst
   */
  export type availabilitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availabilities
     */
    select?: availabilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the availabilities
     */
    omit?: availabilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: availabilitiesInclude<ExtArgs> | null
    /**
     * Filter, which availabilities to fetch.
     */
    where?: availabilitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of availabilities to fetch.
     */
    orderBy?: availabilitiesOrderByWithRelationInput | availabilitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for availabilities.
     */
    cursor?: availabilitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of availabilities.
     */
    distinct?: AvailabilitiesScalarFieldEnum | AvailabilitiesScalarFieldEnum[]
  }

  /**
   * availabilities findFirstOrThrow
   */
  export type availabilitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availabilities
     */
    select?: availabilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the availabilities
     */
    omit?: availabilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: availabilitiesInclude<ExtArgs> | null
    /**
     * Filter, which availabilities to fetch.
     */
    where?: availabilitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of availabilities to fetch.
     */
    orderBy?: availabilitiesOrderByWithRelationInput | availabilitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for availabilities.
     */
    cursor?: availabilitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of availabilities.
     */
    distinct?: AvailabilitiesScalarFieldEnum | AvailabilitiesScalarFieldEnum[]
  }

  /**
   * availabilities findMany
   */
  export type availabilitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availabilities
     */
    select?: availabilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the availabilities
     */
    omit?: availabilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: availabilitiesInclude<ExtArgs> | null
    /**
     * Filter, which availabilities to fetch.
     */
    where?: availabilitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of availabilities to fetch.
     */
    orderBy?: availabilitiesOrderByWithRelationInput | availabilitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing availabilities.
     */
    cursor?: availabilitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` availabilities.
     */
    skip?: number
    distinct?: AvailabilitiesScalarFieldEnum | AvailabilitiesScalarFieldEnum[]
  }

  /**
   * availabilities create
   */
  export type availabilitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availabilities
     */
    select?: availabilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the availabilities
     */
    omit?: availabilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: availabilitiesInclude<ExtArgs> | null
    /**
     * The data needed to create a availabilities.
     */
    data: XOR<availabilitiesCreateInput, availabilitiesUncheckedCreateInput>
  }

  /**
   * availabilities createMany
   */
  export type availabilitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many availabilities.
     */
    data: availabilitiesCreateManyInput | availabilitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * availabilities createManyAndReturn
   */
  export type availabilitiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availabilities
     */
    select?: availabilitiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the availabilities
     */
    omit?: availabilitiesOmit<ExtArgs> | null
    /**
     * The data used to create many availabilities.
     */
    data: availabilitiesCreateManyInput | availabilitiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: availabilitiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * availabilities update
   */
  export type availabilitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availabilities
     */
    select?: availabilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the availabilities
     */
    omit?: availabilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: availabilitiesInclude<ExtArgs> | null
    /**
     * The data needed to update a availabilities.
     */
    data: XOR<availabilitiesUpdateInput, availabilitiesUncheckedUpdateInput>
    /**
     * Choose, which availabilities to update.
     */
    where: availabilitiesWhereUniqueInput
  }

  /**
   * availabilities updateMany
   */
  export type availabilitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update availabilities.
     */
    data: XOR<availabilitiesUpdateManyMutationInput, availabilitiesUncheckedUpdateManyInput>
    /**
     * Filter which availabilities to update
     */
    where?: availabilitiesWhereInput
    /**
     * Limit how many availabilities to update.
     */
    limit?: number
  }

  /**
   * availabilities updateManyAndReturn
   */
  export type availabilitiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availabilities
     */
    select?: availabilitiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the availabilities
     */
    omit?: availabilitiesOmit<ExtArgs> | null
    /**
     * The data used to update availabilities.
     */
    data: XOR<availabilitiesUpdateManyMutationInput, availabilitiesUncheckedUpdateManyInput>
    /**
     * Filter which availabilities to update
     */
    where?: availabilitiesWhereInput
    /**
     * Limit how many availabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: availabilitiesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * availabilities upsert
   */
  export type availabilitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availabilities
     */
    select?: availabilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the availabilities
     */
    omit?: availabilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: availabilitiesInclude<ExtArgs> | null
    /**
     * The filter to search for the availabilities to update in case it exists.
     */
    where: availabilitiesWhereUniqueInput
    /**
     * In case the availabilities found by the `where` argument doesn't exist, create a new availabilities with this data.
     */
    create: XOR<availabilitiesCreateInput, availabilitiesUncheckedCreateInput>
    /**
     * In case the availabilities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<availabilitiesUpdateInput, availabilitiesUncheckedUpdateInput>
  }

  /**
   * availabilities delete
   */
  export type availabilitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availabilities
     */
    select?: availabilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the availabilities
     */
    omit?: availabilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: availabilitiesInclude<ExtArgs> | null
    /**
     * Filter which availabilities to delete.
     */
    where: availabilitiesWhereUniqueInput
  }

  /**
   * availabilities deleteMany
   */
  export type availabilitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which availabilities to delete
     */
    where?: availabilitiesWhereInput
    /**
     * Limit how many availabilities to delete.
     */
    limit?: number
  }

  /**
   * availabilities without action
   */
  export type availabilitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availabilities
     */
    select?: availabilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the availabilities
     */
    omit?: availabilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: availabilitiesInclude<ExtArgs> | null
  }


  /**
   * Model Reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    pharmacyId: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    pharmacyId: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    id: number | null
    comment: string | null
    userId: number | null
    pharmacyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewsMaxAggregateOutputType = {
    id: number | null
    comment: string | null
    userId: number | null
    pharmacyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewsCountAggregateOutputType = {
    id: number
    comment: number
    userId: number
    pharmacyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    id?: true
    userId?: true
    pharmacyId?: true
  }

  export type ReviewsSumAggregateInputType = {
    id?: true
    userId?: true
    pharmacyId?: true
  }

  export type ReviewsMinAggregateInputType = {
    id?: true
    comment?: true
    userId?: true
    pharmacyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewsMaxAggregateInputType = {
    id?: true
    comment?: true
    userId?: true
    pharmacyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewsCountAggregateInputType = {
    id?: true
    comment?: true
    userId?: true
    pharmacyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to aggregate.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type ReviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithAggregationInput | ReviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: ReviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    id: number
    comment: string
    userId: number
    pharmacyId: number
    createdAt: Date
    updatedAt: Date
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends ReviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type ReviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    userId?: boolean
    pharmacyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Pharmacy?: boolean | PharmaciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    userId?: boolean
    pharmacyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Pharmacy?: boolean | PharmaciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    userId?: boolean
    pharmacyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Pharmacy?: boolean | PharmaciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectScalar = {
    id?: boolean
    comment?: boolean
    userId?: boolean
    pharmacyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "comment" | "userId" | "pharmacyId" | "createdAt" | "updatedAt", ExtArgs["result"]["reviews"]>
  export type ReviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pharmacy?: boolean | PharmaciesDefaultArgs<ExtArgs>
  }
  export type ReviewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pharmacy?: boolean | PharmaciesDefaultArgs<ExtArgs>
  }
  export type ReviewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pharmacy?: boolean | PharmaciesDefaultArgs<ExtArgs>
  }

  export type $ReviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reviews"
    objects: {
      Pharmacy: Prisma.$PharmaciesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      comment: string
      userId: number
      pharmacyId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }

  type ReviewsGetPayload<S extends boolean | null | undefined | ReviewsDefaultArgs> = $Result.GetResult<Prisma.$ReviewsPayload, S>

  type ReviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface ReviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reviews'], meta: { name: 'Reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {ReviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewsFindUniqueArgs>(args: SelectSubset<T, ReviewsFindUniqueArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Reviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewsFindFirstArgs>(args?: SelectSubset<T, ReviewsFindFirstArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewsWithIdOnly = await prisma.reviews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewsFindManyArgs>(args?: SelectSubset<T, ReviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Reviews.
     * @param {ReviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
     */
    create<T extends ReviewsCreateArgs>(args: SelectSubset<T, ReviewsCreateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Reviews.
     * @param {ReviewsCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewsCreateManyArgs>(args?: SelectSubset<T, ReviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewsCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewsCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Reviews.
     * @param {ReviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
     */
    delete<T extends ReviewsDeleteArgs>(args: SelectSubset<T, ReviewsDeleteArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Reviews.
     * @param {ReviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewsUpdateArgs>(args: SelectSubset<T, ReviewsUpdateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewsDeleteManyArgs>(args?: SelectSubset<T, ReviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewsUpdateManyArgs>(args: SelectSubset<T, ReviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewsUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewsUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Reviews.
     * @param {ReviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
     */
    upsert<T extends ReviewsUpsertArgs>(args: SelectSubset<T, ReviewsUpsertArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewsCountArgs>(
      args?: Subset<T, ReviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsGroupByArgs} args - Group by arguments.
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
      T extends ReviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewsGroupByArgs['orderBy'] }
        : { orderBy?: ReviewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reviews model
   */
  readonly fields: ReviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pharmacy<T extends PharmaciesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PharmaciesDefaultArgs<ExtArgs>>): Prisma__PharmaciesClient<$Result.GetResult<Prisma.$PharmaciesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Reviews model
   */ 
  interface ReviewsFieldRefs {
    readonly id: FieldRef<"Reviews", 'Int'>
    readonly comment: FieldRef<"Reviews", 'String'>
    readonly userId: FieldRef<"Reviews", 'Int'>
    readonly pharmacyId: FieldRef<"Reviews", 'Int'>
    readonly createdAt: FieldRef<"Reviews", 'DateTime'>
    readonly updatedAt: FieldRef<"Reviews", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reviews findUnique
   */
  export type ReviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findUniqueOrThrow
   */
  export type ReviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findFirst
   */
  export type ReviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findFirstOrThrow
   */
  export type ReviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findMany
   */
  export type ReviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews create
   */
  export type ReviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reviews.
     */
    data: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
  }

  /**
   * Reviews createMany
   */
  export type ReviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reviews createManyAndReturn
   */
  export type ReviewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reviews update
   */
  export type ReviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reviews.
     */
    data: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
    /**
     * Choose, which Reviews to update.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews updateMany
   */
  export type ReviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Reviews updateManyAndReturn
   */
  export type ReviewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reviews upsert
   */
  export type ReviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reviews to update in case it exists.
     */
    where: ReviewsWhereUniqueInput
    /**
     * In case the Reviews found by the `where` argument doesn't exist, create a new Reviews with this data.
     */
    create: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
    /**
     * In case the Reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
  }

  /**
   * Reviews delete
   */
  export type ReviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter which Reviews to delete.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews deleteMany
   */
  export type ReviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Reviews without action
   */
  export type ReviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
  }


  /**
   * Model Pharmacies
   */

  export type AggregatePharmacies = {
    _count: PharmaciesCountAggregateOutputType | null
    _avg: PharmaciesAvgAggregateOutputType | null
    _sum: PharmaciesSumAggregateOutputType | null
    _min: PharmaciesMinAggregateOutputType | null
    _max: PharmaciesMaxAggregateOutputType | null
  }

  export type PharmaciesAvgAggregateOutputType = {
    id: number | null
    totalViews: number | null
    totalRate: number | null
    numberOfRates: number | null
    averageRate: number | null
    ownerId: number | null
    year: number | null
    daysOff: number | null
    reviewsCount: number | null
  }

  export type PharmaciesSumAggregateOutputType = {
    id: number | null
    totalViews: number | null
    totalRate: number | null
    numberOfRates: number | null
    averageRate: number | null
    ownerId: number | null
    year: number | null
    daysOff: number[]
    reviewsCount: number | null
  }

  export type PharmaciesMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    address: string | null
    phone: string | null
    totalViews: number | null
    totalRate: number | null
    numberOfRates: number | null
    averageRate: number | null
    ownerId: number | null
    year: number | null
    validated: boolean | null
    blocked: boolean | null
    openTime: string | null
    closeTime: string | null
    latitude: string | null
    longitude: string | null
    type: string | null
    reviewsCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PharmaciesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    address: string | null
    phone: string | null
    totalViews: number | null
    totalRate: number | null
    numberOfRates: number | null
    averageRate: number | null
    ownerId: number | null
    year: number | null
    validated: boolean | null
    blocked: boolean | null
    openTime: string | null
    closeTime: string | null
    latitude: string | null
    longitude: string | null
    type: string | null
    reviewsCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PharmaciesCountAggregateOutputType = {
    id: number
    title: number
    description: number
    address: number
    phone: number
    totalViews: number
    totalRate: number
    numberOfRates: number
    averageRate: number
    ownerId: number
    year: number
    validated: number
    blocked: number
    rates: number
    openTime: number
    closeTime: number
    latitude: number
    longitude: number
    daysOff: number
    type: number
    reviewsCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PharmaciesAvgAggregateInputType = {
    id?: true
    totalViews?: true
    totalRate?: true
    numberOfRates?: true
    averageRate?: true
    ownerId?: true
    year?: true
    daysOff?: true
    reviewsCount?: true
  }

  export type PharmaciesSumAggregateInputType = {
    id?: true
    totalViews?: true
    totalRate?: true
    numberOfRates?: true
    averageRate?: true
    ownerId?: true
    year?: true
    daysOff?: true
    reviewsCount?: true
  }

  export type PharmaciesMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    address?: true
    phone?: true
    totalViews?: true
    totalRate?: true
    numberOfRates?: true
    averageRate?: true
    ownerId?: true
    year?: true
    validated?: true
    blocked?: true
    openTime?: true
    closeTime?: true
    latitude?: true
    longitude?: true
    type?: true
    reviewsCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PharmaciesMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    address?: true
    phone?: true
    totalViews?: true
    totalRate?: true
    numberOfRates?: true
    averageRate?: true
    ownerId?: true
    year?: true
    validated?: true
    blocked?: true
    openTime?: true
    closeTime?: true
    latitude?: true
    longitude?: true
    type?: true
    reviewsCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PharmaciesCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    address?: true
    phone?: true
    totalViews?: true
    totalRate?: true
    numberOfRates?: true
    averageRate?: true
    ownerId?: true
    year?: true
    validated?: true
    blocked?: true
    rates?: true
    openTime?: true
    closeTime?: true
    latitude?: true
    longitude?: true
    daysOff?: true
    type?: true
    reviewsCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PharmaciesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pharmacies to aggregate.
     */
    where?: PharmaciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmaciesOrderByWithRelationInput | PharmaciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PharmaciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pharmacies
    **/
    _count?: true | PharmaciesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PharmaciesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PharmaciesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PharmaciesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PharmaciesMaxAggregateInputType
  }

  export type GetPharmaciesAggregateType<T extends PharmaciesAggregateArgs> = {
        [P in keyof T & keyof AggregatePharmacies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePharmacies[P]>
      : GetScalarType<T[P], AggregatePharmacies[P]>
  }




  export type PharmaciesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PharmaciesWhereInput
    orderBy?: PharmaciesOrderByWithAggregationInput | PharmaciesOrderByWithAggregationInput[]
    by: PharmaciesScalarFieldEnum[] | PharmaciesScalarFieldEnum
    having?: PharmaciesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PharmaciesCountAggregateInputType | true
    _avg?: PharmaciesAvgAggregateInputType
    _sum?: PharmaciesSumAggregateInputType
    _min?: PharmaciesMinAggregateInputType
    _max?: PharmaciesMaxAggregateInputType
  }

  export type PharmaciesGroupByOutputType = {
    id: number
    title: string
    description: string
    address: string
    phone: string
    totalViews: number
    totalRate: number
    numberOfRates: number
    averageRate: number
    ownerId: number
    year: number
    validated: boolean
    blocked: boolean
    rates: JsonValue
    openTime: string
    closeTime: string
    latitude: string
    longitude: string
    daysOff: number[]
    type: string
    reviewsCount: number
    createdAt: Date
    updatedAt: Date
    _count: PharmaciesCountAggregateOutputType | null
    _avg: PharmaciesAvgAggregateOutputType | null
    _sum: PharmaciesSumAggregateOutputType | null
    _min: PharmaciesMinAggregateOutputType | null
    _max: PharmaciesMaxAggregateOutputType | null
  }

  type GetPharmaciesGroupByPayload<T extends PharmaciesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PharmaciesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PharmaciesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PharmaciesGroupByOutputType[P]>
            : GetScalarType<T[P], PharmaciesGroupByOutputType[P]>
        }
      >
    >


  export type PharmaciesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    address?: boolean
    phone?: boolean
    totalViews?: boolean
    totalRate?: boolean
    numberOfRates?: boolean
    averageRate?: boolean
    ownerId?: boolean
    year?: boolean
    validated?: boolean
    blocked?: boolean
    rates?: boolean
    openTime?: boolean
    closeTime?: boolean
    latitude?: boolean
    longitude?: boolean
    daysOff?: boolean
    type?: boolean
    reviewsCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | Pharmacies$imagesArgs<ExtArgs>
    availabilities?: boolean | Pharmacies$availabilitiesArgs<ExtArgs>
    Reviews?: boolean | Pharmacies$ReviewsArgs<ExtArgs>
    _count?: boolean | PharmaciesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmacies"]>

  export type PharmaciesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    address?: boolean
    phone?: boolean
    totalViews?: boolean
    totalRate?: boolean
    numberOfRates?: boolean
    averageRate?: boolean
    ownerId?: boolean
    year?: boolean
    validated?: boolean
    blocked?: boolean
    rates?: boolean
    openTime?: boolean
    closeTime?: boolean
    latitude?: boolean
    longitude?: boolean
    daysOff?: boolean
    type?: boolean
    reviewsCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pharmacies"]>

  export type PharmaciesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    address?: boolean
    phone?: boolean
    totalViews?: boolean
    totalRate?: boolean
    numberOfRates?: boolean
    averageRate?: boolean
    ownerId?: boolean
    year?: boolean
    validated?: boolean
    blocked?: boolean
    rates?: boolean
    openTime?: boolean
    closeTime?: boolean
    latitude?: boolean
    longitude?: boolean
    daysOff?: boolean
    type?: boolean
    reviewsCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pharmacies"]>

  export type PharmaciesSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    address?: boolean
    phone?: boolean
    totalViews?: boolean
    totalRate?: boolean
    numberOfRates?: boolean
    averageRate?: boolean
    ownerId?: boolean
    year?: boolean
    validated?: boolean
    blocked?: boolean
    rates?: boolean
    openTime?: boolean
    closeTime?: boolean
    latitude?: boolean
    longitude?: boolean
    daysOff?: boolean
    type?: boolean
    reviewsCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PharmaciesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "address" | "phone" | "totalViews" | "totalRate" | "numberOfRates" | "averageRate" | "ownerId" | "year" | "validated" | "blocked" | "rates" | "openTime" | "closeTime" | "latitude" | "longitude" | "daysOff" | "type" | "reviewsCount" | "createdAt" | "updatedAt", ExtArgs["result"]["pharmacies"]>
  export type PharmaciesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Pharmacies$imagesArgs<ExtArgs>
    availabilities?: boolean | Pharmacies$availabilitiesArgs<ExtArgs>
    Reviews?: boolean | Pharmacies$ReviewsArgs<ExtArgs>
    _count?: boolean | PharmaciesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PharmaciesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PharmaciesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PharmaciesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pharmacies"
    objects: {
      images: Prisma.$ImagesPayload<ExtArgs>[]
      availabilities: Prisma.$availabilitiesPayload<ExtArgs>[]
      Reviews: Prisma.$ReviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      address: string
      phone: string
      totalViews: number
      totalRate: number
      numberOfRates: number
      averageRate: number
      ownerId: number
      year: number
      validated: boolean
      blocked: boolean
      rates: Prisma.JsonValue
      openTime: string
      closeTime: string
      latitude: string
      longitude: string
      daysOff: number[]
      type: string
      reviewsCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pharmacies"]>
    composites: {}
  }

  type PharmaciesGetPayload<S extends boolean | null | undefined | PharmaciesDefaultArgs> = $Result.GetResult<Prisma.$PharmaciesPayload, S>

  type PharmaciesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PharmaciesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PharmaciesCountAggregateInputType | true
    }

  export interface PharmaciesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pharmacies'], meta: { name: 'Pharmacies' } }
    /**
     * Find zero or one Pharmacies that matches the filter.
     * @param {PharmaciesFindUniqueArgs} args - Arguments to find a Pharmacies
     * @example
     * // Get one Pharmacies
     * const pharmacies = await prisma.pharmacies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PharmaciesFindUniqueArgs>(args: SelectSubset<T, PharmaciesFindUniqueArgs<ExtArgs>>): Prisma__PharmaciesClient<$Result.GetResult<Prisma.$PharmaciesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Pharmacies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PharmaciesFindUniqueOrThrowArgs} args - Arguments to find a Pharmacies
     * @example
     * // Get one Pharmacies
     * const pharmacies = await prisma.pharmacies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PharmaciesFindUniqueOrThrowArgs>(args: SelectSubset<T, PharmaciesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PharmaciesClient<$Result.GetResult<Prisma.$PharmaciesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Pharmacies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmaciesFindFirstArgs} args - Arguments to find a Pharmacies
     * @example
     * // Get one Pharmacies
     * const pharmacies = await prisma.pharmacies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PharmaciesFindFirstArgs>(args?: SelectSubset<T, PharmaciesFindFirstArgs<ExtArgs>>): Prisma__PharmaciesClient<$Result.GetResult<Prisma.$PharmaciesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Pharmacies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmaciesFindFirstOrThrowArgs} args - Arguments to find a Pharmacies
     * @example
     * // Get one Pharmacies
     * const pharmacies = await prisma.pharmacies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PharmaciesFindFirstOrThrowArgs>(args?: SelectSubset<T, PharmaciesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PharmaciesClient<$Result.GetResult<Prisma.$PharmaciesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Pharmacies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmaciesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pharmacies
     * const pharmacies = await prisma.pharmacies.findMany()
     * 
     * // Get first 10 Pharmacies
     * const pharmacies = await prisma.pharmacies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pharmaciesWithIdOnly = await prisma.pharmacies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PharmaciesFindManyArgs>(args?: SelectSubset<T, PharmaciesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmaciesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Pharmacies.
     * @param {PharmaciesCreateArgs} args - Arguments to create a Pharmacies.
     * @example
     * // Create one Pharmacies
     * const Pharmacies = await prisma.pharmacies.create({
     *   data: {
     *     // ... data to create a Pharmacies
     *   }
     * })
     * 
     */
    create<T extends PharmaciesCreateArgs>(args: SelectSubset<T, PharmaciesCreateArgs<ExtArgs>>): Prisma__PharmaciesClient<$Result.GetResult<Prisma.$PharmaciesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Pharmacies.
     * @param {PharmaciesCreateManyArgs} args - Arguments to create many Pharmacies.
     * @example
     * // Create many Pharmacies
     * const pharmacies = await prisma.pharmacies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PharmaciesCreateManyArgs>(args?: SelectSubset<T, PharmaciesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pharmacies and returns the data saved in the database.
     * @param {PharmaciesCreateManyAndReturnArgs} args - Arguments to create many Pharmacies.
     * @example
     * // Create many Pharmacies
     * const pharmacies = await prisma.pharmacies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pharmacies and only return the `id`
     * const pharmaciesWithIdOnly = await prisma.pharmacies.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PharmaciesCreateManyAndReturnArgs>(args?: SelectSubset<T, PharmaciesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmaciesPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Pharmacies.
     * @param {PharmaciesDeleteArgs} args - Arguments to delete one Pharmacies.
     * @example
     * // Delete one Pharmacies
     * const Pharmacies = await prisma.pharmacies.delete({
     *   where: {
     *     // ... filter to delete one Pharmacies
     *   }
     * })
     * 
     */
    delete<T extends PharmaciesDeleteArgs>(args: SelectSubset<T, PharmaciesDeleteArgs<ExtArgs>>): Prisma__PharmaciesClient<$Result.GetResult<Prisma.$PharmaciesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Pharmacies.
     * @param {PharmaciesUpdateArgs} args - Arguments to update one Pharmacies.
     * @example
     * // Update one Pharmacies
     * const pharmacies = await prisma.pharmacies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PharmaciesUpdateArgs>(args: SelectSubset<T, PharmaciesUpdateArgs<ExtArgs>>): Prisma__PharmaciesClient<$Result.GetResult<Prisma.$PharmaciesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Pharmacies.
     * @param {PharmaciesDeleteManyArgs} args - Arguments to filter Pharmacies to delete.
     * @example
     * // Delete a few Pharmacies
     * const { count } = await prisma.pharmacies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PharmaciesDeleteManyArgs>(args?: SelectSubset<T, PharmaciesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pharmacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmaciesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pharmacies
     * const pharmacies = await prisma.pharmacies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PharmaciesUpdateManyArgs>(args: SelectSubset<T, PharmaciesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pharmacies and returns the data updated in the database.
     * @param {PharmaciesUpdateManyAndReturnArgs} args - Arguments to update many Pharmacies.
     * @example
     * // Update many Pharmacies
     * const pharmacies = await prisma.pharmacies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pharmacies and only return the `id`
     * const pharmaciesWithIdOnly = await prisma.pharmacies.updateManyAndReturn({
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
    updateManyAndReturn<T extends PharmaciesUpdateManyAndReturnArgs>(args: SelectSubset<T, PharmaciesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmaciesPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Pharmacies.
     * @param {PharmaciesUpsertArgs} args - Arguments to update or create a Pharmacies.
     * @example
     * // Update or create a Pharmacies
     * const pharmacies = await prisma.pharmacies.upsert({
     *   create: {
     *     // ... data to create a Pharmacies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pharmacies we want to update
     *   }
     * })
     */
    upsert<T extends PharmaciesUpsertArgs>(args: SelectSubset<T, PharmaciesUpsertArgs<ExtArgs>>): Prisma__PharmaciesClient<$Result.GetResult<Prisma.$PharmaciesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Pharmacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmaciesCountArgs} args - Arguments to filter Pharmacies to count.
     * @example
     * // Count the number of Pharmacies
     * const count = await prisma.pharmacies.count({
     *   where: {
     *     // ... the filter for the Pharmacies we want to count
     *   }
     * })
    **/
    count<T extends PharmaciesCountArgs>(
      args?: Subset<T, PharmaciesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PharmaciesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pharmacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmaciesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PharmaciesAggregateArgs>(args: Subset<T, PharmaciesAggregateArgs>): Prisma.PrismaPromise<GetPharmaciesAggregateType<T>>

    /**
     * Group by Pharmacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmaciesGroupByArgs} args - Group by arguments.
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
      T extends PharmaciesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PharmaciesGroupByArgs['orderBy'] }
        : { orderBy?: PharmaciesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PharmaciesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPharmaciesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pharmacies model
   */
  readonly fields: PharmaciesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pharmacies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PharmaciesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Pharmacies$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Pharmacies$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    availabilities<T extends Pharmacies$availabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Pharmacies$availabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$availabilitiesPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Reviews<T extends Pharmacies$ReviewsArgs<ExtArgs> = {}>(args?: Subset<T, Pharmacies$ReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Pharmacies model
   */ 
  interface PharmaciesFieldRefs {
    readonly id: FieldRef<"Pharmacies", 'Int'>
    readonly title: FieldRef<"Pharmacies", 'String'>
    readonly description: FieldRef<"Pharmacies", 'String'>
    readonly address: FieldRef<"Pharmacies", 'String'>
    readonly phone: FieldRef<"Pharmacies", 'String'>
    readonly totalViews: FieldRef<"Pharmacies", 'Int'>
    readonly totalRate: FieldRef<"Pharmacies", 'Int'>
    readonly numberOfRates: FieldRef<"Pharmacies", 'Int'>
    readonly averageRate: FieldRef<"Pharmacies", 'Float'>
    readonly ownerId: FieldRef<"Pharmacies", 'Int'>
    readonly year: FieldRef<"Pharmacies", 'Int'>
    readonly validated: FieldRef<"Pharmacies", 'Boolean'>
    readonly blocked: FieldRef<"Pharmacies", 'Boolean'>
    readonly rates: FieldRef<"Pharmacies", 'Json'>
    readonly openTime: FieldRef<"Pharmacies", 'String'>
    readonly closeTime: FieldRef<"Pharmacies", 'String'>
    readonly latitude: FieldRef<"Pharmacies", 'String'>
    readonly longitude: FieldRef<"Pharmacies", 'String'>
    readonly daysOff: FieldRef<"Pharmacies", 'Int[]'>
    readonly type: FieldRef<"Pharmacies", 'String'>
    readonly reviewsCount: FieldRef<"Pharmacies", 'Int'>
    readonly createdAt: FieldRef<"Pharmacies", 'DateTime'>
    readonly updatedAt: FieldRef<"Pharmacies", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pharmacies findUnique
   */
  export type PharmaciesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacies
     */
    select?: PharmaciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacies
     */
    omit?: PharmaciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaciesInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacies to fetch.
     */
    where: PharmaciesWhereUniqueInput
  }

  /**
   * Pharmacies findUniqueOrThrow
   */
  export type PharmaciesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacies
     */
    select?: PharmaciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacies
     */
    omit?: PharmaciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaciesInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacies to fetch.
     */
    where: PharmaciesWhereUniqueInput
  }

  /**
   * Pharmacies findFirst
   */
  export type PharmaciesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacies
     */
    select?: PharmaciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacies
     */
    omit?: PharmaciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaciesInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacies to fetch.
     */
    where?: PharmaciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmaciesOrderByWithRelationInput | PharmaciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pharmacies.
     */
    cursor?: PharmaciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pharmacies.
     */
    distinct?: PharmaciesScalarFieldEnum | PharmaciesScalarFieldEnum[]
  }

  /**
   * Pharmacies findFirstOrThrow
   */
  export type PharmaciesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacies
     */
    select?: PharmaciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacies
     */
    omit?: PharmaciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaciesInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacies to fetch.
     */
    where?: PharmaciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmaciesOrderByWithRelationInput | PharmaciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pharmacies.
     */
    cursor?: PharmaciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pharmacies.
     */
    distinct?: PharmaciesScalarFieldEnum | PharmaciesScalarFieldEnum[]
  }

  /**
   * Pharmacies findMany
   */
  export type PharmaciesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacies
     */
    select?: PharmaciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacies
     */
    omit?: PharmaciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaciesInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacies to fetch.
     */
    where?: PharmaciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmaciesOrderByWithRelationInput | PharmaciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pharmacies.
     */
    cursor?: PharmaciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    distinct?: PharmaciesScalarFieldEnum | PharmaciesScalarFieldEnum[]
  }

  /**
   * Pharmacies create
   */
  export type PharmaciesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacies
     */
    select?: PharmaciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacies
     */
    omit?: PharmaciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaciesInclude<ExtArgs> | null
    /**
     * The data needed to create a Pharmacies.
     */
    data: XOR<PharmaciesCreateInput, PharmaciesUncheckedCreateInput>
  }

  /**
   * Pharmacies createMany
   */
  export type PharmaciesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pharmacies.
     */
    data: PharmaciesCreateManyInput | PharmaciesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pharmacies createManyAndReturn
   */
  export type PharmaciesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacies
     */
    select?: PharmaciesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacies
     */
    omit?: PharmaciesOmit<ExtArgs> | null
    /**
     * The data used to create many Pharmacies.
     */
    data: PharmaciesCreateManyInput | PharmaciesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pharmacies update
   */
  export type PharmaciesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacies
     */
    select?: PharmaciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacies
     */
    omit?: PharmaciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaciesInclude<ExtArgs> | null
    /**
     * The data needed to update a Pharmacies.
     */
    data: XOR<PharmaciesUpdateInput, PharmaciesUncheckedUpdateInput>
    /**
     * Choose, which Pharmacies to update.
     */
    where: PharmaciesWhereUniqueInput
  }

  /**
   * Pharmacies updateMany
   */
  export type PharmaciesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pharmacies.
     */
    data: XOR<PharmaciesUpdateManyMutationInput, PharmaciesUncheckedUpdateManyInput>
    /**
     * Filter which Pharmacies to update
     */
    where?: PharmaciesWhereInput
    /**
     * Limit how many Pharmacies to update.
     */
    limit?: number
  }

  /**
   * Pharmacies updateManyAndReturn
   */
  export type PharmaciesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacies
     */
    select?: PharmaciesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacies
     */
    omit?: PharmaciesOmit<ExtArgs> | null
    /**
     * The data used to update Pharmacies.
     */
    data: XOR<PharmaciesUpdateManyMutationInput, PharmaciesUncheckedUpdateManyInput>
    /**
     * Filter which Pharmacies to update
     */
    where?: PharmaciesWhereInput
    /**
     * Limit how many Pharmacies to update.
     */
    limit?: number
  }

  /**
   * Pharmacies upsert
   */
  export type PharmaciesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacies
     */
    select?: PharmaciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacies
     */
    omit?: PharmaciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaciesInclude<ExtArgs> | null
    /**
     * The filter to search for the Pharmacies to update in case it exists.
     */
    where: PharmaciesWhereUniqueInput
    /**
     * In case the Pharmacies found by the `where` argument doesn't exist, create a new Pharmacies with this data.
     */
    create: XOR<PharmaciesCreateInput, PharmaciesUncheckedCreateInput>
    /**
     * In case the Pharmacies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PharmaciesUpdateInput, PharmaciesUncheckedUpdateInput>
  }

  /**
   * Pharmacies delete
   */
  export type PharmaciesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacies
     */
    select?: PharmaciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacies
     */
    omit?: PharmaciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaciesInclude<ExtArgs> | null
    /**
     * Filter which Pharmacies to delete.
     */
    where: PharmaciesWhereUniqueInput
  }

  /**
   * Pharmacies deleteMany
   */
  export type PharmaciesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pharmacies to delete
     */
    where?: PharmaciesWhereInput
    /**
     * Limit how many Pharmacies to delete.
     */
    limit?: number
  }

  /**
   * Pharmacies.images
   */
  export type Pharmacies$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    where?: ImagesWhereInput
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    cursor?: ImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Pharmacies.availabilities
   */
  export type Pharmacies$availabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availabilities
     */
    select?: availabilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the availabilities
     */
    omit?: availabilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: availabilitiesInclude<ExtArgs> | null
    where?: availabilitiesWhereInput
    orderBy?: availabilitiesOrderByWithRelationInput | availabilitiesOrderByWithRelationInput[]
    cursor?: availabilitiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilitiesScalarFieldEnum | AvailabilitiesScalarFieldEnum[]
  }

  /**
   * Pharmacies.Reviews
   */
  export type Pharmacies$ReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Pharmacies without action
   */
  export type PharmaciesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacies
     */
    select?: PharmaciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacies
     */
    omit?: PharmaciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaciesInclude<ExtArgs> | null
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


  export const ImagesScalarFieldEnum: {
    id: 'id',
    url: 'url',
    pharmacyId: 'pharmacyId',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImagesScalarFieldEnum = (typeof ImagesScalarFieldEnum)[keyof typeof ImagesScalarFieldEnum]


  export const AvailabilitiesScalarFieldEnum: {
    id: 'id',
    pharmacyId: 'pharmacyId',
    start_date: 'start_date',
    end_date: 'end_date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AvailabilitiesScalarFieldEnum = (typeof AvailabilitiesScalarFieldEnum)[keyof typeof AvailabilitiesScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    id: 'id',
    comment: 'comment',
    userId: 'userId',
    pharmacyId: 'pharmacyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const PharmaciesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    address: 'address',
    phone: 'phone',
    totalViews: 'totalViews',
    totalRate: 'totalRate',
    numberOfRates: 'numberOfRates',
    averageRate: 'averageRate',
    ownerId: 'ownerId',
    year: 'year',
    validated: 'validated',
    blocked: 'blocked',
    rates: 'rates',
    openTime: 'openTime',
    closeTime: 'closeTime',
    latitude: 'latitude',
    longitude: 'longitude',
    daysOff: 'daysOff',
    type: 'type',
    reviewsCount: 'reviewsCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PharmaciesScalarFieldEnum = (typeof PharmaciesScalarFieldEnum)[keyof typeof PharmaciesScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type ImagesWhereInput = {
    AND?: ImagesWhereInput | ImagesWhereInput[]
    OR?: ImagesWhereInput[]
    NOT?: ImagesWhereInput | ImagesWhereInput[]
    id?: IntFilter<"Images"> | number
    url?: StringFilter<"Images"> | string
    pharmacyId?: IntFilter<"Images"> | number
    order?: IntFilter<"Images"> | number
    createdAt?: DateTimeFilter<"Images"> | Date | string
    updatedAt?: DateTimeFilter<"Images"> | Date | string
    Pharmacy?: XOR<PharmaciesScalarRelationFilter, PharmaciesWhereInput>
  }

  export type ImagesOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    pharmacyId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Pharmacy?: PharmaciesOrderByWithRelationInput
  }

  export type ImagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImagesWhereInput | ImagesWhereInput[]
    OR?: ImagesWhereInput[]
    NOT?: ImagesWhereInput | ImagesWhereInput[]
    url?: StringFilter<"Images"> | string
    pharmacyId?: IntFilter<"Images"> | number
    order?: IntFilter<"Images"> | number
    createdAt?: DateTimeFilter<"Images"> | Date | string
    updatedAt?: DateTimeFilter<"Images"> | Date | string
    Pharmacy?: XOR<PharmaciesScalarRelationFilter, PharmaciesWhereInput>
  }, "id">

  export type ImagesOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    pharmacyId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImagesCountOrderByAggregateInput
    _avg?: ImagesAvgOrderByAggregateInput
    _max?: ImagesMaxOrderByAggregateInput
    _min?: ImagesMinOrderByAggregateInput
    _sum?: ImagesSumOrderByAggregateInput
  }

  export type ImagesScalarWhereWithAggregatesInput = {
    AND?: ImagesScalarWhereWithAggregatesInput | ImagesScalarWhereWithAggregatesInput[]
    OR?: ImagesScalarWhereWithAggregatesInput[]
    NOT?: ImagesScalarWhereWithAggregatesInput | ImagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Images"> | number
    url?: StringWithAggregatesFilter<"Images"> | string
    pharmacyId?: IntWithAggregatesFilter<"Images"> | number
    order?: IntWithAggregatesFilter<"Images"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Images"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Images"> | Date | string
  }

  export type availabilitiesWhereInput = {
    AND?: availabilitiesWhereInput | availabilitiesWhereInput[]
    OR?: availabilitiesWhereInput[]
    NOT?: availabilitiesWhereInput | availabilitiesWhereInput[]
    id?: IntFilter<"availabilities"> | number
    pharmacyId?: IntFilter<"availabilities"> | number
    start_date?: StringFilter<"availabilities"> | string
    end_date?: StringFilter<"availabilities"> | string
    createdAt?: DateTimeFilter<"availabilities"> | Date | string
    updatedAt?: DateTimeFilter<"availabilities"> | Date | string
    Pharmacy?: XOR<PharmaciesScalarRelationFilter, PharmaciesWhereInput>
  }

  export type availabilitiesOrderByWithRelationInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Pharmacy?: PharmaciesOrderByWithRelationInput
  }

  export type availabilitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: availabilitiesWhereInput | availabilitiesWhereInput[]
    OR?: availabilitiesWhereInput[]
    NOT?: availabilitiesWhereInput | availabilitiesWhereInput[]
    pharmacyId?: IntFilter<"availabilities"> | number
    start_date?: StringFilter<"availabilities"> | string
    end_date?: StringFilter<"availabilities"> | string
    createdAt?: DateTimeFilter<"availabilities"> | Date | string
    updatedAt?: DateTimeFilter<"availabilities"> | Date | string
    Pharmacy?: XOR<PharmaciesScalarRelationFilter, PharmaciesWhereInput>
  }, "id">

  export type availabilitiesOrderByWithAggregationInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: availabilitiesCountOrderByAggregateInput
    _avg?: availabilitiesAvgOrderByAggregateInput
    _max?: availabilitiesMaxOrderByAggregateInput
    _min?: availabilitiesMinOrderByAggregateInput
    _sum?: availabilitiesSumOrderByAggregateInput
  }

  export type availabilitiesScalarWhereWithAggregatesInput = {
    AND?: availabilitiesScalarWhereWithAggregatesInput | availabilitiesScalarWhereWithAggregatesInput[]
    OR?: availabilitiesScalarWhereWithAggregatesInput[]
    NOT?: availabilitiesScalarWhereWithAggregatesInput | availabilitiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"availabilities"> | number
    pharmacyId?: IntWithAggregatesFilter<"availabilities"> | number
    start_date?: StringWithAggregatesFilter<"availabilities"> | string
    end_date?: StringWithAggregatesFilter<"availabilities"> | string
    createdAt?: DateTimeWithAggregatesFilter<"availabilities"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"availabilities"> | Date | string
  }

  export type ReviewsWhereInput = {
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    id?: IntFilter<"Reviews"> | number
    comment?: StringFilter<"Reviews"> | string
    userId?: IntFilter<"Reviews"> | number
    pharmacyId?: IntFilter<"Reviews"> | number
    createdAt?: DateTimeFilter<"Reviews"> | Date | string
    updatedAt?: DateTimeFilter<"Reviews"> | Date | string
    Pharmacy?: XOR<PharmaciesScalarRelationFilter, PharmaciesWhereInput>
  }

  export type ReviewsOrderByWithRelationInput = {
    id?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    pharmacyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Pharmacy?: PharmaciesOrderByWithRelationInput
  }

  export type ReviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    comment?: StringFilter<"Reviews"> | string
    userId?: IntFilter<"Reviews"> | number
    pharmacyId?: IntFilter<"Reviews"> | number
    createdAt?: DateTimeFilter<"Reviews"> | Date | string
    updatedAt?: DateTimeFilter<"Reviews"> | Date | string
    Pharmacy?: XOR<PharmaciesScalarRelationFilter, PharmaciesWhereInput>
  }, "id">

  export type ReviewsOrderByWithAggregationInput = {
    id?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    pharmacyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewsCountOrderByAggregateInput
    _avg?: ReviewsAvgOrderByAggregateInput
    _max?: ReviewsMaxOrderByAggregateInput
    _min?: ReviewsMinOrderByAggregateInput
    _sum?: ReviewsSumOrderByAggregateInput
  }

  export type ReviewsScalarWhereWithAggregatesInput = {
    AND?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    OR?: ReviewsScalarWhereWithAggregatesInput[]
    NOT?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reviews"> | number
    comment?: StringWithAggregatesFilter<"Reviews"> | string
    userId?: IntWithAggregatesFilter<"Reviews"> | number
    pharmacyId?: IntWithAggregatesFilter<"Reviews"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Reviews"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reviews"> | Date | string
  }

  export type PharmaciesWhereInput = {
    AND?: PharmaciesWhereInput | PharmaciesWhereInput[]
    OR?: PharmaciesWhereInput[]
    NOT?: PharmaciesWhereInput | PharmaciesWhereInput[]
    id?: IntFilter<"Pharmacies"> | number
    title?: StringFilter<"Pharmacies"> | string
    description?: StringFilter<"Pharmacies"> | string
    address?: StringFilter<"Pharmacies"> | string
    phone?: StringFilter<"Pharmacies"> | string
    totalViews?: IntFilter<"Pharmacies"> | number
    totalRate?: IntFilter<"Pharmacies"> | number
    numberOfRates?: IntFilter<"Pharmacies"> | number
    averageRate?: FloatFilter<"Pharmacies"> | number
    ownerId?: IntFilter<"Pharmacies"> | number
    year?: IntFilter<"Pharmacies"> | number
    validated?: BoolFilter<"Pharmacies"> | boolean
    blocked?: BoolFilter<"Pharmacies"> | boolean
    rates?: JsonFilter<"Pharmacies">
    openTime?: StringFilter<"Pharmacies"> | string
    closeTime?: StringFilter<"Pharmacies"> | string
    latitude?: StringFilter<"Pharmacies"> | string
    longitude?: StringFilter<"Pharmacies"> | string
    daysOff?: IntNullableListFilter<"Pharmacies">
    type?: StringFilter<"Pharmacies"> | string
    reviewsCount?: IntFilter<"Pharmacies"> | number
    createdAt?: DateTimeFilter<"Pharmacies"> | Date | string
    updatedAt?: DateTimeFilter<"Pharmacies"> | Date | string
    images?: ImagesListRelationFilter
    availabilities?: AvailabilitiesListRelationFilter
    Reviews?: ReviewsListRelationFilter
  }

  export type PharmaciesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    totalViews?: SortOrder
    totalRate?: SortOrder
    numberOfRates?: SortOrder
    averageRate?: SortOrder
    ownerId?: SortOrder
    year?: SortOrder
    validated?: SortOrder
    blocked?: SortOrder
    rates?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    daysOff?: SortOrder
    type?: SortOrder
    reviewsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: ImagesOrderByRelationAggregateInput
    availabilities?: availabilitiesOrderByRelationAggregateInput
    Reviews?: ReviewsOrderByRelationAggregateInput
  }

  export type PharmaciesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PharmaciesWhereInput | PharmaciesWhereInput[]
    OR?: PharmaciesWhereInput[]
    NOT?: PharmaciesWhereInput | PharmaciesWhereInput[]
    title?: StringFilter<"Pharmacies"> | string
    description?: StringFilter<"Pharmacies"> | string
    address?: StringFilter<"Pharmacies"> | string
    phone?: StringFilter<"Pharmacies"> | string
    totalViews?: IntFilter<"Pharmacies"> | number
    totalRate?: IntFilter<"Pharmacies"> | number
    numberOfRates?: IntFilter<"Pharmacies"> | number
    averageRate?: FloatFilter<"Pharmacies"> | number
    ownerId?: IntFilter<"Pharmacies"> | number
    year?: IntFilter<"Pharmacies"> | number
    validated?: BoolFilter<"Pharmacies"> | boolean
    blocked?: BoolFilter<"Pharmacies"> | boolean
    rates?: JsonFilter<"Pharmacies">
    openTime?: StringFilter<"Pharmacies"> | string
    closeTime?: StringFilter<"Pharmacies"> | string
    latitude?: StringFilter<"Pharmacies"> | string
    longitude?: StringFilter<"Pharmacies"> | string
    daysOff?: IntNullableListFilter<"Pharmacies">
    type?: StringFilter<"Pharmacies"> | string
    reviewsCount?: IntFilter<"Pharmacies"> | number
    createdAt?: DateTimeFilter<"Pharmacies"> | Date | string
    updatedAt?: DateTimeFilter<"Pharmacies"> | Date | string
    images?: ImagesListRelationFilter
    availabilities?: AvailabilitiesListRelationFilter
    Reviews?: ReviewsListRelationFilter
  }, "id">

  export type PharmaciesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    totalViews?: SortOrder
    totalRate?: SortOrder
    numberOfRates?: SortOrder
    averageRate?: SortOrder
    ownerId?: SortOrder
    year?: SortOrder
    validated?: SortOrder
    blocked?: SortOrder
    rates?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    daysOff?: SortOrder
    type?: SortOrder
    reviewsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PharmaciesCountOrderByAggregateInput
    _avg?: PharmaciesAvgOrderByAggregateInput
    _max?: PharmaciesMaxOrderByAggregateInput
    _min?: PharmaciesMinOrderByAggregateInput
    _sum?: PharmaciesSumOrderByAggregateInput
  }

  export type PharmaciesScalarWhereWithAggregatesInput = {
    AND?: PharmaciesScalarWhereWithAggregatesInput | PharmaciesScalarWhereWithAggregatesInput[]
    OR?: PharmaciesScalarWhereWithAggregatesInput[]
    NOT?: PharmaciesScalarWhereWithAggregatesInput | PharmaciesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pharmacies"> | number
    title?: StringWithAggregatesFilter<"Pharmacies"> | string
    description?: StringWithAggregatesFilter<"Pharmacies"> | string
    address?: StringWithAggregatesFilter<"Pharmacies"> | string
    phone?: StringWithAggregatesFilter<"Pharmacies"> | string
    totalViews?: IntWithAggregatesFilter<"Pharmacies"> | number
    totalRate?: IntWithAggregatesFilter<"Pharmacies"> | number
    numberOfRates?: IntWithAggregatesFilter<"Pharmacies"> | number
    averageRate?: FloatWithAggregatesFilter<"Pharmacies"> | number
    ownerId?: IntWithAggregatesFilter<"Pharmacies"> | number
    year?: IntWithAggregatesFilter<"Pharmacies"> | number
    validated?: BoolWithAggregatesFilter<"Pharmacies"> | boolean
    blocked?: BoolWithAggregatesFilter<"Pharmacies"> | boolean
    rates?: JsonWithAggregatesFilter<"Pharmacies">
    openTime?: StringWithAggregatesFilter<"Pharmacies"> | string
    closeTime?: StringWithAggregatesFilter<"Pharmacies"> | string
    latitude?: StringWithAggregatesFilter<"Pharmacies"> | string
    longitude?: StringWithAggregatesFilter<"Pharmacies"> | string
    daysOff?: IntNullableListFilter<"Pharmacies">
    type?: StringWithAggregatesFilter<"Pharmacies"> | string
    reviewsCount?: IntWithAggregatesFilter<"Pharmacies"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Pharmacies"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pharmacies"> | Date | string
  }

  export type ImagesCreateInput = {
    url: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Pharmacy: PharmaciesCreateNestedOneWithoutImagesInput
  }

  export type ImagesUncheckedCreateInput = {
    id?: number
    url: string
    pharmacyId: number
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Pharmacy?: PharmaciesUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    pharmacyId?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesCreateManyInput = {
    id?: number
    url: string
    pharmacyId: number
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    pharmacyId?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type availabilitiesCreateInput = {
    start_date: string
    end_date: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Pharmacy: PharmaciesCreateNestedOneWithoutAvailabilitiesInput
  }

  export type availabilitiesUncheckedCreateInput = {
    id?: number
    pharmacyId: number
    start_date: string
    end_date: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type availabilitiesUpdateInput = {
    start_date?: StringFieldUpdateOperationsInput | string
    end_date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Pharmacy?: PharmaciesUpdateOneRequiredWithoutAvailabilitiesNestedInput
  }

  export type availabilitiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pharmacyId?: IntFieldUpdateOperationsInput | number
    start_date?: StringFieldUpdateOperationsInput | string
    end_date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type availabilitiesCreateManyInput = {
    id?: number
    pharmacyId: number
    start_date: string
    end_date: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type availabilitiesUpdateManyMutationInput = {
    start_date?: StringFieldUpdateOperationsInput | string
    end_date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type availabilitiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pharmacyId?: IntFieldUpdateOperationsInput | number
    start_date?: StringFieldUpdateOperationsInput | string
    end_date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsCreateInput = {
    comment: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Pharmacy: PharmaciesCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateInput = {
    id?: number
    comment: string
    userId: number
    pharmacyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewsUpdateInput = {
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Pharmacy?: PharmaciesUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    pharmacyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsCreateManyInput = {
    id?: number
    comment: string
    userId: number
    pharmacyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewsUpdateManyMutationInput = {
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    pharmacyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmaciesCreateInput = {
    title: string
    description: string
    address: string
    phone: string
    totalViews?: number
    totalRate?: number
    numberOfRates?: number
    averageRate?: number
    ownerId: number
    year: number
    validated: boolean
    blocked: boolean
    rates: JsonNullValueInput | InputJsonValue
    openTime: string
    closeTime: string
    latitude: string
    longitude: string
    daysOff?: PharmaciesCreatedaysOffInput | number[]
    type?: string
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesCreateNestedManyWithoutPharmacyInput
    availabilities?: availabilitiesCreateNestedManyWithoutPharmacyInput
    Reviews?: ReviewsCreateNestedManyWithoutPharmacyInput
  }

  export type PharmaciesUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    address: string
    phone: string
    totalViews?: number
    totalRate?: number
    numberOfRates?: number
    averageRate?: number
    ownerId: number
    year: number
    validated: boolean
    blocked: boolean
    rates: JsonNullValueInput | InputJsonValue
    openTime: string
    closeTime: string
    latitude: string
    longitude: string
    daysOff?: PharmaciesCreatedaysOffInput | number[]
    type?: string
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesUncheckedCreateNestedManyWithoutPharmacyInput
    availabilities?: availabilitiesUncheckedCreateNestedManyWithoutPharmacyInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutPharmacyInput
  }

  export type PharmaciesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    totalViews?: IntFieldUpdateOperationsInput | number
    totalRate?: IntFieldUpdateOperationsInput | number
    numberOfRates?: IntFieldUpdateOperationsInput | number
    averageRate?: FloatFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    validated?: BoolFieldUpdateOperationsInput | boolean
    blocked?: BoolFieldUpdateOperationsInput | boolean
    rates?: JsonNullValueInput | InputJsonValue
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    daysOff?: PharmaciesUpdatedaysOffInput | number[]
    type?: StringFieldUpdateOperationsInput | string
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUpdateManyWithoutPharmacyNestedInput
    availabilities?: availabilitiesUpdateManyWithoutPharmacyNestedInput
    Reviews?: ReviewsUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmaciesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    totalViews?: IntFieldUpdateOperationsInput | number
    totalRate?: IntFieldUpdateOperationsInput | number
    numberOfRates?: IntFieldUpdateOperationsInput | number
    averageRate?: FloatFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    validated?: BoolFieldUpdateOperationsInput | boolean
    blocked?: BoolFieldUpdateOperationsInput | boolean
    rates?: JsonNullValueInput | InputJsonValue
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    daysOff?: PharmaciesUpdatedaysOffInput | number[]
    type?: StringFieldUpdateOperationsInput | string
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUncheckedUpdateManyWithoutPharmacyNestedInput
    availabilities?: availabilitiesUncheckedUpdateManyWithoutPharmacyNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmaciesCreateManyInput = {
    id?: number
    title: string
    description: string
    address: string
    phone: string
    totalViews?: number
    totalRate?: number
    numberOfRates?: number
    averageRate?: number
    ownerId: number
    year: number
    validated: boolean
    blocked: boolean
    rates: JsonNullValueInput | InputJsonValue
    openTime: string
    closeTime: string
    latitude: string
    longitude: string
    daysOff?: PharmaciesCreatedaysOffInput | number[]
    type?: string
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PharmaciesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    totalViews?: IntFieldUpdateOperationsInput | number
    totalRate?: IntFieldUpdateOperationsInput | number
    numberOfRates?: IntFieldUpdateOperationsInput | number
    averageRate?: FloatFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    validated?: BoolFieldUpdateOperationsInput | boolean
    blocked?: BoolFieldUpdateOperationsInput | boolean
    rates?: JsonNullValueInput | InputJsonValue
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    daysOff?: PharmaciesUpdatedaysOffInput | number[]
    type?: StringFieldUpdateOperationsInput | string
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmaciesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    totalViews?: IntFieldUpdateOperationsInput | number
    totalRate?: IntFieldUpdateOperationsInput | number
    numberOfRates?: IntFieldUpdateOperationsInput | number
    averageRate?: FloatFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    validated?: BoolFieldUpdateOperationsInput | boolean
    blocked?: BoolFieldUpdateOperationsInput | boolean
    rates?: JsonNullValueInput | InputJsonValue
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    daysOff?: PharmaciesUpdatedaysOffInput | number[]
    type?: StringFieldUpdateOperationsInput | string
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type PharmaciesScalarRelationFilter = {
    is?: PharmaciesWhereInput
    isNot?: PharmaciesWhereInput
  }

  export type ImagesCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    pharmacyId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImagesAvgOrderByAggregateInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
    order?: SortOrder
  }

  export type ImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    pharmacyId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImagesMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    pharmacyId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImagesSumOrderByAggregateInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
    order?: SortOrder
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

  export type availabilitiesCountOrderByAggregateInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type availabilitiesAvgOrderByAggregateInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
  }

  export type availabilitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type availabilitiesMinOrderByAggregateInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type availabilitiesSumOrderByAggregateInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
  }

  export type ReviewsCountOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    pharmacyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pharmacyId?: SortOrder
  }

  export type ReviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    pharmacyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewsMinOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    pharmacyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pharmacyId?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ImagesListRelationFilter = {
    every?: ImagesWhereInput
    some?: ImagesWhereInput
    none?: ImagesWhereInput
  }

  export type AvailabilitiesListRelationFilter = {
    every?: availabilitiesWhereInput
    some?: availabilitiesWhereInput
    none?: availabilitiesWhereInput
  }

  export type ReviewsListRelationFilter = {
    every?: ReviewsWhereInput
    some?: ReviewsWhereInput
    none?: ReviewsWhereInput
  }

  export type ImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type availabilitiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PharmaciesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    totalViews?: SortOrder
    totalRate?: SortOrder
    numberOfRates?: SortOrder
    averageRate?: SortOrder
    ownerId?: SortOrder
    year?: SortOrder
    validated?: SortOrder
    blocked?: SortOrder
    rates?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    daysOff?: SortOrder
    type?: SortOrder
    reviewsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PharmaciesAvgOrderByAggregateInput = {
    id?: SortOrder
    totalViews?: SortOrder
    totalRate?: SortOrder
    numberOfRates?: SortOrder
    averageRate?: SortOrder
    ownerId?: SortOrder
    year?: SortOrder
    daysOff?: SortOrder
    reviewsCount?: SortOrder
  }

  export type PharmaciesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    totalViews?: SortOrder
    totalRate?: SortOrder
    numberOfRates?: SortOrder
    averageRate?: SortOrder
    ownerId?: SortOrder
    year?: SortOrder
    validated?: SortOrder
    blocked?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    type?: SortOrder
    reviewsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PharmaciesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    totalViews?: SortOrder
    totalRate?: SortOrder
    numberOfRates?: SortOrder
    averageRate?: SortOrder
    ownerId?: SortOrder
    year?: SortOrder
    validated?: SortOrder
    blocked?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    type?: SortOrder
    reviewsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PharmaciesSumOrderByAggregateInput = {
    id?: SortOrder
    totalViews?: SortOrder
    totalRate?: SortOrder
    numberOfRates?: SortOrder
    averageRate?: SortOrder
    ownerId?: SortOrder
    year?: SortOrder
    daysOff?: SortOrder
    reviewsCount?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type PharmaciesCreateNestedOneWithoutImagesInput = {
    create?: XOR<PharmaciesCreateWithoutImagesInput, PharmaciesUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PharmaciesCreateOrConnectWithoutImagesInput
    connect?: PharmaciesWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PharmaciesUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<PharmaciesCreateWithoutImagesInput, PharmaciesUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PharmaciesCreateOrConnectWithoutImagesInput
    upsert?: PharmaciesUpsertWithoutImagesInput
    connect?: PharmaciesWhereUniqueInput
    update?: XOR<XOR<PharmaciesUpdateToOneWithWhereWithoutImagesInput, PharmaciesUpdateWithoutImagesInput>, PharmaciesUncheckedUpdateWithoutImagesInput>
  }

  export type PharmaciesCreateNestedOneWithoutAvailabilitiesInput = {
    create?: XOR<PharmaciesCreateWithoutAvailabilitiesInput, PharmaciesUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: PharmaciesCreateOrConnectWithoutAvailabilitiesInput
    connect?: PharmaciesWhereUniqueInput
  }

  export type PharmaciesUpdateOneRequiredWithoutAvailabilitiesNestedInput = {
    create?: XOR<PharmaciesCreateWithoutAvailabilitiesInput, PharmaciesUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: PharmaciesCreateOrConnectWithoutAvailabilitiesInput
    upsert?: PharmaciesUpsertWithoutAvailabilitiesInput
    connect?: PharmaciesWhereUniqueInput
    update?: XOR<XOR<PharmaciesUpdateToOneWithWhereWithoutAvailabilitiesInput, PharmaciesUpdateWithoutAvailabilitiesInput>, PharmaciesUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type PharmaciesCreateNestedOneWithoutReviewsInput = {
    create?: XOR<PharmaciesCreateWithoutReviewsInput, PharmaciesUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: PharmaciesCreateOrConnectWithoutReviewsInput
    connect?: PharmaciesWhereUniqueInput
  }

  export type PharmaciesUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<PharmaciesCreateWithoutReviewsInput, PharmaciesUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: PharmaciesCreateOrConnectWithoutReviewsInput
    upsert?: PharmaciesUpsertWithoutReviewsInput
    connect?: PharmaciesWhereUniqueInput
    update?: XOR<XOR<PharmaciesUpdateToOneWithWhereWithoutReviewsInput, PharmaciesUpdateWithoutReviewsInput>, PharmaciesUncheckedUpdateWithoutReviewsInput>
  }

  export type PharmaciesCreatedaysOffInput = {
    set: number[]
  }

  export type ImagesCreateNestedManyWithoutPharmacyInput = {
    create?: XOR<ImagesCreateWithoutPharmacyInput, ImagesUncheckedCreateWithoutPharmacyInput> | ImagesCreateWithoutPharmacyInput[] | ImagesUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutPharmacyInput | ImagesCreateOrConnectWithoutPharmacyInput[]
    createMany?: ImagesCreateManyPharmacyInputEnvelope
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
  }

  export type availabilitiesCreateNestedManyWithoutPharmacyInput = {
    create?: XOR<availabilitiesCreateWithoutPharmacyInput, availabilitiesUncheckedCreateWithoutPharmacyInput> | availabilitiesCreateWithoutPharmacyInput[] | availabilitiesUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: availabilitiesCreateOrConnectWithoutPharmacyInput | availabilitiesCreateOrConnectWithoutPharmacyInput[]
    createMany?: availabilitiesCreateManyPharmacyInputEnvelope
    connect?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutPharmacyInput = {
    create?: XOR<ReviewsCreateWithoutPharmacyInput, ReviewsUncheckedCreateWithoutPharmacyInput> | ReviewsCreateWithoutPharmacyInput[] | ReviewsUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutPharmacyInput | ReviewsCreateOrConnectWithoutPharmacyInput[]
    createMany?: ReviewsCreateManyPharmacyInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type ImagesUncheckedCreateNestedManyWithoutPharmacyInput = {
    create?: XOR<ImagesCreateWithoutPharmacyInput, ImagesUncheckedCreateWithoutPharmacyInput> | ImagesCreateWithoutPharmacyInput[] | ImagesUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutPharmacyInput | ImagesCreateOrConnectWithoutPharmacyInput[]
    createMany?: ImagesCreateManyPharmacyInputEnvelope
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
  }

  export type availabilitiesUncheckedCreateNestedManyWithoutPharmacyInput = {
    create?: XOR<availabilitiesCreateWithoutPharmacyInput, availabilitiesUncheckedCreateWithoutPharmacyInput> | availabilitiesCreateWithoutPharmacyInput[] | availabilitiesUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: availabilitiesCreateOrConnectWithoutPharmacyInput | availabilitiesCreateOrConnectWithoutPharmacyInput[]
    createMany?: availabilitiesCreateManyPharmacyInputEnvelope
    connect?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutPharmacyInput = {
    create?: XOR<ReviewsCreateWithoutPharmacyInput, ReviewsUncheckedCreateWithoutPharmacyInput> | ReviewsCreateWithoutPharmacyInput[] | ReviewsUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutPharmacyInput | ReviewsCreateOrConnectWithoutPharmacyInput[]
    createMany?: ReviewsCreateManyPharmacyInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PharmaciesUpdatedaysOffInput = {
    set?: number[]
    push?: number | number[]
  }

  export type ImagesUpdateManyWithoutPharmacyNestedInput = {
    create?: XOR<ImagesCreateWithoutPharmacyInput, ImagesUncheckedCreateWithoutPharmacyInput> | ImagesCreateWithoutPharmacyInput[] | ImagesUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutPharmacyInput | ImagesCreateOrConnectWithoutPharmacyInput[]
    upsert?: ImagesUpsertWithWhereUniqueWithoutPharmacyInput | ImagesUpsertWithWhereUniqueWithoutPharmacyInput[]
    createMany?: ImagesCreateManyPharmacyInputEnvelope
    set?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    disconnect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    delete?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    update?: ImagesUpdateWithWhereUniqueWithoutPharmacyInput | ImagesUpdateWithWhereUniqueWithoutPharmacyInput[]
    updateMany?: ImagesUpdateManyWithWhereWithoutPharmacyInput | ImagesUpdateManyWithWhereWithoutPharmacyInput[]
    deleteMany?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
  }

  export type availabilitiesUpdateManyWithoutPharmacyNestedInput = {
    create?: XOR<availabilitiesCreateWithoutPharmacyInput, availabilitiesUncheckedCreateWithoutPharmacyInput> | availabilitiesCreateWithoutPharmacyInput[] | availabilitiesUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: availabilitiesCreateOrConnectWithoutPharmacyInput | availabilitiesCreateOrConnectWithoutPharmacyInput[]
    upsert?: availabilitiesUpsertWithWhereUniqueWithoutPharmacyInput | availabilitiesUpsertWithWhereUniqueWithoutPharmacyInput[]
    createMany?: availabilitiesCreateManyPharmacyInputEnvelope
    set?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
    disconnect?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
    delete?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
    connect?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
    update?: availabilitiesUpdateWithWhereUniqueWithoutPharmacyInput | availabilitiesUpdateWithWhereUniqueWithoutPharmacyInput[]
    updateMany?: availabilitiesUpdateManyWithWhereWithoutPharmacyInput | availabilitiesUpdateManyWithWhereWithoutPharmacyInput[]
    deleteMany?: availabilitiesScalarWhereInput | availabilitiesScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutPharmacyNestedInput = {
    create?: XOR<ReviewsCreateWithoutPharmacyInput, ReviewsUncheckedCreateWithoutPharmacyInput> | ReviewsCreateWithoutPharmacyInput[] | ReviewsUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutPharmacyInput | ReviewsCreateOrConnectWithoutPharmacyInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutPharmacyInput | ReviewsUpsertWithWhereUniqueWithoutPharmacyInput[]
    createMany?: ReviewsCreateManyPharmacyInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutPharmacyInput | ReviewsUpdateWithWhereUniqueWithoutPharmacyInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutPharmacyInput | ReviewsUpdateManyWithWhereWithoutPharmacyInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type ImagesUncheckedUpdateManyWithoutPharmacyNestedInput = {
    create?: XOR<ImagesCreateWithoutPharmacyInput, ImagesUncheckedCreateWithoutPharmacyInput> | ImagesCreateWithoutPharmacyInput[] | ImagesUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutPharmacyInput | ImagesCreateOrConnectWithoutPharmacyInput[]
    upsert?: ImagesUpsertWithWhereUniqueWithoutPharmacyInput | ImagesUpsertWithWhereUniqueWithoutPharmacyInput[]
    createMany?: ImagesCreateManyPharmacyInputEnvelope
    set?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    disconnect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    delete?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    update?: ImagesUpdateWithWhereUniqueWithoutPharmacyInput | ImagesUpdateWithWhereUniqueWithoutPharmacyInput[]
    updateMany?: ImagesUpdateManyWithWhereWithoutPharmacyInput | ImagesUpdateManyWithWhereWithoutPharmacyInput[]
    deleteMany?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
  }

  export type availabilitiesUncheckedUpdateManyWithoutPharmacyNestedInput = {
    create?: XOR<availabilitiesCreateWithoutPharmacyInput, availabilitiesUncheckedCreateWithoutPharmacyInput> | availabilitiesCreateWithoutPharmacyInput[] | availabilitiesUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: availabilitiesCreateOrConnectWithoutPharmacyInput | availabilitiesCreateOrConnectWithoutPharmacyInput[]
    upsert?: availabilitiesUpsertWithWhereUniqueWithoutPharmacyInput | availabilitiesUpsertWithWhereUniqueWithoutPharmacyInput[]
    createMany?: availabilitiesCreateManyPharmacyInputEnvelope
    set?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
    disconnect?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
    delete?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
    connect?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
    update?: availabilitiesUpdateWithWhereUniqueWithoutPharmacyInput | availabilitiesUpdateWithWhereUniqueWithoutPharmacyInput[]
    updateMany?: availabilitiesUpdateManyWithWhereWithoutPharmacyInput | availabilitiesUpdateManyWithWhereWithoutPharmacyInput[]
    deleteMany?: availabilitiesScalarWhereInput | availabilitiesScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutPharmacyNestedInput = {
    create?: XOR<ReviewsCreateWithoutPharmacyInput, ReviewsUncheckedCreateWithoutPharmacyInput> | ReviewsCreateWithoutPharmacyInput[] | ReviewsUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutPharmacyInput | ReviewsCreateOrConnectWithoutPharmacyInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutPharmacyInput | ReviewsUpsertWithWhereUniqueWithoutPharmacyInput[]
    createMany?: ReviewsCreateManyPharmacyInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutPharmacyInput | ReviewsUpdateWithWhereUniqueWithoutPharmacyInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutPharmacyInput | ReviewsUpdateManyWithWhereWithoutPharmacyInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type PharmaciesCreateWithoutImagesInput = {
    title: string
    description: string
    address: string
    phone: string
    totalViews?: number
    totalRate?: number
    numberOfRates?: number
    averageRate?: number
    ownerId: number
    year: number
    validated: boolean
    blocked: boolean
    rates: JsonNullValueInput | InputJsonValue
    openTime: string
    closeTime: string
    latitude: string
    longitude: string
    daysOff?: PharmaciesCreatedaysOffInput | number[]
    type?: string
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilities?: availabilitiesCreateNestedManyWithoutPharmacyInput
    Reviews?: ReviewsCreateNestedManyWithoutPharmacyInput
  }

  export type PharmaciesUncheckedCreateWithoutImagesInput = {
    id?: number
    title: string
    description: string
    address: string
    phone: string
    totalViews?: number
    totalRate?: number
    numberOfRates?: number
    averageRate?: number
    ownerId: number
    year: number
    validated: boolean
    blocked: boolean
    rates: JsonNullValueInput | InputJsonValue
    openTime: string
    closeTime: string
    latitude: string
    longitude: string
    daysOff?: PharmaciesCreatedaysOffInput | number[]
    type?: string
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilities?: availabilitiesUncheckedCreateNestedManyWithoutPharmacyInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutPharmacyInput
  }

  export type PharmaciesCreateOrConnectWithoutImagesInput = {
    where: PharmaciesWhereUniqueInput
    create: XOR<PharmaciesCreateWithoutImagesInput, PharmaciesUncheckedCreateWithoutImagesInput>
  }

  export type PharmaciesUpsertWithoutImagesInput = {
    update: XOR<PharmaciesUpdateWithoutImagesInput, PharmaciesUncheckedUpdateWithoutImagesInput>
    create: XOR<PharmaciesCreateWithoutImagesInput, PharmaciesUncheckedCreateWithoutImagesInput>
    where?: PharmaciesWhereInput
  }

  export type PharmaciesUpdateToOneWithWhereWithoutImagesInput = {
    where?: PharmaciesWhereInput
    data: XOR<PharmaciesUpdateWithoutImagesInput, PharmaciesUncheckedUpdateWithoutImagesInput>
  }

  export type PharmaciesUpdateWithoutImagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    totalViews?: IntFieldUpdateOperationsInput | number
    totalRate?: IntFieldUpdateOperationsInput | number
    numberOfRates?: IntFieldUpdateOperationsInput | number
    averageRate?: FloatFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    validated?: BoolFieldUpdateOperationsInput | boolean
    blocked?: BoolFieldUpdateOperationsInput | boolean
    rates?: JsonNullValueInput | InputJsonValue
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    daysOff?: PharmaciesUpdatedaysOffInput | number[]
    type?: StringFieldUpdateOperationsInput | string
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: availabilitiesUpdateManyWithoutPharmacyNestedInput
    Reviews?: ReviewsUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmaciesUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    totalViews?: IntFieldUpdateOperationsInput | number
    totalRate?: IntFieldUpdateOperationsInput | number
    numberOfRates?: IntFieldUpdateOperationsInput | number
    averageRate?: FloatFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    validated?: BoolFieldUpdateOperationsInput | boolean
    blocked?: BoolFieldUpdateOperationsInput | boolean
    rates?: JsonNullValueInput | InputJsonValue
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    daysOff?: PharmaciesUpdatedaysOffInput | number[]
    type?: StringFieldUpdateOperationsInput | string
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: availabilitiesUncheckedUpdateManyWithoutPharmacyNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmaciesCreateWithoutAvailabilitiesInput = {
    title: string
    description: string
    address: string
    phone: string
    totalViews?: number
    totalRate?: number
    numberOfRates?: number
    averageRate?: number
    ownerId: number
    year: number
    validated: boolean
    blocked: boolean
    rates: JsonNullValueInput | InputJsonValue
    openTime: string
    closeTime: string
    latitude: string
    longitude: string
    daysOff?: PharmaciesCreatedaysOffInput | number[]
    type?: string
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesCreateNestedManyWithoutPharmacyInput
    Reviews?: ReviewsCreateNestedManyWithoutPharmacyInput
  }

  export type PharmaciesUncheckedCreateWithoutAvailabilitiesInput = {
    id?: number
    title: string
    description: string
    address: string
    phone: string
    totalViews?: number
    totalRate?: number
    numberOfRates?: number
    averageRate?: number
    ownerId: number
    year: number
    validated: boolean
    blocked: boolean
    rates: JsonNullValueInput | InputJsonValue
    openTime: string
    closeTime: string
    latitude: string
    longitude: string
    daysOff?: PharmaciesCreatedaysOffInput | number[]
    type?: string
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesUncheckedCreateNestedManyWithoutPharmacyInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutPharmacyInput
  }

  export type PharmaciesCreateOrConnectWithoutAvailabilitiesInput = {
    where: PharmaciesWhereUniqueInput
    create: XOR<PharmaciesCreateWithoutAvailabilitiesInput, PharmaciesUncheckedCreateWithoutAvailabilitiesInput>
  }

  export type PharmaciesUpsertWithoutAvailabilitiesInput = {
    update: XOR<PharmaciesUpdateWithoutAvailabilitiesInput, PharmaciesUncheckedUpdateWithoutAvailabilitiesInput>
    create: XOR<PharmaciesCreateWithoutAvailabilitiesInput, PharmaciesUncheckedCreateWithoutAvailabilitiesInput>
    where?: PharmaciesWhereInput
  }

  export type PharmaciesUpdateToOneWithWhereWithoutAvailabilitiesInput = {
    where?: PharmaciesWhereInput
    data: XOR<PharmaciesUpdateWithoutAvailabilitiesInput, PharmaciesUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type PharmaciesUpdateWithoutAvailabilitiesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    totalViews?: IntFieldUpdateOperationsInput | number
    totalRate?: IntFieldUpdateOperationsInput | number
    numberOfRates?: IntFieldUpdateOperationsInput | number
    averageRate?: FloatFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    validated?: BoolFieldUpdateOperationsInput | boolean
    blocked?: BoolFieldUpdateOperationsInput | boolean
    rates?: JsonNullValueInput | InputJsonValue
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    daysOff?: PharmaciesUpdatedaysOffInput | number[]
    type?: StringFieldUpdateOperationsInput | string
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUpdateManyWithoutPharmacyNestedInput
    Reviews?: ReviewsUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmaciesUncheckedUpdateWithoutAvailabilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    totalViews?: IntFieldUpdateOperationsInput | number
    totalRate?: IntFieldUpdateOperationsInput | number
    numberOfRates?: IntFieldUpdateOperationsInput | number
    averageRate?: FloatFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    validated?: BoolFieldUpdateOperationsInput | boolean
    blocked?: BoolFieldUpdateOperationsInput | boolean
    rates?: JsonNullValueInput | InputJsonValue
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    daysOff?: PharmaciesUpdatedaysOffInput | number[]
    type?: StringFieldUpdateOperationsInput | string
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUncheckedUpdateManyWithoutPharmacyNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmaciesCreateWithoutReviewsInput = {
    title: string
    description: string
    address: string
    phone: string
    totalViews?: number
    totalRate?: number
    numberOfRates?: number
    averageRate?: number
    ownerId: number
    year: number
    validated: boolean
    blocked: boolean
    rates: JsonNullValueInput | InputJsonValue
    openTime: string
    closeTime: string
    latitude: string
    longitude: string
    daysOff?: PharmaciesCreatedaysOffInput | number[]
    type?: string
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesCreateNestedManyWithoutPharmacyInput
    availabilities?: availabilitiesCreateNestedManyWithoutPharmacyInput
  }

  export type PharmaciesUncheckedCreateWithoutReviewsInput = {
    id?: number
    title: string
    description: string
    address: string
    phone: string
    totalViews?: number
    totalRate?: number
    numberOfRates?: number
    averageRate?: number
    ownerId: number
    year: number
    validated: boolean
    blocked: boolean
    rates: JsonNullValueInput | InputJsonValue
    openTime: string
    closeTime: string
    latitude: string
    longitude: string
    daysOff?: PharmaciesCreatedaysOffInput | number[]
    type?: string
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesUncheckedCreateNestedManyWithoutPharmacyInput
    availabilities?: availabilitiesUncheckedCreateNestedManyWithoutPharmacyInput
  }

  export type PharmaciesCreateOrConnectWithoutReviewsInput = {
    where: PharmaciesWhereUniqueInput
    create: XOR<PharmaciesCreateWithoutReviewsInput, PharmaciesUncheckedCreateWithoutReviewsInput>
  }

  export type PharmaciesUpsertWithoutReviewsInput = {
    update: XOR<PharmaciesUpdateWithoutReviewsInput, PharmaciesUncheckedUpdateWithoutReviewsInput>
    create: XOR<PharmaciesCreateWithoutReviewsInput, PharmaciesUncheckedCreateWithoutReviewsInput>
    where?: PharmaciesWhereInput
  }

  export type PharmaciesUpdateToOneWithWhereWithoutReviewsInput = {
    where?: PharmaciesWhereInput
    data: XOR<PharmaciesUpdateWithoutReviewsInput, PharmaciesUncheckedUpdateWithoutReviewsInput>
  }

  export type PharmaciesUpdateWithoutReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    totalViews?: IntFieldUpdateOperationsInput | number
    totalRate?: IntFieldUpdateOperationsInput | number
    numberOfRates?: IntFieldUpdateOperationsInput | number
    averageRate?: FloatFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    validated?: BoolFieldUpdateOperationsInput | boolean
    blocked?: BoolFieldUpdateOperationsInput | boolean
    rates?: JsonNullValueInput | InputJsonValue
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    daysOff?: PharmaciesUpdatedaysOffInput | number[]
    type?: StringFieldUpdateOperationsInput | string
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUpdateManyWithoutPharmacyNestedInput
    availabilities?: availabilitiesUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmaciesUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    totalViews?: IntFieldUpdateOperationsInput | number
    totalRate?: IntFieldUpdateOperationsInput | number
    numberOfRates?: IntFieldUpdateOperationsInput | number
    averageRate?: FloatFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    validated?: BoolFieldUpdateOperationsInput | boolean
    blocked?: BoolFieldUpdateOperationsInput | boolean
    rates?: JsonNullValueInput | InputJsonValue
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    daysOff?: PharmaciesUpdatedaysOffInput | number[]
    type?: StringFieldUpdateOperationsInput | string
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUncheckedUpdateManyWithoutPharmacyNestedInput
    availabilities?: availabilitiesUncheckedUpdateManyWithoutPharmacyNestedInput
  }

  export type ImagesCreateWithoutPharmacyInput = {
    url: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesUncheckedCreateWithoutPharmacyInput = {
    id?: number
    url: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesCreateOrConnectWithoutPharmacyInput = {
    where: ImagesWhereUniqueInput
    create: XOR<ImagesCreateWithoutPharmacyInput, ImagesUncheckedCreateWithoutPharmacyInput>
  }

  export type ImagesCreateManyPharmacyInputEnvelope = {
    data: ImagesCreateManyPharmacyInput | ImagesCreateManyPharmacyInput[]
    skipDuplicates?: boolean
  }

  export type availabilitiesCreateWithoutPharmacyInput = {
    start_date: string
    end_date: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type availabilitiesUncheckedCreateWithoutPharmacyInput = {
    id?: number
    start_date: string
    end_date: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type availabilitiesCreateOrConnectWithoutPharmacyInput = {
    where: availabilitiesWhereUniqueInput
    create: XOR<availabilitiesCreateWithoutPharmacyInput, availabilitiesUncheckedCreateWithoutPharmacyInput>
  }

  export type availabilitiesCreateManyPharmacyInputEnvelope = {
    data: availabilitiesCreateManyPharmacyInput | availabilitiesCreateManyPharmacyInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutPharmacyInput = {
    comment: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewsUncheckedCreateWithoutPharmacyInput = {
    id?: number
    comment: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewsCreateOrConnectWithoutPharmacyInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutPharmacyInput, ReviewsUncheckedCreateWithoutPharmacyInput>
  }

  export type ReviewsCreateManyPharmacyInputEnvelope = {
    data: ReviewsCreateManyPharmacyInput | ReviewsCreateManyPharmacyInput[]
    skipDuplicates?: boolean
  }

  export type ImagesUpsertWithWhereUniqueWithoutPharmacyInput = {
    where: ImagesWhereUniqueInput
    update: XOR<ImagesUpdateWithoutPharmacyInput, ImagesUncheckedUpdateWithoutPharmacyInput>
    create: XOR<ImagesCreateWithoutPharmacyInput, ImagesUncheckedCreateWithoutPharmacyInput>
  }

  export type ImagesUpdateWithWhereUniqueWithoutPharmacyInput = {
    where: ImagesWhereUniqueInput
    data: XOR<ImagesUpdateWithoutPharmacyInput, ImagesUncheckedUpdateWithoutPharmacyInput>
  }

  export type ImagesUpdateManyWithWhereWithoutPharmacyInput = {
    where: ImagesScalarWhereInput
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyWithoutPharmacyInput>
  }

  export type ImagesScalarWhereInput = {
    AND?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
    OR?: ImagesScalarWhereInput[]
    NOT?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
    id?: IntFilter<"Images"> | number
    url?: StringFilter<"Images"> | string
    pharmacyId?: IntFilter<"Images"> | number
    order?: IntFilter<"Images"> | number
    createdAt?: DateTimeFilter<"Images"> | Date | string
    updatedAt?: DateTimeFilter<"Images"> | Date | string
  }

  export type availabilitiesUpsertWithWhereUniqueWithoutPharmacyInput = {
    where: availabilitiesWhereUniqueInput
    update: XOR<availabilitiesUpdateWithoutPharmacyInput, availabilitiesUncheckedUpdateWithoutPharmacyInput>
    create: XOR<availabilitiesCreateWithoutPharmacyInput, availabilitiesUncheckedCreateWithoutPharmacyInput>
  }

  export type availabilitiesUpdateWithWhereUniqueWithoutPharmacyInput = {
    where: availabilitiesWhereUniqueInput
    data: XOR<availabilitiesUpdateWithoutPharmacyInput, availabilitiesUncheckedUpdateWithoutPharmacyInput>
  }

  export type availabilitiesUpdateManyWithWhereWithoutPharmacyInput = {
    where: availabilitiesScalarWhereInput
    data: XOR<availabilitiesUpdateManyMutationInput, availabilitiesUncheckedUpdateManyWithoutPharmacyInput>
  }

  export type availabilitiesScalarWhereInput = {
    AND?: availabilitiesScalarWhereInput | availabilitiesScalarWhereInput[]
    OR?: availabilitiesScalarWhereInput[]
    NOT?: availabilitiesScalarWhereInput | availabilitiesScalarWhereInput[]
    id?: IntFilter<"availabilities"> | number
    pharmacyId?: IntFilter<"availabilities"> | number
    start_date?: StringFilter<"availabilities"> | string
    end_date?: StringFilter<"availabilities"> | string
    createdAt?: DateTimeFilter<"availabilities"> | Date | string
    updatedAt?: DateTimeFilter<"availabilities"> | Date | string
  }

  export type ReviewsUpsertWithWhereUniqueWithoutPharmacyInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutPharmacyInput, ReviewsUncheckedUpdateWithoutPharmacyInput>
    create: XOR<ReviewsCreateWithoutPharmacyInput, ReviewsUncheckedCreateWithoutPharmacyInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutPharmacyInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutPharmacyInput, ReviewsUncheckedUpdateWithoutPharmacyInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutPharmacyInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutPharmacyInput>
  }

  export type ReviewsScalarWhereInput = {
    AND?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    OR?: ReviewsScalarWhereInput[]
    NOT?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    id?: IntFilter<"Reviews"> | number
    comment?: StringFilter<"Reviews"> | string
    userId?: IntFilter<"Reviews"> | number
    pharmacyId?: IntFilter<"Reviews"> | number
    createdAt?: DateTimeFilter<"Reviews"> | Date | string
    updatedAt?: DateTimeFilter<"Reviews"> | Date | string
  }

  export type ImagesCreateManyPharmacyInput = {
    id?: number
    url: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type availabilitiesCreateManyPharmacyInput = {
    id?: number
    start_date: string
    end_date: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewsCreateManyPharmacyInput = {
    id?: number
    comment: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesUpdateWithoutPharmacyInput = {
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesUncheckedUpdateWithoutPharmacyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesUncheckedUpdateManyWithoutPharmacyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type availabilitiesUpdateWithoutPharmacyInput = {
    start_date?: StringFieldUpdateOperationsInput | string
    end_date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type availabilitiesUncheckedUpdateWithoutPharmacyInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_date?: StringFieldUpdateOperationsInput | string
    end_date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type availabilitiesUncheckedUpdateManyWithoutPharmacyInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_date?: StringFieldUpdateOperationsInput | string
    end_date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUpdateWithoutPharmacyInput = {
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateWithoutPharmacyInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyWithoutPharmacyInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
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