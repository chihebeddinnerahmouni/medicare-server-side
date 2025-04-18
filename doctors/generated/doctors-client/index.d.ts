
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
 * Model specialities
 * 
 */
export type specialities = $Result.DefaultSelection<Prisma.$specialitiesPayload>
/**
 * Model Cabinet
 * 
 */
export type Cabinet = $Result.DefaultSelection<Prisma.$CabinetPayload>
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
   * `prisma.specialities`: Exposes CRUD operations for the **specialities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Specialities
    * const specialities = await prisma.specialities.findMany()
    * ```
    */
  get specialities(): Prisma.specialitiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cabinet`: Exposes CRUD operations for the **Cabinet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cabinets
    * const cabinets = await prisma.cabinet.findMany()
    * ```
    */
  get cabinet(): Prisma.CabinetDelegate<ExtArgs, ClientOptions>;

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
    Services: 'Services',
    Reviews: 'Reviews',
    specialities: 'specialities',
    Cabinet: 'Cabinet',
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
      modelProps: "images" | "availabilities" | "services" | "reviews" | "specialities" | "cabinet" | "pricingServices" | "nonPricingServices"
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
      specialities: {
        payload: Prisma.$specialitiesPayload<ExtArgs>
        fields: Prisma.specialitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.specialitiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.specialitiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialitiesPayload>
          }
          findFirst: {
            args: Prisma.specialitiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.specialitiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialitiesPayload>
          }
          findMany: {
            args: Prisma.specialitiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialitiesPayload>[]
          }
          create: {
            args: Prisma.specialitiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialitiesPayload>
          }
          createMany: {
            args: Prisma.specialitiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.specialitiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialitiesPayload>[]
          }
          delete: {
            args: Prisma.specialitiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialitiesPayload>
          }
          update: {
            args: Prisma.specialitiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialitiesPayload>
          }
          deleteMany: {
            args: Prisma.specialitiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.specialitiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.specialitiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialitiesPayload>[]
          }
          upsert: {
            args: Prisma.specialitiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialitiesPayload>
          }
          aggregate: {
            args: Prisma.SpecialitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecialities>
          }
          groupBy: {
            args: Prisma.specialitiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecialitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.specialitiesCountArgs<ExtArgs>
            result: $Utils.Optional<SpecialitiesCountAggregateOutputType> | number
          }
        }
      }
      Cabinet: {
        payload: Prisma.$CabinetPayload<ExtArgs>
        fields: Prisma.CabinetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CabinetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CabinetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>
          }
          findFirst: {
            args: Prisma.CabinetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CabinetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>
          }
          findMany: {
            args: Prisma.CabinetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>[]
          }
          create: {
            args: Prisma.CabinetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>
          }
          createMany: {
            args: Prisma.CabinetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CabinetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>[]
          }
          delete: {
            args: Prisma.CabinetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>
          }
          update: {
            args: Prisma.CabinetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>
          }
          deleteMany: {
            args: Prisma.CabinetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CabinetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CabinetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>[]
          }
          upsert: {
            args: Prisma.CabinetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>
          }
          aggregate: {
            args: Prisma.CabinetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCabinet>
          }
          groupBy: {
            args: Prisma.CabinetGroupByArgs<ExtArgs>
            result: $Utils.Optional<CabinetGroupByOutputType>[]
          }
          count: {
            args: Prisma.CabinetCountArgs<ExtArgs>
            result: $Utils.Optional<CabinetCountAggregateOutputType> | number
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
    specialities?: specialitiesOmit
    cabinet?: CabinetOmit
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
   * Count Type SpecialitiesCountOutputType
   */

  export type SpecialitiesCountOutputType = {
    Cabinets: number
  }

  export type SpecialitiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cabinets?: boolean | SpecialitiesCountOutputTypeCountCabinetsArgs
  }

  // Custom InputTypes
  /**
   * SpecialitiesCountOutputType without action
   */
  export type SpecialitiesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialitiesCountOutputType
     */
    select?: SpecialitiesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecialitiesCountOutputType without action
   */
  export type SpecialitiesCountOutputTypeCountCabinetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CabinetWhereInput
  }


  /**
   * Count Type CabinetCountOutputType
   */

  export type CabinetCountOutputType = {
    images: number
    availabilities: number
    Reviews: number
    PricingServices: number
    nonPricingServices: number
  }

  export type CabinetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | CabinetCountOutputTypeCountImagesArgs
    availabilities?: boolean | CabinetCountOutputTypeCountAvailabilitiesArgs
    Reviews?: boolean | CabinetCountOutputTypeCountReviewsArgs
    PricingServices?: boolean | CabinetCountOutputTypeCountPricingServicesArgs
    nonPricingServices?: boolean | CabinetCountOutputTypeCountNonPricingServicesArgs
  }

  // Custom InputTypes
  /**
   * CabinetCountOutputType without action
   */
  export type CabinetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CabinetCountOutputType
     */
    select?: CabinetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CabinetCountOutputType without action
   */
  export type CabinetCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagesWhereInput
  }

  /**
   * CabinetCountOutputType without action
   */
  export type CabinetCountOutputTypeCountAvailabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: availabilitiesWhereInput
  }

  /**
   * CabinetCountOutputType without action
   */
  export type CabinetCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }

  /**
   * CabinetCountOutputType without action
   */
  export type CabinetCountOutputTypeCountPricingServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingServicesWhereInput
  }

  /**
   * CabinetCountOutputType without action
   */
  export type CabinetCountOutputTypeCountNonPricingServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    cabinetId: number | null
    order: number | null
  }

  export type ImagesSumAggregateOutputType = {
    id: number | null
    cabinetId: number | null
    order: number | null
  }

  export type ImagesMinAggregateOutputType = {
    id: number | null
    url: string | null
    cabinetId: number | null
    createdAt: Date | null
    order: number | null
    updatedAt: Date | null
  }

  export type ImagesMaxAggregateOutputType = {
    id: number | null
    url: string | null
    cabinetId: number | null
    createdAt: Date | null
    order: number | null
    updatedAt: Date | null
  }

  export type ImagesCountAggregateOutputType = {
    id: number
    url: number
    cabinetId: number
    createdAt: number
    order: number
    updatedAt: number
    _all: number
  }


  export type ImagesAvgAggregateInputType = {
    id?: true
    cabinetId?: true
    order?: true
  }

  export type ImagesSumAggregateInputType = {
    id?: true
    cabinetId?: true
    order?: true
  }

  export type ImagesMinAggregateInputType = {
    id?: true
    url?: true
    cabinetId?: true
    createdAt?: true
    order?: true
    updatedAt?: true
  }

  export type ImagesMaxAggregateInputType = {
    id?: true
    url?: true
    cabinetId?: true
    createdAt?: true
    order?: true
    updatedAt?: true
  }

  export type ImagesCountAggregateInputType = {
    id?: true
    url?: true
    cabinetId?: true
    createdAt?: true
    order?: true
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
    cabinetId: number
    createdAt: Date
    order: number
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
    cabinetId?: boolean
    createdAt?: boolean
    order?: boolean
    updatedAt?: boolean
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>

  export type ImagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    order?: boolean
    updatedAt?: boolean
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>

  export type ImagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    order?: boolean
    updatedAt?: boolean
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>

  export type ImagesSelectScalar = {
    id?: boolean
    url?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    order?: boolean
    updatedAt?: boolean
  }

  export type ImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "cabinetId" | "createdAt" | "order" | "updatedAt", ExtArgs["result"]["images"]>
  export type ImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }
  export type ImagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }
  export type ImagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }

  export type $ImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Images"
    objects: {
      Cabinet: Prisma.$CabinetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      cabinetId: number
      createdAt: Date
      order: number
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
    Cabinet<T extends CabinetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CabinetDefaultArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
    readonly cabinetId: FieldRef<"Images", 'Int'>
    readonly createdAt: FieldRef<"Images", 'DateTime'>
    readonly order: FieldRef<"Images", 'Int'>
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
    cabinetId: number | null
  }

  export type AvailabilitiesSumAggregateOutputType = {
    id: number | null
    cabinetId: number | null
  }

  export type AvailabilitiesMinAggregateOutputType = {
    id: number | null
    cabinetId: number | null
    start_date: string | null
    end_date: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvailabilitiesMaxAggregateOutputType = {
    id: number | null
    cabinetId: number | null
    start_date: string | null
    end_date: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvailabilitiesCountAggregateOutputType = {
    id: number
    cabinetId: number
    start_date: number
    end_date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AvailabilitiesAvgAggregateInputType = {
    id?: true
    cabinetId?: true
  }

  export type AvailabilitiesSumAggregateInputType = {
    id?: true
    cabinetId?: true
  }

  export type AvailabilitiesMinAggregateInputType = {
    id?: true
    cabinetId?: true
    start_date?: true
    end_date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvailabilitiesMaxAggregateInputType = {
    id?: true
    cabinetId?: true
    start_date?: true
    end_date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvailabilitiesCountAggregateInputType = {
    id?: true
    cabinetId?: true
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
    cabinetId: number
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
    cabinetId?: boolean
    start_date?: boolean
    end_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilities"]>

  export type availabilitiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cabinetId?: boolean
    start_date?: boolean
    end_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilities"]>

  export type availabilitiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cabinetId?: boolean
    start_date?: boolean
    end_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilities"]>

  export type availabilitiesSelectScalar = {
    id?: boolean
    cabinetId?: boolean
    start_date?: boolean
    end_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type availabilitiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cabinetId" | "start_date" | "end_date" | "createdAt" | "updatedAt", ExtArgs["result"]["availabilities"]>
  export type availabilitiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }
  export type availabilitiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }
  export type availabilitiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }

  export type $availabilitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "availabilities"
    objects: {
      Cabinet: Prisma.$CabinetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cabinetId: number
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
    Cabinet<T extends CabinetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CabinetDefaultArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
    readonly cabinetId: FieldRef<"availabilities", 'Int'>
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
    cabinetId: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    cabinetId: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    id: number | null
    comment: string | null
    userId: number | null
    cabinetId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewsMaxAggregateOutputType = {
    id: number | null
    comment: string | null
    userId: number | null
    cabinetId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewsCountAggregateOutputType = {
    id: number
    comment: number
    userId: number
    cabinetId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    id?: true
    userId?: true
    cabinetId?: true
  }

  export type ReviewsSumAggregateInputType = {
    id?: true
    userId?: true
    cabinetId?: true
  }

  export type ReviewsMinAggregateInputType = {
    id?: true
    comment?: true
    userId?: true
    cabinetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewsMaxAggregateInputType = {
    id?: true
    comment?: true
    userId?: true
    cabinetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewsCountAggregateInputType = {
    id?: true
    comment?: true
    userId?: true
    cabinetId?: true
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
    cabinetId: number
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
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    userId?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    userId?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectScalar = {
    id?: boolean
    comment?: boolean
    userId?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "comment" | "userId" | "cabinetId" | "createdAt" | "updatedAt", ExtArgs["result"]["reviews"]>
  export type ReviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }
  export type ReviewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }
  export type ReviewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }

  export type $ReviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reviews"
    objects: {
      Cabinet: Prisma.$CabinetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      comment: string
      userId: number
      cabinetId: number
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
    Cabinet<T extends CabinetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CabinetDefaultArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
    readonly cabinetId: FieldRef<"Reviews", 'Int'>
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
   * Model specialities
   */

  export type AggregateSpecialities = {
    _count: SpecialitiesCountAggregateOutputType | null
    _avg: SpecialitiesAvgAggregateOutputType | null
    _sum: SpecialitiesSumAggregateOutputType | null
    _min: SpecialitiesMinAggregateOutputType | null
    _max: SpecialitiesMaxAggregateOutputType | null
  }

  export type SpecialitiesAvgAggregateOutputType = {
    id: number | null
  }

  export type SpecialitiesSumAggregateOutputType = {
    id: number | null
  }

  export type SpecialitiesMinAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpecialitiesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpecialitiesCountAggregateOutputType = {
    id: number
    name: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SpecialitiesAvgAggregateInputType = {
    id?: true
  }

  export type SpecialitiesSumAggregateInputType = {
    id?: true
  }

  export type SpecialitiesMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpecialitiesMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpecialitiesCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SpecialitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which specialities to aggregate.
     */
    where?: specialitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of specialities to fetch.
     */
    orderBy?: specialitiesOrderByWithRelationInput | specialitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: specialitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` specialities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` specialities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned specialities
    **/
    _count?: true | SpecialitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpecialitiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpecialitiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecialitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecialitiesMaxAggregateInputType
  }

  export type GetSpecialitiesAggregateType<T extends SpecialitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecialities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecialities[P]>
      : GetScalarType<T[P], AggregateSpecialities[P]>
  }




  export type specialitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: specialitiesWhereInput
    orderBy?: specialitiesOrderByWithAggregationInput | specialitiesOrderByWithAggregationInput[]
    by: SpecialitiesScalarFieldEnum[] | SpecialitiesScalarFieldEnum
    having?: specialitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecialitiesCountAggregateInputType | true
    _avg?: SpecialitiesAvgAggregateInputType
    _sum?: SpecialitiesSumAggregateInputType
    _min?: SpecialitiesMinAggregateInputType
    _max?: SpecialitiesMaxAggregateInputType
  }

  export type SpecialitiesGroupByOutputType = {
    id: number
    name: string
    image: string
    createdAt: Date
    updatedAt: Date
    _count: SpecialitiesCountAggregateOutputType | null
    _avg: SpecialitiesAvgAggregateOutputType | null
    _sum: SpecialitiesSumAggregateOutputType | null
    _min: SpecialitiesMinAggregateOutputType | null
    _max: SpecialitiesMaxAggregateOutputType | null
  }

  type GetSpecialitiesGroupByPayload<T extends specialitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecialitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecialitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecialitiesGroupByOutputType[P]>
            : GetScalarType<T[P], SpecialitiesGroupByOutputType[P]>
        }
      >
    >


  export type specialitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Cabinets?: boolean | specialities$CabinetsArgs<ExtArgs>
    _count?: boolean | SpecialitiesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialities"]>

  export type specialitiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["specialities"]>

  export type specialitiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["specialities"]>

  export type specialitiesSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type specialitiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["specialities"]>
  export type specialitiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cabinets?: boolean | specialities$CabinetsArgs<ExtArgs>
    _count?: boolean | SpecialitiesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type specialitiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type specialitiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $specialitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "specialities"
    objects: {
      Cabinets: Prisma.$CabinetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      image: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["specialities"]>
    composites: {}
  }

  type specialitiesGetPayload<S extends boolean | null | undefined | specialitiesDefaultArgs> = $Result.GetResult<Prisma.$specialitiesPayload, S>

  type specialitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<specialitiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecialitiesCountAggregateInputType | true
    }

  export interface specialitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['specialities'], meta: { name: 'specialities' } }
    /**
     * Find zero or one Specialities that matches the filter.
     * @param {specialitiesFindUniqueArgs} args - Arguments to find a Specialities
     * @example
     * // Get one Specialities
     * const specialities = await prisma.specialities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends specialitiesFindUniqueArgs>(args: SelectSubset<T, specialitiesFindUniqueArgs<ExtArgs>>): Prisma__specialitiesClient<$Result.GetResult<Prisma.$specialitiesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Specialities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {specialitiesFindUniqueOrThrowArgs} args - Arguments to find a Specialities
     * @example
     * // Get one Specialities
     * const specialities = await prisma.specialities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends specialitiesFindUniqueOrThrowArgs>(args: SelectSubset<T, specialitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__specialitiesClient<$Result.GetResult<Prisma.$specialitiesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Specialities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specialitiesFindFirstArgs} args - Arguments to find a Specialities
     * @example
     * // Get one Specialities
     * const specialities = await prisma.specialities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends specialitiesFindFirstArgs>(args?: SelectSubset<T, specialitiesFindFirstArgs<ExtArgs>>): Prisma__specialitiesClient<$Result.GetResult<Prisma.$specialitiesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Specialities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specialitiesFindFirstOrThrowArgs} args - Arguments to find a Specialities
     * @example
     * // Get one Specialities
     * const specialities = await prisma.specialities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends specialitiesFindFirstOrThrowArgs>(args?: SelectSubset<T, specialitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__specialitiesClient<$Result.GetResult<Prisma.$specialitiesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Specialities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specialitiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Specialities
     * const specialities = await prisma.specialities.findMany()
     * 
     * // Get first 10 Specialities
     * const specialities = await prisma.specialities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specialitiesWithIdOnly = await prisma.specialities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends specialitiesFindManyArgs>(args?: SelectSubset<T, specialitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$specialitiesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Specialities.
     * @param {specialitiesCreateArgs} args - Arguments to create a Specialities.
     * @example
     * // Create one Specialities
     * const Specialities = await prisma.specialities.create({
     *   data: {
     *     // ... data to create a Specialities
     *   }
     * })
     * 
     */
    create<T extends specialitiesCreateArgs>(args: SelectSubset<T, specialitiesCreateArgs<ExtArgs>>): Prisma__specialitiesClient<$Result.GetResult<Prisma.$specialitiesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Specialities.
     * @param {specialitiesCreateManyArgs} args - Arguments to create many Specialities.
     * @example
     * // Create many Specialities
     * const specialities = await prisma.specialities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends specialitiesCreateManyArgs>(args?: SelectSubset<T, specialitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Specialities and returns the data saved in the database.
     * @param {specialitiesCreateManyAndReturnArgs} args - Arguments to create many Specialities.
     * @example
     * // Create many Specialities
     * const specialities = await prisma.specialities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Specialities and only return the `id`
     * const specialitiesWithIdOnly = await prisma.specialities.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends specialitiesCreateManyAndReturnArgs>(args?: SelectSubset<T, specialitiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$specialitiesPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Specialities.
     * @param {specialitiesDeleteArgs} args - Arguments to delete one Specialities.
     * @example
     * // Delete one Specialities
     * const Specialities = await prisma.specialities.delete({
     *   where: {
     *     // ... filter to delete one Specialities
     *   }
     * })
     * 
     */
    delete<T extends specialitiesDeleteArgs>(args: SelectSubset<T, specialitiesDeleteArgs<ExtArgs>>): Prisma__specialitiesClient<$Result.GetResult<Prisma.$specialitiesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Specialities.
     * @param {specialitiesUpdateArgs} args - Arguments to update one Specialities.
     * @example
     * // Update one Specialities
     * const specialities = await prisma.specialities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends specialitiesUpdateArgs>(args: SelectSubset<T, specialitiesUpdateArgs<ExtArgs>>): Prisma__specialitiesClient<$Result.GetResult<Prisma.$specialitiesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Specialities.
     * @param {specialitiesDeleteManyArgs} args - Arguments to filter Specialities to delete.
     * @example
     * // Delete a few Specialities
     * const { count } = await prisma.specialities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends specialitiesDeleteManyArgs>(args?: SelectSubset<T, specialitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specialitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Specialities
     * const specialities = await prisma.specialities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends specialitiesUpdateManyArgs>(args: SelectSubset<T, specialitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialities and returns the data updated in the database.
     * @param {specialitiesUpdateManyAndReturnArgs} args - Arguments to update many Specialities.
     * @example
     * // Update many Specialities
     * const specialities = await prisma.specialities.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Specialities and only return the `id`
     * const specialitiesWithIdOnly = await prisma.specialities.updateManyAndReturn({
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
    updateManyAndReturn<T extends specialitiesUpdateManyAndReturnArgs>(args: SelectSubset<T, specialitiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$specialitiesPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Specialities.
     * @param {specialitiesUpsertArgs} args - Arguments to update or create a Specialities.
     * @example
     * // Update or create a Specialities
     * const specialities = await prisma.specialities.upsert({
     *   create: {
     *     // ... data to create a Specialities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Specialities we want to update
     *   }
     * })
     */
    upsert<T extends specialitiesUpsertArgs>(args: SelectSubset<T, specialitiesUpsertArgs<ExtArgs>>): Prisma__specialitiesClient<$Result.GetResult<Prisma.$specialitiesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Specialities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specialitiesCountArgs} args - Arguments to filter Specialities to count.
     * @example
     * // Count the number of Specialities
     * const count = await prisma.specialities.count({
     *   where: {
     *     // ... the filter for the Specialities we want to count
     *   }
     * })
    **/
    count<T extends specialitiesCountArgs>(
      args?: Subset<T, specialitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecialitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Specialities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpecialitiesAggregateArgs>(args: Subset<T, SpecialitiesAggregateArgs>): Prisma.PrismaPromise<GetSpecialitiesAggregateType<T>>

    /**
     * Group by Specialities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specialitiesGroupByArgs} args - Group by arguments.
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
      T extends specialitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: specialitiesGroupByArgs['orderBy'] }
        : { orderBy?: specialitiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, specialitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecialitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the specialities model
   */
  readonly fields: specialitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for specialities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__specialitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Cabinets<T extends specialities$CabinetsArgs<ExtArgs> = {}>(args?: Subset<T, specialities$CabinetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the specialities model
   */ 
  interface specialitiesFieldRefs {
    readonly id: FieldRef<"specialities", 'Int'>
    readonly name: FieldRef<"specialities", 'String'>
    readonly image: FieldRef<"specialities", 'String'>
    readonly createdAt: FieldRef<"specialities", 'DateTime'>
    readonly updatedAt: FieldRef<"specialities", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * specialities findUnique
   */
  export type specialitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialities
     */
    select?: specialitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialities
     */
    omit?: specialitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialitiesInclude<ExtArgs> | null
    /**
     * Filter, which specialities to fetch.
     */
    where: specialitiesWhereUniqueInput
  }

  /**
   * specialities findUniqueOrThrow
   */
  export type specialitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialities
     */
    select?: specialitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialities
     */
    omit?: specialitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialitiesInclude<ExtArgs> | null
    /**
     * Filter, which specialities to fetch.
     */
    where: specialitiesWhereUniqueInput
  }

  /**
   * specialities findFirst
   */
  export type specialitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialities
     */
    select?: specialitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialities
     */
    omit?: specialitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialitiesInclude<ExtArgs> | null
    /**
     * Filter, which specialities to fetch.
     */
    where?: specialitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of specialities to fetch.
     */
    orderBy?: specialitiesOrderByWithRelationInput | specialitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for specialities.
     */
    cursor?: specialitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` specialities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` specialities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of specialities.
     */
    distinct?: SpecialitiesScalarFieldEnum | SpecialitiesScalarFieldEnum[]
  }

  /**
   * specialities findFirstOrThrow
   */
  export type specialitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialities
     */
    select?: specialitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialities
     */
    omit?: specialitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialitiesInclude<ExtArgs> | null
    /**
     * Filter, which specialities to fetch.
     */
    where?: specialitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of specialities to fetch.
     */
    orderBy?: specialitiesOrderByWithRelationInput | specialitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for specialities.
     */
    cursor?: specialitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` specialities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` specialities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of specialities.
     */
    distinct?: SpecialitiesScalarFieldEnum | SpecialitiesScalarFieldEnum[]
  }

  /**
   * specialities findMany
   */
  export type specialitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialities
     */
    select?: specialitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialities
     */
    omit?: specialitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialitiesInclude<ExtArgs> | null
    /**
     * Filter, which specialities to fetch.
     */
    where?: specialitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of specialities to fetch.
     */
    orderBy?: specialitiesOrderByWithRelationInput | specialitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing specialities.
     */
    cursor?: specialitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` specialities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` specialities.
     */
    skip?: number
    distinct?: SpecialitiesScalarFieldEnum | SpecialitiesScalarFieldEnum[]
  }

  /**
   * specialities create
   */
  export type specialitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialities
     */
    select?: specialitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialities
     */
    omit?: specialitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialitiesInclude<ExtArgs> | null
    /**
     * The data needed to create a specialities.
     */
    data: XOR<specialitiesCreateInput, specialitiesUncheckedCreateInput>
  }

  /**
   * specialities createMany
   */
  export type specialitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many specialities.
     */
    data: specialitiesCreateManyInput | specialitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * specialities createManyAndReturn
   */
  export type specialitiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialities
     */
    select?: specialitiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the specialities
     */
    omit?: specialitiesOmit<ExtArgs> | null
    /**
     * The data used to create many specialities.
     */
    data: specialitiesCreateManyInput | specialitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * specialities update
   */
  export type specialitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialities
     */
    select?: specialitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialities
     */
    omit?: specialitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialitiesInclude<ExtArgs> | null
    /**
     * The data needed to update a specialities.
     */
    data: XOR<specialitiesUpdateInput, specialitiesUncheckedUpdateInput>
    /**
     * Choose, which specialities to update.
     */
    where: specialitiesWhereUniqueInput
  }

  /**
   * specialities updateMany
   */
  export type specialitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update specialities.
     */
    data: XOR<specialitiesUpdateManyMutationInput, specialitiesUncheckedUpdateManyInput>
    /**
     * Filter which specialities to update
     */
    where?: specialitiesWhereInput
    /**
     * Limit how many specialities to update.
     */
    limit?: number
  }

  /**
   * specialities updateManyAndReturn
   */
  export type specialitiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialities
     */
    select?: specialitiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the specialities
     */
    omit?: specialitiesOmit<ExtArgs> | null
    /**
     * The data used to update specialities.
     */
    data: XOR<specialitiesUpdateManyMutationInput, specialitiesUncheckedUpdateManyInput>
    /**
     * Filter which specialities to update
     */
    where?: specialitiesWhereInput
    /**
     * Limit how many specialities to update.
     */
    limit?: number
  }

  /**
   * specialities upsert
   */
  export type specialitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialities
     */
    select?: specialitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialities
     */
    omit?: specialitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialitiesInclude<ExtArgs> | null
    /**
     * The filter to search for the specialities to update in case it exists.
     */
    where: specialitiesWhereUniqueInput
    /**
     * In case the specialities found by the `where` argument doesn't exist, create a new specialities with this data.
     */
    create: XOR<specialitiesCreateInput, specialitiesUncheckedCreateInput>
    /**
     * In case the specialities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<specialitiesUpdateInput, specialitiesUncheckedUpdateInput>
  }

  /**
   * specialities delete
   */
  export type specialitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialities
     */
    select?: specialitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialities
     */
    omit?: specialitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialitiesInclude<ExtArgs> | null
    /**
     * Filter which specialities to delete.
     */
    where: specialitiesWhereUniqueInput
  }

  /**
   * specialities deleteMany
   */
  export type specialitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which specialities to delete
     */
    where?: specialitiesWhereInput
    /**
     * Limit how many specialities to delete.
     */
    limit?: number
  }

  /**
   * specialities.Cabinets
   */
  export type specialities$CabinetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    where?: CabinetWhereInput
    orderBy?: CabinetOrderByWithRelationInput | CabinetOrderByWithRelationInput[]
    cursor?: CabinetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CabinetScalarFieldEnum | CabinetScalarFieldEnum[]
  }

  /**
   * specialities without action
   */
  export type specialitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialities
     */
    select?: specialitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialities
     */
    omit?: specialitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialitiesInclude<ExtArgs> | null
  }


  /**
   * Model Cabinet
   */

  export type AggregateCabinet = {
    _count: CabinetCountAggregateOutputType | null
    _avg: CabinetAvgAggregateOutputType | null
    _sum: CabinetSumAggregateOutputType | null
    _min: CabinetMinAggregateOutputType | null
    _max: CabinetMaxAggregateOutputType | null
  }

  export type CabinetAvgAggregateOutputType = {
    id: number | null
    specialityId: number | null
    totalViews: number | null
    totalRate: number | null
    numberOfRates: number | null
    averageRate: number | null
    ownerId: number | null
    year: number | null
    daysOff: number | null
    reviewsCount: number | null
  }

  export type CabinetSumAggregateOutputType = {
    id: number | null
    specialityId: number | null
    totalViews: number | null
    totalRate: number | null
    numberOfRates: number | null
    averageRate: number | null
    ownerId: number | null
    year: number | null
    daysOff: number[]
    reviewsCount: number | null
  }

  export type CabinetMinAggregateOutputType = {
    id: number | null
    title: string | null
    specialityId: number | null
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

  export type CabinetMaxAggregateOutputType = {
    id: number | null
    title: string | null
    specialityId: number | null
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

  export type CabinetCountAggregateOutputType = {
    id: number
    title: number
    specialityId: number
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
    type: number
    daysOff: number
    reviewsCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CabinetAvgAggregateInputType = {
    id?: true
    specialityId?: true
    totalViews?: true
    totalRate?: true
    numberOfRates?: true
    averageRate?: true
    ownerId?: true
    year?: true
    daysOff?: true
    reviewsCount?: true
  }

  export type CabinetSumAggregateInputType = {
    id?: true
    specialityId?: true
    totalViews?: true
    totalRate?: true
    numberOfRates?: true
    averageRate?: true
    ownerId?: true
    year?: true
    daysOff?: true
    reviewsCount?: true
  }

  export type CabinetMinAggregateInputType = {
    id?: true
    title?: true
    specialityId?: true
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

  export type CabinetMaxAggregateInputType = {
    id?: true
    title?: true
    specialityId?: true
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

  export type CabinetCountAggregateInputType = {
    id?: true
    title?: true
    specialityId?: true
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
    type?: true
    daysOff?: true
    reviewsCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CabinetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cabinet to aggregate.
     */
    where?: CabinetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cabinets to fetch.
     */
    orderBy?: CabinetOrderByWithRelationInput | CabinetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CabinetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cabinets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cabinets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cabinets
    **/
    _count?: true | CabinetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CabinetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CabinetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CabinetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CabinetMaxAggregateInputType
  }

  export type GetCabinetAggregateType<T extends CabinetAggregateArgs> = {
        [P in keyof T & keyof AggregateCabinet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCabinet[P]>
      : GetScalarType<T[P], AggregateCabinet[P]>
  }




  export type CabinetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CabinetWhereInput
    orderBy?: CabinetOrderByWithAggregationInput | CabinetOrderByWithAggregationInput[]
    by: CabinetScalarFieldEnum[] | CabinetScalarFieldEnum
    having?: CabinetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CabinetCountAggregateInputType | true
    _avg?: CabinetAvgAggregateInputType
    _sum?: CabinetSumAggregateInputType
    _min?: CabinetMinAggregateInputType
    _max?: CabinetMaxAggregateInputType
  }

  export type CabinetGroupByOutputType = {
    id: number
    title: string
    specialityId: number
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
    type: string
    daysOff: number[]
    reviewsCount: number
    createdAt: Date
    updatedAt: Date
    _count: CabinetCountAggregateOutputType | null
    _avg: CabinetAvgAggregateOutputType | null
    _sum: CabinetSumAggregateOutputType | null
    _min: CabinetMinAggregateOutputType | null
    _max: CabinetMaxAggregateOutputType | null
  }

  type GetCabinetGroupByPayload<T extends CabinetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CabinetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CabinetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CabinetGroupByOutputType[P]>
            : GetScalarType<T[P], CabinetGroupByOutputType[P]>
        }
      >
    >


  export type CabinetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    specialityId?: boolean
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
    type?: boolean
    daysOff?: boolean
    reviewsCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | Cabinet$imagesArgs<ExtArgs>
    availabilities?: boolean | Cabinet$availabilitiesArgs<ExtArgs>
    Reviews?: boolean | Cabinet$ReviewsArgs<ExtArgs>
    PricingServices?: boolean | Cabinet$PricingServicesArgs<ExtArgs>
    nonPricingServices?: boolean | Cabinet$nonPricingServicesArgs<ExtArgs>
    speciality?: boolean | specialitiesDefaultArgs<ExtArgs>
    _count?: boolean | CabinetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cabinet"]>

  export type CabinetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    specialityId?: boolean
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
    type?: boolean
    daysOff?: boolean
    reviewsCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    speciality?: boolean | specialitiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cabinet"]>

  export type CabinetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    specialityId?: boolean
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
    type?: boolean
    daysOff?: boolean
    reviewsCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    speciality?: boolean | specialitiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cabinet"]>

  export type CabinetSelectScalar = {
    id?: boolean
    title?: boolean
    specialityId?: boolean
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
    type?: boolean
    daysOff?: boolean
    reviewsCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CabinetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "specialityId" | "description" | "address" | "phone" | "totalViews" | "totalRate" | "numberOfRates" | "averageRate" | "ownerId" | "year" | "validated" | "blocked" | "rates" | "openTime" | "closeTime" | "latitude" | "longitude" | "type" | "daysOff" | "reviewsCount" | "createdAt" | "updatedAt", ExtArgs["result"]["cabinet"]>
  export type CabinetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Cabinet$imagesArgs<ExtArgs>
    availabilities?: boolean | Cabinet$availabilitiesArgs<ExtArgs>
    Reviews?: boolean | Cabinet$ReviewsArgs<ExtArgs>
    PricingServices?: boolean | Cabinet$PricingServicesArgs<ExtArgs>
    nonPricingServices?: boolean | Cabinet$nonPricingServicesArgs<ExtArgs>
    speciality?: boolean | specialitiesDefaultArgs<ExtArgs>
    _count?: boolean | CabinetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CabinetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    speciality?: boolean | specialitiesDefaultArgs<ExtArgs>
  }
  export type CabinetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    speciality?: boolean | specialitiesDefaultArgs<ExtArgs>
  }

  export type $CabinetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cabinet"
    objects: {
      images: Prisma.$ImagesPayload<ExtArgs>[]
      availabilities: Prisma.$availabilitiesPayload<ExtArgs>[]
      Reviews: Prisma.$ReviewsPayload<ExtArgs>[]
      PricingServices: Prisma.$PricingServicesPayload<ExtArgs>[]
      nonPricingServices: Prisma.$NonPricingServicesPayload<ExtArgs>[]
      speciality: Prisma.$specialitiesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      specialityId: number
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
      type: string
      daysOff: number[]
      reviewsCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cabinet"]>
    composites: {}
  }

  type CabinetGetPayload<S extends boolean | null | undefined | CabinetDefaultArgs> = $Result.GetResult<Prisma.$CabinetPayload, S>

  type CabinetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CabinetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CabinetCountAggregateInputType | true
    }

  export interface CabinetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cabinet'], meta: { name: 'Cabinet' } }
    /**
     * Find zero or one Cabinet that matches the filter.
     * @param {CabinetFindUniqueArgs} args - Arguments to find a Cabinet
     * @example
     * // Get one Cabinet
     * const cabinet = await prisma.cabinet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CabinetFindUniqueArgs>(args: SelectSubset<T, CabinetFindUniqueArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Cabinet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CabinetFindUniqueOrThrowArgs} args - Arguments to find a Cabinet
     * @example
     * // Get one Cabinet
     * const cabinet = await prisma.cabinet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CabinetFindUniqueOrThrowArgs>(args: SelectSubset<T, CabinetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Cabinet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetFindFirstArgs} args - Arguments to find a Cabinet
     * @example
     * // Get one Cabinet
     * const cabinet = await prisma.cabinet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CabinetFindFirstArgs>(args?: SelectSubset<T, CabinetFindFirstArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Cabinet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetFindFirstOrThrowArgs} args - Arguments to find a Cabinet
     * @example
     * // Get one Cabinet
     * const cabinet = await prisma.cabinet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CabinetFindFirstOrThrowArgs>(args?: SelectSubset<T, CabinetFindFirstOrThrowArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Cabinets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cabinets
     * const cabinets = await prisma.cabinet.findMany()
     * 
     * // Get first 10 Cabinets
     * const cabinets = await prisma.cabinet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cabinetWithIdOnly = await prisma.cabinet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CabinetFindManyArgs>(args?: SelectSubset<T, CabinetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Cabinet.
     * @param {CabinetCreateArgs} args - Arguments to create a Cabinet.
     * @example
     * // Create one Cabinet
     * const Cabinet = await prisma.cabinet.create({
     *   data: {
     *     // ... data to create a Cabinet
     *   }
     * })
     * 
     */
    create<T extends CabinetCreateArgs>(args: SelectSubset<T, CabinetCreateArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Cabinets.
     * @param {CabinetCreateManyArgs} args - Arguments to create many Cabinets.
     * @example
     * // Create many Cabinets
     * const cabinet = await prisma.cabinet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CabinetCreateManyArgs>(args?: SelectSubset<T, CabinetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cabinets and returns the data saved in the database.
     * @param {CabinetCreateManyAndReturnArgs} args - Arguments to create many Cabinets.
     * @example
     * // Create many Cabinets
     * const cabinet = await prisma.cabinet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cabinets and only return the `id`
     * const cabinetWithIdOnly = await prisma.cabinet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CabinetCreateManyAndReturnArgs>(args?: SelectSubset<T, CabinetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Cabinet.
     * @param {CabinetDeleteArgs} args - Arguments to delete one Cabinet.
     * @example
     * // Delete one Cabinet
     * const Cabinet = await prisma.cabinet.delete({
     *   where: {
     *     // ... filter to delete one Cabinet
     *   }
     * })
     * 
     */
    delete<T extends CabinetDeleteArgs>(args: SelectSubset<T, CabinetDeleteArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Cabinet.
     * @param {CabinetUpdateArgs} args - Arguments to update one Cabinet.
     * @example
     * // Update one Cabinet
     * const cabinet = await prisma.cabinet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CabinetUpdateArgs>(args: SelectSubset<T, CabinetUpdateArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Cabinets.
     * @param {CabinetDeleteManyArgs} args - Arguments to filter Cabinets to delete.
     * @example
     * // Delete a few Cabinets
     * const { count } = await prisma.cabinet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CabinetDeleteManyArgs>(args?: SelectSubset<T, CabinetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cabinets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cabinets
     * const cabinet = await prisma.cabinet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CabinetUpdateManyArgs>(args: SelectSubset<T, CabinetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cabinets and returns the data updated in the database.
     * @param {CabinetUpdateManyAndReturnArgs} args - Arguments to update many Cabinets.
     * @example
     * // Update many Cabinets
     * const cabinet = await prisma.cabinet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cabinets and only return the `id`
     * const cabinetWithIdOnly = await prisma.cabinet.updateManyAndReturn({
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
    updateManyAndReturn<T extends CabinetUpdateManyAndReturnArgs>(args: SelectSubset<T, CabinetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Cabinet.
     * @param {CabinetUpsertArgs} args - Arguments to update or create a Cabinet.
     * @example
     * // Update or create a Cabinet
     * const cabinet = await prisma.cabinet.upsert({
     *   create: {
     *     // ... data to create a Cabinet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cabinet we want to update
     *   }
     * })
     */
    upsert<T extends CabinetUpsertArgs>(args: SelectSubset<T, CabinetUpsertArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Cabinets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetCountArgs} args - Arguments to filter Cabinets to count.
     * @example
     * // Count the number of Cabinets
     * const count = await prisma.cabinet.count({
     *   where: {
     *     // ... the filter for the Cabinets we want to count
     *   }
     * })
    **/
    count<T extends CabinetCountArgs>(
      args?: Subset<T, CabinetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CabinetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cabinet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CabinetAggregateArgs>(args: Subset<T, CabinetAggregateArgs>): Prisma.PrismaPromise<GetCabinetAggregateType<T>>

    /**
     * Group by Cabinet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetGroupByArgs} args - Group by arguments.
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
      T extends CabinetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CabinetGroupByArgs['orderBy'] }
        : { orderBy?: CabinetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CabinetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCabinetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cabinet model
   */
  readonly fields: CabinetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cabinet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CabinetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Cabinet$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Cabinet$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    availabilities<T extends Cabinet$availabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Cabinet$availabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$availabilitiesPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Reviews<T extends Cabinet$ReviewsArgs<ExtArgs> = {}>(args?: Subset<T, Cabinet$ReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    PricingServices<T extends Cabinet$PricingServicesArgs<ExtArgs> = {}>(args?: Subset<T, Cabinet$PricingServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingServicesPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    nonPricingServices<T extends Cabinet$nonPricingServicesArgs<ExtArgs> = {}>(args?: Subset<T, Cabinet$nonPricingServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NonPricingServicesPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    speciality<T extends specialitiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, specialitiesDefaultArgs<ExtArgs>>): Prisma__specialitiesClient<$Result.GetResult<Prisma.$specialitiesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Cabinet model
   */ 
  interface CabinetFieldRefs {
    readonly id: FieldRef<"Cabinet", 'Int'>
    readonly title: FieldRef<"Cabinet", 'String'>
    readonly specialityId: FieldRef<"Cabinet", 'Int'>
    readonly description: FieldRef<"Cabinet", 'String'>
    readonly address: FieldRef<"Cabinet", 'String'>
    readonly phone: FieldRef<"Cabinet", 'String'>
    readonly totalViews: FieldRef<"Cabinet", 'Int'>
    readonly totalRate: FieldRef<"Cabinet", 'Int'>
    readonly numberOfRates: FieldRef<"Cabinet", 'Int'>
    readonly averageRate: FieldRef<"Cabinet", 'Float'>
    readonly ownerId: FieldRef<"Cabinet", 'Int'>
    readonly year: FieldRef<"Cabinet", 'Int'>
    readonly validated: FieldRef<"Cabinet", 'Boolean'>
    readonly blocked: FieldRef<"Cabinet", 'Boolean'>
    readonly rates: FieldRef<"Cabinet", 'Json'>
    readonly openTime: FieldRef<"Cabinet", 'String'>
    readonly closeTime: FieldRef<"Cabinet", 'String'>
    readonly latitude: FieldRef<"Cabinet", 'String'>
    readonly longitude: FieldRef<"Cabinet", 'String'>
    readonly type: FieldRef<"Cabinet", 'String'>
    readonly daysOff: FieldRef<"Cabinet", 'Int[]'>
    readonly reviewsCount: FieldRef<"Cabinet", 'Int'>
    readonly createdAt: FieldRef<"Cabinet", 'DateTime'>
    readonly updatedAt: FieldRef<"Cabinet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cabinet findUnique
   */
  export type CabinetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    /**
     * Filter, which Cabinet to fetch.
     */
    where: CabinetWhereUniqueInput
  }

  /**
   * Cabinet findUniqueOrThrow
   */
  export type CabinetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    /**
     * Filter, which Cabinet to fetch.
     */
    where: CabinetWhereUniqueInput
  }

  /**
   * Cabinet findFirst
   */
  export type CabinetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    /**
     * Filter, which Cabinet to fetch.
     */
    where?: CabinetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cabinets to fetch.
     */
    orderBy?: CabinetOrderByWithRelationInput | CabinetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cabinets.
     */
    cursor?: CabinetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cabinets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cabinets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cabinets.
     */
    distinct?: CabinetScalarFieldEnum | CabinetScalarFieldEnum[]
  }

  /**
   * Cabinet findFirstOrThrow
   */
  export type CabinetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    /**
     * Filter, which Cabinet to fetch.
     */
    where?: CabinetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cabinets to fetch.
     */
    orderBy?: CabinetOrderByWithRelationInput | CabinetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cabinets.
     */
    cursor?: CabinetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cabinets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cabinets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cabinets.
     */
    distinct?: CabinetScalarFieldEnum | CabinetScalarFieldEnum[]
  }

  /**
   * Cabinet findMany
   */
  export type CabinetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    /**
     * Filter, which Cabinets to fetch.
     */
    where?: CabinetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cabinets to fetch.
     */
    orderBy?: CabinetOrderByWithRelationInput | CabinetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cabinets.
     */
    cursor?: CabinetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cabinets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cabinets.
     */
    skip?: number
    distinct?: CabinetScalarFieldEnum | CabinetScalarFieldEnum[]
  }

  /**
   * Cabinet create
   */
  export type CabinetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    /**
     * The data needed to create a Cabinet.
     */
    data: XOR<CabinetCreateInput, CabinetUncheckedCreateInput>
  }

  /**
   * Cabinet createMany
   */
  export type CabinetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cabinets.
     */
    data: CabinetCreateManyInput | CabinetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cabinet createManyAndReturn
   */
  export type CabinetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * The data used to create many Cabinets.
     */
    data: CabinetCreateManyInput | CabinetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cabinet update
   */
  export type CabinetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    /**
     * The data needed to update a Cabinet.
     */
    data: XOR<CabinetUpdateInput, CabinetUncheckedUpdateInput>
    /**
     * Choose, which Cabinet to update.
     */
    where: CabinetWhereUniqueInput
  }

  /**
   * Cabinet updateMany
   */
  export type CabinetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cabinets.
     */
    data: XOR<CabinetUpdateManyMutationInput, CabinetUncheckedUpdateManyInput>
    /**
     * Filter which Cabinets to update
     */
    where?: CabinetWhereInput
    /**
     * Limit how many Cabinets to update.
     */
    limit?: number
  }

  /**
   * Cabinet updateManyAndReturn
   */
  export type CabinetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * The data used to update Cabinets.
     */
    data: XOR<CabinetUpdateManyMutationInput, CabinetUncheckedUpdateManyInput>
    /**
     * Filter which Cabinets to update
     */
    where?: CabinetWhereInput
    /**
     * Limit how many Cabinets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cabinet upsert
   */
  export type CabinetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    /**
     * The filter to search for the Cabinet to update in case it exists.
     */
    where: CabinetWhereUniqueInput
    /**
     * In case the Cabinet found by the `where` argument doesn't exist, create a new Cabinet with this data.
     */
    create: XOR<CabinetCreateInput, CabinetUncheckedCreateInput>
    /**
     * In case the Cabinet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CabinetUpdateInput, CabinetUncheckedUpdateInput>
  }

  /**
   * Cabinet delete
   */
  export type CabinetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    /**
     * Filter which Cabinet to delete.
     */
    where: CabinetWhereUniqueInput
  }

  /**
   * Cabinet deleteMany
   */
  export type CabinetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cabinets to delete
     */
    where?: CabinetWhereInput
    /**
     * Limit how many Cabinets to delete.
     */
    limit?: number
  }

  /**
   * Cabinet.images
   */
  export type Cabinet$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Cabinet.availabilities
   */
  export type Cabinet$availabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Cabinet.Reviews
   */
  export type Cabinet$ReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Cabinet.PricingServices
   */
  export type Cabinet$PricingServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Cabinet.nonPricingServices
   */
  export type Cabinet$nonPricingServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Cabinet without action
   */
  export type CabinetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
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
    cabinetId: number | null
    price: number | null
  }

  export type PricingServicesSumAggregateOutputType = {
    id: number | null
    cabinetId: number | null
    price: number | null
  }

  export type PricingServicesMinAggregateOutputType = {
    id: number | null
    cabinetId: number | null
    service_name: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PricingServicesMaxAggregateOutputType = {
    id: number | null
    cabinetId: number | null
    service_name: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PricingServicesCountAggregateOutputType = {
    id: number
    cabinetId: number
    service_name: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PricingServicesAvgAggregateInputType = {
    id?: true
    cabinetId?: true
    price?: true
  }

  export type PricingServicesSumAggregateInputType = {
    id?: true
    cabinetId?: true
    price?: true
  }

  export type PricingServicesMinAggregateInputType = {
    id?: true
    cabinetId?: true
    service_name?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PricingServicesMaxAggregateInputType = {
    id?: true
    cabinetId?: true
    service_name?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PricingServicesCountAggregateInputType = {
    id?: true
    cabinetId?: true
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
    cabinetId: number
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
    cabinetId?: boolean
    service_name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pricingServices"]>

  export type PricingServicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cabinetId?: boolean
    service_name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pricingServices"]>

  export type PricingServicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cabinetId?: boolean
    service_name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pricingServices"]>

  export type PricingServicesSelectScalar = {
    id?: boolean
    cabinetId?: boolean
    service_name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PricingServicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cabinetId" | "service_name" | "price" | "createdAt" | "updatedAt", ExtArgs["result"]["pricingServices"]>
  export type PricingServicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }
  export type PricingServicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }
  export type PricingServicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }

  export type $PricingServicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PricingServices"
    objects: {
      Cabinet: Prisma.$CabinetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cabinetId: number
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
    Cabinet<T extends CabinetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CabinetDefaultArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
    readonly cabinetId: FieldRef<"PricingServices", 'Int'>
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
    cabinetId: number | null
  }

  export type NonPricingServicesSumAggregateOutputType = {
    id: number | null
    cabinetId: number | null
  }

  export type NonPricingServicesMinAggregateOutputType = {
    id: number | null
    cabinetId: number | null
    service_name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NonPricingServicesMaxAggregateOutputType = {
    id: number | null
    cabinetId: number | null
    service_name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NonPricingServicesCountAggregateOutputType = {
    id: number
    cabinetId: number
    service_name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NonPricingServicesAvgAggregateInputType = {
    id?: true
    cabinetId?: true
  }

  export type NonPricingServicesSumAggregateInputType = {
    id?: true
    cabinetId?: true
  }

  export type NonPricingServicesMinAggregateInputType = {
    id?: true
    cabinetId?: true
    service_name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NonPricingServicesMaxAggregateInputType = {
    id?: true
    cabinetId?: true
    service_name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NonPricingServicesCountAggregateInputType = {
    id?: true
    cabinetId?: true
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
    cabinetId: number
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
    cabinetId?: boolean
    service_name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nonPricingServices"]>

  export type NonPricingServicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cabinetId?: boolean
    service_name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nonPricingServices"]>

  export type NonPricingServicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cabinetId?: boolean
    service_name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nonPricingServices"]>

  export type NonPricingServicesSelectScalar = {
    id?: boolean
    cabinetId?: boolean
    service_name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NonPricingServicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cabinetId" | "service_name" | "createdAt" | "updatedAt", ExtArgs["result"]["nonPricingServices"]>
  export type NonPricingServicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }
  export type NonPricingServicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }
  export type NonPricingServicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }

  export type $NonPricingServicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NonPricingServices"
    objects: {
      Cabinet: Prisma.$CabinetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cabinetId: number
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
    Cabinet<T extends CabinetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CabinetDefaultArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
    readonly cabinetId: FieldRef<"NonPricingServices", 'Int'>
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
    cabinetId: 'cabinetId',
    createdAt: 'createdAt',
    order: 'order',
    updatedAt: 'updatedAt'
  };

  export type ImagesScalarFieldEnum = (typeof ImagesScalarFieldEnum)[keyof typeof ImagesScalarFieldEnum]


  export const AvailabilitiesScalarFieldEnum: {
    id: 'id',
    cabinetId: 'cabinetId',
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
    cabinetId: 'cabinetId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const SpecialitiesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SpecialitiesScalarFieldEnum = (typeof SpecialitiesScalarFieldEnum)[keyof typeof SpecialitiesScalarFieldEnum]


  export const CabinetScalarFieldEnum: {
    id: 'id',
    title: 'title',
    specialityId: 'specialityId',
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
    type: 'type',
    daysOff: 'daysOff',
    reviewsCount: 'reviewsCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CabinetScalarFieldEnum = (typeof CabinetScalarFieldEnum)[keyof typeof CabinetScalarFieldEnum]


  export const PricingServicesScalarFieldEnum: {
    id: 'id',
    cabinetId: 'cabinetId',
    service_name: 'service_name',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PricingServicesScalarFieldEnum = (typeof PricingServicesScalarFieldEnum)[keyof typeof PricingServicesScalarFieldEnum]


  export const NonPricingServicesScalarFieldEnum: {
    id: 'id',
    cabinetId: 'cabinetId',
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
    cabinetId?: IntFilter<"Images"> | number
    createdAt?: DateTimeFilter<"Images"> | Date | string
    order?: IntFilter<"Images"> | number
    updatedAt?: DateTimeFilter<"Images"> | Date | string
    Cabinet?: XOR<CabinetScalarRelationFilter, CabinetWhereInput>
  }

  export type ImagesOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    order?: SortOrder
    updatedAt?: SortOrder
    Cabinet?: CabinetOrderByWithRelationInput
  }

  export type ImagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImagesWhereInput | ImagesWhereInput[]
    OR?: ImagesWhereInput[]
    NOT?: ImagesWhereInput | ImagesWhereInput[]
    url?: StringFilter<"Images"> | string
    cabinetId?: IntFilter<"Images"> | number
    createdAt?: DateTimeFilter<"Images"> | Date | string
    order?: IntFilter<"Images"> | number
    updatedAt?: DateTimeFilter<"Images"> | Date | string
    Cabinet?: XOR<CabinetScalarRelationFilter, CabinetWhereInput>
  }, "id">

  export type ImagesOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    order?: SortOrder
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
    cabinetId?: IntWithAggregatesFilter<"Images"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Images"> | Date | string
    order?: IntWithAggregatesFilter<"Images"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Images"> | Date | string
  }

  export type availabilitiesWhereInput = {
    AND?: availabilitiesWhereInput | availabilitiesWhereInput[]
    OR?: availabilitiesWhereInput[]
    NOT?: availabilitiesWhereInput | availabilitiesWhereInput[]
    id?: IntFilter<"availabilities"> | number
    cabinetId?: IntFilter<"availabilities"> | number
    start_date?: StringFilter<"availabilities"> | string
    end_date?: StringFilter<"availabilities"> | string
    createdAt?: DateTimeFilter<"availabilities"> | Date | string
    updatedAt?: DateTimeFilter<"availabilities"> | Date | string
    Cabinet?: XOR<CabinetScalarRelationFilter, CabinetWhereInput>
  }

  export type availabilitiesOrderByWithRelationInput = {
    id?: SortOrder
    cabinetId?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Cabinet?: CabinetOrderByWithRelationInput
  }

  export type availabilitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: availabilitiesWhereInput | availabilitiesWhereInput[]
    OR?: availabilitiesWhereInput[]
    NOT?: availabilitiesWhereInput | availabilitiesWhereInput[]
    cabinetId?: IntFilter<"availabilities"> | number
    start_date?: StringFilter<"availabilities"> | string
    end_date?: StringFilter<"availabilities"> | string
    createdAt?: DateTimeFilter<"availabilities"> | Date | string
    updatedAt?: DateTimeFilter<"availabilities"> | Date | string
    Cabinet?: XOR<CabinetScalarRelationFilter, CabinetWhereInput>
  }, "id">

  export type availabilitiesOrderByWithAggregationInput = {
    id?: SortOrder
    cabinetId?: SortOrder
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
    cabinetId?: IntWithAggregatesFilter<"availabilities"> | number
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
    cabinetId?: IntFilter<"Reviews"> | number
    createdAt?: DateTimeFilter<"Reviews"> | Date | string
    updatedAt?: DateTimeFilter<"Reviews"> | Date | string
    Cabinet?: XOR<CabinetScalarRelationFilter, CabinetWhereInput>
  }

  export type ReviewsOrderByWithRelationInput = {
    id?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Cabinet?: CabinetOrderByWithRelationInput
  }

  export type ReviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    comment?: StringFilter<"Reviews"> | string
    userId?: IntFilter<"Reviews"> | number
    cabinetId?: IntFilter<"Reviews"> | number
    createdAt?: DateTimeFilter<"Reviews"> | Date | string
    updatedAt?: DateTimeFilter<"Reviews"> | Date | string
    Cabinet?: XOR<CabinetScalarRelationFilter, CabinetWhereInput>
  }, "id">

  export type ReviewsOrderByWithAggregationInput = {
    id?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    cabinetId?: SortOrder
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
    cabinetId?: IntWithAggregatesFilter<"Reviews"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Reviews"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reviews"> | Date | string
  }

  export type specialitiesWhereInput = {
    AND?: specialitiesWhereInput | specialitiesWhereInput[]
    OR?: specialitiesWhereInput[]
    NOT?: specialitiesWhereInput | specialitiesWhereInput[]
    id?: IntFilter<"specialities"> | number
    name?: StringFilter<"specialities"> | string
    image?: StringFilter<"specialities"> | string
    createdAt?: DateTimeFilter<"specialities"> | Date | string
    updatedAt?: DateTimeFilter<"specialities"> | Date | string
    Cabinets?: CabinetListRelationFilter
  }

  export type specialitiesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Cabinets?: CabinetOrderByRelationAggregateInput
  }

  export type specialitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: specialitiesWhereInput | specialitiesWhereInput[]
    OR?: specialitiesWhereInput[]
    NOT?: specialitiesWhereInput | specialitiesWhereInput[]
    name?: StringFilter<"specialities"> | string
    image?: StringFilter<"specialities"> | string
    createdAt?: DateTimeFilter<"specialities"> | Date | string
    updatedAt?: DateTimeFilter<"specialities"> | Date | string
    Cabinets?: CabinetListRelationFilter
  }, "id">

  export type specialitiesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: specialitiesCountOrderByAggregateInput
    _avg?: specialitiesAvgOrderByAggregateInput
    _max?: specialitiesMaxOrderByAggregateInput
    _min?: specialitiesMinOrderByAggregateInput
    _sum?: specialitiesSumOrderByAggregateInput
  }

  export type specialitiesScalarWhereWithAggregatesInput = {
    AND?: specialitiesScalarWhereWithAggregatesInput | specialitiesScalarWhereWithAggregatesInput[]
    OR?: specialitiesScalarWhereWithAggregatesInput[]
    NOT?: specialitiesScalarWhereWithAggregatesInput | specialitiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"specialities"> | number
    name?: StringWithAggregatesFilter<"specialities"> | string
    image?: StringWithAggregatesFilter<"specialities"> | string
    createdAt?: DateTimeWithAggregatesFilter<"specialities"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"specialities"> | Date | string
  }

  export type CabinetWhereInput = {
    AND?: CabinetWhereInput | CabinetWhereInput[]
    OR?: CabinetWhereInput[]
    NOT?: CabinetWhereInput | CabinetWhereInput[]
    id?: IntFilter<"Cabinet"> | number
    title?: StringFilter<"Cabinet"> | string
    specialityId?: IntFilter<"Cabinet"> | number
    description?: StringFilter<"Cabinet"> | string
    address?: StringFilter<"Cabinet"> | string
    phone?: StringFilter<"Cabinet"> | string
    totalViews?: IntFilter<"Cabinet"> | number
    totalRate?: IntFilter<"Cabinet"> | number
    numberOfRates?: IntFilter<"Cabinet"> | number
    averageRate?: FloatFilter<"Cabinet"> | number
    ownerId?: IntFilter<"Cabinet"> | number
    year?: IntFilter<"Cabinet"> | number
    validated?: BoolFilter<"Cabinet"> | boolean
    blocked?: BoolFilter<"Cabinet"> | boolean
    rates?: JsonFilter<"Cabinet">
    openTime?: StringFilter<"Cabinet"> | string
    closeTime?: StringFilter<"Cabinet"> | string
    latitude?: StringFilter<"Cabinet"> | string
    longitude?: StringFilter<"Cabinet"> | string
    type?: StringFilter<"Cabinet"> | string
    daysOff?: IntNullableListFilter<"Cabinet">
    reviewsCount?: IntFilter<"Cabinet"> | number
    createdAt?: DateTimeFilter<"Cabinet"> | Date | string
    updatedAt?: DateTimeFilter<"Cabinet"> | Date | string
    images?: ImagesListRelationFilter
    availabilities?: AvailabilitiesListRelationFilter
    Reviews?: ReviewsListRelationFilter
    PricingServices?: PricingServicesListRelationFilter
    nonPricingServices?: NonPricingServicesListRelationFilter
    speciality?: XOR<SpecialitiesScalarRelationFilter, specialitiesWhereInput>
  }

  export type CabinetOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    specialityId?: SortOrder
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
    type?: SortOrder
    daysOff?: SortOrder
    reviewsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: ImagesOrderByRelationAggregateInput
    availabilities?: availabilitiesOrderByRelationAggregateInput
    Reviews?: ReviewsOrderByRelationAggregateInput
    PricingServices?: PricingServicesOrderByRelationAggregateInput
    nonPricingServices?: NonPricingServicesOrderByRelationAggregateInput
    speciality?: specialitiesOrderByWithRelationInput
  }

  export type CabinetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CabinetWhereInput | CabinetWhereInput[]
    OR?: CabinetWhereInput[]
    NOT?: CabinetWhereInput | CabinetWhereInput[]
    title?: StringFilter<"Cabinet"> | string
    specialityId?: IntFilter<"Cabinet"> | number
    description?: StringFilter<"Cabinet"> | string
    address?: StringFilter<"Cabinet"> | string
    phone?: StringFilter<"Cabinet"> | string
    totalViews?: IntFilter<"Cabinet"> | number
    totalRate?: IntFilter<"Cabinet"> | number
    numberOfRates?: IntFilter<"Cabinet"> | number
    averageRate?: FloatFilter<"Cabinet"> | number
    ownerId?: IntFilter<"Cabinet"> | number
    year?: IntFilter<"Cabinet"> | number
    validated?: BoolFilter<"Cabinet"> | boolean
    blocked?: BoolFilter<"Cabinet"> | boolean
    rates?: JsonFilter<"Cabinet">
    openTime?: StringFilter<"Cabinet"> | string
    closeTime?: StringFilter<"Cabinet"> | string
    latitude?: StringFilter<"Cabinet"> | string
    longitude?: StringFilter<"Cabinet"> | string
    type?: StringFilter<"Cabinet"> | string
    daysOff?: IntNullableListFilter<"Cabinet">
    reviewsCount?: IntFilter<"Cabinet"> | number
    createdAt?: DateTimeFilter<"Cabinet"> | Date | string
    updatedAt?: DateTimeFilter<"Cabinet"> | Date | string
    images?: ImagesListRelationFilter
    availabilities?: AvailabilitiesListRelationFilter
    Reviews?: ReviewsListRelationFilter
    PricingServices?: PricingServicesListRelationFilter
    nonPricingServices?: NonPricingServicesListRelationFilter
    speciality?: XOR<SpecialitiesScalarRelationFilter, specialitiesWhereInput>
  }, "id">

  export type CabinetOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    specialityId?: SortOrder
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
    type?: SortOrder
    daysOff?: SortOrder
    reviewsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CabinetCountOrderByAggregateInput
    _avg?: CabinetAvgOrderByAggregateInput
    _max?: CabinetMaxOrderByAggregateInput
    _min?: CabinetMinOrderByAggregateInput
    _sum?: CabinetSumOrderByAggregateInput
  }

  export type CabinetScalarWhereWithAggregatesInput = {
    AND?: CabinetScalarWhereWithAggregatesInput | CabinetScalarWhereWithAggregatesInput[]
    OR?: CabinetScalarWhereWithAggregatesInput[]
    NOT?: CabinetScalarWhereWithAggregatesInput | CabinetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cabinet"> | number
    title?: StringWithAggregatesFilter<"Cabinet"> | string
    specialityId?: IntWithAggregatesFilter<"Cabinet"> | number
    description?: StringWithAggregatesFilter<"Cabinet"> | string
    address?: StringWithAggregatesFilter<"Cabinet"> | string
    phone?: StringWithAggregatesFilter<"Cabinet"> | string
    totalViews?: IntWithAggregatesFilter<"Cabinet"> | number
    totalRate?: IntWithAggregatesFilter<"Cabinet"> | number
    numberOfRates?: IntWithAggregatesFilter<"Cabinet"> | number
    averageRate?: FloatWithAggregatesFilter<"Cabinet"> | number
    ownerId?: IntWithAggregatesFilter<"Cabinet"> | number
    year?: IntWithAggregatesFilter<"Cabinet"> | number
    validated?: BoolWithAggregatesFilter<"Cabinet"> | boolean
    blocked?: BoolWithAggregatesFilter<"Cabinet"> | boolean
    rates?: JsonWithAggregatesFilter<"Cabinet">
    openTime?: StringWithAggregatesFilter<"Cabinet"> | string
    closeTime?: StringWithAggregatesFilter<"Cabinet"> | string
    latitude?: StringWithAggregatesFilter<"Cabinet"> | string
    longitude?: StringWithAggregatesFilter<"Cabinet"> | string
    type?: StringWithAggregatesFilter<"Cabinet"> | string
    daysOff?: IntNullableListFilter<"Cabinet">
    reviewsCount?: IntWithAggregatesFilter<"Cabinet"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Cabinet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cabinet"> | Date | string
  }

  export type PricingServicesWhereInput = {
    AND?: PricingServicesWhereInput | PricingServicesWhereInput[]
    OR?: PricingServicesWhereInput[]
    NOT?: PricingServicesWhereInput | PricingServicesWhereInput[]
    id?: IntFilter<"PricingServices"> | number
    cabinetId?: IntFilter<"PricingServices"> | number
    service_name?: StringFilter<"PricingServices"> | string
    price?: FloatFilter<"PricingServices"> | number
    createdAt?: DateTimeFilter<"PricingServices"> | Date | string
    updatedAt?: DateTimeFilter<"PricingServices"> | Date | string
    Cabinet?: XOR<CabinetScalarRelationFilter, CabinetWhereInput>
  }

  export type PricingServicesOrderByWithRelationInput = {
    id?: SortOrder
    cabinetId?: SortOrder
    service_name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Cabinet?: CabinetOrderByWithRelationInput
  }

  export type PricingServicesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PricingServicesWhereInput | PricingServicesWhereInput[]
    OR?: PricingServicesWhereInput[]
    NOT?: PricingServicesWhereInput | PricingServicesWhereInput[]
    cabinetId?: IntFilter<"PricingServices"> | number
    service_name?: StringFilter<"PricingServices"> | string
    price?: FloatFilter<"PricingServices"> | number
    createdAt?: DateTimeFilter<"PricingServices"> | Date | string
    updatedAt?: DateTimeFilter<"PricingServices"> | Date | string
    Cabinet?: XOR<CabinetScalarRelationFilter, CabinetWhereInput>
  }, "id">

  export type PricingServicesOrderByWithAggregationInput = {
    id?: SortOrder
    cabinetId?: SortOrder
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
    cabinetId?: IntWithAggregatesFilter<"PricingServices"> | number
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
    cabinetId?: IntFilter<"NonPricingServices"> | number
    service_name?: StringFilter<"NonPricingServices"> | string
    createdAt?: DateTimeFilter<"NonPricingServices"> | Date | string
    updatedAt?: DateTimeFilter<"NonPricingServices"> | Date | string
    Cabinet?: XOR<CabinetScalarRelationFilter, CabinetWhereInput>
  }

  export type NonPricingServicesOrderByWithRelationInput = {
    id?: SortOrder
    cabinetId?: SortOrder
    service_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Cabinet?: CabinetOrderByWithRelationInput
  }

  export type NonPricingServicesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NonPricingServicesWhereInput | NonPricingServicesWhereInput[]
    OR?: NonPricingServicesWhereInput[]
    NOT?: NonPricingServicesWhereInput | NonPricingServicesWhereInput[]
    cabinetId?: IntFilter<"NonPricingServices"> | number
    service_name?: StringFilter<"NonPricingServices"> | string
    createdAt?: DateTimeFilter<"NonPricingServices"> | Date | string
    updatedAt?: DateTimeFilter<"NonPricingServices"> | Date | string
    Cabinet?: XOR<CabinetScalarRelationFilter, CabinetWhereInput>
  }, "id">

  export type NonPricingServicesOrderByWithAggregationInput = {
    id?: SortOrder
    cabinetId?: SortOrder
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
    cabinetId?: IntWithAggregatesFilter<"NonPricingServices"> | number
    service_name?: StringWithAggregatesFilter<"NonPricingServices"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NonPricingServices"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NonPricingServices"> | Date | string
  }

  export type ImagesCreateInput = {
    url: string
    createdAt?: Date | string
    order: number
    updatedAt?: Date | string
    Cabinet: CabinetCreateNestedOneWithoutImagesInput
  }

  export type ImagesUncheckedCreateInput = {
    id?: number
    url: string
    cabinetId: number
    createdAt?: Date | string
    order: number
    updatedAt?: Date | string
  }

  export type ImagesUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Cabinet?: CabinetUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    cabinetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesCreateManyInput = {
    id?: number
    url: string
    cabinetId: number
    createdAt?: Date | string
    order: number
    updatedAt?: Date | string
  }

  export type ImagesUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    cabinetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type availabilitiesCreateInput = {
    start_date: string
    end_date: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Cabinet: CabinetCreateNestedOneWithoutAvailabilitiesInput
  }

  export type availabilitiesUncheckedCreateInput = {
    id?: number
    cabinetId: number
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
    Cabinet?: CabinetUpdateOneRequiredWithoutAvailabilitiesNestedInput
  }

  export type availabilitiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cabinetId?: IntFieldUpdateOperationsInput | number
    start_date?: StringFieldUpdateOperationsInput | string
    end_date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type availabilitiesCreateManyInput = {
    id?: number
    cabinetId: number
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
    cabinetId?: IntFieldUpdateOperationsInput | number
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
    Cabinet: CabinetCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateInput = {
    id?: number
    comment: string
    userId: number
    cabinetId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewsUpdateInput = {
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Cabinet?: CabinetUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    cabinetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsCreateManyInput = {
    id?: number
    comment: string
    userId: number
    cabinetId: number
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
    cabinetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type specialitiesCreateInput = {
    name: string
    image?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Cabinets?: CabinetCreateNestedManyWithoutSpecialityInput
  }

  export type specialitiesUncheckedCreateInput = {
    id?: number
    name: string
    image?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Cabinets?: CabinetUncheckedCreateNestedManyWithoutSpecialityInput
  }

  export type specialitiesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Cabinets?: CabinetUpdateManyWithoutSpecialityNestedInput
  }

  export type specialitiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Cabinets?: CabinetUncheckedUpdateManyWithoutSpecialityNestedInput
  }

  export type specialitiesCreateManyInput = {
    id?: number
    name: string
    image?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type specialitiesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type specialitiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CabinetCreateInput = {
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
    type?: string
    daysOff?: CabinetCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesCreateNestedManyWithoutCabinetInput
    availabilities?: availabilitiesCreateNestedManyWithoutCabinetInput
    Reviews?: ReviewsCreateNestedManyWithoutCabinetInput
    PricingServices?: PricingServicesCreateNestedManyWithoutCabinetInput
    nonPricingServices?: NonPricingServicesCreateNestedManyWithoutCabinetInput
    speciality: specialitiesCreateNestedOneWithoutCabinetsInput
  }

  export type CabinetUncheckedCreateInput = {
    id?: number
    title: string
    specialityId: number
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
    type?: string
    daysOff?: CabinetCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesUncheckedCreateNestedManyWithoutCabinetInput
    availabilities?: availabilitiesUncheckedCreateNestedManyWithoutCabinetInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutCabinetInput
    PricingServices?: PricingServicesUncheckedCreateNestedManyWithoutCabinetInput
    nonPricingServices?: NonPricingServicesUncheckedCreateNestedManyWithoutCabinetInput
  }

  export type CabinetUpdateInput = {
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
    type?: StringFieldUpdateOperationsInput | string
    daysOff?: CabinetUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUpdateManyWithoutCabinetNestedInput
    availabilities?: availabilitiesUpdateManyWithoutCabinetNestedInput
    Reviews?: ReviewsUpdateManyWithoutCabinetNestedInput
    PricingServices?: PricingServicesUpdateManyWithoutCabinetNestedInput
    nonPricingServices?: NonPricingServicesUpdateManyWithoutCabinetNestedInput
    speciality?: specialitiesUpdateOneRequiredWithoutCabinetsNestedInput
  }

  export type CabinetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    specialityId?: IntFieldUpdateOperationsInput | number
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
    type?: StringFieldUpdateOperationsInput | string
    daysOff?: CabinetUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUncheckedUpdateManyWithoutCabinetNestedInput
    availabilities?: availabilitiesUncheckedUpdateManyWithoutCabinetNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutCabinetNestedInput
    PricingServices?: PricingServicesUncheckedUpdateManyWithoutCabinetNestedInput
    nonPricingServices?: NonPricingServicesUncheckedUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetCreateManyInput = {
    id?: number
    title: string
    specialityId: number
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
    type?: string
    daysOff?: CabinetCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CabinetUpdateManyMutationInput = {
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
    type?: StringFieldUpdateOperationsInput | string
    daysOff?: CabinetUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CabinetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    specialityId?: IntFieldUpdateOperationsInput | number
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
    type?: StringFieldUpdateOperationsInput | string
    daysOff?: CabinetUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingServicesCreateInput = {
    service_name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Cabinet: CabinetCreateNestedOneWithoutPricingServicesInput
  }

  export type PricingServicesUncheckedCreateInput = {
    id?: number
    cabinetId: number
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
    Cabinet?: CabinetUpdateOneRequiredWithoutPricingServicesNestedInput
  }

  export type PricingServicesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cabinetId?: IntFieldUpdateOperationsInput | number
    service_name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingServicesCreateManyInput = {
    id?: number
    cabinetId: number
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
    cabinetId?: IntFieldUpdateOperationsInput | number
    service_name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NonPricingServicesCreateInput = {
    service_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Cabinet: CabinetCreateNestedOneWithoutNonPricingServicesInput
  }

  export type NonPricingServicesUncheckedCreateInput = {
    id?: number
    cabinetId: number
    service_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NonPricingServicesUpdateInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Cabinet?: CabinetUpdateOneRequiredWithoutNonPricingServicesNestedInput
  }

  export type NonPricingServicesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cabinetId?: IntFieldUpdateOperationsInput | number
    service_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NonPricingServicesCreateManyInput = {
    id?: number
    cabinetId: number
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
    cabinetId?: IntFieldUpdateOperationsInput | number
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

  export type CabinetScalarRelationFilter = {
    is?: CabinetWhereInput
    isNot?: CabinetWhereInput
  }

  export type ImagesCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    order?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImagesAvgOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
    order?: SortOrder
  }

  export type ImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    order?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImagesMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    order?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImagesSumOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
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
    cabinetId?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type availabilitiesAvgOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
  }

  export type availabilitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type availabilitiesMinOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type availabilitiesSumOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
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
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cabinetId?: SortOrder
  }

  export type ReviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewsMinOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cabinetId?: SortOrder
  }

  export type CabinetListRelationFilter = {
    every?: CabinetWhereInput
    some?: CabinetWhereInput
    none?: CabinetWhereInput
  }

  export type CabinetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type specialitiesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type specialitiesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type specialitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type specialitiesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type specialitiesSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type SpecialitiesScalarRelationFilter = {
    is?: specialitiesWhereInput
    isNot?: specialitiesWhereInput
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

  export type CabinetCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    specialityId?: SortOrder
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
    type?: SortOrder
    daysOff?: SortOrder
    reviewsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CabinetAvgOrderByAggregateInput = {
    id?: SortOrder
    specialityId?: SortOrder
    totalViews?: SortOrder
    totalRate?: SortOrder
    numberOfRates?: SortOrder
    averageRate?: SortOrder
    ownerId?: SortOrder
    year?: SortOrder
    daysOff?: SortOrder
    reviewsCount?: SortOrder
  }

  export type CabinetMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    specialityId?: SortOrder
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

  export type CabinetMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    specialityId?: SortOrder
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

  export type CabinetSumOrderByAggregateInput = {
    id?: SortOrder
    specialityId?: SortOrder
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

  export type PricingServicesCountOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
    service_name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingServicesAvgOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
    price?: SortOrder
  }

  export type PricingServicesMaxOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
    service_name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingServicesMinOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
    service_name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingServicesSumOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
    price?: SortOrder
  }

  export type NonPricingServicesCountOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
    service_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NonPricingServicesAvgOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
  }

  export type NonPricingServicesMaxOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
    service_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NonPricingServicesMinOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
    service_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NonPricingServicesSumOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
  }

  export type CabinetCreateNestedOneWithoutImagesInput = {
    create?: XOR<CabinetCreateWithoutImagesInput, CabinetUncheckedCreateWithoutImagesInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutImagesInput
    connect?: CabinetWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CabinetUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<CabinetCreateWithoutImagesInput, CabinetUncheckedCreateWithoutImagesInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutImagesInput
    upsert?: CabinetUpsertWithoutImagesInput
    connect?: CabinetWhereUniqueInput
    update?: XOR<XOR<CabinetUpdateToOneWithWhereWithoutImagesInput, CabinetUpdateWithoutImagesInput>, CabinetUncheckedUpdateWithoutImagesInput>
  }

  export type CabinetCreateNestedOneWithoutAvailabilitiesInput = {
    create?: XOR<CabinetCreateWithoutAvailabilitiesInput, CabinetUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutAvailabilitiesInput
    connect?: CabinetWhereUniqueInput
  }

  export type CabinetUpdateOneRequiredWithoutAvailabilitiesNestedInput = {
    create?: XOR<CabinetCreateWithoutAvailabilitiesInput, CabinetUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutAvailabilitiesInput
    upsert?: CabinetUpsertWithoutAvailabilitiesInput
    connect?: CabinetWhereUniqueInput
    update?: XOR<XOR<CabinetUpdateToOneWithWhereWithoutAvailabilitiesInput, CabinetUpdateWithoutAvailabilitiesInput>, CabinetUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type CabinetCreateNestedOneWithoutReviewsInput = {
    create?: XOR<CabinetCreateWithoutReviewsInput, CabinetUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutReviewsInput
    connect?: CabinetWhereUniqueInput
  }

  export type CabinetUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<CabinetCreateWithoutReviewsInput, CabinetUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutReviewsInput
    upsert?: CabinetUpsertWithoutReviewsInput
    connect?: CabinetWhereUniqueInput
    update?: XOR<XOR<CabinetUpdateToOneWithWhereWithoutReviewsInput, CabinetUpdateWithoutReviewsInput>, CabinetUncheckedUpdateWithoutReviewsInput>
  }

  export type CabinetCreateNestedManyWithoutSpecialityInput = {
    create?: XOR<CabinetCreateWithoutSpecialityInput, CabinetUncheckedCreateWithoutSpecialityInput> | CabinetCreateWithoutSpecialityInput[] | CabinetUncheckedCreateWithoutSpecialityInput[]
    connectOrCreate?: CabinetCreateOrConnectWithoutSpecialityInput | CabinetCreateOrConnectWithoutSpecialityInput[]
    createMany?: CabinetCreateManySpecialityInputEnvelope
    connect?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
  }

  export type CabinetUncheckedCreateNestedManyWithoutSpecialityInput = {
    create?: XOR<CabinetCreateWithoutSpecialityInput, CabinetUncheckedCreateWithoutSpecialityInput> | CabinetCreateWithoutSpecialityInput[] | CabinetUncheckedCreateWithoutSpecialityInput[]
    connectOrCreate?: CabinetCreateOrConnectWithoutSpecialityInput | CabinetCreateOrConnectWithoutSpecialityInput[]
    createMany?: CabinetCreateManySpecialityInputEnvelope
    connect?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
  }

  export type CabinetUpdateManyWithoutSpecialityNestedInput = {
    create?: XOR<CabinetCreateWithoutSpecialityInput, CabinetUncheckedCreateWithoutSpecialityInput> | CabinetCreateWithoutSpecialityInput[] | CabinetUncheckedCreateWithoutSpecialityInput[]
    connectOrCreate?: CabinetCreateOrConnectWithoutSpecialityInput | CabinetCreateOrConnectWithoutSpecialityInput[]
    upsert?: CabinetUpsertWithWhereUniqueWithoutSpecialityInput | CabinetUpsertWithWhereUniqueWithoutSpecialityInput[]
    createMany?: CabinetCreateManySpecialityInputEnvelope
    set?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
    disconnect?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
    delete?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
    connect?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
    update?: CabinetUpdateWithWhereUniqueWithoutSpecialityInput | CabinetUpdateWithWhereUniqueWithoutSpecialityInput[]
    updateMany?: CabinetUpdateManyWithWhereWithoutSpecialityInput | CabinetUpdateManyWithWhereWithoutSpecialityInput[]
    deleteMany?: CabinetScalarWhereInput | CabinetScalarWhereInput[]
  }

  export type CabinetUncheckedUpdateManyWithoutSpecialityNestedInput = {
    create?: XOR<CabinetCreateWithoutSpecialityInput, CabinetUncheckedCreateWithoutSpecialityInput> | CabinetCreateWithoutSpecialityInput[] | CabinetUncheckedCreateWithoutSpecialityInput[]
    connectOrCreate?: CabinetCreateOrConnectWithoutSpecialityInput | CabinetCreateOrConnectWithoutSpecialityInput[]
    upsert?: CabinetUpsertWithWhereUniqueWithoutSpecialityInput | CabinetUpsertWithWhereUniqueWithoutSpecialityInput[]
    createMany?: CabinetCreateManySpecialityInputEnvelope
    set?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
    disconnect?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
    delete?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
    connect?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
    update?: CabinetUpdateWithWhereUniqueWithoutSpecialityInput | CabinetUpdateWithWhereUniqueWithoutSpecialityInput[]
    updateMany?: CabinetUpdateManyWithWhereWithoutSpecialityInput | CabinetUpdateManyWithWhereWithoutSpecialityInput[]
    deleteMany?: CabinetScalarWhereInput | CabinetScalarWhereInput[]
  }

  export type CabinetCreatedaysOffInput = {
    set: number[]
  }

  export type ImagesCreateNestedManyWithoutCabinetInput = {
    create?: XOR<ImagesCreateWithoutCabinetInput, ImagesUncheckedCreateWithoutCabinetInput> | ImagesCreateWithoutCabinetInput[] | ImagesUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutCabinetInput | ImagesCreateOrConnectWithoutCabinetInput[]
    createMany?: ImagesCreateManyCabinetInputEnvelope
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
  }

  export type availabilitiesCreateNestedManyWithoutCabinetInput = {
    create?: XOR<availabilitiesCreateWithoutCabinetInput, availabilitiesUncheckedCreateWithoutCabinetInput> | availabilitiesCreateWithoutCabinetInput[] | availabilitiesUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: availabilitiesCreateOrConnectWithoutCabinetInput | availabilitiesCreateOrConnectWithoutCabinetInput[]
    createMany?: availabilitiesCreateManyCabinetInputEnvelope
    connect?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutCabinetInput = {
    create?: XOR<ReviewsCreateWithoutCabinetInput, ReviewsUncheckedCreateWithoutCabinetInput> | ReviewsCreateWithoutCabinetInput[] | ReviewsUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutCabinetInput | ReviewsCreateOrConnectWithoutCabinetInput[]
    createMany?: ReviewsCreateManyCabinetInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type PricingServicesCreateNestedManyWithoutCabinetInput = {
    create?: XOR<PricingServicesCreateWithoutCabinetInput, PricingServicesUncheckedCreateWithoutCabinetInput> | PricingServicesCreateWithoutCabinetInput[] | PricingServicesUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: PricingServicesCreateOrConnectWithoutCabinetInput | PricingServicesCreateOrConnectWithoutCabinetInput[]
    createMany?: PricingServicesCreateManyCabinetInputEnvelope
    connect?: PricingServicesWhereUniqueInput | PricingServicesWhereUniqueInput[]
  }

  export type NonPricingServicesCreateNestedManyWithoutCabinetInput = {
    create?: XOR<NonPricingServicesCreateWithoutCabinetInput, NonPricingServicesUncheckedCreateWithoutCabinetInput> | NonPricingServicesCreateWithoutCabinetInput[] | NonPricingServicesUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: NonPricingServicesCreateOrConnectWithoutCabinetInput | NonPricingServicesCreateOrConnectWithoutCabinetInput[]
    createMany?: NonPricingServicesCreateManyCabinetInputEnvelope
    connect?: NonPricingServicesWhereUniqueInput | NonPricingServicesWhereUniqueInput[]
  }

  export type specialitiesCreateNestedOneWithoutCabinetsInput = {
    create?: XOR<specialitiesCreateWithoutCabinetsInput, specialitiesUncheckedCreateWithoutCabinetsInput>
    connectOrCreate?: specialitiesCreateOrConnectWithoutCabinetsInput
    connect?: specialitiesWhereUniqueInput
  }

  export type ImagesUncheckedCreateNestedManyWithoutCabinetInput = {
    create?: XOR<ImagesCreateWithoutCabinetInput, ImagesUncheckedCreateWithoutCabinetInput> | ImagesCreateWithoutCabinetInput[] | ImagesUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutCabinetInput | ImagesCreateOrConnectWithoutCabinetInput[]
    createMany?: ImagesCreateManyCabinetInputEnvelope
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
  }

  export type availabilitiesUncheckedCreateNestedManyWithoutCabinetInput = {
    create?: XOR<availabilitiesCreateWithoutCabinetInput, availabilitiesUncheckedCreateWithoutCabinetInput> | availabilitiesCreateWithoutCabinetInput[] | availabilitiesUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: availabilitiesCreateOrConnectWithoutCabinetInput | availabilitiesCreateOrConnectWithoutCabinetInput[]
    createMany?: availabilitiesCreateManyCabinetInputEnvelope
    connect?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutCabinetInput = {
    create?: XOR<ReviewsCreateWithoutCabinetInput, ReviewsUncheckedCreateWithoutCabinetInput> | ReviewsCreateWithoutCabinetInput[] | ReviewsUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutCabinetInput | ReviewsCreateOrConnectWithoutCabinetInput[]
    createMany?: ReviewsCreateManyCabinetInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type PricingServicesUncheckedCreateNestedManyWithoutCabinetInput = {
    create?: XOR<PricingServicesCreateWithoutCabinetInput, PricingServicesUncheckedCreateWithoutCabinetInput> | PricingServicesCreateWithoutCabinetInput[] | PricingServicesUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: PricingServicesCreateOrConnectWithoutCabinetInput | PricingServicesCreateOrConnectWithoutCabinetInput[]
    createMany?: PricingServicesCreateManyCabinetInputEnvelope
    connect?: PricingServicesWhereUniqueInput | PricingServicesWhereUniqueInput[]
  }

  export type NonPricingServicesUncheckedCreateNestedManyWithoutCabinetInput = {
    create?: XOR<NonPricingServicesCreateWithoutCabinetInput, NonPricingServicesUncheckedCreateWithoutCabinetInput> | NonPricingServicesCreateWithoutCabinetInput[] | NonPricingServicesUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: NonPricingServicesCreateOrConnectWithoutCabinetInput | NonPricingServicesCreateOrConnectWithoutCabinetInput[]
    createMany?: NonPricingServicesCreateManyCabinetInputEnvelope
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

  export type CabinetUpdatedaysOffInput = {
    set?: number[]
    push?: number | number[]
  }

  export type ImagesUpdateManyWithoutCabinetNestedInput = {
    create?: XOR<ImagesCreateWithoutCabinetInput, ImagesUncheckedCreateWithoutCabinetInput> | ImagesCreateWithoutCabinetInput[] | ImagesUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutCabinetInput | ImagesCreateOrConnectWithoutCabinetInput[]
    upsert?: ImagesUpsertWithWhereUniqueWithoutCabinetInput | ImagesUpsertWithWhereUniqueWithoutCabinetInput[]
    createMany?: ImagesCreateManyCabinetInputEnvelope
    set?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    disconnect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    delete?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    update?: ImagesUpdateWithWhereUniqueWithoutCabinetInput | ImagesUpdateWithWhereUniqueWithoutCabinetInput[]
    updateMany?: ImagesUpdateManyWithWhereWithoutCabinetInput | ImagesUpdateManyWithWhereWithoutCabinetInput[]
    deleteMany?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
  }

  export type availabilitiesUpdateManyWithoutCabinetNestedInput = {
    create?: XOR<availabilitiesCreateWithoutCabinetInput, availabilitiesUncheckedCreateWithoutCabinetInput> | availabilitiesCreateWithoutCabinetInput[] | availabilitiesUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: availabilitiesCreateOrConnectWithoutCabinetInput | availabilitiesCreateOrConnectWithoutCabinetInput[]
    upsert?: availabilitiesUpsertWithWhereUniqueWithoutCabinetInput | availabilitiesUpsertWithWhereUniqueWithoutCabinetInput[]
    createMany?: availabilitiesCreateManyCabinetInputEnvelope
    set?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
    disconnect?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
    delete?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
    connect?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
    update?: availabilitiesUpdateWithWhereUniqueWithoutCabinetInput | availabilitiesUpdateWithWhereUniqueWithoutCabinetInput[]
    updateMany?: availabilitiesUpdateManyWithWhereWithoutCabinetInput | availabilitiesUpdateManyWithWhereWithoutCabinetInput[]
    deleteMany?: availabilitiesScalarWhereInput | availabilitiesScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutCabinetNestedInput = {
    create?: XOR<ReviewsCreateWithoutCabinetInput, ReviewsUncheckedCreateWithoutCabinetInput> | ReviewsCreateWithoutCabinetInput[] | ReviewsUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutCabinetInput | ReviewsCreateOrConnectWithoutCabinetInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutCabinetInput | ReviewsUpsertWithWhereUniqueWithoutCabinetInput[]
    createMany?: ReviewsCreateManyCabinetInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutCabinetInput | ReviewsUpdateWithWhereUniqueWithoutCabinetInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutCabinetInput | ReviewsUpdateManyWithWhereWithoutCabinetInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type PricingServicesUpdateManyWithoutCabinetNestedInput = {
    create?: XOR<PricingServicesCreateWithoutCabinetInput, PricingServicesUncheckedCreateWithoutCabinetInput> | PricingServicesCreateWithoutCabinetInput[] | PricingServicesUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: PricingServicesCreateOrConnectWithoutCabinetInput | PricingServicesCreateOrConnectWithoutCabinetInput[]
    upsert?: PricingServicesUpsertWithWhereUniqueWithoutCabinetInput | PricingServicesUpsertWithWhereUniqueWithoutCabinetInput[]
    createMany?: PricingServicesCreateManyCabinetInputEnvelope
    set?: PricingServicesWhereUniqueInput | PricingServicesWhereUniqueInput[]
    disconnect?: PricingServicesWhereUniqueInput | PricingServicesWhereUniqueInput[]
    delete?: PricingServicesWhereUniqueInput | PricingServicesWhereUniqueInput[]
    connect?: PricingServicesWhereUniqueInput | PricingServicesWhereUniqueInput[]
    update?: PricingServicesUpdateWithWhereUniqueWithoutCabinetInput | PricingServicesUpdateWithWhereUniqueWithoutCabinetInput[]
    updateMany?: PricingServicesUpdateManyWithWhereWithoutCabinetInput | PricingServicesUpdateManyWithWhereWithoutCabinetInput[]
    deleteMany?: PricingServicesScalarWhereInput | PricingServicesScalarWhereInput[]
  }

  export type NonPricingServicesUpdateManyWithoutCabinetNestedInput = {
    create?: XOR<NonPricingServicesCreateWithoutCabinetInput, NonPricingServicesUncheckedCreateWithoutCabinetInput> | NonPricingServicesCreateWithoutCabinetInput[] | NonPricingServicesUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: NonPricingServicesCreateOrConnectWithoutCabinetInput | NonPricingServicesCreateOrConnectWithoutCabinetInput[]
    upsert?: NonPricingServicesUpsertWithWhereUniqueWithoutCabinetInput | NonPricingServicesUpsertWithWhereUniqueWithoutCabinetInput[]
    createMany?: NonPricingServicesCreateManyCabinetInputEnvelope
    set?: NonPricingServicesWhereUniqueInput | NonPricingServicesWhereUniqueInput[]
    disconnect?: NonPricingServicesWhereUniqueInput | NonPricingServicesWhereUniqueInput[]
    delete?: NonPricingServicesWhereUniqueInput | NonPricingServicesWhereUniqueInput[]
    connect?: NonPricingServicesWhereUniqueInput | NonPricingServicesWhereUniqueInput[]
    update?: NonPricingServicesUpdateWithWhereUniqueWithoutCabinetInput | NonPricingServicesUpdateWithWhereUniqueWithoutCabinetInput[]
    updateMany?: NonPricingServicesUpdateManyWithWhereWithoutCabinetInput | NonPricingServicesUpdateManyWithWhereWithoutCabinetInput[]
    deleteMany?: NonPricingServicesScalarWhereInput | NonPricingServicesScalarWhereInput[]
  }

  export type specialitiesUpdateOneRequiredWithoutCabinetsNestedInput = {
    create?: XOR<specialitiesCreateWithoutCabinetsInput, specialitiesUncheckedCreateWithoutCabinetsInput>
    connectOrCreate?: specialitiesCreateOrConnectWithoutCabinetsInput
    upsert?: specialitiesUpsertWithoutCabinetsInput
    connect?: specialitiesWhereUniqueInput
    update?: XOR<XOR<specialitiesUpdateToOneWithWhereWithoutCabinetsInput, specialitiesUpdateWithoutCabinetsInput>, specialitiesUncheckedUpdateWithoutCabinetsInput>
  }

  export type ImagesUncheckedUpdateManyWithoutCabinetNestedInput = {
    create?: XOR<ImagesCreateWithoutCabinetInput, ImagesUncheckedCreateWithoutCabinetInput> | ImagesCreateWithoutCabinetInput[] | ImagesUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutCabinetInput | ImagesCreateOrConnectWithoutCabinetInput[]
    upsert?: ImagesUpsertWithWhereUniqueWithoutCabinetInput | ImagesUpsertWithWhereUniqueWithoutCabinetInput[]
    createMany?: ImagesCreateManyCabinetInputEnvelope
    set?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    disconnect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    delete?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    update?: ImagesUpdateWithWhereUniqueWithoutCabinetInput | ImagesUpdateWithWhereUniqueWithoutCabinetInput[]
    updateMany?: ImagesUpdateManyWithWhereWithoutCabinetInput | ImagesUpdateManyWithWhereWithoutCabinetInput[]
    deleteMany?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
  }

  export type availabilitiesUncheckedUpdateManyWithoutCabinetNestedInput = {
    create?: XOR<availabilitiesCreateWithoutCabinetInput, availabilitiesUncheckedCreateWithoutCabinetInput> | availabilitiesCreateWithoutCabinetInput[] | availabilitiesUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: availabilitiesCreateOrConnectWithoutCabinetInput | availabilitiesCreateOrConnectWithoutCabinetInput[]
    upsert?: availabilitiesUpsertWithWhereUniqueWithoutCabinetInput | availabilitiesUpsertWithWhereUniqueWithoutCabinetInput[]
    createMany?: availabilitiesCreateManyCabinetInputEnvelope
    set?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
    disconnect?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
    delete?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
    connect?: availabilitiesWhereUniqueInput | availabilitiesWhereUniqueInput[]
    update?: availabilitiesUpdateWithWhereUniqueWithoutCabinetInput | availabilitiesUpdateWithWhereUniqueWithoutCabinetInput[]
    updateMany?: availabilitiesUpdateManyWithWhereWithoutCabinetInput | availabilitiesUpdateManyWithWhereWithoutCabinetInput[]
    deleteMany?: availabilitiesScalarWhereInput | availabilitiesScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutCabinetNestedInput = {
    create?: XOR<ReviewsCreateWithoutCabinetInput, ReviewsUncheckedCreateWithoutCabinetInput> | ReviewsCreateWithoutCabinetInput[] | ReviewsUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutCabinetInput | ReviewsCreateOrConnectWithoutCabinetInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutCabinetInput | ReviewsUpsertWithWhereUniqueWithoutCabinetInput[]
    createMany?: ReviewsCreateManyCabinetInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutCabinetInput | ReviewsUpdateWithWhereUniqueWithoutCabinetInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutCabinetInput | ReviewsUpdateManyWithWhereWithoutCabinetInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type PricingServicesUncheckedUpdateManyWithoutCabinetNestedInput = {
    create?: XOR<PricingServicesCreateWithoutCabinetInput, PricingServicesUncheckedCreateWithoutCabinetInput> | PricingServicesCreateWithoutCabinetInput[] | PricingServicesUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: PricingServicesCreateOrConnectWithoutCabinetInput | PricingServicesCreateOrConnectWithoutCabinetInput[]
    upsert?: PricingServicesUpsertWithWhereUniqueWithoutCabinetInput | PricingServicesUpsertWithWhereUniqueWithoutCabinetInput[]
    createMany?: PricingServicesCreateManyCabinetInputEnvelope
    set?: PricingServicesWhereUniqueInput | PricingServicesWhereUniqueInput[]
    disconnect?: PricingServicesWhereUniqueInput | PricingServicesWhereUniqueInput[]
    delete?: PricingServicesWhereUniqueInput | PricingServicesWhereUniqueInput[]
    connect?: PricingServicesWhereUniqueInput | PricingServicesWhereUniqueInput[]
    update?: PricingServicesUpdateWithWhereUniqueWithoutCabinetInput | PricingServicesUpdateWithWhereUniqueWithoutCabinetInput[]
    updateMany?: PricingServicesUpdateManyWithWhereWithoutCabinetInput | PricingServicesUpdateManyWithWhereWithoutCabinetInput[]
    deleteMany?: PricingServicesScalarWhereInput | PricingServicesScalarWhereInput[]
  }

  export type NonPricingServicesUncheckedUpdateManyWithoutCabinetNestedInput = {
    create?: XOR<NonPricingServicesCreateWithoutCabinetInput, NonPricingServicesUncheckedCreateWithoutCabinetInput> | NonPricingServicesCreateWithoutCabinetInput[] | NonPricingServicesUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: NonPricingServicesCreateOrConnectWithoutCabinetInput | NonPricingServicesCreateOrConnectWithoutCabinetInput[]
    upsert?: NonPricingServicesUpsertWithWhereUniqueWithoutCabinetInput | NonPricingServicesUpsertWithWhereUniqueWithoutCabinetInput[]
    createMany?: NonPricingServicesCreateManyCabinetInputEnvelope
    set?: NonPricingServicesWhereUniqueInput | NonPricingServicesWhereUniqueInput[]
    disconnect?: NonPricingServicesWhereUniqueInput | NonPricingServicesWhereUniqueInput[]
    delete?: NonPricingServicesWhereUniqueInput | NonPricingServicesWhereUniqueInput[]
    connect?: NonPricingServicesWhereUniqueInput | NonPricingServicesWhereUniqueInput[]
    update?: NonPricingServicesUpdateWithWhereUniqueWithoutCabinetInput | NonPricingServicesUpdateWithWhereUniqueWithoutCabinetInput[]
    updateMany?: NonPricingServicesUpdateManyWithWhereWithoutCabinetInput | NonPricingServicesUpdateManyWithWhereWithoutCabinetInput[]
    deleteMany?: NonPricingServicesScalarWhereInput | NonPricingServicesScalarWhereInput[]
  }

  export type CabinetCreateNestedOneWithoutPricingServicesInput = {
    create?: XOR<CabinetCreateWithoutPricingServicesInput, CabinetUncheckedCreateWithoutPricingServicesInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutPricingServicesInput
    connect?: CabinetWhereUniqueInput
  }

  export type CabinetUpdateOneRequiredWithoutPricingServicesNestedInput = {
    create?: XOR<CabinetCreateWithoutPricingServicesInput, CabinetUncheckedCreateWithoutPricingServicesInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutPricingServicesInput
    upsert?: CabinetUpsertWithoutPricingServicesInput
    connect?: CabinetWhereUniqueInput
    update?: XOR<XOR<CabinetUpdateToOneWithWhereWithoutPricingServicesInput, CabinetUpdateWithoutPricingServicesInput>, CabinetUncheckedUpdateWithoutPricingServicesInput>
  }

  export type CabinetCreateNestedOneWithoutNonPricingServicesInput = {
    create?: XOR<CabinetCreateWithoutNonPricingServicesInput, CabinetUncheckedCreateWithoutNonPricingServicesInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutNonPricingServicesInput
    connect?: CabinetWhereUniqueInput
  }

  export type CabinetUpdateOneRequiredWithoutNonPricingServicesNestedInput = {
    create?: XOR<CabinetCreateWithoutNonPricingServicesInput, CabinetUncheckedCreateWithoutNonPricingServicesInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutNonPricingServicesInput
    upsert?: CabinetUpsertWithoutNonPricingServicesInput
    connect?: CabinetWhereUniqueInput
    update?: XOR<XOR<CabinetUpdateToOneWithWhereWithoutNonPricingServicesInput, CabinetUpdateWithoutNonPricingServicesInput>, CabinetUncheckedUpdateWithoutNonPricingServicesInput>
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

  export type CabinetCreateWithoutImagesInput = {
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
    type?: string
    daysOff?: CabinetCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilities?: availabilitiesCreateNestedManyWithoutCabinetInput
    Reviews?: ReviewsCreateNestedManyWithoutCabinetInput
    PricingServices?: PricingServicesCreateNestedManyWithoutCabinetInput
    nonPricingServices?: NonPricingServicesCreateNestedManyWithoutCabinetInput
    speciality: specialitiesCreateNestedOneWithoutCabinetsInput
  }

  export type CabinetUncheckedCreateWithoutImagesInput = {
    id?: number
    title: string
    specialityId: number
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
    type?: string
    daysOff?: CabinetCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilities?: availabilitiesUncheckedCreateNestedManyWithoutCabinetInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutCabinetInput
    PricingServices?: PricingServicesUncheckedCreateNestedManyWithoutCabinetInput
    nonPricingServices?: NonPricingServicesUncheckedCreateNestedManyWithoutCabinetInput
  }

  export type CabinetCreateOrConnectWithoutImagesInput = {
    where: CabinetWhereUniqueInput
    create: XOR<CabinetCreateWithoutImagesInput, CabinetUncheckedCreateWithoutImagesInput>
  }

  export type CabinetUpsertWithoutImagesInput = {
    update: XOR<CabinetUpdateWithoutImagesInput, CabinetUncheckedUpdateWithoutImagesInput>
    create: XOR<CabinetCreateWithoutImagesInput, CabinetUncheckedCreateWithoutImagesInput>
    where?: CabinetWhereInput
  }

  export type CabinetUpdateToOneWithWhereWithoutImagesInput = {
    where?: CabinetWhereInput
    data: XOR<CabinetUpdateWithoutImagesInput, CabinetUncheckedUpdateWithoutImagesInput>
  }

  export type CabinetUpdateWithoutImagesInput = {
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
    type?: StringFieldUpdateOperationsInput | string
    daysOff?: CabinetUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: availabilitiesUpdateManyWithoutCabinetNestedInput
    Reviews?: ReviewsUpdateManyWithoutCabinetNestedInput
    PricingServices?: PricingServicesUpdateManyWithoutCabinetNestedInput
    nonPricingServices?: NonPricingServicesUpdateManyWithoutCabinetNestedInput
    speciality?: specialitiesUpdateOneRequiredWithoutCabinetsNestedInput
  }

  export type CabinetUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    specialityId?: IntFieldUpdateOperationsInput | number
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
    type?: StringFieldUpdateOperationsInput | string
    daysOff?: CabinetUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: availabilitiesUncheckedUpdateManyWithoutCabinetNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutCabinetNestedInput
    PricingServices?: PricingServicesUncheckedUpdateManyWithoutCabinetNestedInput
    nonPricingServices?: NonPricingServicesUncheckedUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetCreateWithoutAvailabilitiesInput = {
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
    type?: string
    daysOff?: CabinetCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesCreateNestedManyWithoutCabinetInput
    Reviews?: ReviewsCreateNestedManyWithoutCabinetInput
    PricingServices?: PricingServicesCreateNestedManyWithoutCabinetInput
    nonPricingServices?: NonPricingServicesCreateNestedManyWithoutCabinetInput
    speciality: specialitiesCreateNestedOneWithoutCabinetsInput
  }

  export type CabinetUncheckedCreateWithoutAvailabilitiesInput = {
    id?: number
    title: string
    specialityId: number
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
    type?: string
    daysOff?: CabinetCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesUncheckedCreateNestedManyWithoutCabinetInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutCabinetInput
    PricingServices?: PricingServicesUncheckedCreateNestedManyWithoutCabinetInput
    nonPricingServices?: NonPricingServicesUncheckedCreateNestedManyWithoutCabinetInput
  }

  export type CabinetCreateOrConnectWithoutAvailabilitiesInput = {
    where: CabinetWhereUniqueInput
    create: XOR<CabinetCreateWithoutAvailabilitiesInput, CabinetUncheckedCreateWithoutAvailabilitiesInput>
  }

  export type CabinetUpsertWithoutAvailabilitiesInput = {
    update: XOR<CabinetUpdateWithoutAvailabilitiesInput, CabinetUncheckedUpdateWithoutAvailabilitiesInput>
    create: XOR<CabinetCreateWithoutAvailabilitiesInput, CabinetUncheckedCreateWithoutAvailabilitiesInput>
    where?: CabinetWhereInput
  }

  export type CabinetUpdateToOneWithWhereWithoutAvailabilitiesInput = {
    where?: CabinetWhereInput
    data: XOR<CabinetUpdateWithoutAvailabilitiesInput, CabinetUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type CabinetUpdateWithoutAvailabilitiesInput = {
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
    type?: StringFieldUpdateOperationsInput | string
    daysOff?: CabinetUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUpdateManyWithoutCabinetNestedInput
    Reviews?: ReviewsUpdateManyWithoutCabinetNestedInput
    PricingServices?: PricingServicesUpdateManyWithoutCabinetNestedInput
    nonPricingServices?: NonPricingServicesUpdateManyWithoutCabinetNestedInput
    speciality?: specialitiesUpdateOneRequiredWithoutCabinetsNestedInput
  }

  export type CabinetUncheckedUpdateWithoutAvailabilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    specialityId?: IntFieldUpdateOperationsInput | number
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
    type?: StringFieldUpdateOperationsInput | string
    daysOff?: CabinetUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUncheckedUpdateManyWithoutCabinetNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutCabinetNestedInput
    PricingServices?: PricingServicesUncheckedUpdateManyWithoutCabinetNestedInput
    nonPricingServices?: NonPricingServicesUncheckedUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetCreateWithoutReviewsInput = {
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
    type?: string
    daysOff?: CabinetCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesCreateNestedManyWithoutCabinetInput
    availabilities?: availabilitiesCreateNestedManyWithoutCabinetInput
    PricingServices?: PricingServicesCreateNestedManyWithoutCabinetInput
    nonPricingServices?: NonPricingServicesCreateNestedManyWithoutCabinetInput
    speciality: specialitiesCreateNestedOneWithoutCabinetsInput
  }

  export type CabinetUncheckedCreateWithoutReviewsInput = {
    id?: number
    title: string
    specialityId: number
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
    type?: string
    daysOff?: CabinetCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesUncheckedCreateNestedManyWithoutCabinetInput
    availabilities?: availabilitiesUncheckedCreateNestedManyWithoutCabinetInput
    PricingServices?: PricingServicesUncheckedCreateNestedManyWithoutCabinetInput
    nonPricingServices?: NonPricingServicesUncheckedCreateNestedManyWithoutCabinetInput
  }

  export type CabinetCreateOrConnectWithoutReviewsInput = {
    where: CabinetWhereUniqueInput
    create: XOR<CabinetCreateWithoutReviewsInput, CabinetUncheckedCreateWithoutReviewsInput>
  }

  export type CabinetUpsertWithoutReviewsInput = {
    update: XOR<CabinetUpdateWithoutReviewsInput, CabinetUncheckedUpdateWithoutReviewsInput>
    create: XOR<CabinetCreateWithoutReviewsInput, CabinetUncheckedCreateWithoutReviewsInput>
    where?: CabinetWhereInput
  }

  export type CabinetUpdateToOneWithWhereWithoutReviewsInput = {
    where?: CabinetWhereInput
    data: XOR<CabinetUpdateWithoutReviewsInput, CabinetUncheckedUpdateWithoutReviewsInput>
  }

  export type CabinetUpdateWithoutReviewsInput = {
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
    type?: StringFieldUpdateOperationsInput | string
    daysOff?: CabinetUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUpdateManyWithoutCabinetNestedInput
    availabilities?: availabilitiesUpdateManyWithoutCabinetNestedInput
    PricingServices?: PricingServicesUpdateManyWithoutCabinetNestedInput
    nonPricingServices?: NonPricingServicesUpdateManyWithoutCabinetNestedInput
    speciality?: specialitiesUpdateOneRequiredWithoutCabinetsNestedInput
  }

  export type CabinetUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    specialityId?: IntFieldUpdateOperationsInput | number
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
    type?: StringFieldUpdateOperationsInput | string
    daysOff?: CabinetUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUncheckedUpdateManyWithoutCabinetNestedInput
    availabilities?: availabilitiesUncheckedUpdateManyWithoutCabinetNestedInput
    PricingServices?: PricingServicesUncheckedUpdateManyWithoutCabinetNestedInput
    nonPricingServices?: NonPricingServicesUncheckedUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetCreateWithoutSpecialityInput = {
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
    type?: string
    daysOff?: CabinetCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesCreateNestedManyWithoutCabinetInput
    availabilities?: availabilitiesCreateNestedManyWithoutCabinetInput
    Reviews?: ReviewsCreateNestedManyWithoutCabinetInput
    PricingServices?: PricingServicesCreateNestedManyWithoutCabinetInput
    nonPricingServices?: NonPricingServicesCreateNestedManyWithoutCabinetInput
  }

  export type CabinetUncheckedCreateWithoutSpecialityInput = {
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
    type?: string
    daysOff?: CabinetCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesUncheckedCreateNestedManyWithoutCabinetInput
    availabilities?: availabilitiesUncheckedCreateNestedManyWithoutCabinetInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutCabinetInput
    PricingServices?: PricingServicesUncheckedCreateNestedManyWithoutCabinetInput
    nonPricingServices?: NonPricingServicesUncheckedCreateNestedManyWithoutCabinetInput
  }

  export type CabinetCreateOrConnectWithoutSpecialityInput = {
    where: CabinetWhereUniqueInput
    create: XOR<CabinetCreateWithoutSpecialityInput, CabinetUncheckedCreateWithoutSpecialityInput>
  }

  export type CabinetCreateManySpecialityInputEnvelope = {
    data: CabinetCreateManySpecialityInput | CabinetCreateManySpecialityInput[]
    skipDuplicates?: boolean
  }

  export type CabinetUpsertWithWhereUniqueWithoutSpecialityInput = {
    where: CabinetWhereUniqueInput
    update: XOR<CabinetUpdateWithoutSpecialityInput, CabinetUncheckedUpdateWithoutSpecialityInput>
    create: XOR<CabinetCreateWithoutSpecialityInput, CabinetUncheckedCreateWithoutSpecialityInput>
  }

  export type CabinetUpdateWithWhereUniqueWithoutSpecialityInput = {
    where: CabinetWhereUniqueInput
    data: XOR<CabinetUpdateWithoutSpecialityInput, CabinetUncheckedUpdateWithoutSpecialityInput>
  }

  export type CabinetUpdateManyWithWhereWithoutSpecialityInput = {
    where: CabinetScalarWhereInput
    data: XOR<CabinetUpdateManyMutationInput, CabinetUncheckedUpdateManyWithoutSpecialityInput>
  }

  export type CabinetScalarWhereInput = {
    AND?: CabinetScalarWhereInput | CabinetScalarWhereInput[]
    OR?: CabinetScalarWhereInput[]
    NOT?: CabinetScalarWhereInput | CabinetScalarWhereInput[]
    id?: IntFilter<"Cabinet"> | number
    title?: StringFilter<"Cabinet"> | string
    specialityId?: IntFilter<"Cabinet"> | number
    description?: StringFilter<"Cabinet"> | string
    address?: StringFilter<"Cabinet"> | string
    phone?: StringFilter<"Cabinet"> | string
    totalViews?: IntFilter<"Cabinet"> | number
    totalRate?: IntFilter<"Cabinet"> | number
    numberOfRates?: IntFilter<"Cabinet"> | number
    averageRate?: FloatFilter<"Cabinet"> | number
    ownerId?: IntFilter<"Cabinet"> | number
    year?: IntFilter<"Cabinet"> | number
    validated?: BoolFilter<"Cabinet"> | boolean
    blocked?: BoolFilter<"Cabinet"> | boolean
    rates?: JsonFilter<"Cabinet">
    openTime?: StringFilter<"Cabinet"> | string
    closeTime?: StringFilter<"Cabinet"> | string
    latitude?: StringFilter<"Cabinet"> | string
    longitude?: StringFilter<"Cabinet"> | string
    type?: StringFilter<"Cabinet"> | string
    daysOff?: IntNullableListFilter<"Cabinet">
    reviewsCount?: IntFilter<"Cabinet"> | number
    createdAt?: DateTimeFilter<"Cabinet"> | Date | string
    updatedAt?: DateTimeFilter<"Cabinet"> | Date | string
  }

  export type ImagesCreateWithoutCabinetInput = {
    url: string
    createdAt?: Date | string
    order: number
    updatedAt?: Date | string
  }

  export type ImagesUncheckedCreateWithoutCabinetInput = {
    id?: number
    url: string
    createdAt?: Date | string
    order: number
    updatedAt?: Date | string
  }

  export type ImagesCreateOrConnectWithoutCabinetInput = {
    where: ImagesWhereUniqueInput
    create: XOR<ImagesCreateWithoutCabinetInput, ImagesUncheckedCreateWithoutCabinetInput>
  }

  export type ImagesCreateManyCabinetInputEnvelope = {
    data: ImagesCreateManyCabinetInput | ImagesCreateManyCabinetInput[]
    skipDuplicates?: boolean
  }

  export type availabilitiesCreateWithoutCabinetInput = {
    start_date: string
    end_date: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type availabilitiesUncheckedCreateWithoutCabinetInput = {
    id?: number
    start_date: string
    end_date: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type availabilitiesCreateOrConnectWithoutCabinetInput = {
    where: availabilitiesWhereUniqueInput
    create: XOR<availabilitiesCreateWithoutCabinetInput, availabilitiesUncheckedCreateWithoutCabinetInput>
  }

  export type availabilitiesCreateManyCabinetInputEnvelope = {
    data: availabilitiesCreateManyCabinetInput | availabilitiesCreateManyCabinetInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutCabinetInput = {
    comment: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewsUncheckedCreateWithoutCabinetInput = {
    id?: number
    comment: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewsCreateOrConnectWithoutCabinetInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutCabinetInput, ReviewsUncheckedCreateWithoutCabinetInput>
  }

  export type ReviewsCreateManyCabinetInputEnvelope = {
    data: ReviewsCreateManyCabinetInput | ReviewsCreateManyCabinetInput[]
    skipDuplicates?: boolean
  }

  export type PricingServicesCreateWithoutCabinetInput = {
    service_name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingServicesUncheckedCreateWithoutCabinetInput = {
    id?: number
    service_name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingServicesCreateOrConnectWithoutCabinetInput = {
    where: PricingServicesWhereUniqueInput
    create: XOR<PricingServicesCreateWithoutCabinetInput, PricingServicesUncheckedCreateWithoutCabinetInput>
  }

  export type PricingServicesCreateManyCabinetInputEnvelope = {
    data: PricingServicesCreateManyCabinetInput | PricingServicesCreateManyCabinetInput[]
    skipDuplicates?: boolean
  }

  export type NonPricingServicesCreateWithoutCabinetInput = {
    service_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NonPricingServicesUncheckedCreateWithoutCabinetInput = {
    id?: number
    service_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NonPricingServicesCreateOrConnectWithoutCabinetInput = {
    where: NonPricingServicesWhereUniqueInput
    create: XOR<NonPricingServicesCreateWithoutCabinetInput, NonPricingServicesUncheckedCreateWithoutCabinetInput>
  }

  export type NonPricingServicesCreateManyCabinetInputEnvelope = {
    data: NonPricingServicesCreateManyCabinetInput | NonPricingServicesCreateManyCabinetInput[]
    skipDuplicates?: boolean
  }

  export type specialitiesCreateWithoutCabinetsInput = {
    name: string
    image?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type specialitiesUncheckedCreateWithoutCabinetsInput = {
    id?: number
    name: string
    image?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type specialitiesCreateOrConnectWithoutCabinetsInput = {
    where: specialitiesWhereUniqueInput
    create: XOR<specialitiesCreateWithoutCabinetsInput, specialitiesUncheckedCreateWithoutCabinetsInput>
  }

  export type ImagesUpsertWithWhereUniqueWithoutCabinetInput = {
    where: ImagesWhereUniqueInput
    update: XOR<ImagesUpdateWithoutCabinetInput, ImagesUncheckedUpdateWithoutCabinetInput>
    create: XOR<ImagesCreateWithoutCabinetInput, ImagesUncheckedCreateWithoutCabinetInput>
  }

  export type ImagesUpdateWithWhereUniqueWithoutCabinetInput = {
    where: ImagesWhereUniqueInput
    data: XOR<ImagesUpdateWithoutCabinetInput, ImagesUncheckedUpdateWithoutCabinetInput>
  }

  export type ImagesUpdateManyWithWhereWithoutCabinetInput = {
    where: ImagesScalarWhereInput
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyWithoutCabinetInput>
  }

  export type ImagesScalarWhereInput = {
    AND?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
    OR?: ImagesScalarWhereInput[]
    NOT?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
    id?: IntFilter<"Images"> | number
    url?: StringFilter<"Images"> | string
    cabinetId?: IntFilter<"Images"> | number
    createdAt?: DateTimeFilter<"Images"> | Date | string
    order?: IntFilter<"Images"> | number
    updatedAt?: DateTimeFilter<"Images"> | Date | string
  }

  export type availabilitiesUpsertWithWhereUniqueWithoutCabinetInput = {
    where: availabilitiesWhereUniqueInput
    update: XOR<availabilitiesUpdateWithoutCabinetInput, availabilitiesUncheckedUpdateWithoutCabinetInput>
    create: XOR<availabilitiesCreateWithoutCabinetInput, availabilitiesUncheckedCreateWithoutCabinetInput>
  }

  export type availabilitiesUpdateWithWhereUniqueWithoutCabinetInput = {
    where: availabilitiesWhereUniqueInput
    data: XOR<availabilitiesUpdateWithoutCabinetInput, availabilitiesUncheckedUpdateWithoutCabinetInput>
  }

  export type availabilitiesUpdateManyWithWhereWithoutCabinetInput = {
    where: availabilitiesScalarWhereInput
    data: XOR<availabilitiesUpdateManyMutationInput, availabilitiesUncheckedUpdateManyWithoutCabinetInput>
  }

  export type availabilitiesScalarWhereInput = {
    AND?: availabilitiesScalarWhereInput | availabilitiesScalarWhereInput[]
    OR?: availabilitiesScalarWhereInput[]
    NOT?: availabilitiesScalarWhereInput | availabilitiesScalarWhereInput[]
    id?: IntFilter<"availabilities"> | number
    cabinetId?: IntFilter<"availabilities"> | number
    start_date?: StringFilter<"availabilities"> | string
    end_date?: StringFilter<"availabilities"> | string
    createdAt?: DateTimeFilter<"availabilities"> | Date | string
    updatedAt?: DateTimeFilter<"availabilities"> | Date | string
  }

  export type ReviewsUpsertWithWhereUniqueWithoutCabinetInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutCabinetInput, ReviewsUncheckedUpdateWithoutCabinetInput>
    create: XOR<ReviewsCreateWithoutCabinetInput, ReviewsUncheckedCreateWithoutCabinetInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutCabinetInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutCabinetInput, ReviewsUncheckedUpdateWithoutCabinetInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutCabinetInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutCabinetInput>
  }

  export type ReviewsScalarWhereInput = {
    AND?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    OR?: ReviewsScalarWhereInput[]
    NOT?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    id?: IntFilter<"Reviews"> | number
    comment?: StringFilter<"Reviews"> | string
    userId?: IntFilter<"Reviews"> | number
    cabinetId?: IntFilter<"Reviews"> | number
    createdAt?: DateTimeFilter<"Reviews"> | Date | string
    updatedAt?: DateTimeFilter<"Reviews"> | Date | string
  }

  export type PricingServicesUpsertWithWhereUniqueWithoutCabinetInput = {
    where: PricingServicesWhereUniqueInput
    update: XOR<PricingServicesUpdateWithoutCabinetInput, PricingServicesUncheckedUpdateWithoutCabinetInput>
    create: XOR<PricingServicesCreateWithoutCabinetInput, PricingServicesUncheckedCreateWithoutCabinetInput>
  }

  export type PricingServicesUpdateWithWhereUniqueWithoutCabinetInput = {
    where: PricingServicesWhereUniqueInput
    data: XOR<PricingServicesUpdateWithoutCabinetInput, PricingServicesUncheckedUpdateWithoutCabinetInput>
  }

  export type PricingServicesUpdateManyWithWhereWithoutCabinetInput = {
    where: PricingServicesScalarWhereInput
    data: XOR<PricingServicesUpdateManyMutationInput, PricingServicesUncheckedUpdateManyWithoutCabinetInput>
  }

  export type PricingServicesScalarWhereInput = {
    AND?: PricingServicesScalarWhereInput | PricingServicesScalarWhereInput[]
    OR?: PricingServicesScalarWhereInput[]
    NOT?: PricingServicesScalarWhereInput | PricingServicesScalarWhereInput[]
    id?: IntFilter<"PricingServices"> | number
    cabinetId?: IntFilter<"PricingServices"> | number
    service_name?: StringFilter<"PricingServices"> | string
    price?: FloatFilter<"PricingServices"> | number
    createdAt?: DateTimeFilter<"PricingServices"> | Date | string
    updatedAt?: DateTimeFilter<"PricingServices"> | Date | string
  }

  export type NonPricingServicesUpsertWithWhereUniqueWithoutCabinetInput = {
    where: NonPricingServicesWhereUniqueInput
    update: XOR<NonPricingServicesUpdateWithoutCabinetInput, NonPricingServicesUncheckedUpdateWithoutCabinetInput>
    create: XOR<NonPricingServicesCreateWithoutCabinetInput, NonPricingServicesUncheckedCreateWithoutCabinetInput>
  }

  export type NonPricingServicesUpdateWithWhereUniqueWithoutCabinetInput = {
    where: NonPricingServicesWhereUniqueInput
    data: XOR<NonPricingServicesUpdateWithoutCabinetInput, NonPricingServicesUncheckedUpdateWithoutCabinetInput>
  }

  export type NonPricingServicesUpdateManyWithWhereWithoutCabinetInput = {
    where: NonPricingServicesScalarWhereInput
    data: XOR<NonPricingServicesUpdateManyMutationInput, NonPricingServicesUncheckedUpdateManyWithoutCabinetInput>
  }

  export type NonPricingServicesScalarWhereInput = {
    AND?: NonPricingServicesScalarWhereInput | NonPricingServicesScalarWhereInput[]
    OR?: NonPricingServicesScalarWhereInput[]
    NOT?: NonPricingServicesScalarWhereInput | NonPricingServicesScalarWhereInput[]
    id?: IntFilter<"NonPricingServices"> | number
    cabinetId?: IntFilter<"NonPricingServices"> | number
    service_name?: StringFilter<"NonPricingServices"> | string
    createdAt?: DateTimeFilter<"NonPricingServices"> | Date | string
    updatedAt?: DateTimeFilter<"NonPricingServices"> | Date | string
  }

  export type specialitiesUpsertWithoutCabinetsInput = {
    update: XOR<specialitiesUpdateWithoutCabinetsInput, specialitiesUncheckedUpdateWithoutCabinetsInput>
    create: XOR<specialitiesCreateWithoutCabinetsInput, specialitiesUncheckedCreateWithoutCabinetsInput>
    where?: specialitiesWhereInput
  }

  export type specialitiesUpdateToOneWithWhereWithoutCabinetsInput = {
    where?: specialitiesWhereInput
    data: XOR<specialitiesUpdateWithoutCabinetsInput, specialitiesUncheckedUpdateWithoutCabinetsInput>
  }

  export type specialitiesUpdateWithoutCabinetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type specialitiesUncheckedUpdateWithoutCabinetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CabinetCreateWithoutPricingServicesInput = {
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
    type?: string
    daysOff?: CabinetCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesCreateNestedManyWithoutCabinetInput
    availabilities?: availabilitiesCreateNestedManyWithoutCabinetInput
    Reviews?: ReviewsCreateNestedManyWithoutCabinetInput
    nonPricingServices?: NonPricingServicesCreateNestedManyWithoutCabinetInput
    speciality: specialitiesCreateNestedOneWithoutCabinetsInput
  }

  export type CabinetUncheckedCreateWithoutPricingServicesInput = {
    id?: number
    title: string
    specialityId: number
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
    type?: string
    daysOff?: CabinetCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesUncheckedCreateNestedManyWithoutCabinetInput
    availabilities?: availabilitiesUncheckedCreateNestedManyWithoutCabinetInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutCabinetInput
    nonPricingServices?: NonPricingServicesUncheckedCreateNestedManyWithoutCabinetInput
  }

  export type CabinetCreateOrConnectWithoutPricingServicesInput = {
    where: CabinetWhereUniqueInput
    create: XOR<CabinetCreateWithoutPricingServicesInput, CabinetUncheckedCreateWithoutPricingServicesInput>
  }

  export type CabinetUpsertWithoutPricingServicesInput = {
    update: XOR<CabinetUpdateWithoutPricingServicesInput, CabinetUncheckedUpdateWithoutPricingServicesInput>
    create: XOR<CabinetCreateWithoutPricingServicesInput, CabinetUncheckedCreateWithoutPricingServicesInput>
    where?: CabinetWhereInput
  }

  export type CabinetUpdateToOneWithWhereWithoutPricingServicesInput = {
    where?: CabinetWhereInput
    data: XOR<CabinetUpdateWithoutPricingServicesInput, CabinetUncheckedUpdateWithoutPricingServicesInput>
  }

  export type CabinetUpdateWithoutPricingServicesInput = {
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
    type?: StringFieldUpdateOperationsInput | string
    daysOff?: CabinetUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUpdateManyWithoutCabinetNestedInput
    availabilities?: availabilitiesUpdateManyWithoutCabinetNestedInput
    Reviews?: ReviewsUpdateManyWithoutCabinetNestedInput
    nonPricingServices?: NonPricingServicesUpdateManyWithoutCabinetNestedInput
    speciality?: specialitiesUpdateOneRequiredWithoutCabinetsNestedInput
  }

  export type CabinetUncheckedUpdateWithoutPricingServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    specialityId?: IntFieldUpdateOperationsInput | number
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
    type?: StringFieldUpdateOperationsInput | string
    daysOff?: CabinetUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUncheckedUpdateManyWithoutCabinetNestedInput
    availabilities?: availabilitiesUncheckedUpdateManyWithoutCabinetNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutCabinetNestedInput
    nonPricingServices?: NonPricingServicesUncheckedUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetCreateWithoutNonPricingServicesInput = {
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
    type?: string
    daysOff?: CabinetCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesCreateNestedManyWithoutCabinetInput
    availabilities?: availabilitiesCreateNestedManyWithoutCabinetInput
    Reviews?: ReviewsCreateNestedManyWithoutCabinetInput
    PricingServices?: PricingServicesCreateNestedManyWithoutCabinetInput
    speciality: specialitiesCreateNestedOneWithoutCabinetsInput
  }

  export type CabinetUncheckedCreateWithoutNonPricingServicesInput = {
    id?: number
    title: string
    specialityId: number
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
    type?: string
    daysOff?: CabinetCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesUncheckedCreateNestedManyWithoutCabinetInput
    availabilities?: availabilitiesUncheckedCreateNestedManyWithoutCabinetInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutCabinetInput
    PricingServices?: PricingServicesUncheckedCreateNestedManyWithoutCabinetInput
  }

  export type CabinetCreateOrConnectWithoutNonPricingServicesInput = {
    where: CabinetWhereUniqueInput
    create: XOR<CabinetCreateWithoutNonPricingServicesInput, CabinetUncheckedCreateWithoutNonPricingServicesInput>
  }

  export type CabinetUpsertWithoutNonPricingServicesInput = {
    update: XOR<CabinetUpdateWithoutNonPricingServicesInput, CabinetUncheckedUpdateWithoutNonPricingServicesInput>
    create: XOR<CabinetCreateWithoutNonPricingServicesInput, CabinetUncheckedCreateWithoutNonPricingServicesInput>
    where?: CabinetWhereInput
  }

  export type CabinetUpdateToOneWithWhereWithoutNonPricingServicesInput = {
    where?: CabinetWhereInput
    data: XOR<CabinetUpdateWithoutNonPricingServicesInput, CabinetUncheckedUpdateWithoutNonPricingServicesInput>
  }

  export type CabinetUpdateWithoutNonPricingServicesInput = {
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
    type?: StringFieldUpdateOperationsInput | string
    daysOff?: CabinetUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUpdateManyWithoutCabinetNestedInput
    availabilities?: availabilitiesUpdateManyWithoutCabinetNestedInput
    Reviews?: ReviewsUpdateManyWithoutCabinetNestedInput
    PricingServices?: PricingServicesUpdateManyWithoutCabinetNestedInput
    speciality?: specialitiesUpdateOneRequiredWithoutCabinetsNestedInput
  }

  export type CabinetUncheckedUpdateWithoutNonPricingServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    specialityId?: IntFieldUpdateOperationsInput | number
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
    type?: StringFieldUpdateOperationsInput | string
    daysOff?: CabinetUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUncheckedUpdateManyWithoutCabinetNestedInput
    availabilities?: availabilitiesUncheckedUpdateManyWithoutCabinetNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutCabinetNestedInput
    PricingServices?: PricingServicesUncheckedUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetCreateManySpecialityInput = {
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
    type?: string
    daysOff?: CabinetCreatedaysOffInput | number[]
    reviewsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CabinetUpdateWithoutSpecialityInput = {
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
    type?: StringFieldUpdateOperationsInput | string
    daysOff?: CabinetUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUpdateManyWithoutCabinetNestedInput
    availabilities?: availabilitiesUpdateManyWithoutCabinetNestedInput
    Reviews?: ReviewsUpdateManyWithoutCabinetNestedInput
    PricingServices?: PricingServicesUpdateManyWithoutCabinetNestedInput
    nonPricingServices?: NonPricingServicesUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetUncheckedUpdateWithoutSpecialityInput = {
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
    type?: StringFieldUpdateOperationsInput | string
    daysOff?: CabinetUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUncheckedUpdateManyWithoutCabinetNestedInput
    availabilities?: availabilitiesUncheckedUpdateManyWithoutCabinetNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutCabinetNestedInput
    PricingServices?: PricingServicesUncheckedUpdateManyWithoutCabinetNestedInput
    nonPricingServices?: NonPricingServicesUncheckedUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetUncheckedUpdateManyWithoutSpecialityInput = {
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
    type?: StringFieldUpdateOperationsInput | string
    daysOff?: CabinetUpdatedaysOffInput | number[]
    reviewsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesCreateManyCabinetInput = {
    id?: number
    url: string
    createdAt?: Date | string
    order: number
    updatedAt?: Date | string
  }

  export type availabilitiesCreateManyCabinetInput = {
    id?: number
    start_date: string
    end_date: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewsCreateManyCabinetInput = {
    id?: number
    comment: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingServicesCreateManyCabinetInput = {
    id?: number
    service_name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NonPricingServicesCreateManyCabinetInput = {
    id?: number
    service_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesUpdateWithoutCabinetInput = {
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesUncheckedUpdateWithoutCabinetInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesUncheckedUpdateManyWithoutCabinetInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type availabilitiesUpdateWithoutCabinetInput = {
    start_date?: StringFieldUpdateOperationsInput | string
    end_date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type availabilitiesUncheckedUpdateWithoutCabinetInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_date?: StringFieldUpdateOperationsInput | string
    end_date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type availabilitiesUncheckedUpdateManyWithoutCabinetInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_date?: StringFieldUpdateOperationsInput | string
    end_date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUpdateWithoutCabinetInput = {
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateWithoutCabinetInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyWithoutCabinetInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingServicesUpdateWithoutCabinetInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingServicesUncheckedUpdateWithoutCabinetInput = {
    id?: IntFieldUpdateOperationsInput | number
    service_name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingServicesUncheckedUpdateManyWithoutCabinetInput = {
    id?: IntFieldUpdateOperationsInput | number
    service_name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NonPricingServicesUpdateWithoutCabinetInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NonPricingServicesUncheckedUpdateWithoutCabinetInput = {
    id?: IntFieldUpdateOperationsInput | number
    service_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NonPricingServicesUncheckedUpdateManyWithoutCabinetInput = {
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