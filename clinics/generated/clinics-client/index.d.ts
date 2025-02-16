
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
 * Model Services
 * 
 */
export type Services = $Result.DefaultSelection<Prisma.$ServicesPayload>
/**
 * Model Reviews
 * 
 */
export type Reviews = $Result.DefaultSelection<Prisma.$ReviewsPayload>
/**
 * Model Clinics
 * 
 */
export type Clinics = $Result.DefaultSelection<Prisma.$ClinicsPayload>
/**
 * Model PricingServices
 * 
 */
export type PricingServices = $Result.DefaultSelection<Prisma.$PricingServicesPayload>
/**
 * Model NonPricingServices
 * 
 */
export type NonPricingServices = $Result.DefaultSelection<Prisma.$NonPricingServicesPayload>

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
   * `prisma.services`: Exposes CRUD operations for the **Services** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.services.findMany()
    * ```
    */
  get services(): Prisma.ServicesDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.clinics`: Exposes CRUD operations for the **Clinics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clinics
    * const clinics = await prisma.clinics.findMany()
    * ```
    */
  get clinics(): Prisma.ClinicsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pricingServices`: Exposes CRUD operations for the **PricingServices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PricingServices
    * const pricingServices = await prisma.pricingServices.findMany()
    * ```
    */
  get pricingServices(): Prisma.PricingServicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nonPricingServices`: Exposes CRUD operations for the **NonPricingServices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NonPricingServices
    * const nonPricingServices = await prisma.nonPricingServices.findMany()
    * ```
    */
  get nonPricingServices(): Prisma.NonPricingServicesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.3.1
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
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
    Services: 'Services',
    Reviews: 'Reviews',
    Clinics: 'Clinics',
    PricingServices: 'PricingServices',
    NonPricingServices: 'NonPricingServices'
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
      modelProps: "images" | "availabilities" | "services" | "reviews" | "clinics" | "pricingServices" | "nonPricingServices"
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
      Clinics: {
        payload: Prisma.$ClinicsPayload<ExtArgs>
        fields: Prisma.ClinicsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClinicsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClinicsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicsPayload>
          }
          findFirst: {
            args: Prisma.ClinicsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClinicsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicsPayload>
          }
          findMany: {
            args: Prisma.ClinicsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicsPayload>[]
          }
          create: {
            args: Prisma.ClinicsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicsPayload>
          }
          createMany: {
            args: Prisma.ClinicsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClinicsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicsPayload>[]
          }
          delete: {
            args: Prisma.ClinicsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicsPayload>
          }
          update: {
            args: Prisma.ClinicsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicsPayload>
          }
          deleteMany: {
            args: Prisma.ClinicsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClinicsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClinicsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicsPayload>[]
          }
          upsert: {
            args: Prisma.ClinicsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicsPayload>
          }
          aggregate: {
            args: Prisma.ClinicsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClinics>
          }
          groupBy: {
            args: Prisma.ClinicsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClinicsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClinicsCountArgs<ExtArgs>
            result: $Utils.Optional<ClinicsCountAggregateOutputType> | number
          }
        }
      }
      PricingServices: {
        payload: Prisma.$PricingServicesPayload<ExtArgs>
        fields: Prisma.PricingServicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PricingServicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingServicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PricingServicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingServicesPayload>
          }
          findFirst: {
            args: Prisma.PricingServicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingServicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PricingServicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingServicesPayload>
          }
          findMany: {
            args: Prisma.PricingServicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingServicesPayload>[]
          }
          create: {
            args: Prisma.PricingServicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingServicesPayload>
          }
          createMany: {
            args: Prisma.PricingServicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PricingServicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingServicesPayload>[]
          }
          delete: {
            args: Prisma.PricingServicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingServicesPayload>
          }
          update: {
            args: Prisma.PricingServicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingServicesPayload>
          }
          deleteMany: {
            args: Prisma.PricingServicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PricingServicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PricingServicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingServicesPayload>[]
          }
          upsert: {
            args: Prisma.PricingServicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingServicesPayload>
          }
          aggregate: {
            args: Prisma.PricingServicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePricingServices>
          }
          groupBy: {
            args: Prisma.PricingServicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PricingServicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PricingServicesCountArgs<ExtArgs>
            result: $Utils.Optional<PricingServicesCountAggregateOutputType> | number
          }
        }
      }
      NonPricingServices: {
        payload: Prisma.$NonPricingServicesPayload<ExtArgs>
        fields: Prisma.NonPricingServicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NonPricingServicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NonPricingServicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NonPricingServicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NonPricingServicesPayload>
          }
          findFirst: {
            args: Prisma.NonPricingServicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NonPricingServicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NonPricingServicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NonPricingServicesPayload>
          }
          findMany: {
            args: Prisma.NonPricingServicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NonPricingServicesPayload>[]
          }
          create: {
            args: Prisma.NonPricingServicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NonPricingServicesPayload>
          }
          createMany: {
            args: Prisma.NonPricingServicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NonPricingServicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NonPricingServicesPayload>[]
          }
          delete: {
            args: Prisma.NonPricingServicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NonPricingServicesPayload>
          }
          update: {
            args: Prisma.NonPricingServicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NonPricingServicesPayload>
          }
          deleteMany: {
            args: Prisma.NonPricingServicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NonPricingServicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NonPricingServicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NonPricingServicesPayload>[]
          }
          upsert: {
            args: Prisma.NonPricingServicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NonPricingServicesPayload>
          }
          aggregate: {
            args: Prisma.NonPricingServicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNonPricingServices>
          }
          groupBy: {
            args: Prisma.NonPricingServicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<NonPricingServicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.NonPricingServicesCountArgs<ExtArgs>
            result: $Utils.Optional<NonPricingServicesCountAggregateOutputType> | number
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
    services?: ServicesOmit
    reviews?: ReviewsOmit
    clinics?: ClinicsOmit
    pricingServices?: PricingServicesOmit
    nonPricingServices?: NonPricingServicesOmit
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
   * Count Type ClinicsCountOutputType
   */

  export type ClinicsCountOutputType = {
    images: number
    availabilities: number
    Reviews: number
    PricingServices: number
    nonPricingServices: number
  }

  export type ClinicsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ClinicsCountOutputTypeCountImagesArgs
    availabilities?: boolean | ClinicsCountOutputTypeCountAvailabilitiesArgs
    Reviews?: boolean | ClinicsCountOutputTypeCountReviewsArgs
    PricingServices?: boolean | ClinicsCountOutputTypeCountPricingServicesArgs
    nonPricingServices?: boolean | ClinicsCountOutputTypeCountNonPricingServicesArgs
  }

  // Custom InputTypes
  /**
   * ClinicsCountOutputType without action
   */
  export type ClinicsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicsCountOutputType
     */
    select?: ClinicsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClinicsCountOutputType without action
   */
  export type ClinicsCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagesWhereInput
  }

  /**
   * ClinicsCountOutputType without action
   */
  export type ClinicsCountOutputTypeCountAvailabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: availabilitiesWhereInput
  }

  /**
   * ClinicsCountOutputType without action
   */
  export type ClinicsCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }

  /**
   * ClinicsCountOutputType without action
   */
  export type ClinicsCountOutputTypeCountPricingServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingServicesWhereInput
  }

  /**
   * ClinicsCountOutputType without action
   */
  export type ClinicsCountOutputTypeCountNonPricingServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NonPricingServicesWhereInput
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
    clinicId: number | null
  }

  export type ImagesSumAggregateOutputType = {
    id: number | null
    clinicId: number | null
  }

  export type ImagesMinAggregateOutputType = {
    id: number | null
    url: string | null
    clinicId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImagesMaxAggregateOutputType = {
    id: number | null
    url: string | null
    clinicId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImagesCountAggregateOutputType = {
    id: number
    url: number
    clinicId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImagesAvgAggregateInputType = {
    id?: true
    clinicId?: true
  }

  export type ImagesSumAggregateInputType = {
    id?: true
    clinicId?: true
  }

  export type ImagesMinAggregateInputType = {
    id?: true
    url?: true
    clinicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImagesMaxAggregateInputType = {
    id?: true
    url?: true
    clinicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImagesCountAggregateInputType = {
    id?: true
    url?: true
    clinicId?: true
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
    clinicId: number
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
    clinicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>

  export type ImagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    clinicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>

  export type ImagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    clinicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>

  export type ImagesSelectScalar = {
    id?: boolean
    url?: boolean
    clinicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "clinicId" | "createdAt" | "updatedAt", ExtArgs["result"]["images"]>
  export type ImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }
  export type ImagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }
  export type ImagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }

  export type $ImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Images"
    objects: {
      clinic: Prisma.$ClinicsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      clinicId: number
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
    clinic<T extends ClinicsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClinicsDefaultArgs<ExtArgs>>): Prisma__ClinicsClient<$Result.GetResult<Prisma.$ClinicsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
    readonly clinicId: FieldRef<"Images", 'Int'>
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
    clinicId: number | null
  }

  export type AvailabilitiesSumAggregateOutputType = {
    id: number | null
    clinicId: number | null
  }

  export type AvailabilitiesMinAggregateOutputType = {
    id: number | null
    clinicId: number | null
    start_date: string | null
    end_date: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvailabilitiesMaxAggregateOutputType = {
    id: number | null
    clinicId: number | null
    start_date: string | null
    end_date: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvailabilitiesCountAggregateOutputType = {
    id: number
    clinicId: number
    start_date: number
    end_date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AvailabilitiesAvgAggregateInputType = {
    id?: true
    clinicId?: true
  }

  export type AvailabilitiesSumAggregateInputType = {
    id?: true
    clinicId?: true
  }

  export type AvailabilitiesMinAggregateInputType = {
    id?: true
    clinicId?: true
    start_date?: true
    end_date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvailabilitiesMaxAggregateInputType = {
    id?: true
    clinicId?: true
    start_date?: true
    end_date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvailabilitiesCountAggregateInputType = {
    id?: true
    clinicId?: true
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
    clinicId: number
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
    clinicId?: boolean
    start_date?: boolean
    end_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilities"]>

  export type availabilitiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicId?: boolean
    start_date?: boolean
    end_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilities"]>

  export type availabilitiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicId?: boolean
    start_date?: boolean
    end_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilities"]>

  export type availabilitiesSelectScalar = {
    id?: boolean
    clinicId?: boolean
    start_date?: boolean
    end_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type availabilitiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clinicId" | "start_date" | "end_date" | "createdAt" | "updatedAt", ExtArgs["result"]["availabilities"]>
  export type availabilitiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }
  export type availabilitiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }
  export type availabilitiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }

  export type $availabilitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "availabilities"
    objects: {
      clinic: Prisma.$ClinicsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clinicId: number
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
    clinic<T extends ClinicsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClinicsDefaultArgs<ExtArgs>>): Prisma__ClinicsClient<$Result.GetResult<Prisma.$ClinicsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
    readonly clinicId: FieldRef<"availabilities", 'Int'>
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
  }

  export type ServicesSumAggregateOutputType = {
    id: number | null
  }

  export type ServicesMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServicesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServicesCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServicesAvgAggregateInputType = {
    id?: true
  }

  export type ServicesSumAggregateInputType = {
    id?: true
  }

  export type ServicesMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServicesMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServicesCountAggregateInputType = {
    id?: true
    name?: true
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
    name: string
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
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["services"]>

  export type ServicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["services"]>

  export type ServicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["services"]>

  export type ServicesSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["services"]>

  export type $ServicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Services"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
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
    readonly name: FieldRef<"Services", 'String'>
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
    clinicId: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    clinicId: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    id: number | null
    comment: string | null
    userId: number | null
    clinicId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewsMaxAggregateOutputType = {
    id: number | null
    comment: string | null
    userId: number | null
    clinicId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewsCountAggregateOutputType = {
    id: number
    comment: number
    userId: number
    clinicId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    id?: true
    userId?: true
    clinicId?: true
  }

  export type ReviewsSumAggregateInputType = {
    id?: true
    userId?: true
    clinicId?: true
  }

  export type ReviewsMinAggregateInputType = {
    id?: true
    comment?: true
    userId?: true
    clinicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewsMaxAggregateInputType = {
    id?: true
    comment?: true
    userId?: true
    clinicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewsCountAggregateInputType = {
    id?: true
    comment?: true
    userId?: true
    clinicId?: true
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
    clinicId: number
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
    clinicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    userId?: boolean
    clinicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    userId?: boolean
    clinicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectScalar = {
    id?: boolean
    comment?: boolean
    userId?: boolean
    clinicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "comment" | "userId" | "clinicId" | "createdAt" | "updatedAt", ExtArgs["result"]["reviews"]>
  export type ReviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }
  export type ReviewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }
  export type ReviewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }

  export type $ReviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reviews"
    objects: {
      clinic: Prisma.$ClinicsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      comment: string
      userId: number
      clinicId: number
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
    clinic<T extends ClinicsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClinicsDefaultArgs<ExtArgs>>): Prisma__ClinicsClient<$Result.GetResult<Prisma.$ClinicsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
    readonly clinicId: FieldRef<"Reviews", 'Int'>
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
   * Model Clinics
   */

  export type AggregateClinics = {
    _count: ClinicsCountAggregateOutputType | null
    _avg: ClinicsAvgAggregateOutputType | null
    _sum: ClinicsSumAggregateOutputType | null
    _min: ClinicsMinAggregateOutputType | null
    _max: ClinicsMaxAggregateOutputType | null
  }

  export type ClinicsAvgAggregateOutputType = {
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

  export type ClinicsSumAggregateOutputType = {
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

  export type ClinicsMinAggregateOutputType = {
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
    reviewsCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClinicsMaxAggregateOutputType = {
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
    reviewsCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClinicsCountAggregateOutputType = {
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
    reviewsCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClinicsAvgAggregateInputType = {
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

  export type ClinicsSumAggregateInputType = {
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

  export type ClinicsMinAggregateInputType = {
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
    reviewsCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClinicsMaxAggregateInputType = {
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
    reviewsCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClinicsCountAggregateInputType = {
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
    reviewsCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClinicsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clinics to aggregate.
     */
    where?: ClinicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinics to fetch.
     */
    orderBy?: ClinicsOrderByWithRelationInput | ClinicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClinicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clinics
    **/
    _count?: true | ClinicsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClinicsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClinicsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClinicsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClinicsMaxAggregateInputType
  }

  export type GetClinicsAggregateType<T extends ClinicsAggregateArgs> = {
        [P in keyof T & keyof AggregateClinics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClinics[P]>
      : GetScalarType<T[P], AggregateClinics[P]>
  }




  export type ClinicsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClinicsWhereInput
    orderBy?: ClinicsOrderByWithAggregationInput | ClinicsOrderByWithAggregationInput[]
    by: ClinicsScalarFieldEnum[] | ClinicsScalarFieldEnum
    having?: ClinicsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClinicsCountAggregateInputType | true
    _avg?: ClinicsAvgAggregateInputType
    _sum?: ClinicsSumAggregateInputType
    _min?: ClinicsMinAggregateInputType
    _max?: ClinicsMaxAggregateInputType
  }

  export type ClinicsGroupByOutputType = {
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
    reviewsCount: number
    createdAt: Date
    updatedAt: Date
    _count: ClinicsCountAggregateOutputType | null
    _avg: ClinicsAvgAggregateOutputType | null
    _sum: ClinicsSumAggregateOutputType | null
    _min: ClinicsMinAggregateOutputType | null
    _max: ClinicsMaxAggregateOutputType | null
  }

  type GetClinicsGroupByPayload<T extends ClinicsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClinicsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClinicsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClinicsGroupByOutputType[P]>
            : GetScalarType<T[P], ClinicsGroupByOutputType[P]>
        }
      >
    >


  export type ClinicsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    reviewsCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | Clinics$imagesArgs<ExtArgs>
    availabilities?: boolean | Clinics$availabilitiesArgs<ExtArgs>
    Reviews?: boolean | Clinics$ReviewsArgs<ExtArgs>
    PricingServices?: boolean | Clinics$PricingServicesArgs<ExtArgs>
    nonPricingServices?: boolean | Clinics$nonPricingServicesArgs<ExtArgs>
    _count?: boolean | ClinicsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clinics"]>

  export type ClinicsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    reviewsCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["clinics"]>

  export type ClinicsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    reviewsCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["clinics"]>

  export type ClinicsSelectScalar = {
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
    reviewsCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClinicsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "address" | "phone" | "totalViews" | "totalRate" | "numberOfRates" | "averageRate" | "ownerId" | "year" | "validated" | "blocked" | "rates" | "openTime" | "closeTime" | "latitude" | "longitude" | "daysOff" | "reviewsCount" | "createdAt" | "updatedAt", ExtArgs["result"]["clinics"]>
  export type ClinicsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Clinics$imagesArgs<ExtArgs>
    availabilities?: boolean | Clinics$availabilitiesArgs<ExtArgs>
    Reviews?: boolean | Clinics$ReviewsArgs<ExtArgs>
    PricingServices?: boolean | Clinics$PricingServicesArgs<ExtArgs>
    nonPricingServices?: boolean | Clinics$nonPricingServicesArgs<ExtArgs>
    _count?: boolean | ClinicsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClinicsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClinicsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClinicsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clinics"
    objects: {
      images: Prisma.$ImagesPayload<ExtArgs>[]
      availabilities: Prisma.$availabilitiesPayload<ExtArgs>[]
      Reviews: Prisma.$ReviewsPayload<ExtArgs>[]
      PricingServices: Prisma.$PricingServicesPayload<ExtArgs>[]
      nonPricingServices: Prisma.$NonPricingServicesPayload<ExtArgs>[]
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
      reviewsCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["clinics"]>
    composites: {}
  }

  type ClinicsGetPayload<S extends boolean | null | undefined | ClinicsDefaultArgs> = $Result.GetResult<Prisma.$ClinicsPayload, S>

  type ClinicsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClinicsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClinicsCountAggregateInputType | true
    }

  export interface ClinicsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clinics'], meta: { name: 'Clinics' } }
    /**
     * Find zero or one Clinics that matches the filter.
     * @param {ClinicsFindUniqueArgs} args - Arguments to find a Clinics
     * @example
     * // Get one Clinics
     * const clinics = await prisma.clinics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClinicsFindUniqueArgs>(args: SelectSubset<T, ClinicsFindUniqueArgs<ExtArgs>>): Prisma__ClinicsClient<$Result.GetResult<Prisma.$ClinicsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Clinics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClinicsFindUniqueOrThrowArgs} args - Arguments to find a Clinics
     * @example
     * // Get one Clinics
     * const clinics = await prisma.clinics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClinicsFindUniqueOrThrowArgs>(args: SelectSubset<T, ClinicsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClinicsClient<$Result.GetResult<Prisma.$ClinicsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Clinics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicsFindFirstArgs} args - Arguments to find a Clinics
     * @example
     * // Get one Clinics
     * const clinics = await prisma.clinics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClinicsFindFirstArgs>(args?: SelectSubset<T, ClinicsFindFirstArgs<ExtArgs>>): Prisma__ClinicsClient<$Result.GetResult<Prisma.$ClinicsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Clinics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicsFindFirstOrThrowArgs} args - Arguments to find a Clinics
     * @example
     * // Get one Clinics
     * const clinics = await prisma.clinics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClinicsFindFirstOrThrowArgs>(args?: SelectSubset<T, ClinicsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClinicsClient<$Result.GetResult<Prisma.$ClinicsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Clinics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clinics
     * const clinics = await prisma.clinics.findMany()
     * 
     * // Get first 10 Clinics
     * const clinics = await prisma.clinics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clinicsWithIdOnly = await prisma.clinics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClinicsFindManyArgs>(args?: SelectSubset<T, ClinicsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Clinics.
     * @param {ClinicsCreateArgs} args - Arguments to create a Clinics.
     * @example
     * // Create one Clinics
     * const Clinics = await prisma.clinics.create({
     *   data: {
     *     // ... data to create a Clinics
     *   }
     * })
     * 
     */
    create<T extends ClinicsCreateArgs>(args: SelectSubset<T, ClinicsCreateArgs<ExtArgs>>): Prisma__ClinicsClient<$Result.GetResult<Prisma.$ClinicsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Clinics.
     * @param {ClinicsCreateManyArgs} args - Arguments to create many Clinics.
     * @example
     * // Create many Clinics
     * const clinics = await prisma.clinics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClinicsCreateManyArgs>(args?: SelectSubset<T, ClinicsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clinics and returns the data saved in the database.
     * @param {ClinicsCreateManyAndReturnArgs} args - Arguments to create many Clinics.
     * @example
     * // Create many Clinics
     * const clinics = await prisma.clinics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clinics and only return the `id`
     * const clinicsWithIdOnly = await prisma.clinics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClinicsCreateManyAndReturnArgs>(args?: SelectSubset<T, ClinicsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Clinics.
     * @param {ClinicsDeleteArgs} args - Arguments to delete one Clinics.
     * @example
     * // Delete one Clinics
     * const Clinics = await prisma.clinics.delete({
     *   where: {
     *     // ... filter to delete one Clinics
     *   }
     * })
     * 
     */
    delete<T extends ClinicsDeleteArgs>(args: SelectSubset<T, ClinicsDeleteArgs<ExtArgs>>): Prisma__ClinicsClient<$Result.GetResult<Prisma.$ClinicsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Clinics.
     * @param {ClinicsUpdateArgs} args - Arguments to update one Clinics.
     * @example
     * // Update one Clinics
     * const clinics = await prisma.clinics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClinicsUpdateArgs>(args: SelectSubset<T, ClinicsUpdateArgs<ExtArgs>>): Prisma__ClinicsClient<$Result.GetResult<Prisma.$ClinicsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Clinics.
     * @param {ClinicsDeleteManyArgs} args - Arguments to filter Clinics to delete.
     * @example
     * // Delete a few Clinics
     * const { count } = await prisma.clinics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClinicsDeleteManyArgs>(args?: SelectSubset<T, ClinicsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clinics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clinics
     * const clinics = await prisma.clinics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClinicsUpdateManyArgs>(args: SelectSubset<T, ClinicsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clinics and returns the data updated in the database.
     * @param {ClinicsUpdateManyAndReturnArgs} args - Arguments to update many Clinics.
     * @example
     * // Update many Clinics
     * const clinics = await prisma.clinics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clinics and only return the `id`
     * const clinicsWithIdOnly = await prisma.clinics.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClinicsUpdateManyAndReturnArgs>(args: SelectSubset<T, ClinicsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Clinics.
     * @param {ClinicsUpsertArgs} args - Arguments to update or create a Clinics.
     * @example
     * // Update or create a Clinics
     * const clinics = await prisma.clinics.upsert({
     *   create: {
     *     // ... data to create a Clinics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clinics we want to update
     *   }
     * })
     */
    upsert<T extends ClinicsUpsertArgs>(args: SelectSubset<T, ClinicsUpsertArgs<ExtArgs>>): Prisma__ClinicsClient<$Result.GetResult<Prisma.$ClinicsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Clinics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicsCountArgs} args - Arguments to filter Clinics to count.
     * @example
     * // Count the number of Clinics
     * const count = await prisma.clinics.count({
     *   where: {
     *     // ... the filter for the Clinics we want to count
     *   }
     * })
    **/
    count<T extends ClinicsCountArgs>(
      args?: Subset<T, ClinicsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClinicsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clinics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClinicsAggregateArgs>(args: Subset<T, ClinicsAggregateArgs>): Prisma.PrismaPromise<GetClinicsAggregateType<T>>

    /**
     * Group by Clinics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicsGroupByArgs} args - Group by arguments.
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
      T extends ClinicsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClinicsGroupByArgs['orderBy'] }
        : { orderBy?: ClinicsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClinicsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClinicsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clinics model
   */
  readonly fields: ClinicsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clinics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClinicsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Clinics$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Clinics$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    availabilities<T extends Clinics$availabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Clinics$availabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$availabilitiesPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Reviews<T extends Clinics$ReviewsArgs<ExtArgs> = {}>(args?: Subset<T, Clinics$ReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    PricingServices<T extends Clinics$PricingServicesArgs<ExtArgs> = {}>(args?: Subset<T, Clinics$PricingServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingServicesPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    nonPricingServices<T extends Clinics$nonPricingServicesArgs<ExtArgs> = {}>(args?: Subset<T, Clinics$nonPricingServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NonPricingServicesPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Clinics model
   */ 
  interface ClinicsFieldRefs {
    readonly id: FieldRef<"Clinics", 'Int'>
    readonly title: FieldRef<"Clinics", 'String'>
    readonly description: FieldRef<"Clinics", 'String'>
    readonly address: FieldRef<"Clinics", 'String'>
    readonly phone: FieldRef<"Clinics", 'String'>
    readonly totalViews: FieldRef<"Clinics", 'Int'>
    readonly totalRate: FieldRef<"Clinics", 'Int'>
    readonly numberOfRates: FieldRef<"Clinics", 'Int'>
    readonly averageRate: FieldRef<"Clinics", 'Float'>
    readonly ownerId: FieldRef<"Clinics", 'Int'>
    readonly year: FieldRef<"Clinics", 'Int'>
    readonly validated: FieldRef<"Clinics", 'Boolean'>
    readonly blocked: FieldRef<"Clinics", 'Boolean'>
    readonly rates: FieldRef<"Clinics", 'Json'>
    readonly openTime: FieldRef<"Clinics", 'String'>
    readonly closeTime: FieldRef<"Clinics", 'String'>
    readonly latitude: FieldRef<"Clinics", 'String'>
    readonly longitude: FieldRef<"Clinics", 'String'>
    readonly daysOff: FieldRef<"Clinics", 'Int[]'>
    readonly reviewsCount: FieldRef<"Clinics", 'Int'>
    readonly createdAt: FieldRef<"Clinics", 'DateTime'>
    readonly updatedAt: FieldRef<"Clinics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Clinics findUnique
   */
  export type ClinicsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinics
     */
    select?: ClinicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinics
     */
    omit?: ClinicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicsInclude<ExtArgs> | null
    /**
     * Filter, which Clinics to fetch.
     */
    where: ClinicsWhereUniqueInput
  }

  /**
   * Clinics findUniqueOrThrow
   */
  export type ClinicsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinics
     */
    select?: ClinicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinics
     */
    omit?: ClinicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicsInclude<ExtArgs> | null
    /**
     * Filter, which Clinics to fetch.
     */
    where: ClinicsWhereUniqueInput
  }

  /**
   * Clinics findFirst
   */
  export type ClinicsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinics
     */
    select?: ClinicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinics
     */
    omit?: ClinicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicsInclude<ExtArgs> | null
    /**
     * Filter, which Clinics to fetch.
     */
    where?: ClinicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinics to fetch.
     */
    orderBy?: ClinicsOrderByWithRelationInput | ClinicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clinics.
     */
    cursor?: ClinicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clinics.
     */
    distinct?: ClinicsScalarFieldEnum | ClinicsScalarFieldEnum[]
  }

  /**
   * Clinics findFirstOrThrow
   */
  export type ClinicsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinics
     */
    select?: ClinicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinics
     */
    omit?: ClinicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicsInclude<ExtArgs> | null
    /**
     * Filter, which Clinics to fetch.
     */
    where?: ClinicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinics to fetch.
     */
    orderBy?: ClinicsOrderByWithRelationInput | ClinicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clinics.
     */
    cursor?: ClinicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clinics.
     */
    distinct?: ClinicsScalarFieldEnum | ClinicsScalarFieldEnum[]
  }

  /**
   * Clinics findMany
   */
  export type ClinicsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinics
     */
    select?: ClinicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinics
     */
    omit?: ClinicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicsInclude<ExtArgs> | null
    /**
     * Filter, which Clinics to fetch.
     */
    where?: ClinicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinics to fetch.
     */
    orderBy?: ClinicsOrderByWithRelationInput | ClinicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clinics.
     */
    cursor?: ClinicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinics.
     */
    skip?: number
    distinct?: ClinicsScalarFieldEnum | ClinicsScalarFieldEnum[]
  }

  /**
   * Clinics create
   */
  export type ClinicsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinics
     */
    select?: ClinicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinics
     */
    omit?: ClinicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicsInclude<ExtArgs> | null
    /**
     * The data needed to create a Clinics.
     */
    data: XOR<ClinicsCreateInput, ClinicsUncheckedCreateInput>
  }

  /**
   * Clinics createMany
   */
  export type ClinicsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clinics.
     */
    data: ClinicsCreateManyInput | ClinicsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clinics createManyAndReturn
   */
  export type ClinicsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinics
     */
    select?: ClinicsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clinics
     */
    omit?: ClinicsOmit<ExtArgs> | null
    /**
     * The data used to create many Clinics.
     */
    data: ClinicsCreateManyInput | ClinicsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clinics update
   */
  export type ClinicsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinics
     */
    select?: ClinicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinics
     */
    omit?: ClinicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicsInclude<ExtArgs> | null
    /**
     * The data needed to update a Clinics.
     */
    data: XOR<ClinicsUpdateInput, ClinicsUncheckedUpdateInput>
    /**
     * Choose, which Clinics to update.
     */
    where: ClinicsWhereUniqueInput
  }

  /**
   * Clinics updateMany
   */
  export type ClinicsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clinics.
     */
    data: XOR<ClinicsUpdateManyMutationInput, ClinicsUncheckedUpdateManyInput>
    /**
     * Filter which Clinics to update
     */
    where?: ClinicsWhereInput
    /**
     * Limit how many Clinics to update.
     */
    limit?: number
  }

  /**
   * Clinics updateManyAndReturn
   */
  export type ClinicsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinics
     */
    select?: ClinicsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clinics
     */
    omit?: ClinicsOmit<ExtArgs> | null
    /**
     * The data used to update Clinics.
     */
    data: XOR<ClinicsUpdateManyMutationInput, ClinicsUncheckedUpdateManyInput>
    /**
     * Filter which Clinics to update
     */
    where?: ClinicsWhereInput
    /**
     * Limit how many Clinics to update.
     */
    limit?: number
  }

  /**
   * Clinics upsert
   */
  export type ClinicsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinics
     */
    select?: ClinicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinics
     */
    omit?: ClinicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicsInclude<ExtArgs> | null
    /**
     * The filter to search for the Clinics to update in case it exists.
     */
    where: ClinicsWhereUniqueInput
    /**
     * In case the Clinics found by the `where` argument doesn't exist, create a new Clinics with this data.
     */
    create: XOR<ClinicsCreateInput, ClinicsUncheckedCreateInput>
    /**
     * In case the Clinics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClinicsUpdateInput, ClinicsUncheckedUpdateInput>
  }

  /**
   * Clinics delete
   */
  export type ClinicsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinics
     */
    select?: ClinicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinics
     */
    omit?: ClinicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicsInclude<ExtArgs> | null
    /**
     * Filter which Clinics to delete.
     */
    where: ClinicsWhereUniqueInput
  }

  /**
   * Clinics deleteMany
   */
  export type ClinicsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clinics to delete
     */
    where?: ClinicsWhereInput
    /**
     * Limit how many Clinics to delete.
     */
    limit?: number
  }

  /**
   * Clinics.images
   */
  export type Clinics$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Clinics.availabilities
   */
  export type Clinics$availabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Clinics.Reviews
   */
  export type Clinics$ReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Clinics.PricingServices
   */
  export type Clinics$PricingServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingServices
     */
    select?: PricingServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingServices
     */
    omit?: PricingServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingServicesInclude<ExtArgs> | null
    where?: PricingServicesWhereInput
    orderBy?: PricingServicesOrderByWithRelationInput | PricingServicesOrderByWithRelationInput[]
    cursor?: PricingServicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PricingServicesScalarFieldEnum | PricingServicesScalarFieldEnum[]
  }

  /**
   * Clinics.nonPricingServices
   */
  export type Clinics$nonPricingServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonPricingServices
     */
    select?: NonPricingServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NonPricingServices
     */
    omit?: NonPricingServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NonPricingServicesInclude<ExtArgs> | null
    where?: NonPricingServicesWhereInput
    orderBy?: NonPricingServicesOrderByWithRelationInput | NonPricingServicesOrderByWithRelationInput[]
    cursor?: NonPricingServicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NonPricingServicesScalarFieldEnum | NonPricingServicesScalarFieldEnum[]
  }

  /**
   * Clinics without action
   */
  export type ClinicsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinics
     */
    select?: ClinicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinics
     */
    omit?: ClinicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicsInclude<ExtArgs> | null
  }


  /**
   * Model PricingServices
   */

  export type AggregatePricingServices = {
    _count: PricingServicesCountAggregateOutputType | null
    _avg: PricingServicesAvgAggregateOutputType | null
    _sum: PricingServicesSumAggregateOutputType | null
    _min: PricingServicesMinAggregateOutputType | null
    _max: PricingServicesMaxAggregateOutputType | null
  }

  export type PricingServicesAvgAggregateOutputType = {
    id: number | null
    clinicId: number | null
    price: number | null
  }

  export type PricingServicesSumAggregateOutputType = {
    id: number | null
    clinicId: number | null
    price: number | null
  }

  export type PricingServicesMinAggregateOutputType = {
    id: number | null
    clinicId: number | null
    service_name: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PricingServicesMaxAggregateOutputType = {
    id: number | null
    clinicId: number | null
    service_name: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PricingServicesCountAggregateOutputType = {
    id: number
    clinicId: number
    service_name: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PricingServicesAvgAggregateInputType = {
    id?: true
    clinicId?: true
    price?: true
  }

  export type PricingServicesSumAggregateInputType = {
    id?: true
    clinicId?: true
    price?: true
  }

  export type PricingServicesMinAggregateInputType = {
    id?: true
    clinicId?: true
    service_name?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PricingServicesMaxAggregateInputType = {
    id?: true
    clinicId?: true
    service_name?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PricingServicesCountAggregateInputType = {
    id?: true
    clinicId?: true
    service_name?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PricingServicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingServices to aggregate.
     */
    where?: PricingServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingServices to fetch.
     */
    orderBy?: PricingServicesOrderByWithRelationInput | PricingServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PricingServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PricingServices
    **/
    _count?: true | PricingServicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PricingServicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PricingServicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PricingServicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PricingServicesMaxAggregateInputType
  }

  export type GetPricingServicesAggregateType<T extends PricingServicesAggregateArgs> = {
        [P in keyof T & keyof AggregatePricingServices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePricingServices[P]>
      : GetScalarType<T[P], AggregatePricingServices[P]>
  }




  export type PricingServicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingServicesWhereInput
    orderBy?: PricingServicesOrderByWithAggregationInput | PricingServicesOrderByWithAggregationInput[]
    by: PricingServicesScalarFieldEnum[] | PricingServicesScalarFieldEnum
    having?: PricingServicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PricingServicesCountAggregateInputType | true
    _avg?: PricingServicesAvgAggregateInputType
    _sum?: PricingServicesSumAggregateInputType
    _min?: PricingServicesMinAggregateInputType
    _max?: PricingServicesMaxAggregateInputType
  }

  export type PricingServicesGroupByOutputType = {
    id: number
    clinicId: number
    service_name: string
    price: number
    createdAt: Date
    updatedAt: Date
    _count: PricingServicesCountAggregateOutputType | null
    _avg: PricingServicesAvgAggregateOutputType | null
    _sum: PricingServicesSumAggregateOutputType | null
    _min: PricingServicesMinAggregateOutputType | null
    _max: PricingServicesMaxAggregateOutputType | null
  }

  type GetPricingServicesGroupByPayload<T extends PricingServicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PricingServicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PricingServicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PricingServicesGroupByOutputType[P]>
            : GetScalarType<T[P], PricingServicesGroupByOutputType[P]>
        }
      >
    >


  export type PricingServicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicId?: boolean
    service_name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pricingServices"]>

  export type PricingServicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicId?: boolean
    service_name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pricingServices"]>

  export type PricingServicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicId?: boolean
    service_name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pricingServices"]>

  export type PricingServicesSelectScalar = {
    id?: boolean
    clinicId?: boolean
    service_name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PricingServicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clinicId" | "service_name" | "price" | "createdAt" | "updatedAt", ExtArgs["result"]["pricingServices"]>
  export type PricingServicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }
  export type PricingServicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }
  export type PricingServicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }

  export type $PricingServicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PricingServices"
    objects: {
      clinic: Prisma.$ClinicsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clinicId: number
      service_name: string
      price: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pricingServices"]>
    composites: {}
  }

  type PricingServicesGetPayload<S extends boolean | null | undefined | PricingServicesDefaultArgs> = $Result.GetResult<Prisma.$PricingServicesPayload, S>

  type PricingServicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PricingServicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PricingServicesCountAggregateInputType | true
    }

  export interface PricingServicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PricingServices'], meta: { name: 'PricingServices' } }
    /**
     * Find zero or one PricingServices that matches the filter.
     * @param {PricingServicesFindUniqueArgs} args - Arguments to find a PricingServices
     * @example
     * // Get one PricingServices
     * const pricingServices = await prisma.pricingServices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PricingServicesFindUniqueArgs>(args: SelectSubset<T, PricingServicesFindUniqueArgs<ExtArgs>>): Prisma__PricingServicesClient<$Result.GetResult<Prisma.$PricingServicesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PricingServices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PricingServicesFindUniqueOrThrowArgs} args - Arguments to find a PricingServices
     * @example
     * // Get one PricingServices
     * const pricingServices = await prisma.pricingServices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PricingServicesFindUniqueOrThrowArgs>(args: SelectSubset<T, PricingServicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PricingServicesClient<$Result.GetResult<Prisma.$PricingServicesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PricingServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingServicesFindFirstArgs} args - Arguments to find a PricingServices
     * @example
     * // Get one PricingServices
     * const pricingServices = await prisma.pricingServices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PricingServicesFindFirstArgs>(args?: SelectSubset<T, PricingServicesFindFirstArgs<ExtArgs>>): Prisma__PricingServicesClient<$Result.GetResult<Prisma.$PricingServicesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PricingServices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingServicesFindFirstOrThrowArgs} args - Arguments to find a PricingServices
     * @example
     * // Get one PricingServices
     * const pricingServices = await prisma.pricingServices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PricingServicesFindFirstOrThrowArgs>(args?: SelectSubset<T, PricingServicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PricingServicesClient<$Result.GetResult<Prisma.$PricingServicesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PricingServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingServicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PricingServices
     * const pricingServices = await prisma.pricingServices.findMany()
     * 
     * // Get first 10 PricingServices
     * const pricingServices = await prisma.pricingServices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pricingServicesWithIdOnly = await prisma.pricingServices.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PricingServicesFindManyArgs>(args?: SelectSubset<T, PricingServicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingServicesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PricingServices.
     * @param {PricingServicesCreateArgs} args - Arguments to create a PricingServices.
     * @example
     * // Create one PricingServices
     * const PricingServices = await prisma.pricingServices.create({
     *   data: {
     *     // ... data to create a PricingServices
     *   }
     * })
     * 
     */
    create<T extends PricingServicesCreateArgs>(args: SelectSubset<T, PricingServicesCreateArgs<ExtArgs>>): Prisma__PricingServicesClient<$Result.GetResult<Prisma.$PricingServicesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PricingServices.
     * @param {PricingServicesCreateManyArgs} args - Arguments to create many PricingServices.
     * @example
     * // Create many PricingServices
     * const pricingServices = await prisma.pricingServices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PricingServicesCreateManyArgs>(args?: SelectSubset<T, PricingServicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PricingServices and returns the data saved in the database.
     * @param {PricingServicesCreateManyAndReturnArgs} args - Arguments to create many PricingServices.
     * @example
     * // Create many PricingServices
     * const pricingServices = await prisma.pricingServices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PricingServices and only return the `id`
     * const pricingServicesWithIdOnly = await prisma.pricingServices.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PricingServicesCreateManyAndReturnArgs>(args?: SelectSubset<T, PricingServicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingServicesPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PricingServices.
     * @param {PricingServicesDeleteArgs} args - Arguments to delete one PricingServices.
     * @example
     * // Delete one PricingServices
     * const PricingServices = await prisma.pricingServices.delete({
     *   where: {
     *     // ... filter to delete one PricingServices
     *   }
     * })
     * 
     */
    delete<T extends PricingServicesDeleteArgs>(args: SelectSubset<T, PricingServicesDeleteArgs<ExtArgs>>): Prisma__PricingServicesClient<$Result.GetResult<Prisma.$PricingServicesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PricingServices.
     * @param {PricingServicesUpdateArgs} args - Arguments to update one PricingServices.
     * @example
     * // Update one PricingServices
     * const pricingServices = await prisma.pricingServices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PricingServicesUpdateArgs>(args: SelectSubset<T, PricingServicesUpdateArgs<ExtArgs>>): Prisma__PricingServicesClient<$Result.GetResult<Prisma.$PricingServicesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PricingServices.
     * @param {PricingServicesDeleteManyArgs} args - Arguments to filter PricingServices to delete.
     * @example
     * // Delete a few PricingServices
     * const { count } = await prisma.pricingServices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PricingServicesDeleteManyArgs>(args?: SelectSubset<T, PricingServicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PricingServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingServicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PricingServices
     * const pricingServices = await prisma.pricingServices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PricingServicesUpdateManyArgs>(args: SelectSubset<T, PricingServicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PricingServices and returns the data updated in the database.
     * @param {PricingServicesUpdateManyAndReturnArgs} args - Arguments to update many PricingServices.
     * @example
     * // Update many PricingServices
     * const pricingServices = await prisma.pricingServices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PricingServices and only return the `id`
     * const pricingServicesWithIdOnly = await prisma.pricingServices.updateManyAndReturn({
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
    updateManyAndReturn<T extends PricingServicesUpdateManyAndReturnArgs>(args: SelectSubset<T, PricingServicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingServicesPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PricingServices.
     * @param {PricingServicesUpsertArgs} args - Arguments to update or create a PricingServices.
     * @example
     * // Update or create a PricingServices
     * const pricingServices = await prisma.pricingServices.upsert({
     *   create: {
     *     // ... data to create a PricingServices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PricingServices we want to update
     *   }
     * })
     */
    upsert<T extends PricingServicesUpsertArgs>(args: SelectSubset<T, PricingServicesUpsertArgs<ExtArgs>>): Prisma__PricingServicesClient<$Result.GetResult<Prisma.$PricingServicesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PricingServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingServicesCountArgs} args - Arguments to filter PricingServices to count.
     * @example
     * // Count the number of PricingServices
     * const count = await prisma.pricingServices.count({
     *   where: {
     *     // ... the filter for the PricingServices we want to count
     *   }
     * })
    **/
    count<T extends PricingServicesCountArgs>(
      args?: Subset<T, PricingServicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PricingServicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PricingServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingServicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PricingServicesAggregateArgs>(args: Subset<T, PricingServicesAggregateArgs>): Prisma.PrismaPromise<GetPricingServicesAggregateType<T>>

    /**
     * Group by PricingServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingServicesGroupByArgs} args - Group by arguments.
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
      T extends PricingServicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PricingServicesGroupByArgs['orderBy'] }
        : { orderBy?: PricingServicesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PricingServicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPricingServicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PricingServices model
   */
  readonly fields: PricingServicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PricingServices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PricingServicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clinic<T extends ClinicsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClinicsDefaultArgs<ExtArgs>>): Prisma__ClinicsClient<$Result.GetResult<Prisma.$ClinicsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the PricingServices model
   */ 
  interface PricingServicesFieldRefs {
    readonly id: FieldRef<"PricingServices", 'Int'>
    readonly clinicId: FieldRef<"PricingServices", 'Int'>
    readonly service_name: FieldRef<"PricingServices", 'String'>
    readonly price: FieldRef<"PricingServices", 'Float'>
    readonly createdAt: FieldRef<"PricingServices", 'DateTime'>
    readonly updatedAt: FieldRef<"PricingServices", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PricingServices findUnique
   */
  export type PricingServicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingServices
     */
    select?: PricingServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingServices
     */
    omit?: PricingServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingServicesInclude<ExtArgs> | null
    /**
     * Filter, which PricingServices to fetch.
     */
    where: PricingServicesWhereUniqueInput
  }

  /**
   * PricingServices findUniqueOrThrow
   */
  export type PricingServicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingServices
     */
    select?: PricingServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingServices
     */
    omit?: PricingServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingServicesInclude<ExtArgs> | null
    /**
     * Filter, which PricingServices to fetch.
     */
    where: PricingServicesWhereUniqueInput
  }

  /**
   * PricingServices findFirst
   */
  export type PricingServicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingServices
     */
    select?: PricingServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingServices
     */
    omit?: PricingServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingServicesInclude<ExtArgs> | null
    /**
     * Filter, which PricingServices to fetch.
     */
    where?: PricingServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingServices to fetch.
     */
    orderBy?: PricingServicesOrderByWithRelationInput | PricingServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingServices.
     */
    cursor?: PricingServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingServices.
     */
    distinct?: PricingServicesScalarFieldEnum | PricingServicesScalarFieldEnum[]
  }

  /**
   * PricingServices findFirstOrThrow
   */
  export type PricingServicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingServices
     */
    select?: PricingServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingServices
     */
    omit?: PricingServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingServicesInclude<ExtArgs> | null
    /**
     * Filter, which PricingServices to fetch.
     */
    where?: PricingServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingServices to fetch.
     */
    orderBy?: PricingServicesOrderByWithRelationInput | PricingServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingServices.
     */
    cursor?: PricingServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingServices.
     */
    distinct?: PricingServicesScalarFieldEnum | PricingServicesScalarFieldEnum[]
  }

  /**
   * PricingServices findMany
   */
  export type PricingServicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingServices
     */
    select?: PricingServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingServices
     */
    omit?: PricingServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingServicesInclude<ExtArgs> | null
    /**
     * Filter, which PricingServices to fetch.
     */
    where?: PricingServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingServices to fetch.
     */
    orderBy?: PricingServicesOrderByWithRelationInput | PricingServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PricingServices.
     */
    cursor?: PricingServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingServices.
     */
    skip?: number
    distinct?: PricingServicesScalarFieldEnum | PricingServicesScalarFieldEnum[]
  }

  /**
   * PricingServices create
   */
  export type PricingServicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingServices
     */
    select?: PricingServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingServices
     */
    omit?: PricingServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingServicesInclude<ExtArgs> | null
    /**
     * The data needed to create a PricingServices.
     */
    data: XOR<PricingServicesCreateInput, PricingServicesUncheckedCreateInput>
  }

  /**
   * PricingServices createMany
   */
  export type PricingServicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PricingServices.
     */
    data: PricingServicesCreateManyInput | PricingServicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PricingServices createManyAndReturn
   */
  export type PricingServicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingServices
     */
    select?: PricingServicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PricingServices
     */
    omit?: PricingServicesOmit<ExtArgs> | null
    /**
     * The data used to create many PricingServices.
     */
    data: PricingServicesCreateManyInput | PricingServicesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingServicesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PricingServices update
   */
  export type PricingServicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingServices
     */
    select?: PricingServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingServices
     */
    omit?: PricingServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingServicesInclude<ExtArgs> | null
    /**
     * The data needed to update a PricingServices.
     */
    data: XOR<PricingServicesUpdateInput, PricingServicesUncheckedUpdateInput>
    /**
     * Choose, which PricingServices to update.
     */
    where: PricingServicesWhereUniqueInput
  }

  /**
   * PricingServices updateMany
   */
  export type PricingServicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PricingServices.
     */
    data: XOR<PricingServicesUpdateManyMutationInput, PricingServicesUncheckedUpdateManyInput>
    /**
     * Filter which PricingServices to update
     */
    where?: PricingServicesWhereInput
    /**
     * Limit how many PricingServices to update.
     */
    limit?: number
  }

  /**
   * PricingServices updateManyAndReturn
   */
  export type PricingServicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingServices
     */
    select?: PricingServicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PricingServices
     */
    omit?: PricingServicesOmit<ExtArgs> | null
    /**
     * The data used to update PricingServices.
     */
    data: XOR<PricingServicesUpdateManyMutationInput, PricingServicesUncheckedUpdateManyInput>
    /**
     * Filter which PricingServices to update
     */
    where?: PricingServicesWhereInput
    /**
     * Limit how many PricingServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingServicesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PricingServices upsert
   */
  export type PricingServicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingServices
     */
    select?: PricingServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingServices
     */
    omit?: PricingServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingServicesInclude<ExtArgs> | null
    /**
     * The filter to search for the PricingServices to update in case it exists.
     */
    where: PricingServicesWhereUniqueInput
    /**
     * In case the PricingServices found by the `where` argument doesn't exist, create a new PricingServices with this data.
     */
    create: XOR<PricingServicesCreateInput, PricingServicesUncheckedCreateInput>
    /**
     * In case the PricingServices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PricingServicesUpdateInput, PricingServicesUncheckedUpdateInput>
  }

  /**
   * PricingServices delete
   */
  export type PricingServicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingServices
     */
    select?: PricingServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingServices
     */
    omit?: PricingServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingServicesInclude<ExtArgs> | null
    /**
     * Filter which PricingServices to delete.
     */
    where: PricingServicesWhereUniqueInput
  }

  /**
   * PricingServices deleteMany
   */
  export type PricingServicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingServices to delete
     */
    where?: PricingServicesWhereInput
    /**
     * Limit how many PricingServices to delete.
     */
    limit?: number
  }

  /**
   * PricingServices without action
   */
  export type PricingServicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingServices
     */
    select?: PricingServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingServices
     */
    omit?: PricingServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingServicesInclude<ExtArgs> | null
  }


  /**
   * Model NonPricingServices
   */

  export type AggregateNonPricingServices = {
    _count: NonPricingServicesCountAggregateOutputType | null
    _avg: NonPricingServicesAvgAggregateOutputType | null
    _sum: NonPricingServicesSumAggregateOutputType | null
    _min: NonPricingServicesMinAggregateOutputType | null
    _max: NonPricingServicesMaxAggregateOutputType | null
  }

  export type NonPricingServicesAvgAggregateOutputType = {
    id: number | null
    clinicId: number | null
  }

  export type NonPricingServicesSumAggregateOutputType = {
    id: number | null
    clinicId: number | null
  }

  export type NonPricingServicesMinAggregateOutputType = {
    id: number | null
    clinicId: number | null
    service_name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NonPricingServicesMaxAggregateOutputType = {
    id: number | null
    clinicId: number | null
    service_name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NonPricingServicesCountAggregateOutputType = {
    id: number
    clinicId: number
    service_name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NonPricingServicesAvgAggregateInputType = {
    id?: true
    clinicId?: true
  }

  export type NonPricingServicesSumAggregateInputType = {
    id?: true
    clinicId?: true
  }

  export type NonPricingServicesMinAggregateInputType = {
    id?: true
    clinicId?: true
    service_name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NonPricingServicesMaxAggregateInputType = {
    id?: true
    clinicId?: true
    service_name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NonPricingServicesCountAggregateInputType = {
    id?: true
    clinicId?: true
    service_name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NonPricingServicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NonPricingServices to aggregate.
     */
    where?: NonPricingServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NonPricingServices to fetch.
     */
    orderBy?: NonPricingServicesOrderByWithRelationInput | NonPricingServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NonPricingServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NonPricingServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NonPricingServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NonPricingServices
    **/
    _count?: true | NonPricingServicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NonPricingServicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NonPricingServicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NonPricingServicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NonPricingServicesMaxAggregateInputType
  }

  export type GetNonPricingServicesAggregateType<T extends NonPricingServicesAggregateArgs> = {
        [P in keyof T & keyof AggregateNonPricingServices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNonPricingServices[P]>
      : GetScalarType<T[P], AggregateNonPricingServices[P]>
  }




  export type NonPricingServicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NonPricingServicesWhereInput
    orderBy?: NonPricingServicesOrderByWithAggregationInput | NonPricingServicesOrderByWithAggregationInput[]
    by: NonPricingServicesScalarFieldEnum[] | NonPricingServicesScalarFieldEnum
    having?: NonPricingServicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NonPricingServicesCountAggregateInputType | true
    _avg?: NonPricingServicesAvgAggregateInputType
    _sum?: NonPricingServicesSumAggregateInputType
    _min?: NonPricingServicesMinAggregateInputType
    _max?: NonPricingServicesMaxAggregateInputType
  }

  export type NonPricingServicesGroupByOutputType = {
    id: number
    clinicId: number
    service_name: string
    createdAt: Date
    updatedAt: Date
    _count: NonPricingServicesCountAggregateOutputType | null
    _avg: NonPricingServicesAvgAggregateOutputType | null
    _sum: NonPricingServicesSumAggregateOutputType | null
    _min: NonPricingServicesMinAggregateOutputType | null
    _max: NonPricingServicesMaxAggregateOutputType | null
  }

  type GetNonPricingServicesGroupByPayload<T extends NonPricingServicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NonPricingServicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NonPricingServicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NonPricingServicesGroupByOutputType[P]>
            : GetScalarType<T[P], NonPricingServicesGroupByOutputType[P]>
        }
      >
    >


  export type NonPricingServicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicId?: boolean
    service_name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nonPricingServices"]>

  export type NonPricingServicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicId?: boolean
    service_name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nonPricingServices"]>

  export type NonPricingServicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicId?: boolean
    service_name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nonPricingServices"]>

  export type NonPricingServicesSelectScalar = {
    id?: boolean
    clinicId?: boolean
    service_name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NonPricingServicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clinicId" | "service_name" | "createdAt" | "updatedAt", ExtArgs["result"]["nonPricingServices"]>
  export type NonPricingServicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }
  export type NonPricingServicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }
  export type NonPricingServicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicsDefaultArgs<ExtArgs>
  }

  export type $NonPricingServicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NonPricingServices"
    objects: {
      clinic: Prisma.$ClinicsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clinicId: number
      service_name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["nonPricingServices"]>
    composites: {}
  }

  type NonPricingServicesGetPayload<S extends boolean | null | undefined | NonPricingServicesDefaultArgs> = $Result.GetResult<Prisma.$NonPricingServicesPayload, S>

  type NonPricingServicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NonPricingServicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NonPricingServicesCountAggregateInputType | true
    }

  export interface NonPricingServicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NonPricingServices'], meta: { name: 'NonPricingServices' } }
    /**
     * Find zero or one NonPricingServices that matches the filter.
     * @param {NonPricingServicesFindUniqueArgs} args - Arguments to find a NonPricingServices
     * @example
     * // Get one NonPricingServices
     * const nonPricingServices = await prisma.nonPricingServices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NonPricingServicesFindUniqueArgs>(args: SelectSubset<T, NonPricingServicesFindUniqueArgs<ExtArgs>>): Prisma__NonPricingServicesClient<$Result.GetResult<Prisma.$NonPricingServicesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one NonPricingServices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NonPricingServicesFindUniqueOrThrowArgs} args - Arguments to find a NonPricingServices
     * @example
     * // Get one NonPricingServices
     * const nonPricingServices = await prisma.nonPricingServices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NonPricingServicesFindUniqueOrThrowArgs>(args: SelectSubset<T, NonPricingServicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NonPricingServicesClient<$Result.GetResult<Prisma.$NonPricingServicesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first NonPricingServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonPricingServicesFindFirstArgs} args - Arguments to find a NonPricingServices
     * @example
     * // Get one NonPricingServices
     * const nonPricingServices = await prisma.nonPricingServices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NonPricingServicesFindFirstArgs>(args?: SelectSubset<T, NonPricingServicesFindFirstArgs<ExtArgs>>): Prisma__NonPricingServicesClient<$Result.GetResult<Prisma.$NonPricingServicesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first NonPricingServices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonPricingServicesFindFirstOrThrowArgs} args - Arguments to find a NonPricingServices
     * @example
     * // Get one NonPricingServices
     * const nonPricingServices = await prisma.nonPricingServices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NonPricingServicesFindFirstOrThrowArgs>(args?: SelectSubset<T, NonPricingServicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__NonPricingServicesClient<$Result.GetResult<Prisma.$NonPricingServicesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more NonPricingServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonPricingServicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NonPricingServices
     * const nonPricingServices = await prisma.nonPricingServices.findMany()
     * 
     * // Get first 10 NonPricingServices
     * const nonPricingServices = await prisma.nonPricingServices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nonPricingServicesWithIdOnly = await prisma.nonPricingServices.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NonPricingServicesFindManyArgs>(args?: SelectSubset<T, NonPricingServicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NonPricingServicesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a NonPricingServices.
     * @param {NonPricingServicesCreateArgs} args - Arguments to create a NonPricingServices.
     * @example
     * // Create one NonPricingServices
     * const NonPricingServices = await prisma.nonPricingServices.create({
     *   data: {
     *     // ... data to create a NonPricingServices
     *   }
     * })
     * 
     */
    create<T extends NonPricingServicesCreateArgs>(args: SelectSubset<T, NonPricingServicesCreateArgs<ExtArgs>>): Prisma__NonPricingServicesClient<$Result.GetResult<Prisma.$NonPricingServicesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many NonPricingServices.
     * @param {NonPricingServicesCreateManyArgs} args - Arguments to create many NonPricingServices.
     * @example
     * // Create many NonPricingServices
     * const nonPricingServices = await prisma.nonPricingServices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NonPricingServicesCreateManyArgs>(args?: SelectSubset<T, NonPricingServicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NonPricingServices and returns the data saved in the database.
     * @param {NonPricingServicesCreateManyAndReturnArgs} args - Arguments to create many NonPricingServices.
     * @example
     * // Create many NonPricingServices
     * const nonPricingServices = await prisma.nonPricingServices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NonPricingServices and only return the `id`
     * const nonPricingServicesWithIdOnly = await prisma.nonPricingServices.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NonPricingServicesCreateManyAndReturnArgs>(args?: SelectSubset<T, NonPricingServicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NonPricingServicesPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a NonPricingServices.
     * @param {NonPricingServicesDeleteArgs} args - Arguments to delete one NonPricingServices.
     * @example
     * // Delete one NonPricingServices
     * const NonPricingServices = await prisma.nonPricingServices.delete({
     *   where: {
     *     // ... filter to delete one NonPricingServices
     *   }
     * })
     * 
     */
    delete<T extends NonPricingServicesDeleteArgs>(args: SelectSubset<T, NonPricingServicesDeleteArgs<ExtArgs>>): Prisma__NonPricingServicesClient<$Result.GetResult<Prisma.$NonPricingServicesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one NonPricingServices.
     * @param {NonPricingServicesUpdateArgs} args - Arguments to update one NonPricingServices.
     * @example
     * // Update one NonPricingServices
     * const nonPricingServices = await prisma.nonPricingServices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NonPricingServicesUpdateArgs>(args: SelectSubset<T, NonPricingServicesUpdateArgs<ExtArgs>>): Prisma__NonPricingServicesClient<$Result.GetResult<Prisma.$NonPricingServicesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more NonPricingServices.
     * @param {NonPricingServicesDeleteManyArgs} args - Arguments to filter NonPricingServices to delete.
     * @example
     * // Delete a few NonPricingServices
     * const { count } = await prisma.nonPricingServices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NonPricingServicesDeleteManyArgs>(args?: SelectSubset<T, NonPricingServicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NonPricingServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonPricingServicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NonPricingServices
     * const nonPricingServices = await prisma.nonPricingServices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NonPricingServicesUpdateManyArgs>(args: SelectSubset<T, NonPricingServicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NonPricingServices and returns the data updated in the database.
     * @param {NonPricingServicesUpdateManyAndReturnArgs} args - Arguments to update many NonPricingServices.
     * @example
     * // Update many NonPricingServices
     * const nonPricingServices = await prisma.nonPricingServices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NonPricingServices and only return the `id`
     * const nonPricingServicesWithIdOnly = await prisma.nonPricingServices.updateManyAndReturn({
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
    updateManyAndReturn<T extends NonPricingServicesUpdateManyAndReturnArgs>(args: SelectSubset<T, NonPricingServicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NonPricingServicesPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one NonPricingServices.
     * @param {NonPricingServicesUpsertArgs} args - Arguments to update or create a NonPricingServices.
     * @example
     * // Update or create a NonPricingServices
     * const nonPricingServices = await prisma.nonPricingServices.upsert({
     *   create: {
     *     // ... data to create a NonPricingServices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NonPricingServices we want to update
     *   }
     * })
     */
    upsert<T extends NonPricingServicesUpsertArgs>(args: SelectSubset<T, NonPricingServicesUpsertArgs<ExtArgs>>): Prisma__NonPricingServicesClient<$Result.GetResult<Prisma.$NonPricingServicesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of NonPricingServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonPricingServicesCountArgs} args - Arguments to filter NonPricingServices to count.
     * @example
     * // Count the number of NonPricingServices
     * const count = await prisma.nonPricingServices.count({
     *   where: {
     *     // ... the filter for the NonPricingServices we want to count
     *   }
     * })
    **/
    count<T extends NonPricingServicesCountArgs>(
      args?: Subset<T, NonPricingServicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NonPricingServicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NonPricingServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonPricingServicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NonPricingServicesAggregateArgs>(args: Subset<T, NonPricingServicesAggregateArgs>): Prisma.PrismaPromise<GetNonPricingServicesAggregateType<T>>

    /**
     * Group by NonPricingServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonPricingServicesGroupByArgs} args - Group by arguments.
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
      T extends NonPricingServicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NonPricingServicesGroupByArgs['orderBy'] }
        : { orderBy?: NonPricingServicesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NonPricingServicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNonPricingServicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NonPricingServices model
   */
  readonly fields: NonPricingServicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NonPricingServices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NonPricingServicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clinic<T extends ClinicsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClinicsDefaultArgs<ExtArgs>>): Prisma__ClinicsClient<$Result.GetResult<Prisma.$ClinicsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the NonPricingServices model
   */ 
  interface NonPricingServicesFieldRefs {
    readonly id: FieldRef<"NonPricingServices", 'Int'>
    readonly clinicId: FieldRef<"NonPricingServices", 'Int'>
    readonly service_name: FieldRef<"NonPricingServices", 'String'>
    readonly createdAt: FieldRef<"NonPricingServices", 'DateTime'>
    readonly updatedAt: FieldRef<"NonPricingServices", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NonPricingServices findUnique
   */
  export type NonPricingServicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonPricingServices
     */
    select?: NonPricingServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NonPricingServices
     */
    omit?: NonPricingServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NonPricingServicesInclude<ExtArgs> | null
    /**
     * Filter, which NonPricingServices to fetch.
     */
    where: NonPricingServicesWhereUniqueInput
  }

  /**
   * NonPricingServices findUniqueOrThrow
   */
  export type NonPricingServicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonPricingServices
     */
    select?: NonPricingServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NonPricingServices
     */
    omit?: NonPricingServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NonPricingServicesInclude<ExtArgs> | null
    /**
     * Filter, which NonPricingServices to fetch.
     */
    where: NonPricingServicesWhereUniqueInput
  }

  /**
   * NonPricingServices findFirst
   */
  export type NonPricingServicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonPricingServices
     */
    select?: NonPricingServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NonPricingServices
     */
    omit?: NonPricingServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NonPricingServicesInclude<ExtArgs> | null
    /**
     * Filter, which NonPricingServices to fetch.
     */
    where?: NonPricingServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NonPricingServices to fetch.
     */
    orderBy?: NonPricingServicesOrderByWithRelationInput | NonPricingServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NonPricingServices.
     */
    cursor?: NonPricingServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NonPricingServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NonPricingServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NonPricingServices.
     */
    distinct?: NonPricingServicesScalarFieldEnum | NonPricingServicesScalarFieldEnum[]
  }

  /**
   * NonPricingServices findFirstOrThrow
   */
  export type NonPricingServicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonPricingServices
     */
    select?: NonPricingServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NonPricingServices
     */
    omit?: NonPricingServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NonPricingServicesInclude<ExtArgs> | null
    /**
     * Filter, which NonPricingServices to fetch.
     */
    where?: NonPricingServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NonPricingServices to fetch.
     */
    orderBy?: NonPricingServicesOrderByWithRelationInput | NonPricingServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NonPricingServices.
     */
    cursor?: NonPricingServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NonPricingServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NonPricingServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NonPricingServices.
     */
    distinct?: NonPricingServicesScalarFieldEnum | NonPricingServicesScalarFieldEnum[]
  }

  /**
   * NonPricingServices findMany
   */
  export type NonPricingServicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonPricingServices
     */
    select?: NonPricingServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NonPricingServices
     */
    omit?: NonPricingServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NonPricingServicesInclude<ExtArgs> | null
    /**
     * Filter, which NonPricingServices to fetch.
     */
    where?: NonPricingServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NonPricingServices to fetch.
     */
    orderBy?: NonPricingServicesOrderByWithRelationInput | NonPricingServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NonPricingServices.
     */
    cursor?: NonPricingServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NonPricingServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NonPricingServices.
     */
    skip?: number
    distinct?: NonPricingServicesScalarFieldEnum | NonPricingServicesScalarFieldEnum[]
  }

  /**
   * NonPricingServices create
   */
  export type NonPricingServicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonPricingServices
     */
    select?: NonPricingServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NonPricingServices
     */
    omit?: NonPricingServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NonPricingServicesInclude<ExtArgs> | null
    /**
     * The data needed to create a NonPricingServices.
     */
    data: XOR<NonPricingServicesCreateInput, NonPricingServicesUncheckedCreateInput>
  }

  /**
   * NonPricingServices createMany
   */
  export type NonPricingServicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NonPricingServices.
     */
    data: NonPricingServicesCreateManyInput | NonPricingServicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NonPricingServices createManyAndReturn
   */
  export type NonPricingServicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonPricingServices
     */
    select?: NonPricingServicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NonPricingServices
     */
    omit?: NonPricingServicesOmit<ExtArgs> | null
    /**
     * The data used to create many NonPricingServices.
     */
    data: NonPricingServicesCreateManyInput | NonPricingServicesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NonPricingServicesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NonPricingServices update
   */
  export type NonPricingServicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonPricingServices
     */
    select?: NonPricingServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NonPricingServices
     */
    omit?: NonPricingServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NonPricingServicesInclude<ExtArgs> | null
    /**
     * The data needed to update a NonPricingServices.
     */
    data: XOR<NonPricingServicesUpdateInput, NonPricingServicesUncheckedUpdateInput>
    /**
     * Choose, which NonPricingServices to update.
     */
    where: NonPricingServicesWhereUniqueInput
  }

  /**
   * NonPricingServices updateMany
   */
  export type NonPricingServicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NonPricingServices.
     */
    data: XOR<NonPricingServicesUpdateManyMutationInput, NonPricingServicesUncheckedUpdateManyInput>
    /**
     * Filter which NonPricingServices to update
     */
    where?: NonPricingServicesWhereInput
    /**
     * Limit how many NonPricingServices to update.
     */
    limit?: number
  }

  /**
   * NonPricingServices updateManyAndReturn
   */
  export type NonPricingServicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonPricingServices
     */
    select?: NonPricingServicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NonPricingServices
     */
    omit?: NonPricingServicesOmit<ExtArgs> | null
    /**
     * The data used to update NonPricingServices.
     */
    data: XOR<NonPricingServicesUpdateManyMutationInput, NonPricingServicesUncheckedUpdateManyInput>
    /**
     * Filter which NonPricingServices to update
     */
    where?: NonPricingServicesWhereInput
    /**
     * Limit how many NonPricingServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NonPricingServicesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NonPricingServices upsert
   */
  export type NonPricingServicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonPricingServices
     */
    select?: NonPricingServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NonPricingServices
     */
    omit?: NonPricingServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NonPricingServicesInclude<ExtArgs> | null
    /**
     * The filter to search for the NonPricingServices to update in case it exists.
     */
    where: NonPricingServicesWhereUniqueInput
    /**
     * In case the NonPricingServices found by the `where` argument doesn't exist, create a new NonPricingServices with this data.
     */
    create: XOR<NonPricingServicesCreateInput, NonPricingServicesUncheckedCreateInput>
    /**
     * In case the NonPricingServices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NonPricingServicesUpdateInput, NonPricingServicesUncheckedUpdateInput>
  }

  /**
   * NonPricingServices delete
   */
  export type NonPricingServicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonPricingServices
     */
    select?: NonPricingServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NonPricingServices
     */
    omit?: NonPricingServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NonPricingServicesInclude<ExtArgs> | null
    /**
     * Filter which NonPricingServices to delete.
     */
    where: NonPricingServicesWhereUniqueInput
  }

  /**
   * NonPricingServices deleteMany
   */
  export type NonPricingServicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NonPricingServices to delete
     */
    where?: NonPricingServicesWhereInput
    /**
     * Limit how many NonPricingServices to delete.
     */
    limit?: number
  }

  /**
   * NonPricingServices without action
   */
  export type NonPricingServicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonPricingServices
     */
    select?: NonPricingServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NonPricingServices
     */
    omit?: NonPricingServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NonPricingServicesInclude<ExtArgs> | null
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
    clinicId: 'clinicId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImagesScalarFieldEnum = (typeof ImagesScalarFieldEnum)[keyof typeof ImagesScalarFieldEnum]


  export const AvailabilitiesScalarFieldEnum: {
    id: 'id',
    clinicId: 'clinicId',
    start_date: 'start_date',
    end_date: 'end_date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AvailabilitiesScalarFieldEnum = (typeof AvailabilitiesScalarFieldEnum)[keyof typeof AvailabilitiesScalarFieldEnum]


  export const ServicesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServicesScalarFieldEnum = (typeof ServicesScalarFieldEnum)[keyof typeof ServicesScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    id: 'id',
    comment: 'comment',
    userId: 'userId',
    clinicId: 'clinicId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const ClinicsScalarFieldEnum: {
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
    reviewsCount: 'reviewsCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClinicsScalarFieldEnum = (typeof ClinicsScalarFieldEnum)[keyof typeof ClinicsScalarFieldEnum]


  export const PricingServicesScalarFieldEnum: {
    id: 'id',
    clinicId: 'clinicId',
    service_name: 'service_name',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PricingServicesScalarFieldEnum = (typeof PricingServicesScalarFieldEnum)[keyof typeof PricingServicesScalarFieldEnum]


  export const NonPricingServicesScalarFieldEnum: {
    id: 'id',
    clinicId: 'clinicId',
    service_name: 'service_name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NonPricingServicesScalarFieldEnum = (typeof NonPricingServicesScalarFieldEnum)[keyof typeof NonPricingServicesScalarFieldEnum]


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
   * Deep Input Types
   */


  export type ImagesWhereInput = {
    AND?: ImagesWhereInput | ImagesWhereInput[]
    OR?: ImagesWhereInput[]
    NOT?: ImagesWhereInput | ImagesWhereInput[]
    id?: IntFilter<"Images"> | number
    url?: StringFilter<"Images"> | string
    clinicId?: IntFilter<"Images"> | number
    createdAt?: DateTimeFilter<"Images"> | Date | string
    updatedAt?: DateTimeFilter<"Images"> | Date | string
    clinic?: XOR<ClinicsScalarRelationFilter, ClinicsWhereInput>
  }

  export type ImagesOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    clinicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clinic?: ClinicsOrderByWithRelationInput
  }

  export type ImagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImagesWhereInput | ImagesWhereInput[]
    OR?: ImagesWhereInput[]
    NOT?: ImagesWhereInput | ImagesWhereInput[]
    url?: StringFilter<"Images"> | string
    clinicId?: IntFilter<"Images"> | number
    createdAt?: DateTimeFilter<"Images"> | Date | string
    updatedAt?: DateTimeFilter<"Images"> | Date | string
    clinic?: XOR<ClinicsScalarRelationFilter, ClinicsWhereInput>
  }, "id">

  export type ImagesOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    clinicId?: SortOrder
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
    clinicId?: IntWithAggregatesFilter<"Images"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Images"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Images"> | Date | string
  }

  export type availabilitiesWhereInput = {
    AND?: availabilitiesWhereInput | availabilitiesWhereInput[]
    OR?: availabilitiesWhereInput[]
    NOT?: availabilitiesWhereInput | availabilitiesWhereInput[]
    id?: IntFilter<"availabilities"> | number
    clinicId?: IntFilter<"availabilities"> | number
    start_date?: StringFilter<"availabilities"> | string
    end_date?: StringFilter<"availabilities"> | string
    createdAt?: DateTimeFilter<"availabilities"> | Date | string
    updatedAt?: DateTimeFilter<"availabilities"> | Date | string
    clinic?: XOR<ClinicsScalarRelationFilter, ClinicsWhereInput>
  }

  export type availabilitiesOrderByWithRelationInput = {
    id?: SortOrder
    clinicId?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clinic?: ClinicsOrderByWithRelationInput
  }

  export type availabilitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: availabilitiesWhereInput | availabilitiesWhereInput[]
    OR?: availabilitiesWhereInput[]
    NOT?: availabilitiesWhereInput | availabilitiesWhereInput[]
    clinicId?: IntFilter<"availabilities"> | number
    start_date?: StringFilter<"availabilities"> | string
    end_date?: StringFilter<"availabilities"> | string
    createdAt?: DateTimeFilter<"availabilities"> | Date | string
    updatedAt?: DateTimeFilter<"availabilities"> | Date | string
    clinic?: XOR<ClinicsScalarRelationFilter, ClinicsWhereInput>
  }, "id">

  export type availabilitiesOrderByWithAggregationInput = {
    id?: SortOrder
    clinicId?: SortOrder
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
    clinicId?: IntWithAggregatesFilter<"availabilities"> | number
    start_date?: StringWithAggregatesFilter<"availabilities"> | string
    end_date?: StringWithAggregatesFilter<"availabilities"> | string
    createdAt?: DateTimeWithAggregatesFilter<"availabilities"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"availabilities"> | Date | string
  }

  export type ServicesWhereInput = {
    AND?: ServicesWhereInput | ServicesWhereInput[]
    OR?: ServicesWhereInput[]
    NOT?: ServicesWhereInput | ServicesWhereInput[]
    id?: IntFilter<"Services"> | number
    name?: StringFilter<"Services"> | string
    createdAt?: DateTimeFilter<"Services"> | Date | string
    updatedAt?: DateTimeFilter<"Services"> | Date | string
  }

  export type ServicesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServicesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServicesWhereInput | ServicesWhereInput[]
    OR?: ServicesWhereInput[]
    NOT?: ServicesWhereInput | ServicesWhereInput[]
    name?: StringFilter<"Services"> | string
    createdAt?: DateTimeFilter<"Services"> | Date | string
    updatedAt?: DateTimeFilter<"Services"> | Date | string
  }, "id">

  export type ServicesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
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
    name?: StringWithAggregatesFilter<"Services"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Services"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Services"> | Date | string
  }

  export type ReviewsWhereInput = {
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    id?: IntFilter<"Reviews"> | number
    comment?: StringFilter<"Reviews"> | string
    userId?: IntFilter<"Reviews"> | number
    clinicId?: IntFilter<"Reviews"> | number
    createdAt?: DateTimeFilter<"Reviews"> | Date | string
    updatedAt?: DateTimeFilter<"Reviews"> | Date | string
    clinic?: XOR<ClinicsScalarRelationFilter, ClinicsWhereInput>
  }

  export type ReviewsOrderByWithRelationInput = {
    id?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    clinicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clinic?: ClinicsOrderByWithRelationInput
  }

  export type ReviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    comment?: StringFilter<"Reviews"> | string
    userId?: IntFilter<"Reviews"> | number
    clinicId?: IntFilter<"Reviews"> | number
    createdAt?: DateTimeFilter<"Reviews"> | Date | string
    updatedAt?: DateTimeFilter<"Reviews"> | Date | string
    clinic?: XOR<ClinicsScalarRelationFilter, ClinicsWhereInput>
  }, "id">

  export type ReviewsOrderByWithAggregationInput = {
    id?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    clinicId?: SortOrder
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
    clinicId?: IntWithAggregatesFilter<"Reviews"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Reviews"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reviews"> | Date | string
  }

  export type ClinicsWhereInput = {
    AND?: ClinicsWhereInput | ClinicsWhereInput[]
    OR?: ClinicsWhereInput[]
    NOT?: ClinicsWhereInput | ClinicsWhereInput[]
    id?: IntFilter<"Clinics"> | number
    title?: StringFilter<"Clinics"> | string
    description?: StringFilter<"Clinics"> | string
    address?: StringFilter<"Clinics"> | string
    phone?: StringFilter<"Clinics"> | string
    totalViews?: IntFilter<"Clinics"> | number
    totalRate?: IntFilter<"Clinics"> | number
    numberOfRates?: IntFilter<"Clinics"> | number
    averageRate?: FloatFilter<"Clinics"> | number
    ownerId?: IntFilter<"Clinics"> | number
    year?: IntFilter<"Clinics"> | number
    validated?: BoolFilter<"Clinics"> | boolean
    blocked?: BoolFilter<"Clinics"> | boolean
    rates?: JsonFilter<"Clinics">
    openTime?: StringFilter<"Clinics"> | string
    closeTime?: StringFilter<"Clinics"> | string
    latitude?: StringFilter<"Clinics"> | string
    longitude?: StringFilter<"Clinics"> | string
    daysOff?: IntNullableListFilter<"Clinics">
    reviewsCount?: IntFilter<"Clinics"> | number
    createdAt?: DateTimeFilter<"Clinics"> | Date | string
    updatedAt?: DateTimeFilter<"Clinics"> | Date | string
    images?: ImagesListRelationFilter
    availabilities?: AvailabilitiesListRelationFilter
    Reviews?: ReviewsListRelationFilter
    PricingServices?: PricingServicesListRelationFilter
    nonPricingServices?: NonPricingServicesListRelationFilter
  }

  export type ClinicsOrderByWithRelationInput = {
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
    reviewsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: ImagesOrderByRelationAggregateInput
    availabilities?: availabilitiesOrderByRelationAggregateInput
    Reviews?: ReviewsOrderByRelationAggregateInput
    PricingServices?: PricingServicesOrderByRelationAggregateInput
    nonPricingServices?: NonPricingServicesOrderByRelationAggregateInput
  }

  export type ClinicsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClinicsWhereInput | ClinicsWhereInput[]
    OR?: ClinicsWhereInput[]
    NOT?: ClinicsWhereInput | ClinicsWhereInput[]
    title?: StringFilter<"Clinics"> | string
    description?: StringFilter<"Clinics"> | string
    address?: StringFilter<"Clinics"> | string
    phone?: StringFilter<"Clinics"> | string
    totalViews?: IntFilter<"Clinics"> | number
    totalRate?: IntFilter<"Clinics"> | number
    numberOfRates?: IntFilter<"Clinics"> | number
    averageRate?: FloatFilter<"Clinics"> | number
    ownerId?: IntFilter<"Clinics"> | number
    year?: IntFilter<"Clinics"> | number
    validated?: BoolFilter<"Clinics"> | boolean
    blocked?: BoolFilter<"Clinics"> | boolean
    rates?: JsonFilter<"Clinics">
    openTime?: StringFilter<"Clinics"> | string
    closeTime?: StringFilter<"Clinics"> | string
    latitude?: StringFilter<"Clinics"> | string
    longitude?: StringFilter<"Clinics"> | string
    daysOff?: IntNullableListFilter<"Clinics">
    reviewsCount?: IntFilter<"Clinics"> | number
    createdAt?: DateTimeFilter<"Clinics"> | Date | string
    updatedAt?: DateTimeFilter<"Clinics"> | Date | string
    images?: ImagesListRelationFilter
    availabilities?: AvailabilitiesListRelationFilter
    Reviews?: ReviewsListRelationFilter
    PricingServices?: PricingServicesListRelationFilter
    nonPricingServices?: NonPricingServicesListRelationFilter
  }, "id">

  export type ClinicsOrderByWithAggregationInput = {
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
    reviewsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClinicsCountOrderByAggregateInput
    _avg?: ClinicsAvgOrderByAggregateInput
    _max?: ClinicsMaxOrderByAggregateInput
    _min?: ClinicsMinOrderByAggregateInput
    _sum?: ClinicsSumOrderByAggregateInput
  }

  export type ClinicsScalarWhereWithAggregatesInput = {
    AND?: ClinicsScalarWhereWithAggregatesInput | ClinicsScalarWhereWithAggregatesInput[]
    OR?: ClinicsScalarWhereWithAggregatesInput[]
    NOT?: ClinicsScalarWhereWithAggregatesInput | ClinicsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Clinics"> | number
    title?: StringWithAggregatesFilter<"Clinics"> | string
    description?: StringWithAggregatesFilter<"Clinics"> | string
    address?: StringWithAggregatesFilter<"Clinics"> | string
    phone?: StringWithAggregatesFilter<"Clinics"> | string
    totalViews?: IntWithAggregatesFilter<"Clinics"> | number
    totalRate?: IntWithAggregatesFilter<"Clinics"> | number
    numberOfRates?: IntWithAggregatesFilter<"Clinics"> | number
    averageRate?: FloatWithAggregatesFilter<"Clinics"> | number
    ownerId?: IntWithAggregatesFilter<"Clinics"> | number
    year?: IntWithAggregatesFilter<"Clinics"> | number
    validated?: BoolWithAggregatesFilter<"Clinics"> | boolean
    blocked?: BoolWithAggregatesFilter<"Clinics"> | boolean
    rates?: JsonWithAggregatesFilter<"Clinics">
    openTime?: StringWithAggregatesFilter<"Clinics"> | string
    closeTime?: StringWithAggregatesFilter<"Clinics"> | string
    latitude?: StringWithAggregatesFilter<"Clinics"> | string
    longitude?: StringWithAggregatesFilter<"Clinics"> | string
    daysOff?: IntNullableListFilter<"Clinics">
    reviewsCount?: IntWithAggregatesFilter<"Clinics"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Clinics"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Clinics"> | Date | string
  }

  export type PricingServicesWhereInput = {
    AND?: PricingServicesWhereInput | PricingServicesWhereInput[]
    OR?: PricingServicesWhereInput[]
    NOT?: PricingServicesWhereInput | PricingServicesWhereInput[]
    id?: IntFilter<"PricingServices"> | number
    clinicId?: IntFilter<"PricingServices"> | number
    service_name?: StringFilter<"PricingServices"> | string
    price?: FloatFilter<"PricingServices"> | number
    createdAt?: DateTimeFilter<"PricingServices"> | Date | string
    updatedAt?: DateTimeFilter<"PricingServices"> | Date | string
    clinic?: XOR<ClinicsScalarRelationFilter, ClinicsWhereInput>
  }

  export type PricingServicesOrderByWithRelationInput = {
    id?: SortOrder
    clinicId?: SortOrder
    service_name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clinic?: ClinicsOrderByWithRelationInput
  }

  export type PricingServicesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PricingServicesWhereInput | PricingServicesWhereInput[]
    OR?: PricingServicesWhereInput[]
    NOT?: PricingServicesWhereInput | PricingServicesWhereInput[]
    clinicId?: IntFilter<"PricingServices"> | number
    service_name?: StringFilter<"PricingServices"> | string
    price?: FloatFilter<"PricingServices"> | number
    createdAt?: DateTimeFilter<"PricingServices"> | Date | string
    updatedAt?: DateTimeFilter<"PricingServices"> | Date | string
    clinic?: XOR<ClinicsScalarRelationFilter, ClinicsWhereInput>
  }, "id">

  export type PricingServicesOrderByWithAggregationInput = {
    id?: SortOrder
    clinicId?: SortOrder
    service_name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PricingServicesCountOrderByAggregateInput
    _avg?: PricingServicesAvgOrderByAggregateInput
    _max?: PricingServicesMaxOrderByAggregateInput
    _min?: PricingServicesMinOrderByAggregateInput
    _sum?: PricingServicesSumOrderByAggregateInput
  }

  export type PricingServicesScalarWhereWithAggregatesInput = {
    AND?: PricingServicesScalarWhereWithAggregatesInput | PricingServicesScalarWhereWithAggregatesInput[]
    OR?: PricingServicesScalarWhereWithAggregatesInput[]
    NOT?: PricingServicesScalarWhereWithAggregatesInput | PricingServicesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PricingServices"> | number
    clinicId?: IntWithAggregatesFilter<"PricingServices"> | number
    service_name?: StringWithAggregatesFilter<"PricingServices"> | string
    price?: FloatWithAggregatesFilter<"PricingServices"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PricingServices"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PricingServices"> | Date | string
  }

  export type NonPricingServicesWhereInput = {
    AND?: NonPricingServicesWhereInput | NonPricingServicesWhereInput[]
    OR?: NonPricingServicesWhereInput[]
    NOT?: NonPricingServicesWhereInput | NonPricingServicesWhereInput[]
    id?: IntFilter<"NonPricingServices"> | number
    clinicId?: IntFilter<"NonPricingServices"> | number
    service_name?: StringFilter<"NonPricingServices"> | string
    createdAt?: DateTimeFilter<"NonPricingServices"> | Date | string
    updatedAt?: DateTimeFilter<"NonPricingServices"> | Date | string
    clinic?: XOR<ClinicsScalarRelationFilter, ClinicsWhereInput>
  }

  export type NonPricingServicesOrderByWithRelationInput = {
    id?: SortOrder
    clinicId?: SortOrder
    service_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clinic?: ClinicsOrderByWithRelationInput
  }

  export type NonPricingServicesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NonPricingServicesWhereInput | NonPricingServicesWhereInput[]
    OR?: NonPricingServicesWhereInput[]
    NOT?: NonPricingServicesWhereInput | NonPricingServicesWhereInput[]
    clinicId?: IntFilter<"NonPricingServices"> | number
    service_name?: StringFilter<"NonPricingServices"> | string
    createdAt?: DateTimeFilter<"NonPricingServices"> | Date | string
    updatedAt?: DateTimeFilter<"NonPricingServices"> | Date | string
    clinic?: XOR<ClinicsScalarRelationFilter, ClinicsWhereInput>
  }, "id">

  export type NonPricingServicesOrderByWithAggregationInput = {
    id?: SortOrder
    clinicId?: SortOrder
    service_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NonPricingServicesCountOrderByAggregateInput
    _avg?: NonPricingServicesAvgOrderByAggregateInput
    _max?: NonPricingServicesMaxOrderByAggregateInput
    _min?: NonPricingServicesMinOrderByAggregateInput
    _sum?: NonPricingServicesSumOrderByAggregateInput
  }

  export type NonPricingServicesScalarWhereWithAggregatesInput = {
    AND?: NonPricingServicesScalarWhereWithAggregatesInput | NonPricingServicesScalarWhereWithAggregatesInput[]
    OR?: NonPricingServicesScalarWhereWithAggregatesInput[]
    NOT?: NonPricingServicesScalarWhereWithAggregatesInput | NonPricingServicesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NonPricingServices"> | number
    clinicId?: IntWithAggregatesFilter<"NonPricingServices"> | number
    service_name?: StringWithAggregatesFilter<"NonPricingServices"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NonPricingServices"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NonPricingServices"> | Date | string
  }

  export type ImagesCreateInput = {
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clinic: ClinicsCreateNestedOneWithoutImagesInput
  }

  export type ImagesUncheckedCreateInput = {
    id?: number
    url: string
    clinicId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: ClinicsUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    clinicId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesCreateManyInput = {
    id?: number
    url: string
    clinicId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    clinicId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type availabilitiesCreateInput = {
    start_date: string
    end_date: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clinic: ClinicsCreateNestedOneWithoutAvailabilitiesInput
  }

  export type availabilitiesUncheckedCreateInput = {
    id?: number
    clinicId: number
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
    clinic?: ClinicsUpdateOneRequiredWithoutAvailabilitiesNestedInput
  }

  export type availabilitiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clinicId?: IntFieldUpdateOperationsInput | number
    start_date?: StringFieldUpdateOperationsInput | string
    end_date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type availabilitiesCreateManyInput = {
    id?: number
    clinicId: number
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
    clinicId?: IntFieldUpdateOperationsInput | number
    start_date?: StringFieldUpdateOperationsInput | string
    end_date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicesCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServicesUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServicesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicesCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServicesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsCreateInput = {
    comment: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    clinic: ClinicsCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateInput = {
    id?: number
    comment: string
    userId: number
    clinicId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewsUpdateInput = {
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: ClinicsUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    clinicId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsCreateManyInput = {
    id?: number
    comment: string
    userId: number
    clinicId: number
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
    clinicId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClinicsCreateInput = {
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
    daysOff?: ClinicsCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesCreateNestedManyWithoutClinicInput
    availabilities?: availabilitiesCreateNestedManyWithoutClinicInput
    Reviews?: ReviewsCreateNestedManyWithoutClinicInput
    PricingServices?: PricingServicesCreateNestedManyWithoutClinicInput
    nonPricingServices?: NonPricingServicesCreateNestedManyWithoutClinicInput
  }

  export type ClinicsUncheckedCreateInput = {
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
    daysOff?: ClinicsCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesUncheckedCreateNestedManyWithoutClinicInput
    availabilities?: availabilitiesUncheckedCreateNestedManyWithoutClinicInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutClinicInput
    PricingServices?: PricingServicesUncheckedCreateNestedManyWithoutClinicInput
    nonPricingServices?: NonPricingServicesUncheckedCreateNestedManyWithoutClinicInput
  }

  export type ClinicsUpdateInput = {
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
    daysOff?: ClinicsUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUpdateManyWithoutClinicNestedInput
    availabilities?: availabilitiesUpdateManyWithoutClinicNestedInput
    Reviews?: ReviewsUpdateManyWithoutClinicNestedInput
    PricingServices?: PricingServicesUpdateManyWithoutClinicNestedInput
    nonPricingServices?: NonPricingServicesUpdateManyWithoutClinicNestedInput
  }

  export type ClinicsUncheckedUpdateInput = {
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
    daysOff?: ClinicsUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUncheckedUpdateManyWithoutClinicNestedInput
    availabilities?: availabilitiesUncheckedUpdateManyWithoutClinicNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutClinicNestedInput
    PricingServices?: PricingServicesUncheckedUpdateManyWithoutClinicNestedInput
    nonPricingServices?: NonPricingServicesUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type ClinicsCreateManyInput = {
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
    daysOff?: ClinicsCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClinicsUpdateManyMutationInput = {
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
    daysOff?: ClinicsUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClinicsUncheckedUpdateManyInput = {
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
    daysOff?: ClinicsUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingServicesCreateInput = {
    service_name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    clinic: ClinicsCreateNestedOneWithoutPricingServicesInput
  }

  export type PricingServicesUncheckedCreateInput = {
    id?: number
    clinicId: number
    service_name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingServicesUpdateInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: ClinicsUpdateOneRequiredWithoutPricingServicesNestedInput
  }

  export type PricingServicesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clinicId?: IntFieldUpdateOperationsInput | number
    service_name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingServicesCreateManyInput = {
    id?: number
    clinicId: number
    service_name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingServicesUpdateManyMutationInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingServicesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clinicId?: IntFieldUpdateOperationsInput | number
    service_name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NonPricingServicesCreateInput = {
    service_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clinic: ClinicsCreateNestedOneWithoutNonPricingServicesInput
  }

  export type NonPricingServicesUncheckedCreateInput = {
    id?: number
    clinicId: number
    service_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NonPricingServicesUpdateInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: ClinicsUpdateOneRequiredWithoutNonPricingServicesNestedInput
  }

  export type NonPricingServicesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clinicId?: IntFieldUpdateOperationsInput | number
    service_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NonPricingServicesCreateManyInput = {
    id?: number
    clinicId: number
    service_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NonPricingServicesUpdateManyMutationInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NonPricingServicesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clinicId?: IntFieldUpdateOperationsInput | number
    service_name?: StringFieldUpdateOperationsInput | string
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

  export type ClinicsScalarRelationFilter = {
    is?: ClinicsWhereInput
    isNot?: ClinicsWhereInput
  }

  export type ImagesCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    clinicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImagesAvgOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
  }

  export type ImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    clinicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImagesMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    clinicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImagesSumOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
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
    clinicId?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type availabilitiesAvgOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
  }

  export type availabilitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type availabilitiesMinOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type availabilitiesSumOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
  }

  export type ServicesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServicesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ServicesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServicesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServicesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ReviewsCountOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    clinicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    clinicId?: SortOrder
  }

  export type ReviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    clinicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewsMinOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    clinicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    clinicId?: SortOrder
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

  export type PricingServicesListRelationFilter = {
    every?: PricingServicesWhereInput
    some?: PricingServicesWhereInput
    none?: PricingServicesWhereInput
  }

  export type NonPricingServicesListRelationFilter = {
    every?: NonPricingServicesWhereInput
    some?: NonPricingServicesWhereInput
    none?: NonPricingServicesWhereInput
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

  export type PricingServicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NonPricingServicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClinicsCountOrderByAggregateInput = {
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
    reviewsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClinicsAvgOrderByAggregateInput = {
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

  export type ClinicsMaxOrderByAggregateInput = {
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
    reviewsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClinicsMinOrderByAggregateInput = {
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
    reviewsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClinicsSumOrderByAggregateInput = {
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

  export type PricingServicesCountOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    service_name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingServicesAvgOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    price?: SortOrder
  }

  export type PricingServicesMaxOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    service_name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingServicesMinOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    service_name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingServicesSumOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    price?: SortOrder
  }

  export type NonPricingServicesCountOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    service_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NonPricingServicesAvgOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
  }

  export type NonPricingServicesMaxOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    service_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NonPricingServicesMinOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    service_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NonPricingServicesSumOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
  }

  export type ClinicsCreateNestedOneWithoutImagesInput = {
    create?: XOR<ClinicsCreateWithoutImagesInput, ClinicsUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ClinicsCreateOrConnectWithoutImagesInput
    connect?: ClinicsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClinicsUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ClinicsCreateWithoutImagesInput, ClinicsUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ClinicsCreateOrConnectWithoutImagesInput
    upsert?: ClinicsUpsertWithoutImagesInput
    connect?: ClinicsWhereUniqueInput
    update?: XOR<XOR<ClinicsUpdateToOneWithWhereWithoutImagesInput, ClinicsUpdateWithoutImagesInput>, ClinicsUncheckedUpdateWithoutImagesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClinicsCreateNestedOneWithoutAvailabilitiesInput = {
    create?: XOR<ClinicsCreateWithoutAvailabilitiesInput, ClinicsUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: ClinicsCreateOrConnectWithoutAvailabilitiesInput
    connect?: ClinicsWhereUniqueInput
  }

  export type ClinicsUpdateOneRequiredWithoutAvailabilitiesNestedInput = {
    create?: XOR<ClinicsCreateWithoutAvailabilitiesInput, ClinicsUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: ClinicsCreateOrConnectWithoutAvailabilitiesInput
    upsert?: ClinicsUpsertWithoutAvailabilitiesInput
    connect?: ClinicsWhereUniqueInput
    update?: XOR<XOR<ClinicsUpdateToOneWithWhereWithoutAvailabilitiesInput, ClinicsUpdateWithoutAvailabilitiesInput>, ClinicsUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type ClinicsCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ClinicsCreateWithoutReviewsInput, ClinicsUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ClinicsCreateOrConnectWithoutReviewsInput
    connect?: ClinicsWhereUniqueInput
  }

  export type ClinicsUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ClinicsCreateWithoutReviewsInput, ClinicsUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ClinicsCreateOrConnectWithoutReviewsInput
    upsert?: ClinicsUpsertWithoutReviewsInput
    connect?: ClinicsWhereUniqueInput
    update?: XOR<XOR<ClinicsUpdateToOneWithWhereWithoutReviewsInput, ClinicsUpdateWithoutReviewsInput>, ClinicsUncheckedUpdateWithoutReviewsInput>
  }

  export type ClinicsCreatedaysOffInput = {
    set: number[]
  }

  export type ImagesCreateNestedManyWithoutClinicInput = {
    create?: XOR<ImagesCreateWithoutClinicInput, ImagesUncheckedCreateWithoutClinicInput> | ImagesCreateWithoutClinicInput[] | ImagesUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutClinicInput | ImagesCreateOrConnectWithoutClinicInput[]
    createMany?: ImagesCreateManyClinicInputEnvelope
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
  }

  export type availabilitiesCreateNestedManyWithoutClinicInput = {
    create?: XOR<availabilitiesCreateWithoutClinicInput, availabilitiesUncheckedCreateWithoutClinicInput> | availabilitiesCreateWithoutClinicInput[] | availabilitiesUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: availabilitiesCreateOrConnectWithoutClinicInput | availabilitiesCreateOrConnectWithoutClinicInput[]
    createMany?: availabilitiesCreateManyClinicInputEnvelope
    connect?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutClinicInput = {
    create?: XOR<ReviewsCreateWithoutClinicInput, ReviewsUncheckedCreateWithoutClinicInput> | ReviewsCreateWithoutClinicInput[] | ReviewsUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutClinicInput | ReviewsCreateOrConnectWithoutClinicInput[]
    createMany?: ReviewsCreateManyClinicInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type PricingServicesCreateNestedManyWithoutClinicInput = {
    create?: XOR<PricingServicesCreateWithoutClinicInput, PricingServicesUncheckedCreateWithoutClinicInput> | PricingServicesCreateWithoutClinicInput[] | PricingServicesUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: PricingServicesCreateOrConnectWithoutClinicInput | PricingServicesCreateOrConnectWithoutClinicInput[]
    createMany?: PricingServicesCreateManyClinicInputEnvelope
    connect?: PricingServicesWhereUniqueInput | PricingServicesWhereUniqueInput[]
  }

  export type NonPricingServicesCreateNestedManyWithoutClinicInput = {
    create?: XOR<NonPricingServicesCreateWithoutClinicInput, NonPricingServicesUncheckedCreateWithoutClinicInput> | NonPricingServicesCreateWithoutClinicInput[] | NonPricingServicesUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: NonPricingServicesCreateOrConnectWithoutClinicInput | NonPricingServicesCreateOrConnectWithoutClinicInput[]
    createMany?: NonPricingServicesCreateManyClinicInputEnvelope
    connect?: NonPricingServicesWhereUniqueInput | NonPricingServicesWhereUniqueInput[]
  }

  export type ImagesUncheckedCreateNestedManyWithoutClinicInput = {
    create?: XOR<ImagesCreateWithoutClinicInput, ImagesUncheckedCreateWithoutClinicInput> | ImagesCreateWithoutClinicInput[] | ImagesUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutClinicInput | ImagesCreateOrConnectWithoutClinicInput[]
    createMany?: ImagesCreateManyClinicInputEnvelope
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
  }

  export type availabilitiesUncheckedCreateNestedManyWithoutClinicInput = {
    create?: XOR<availabilitiesCreateWithoutClinicInput, availabilitiesUncheckedCreateWithoutClinicInput> | availabilitiesCreateWithoutClinicInput[] | availabilitiesUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: availabilitiesCreateOrConnectWithoutClinicInput | availabilitiesCreateOrConnectWithoutClinicInput[]
    createMany?: availabilitiesCreateManyClinicInputEnvelope
    connect?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutClinicInput = {
    create?: XOR<ReviewsCreateWithoutClinicInput, ReviewsUncheckedCreateWithoutClinicInput> | ReviewsCreateWithoutClinicInput[] | ReviewsUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutClinicInput | ReviewsCreateOrConnectWithoutClinicInput[]
    createMany?: ReviewsCreateManyClinicInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type PricingServicesUncheckedCreateNestedManyWithoutClinicInput = {
    create?: XOR<PricingServicesCreateWithoutClinicInput, PricingServicesUncheckedCreateWithoutClinicInput> | PricingServicesCreateWithoutClinicInput[] | PricingServicesUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: PricingServicesCreateOrConnectWithoutClinicInput | PricingServicesCreateOrConnectWithoutClinicInput[]
    createMany?: PricingServicesCreateManyClinicInputEnvelope
    connect?: PricingServicesWhereUniqueInput | PricingServicesWhereUniqueInput[]
  }

  export type NonPricingServicesUncheckedCreateNestedManyWithoutClinicInput = {
    create?: XOR<NonPricingServicesCreateWithoutClinicInput, NonPricingServicesUncheckedCreateWithoutClinicInput> | NonPricingServicesCreateWithoutClinicInput[] | NonPricingServicesUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: NonPricingServicesCreateOrConnectWithoutClinicInput | NonPricingServicesCreateOrConnectWithoutClinicInput[]
    createMany?: NonPricingServicesCreateManyClinicInputEnvelope
    connect?: NonPricingServicesWhereUniqueInput | NonPricingServicesWhereUniqueInput[]
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

  export type ClinicsUpdatedaysOffInput = {
    set?: number[]
    push?: number | number[]
  }

  export type ImagesUpdateManyWithoutClinicNestedInput = {
    create?: XOR<ImagesCreateWithoutClinicInput, ImagesUncheckedCreateWithoutClinicInput> | ImagesCreateWithoutClinicInput[] | ImagesUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutClinicInput | ImagesCreateOrConnectWithoutClinicInput[]
    upsert?: ImagesUpsertWithWhereUniqueWithoutClinicInput | ImagesUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: ImagesCreateManyClinicInputEnvelope
    set?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    disconnect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    delete?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    update?: ImagesUpdateWithWhereUniqueWithoutClinicInput | ImagesUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: ImagesUpdateManyWithWhereWithoutClinicInput | ImagesUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
  }

  export type availabilitiesUpdateManyWithoutClinicNestedInput = {
    create?: XOR<availabilitiesCreateWithoutClinicInput, availabilitiesUncheckedCreateWithoutClinicInput> | availabilitiesCreateWithoutClinicInput[] | availabilitiesUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: availabilitiesCreateOrConnectWithoutClinicInput | availabilitiesCreateOrConnectWithoutClinicInput[]
    upsert?: availabilitiesUpsertWithWhereUniqueWithoutClinicInput | availabilitiesUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: availabilitiesCreateManyClinicInputEnvelope
    set?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
    disconnect?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
    delete?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
    connect?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
    update?: availabilitiesUpdateWithWhereUniqueWithoutClinicInput | availabilitiesUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: availabilitiesUpdateManyWithWhereWithoutClinicInput | availabilitiesUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: availabilitiesScalarWhereInput | availabilitiesScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutClinicNestedInput = {
    create?: XOR<ReviewsCreateWithoutClinicInput, ReviewsUncheckedCreateWithoutClinicInput> | ReviewsCreateWithoutClinicInput[] | ReviewsUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutClinicInput | ReviewsCreateOrConnectWithoutClinicInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutClinicInput | ReviewsUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: ReviewsCreateManyClinicInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutClinicInput | ReviewsUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutClinicInput | ReviewsUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type PricingServicesUpdateManyWithoutClinicNestedInput = {
    create?: XOR<PricingServicesCreateWithoutClinicInput, PricingServicesUncheckedCreateWithoutClinicInput> | PricingServicesCreateWithoutClinicInput[] | PricingServicesUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: PricingServicesCreateOrConnectWithoutClinicInput | PricingServicesCreateOrConnectWithoutClinicInput[]
    upsert?: PricingServicesUpsertWithWhereUniqueWithoutClinicInput | PricingServicesUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: PricingServicesCreateManyClinicInputEnvelope
    set?: PricingServicesWhereUniqueInput | PricingServicesWhereUniqueInput[]
    disconnect?: PricingServicesWhereUniqueInput | PricingServicesWhereUniqueInput[]
    delete?: PricingServicesWhereUniqueInput | PricingServicesWhereUniqueInput[]
    connect?: PricingServicesWhereUniqueInput | PricingServicesWhereUniqueInput[]
    update?: PricingServicesUpdateWithWhereUniqueWithoutClinicInput | PricingServicesUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: PricingServicesUpdateManyWithWhereWithoutClinicInput | PricingServicesUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: PricingServicesScalarWhereInput | PricingServicesScalarWhereInput[]
  }

  export type NonPricingServicesUpdateManyWithoutClinicNestedInput = {
    create?: XOR<NonPricingServicesCreateWithoutClinicInput, NonPricingServicesUncheckedCreateWithoutClinicInput> | NonPricingServicesCreateWithoutClinicInput[] | NonPricingServicesUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: NonPricingServicesCreateOrConnectWithoutClinicInput | NonPricingServicesCreateOrConnectWithoutClinicInput[]
    upsert?: NonPricingServicesUpsertWithWhereUniqueWithoutClinicInput | NonPricingServicesUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: NonPricingServicesCreateManyClinicInputEnvelope
    set?: NonPricingServicesWhereUniqueInput | NonPricingServicesWhereUniqueInput[]
    disconnect?: NonPricingServicesWhereUniqueInput | NonPricingServicesWhereUniqueInput[]
    delete?: NonPricingServicesWhereUniqueInput | NonPricingServicesWhereUniqueInput[]
    connect?: NonPricingServicesWhereUniqueInput | NonPricingServicesWhereUniqueInput[]
    update?: NonPricingServicesUpdateWithWhereUniqueWithoutClinicInput | NonPricingServicesUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: NonPricingServicesUpdateManyWithWhereWithoutClinicInput | NonPricingServicesUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: NonPricingServicesScalarWhereInput | NonPricingServicesScalarWhereInput[]
  }

  export type ImagesUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: XOR<ImagesCreateWithoutClinicInput, ImagesUncheckedCreateWithoutClinicInput> | ImagesCreateWithoutClinicInput[] | ImagesUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutClinicInput | ImagesCreateOrConnectWithoutClinicInput[]
    upsert?: ImagesUpsertWithWhereUniqueWithoutClinicInput | ImagesUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: ImagesCreateManyClinicInputEnvelope
    set?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    disconnect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    delete?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    update?: ImagesUpdateWithWhereUniqueWithoutClinicInput | ImagesUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: ImagesUpdateManyWithWhereWithoutClinicInput | ImagesUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
  }

  export type availabilitiesUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: XOR<availabilitiesCreateWithoutClinicInput, availabilitiesUncheckedCreateWithoutClinicInput> | availabilitiesCreateWithoutClinicInput[] | availabilitiesUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: availabilitiesCreateOrConnectWithoutClinicInput | availabilitiesCreateOrConnectWithoutClinicInput[]
    upsert?: availabilitiesUpsertWithWhereUniqueWithoutClinicInput | availabilitiesUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: availabilitiesCreateManyClinicInputEnvelope
    set?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
    disconnect?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
    delete?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
    connect?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
    update?: availabilitiesUpdateWithWhereUniqueWithoutClinicInput | availabilitiesUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: availabilitiesUpdateManyWithWhereWithoutClinicInput | availabilitiesUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: availabilitiesScalarWhereInput | availabilitiesScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: XOR<ReviewsCreateWithoutClinicInput, ReviewsUncheckedCreateWithoutClinicInput> | ReviewsCreateWithoutClinicInput[] | ReviewsUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutClinicInput | ReviewsCreateOrConnectWithoutClinicInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutClinicInput | ReviewsUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: ReviewsCreateManyClinicInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutClinicInput | ReviewsUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutClinicInput | ReviewsUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type PricingServicesUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: XOR<PricingServicesCreateWithoutClinicInput, PricingServicesUncheckedCreateWithoutClinicInput> | PricingServicesCreateWithoutClinicInput[] | PricingServicesUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: PricingServicesCreateOrConnectWithoutClinicInput | PricingServicesCreateOrConnectWithoutClinicInput[]
    upsert?: PricingServicesUpsertWithWhereUniqueWithoutClinicInput | PricingServicesUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: PricingServicesCreateManyClinicInputEnvelope
    set?: PricingServicesWhereUniqueInput | PricingServicesWhereUniqueInput[]
    disconnect?: PricingServicesWhereUniqueInput | PricingServicesWhereUniqueInput[]
    delete?: PricingServicesWhereUniqueInput | PricingServicesWhereUniqueInput[]
    connect?: PricingServicesWhereUniqueInput | PricingServicesWhereUniqueInput[]
    update?: PricingServicesUpdateWithWhereUniqueWithoutClinicInput | PricingServicesUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: PricingServicesUpdateManyWithWhereWithoutClinicInput | PricingServicesUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: PricingServicesScalarWhereInput | PricingServicesScalarWhereInput[]
  }

  export type NonPricingServicesUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: XOR<NonPricingServicesCreateWithoutClinicInput, NonPricingServicesUncheckedCreateWithoutClinicInput> | NonPricingServicesCreateWithoutClinicInput[] | NonPricingServicesUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: NonPricingServicesCreateOrConnectWithoutClinicInput | NonPricingServicesCreateOrConnectWithoutClinicInput[]
    upsert?: NonPricingServicesUpsertWithWhereUniqueWithoutClinicInput | NonPricingServicesUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: NonPricingServicesCreateManyClinicInputEnvelope
    set?: NonPricingServicesWhereUniqueInput | NonPricingServicesWhereUniqueInput[]
    disconnect?: NonPricingServicesWhereUniqueInput | NonPricingServicesWhereUniqueInput[]
    delete?: NonPricingServicesWhereUniqueInput | NonPricingServicesWhereUniqueInput[]
    connect?: NonPricingServicesWhereUniqueInput | NonPricingServicesWhereUniqueInput[]
    update?: NonPricingServicesUpdateWithWhereUniqueWithoutClinicInput | NonPricingServicesUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: NonPricingServicesUpdateManyWithWhereWithoutClinicInput | NonPricingServicesUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: NonPricingServicesScalarWhereInput | NonPricingServicesScalarWhereInput[]
  }

  export type ClinicsCreateNestedOneWithoutPricingServicesInput = {
    create?: XOR<ClinicsCreateWithoutPricingServicesInput, ClinicsUncheckedCreateWithoutPricingServicesInput>
    connectOrCreate?: ClinicsCreateOrConnectWithoutPricingServicesInput
    connect?: ClinicsWhereUniqueInput
  }

  export type ClinicsUpdateOneRequiredWithoutPricingServicesNestedInput = {
    create?: XOR<ClinicsCreateWithoutPricingServicesInput, ClinicsUncheckedCreateWithoutPricingServicesInput>
    connectOrCreate?: ClinicsCreateOrConnectWithoutPricingServicesInput
    upsert?: ClinicsUpsertWithoutPricingServicesInput
    connect?: ClinicsWhereUniqueInput
    update?: XOR<XOR<ClinicsUpdateToOneWithWhereWithoutPricingServicesInput, ClinicsUpdateWithoutPricingServicesInput>, ClinicsUncheckedUpdateWithoutPricingServicesInput>
  }

  export type ClinicsCreateNestedOneWithoutNonPricingServicesInput = {
    create?: XOR<ClinicsCreateWithoutNonPricingServicesInput, ClinicsUncheckedCreateWithoutNonPricingServicesInput>
    connectOrCreate?: ClinicsCreateOrConnectWithoutNonPricingServicesInput
    connect?: ClinicsWhereUniqueInput
  }

  export type ClinicsUpdateOneRequiredWithoutNonPricingServicesNestedInput = {
    create?: XOR<ClinicsCreateWithoutNonPricingServicesInput, ClinicsUncheckedCreateWithoutNonPricingServicesInput>
    connectOrCreate?: ClinicsCreateOrConnectWithoutNonPricingServicesInput
    upsert?: ClinicsUpsertWithoutNonPricingServicesInput
    connect?: ClinicsWhereUniqueInput
    update?: XOR<XOR<ClinicsUpdateToOneWithWhereWithoutNonPricingServicesInput, ClinicsUpdateWithoutNonPricingServicesInput>, ClinicsUncheckedUpdateWithoutNonPricingServicesInput>
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

  export type ClinicsCreateWithoutImagesInput = {
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
    daysOff?: ClinicsCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilities?: availabilitiesCreateNestedManyWithoutClinicInput
    Reviews?: ReviewsCreateNestedManyWithoutClinicInput
    PricingServices?: PricingServicesCreateNestedManyWithoutClinicInput
    nonPricingServices?: NonPricingServicesCreateNestedManyWithoutClinicInput
  }

  export type ClinicsUncheckedCreateWithoutImagesInput = {
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
    daysOff?: ClinicsCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilities?: availabilitiesUncheckedCreateNestedManyWithoutClinicInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutClinicInput
    PricingServices?: PricingServicesUncheckedCreateNestedManyWithoutClinicInput
    nonPricingServices?: NonPricingServicesUncheckedCreateNestedManyWithoutClinicInput
  }

  export type ClinicsCreateOrConnectWithoutImagesInput = {
    where: ClinicsWhereUniqueInput
    create: XOR<ClinicsCreateWithoutImagesInput, ClinicsUncheckedCreateWithoutImagesInput>
  }

  export type ClinicsUpsertWithoutImagesInput = {
    update: XOR<ClinicsUpdateWithoutImagesInput, ClinicsUncheckedUpdateWithoutImagesInput>
    create: XOR<ClinicsCreateWithoutImagesInput, ClinicsUncheckedCreateWithoutImagesInput>
    where?: ClinicsWhereInput
  }

  export type ClinicsUpdateToOneWithWhereWithoutImagesInput = {
    where?: ClinicsWhereInput
    data: XOR<ClinicsUpdateWithoutImagesInput, ClinicsUncheckedUpdateWithoutImagesInput>
  }

  export type ClinicsUpdateWithoutImagesInput = {
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
    daysOff?: ClinicsUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: availabilitiesUpdateManyWithoutClinicNestedInput
    Reviews?: ReviewsUpdateManyWithoutClinicNestedInput
    PricingServices?: PricingServicesUpdateManyWithoutClinicNestedInput
    nonPricingServices?: NonPricingServicesUpdateManyWithoutClinicNestedInput
  }

  export type ClinicsUncheckedUpdateWithoutImagesInput = {
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
    daysOff?: ClinicsUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: availabilitiesUncheckedUpdateManyWithoutClinicNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutClinicNestedInput
    PricingServices?: PricingServicesUncheckedUpdateManyWithoutClinicNestedInput
    nonPricingServices?: NonPricingServicesUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type ClinicsCreateWithoutAvailabilitiesInput = {
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
    daysOff?: ClinicsCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesCreateNestedManyWithoutClinicInput
    Reviews?: ReviewsCreateNestedManyWithoutClinicInput
    PricingServices?: PricingServicesCreateNestedManyWithoutClinicInput
    nonPricingServices?: NonPricingServicesCreateNestedManyWithoutClinicInput
  }

  export type ClinicsUncheckedCreateWithoutAvailabilitiesInput = {
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
    daysOff?: ClinicsCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesUncheckedCreateNestedManyWithoutClinicInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutClinicInput
    PricingServices?: PricingServicesUncheckedCreateNestedManyWithoutClinicInput
    nonPricingServices?: NonPricingServicesUncheckedCreateNestedManyWithoutClinicInput
  }

  export type ClinicsCreateOrConnectWithoutAvailabilitiesInput = {
    where: ClinicsWhereUniqueInput
    create: XOR<ClinicsCreateWithoutAvailabilitiesInput, ClinicsUncheckedCreateWithoutAvailabilitiesInput>
  }

  export type ClinicsUpsertWithoutAvailabilitiesInput = {
    update: XOR<ClinicsUpdateWithoutAvailabilitiesInput, ClinicsUncheckedUpdateWithoutAvailabilitiesInput>
    create: XOR<ClinicsCreateWithoutAvailabilitiesInput, ClinicsUncheckedCreateWithoutAvailabilitiesInput>
    where?: ClinicsWhereInput
  }

  export type ClinicsUpdateToOneWithWhereWithoutAvailabilitiesInput = {
    where?: ClinicsWhereInput
    data: XOR<ClinicsUpdateWithoutAvailabilitiesInput, ClinicsUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type ClinicsUpdateWithoutAvailabilitiesInput = {
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
    daysOff?: ClinicsUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUpdateManyWithoutClinicNestedInput
    Reviews?: ReviewsUpdateManyWithoutClinicNestedInput
    PricingServices?: PricingServicesUpdateManyWithoutClinicNestedInput
    nonPricingServices?: NonPricingServicesUpdateManyWithoutClinicNestedInput
  }

  export type ClinicsUncheckedUpdateWithoutAvailabilitiesInput = {
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
    daysOff?: ClinicsUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUncheckedUpdateManyWithoutClinicNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutClinicNestedInput
    PricingServices?: PricingServicesUncheckedUpdateManyWithoutClinicNestedInput
    nonPricingServices?: NonPricingServicesUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type ClinicsCreateWithoutReviewsInput = {
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
    daysOff?: ClinicsCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesCreateNestedManyWithoutClinicInput
    availabilities?: availabilitiesCreateNestedManyWithoutClinicInput
    PricingServices?: PricingServicesCreateNestedManyWithoutClinicInput
    nonPricingServices?: NonPricingServicesCreateNestedManyWithoutClinicInput
  }

  export type ClinicsUncheckedCreateWithoutReviewsInput = {
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
    daysOff?: ClinicsCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesUncheckedCreateNestedManyWithoutClinicInput
    availabilities?: availabilitiesUncheckedCreateNestedManyWithoutClinicInput
    PricingServices?: PricingServicesUncheckedCreateNestedManyWithoutClinicInput
    nonPricingServices?: NonPricingServicesUncheckedCreateNestedManyWithoutClinicInput
  }

  export type ClinicsCreateOrConnectWithoutReviewsInput = {
    where: ClinicsWhereUniqueInput
    create: XOR<ClinicsCreateWithoutReviewsInput, ClinicsUncheckedCreateWithoutReviewsInput>
  }

  export type ClinicsUpsertWithoutReviewsInput = {
    update: XOR<ClinicsUpdateWithoutReviewsInput, ClinicsUncheckedUpdateWithoutReviewsInput>
    create: XOR<ClinicsCreateWithoutReviewsInput, ClinicsUncheckedCreateWithoutReviewsInput>
    where?: ClinicsWhereInput
  }

  export type ClinicsUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ClinicsWhereInput
    data: XOR<ClinicsUpdateWithoutReviewsInput, ClinicsUncheckedUpdateWithoutReviewsInput>
  }

  export type ClinicsUpdateWithoutReviewsInput = {
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
    daysOff?: ClinicsUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUpdateManyWithoutClinicNestedInput
    availabilities?: availabilitiesUpdateManyWithoutClinicNestedInput
    PricingServices?: PricingServicesUpdateManyWithoutClinicNestedInput
    nonPricingServices?: NonPricingServicesUpdateManyWithoutClinicNestedInput
  }

  export type ClinicsUncheckedUpdateWithoutReviewsInput = {
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
    daysOff?: ClinicsUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUncheckedUpdateManyWithoutClinicNestedInput
    availabilities?: availabilitiesUncheckedUpdateManyWithoutClinicNestedInput
    PricingServices?: PricingServicesUncheckedUpdateManyWithoutClinicNestedInput
    nonPricingServices?: NonPricingServicesUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type ImagesCreateWithoutClinicInput = {
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesUncheckedCreateWithoutClinicInput = {
    id?: number
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesCreateOrConnectWithoutClinicInput = {
    where: ImagesWhereUniqueInput
    create: XOR<ImagesCreateWithoutClinicInput, ImagesUncheckedCreateWithoutClinicInput>
  }

  export type ImagesCreateManyClinicInputEnvelope = {
    data: ImagesCreateManyClinicInput | ImagesCreateManyClinicInput[]
    skipDuplicates?: boolean
  }

  export type availabilitiesCreateWithoutClinicInput = {
    start_date: string
    end_date: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type availabilitiesUncheckedCreateWithoutClinicInput = {
    id?: number
    start_date: string
    end_date: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type availabilitiesCreateOrConnectWithoutClinicInput = {
    where: availabilitiesWhereUniqueInput
    create: XOR<availabilitiesCreateWithoutClinicInput, availabilitiesUncheckedCreateWithoutClinicInput>
  }

  export type availabilitiesCreateManyClinicInputEnvelope = {
    data: availabilitiesCreateManyClinicInput | availabilitiesCreateManyClinicInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutClinicInput = {
    comment: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewsUncheckedCreateWithoutClinicInput = {
    id?: number
    comment: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewsCreateOrConnectWithoutClinicInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutClinicInput, ReviewsUncheckedCreateWithoutClinicInput>
  }

  export type ReviewsCreateManyClinicInputEnvelope = {
    data: ReviewsCreateManyClinicInput | ReviewsCreateManyClinicInput[]
    skipDuplicates?: boolean
  }

  export type PricingServicesCreateWithoutClinicInput = {
    service_name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingServicesUncheckedCreateWithoutClinicInput = {
    id?: number
    service_name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingServicesCreateOrConnectWithoutClinicInput = {
    where: PricingServicesWhereUniqueInput
    create: XOR<PricingServicesCreateWithoutClinicInput, PricingServicesUncheckedCreateWithoutClinicInput>
  }

  export type PricingServicesCreateManyClinicInputEnvelope = {
    data: PricingServicesCreateManyClinicInput | PricingServicesCreateManyClinicInput[]
    skipDuplicates?: boolean
  }

  export type NonPricingServicesCreateWithoutClinicInput = {
    service_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NonPricingServicesUncheckedCreateWithoutClinicInput = {
    id?: number
    service_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NonPricingServicesCreateOrConnectWithoutClinicInput = {
    where: NonPricingServicesWhereUniqueInput
    create: XOR<NonPricingServicesCreateWithoutClinicInput, NonPricingServicesUncheckedCreateWithoutClinicInput>
  }

  export type NonPricingServicesCreateManyClinicInputEnvelope = {
    data: NonPricingServicesCreateManyClinicInput | NonPricingServicesCreateManyClinicInput[]
    skipDuplicates?: boolean
  }

  export type ImagesUpsertWithWhereUniqueWithoutClinicInput = {
    where: ImagesWhereUniqueInput
    update: XOR<ImagesUpdateWithoutClinicInput, ImagesUncheckedUpdateWithoutClinicInput>
    create: XOR<ImagesCreateWithoutClinicInput, ImagesUncheckedCreateWithoutClinicInput>
  }

  export type ImagesUpdateWithWhereUniqueWithoutClinicInput = {
    where: ImagesWhereUniqueInput
    data: XOR<ImagesUpdateWithoutClinicInput, ImagesUncheckedUpdateWithoutClinicInput>
  }

  export type ImagesUpdateManyWithWhereWithoutClinicInput = {
    where: ImagesScalarWhereInput
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyWithoutClinicInput>
  }

  export type ImagesScalarWhereInput = {
    AND?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
    OR?: ImagesScalarWhereInput[]
    NOT?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
    id?: IntFilter<"Images"> | number
    url?: StringFilter<"Images"> | string
    clinicId?: IntFilter<"Images"> | number
    createdAt?: DateTimeFilter<"Images"> | Date | string
    updatedAt?: DateTimeFilter<"Images"> | Date | string
  }

  export type availabilitiesUpsertWithWhereUniqueWithoutClinicInput = {
    where: availabilitiesWhereUniqueInput
    update: XOR<availabilitiesUpdateWithoutClinicInput, availabilitiesUncheckedUpdateWithoutClinicInput>
    create: XOR<availabilitiesCreateWithoutClinicInput, availabilitiesUncheckedCreateWithoutClinicInput>
  }

  export type availabilitiesUpdateWithWhereUniqueWithoutClinicInput = {
    where: availabilitiesWhereUniqueInput
    data: XOR<availabilitiesUpdateWithoutClinicInput, availabilitiesUncheckedUpdateWithoutClinicInput>
  }

  export type availabilitiesUpdateManyWithWhereWithoutClinicInput = {
    where: availabilitiesScalarWhereInput
    data: XOR<availabilitiesUpdateManyMutationInput, availabilitiesUncheckedUpdateManyWithoutClinicInput>
  }

  export type availabilitiesScalarWhereInput = {
    AND?: availabilitiesScalarWhereInput | availabilitiesScalarWhereInput[]
    OR?: availabilitiesScalarWhereInput[]
    NOT?: availabilitiesScalarWhereInput | availabilitiesScalarWhereInput[]
    id?: IntFilter<"availabilities"> | number
    clinicId?: IntFilter<"availabilities"> | number
    start_date?: StringFilter<"availabilities"> | string
    end_date?: StringFilter<"availabilities"> | string
    createdAt?: DateTimeFilter<"availabilities"> | Date | string
    updatedAt?: DateTimeFilter<"availabilities"> | Date | string
  }

  export type ReviewsUpsertWithWhereUniqueWithoutClinicInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutClinicInput, ReviewsUncheckedUpdateWithoutClinicInput>
    create: XOR<ReviewsCreateWithoutClinicInput, ReviewsUncheckedCreateWithoutClinicInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutClinicInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutClinicInput, ReviewsUncheckedUpdateWithoutClinicInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutClinicInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutClinicInput>
  }

  export type ReviewsScalarWhereInput = {
    AND?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    OR?: ReviewsScalarWhereInput[]
    NOT?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    id?: IntFilter<"Reviews"> | number
    comment?: StringFilter<"Reviews"> | string
    userId?: IntFilter<"Reviews"> | number
    clinicId?: IntFilter<"Reviews"> | number
    createdAt?: DateTimeFilter<"Reviews"> | Date | string
    updatedAt?: DateTimeFilter<"Reviews"> | Date | string
  }

  export type PricingServicesUpsertWithWhereUniqueWithoutClinicInput = {
    where: PricingServicesWhereUniqueInput
    update: XOR<PricingServicesUpdateWithoutClinicInput, PricingServicesUncheckedUpdateWithoutClinicInput>
    create: XOR<PricingServicesCreateWithoutClinicInput, PricingServicesUncheckedCreateWithoutClinicInput>
  }

  export type PricingServicesUpdateWithWhereUniqueWithoutClinicInput = {
    where: PricingServicesWhereUniqueInput
    data: XOR<PricingServicesUpdateWithoutClinicInput, PricingServicesUncheckedUpdateWithoutClinicInput>
  }

  export type PricingServicesUpdateManyWithWhereWithoutClinicInput = {
    where: PricingServicesScalarWhereInput
    data: XOR<PricingServicesUpdateManyMutationInput, PricingServicesUncheckedUpdateManyWithoutClinicInput>
  }

  export type PricingServicesScalarWhereInput = {
    AND?: PricingServicesScalarWhereInput | PricingServicesScalarWhereInput[]
    OR?: PricingServicesScalarWhereInput[]
    NOT?: PricingServicesScalarWhereInput | PricingServicesScalarWhereInput[]
    id?: IntFilter<"PricingServices"> | number
    clinicId?: IntFilter<"PricingServices"> | number
    service_name?: StringFilter<"PricingServices"> | string
    price?: FloatFilter<"PricingServices"> | number
    createdAt?: DateTimeFilter<"PricingServices"> | Date | string
    updatedAt?: DateTimeFilter<"PricingServices"> | Date | string
  }

  export type NonPricingServicesUpsertWithWhereUniqueWithoutClinicInput = {
    where: NonPricingServicesWhereUniqueInput
    update: XOR<NonPricingServicesUpdateWithoutClinicInput, NonPricingServicesUncheckedUpdateWithoutClinicInput>
    create: XOR<NonPricingServicesCreateWithoutClinicInput, NonPricingServicesUncheckedCreateWithoutClinicInput>
  }

  export type NonPricingServicesUpdateWithWhereUniqueWithoutClinicInput = {
    where: NonPricingServicesWhereUniqueInput
    data: XOR<NonPricingServicesUpdateWithoutClinicInput, NonPricingServicesUncheckedUpdateWithoutClinicInput>
  }

  export type NonPricingServicesUpdateManyWithWhereWithoutClinicInput = {
    where: NonPricingServicesScalarWhereInput
    data: XOR<NonPricingServicesUpdateManyMutationInput, NonPricingServicesUncheckedUpdateManyWithoutClinicInput>
  }

  export type NonPricingServicesScalarWhereInput = {
    AND?: NonPricingServicesScalarWhereInput | NonPricingServicesScalarWhereInput[]
    OR?: NonPricingServicesScalarWhereInput[]
    NOT?: NonPricingServicesScalarWhereInput | NonPricingServicesScalarWhereInput[]
    id?: IntFilter<"NonPricingServices"> | number
    clinicId?: IntFilter<"NonPricingServices"> | number
    service_name?: StringFilter<"NonPricingServices"> | string
    createdAt?: DateTimeFilter<"NonPricingServices"> | Date | string
    updatedAt?: DateTimeFilter<"NonPricingServices"> | Date | string
  }

  export type ClinicsCreateWithoutPricingServicesInput = {
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
    daysOff?: ClinicsCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesCreateNestedManyWithoutClinicInput
    availabilities?: availabilitiesCreateNestedManyWithoutClinicInput
    Reviews?: ReviewsCreateNestedManyWithoutClinicInput
    nonPricingServices?: NonPricingServicesCreateNestedManyWithoutClinicInput
  }

  export type ClinicsUncheckedCreateWithoutPricingServicesInput = {
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
    daysOff?: ClinicsCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesUncheckedCreateNestedManyWithoutClinicInput
    availabilities?: availabilitiesUncheckedCreateNestedManyWithoutClinicInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutClinicInput
    nonPricingServices?: NonPricingServicesUncheckedCreateNestedManyWithoutClinicInput
  }

  export type ClinicsCreateOrConnectWithoutPricingServicesInput = {
    where: ClinicsWhereUniqueInput
    create: XOR<ClinicsCreateWithoutPricingServicesInput, ClinicsUncheckedCreateWithoutPricingServicesInput>
  }

  export type ClinicsUpsertWithoutPricingServicesInput = {
    update: XOR<ClinicsUpdateWithoutPricingServicesInput, ClinicsUncheckedUpdateWithoutPricingServicesInput>
    create: XOR<ClinicsCreateWithoutPricingServicesInput, ClinicsUncheckedCreateWithoutPricingServicesInput>
    where?: ClinicsWhereInput
  }

  export type ClinicsUpdateToOneWithWhereWithoutPricingServicesInput = {
    where?: ClinicsWhereInput
    data: XOR<ClinicsUpdateWithoutPricingServicesInput, ClinicsUncheckedUpdateWithoutPricingServicesInput>
  }

  export type ClinicsUpdateWithoutPricingServicesInput = {
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
    daysOff?: ClinicsUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUpdateManyWithoutClinicNestedInput
    availabilities?: availabilitiesUpdateManyWithoutClinicNestedInput
    Reviews?: ReviewsUpdateManyWithoutClinicNestedInput
    nonPricingServices?: NonPricingServicesUpdateManyWithoutClinicNestedInput
  }

  export type ClinicsUncheckedUpdateWithoutPricingServicesInput = {
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
    daysOff?: ClinicsUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUncheckedUpdateManyWithoutClinicNestedInput
    availabilities?: availabilitiesUncheckedUpdateManyWithoutClinicNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutClinicNestedInput
    nonPricingServices?: NonPricingServicesUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type ClinicsCreateWithoutNonPricingServicesInput = {
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
    daysOff?: ClinicsCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesCreateNestedManyWithoutClinicInput
    availabilities?: availabilitiesCreateNestedManyWithoutClinicInput
    Reviews?: ReviewsCreateNestedManyWithoutClinicInput
    PricingServices?: PricingServicesCreateNestedManyWithoutClinicInput
  }

  export type ClinicsUncheckedCreateWithoutNonPricingServicesInput = {
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
    daysOff?: ClinicsCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesUncheckedCreateNestedManyWithoutClinicInput
    availabilities?: availabilitiesUncheckedCreateNestedManyWithoutClinicInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutClinicInput
    PricingServices?: PricingServicesUncheckedCreateNestedManyWithoutClinicInput
  }

  export type ClinicsCreateOrConnectWithoutNonPricingServicesInput = {
    where: ClinicsWhereUniqueInput
    create: XOR<ClinicsCreateWithoutNonPricingServicesInput, ClinicsUncheckedCreateWithoutNonPricingServicesInput>
  }

  export type ClinicsUpsertWithoutNonPricingServicesInput = {
    update: XOR<ClinicsUpdateWithoutNonPricingServicesInput, ClinicsUncheckedUpdateWithoutNonPricingServicesInput>
    create: XOR<ClinicsCreateWithoutNonPricingServicesInput, ClinicsUncheckedCreateWithoutNonPricingServicesInput>
    where?: ClinicsWhereInput
  }

  export type ClinicsUpdateToOneWithWhereWithoutNonPricingServicesInput = {
    where?: ClinicsWhereInput
    data: XOR<ClinicsUpdateWithoutNonPricingServicesInput, ClinicsUncheckedUpdateWithoutNonPricingServicesInput>
  }

  export type ClinicsUpdateWithoutNonPricingServicesInput = {
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
    daysOff?: ClinicsUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUpdateManyWithoutClinicNestedInput
    availabilities?: availabilitiesUpdateManyWithoutClinicNestedInput
    Reviews?: ReviewsUpdateManyWithoutClinicNestedInput
    PricingServices?: PricingServicesUpdateManyWithoutClinicNestedInput
  }

  export type ClinicsUncheckedUpdateWithoutNonPricingServicesInput = {
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
    daysOff?: ClinicsUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUncheckedUpdateManyWithoutClinicNestedInput
    availabilities?: availabilitiesUncheckedUpdateManyWithoutClinicNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutClinicNestedInput
    PricingServices?: PricingServicesUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type ImagesCreateManyClinicInput = {
    id?: number
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type availabilitiesCreateManyClinicInput = {
    id?: number
    start_date: string
    end_date: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewsCreateManyClinicInput = {
    id?: number
    comment: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingServicesCreateManyClinicInput = {
    id?: number
    service_name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NonPricingServicesCreateManyClinicInput = {
    id?: number
    service_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesUpdateWithoutClinicInput = {
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesUncheckedUpdateWithoutClinicInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesUncheckedUpdateManyWithoutClinicInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type availabilitiesUpdateWithoutClinicInput = {
    start_date?: StringFieldUpdateOperationsInput | string
    end_date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type availabilitiesUncheckedUpdateWithoutClinicInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_date?: StringFieldUpdateOperationsInput | string
    end_date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type availabilitiesUncheckedUpdateManyWithoutClinicInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_date?: StringFieldUpdateOperationsInput | string
    end_date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUpdateWithoutClinicInput = {
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateWithoutClinicInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyWithoutClinicInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingServicesUpdateWithoutClinicInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingServicesUncheckedUpdateWithoutClinicInput = {
    id?: IntFieldUpdateOperationsInput | number
    service_name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingServicesUncheckedUpdateManyWithoutClinicInput = {
    id?: IntFieldUpdateOperationsInput | number
    service_name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NonPricingServicesUpdateWithoutClinicInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NonPricingServicesUncheckedUpdateWithoutClinicInput = {
    id?: IntFieldUpdateOperationsInput | number
    service_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NonPricingServicesUncheckedUpdateManyWithoutClinicInput = {
    id?: IntFieldUpdateOperationsInput | number
    service_name?: StringFieldUpdateOperationsInput | string
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