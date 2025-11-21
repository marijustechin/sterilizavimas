
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Instrument
 * 
 */
export type Instrument = $Result.DefaultSelection<Prisma.$InstrumentPayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model Sterilizer
 * 
 */
export type Sterilizer = $Result.DefaultSelection<Prisma.$SterilizerPayload>
/**
 * Model Jwt
 * 
 */
export type Jwt = $Result.DefaultSelection<Prisma.$JwtPayload>
/**
 * Model SterilizationCycle
 * 
 */
export type SterilizationCycle = $Result.DefaultSelection<Prisma.$SterilizationCyclePayload>
/**
 * Model SterilizationCycleItem
 * 
 */
export type SterilizationCycleItem = $Result.DefaultSelection<Prisma.$SterilizationCycleItemPayload>
/**
 * Model InstrumentUsage
 * 
 */
export type InstrumentUsage = $Result.DefaultSelection<Prisma.$InstrumentUsagePayload>
/**
 * Model Printer
 * 
 */
export type Printer = $Result.DefaultSelection<Prisma.$PrinterPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DocStatus: {
  nepatvirtintas: 'nepatvirtintas',
  patvirtintas: 'patvirtintas',
  atšauktas: 'atšauktas',
  panaikintas: 'panaikintas'
};

export type DocStatus = (typeof DocStatus)[keyof typeof DocStatus]

}

export type DocStatus = $Enums.DocStatus

export const DocStatus: typeof $Enums.DocStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Instruments
 * const instruments = await prisma.instrument.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Instruments
   * const instruments = await prisma.instrument.findMany()
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
   * `prisma.instrument`: Exposes CRUD operations for the **Instrument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instruments
    * const instruments = await prisma.instrument.findMany()
    * ```
    */
  get instrument(): Prisma.InstrumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sterilizer`: Exposes CRUD operations for the **Sterilizer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sterilizers
    * const sterilizers = await prisma.sterilizer.findMany()
    * ```
    */
  get sterilizer(): Prisma.SterilizerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jwt`: Exposes CRUD operations for the **Jwt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jwts
    * const jwts = await prisma.jwt.findMany()
    * ```
    */
  get jwt(): Prisma.JwtDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sterilizationCycle`: Exposes CRUD operations for the **SterilizationCycle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SterilizationCycles
    * const sterilizationCycles = await prisma.sterilizationCycle.findMany()
    * ```
    */
  get sterilizationCycle(): Prisma.SterilizationCycleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sterilizationCycleItem`: Exposes CRUD operations for the **SterilizationCycleItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SterilizationCycleItems
    * const sterilizationCycleItems = await prisma.sterilizationCycleItem.findMany()
    * ```
    */
  get sterilizationCycleItem(): Prisma.SterilizationCycleItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instrumentUsage`: Exposes CRUD operations for the **InstrumentUsage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InstrumentUsages
    * const instrumentUsages = await prisma.instrumentUsage.findMany()
    * ```
    */
  get instrumentUsage(): Prisma.InstrumentUsageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.printer`: Exposes CRUD operations for the **Printer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Printers
    * const printers = await prisma.printer.findMany()
    * ```
    */
  get printer(): Prisma.PrinterDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.0
   * Query Engine version: 0c19ccc313cf9911a90d99d2ac2eb0280c76c513
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Instrument: 'Instrument',
    Department: 'Department',
    Sterilizer: 'Sterilizer',
    Jwt: 'Jwt',
    SterilizationCycle: 'SterilizationCycle',
    SterilizationCycleItem: 'SterilizationCycleItem',
    InstrumentUsage: 'InstrumentUsage',
    Printer: 'Printer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "instrument" | "department" | "sterilizer" | "jwt" | "sterilizationCycle" | "sterilizationCycleItem" | "instrumentUsage" | "printer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Instrument: {
        payload: Prisma.$InstrumentPayload<ExtArgs>
        fields: Prisma.InstrumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstrumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstrumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          findFirst: {
            args: Prisma.InstrumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstrumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          findMany: {
            args: Prisma.InstrumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>[]
          }
          create: {
            args: Prisma.InstrumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          createMany: {
            args: Prisma.InstrumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InstrumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          update: {
            args: Prisma.InstrumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          deleteMany: {
            args: Prisma.InstrumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstrumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InstrumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          aggregate: {
            args: Prisma.InstrumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstrument>
          }
          groupBy: {
            args: Prisma.InstrumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstrumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstrumentCountArgs<ExtArgs>
            result: $Utils.Optional<InstrumentCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      Sterilizer: {
        payload: Prisma.$SterilizerPayload<ExtArgs>
        fields: Prisma.SterilizerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SterilizerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilizerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SterilizerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilizerPayload>
          }
          findFirst: {
            args: Prisma.SterilizerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilizerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SterilizerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilizerPayload>
          }
          findMany: {
            args: Prisma.SterilizerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilizerPayload>[]
          }
          create: {
            args: Prisma.SterilizerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilizerPayload>
          }
          createMany: {
            args: Prisma.SterilizerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SterilizerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilizerPayload>
          }
          update: {
            args: Prisma.SterilizerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilizerPayload>
          }
          deleteMany: {
            args: Prisma.SterilizerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SterilizerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SterilizerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilizerPayload>
          }
          aggregate: {
            args: Prisma.SterilizerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSterilizer>
          }
          groupBy: {
            args: Prisma.SterilizerGroupByArgs<ExtArgs>
            result: $Utils.Optional<SterilizerGroupByOutputType>[]
          }
          count: {
            args: Prisma.SterilizerCountArgs<ExtArgs>
            result: $Utils.Optional<SterilizerCountAggregateOutputType> | number
          }
        }
      }
      Jwt: {
        payload: Prisma.$JwtPayload<ExtArgs>
        fields: Prisma.JwtFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JwtFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JwtFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtPayload>
          }
          findFirst: {
            args: Prisma.JwtFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JwtFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtPayload>
          }
          findMany: {
            args: Prisma.JwtFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtPayload>[]
          }
          create: {
            args: Prisma.JwtCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtPayload>
          }
          createMany: {
            args: Prisma.JwtCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JwtDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtPayload>
          }
          update: {
            args: Prisma.JwtUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtPayload>
          }
          deleteMany: {
            args: Prisma.JwtDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JwtUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JwtUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtPayload>
          }
          aggregate: {
            args: Prisma.JwtAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJwt>
          }
          groupBy: {
            args: Prisma.JwtGroupByArgs<ExtArgs>
            result: $Utils.Optional<JwtGroupByOutputType>[]
          }
          count: {
            args: Prisma.JwtCountArgs<ExtArgs>
            result: $Utils.Optional<JwtCountAggregateOutputType> | number
          }
        }
      }
      SterilizationCycle: {
        payload: Prisma.$SterilizationCyclePayload<ExtArgs>
        fields: Prisma.SterilizationCycleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SterilizationCycleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilizationCyclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SterilizationCycleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilizationCyclePayload>
          }
          findFirst: {
            args: Prisma.SterilizationCycleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilizationCyclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SterilizationCycleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilizationCyclePayload>
          }
          findMany: {
            args: Prisma.SterilizationCycleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilizationCyclePayload>[]
          }
          create: {
            args: Prisma.SterilizationCycleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilizationCyclePayload>
          }
          createMany: {
            args: Prisma.SterilizationCycleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SterilizationCycleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilizationCyclePayload>
          }
          update: {
            args: Prisma.SterilizationCycleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilizationCyclePayload>
          }
          deleteMany: {
            args: Prisma.SterilizationCycleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SterilizationCycleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SterilizationCycleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilizationCyclePayload>
          }
          aggregate: {
            args: Prisma.SterilizationCycleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSterilizationCycle>
          }
          groupBy: {
            args: Prisma.SterilizationCycleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SterilizationCycleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SterilizationCycleCountArgs<ExtArgs>
            result: $Utils.Optional<SterilizationCycleCountAggregateOutputType> | number
          }
        }
      }
      SterilizationCycleItem: {
        payload: Prisma.$SterilizationCycleItemPayload<ExtArgs>
        fields: Prisma.SterilizationCycleItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SterilizationCycleItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilizationCycleItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SterilizationCycleItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilizationCycleItemPayload>
          }
          findFirst: {
            args: Prisma.SterilizationCycleItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilizationCycleItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SterilizationCycleItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilizationCycleItemPayload>
          }
          findMany: {
            args: Prisma.SterilizationCycleItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilizationCycleItemPayload>[]
          }
          create: {
            args: Prisma.SterilizationCycleItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilizationCycleItemPayload>
          }
          createMany: {
            args: Prisma.SterilizationCycleItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SterilizationCycleItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilizationCycleItemPayload>
          }
          update: {
            args: Prisma.SterilizationCycleItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilizationCycleItemPayload>
          }
          deleteMany: {
            args: Prisma.SterilizationCycleItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SterilizationCycleItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SterilizationCycleItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilizationCycleItemPayload>
          }
          aggregate: {
            args: Prisma.SterilizationCycleItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSterilizationCycleItem>
          }
          groupBy: {
            args: Prisma.SterilizationCycleItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SterilizationCycleItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.SterilizationCycleItemCountArgs<ExtArgs>
            result: $Utils.Optional<SterilizationCycleItemCountAggregateOutputType> | number
          }
        }
      }
      InstrumentUsage: {
        payload: Prisma.$InstrumentUsagePayload<ExtArgs>
        fields: Prisma.InstrumentUsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstrumentUsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentUsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstrumentUsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentUsagePayload>
          }
          findFirst: {
            args: Prisma.InstrumentUsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentUsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstrumentUsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentUsagePayload>
          }
          findMany: {
            args: Prisma.InstrumentUsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentUsagePayload>[]
          }
          create: {
            args: Prisma.InstrumentUsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentUsagePayload>
          }
          createMany: {
            args: Prisma.InstrumentUsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InstrumentUsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentUsagePayload>
          }
          update: {
            args: Prisma.InstrumentUsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentUsagePayload>
          }
          deleteMany: {
            args: Prisma.InstrumentUsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstrumentUsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InstrumentUsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentUsagePayload>
          }
          aggregate: {
            args: Prisma.InstrumentUsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstrumentUsage>
          }
          groupBy: {
            args: Prisma.InstrumentUsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstrumentUsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstrumentUsageCountArgs<ExtArgs>
            result: $Utils.Optional<InstrumentUsageCountAggregateOutputType> | number
          }
        }
      }
      Printer: {
        payload: Prisma.$PrinterPayload<ExtArgs>
        fields: Prisma.PrinterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrinterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrinterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>
          }
          findFirst: {
            args: Prisma.PrinterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrinterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>
          }
          findMany: {
            args: Prisma.PrinterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>[]
          }
          create: {
            args: Prisma.PrinterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>
          }
          createMany: {
            args: Prisma.PrinterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PrinterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>
          }
          update: {
            args: Prisma.PrinterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>
          }
          deleteMany: {
            args: Prisma.PrinterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrinterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PrinterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>
          }
          aggregate: {
            args: Prisma.PrinterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrinter>
          }
          groupBy: {
            args: Prisma.PrinterGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrinterGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrinterCountArgs<ExtArgs>
            result: $Utils.Optional<PrinterCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    instrument?: InstrumentOmit
    department?: DepartmentOmit
    sterilizer?: SterilizerOmit
    jwt?: JwtOmit
    sterilizationCycle?: SterilizationCycleOmit
    sterilizationCycleItem?: SterilizationCycleItemOmit
    instrumentUsage?: InstrumentUsageOmit
    printer?: PrinterOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type InstrumentCountOutputType
   */

  export type InstrumentCountOutputType = {
    items: number
  }

  export type InstrumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | InstrumentCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * InstrumentCountOutputType without action
   */
  export type InstrumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentCountOutputType
     */
    select?: InstrumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstrumentCountOutputType without action
   */
  export type InstrumentCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SterilizationCycleItemWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    items: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | DepartmentCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SterilizationCycleItemWhereInput
  }


  /**
   * Count Type SterilizerCountOutputType
   */

  export type SterilizerCountOutputType = {
    cycles: number
  }

  export type SterilizerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cycles?: boolean | SterilizerCountOutputTypeCountCyclesArgs
  }

  // Custom InputTypes
  /**
   * SterilizerCountOutputType without action
   */
  export type SterilizerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilizerCountOutputType
     */
    select?: SterilizerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SterilizerCountOutputType without action
   */
  export type SterilizerCountOutputTypeCountCyclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SterilizationCycleWhereInput
  }


  /**
   * Count Type SterilizationCycleCountOutputType
   */

  export type SterilizationCycleCountOutputType = {
    items: number
  }

  export type SterilizationCycleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | SterilizationCycleCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * SterilizationCycleCountOutputType without action
   */
  export type SterilizationCycleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilizationCycleCountOutputType
     */
    select?: SterilizationCycleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SterilizationCycleCountOutputType without action
   */
  export type SterilizationCycleCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SterilizationCycleItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Instrument
   */

  export type AggregateInstrument = {
    _count: InstrumentCountAggregateOutputType | null
    _avg: InstrumentAvgAggregateOutputType | null
    _sum: InstrumentSumAggregateOutputType | null
    _min: InstrumentMinAggregateOutputType | null
    _max: InstrumentMaxAggregateOutputType | null
  }

  export type InstrumentAvgAggregateOutputType = {
    id: number | null
    instrument_code: number | null
    instrument_exp: number | null
  }

  export type InstrumentSumAggregateOutputType = {
    id: number | null
    instrument_code: number | null
    instrument_exp: number | null
  }

  export type InstrumentMinAggregateOutputType = {
    id: number | null
    instrument_name: string | null
    instrument_code: number | null
    instrument_exp: number | null
  }

  export type InstrumentMaxAggregateOutputType = {
    id: number | null
    instrument_name: string | null
    instrument_code: number | null
    instrument_exp: number | null
  }

  export type InstrumentCountAggregateOutputType = {
    id: number
    instrument_name: number
    instrument_code: number
    instrument_exp: number
    _all: number
  }


  export type InstrumentAvgAggregateInputType = {
    id?: true
    instrument_code?: true
    instrument_exp?: true
  }

  export type InstrumentSumAggregateInputType = {
    id?: true
    instrument_code?: true
    instrument_exp?: true
  }

  export type InstrumentMinAggregateInputType = {
    id?: true
    instrument_name?: true
    instrument_code?: true
    instrument_exp?: true
  }

  export type InstrumentMaxAggregateInputType = {
    id?: true
    instrument_name?: true
    instrument_code?: true
    instrument_exp?: true
  }

  export type InstrumentCountAggregateInputType = {
    id?: true
    instrument_name?: true
    instrument_code?: true
    instrument_exp?: true
    _all?: true
  }

  export type InstrumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instrument to aggregate.
     */
    where?: InstrumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instruments to fetch.
     */
    orderBy?: InstrumentOrderByWithRelationInput | InstrumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstrumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instruments
    **/
    _count?: true | InstrumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstrumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstrumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstrumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstrumentMaxAggregateInputType
  }

  export type GetInstrumentAggregateType<T extends InstrumentAggregateArgs> = {
        [P in keyof T & keyof AggregateInstrument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstrument[P]>
      : GetScalarType<T[P], AggregateInstrument[P]>
  }




  export type InstrumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstrumentWhereInput
    orderBy?: InstrumentOrderByWithAggregationInput | InstrumentOrderByWithAggregationInput[]
    by: InstrumentScalarFieldEnum[] | InstrumentScalarFieldEnum
    having?: InstrumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstrumentCountAggregateInputType | true
    _avg?: InstrumentAvgAggregateInputType
    _sum?: InstrumentSumAggregateInputType
    _min?: InstrumentMinAggregateInputType
    _max?: InstrumentMaxAggregateInputType
  }

  export type InstrumentGroupByOutputType = {
    id: number
    instrument_name: string
    instrument_code: number
    instrument_exp: number
    _count: InstrumentCountAggregateOutputType | null
    _avg: InstrumentAvgAggregateOutputType | null
    _sum: InstrumentSumAggregateOutputType | null
    _min: InstrumentMinAggregateOutputType | null
    _max: InstrumentMaxAggregateOutputType | null
  }

  type GetInstrumentGroupByPayload<T extends InstrumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstrumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstrumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstrumentGroupByOutputType[P]>
            : GetScalarType<T[P], InstrumentGroupByOutputType[P]>
        }
      >
    >


  export type InstrumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instrument_name?: boolean
    instrument_code?: boolean
    instrument_exp?: boolean
    items?: boolean | Instrument$itemsArgs<ExtArgs>
    _count?: boolean | InstrumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instrument"]>



  export type InstrumentSelectScalar = {
    id?: boolean
    instrument_name?: boolean
    instrument_code?: boolean
    instrument_exp?: boolean
  }

  export type InstrumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "instrument_name" | "instrument_code" | "instrument_exp", ExtArgs["result"]["instrument"]>
  export type InstrumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Instrument$itemsArgs<ExtArgs>
    _count?: boolean | InstrumentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $InstrumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instrument"
    objects: {
      items: Prisma.$SterilizationCycleItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      instrument_name: string
      instrument_code: number
      instrument_exp: number
    }, ExtArgs["result"]["instrument"]>
    composites: {}
  }

  type InstrumentGetPayload<S extends boolean | null | undefined | InstrumentDefaultArgs> = $Result.GetResult<Prisma.$InstrumentPayload, S>

  type InstrumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstrumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstrumentCountAggregateInputType | true
    }

  export interface InstrumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instrument'], meta: { name: 'Instrument' } }
    /**
     * Find zero or one Instrument that matches the filter.
     * @param {InstrumentFindUniqueArgs} args - Arguments to find a Instrument
     * @example
     * // Get one Instrument
     * const instrument = await prisma.instrument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstrumentFindUniqueArgs>(args: SelectSubset<T, InstrumentFindUniqueArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instrument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstrumentFindUniqueOrThrowArgs} args - Arguments to find a Instrument
     * @example
     * // Get one Instrument
     * const instrument = await prisma.instrument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstrumentFindUniqueOrThrowArgs>(args: SelectSubset<T, InstrumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instrument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentFindFirstArgs} args - Arguments to find a Instrument
     * @example
     * // Get one Instrument
     * const instrument = await prisma.instrument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstrumentFindFirstArgs>(args?: SelectSubset<T, InstrumentFindFirstArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instrument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentFindFirstOrThrowArgs} args - Arguments to find a Instrument
     * @example
     * // Get one Instrument
     * const instrument = await prisma.instrument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstrumentFindFirstOrThrowArgs>(args?: SelectSubset<T, InstrumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instruments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instruments
     * const instruments = await prisma.instrument.findMany()
     * 
     * // Get first 10 Instruments
     * const instruments = await prisma.instrument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instrumentWithIdOnly = await prisma.instrument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstrumentFindManyArgs>(args?: SelectSubset<T, InstrumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instrument.
     * @param {InstrumentCreateArgs} args - Arguments to create a Instrument.
     * @example
     * // Create one Instrument
     * const Instrument = await prisma.instrument.create({
     *   data: {
     *     // ... data to create a Instrument
     *   }
     * })
     * 
     */
    create<T extends InstrumentCreateArgs>(args: SelectSubset<T, InstrumentCreateArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instruments.
     * @param {InstrumentCreateManyArgs} args - Arguments to create many Instruments.
     * @example
     * // Create many Instruments
     * const instrument = await prisma.instrument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstrumentCreateManyArgs>(args?: SelectSubset<T, InstrumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Instrument.
     * @param {InstrumentDeleteArgs} args - Arguments to delete one Instrument.
     * @example
     * // Delete one Instrument
     * const Instrument = await prisma.instrument.delete({
     *   where: {
     *     // ... filter to delete one Instrument
     *   }
     * })
     * 
     */
    delete<T extends InstrumentDeleteArgs>(args: SelectSubset<T, InstrumentDeleteArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instrument.
     * @param {InstrumentUpdateArgs} args - Arguments to update one Instrument.
     * @example
     * // Update one Instrument
     * const instrument = await prisma.instrument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstrumentUpdateArgs>(args: SelectSubset<T, InstrumentUpdateArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instruments.
     * @param {InstrumentDeleteManyArgs} args - Arguments to filter Instruments to delete.
     * @example
     * // Delete a few Instruments
     * const { count } = await prisma.instrument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstrumentDeleteManyArgs>(args?: SelectSubset<T, InstrumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instruments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instruments
     * const instrument = await prisma.instrument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstrumentUpdateManyArgs>(args: SelectSubset<T, InstrumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Instrument.
     * @param {InstrumentUpsertArgs} args - Arguments to update or create a Instrument.
     * @example
     * // Update or create a Instrument
     * const instrument = await prisma.instrument.upsert({
     *   create: {
     *     // ... data to create a Instrument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instrument we want to update
     *   }
     * })
     */
    upsert<T extends InstrumentUpsertArgs>(args: SelectSubset<T, InstrumentUpsertArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instruments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentCountArgs} args - Arguments to filter Instruments to count.
     * @example
     * // Count the number of Instruments
     * const count = await prisma.instrument.count({
     *   where: {
     *     // ... the filter for the Instruments we want to count
     *   }
     * })
    **/
    count<T extends InstrumentCountArgs>(
      args?: Subset<T, InstrumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstrumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instrument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstrumentAggregateArgs>(args: Subset<T, InstrumentAggregateArgs>): Prisma.PrismaPromise<GetInstrumentAggregateType<T>>

    /**
     * Group by Instrument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentGroupByArgs} args - Group by arguments.
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
      T extends InstrumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstrumentGroupByArgs['orderBy'] }
        : { orderBy?: InstrumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstrumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstrumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instrument model
   */
  readonly fields: InstrumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instrument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstrumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends Instrument$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Instrument$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SterilizationCycleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Instrument model
   */
  interface InstrumentFieldRefs {
    readonly id: FieldRef<"Instrument", 'Int'>
    readonly instrument_name: FieldRef<"Instrument", 'String'>
    readonly instrument_code: FieldRef<"Instrument", 'Int'>
    readonly instrument_exp: FieldRef<"Instrument", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Instrument findUnique
   */
  export type InstrumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter, which Instrument to fetch.
     */
    where: InstrumentWhereUniqueInput
  }

  /**
   * Instrument findUniqueOrThrow
   */
  export type InstrumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter, which Instrument to fetch.
     */
    where: InstrumentWhereUniqueInput
  }

  /**
   * Instrument findFirst
   */
  export type InstrumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter, which Instrument to fetch.
     */
    where?: InstrumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instruments to fetch.
     */
    orderBy?: InstrumentOrderByWithRelationInput | InstrumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instruments.
     */
    cursor?: InstrumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instruments.
     */
    distinct?: InstrumentScalarFieldEnum | InstrumentScalarFieldEnum[]
  }

  /**
   * Instrument findFirstOrThrow
   */
  export type InstrumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter, which Instrument to fetch.
     */
    where?: InstrumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instruments to fetch.
     */
    orderBy?: InstrumentOrderByWithRelationInput | InstrumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instruments.
     */
    cursor?: InstrumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instruments.
     */
    distinct?: InstrumentScalarFieldEnum | InstrumentScalarFieldEnum[]
  }

  /**
   * Instrument findMany
   */
  export type InstrumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter, which Instruments to fetch.
     */
    where?: InstrumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instruments to fetch.
     */
    orderBy?: InstrumentOrderByWithRelationInput | InstrumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instruments.
     */
    cursor?: InstrumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instruments.
     */
    skip?: number
    distinct?: InstrumentScalarFieldEnum | InstrumentScalarFieldEnum[]
  }

  /**
   * Instrument create
   */
  export type InstrumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Instrument.
     */
    data: XOR<InstrumentCreateInput, InstrumentUncheckedCreateInput>
  }

  /**
   * Instrument createMany
   */
  export type InstrumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instruments.
     */
    data: InstrumentCreateManyInput | InstrumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instrument update
   */
  export type InstrumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Instrument.
     */
    data: XOR<InstrumentUpdateInput, InstrumentUncheckedUpdateInput>
    /**
     * Choose, which Instrument to update.
     */
    where: InstrumentWhereUniqueInput
  }

  /**
   * Instrument updateMany
   */
  export type InstrumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instruments.
     */
    data: XOR<InstrumentUpdateManyMutationInput, InstrumentUncheckedUpdateManyInput>
    /**
     * Filter which Instruments to update
     */
    where?: InstrumentWhereInput
    /**
     * Limit how many Instruments to update.
     */
    limit?: number
  }

  /**
   * Instrument upsert
   */
  export type InstrumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Instrument to update in case it exists.
     */
    where: InstrumentWhereUniqueInput
    /**
     * In case the Instrument found by the `where` argument doesn't exist, create a new Instrument with this data.
     */
    create: XOR<InstrumentCreateInput, InstrumentUncheckedCreateInput>
    /**
     * In case the Instrument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstrumentUpdateInput, InstrumentUncheckedUpdateInput>
  }

  /**
   * Instrument delete
   */
  export type InstrumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter which Instrument to delete.
     */
    where: InstrumentWhereUniqueInput
  }

  /**
   * Instrument deleteMany
   */
  export type InstrumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instruments to delete
     */
    where?: InstrumentWhereInput
    /**
     * Limit how many Instruments to delete.
     */
    limit?: number
  }

  /**
   * Instrument.items
   */
  export type Instrument$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilizationCycleItem
     */
    select?: SterilizationCycleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilizationCycleItem
     */
    omit?: SterilizationCycleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizationCycleItemInclude<ExtArgs> | null
    where?: SterilizationCycleItemWhereInput
    orderBy?: SterilizationCycleItemOrderByWithRelationInput | SterilizationCycleItemOrderByWithRelationInput[]
    cursor?: SterilizationCycleItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SterilizationCycleItemScalarFieldEnum | SterilizationCycleItemScalarFieldEnum[]
  }

  /**
   * Instrument without action
   */
  export type InstrumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentAvgAggregateOutputType = {
    id: number | null
    department_code: number | null
  }

  export type DepartmentSumAggregateOutputType = {
    id: number | null
    department_code: number | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: number | null
    department_name: string | null
    department_code: number | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: number | null
    department_name: string | null
    department_code: number | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    department_name: number
    department_code: number
    _all: number
  }


  export type DepartmentAvgAggregateInputType = {
    id?: true
    department_code?: true
  }

  export type DepartmentSumAggregateInputType = {
    id?: true
    department_code?: true
  }

  export type DepartmentMinAggregateInputType = {
    id?: true
    department_name?: true
    department_code?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    department_name?: true
    department_code?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    department_name?: true
    department_code?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _avg?: DepartmentAvgAggregateInputType
    _sum?: DepartmentSumAggregateInputType
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: number
    department_name: string
    department_code: number
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    department_name?: boolean
    department_code?: boolean
    items?: boolean | Department$itemsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>



  export type DepartmentSelectScalar = {
    id?: boolean
    department_name?: boolean
    department_code?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "department_name" | "department_code", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Department$itemsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      items: Prisma.$SterilizationCycleItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      department_name: string
      department_code: number
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
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
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends Department$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Department$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SterilizationCycleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'Int'>
    readonly department_name: FieldRef<"Department", 'String'>
    readonly department_code: FieldRef<"Department", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.items
   */
  export type Department$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilizationCycleItem
     */
    select?: SterilizationCycleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilizationCycleItem
     */
    omit?: SterilizationCycleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizationCycleItemInclude<ExtArgs> | null
    where?: SterilizationCycleItemWhereInput
    orderBy?: SterilizationCycleItemOrderByWithRelationInput | SterilizationCycleItemOrderByWithRelationInput[]
    cursor?: SterilizationCycleItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SterilizationCycleItemScalarFieldEnum | SterilizationCycleItemScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Sterilizer
   */

  export type AggregateSterilizer = {
    _count: SterilizerCountAggregateOutputType | null
    _avg: SterilizerAvgAggregateOutputType | null
    _sum: SterilizerSumAggregateOutputType | null
    _min: SterilizerMinAggregateOutputType | null
    _max: SterilizerMaxAggregateOutputType | null
  }

  export type SterilizerAvgAggregateOutputType = {
    id: number | null
    sterilizer_code: number | null
  }

  export type SterilizerSumAggregateOutputType = {
    id: number | null
    sterilizer_code: number | null
  }

  export type SterilizerMinAggregateOutputType = {
    id: number | null
    sterilizer_code: number | null
    sterilizer_name: string | null
  }

  export type SterilizerMaxAggregateOutputType = {
    id: number | null
    sterilizer_code: number | null
    sterilizer_name: string | null
  }

  export type SterilizerCountAggregateOutputType = {
    id: number
    sterilizer_code: number
    sterilizer_name: number
    _all: number
  }


  export type SterilizerAvgAggregateInputType = {
    id?: true
    sterilizer_code?: true
  }

  export type SterilizerSumAggregateInputType = {
    id?: true
    sterilizer_code?: true
  }

  export type SterilizerMinAggregateInputType = {
    id?: true
    sterilizer_code?: true
    sterilizer_name?: true
  }

  export type SterilizerMaxAggregateInputType = {
    id?: true
    sterilizer_code?: true
    sterilizer_name?: true
  }

  export type SterilizerCountAggregateInputType = {
    id?: true
    sterilizer_code?: true
    sterilizer_name?: true
    _all?: true
  }

  export type SterilizerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sterilizer to aggregate.
     */
    where?: SterilizerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sterilizers to fetch.
     */
    orderBy?: SterilizerOrderByWithRelationInput | SterilizerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SterilizerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sterilizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sterilizers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sterilizers
    **/
    _count?: true | SterilizerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SterilizerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SterilizerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SterilizerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SterilizerMaxAggregateInputType
  }

  export type GetSterilizerAggregateType<T extends SterilizerAggregateArgs> = {
        [P in keyof T & keyof AggregateSterilizer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSterilizer[P]>
      : GetScalarType<T[P], AggregateSterilizer[P]>
  }




  export type SterilizerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SterilizerWhereInput
    orderBy?: SterilizerOrderByWithAggregationInput | SterilizerOrderByWithAggregationInput[]
    by: SterilizerScalarFieldEnum[] | SterilizerScalarFieldEnum
    having?: SterilizerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SterilizerCountAggregateInputType | true
    _avg?: SterilizerAvgAggregateInputType
    _sum?: SterilizerSumAggregateInputType
    _min?: SterilizerMinAggregateInputType
    _max?: SterilizerMaxAggregateInputType
  }

  export type SterilizerGroupByOutputType = {
    id: number
    sterilizer_code: number
    sterilizer_name: string
    _count: SterilizerCountAggregateOutputType | null
    _avg: SterilizerAvgAggregateOutputType | null
    _sum: SterilizerSumAggregateOutputType | null
    _min: SterilizerMinAggregateOutputType | null
    _max: SterilizerMaxAggregateOutputType | null
  }

  type GetSterilizerGroupByPayload<T extends SterilizerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SterilizerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SterilizerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SterilizerGroupByOutputType[P]>
            : GetScalarType<T[P], SterilizerGroupByOutputType[P]>
        }
      >
    >


  export type SterilizerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sterilizer_code?: boolean
    sterilizer_name?: boolean
    cycles?: boolean | Sterilizer$cyclesArgs<ExtArgs>
    _count?: boolean | SterilizerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sterilizer"]>



  export type SterilizerSelectScalar = {
    id?: boolean
    sterilizer_code?: boolean
    sterilizer_name?: boolean
  }

  export type SterilizerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sterilizer_code" | "sterilizer_name", ExtArgs["result"]["sterilizer"]>
  export type SterilizerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cycles?: boolean | Sterilizer$cyclesArgs<ExtArgs>
    _count?: boolean | SterilizerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SterilizerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sterilizer"
    objects: {
      cycles: Prisma.$SterilizationCyclePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sterilizer_code: number
      sterilizer_name: string
    }, ExtArgs["result"]["sterilizer"]>
    composites: {}
  }

  type SterilizerGetPayload<S extends boolean | null | undefined | SterilizerDefaultArgs> = $Result.GetResult<Prisma.$SterilizerPayload, S>

  type SterilizerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SterilizerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SterilizerCountAggregateInputType | true
    }

  export interface SterilizerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sterilizer'], meta: { name: 'Sterilizer' } }
    /**
     * Find zero or one Sterilizer that matches the filter.
     * @param {SterilizerFindUniqueArgs} args - Arguments to find a Sterilizer
     * @example
     * // Get one Sterilizer
     * const sterilizer = await prisma.sterilizer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SterilizerFindUniqueArgs>(args: SelectSubset<T, SterilizerFindUniqueArgs<ExtArgs>>): Prisma__SterilizerClient<$Result.GetResult<Prisma.$SterilizerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sterilizer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SterilizerFindUniqueOrThrowArgs} args - Arguments to find a Sterilizer
     * @example
     * // Get one Sterilizer
     * const sterilizer = await prisma.sterilizer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SterilizerFindUniqueOrThrowArgs>(args: SelectSubset<T, SterilizerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SterilizerClient<$Result.GetResult<Prisma.$SterilizerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sterilizer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SterilizerFindFirstArgs} args - Arguments to find a Sterilizer
     * @example
     * // Get one Sterilizer
     * const sterilizer = await prisma.sterilizer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SterilizerFindFirstArgs>(args?: SelectSubset<T, SterilizerFindFirstArgs<ExtArgs>>): Prisma__SterilizerClient<$Result.GetResult<Prisma.$SterilizerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sterilizer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SterilizerFindFirstOrThrowArgs} args - Arguments to find a Sterilizer
     * @example
     * // Get one Sterilizer
     * const sterilizer = await prisma.sterilizer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SterilizerFindFirstOrThrowArgs>(args?: SelectSubset<T, SterilizerFindFirstOrThrowArgs<ExtArgs>>): Prisma__SterilizerClient<$Result.GetResult<Prisma.$SterilizerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sterilizers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SterilizerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sterilizers
     * const sterilizers = await prisma.sterilizer.findMany()
     * 
     * // Get first 10 Sterilizers
     * const sterilizers = await prisma.sterilizer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sterilizerWithIdOnly = await prisma.sterilizer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SterilizerFindManyArgs>(args?: SelectSubset<T, SterilizerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SterilizerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sterilizer.
     * @param {SterilizerCreateArgs} args - Arguments to create a Sterilizer.
     * @example
     * // Create one Sterilizer
     * const Sterilizer = await prisma.sterilizer.create({
     *   data: {
     *     // ... data to create a Sterilizer
     *   }
     * })
     * 
     */
    create<T extends SterilizerCreateArgs>(args: SelectSubset<T, SterilizerCreateArgs<ExtArgs>>): Prisma__SterilizerClient<$Result.GetResult<Prisma.$SterilizerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sterilizers.
     * @param {SterilizerCreateManyArgs} args - Arguments to create many Sterilizers.
     * @example
     * // Create many Sterilizers
     * const sterilizer = await prisma.sterilizer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SterilizerCreateManyArgs>(args?: SelectSubset<T, SterilizerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sterilizer.
     * @param {SterilizerDeleteArgs} args - Arguments to delete one Sterilizer.
     * @example
     * // Delete one Sterilizer
     * const Sterilizer = await prisma.sterilizer.delete({
     *   where: {
     *     // ... filter to delete one Sterilizer
     *   }
     * })
     * 
     */
    delete<T extends SterilizerDeleteArgs>(args: SelectSubset<T, SterilizerDeleteArgs<ExtArgs>>): Prisma__SterilizerClient<$Result.GetResult<Prisma.$SterilizerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sterilizer.
     * @param {SterilizerUpdateArgs} args - Arguments to update one Sterilizer.
     * @example
     * // Update one Sterilizer
     * const sterilizer = await prisma.sterilizer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SterilizerUpdateArgs>(args: SelectSubset<T, SterilizerUpdateArgs<ExtArgs>>): Prisma__SterilizerClient<$Result.GetResult<Prisma.$SterilizerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sterilizers.
     * @param {SterilizerDeleteManyArgs} args - Arguments to filter Sterilizers to delete.
     * @example
     * // Delete a few Sterilizers
     * const { count } = await prisma.sterilizer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SterilizerDeleteManyArgs>(args?: SelectSubset<T, SterilizerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sterilizers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SterilizerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sterilizers
     * const sterilizer = await prisma.sterilizer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SterilizerUpdateManyArgs>(args: SelectSubset<T, SterilizerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sterilizer.
     * @param {SterilizerUpsertArgs} args - Arguments to update or create a Sterilizer.
     * @example
     * // Update or create a Sterilizer
     * const sterilizer = await prisma.sterilizer.upsert({
     *   create: {
     *     // ... data to create a Sterilizer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sterilizer we want to update
     *   }
     * })
     */
    upsert<T extends SterilizerUpsertArgs>(args: SelectSubset<T, SterilizerUpsertArgs<ExtArgs>>): Prisma__SterilizerClient<$Result.GetResult<Prisma.$SterilizerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sterilizers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SterilizerCountArgs} args - Arguments to filter Sterilizers to count.
     * @example
     * // Count the number of Sterilizers
     * const count = await prisma.sterilizer.count({
     *   where: {
     *     // ... the filter for the Sterilizers we want to count
     *   }
     * })
    **/
    count<T extends SterilizerCountArgs>(
      args?: Subset<T, SterilizerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SterilizerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sterilizer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SterilizerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SterilizerAggregateArgs>(args: Subset<T, SterilizerAggregateArgs>): Prisma.PrismaPromise<GetSterilizerAggregateType<T>>

    /**
     * Group by Sterilizer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SterilizerGroupByArgs} args - Group by arguments.
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
      T extends SterilizerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SterilizerGroupByArgs['orderBy'] }
        : { orderBy?: SterilizerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SterilizerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSterilizerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sterilizer model
   */
  readonly fields: SterilizerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sterilizer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SterilizerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cycles<T extends Sterilizer$cyclesArgs<ExtArgs> = {}>(args?: Subset<T, Sterilizer$cyclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SterilizationCyclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Sterilizer model
   */
  interface SterilizerFieldRefs {
    readonly id: FieldRef<"Sterilizer", 'Int'>
    readonly sterilizer_code: FieldRef<"Sterilizer", 'Int'>
    readonly sterilizer_name: FieldRef<"Sterilizer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sterilizer findUnique
   */
  export type SterilizerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sterilizer
     */
    select?: SterilizerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sterilizer
     */
    omit?: SterilizerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizerInclude<ExtArgs> | null
    /**
     * Filter, which Sterilizer to fetch.
     */
    where: SterilizerWhereUniqueInput
  }

  /**
   * Sterilizer findUniqueOrThrow
   */
  export type SterilizerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sterilizer
     */
    select?: SterilizerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sterilizer
     */
    omit?: SterilizerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizerInclude<ExtArgs> | null
    /**
     * Filter, which Sterilizer to fetch.
     */
    where: SterilizerWhereUniqueInput
  }

  /**
   * Sterilizer findFirst
   */
  export type SterilizerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sterilizer
     */
    select?: SterilizerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sterilizer
     */
    omit?: SterilizerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizerInclude<ExtArgs> | null
    /**
     * Filter, which Sterilizer to fetch.
     */
    where?: SterilizerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sterilizers to fetch.
     */
    orderBy?: SterilizerOrderByWithRelationInput | SterilizerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sterilizers.
     */
    cursor?: SterilizerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sterilizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sterilizers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sterilizers.
     */
    distinct?: SterilizerScalarFieldEnum | SterilizerScalarFieldEnum[]
  }

  /**
   * Sterilizer findFirstOrThrow
   */
  export type SterilizerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sterilizer
     */
    select?: SterilizerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sterilizer
     */
    omit?: SterilizerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizerInclude<ExtArgs> | null
    /**
     * Filter, which Sterilizer to fetch.
     */
    where?: SterilizerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sterilizers to fetch.
     */
    orderBy?: SterilizerOrderByWithRelationInput | SterilizerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sterilizers.
     */
    cursor?: SterilizerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sterilizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sterilizers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sterilizers.
     */
    distinct?: SterilizerScalarFieldEnum | SterilizerScalarFieldEnum[]
  }

  /**
   * Sterilizer findMany
   */
  export type SterilizerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sterilizer
     */
    select?: SterilizerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sterilizer
     */
    omit?: SterilizerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizerInclude<ExtArgs> | null
    /**
     * Filter, which Sterilizers to fetch.
     */
    where?: SterilizerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sterilizers to fetch.
     */
    orderBy?: SterilizerOrderByWithRelationInput | SterilizerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sterilizers.
     */
    cursor?: SterilizerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sterilizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sterilizers.
     */
    skip?: number
    distinct?: SterilizerScalarFieldEnum | SterilizerScalarFieldEnum[]
  }

  /**
   * Sterilizer create
   */
  export type SterilizerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sterilizer
     */
    select?: SterilizerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sterilizer
     */
    omit?: SterilizerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizerInclude<ExtArgs> | null
    /**
     * The data needed to create a Sterilizer.
     */
    data: XOR<SterilizerCreateInput, SterilizerUncheckedCreateInput>
  }

  /**
   * Sterilizer createMany
   */
  export type SterilizerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sterilizers.
     */
    data: SterilizerCreateManyInput | SterilizerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sterilizer update
   */
  export type SterilizerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sterilizer
     */
    select?: SterilizerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sterilizer
     */
    omit?: SterilizerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizerInclude<ExtArgs> | null
    /**
     * The data needed to update a Sterilizer.
     */
    data: XOR<SterilizerUpdateInput, SterilizerUncheckedUpdateInput>
    /**
     * Choose, which Sterilizer to update.
     */
    where: SterilizerWhereUniqueInput
  }

  /**
   * Sterilizer updateMany
   */
  export type SterilizerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sterilizers.
     */
    data: XOR<SterilizerUpdateManyMutationInput, SterilizerUncheckedUpdateManyInput>
    /**
     * Filter which Sterilizers to update
     */
    where?: SterilizerWhereInput
    /**
     * Limit how many Sterilizers to update.
     */
    limit?: number
  }

  /**
   * Sterilizer upsert
   */
  export type SterilizerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sterilizer
     */
    select?: SterilizerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sterilizer
     */
    omit?: SterilizerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizerInclude<ExtArgs> | null
    /**
     * The filter to search for the Sterilizer to update in case it exists.
     */
    where: SterilizerWhereUniqueInput
    /**
     * In case the Sterilizer found by the `where` argument doesn't exist, create a new Sterilizer with this data.
     */
    create: XOR<SterilizerCreateInput, SterilizerUncheckedCreateInput>
    /**
     * In case the Sterilizer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SterilizerUpdateInput, SterilizerUncheckedUpdateInput>
  }

  /**
   * Sterilizer delete
   */
  export type SterilizerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sterilizer
     */
    select?: SterilizerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sterilizer
     */
    omit?: SterilizerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizerInclude<ExtArgs> | null
    /**
     * Filter which Sterilizer to delete.
     */
    where: SterilizerWhereUniqueInput
  }

  /**
   * Sterilizer deleteMany
   */
  export type SterilizerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sterilizers to delete
     */
    where?: SterilizerWhereInput
    /**
     * Limit how many Sterilizers to delete.
     */
    limit?: number
  }

  /**
   * Sterilizer.cycles
   */
  export type Sterilizer$cyclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilizationCycle
     */
    select?: SterilizationCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilizationCycle
     */
    omit?: SterilizationCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizationCycleInclude<ExtArgs> | null
    where?: SterilizationCycleWhereInput
    orderBy?: SterilizationCycleOrderByWithRelationInput | SterilizationCycleOrderByWithRelationInput[]
    cursor?: SterilizationCycleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SterilizationCycleScalarFieldEnum | SterilizationCycleScalarFieldEnum[]
  }

  /**
   * Sterilizer without action
   */
  export type SterilizerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sterilizer
     */
    select?: SterilizerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sterilizer
     */
    omit?: SterilizerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizerInclude<ExtArgs> | null
  }


  /**
   * Model Jwt
   */

  export type AggregateJwt = {
    _count: JwtCountAggregateOutputType | null
    _min: JwtMinAggregateOutputType | null
    _max: JwtMaxAggregateOutputType | null
  }

  export type JwtMinAggregateOutputType = {
    user_id: string | null
    refresh_token: string | null
    username: string | null
    display_name: string | null
    division: string | null
    role: string | null
  }

  export type JwtMaxAggregateOutputType = {
    user_id: string | null
    refresh_token: string | null
    username: string | null
    display_name: string | null
    division: string | null
    role: string | null
  }

  export type JwtCountAggregateOutputType = {
    user_id: number
    refresh_token: number
    username: number
    display_name: number
    division: number
    role: number
    _all: number
  }


  export type JwtMinAggregateInputType = {
    user_id?: true
    refresh_token?: true
    username?: true
    display_name?: true
    division?: true
    role?: true
  }

  export type JwtMaxAggregateInputType = {
    user_id?: true
    refresh_token?: true
    username?: true
    display_name?: true
    division?: true
    role?: true
  }

  export type JwtCountAggregateInputType = {
    user_id?: true
    refresh_token?: true
    username?: true
    display_name?: true
    division?: true
    role?: true
    _all?: true
  }

  export type JwtAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jwt to aggregate.
     */
    where?: JwtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jwts to fetch.
     */
    orderBy?: JwtOrderByWithRelationInput | JwtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JwtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jwts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jwts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jwts
    **/
    _count?: true | JwtCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JwtMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JwtMaxAggregateInputType
  }

  export type GetJwtAggregateType<T extends JwtAggregateArgs> = {
        [P in keyof T & keyof AggregateJwt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJwt[P]>
      : GetScalarType<T[P], AggregateJwt[P]>
  }




  export type JwtGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JwtWhereInput
    orderBy?: JwtOrderByWithAggregationInput | JwtOrderByWithAggregationInput[]
    by: JwtScalarFieldEnum[] | JwtScalarFieldEnum
    having?: JwtScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JwtCountAggregateInputType | true
    _min?: JwtMinAggregateInputType
    _max?: JwtMaxAggregateInputType
  }

  export type JwtGroupByOutputType = {
    user_id: string
    refresh_token: string
    username: string
    display_name: string
    division: string
    role: string
    _count: JwtCountAggregateOutputType | null
    _min: JwtMinAggregateOutputType | null
    _max: JwtMaxAggregateOutputType | null
  }

  type GetJwtGroupByPayload<T extends JwtGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JwtGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JwtGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JwtGroupByOutputType[P]>
            : GetScalarType<T[P], JwtGroupByOutputType[P]>
        }
      >
    >


  export type JwtSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    refresh_token?: boolean
    username?: boolean
    display_name?: boolean
    division?: boolean
    role?: boolean
  }, ExtArgs["result"]["jwt"]>



  export type JwtSelectScalar = {
    user_id?: boolean
    refresh_token?: boolean
    username?: boolean
    display_name?: boolean
    division?: boolean
    role?: boolean
  }

  export type JwtOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "refresh_token" | "username" | "display_name" | "division" | "role", ExtArgs["result"]["jwt"]>

  export type $JwtPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jwt"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      refresh_token: string
      username: string
      display_name: string
      division: string
      role: string
    }, ExtArgs["result"]["jwt"]>
    composites: {}
  }

  type JwtGetPayload<S extends boolean | null | undefined | JwtDefaultArgs> = $Result.GetResult<Prisma.$JwtPayload, S>

  type JwtCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JwtFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JwtCountAggregateInputType | true
    }

  export interface JwtDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jwt'], meta: { name: 'Jwt' } }
    /**
     * Find zero or one Jwt that matches the filter.
     * @param {JwtFindUniqueArgs} args - Arguments to find a Jwt
     * @example
     * // Get one Jwt
     * const jwt = await prisma.jwt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JwtFindUniqueArgs>(args: SelectSubset<T, JwtFindUniqueArgs<ExtArgs>>): Prisma__JwtClient<$Result.GetResult<Prisma.$JwtPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jwt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JwtFindUniqueOrThrowArgs} args - Arguments to find a Jwt
     * @example
     * // Get one Jwt
     * const jwt = await prisma.jwt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JwtFindUniqueOrThrowArgs>(args: SelectSubset<T, JwtFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JwtClient<$Result.GetResult<Prisma.$JwtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jwt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtFindFirstArgs} args - Arguments to find a Jwt
     * @example
     * // Get one Jwt
     * const jwt = await prisma.jwt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JwtFindFirstArgs>(args?: SelectSubset<T, JwtFindFirstArgs<ExtArgs>>): Prisma__JwtClient<$Result.GetResult<Prisma.$JwtPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jwt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtFindFirstOrThrowArgs} args - Arguments to find a Jwt
     * @example
     * // Get one Jwt
     * const jwt = await prisma.jwt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JwtFindFirstOrThrowArgs>(args?: SelectSubset<T, JwtFindFirstOrThrowArgs<ExtArgs>>): Prisma__JwtClient<$Result.GetResult<Prisma.$JwtPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jwts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jwts
     * const jwts = await prisma.jwt.findMany()
     * 
     * // Get first 10 Jwts
     * const jwts = await prisma.jwt.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const jwtWithUser_idOnly = await prisma.jwt.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends JwtFindManyArgs>(args?: SelectSubset<T, JwtFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JwtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jwt.
     * @param {JwtCreateArgs} args - Arguments to create a Jwt.
     * @example
     * // Create one Jwt
     * const Jwt = await prisma.jwt.create({
     *   data: {
     *     // ... data to create a Jwt
     *   }
     * })
     * 
     */
    create<T extends JwtCreateArgs>(args: SelectSubset<T, JwtCreateArgs<ExtArgs>>): Prisma__JwtClient<$Result.GetResult<Prisma.$JwtPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jwts.
     * @param {JwtCreateManyArgs} args - Arguments to create many Jwts.
     * @example
     * // Create many Jwts
     * const jwt = await prisma.jwt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JwtCreateManyArgs>(args?: SelectSubset<T, JwtCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jwt.
     * @param {JwtDeleteArgs} args - Arguments to delete one Jwt.
     * @example
     * // Delete one Jwt
     * const Jwt = await prisma.jwt.delete({
     *   where: {
     *     // ... filter to delete one Jwt
     *   }
     * })
     * 
     */
    delete<T extends JwtDeleteArgs>(args: SelectSubset<T, JwtDeleteArgs<ExtArgs>>): Prisma__JwtClient<$Result.GetResult<Prisma.$JwtPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jwt.
     * @param {JwtUpdateArgs} args - Arguments to update one Jwt.
     * @example
     * // Update one Jwt
     * const jwt = await prisma.jwt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JwtUpdateArgs>(args: SelectSubset<T, JwtUpdateArgs<ExtArgs>>): Prisma__JwtClient<$Result.GetResult<Prisma.$JwtPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jwts.
     * @param {JwtDeleteManyArgs} args - Arguments to filter Jwts to delete.
     * @example
     * // Delete a few Jwts
     * const { count } = await prisma.jwt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JwtDeleteManyArgs>(args?: SelectSubset<T, JwtDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jwts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jwts
     * const jwt = await prisma.jwt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JwtUpdateManyArgs>(args: SelectSubset<T, JwtUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jwt.
     * @param {JwtUpsertArgs} args - Arguments to update or create a Jwt.
     * @example
     * // Update or create a Jwt
     * const jwt = await prisma.jwt.upsert({
     *   create: {
     *     // ... data to create a Jwt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jwt we want to update
     *   }
     * })
     */
    upsert<T extends JwtUpsertArgs>(args: SelectSubset<T, JwtUpsertArgs<ExtArgs>>): Prisma__JwtClient<$Result.GetResult<Prisma.$JwtPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jwts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtCountArgs} args - Arguments to filter Jwts to count.
     * @example
     * // Count the number of Jwts
     * const count = await prisma.jwt.count({
     *   where: {
     *     // ... the filter for the Jwts we want to count
     *   }
     * })
    **/
    count<T extends JwtCountArgs>(
      args?: Subset<T, JwtCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JwtCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jwt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JwtAggregateArgs>(args: Subset<T, JwtAggregateArgs>): Prisma.PrismaPromise<GetJwtAggregateType<T>>

    /**
     * Group by Jwt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtGroupByArgs} args - Group by arguments.
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
      T extends JwtGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JwtGroupByArgs['orderBy'] }
        : { orderBy?: JwtGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JwtGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJwtGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jwt model
   */
  readonly fields: JwtFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jwt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JwtClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Jwt model
   */
  interface JwtFieldRefs {
    readonly user_id: FieldRef<"Jwt", 'String'>
    readonly refresh_token: FieldRef<"Jwt", 'String'>
    readonly username: FieldRef<"Jwt", 'String'>
    readonly display_name: FieldRef<"Jwt", 'String'>
    readonly division: FieldRef<"Jwt", 'String'>
    readonly role: FieldRef<"Jwt", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Jwt findUnique
   */
  export type JwtFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwt
     */
    select?: JwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwt
     */
    omit?: JwtOmit<ExtArgs> | null
    /**
     * Filter, which Jwt to fetch.
     */
    where: JwtWhereUniqueInput
  }

  /**
   * Jwt findUniqueOrThrow
   */
  export type JwtFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwt
     */
    select?: JwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwt
     */
    omit?: JwtOmit<ExtArgs> | null
    /**
     * Filter, which Jwt to fetch.
     */
    where: JwtWhereUniqueInput
  }

  /**
   * Jwt findFirst
   */
  export type JwtFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwt
     */
    select?: JwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwt
     */
    omit?: JwtOmit<ExtArgs> | null
    /**
     * Filter, which Jwt to fetch.
     */
    where?: JwtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jwts to fetch.
     */
    orderBy?: JwtOrderByWithRelationInput | JwtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jwts.
     */
    cursor?: JwtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jwts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jwts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jwts.
     */
    distinct?: JwtScalarFieldEnum | JwtScalarFieldEnum[]
  }

  /**
   * Jwt findFirstOrThrow
   */
  export type JwtFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwt
     */
    select?: JwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwt
     */
    omit?: JwtOmit<ExtArgs> | null
    /**
     * Filter, which Jwt to fetch.
     */
    where?: JwtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jwts to fetch.
     */
    orderBy?: JwtOrderByWithRelationInput | JwtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jwts.
     */
    cursor?: JwtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jwts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jwts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jwts.
     */
    distinct?: JwtScalarFieldEnum | JwtScalarFieldEnum[]
  }

  /**
   * Jwt findMany
   */
  export type JwtFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwt
     */
    select?: JwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwt
     */
    omit?: JwtOmit<ExtArgs> | null
    /**
     * Filter, which Jwts to fetch.
     */
    where?: JwtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jwts to fetch.
     */
    orderBy?: JwtOrderByWithRelationInput | JwtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jwts.
     */
    cursor?: JwtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jwts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jwts.
     */
    skip?: number
    distinct?: JwtScalarFieldEnum | JwtScalarFieldEnum[]
  }

  /**
   * Jwt create
   */
  export type JwtCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwt
     */
    select?: JwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwt
     */
    omit?: JwtOmit<ExtArgs> | null
    /**
     * The data needed to create a Jwt.
     */
    data: XOR<JwtCreateInput, JwtUncheckedCreateInput>
  }

  /**
   * Jwt createMany
   */
  export type JwtCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jwts.
     */
    data: JwtCreateManyInput | JwtCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jwt update
   */
  export type JwtUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwt
     */
    select?: JwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwt
     */
    omit?: JwtOmit<ExtArgs> | null
    /**
     * The data needed to update a Jwt.
     */
    data: XOR<JwtUpdateInput, JwtUncheckedUpdateInput>
    /**
     * Choose, which Jwt to update.
     */
    where: JwtWhereUniqueInput
  }

  /**
   * Jwt updateMany
   */
  export type JwtUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jwts.
     */
    data: XOR<JwtUpdateManyMutationInput, JwtUncheckedUpdateManyInput>
    /**
     * Filter which Jwts to update
     */
    where?: JwtWhereInput
    /**
     * Limit how many Jwts to update.
     */
    limit?: number
  }

  /**
   * Jwt upsert
   */
  export type JwtUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwt
     */
    select?: JwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwt
     */
    omit?: JwtOmit<ExtArgs> | null
    /**
     * The filter to search for the Jwt to update in case it exists.
     */
    where: JwtWhereUniqueInput
    /**
     * In case the Jwt found by the `where` argument doesn't exist, create a new Jwt with this data.
     */
    create: XOR<JwtCreateInput, JwtUncheckedCreateInput>
    /**
     * In case the Jwt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JwtUpdateInput, JwtUncheckedUpdateInput>
  }

  /**
   * Jwt delete
   */
  export type JwtDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwt
     */
    select?: JwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwt
     */
    omit?: JwtOmit<ExtArgs> | null
    /**
     * Filter which Jwt to delete.
     */
    where: JwtWhereUniqueInput
  }

  /**
   * Jwt deleteMany
   */
  export type JwtDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jwts to delete
     */
    where?: JwtWhereInput
    /**
     * Limit how many Jwts to delete.
     */
    limit?: number
  }

  /**
   * Jwt without action
   */
  export type JwtDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwt
     */
    select?: JwtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwt
     */
    omit?: JwtOmit<ExtArgs> | null
  }


  /**
   * Model SterilizationCycle
   */

  export type AggregateSterilizationCycle = {
    _count: SterilizationCycleCountAggregateOutputType | null
    _avg: SterilizationCycleAvgAggregateOutputType | null
    _sum: SterilizationCycleSumAggregateOutputType | null
    _min: SterilizationCycleMinAggregateOutputType | null
    _max: SterilizationCycleMaxAggregateOutputType | null
  }

  export type SterilizationCycleAvgAggregateOutputType = {
    id: number | null
    sterilizer_id: number | null
    cycle_number: number | null
  }

  export type SterilizationCycleSumAggregateOutputType = {
    id: number | null
    sterilizer_id: number | null
    cycle_number: number | null
  }

  export type SterilizationCycleMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    sterilizer_id: number | null
    cycle_number: number | null
    sterilization_date: Date | null
  }

  export type SterilizationCycleMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    sterilizer_id: number | null
    cycle_number: number | null
    sterilization_date: Date | null
  }

  export type SterilizationCycleCountAggregateOutputType = {
    id: number
    user_id: number
    sterilizer_id: number
    cycle_number: number
    sterilization_date: number
    _all: number
  }


  export type SterilizationCycleAvgAggregateInputType = {
    id?: true
    sterilizer_id?: true
    cycle_number?: true
  }

  export type SterilizationCycleSumAggregateInputType = {
    id?: true
    sterilizer_id?: true
    cycle_number?: true
  }

  export type SterilizationCycleMinAggregateInputType = {
    id?: true
    user_id?: true
    sterilizer_id?: true
    cycle_number?: true
    sterilization_date?: true
  }

  export type SterilizationCycleMaxAggregateInputType = {
    id?: true
    user_id?: true
    sterilizer_id?: true
    cycle_number?: true
    sterilization_date?: true
  }

  export type SterilizationCycleCountAggregateInputType = {
    id?: true
    user_id?: true
    sterilizer_id?: true
    cycle_number?: true
    sterilization_date?: true
    _all?: true
  }

  export type SterilizationCycleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SterilizationCycle to aggregate.
     */
    where?: SterilizationCycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SterilizationCycles to fetch.
     */
    orderBy?: SterilizationCycleOrderByWithRelationInput | SterilizationCycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SterilizationCycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SterilizationCycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SterilizationCycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SterilizationCycles
    **/
    _count?: true | SterilizationCycleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SterilizationCycleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SterilizationCycleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SterilizationCycleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SterilizationCycleMaxAggregateInputType
  }

  export type GetSterilizationCycleAggregateType<T extends SterilizationCycleAggregateArgs> = {
        [P in keyof T & keyof AggregateSterilizationCycle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSterilizationCycle[P]>
      : GetScalarType<T[P], AggregateSterilizationCycle[P]>
  }




  export type SterilizationCycleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SterilizationCycleWhereInput
    orderBy?: SterilizationCycleOrderByWithAggregationInput | SterilizationCycleOrderByWithAggregationInput[]
    by: SterilizationCycleScalarFieldEnum[] | SterilizationCycleScalarFieldEnum
    having?: SterilizationCycleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SterilizationCycleCountAggregateInputType | true
    _avg?: SterilizationCycleAvgAggregateInputType
    _sum?: SterilizationCycleSumAggregateInputType
    _min?: SterilizationCycleMinAggregateInputType
    _max?: SterilizationCycleMaxAggregateInputType
  }

  export type SterilizationCycleGroupByOutputType = {
    id: number
    user_id: string
    sterilizer_id: number
    cycle_number: number
    sterilization_date: Date
    _count: SterilizationCycleCountAggregateOutputType | null
    _avg: SterilizationCycleAvgAggregateOutputType | null
    _sum: SterilizationCycleSumAggregateOutputType | null
    _min: SterilizationCycleMinAggregateOutputType | null
    _max: SterilizationCycleMaxAggregateOutputType | null
  }

  type GetSterilizationCycleGroupByPayload<T extends SterilizationCycleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SterilizationCycleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SterilizationCycleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SterilizationCycleGroupByOutputType[P]>
            : GetScalarType<T[P], SterilizationCycleGroupByOutputType[P]>
        }
      >
    >


  export type SterilizationCycleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    sterilizer_id?: boolean
    cycle_number?: boolean
    sterilization_date?: boolean
    sterilizer?: boolean | SterilizerDefaultArgs<ExtArgs>
    items?: boolean | SterilizationCycle$itemsArgs<ExtArgs>
    _count?: boolean | SterilizationCycleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sterilizationCycle"]>



  export type SterilizationCycleSelectScalar = {
    id?: boolean
    user_id?: boolean
    sterilizer_id?: boolean
    cycle_number?: boolean
    sterilization_date?: boolean
  }

  export type SterilizationCycleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "sterilizer_id" | "cycle_number" | "sterilization_date", ExtArgs["result"]["sterilizationCycle"]>
  export type SterilizationCycleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sterilizer?: boolean | SterilizerDefaultArgs<ExtArgs>
    items?: boolean | SterilizationCycle$itemsArgs<ExtArgs>
    _count?: boolean | SterilizationCycleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SterilizationCyclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SterilizationCycle"
    objects: {
      sterilizer: Prisma.$SterilizerPayload<ExtArgs>
      items: Prisma.$SterilizationCycleItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      sterilizer_id: number
      cycle_number: number
      sterilization_date: Date
    }, ExtArgs["result"]["sterilizationCycle"]>
    composites: {}
  }

  type SterilizationCycleGetPayload<S extends boolean | null | undefined | SterilizationCycleDefaultArgs> = $Result.GetResult<Prisma.$SterilizationCyclePayload, S>

  type SterilizationCycleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SterilizationCycleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SterilizationCycleCountAggregateInputType | true
    }

  export interface SterilizationCycleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SterilizationCycle'], meta: { name: 'SterilizationCycle' } }
    /**
     * Find zero or one SterilizationCycle that matches the filter.
     * @param {SterilizationCycleFindUniqueArgs} args - Arguments to find a SterilizationCycle
     * @example
     * // Get one SterilizationCycle
     * const sterilizationCycle = await prisma.sterilizationCycle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SterilizationCycleFindUniqueArgs>(args: SelectSubset<T, SterilizationCycleFindUniqueArgs<ExtArgs>>): Prisma__SterilizationCycleClient<$Result.GetResult<Prisma.$SterilizationCyclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SterilizationCycle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SterilizationCycleFindUniqueOrThrowArgs} args - Arguments to find a SterilizationCycle
     * @example
     * // Get one SterilizationCycle
     * const sterilizationCycle = await prisma.sterilizationCycle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SterilizationCycleFindUniqueOrThrowArgs>(args: SelectSubset<T, SterilizationCycleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SterilizationCycleClient<$Result.GetResult<Prisma.$SterilizationCyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SterilizationCycle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SterilizationCycleFindFirstArgs} args - Arguments to find a SterilizationCycle
     * @example
     * // Get one SterilizationCycle
     * const sterilizationCycle = await prisma.sterilizationCycle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SterilizationCycleFindFirstArgs>(args?: SelectSubset<T, SterilizationCycleFindFirstArgs<ExtArgs>>): Prisma__SterilizationCycleClient<$Result.GetResult<Prisma.$SterilizationCyclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SterilizationCycle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SterilizationCycleFindFirstOrThrowArgs} args - Arguments to find a SterilizationCycle
     * @example
     * // Get one SterilizationCycle
     * const sterilizationCycle = await prisma.sterilizationCycle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SterilizationCycleFindFirstOrThrowArgs>(args?: SelectSubset<T, SterilizationCycleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SterilizationCycleClient<$Result.GetResult<Prisma.$SterilizationCyclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SterilizationCycles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SterilizationCycleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SterilizationCycles
     * const sterilizationCycles = await prisma.sterilizationCycle.findMany()
     * 
     * // Get first 10 SterilizationCycles
     * const sterilizationCycles = await prisma.sterilizationCycle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sterilizationCycleWithIdOnly = await prisma.sterilizationCycle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SterilizationCycleFindManyArgs>(args?: SelectSubset<T, SterilizationCycleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SterilizationCyclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SterilizationCycle.
     * @param {SterilizationCycleCreateArgs} args - Arguments to create a SterilizationCycle.
     * @example
     * // Create one SterilizationCycle
     * const SterilizationCycle = await prisma.sterilizationCycle.create({
     *   data: {
     *     // ... data to create a SterilizationCycle
     *   }
     * })
     * 
     */
    create<T extends SterilizationCycleCreateArgs>(args: SelectSubset<T, SterilizationCycleCreateArgs<ExtArgs>>): Prisma__SterilizationCycleClient<$Result.GetResult<Prisma.$SterilizationCyclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SterilizationCycles.
     * @param {SterilizationCycleCreateManyArgs} args - Arguments to create many SterilizationCycles.
     * @example
     * // Create many SterilizationCycles
     * const sterilizationCycle = await prisma.sterilizationCycle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SterilizationCycleCreateManyArgs>(args?: SelectSubset<T, SterilizationCycleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SterilizationCycle.
     * @param {SterilizationCycleDeleteArgs} args - Arguments to delete one SterilizationCycle.
     * @example
     * // Delete one SterilizationCycle
     * const SterilizationCycle = await prisma.sterilizationCycle.delete({
     *   where: {
     *     // ... filter to delete one SterilizationCycle
     *   }
     * })
     * 
     */
    delete<T extends SterilizationCycleDeleteArgs>(args: SelectSubset<T, SterilizationCycleDeleteArgs<ExtArgs>>): Prisma__SterilizationCycleClient<$Result.GetResult<Prisma.$SterilizationCyclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SterilizationCycle.
     * @param {SterilizationCycleUpdateArgs} args - Arguments to update one SterilizationCycle.
     * @example
     * // Update one SterilizationCycle
     * const sterilizationCycle = await prisma.sterilizationCycle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SterilizationCycleUpdateArgs>(args: SelectSubset<T, SterilizationCycleUpdateArgs<ExtArgs>>): Prisma__SterilizationCycleClient<$Result.GetResult<Prisma.$SterilizationCyclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SterilizationCycles.
     * @param {SterilizationCycleDeleteManyArgs} args - Arguments to filter SterilizationCycles to delete.
     * @example
     * // Delete a few SterilizationCycles
     * const { count } = await prisma.sterilizationCycle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SterilizationCycleDeleteManyArgs>(args?: SelectSubset<T, SterilizationCycleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SterilizationCycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SterilizationCycleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SterilizationCycles
     * const sterilizationCycle = await prisma.sterilizationCycle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SterilizationCycleUpdateManyArgs>(args: SelectSubset<T, SterilizationCycleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SterilizationCycle.
     * @param {SterilizationCycleUpsertArgs} args - Arguments to update or create a SterilizationCycle.
     * @example
     * // Update or create a SterilizationCycle
     * const sterilizationCycle = await prisma.sterilizationCycle.upsert({
     *   create: {
     *     // ... data to create a SterilizationCycle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SterilizationCycle we want to update
     *   }
     * })
     */
    upsert<T extends SterilizationCycleUpsertArgs>(args: SelectSubset<T, SterilizationCycleUpsertArgs<ExtArgs>>): Prisma__SterilizationCycleClient<$Result.GetResult<Prisma.$SterilizationCyclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SterilizationCycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SterilizationCycleCountArgs} args - Arguments to filter SterilizationCycles to count.
     * @example
     * // Count the number of SterilizationCycles
     * const count = await prisma.sterilizationCycle.count({
     *   where: {
     *     // ... the filter for the SterilizationCycles we want to count
     *   }
     * })
    **/
    count<T extends SterilizationCycleCountArgs>(
      args?: Subset<T, SterilizationCycleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SterilizationCycleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SterilizationCycle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SterilizationCycleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SterilizationCycleAggregateArgs>(args: Subset<T, SterilizationCycleAggregateArgs>): Prisma.PrismaPromise<GetSterilizationCycleAggregateType<T>>

    /**
     * Group by SterilizationCycle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SterilizationCycleGroupByArgs} args - Group by arguments.
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
      T extends SterilizationCycleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SterilizationCycleGroupByArgs['orderBy'] }
        : { orderBy?: SterilizationCycleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SterilizationCycleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSterilizationCycleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SterilizationCycle model
   */
  readonly fields: SterilizationCycleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SterilizationCycle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SterilizationCycleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sterilizer<T extends SterilizerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SterilizerDefaultArgs<ExtArgs>>): Prisma__SterilizerClient<$Result.GetResult<Prisma.$SterilizerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends SterilizationCycle$itemsArgs<ExtArgs> = {}>(args?: Subset<T, SterilizationCycle$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SterilizationCycleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SterilizationCycle model
   */
  interface SterilizationCycleFieldRefs {
    readonly id: FieldRef<"SterilizationCycle", 'Int'>
    readonly user_id: FieldRef<"SterilizationCycle", 'String'>
    readonly sterilizer_id: FieldRef<"SterilizationCycle", 'Int'>
    readonly cycle_number: FieldRef<"SterilizationCycle", 'Int'>
    readonly sterilization_date: FieldRef<"SterilizationCycle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SterilizationCycle findUnique
   */
  export type SterilizationCycleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilizationCycle
     */
    select?: SterilizationCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilizationCycle
     */
    omit?: SterilizationCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizationCycleInclude<ExtArgs> | null
    /**
     * Filter, which SterilizationCycle to fetch.
     */
    where: SterilizationCycleWhereUniqueInput
  }

  /**
   * SterilizationCycle findUniqueOrThrow
   */
  export type SterilizationCycleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilizationCycle
     */
    select?: SterilizationCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilizationCycle
     */
    omit?: SterilizationCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizationCycleInclude<ExtArgs> | null
    /**
     * Filter, which SterilizationCycle to fetch.
     */
    where: SterilizationCycleWhereUniqueInput
  }

  /**
   * SterilizationCycle findFirst
   */
  export type SterilizationCycleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilizationCycle
     */
    select?: SterilizationCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilizationCycle
     */
    omit?: SterilizationCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizationCycleInclude<ExtArgs> | null
    /**
     * Filter, which SterilizationCycle to fetch.
     */
    where?: SterilizationCycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SterilizationCycles to fetch.
     */
    orderBy?: SterilizationCycleOrderByWithRelationInput | SterilizationCycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SterilizationCycles.
     */
    cursor?: SterilizationCycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SterilizationCycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SterilizationCycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SterilizationCycles.
     */
    distinct?: SterilizationCycleScalarFieldEnum | SterilizationCycleScalarFieldEnum[]
  }

  /**
   * SterilizationCycle findFirstOrThrow
   */
  export type SterilizationCycleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilizationCycle
     */
    select?: SterilizationCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilizationCycle
     */
    omit?: SterilizationCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizationCycleInclude<ExtArgs> | null
    /**
     * Filter, which SterilizationCycle to fetch.
     */
    where?: SterilizationCycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SterilizationCycles to fetch.
     */
    orderBy?: SterilizationCycleOrderByWithRelationInput | SterilizationCycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SterilizationCycles.
     */
    cursor?: SterilizationCycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SterilizationCycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SterilizationCycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SterilizationCycles.
     */
    distinct?: SterilizationCycleScalarFieldEnum | SterilizationCycleScalarFieldEnum[]
  }

  /**
   * SterilizationCycle findMany
   */
  export type SterilizationCycleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilizationCycle
     */
    select?: SterilizationCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilizationCycle
     */
    omit?: SterilizationCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizationCycleInclude<ExtArgs> | null
    /**
     * Filter, which SterilizationCycles to fetch.
     */
    where?: SterilizationCycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SterilizationCycles to fetch.
     */
    orderBy?: SterilizationCycleOrderByWithRelationInput | SterilizationCycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SterilizationCycles.
     */
    cursor?: SterilizationCycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SterilizationCycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SterilizationCycles.
     */
    skip?: number
    distinct?: SterilizationCycleScalarFieldEnum | SterilizationCycleScalarFieldEnum[]
  }

  /**
   * SterilizationCycle create
   */
  export type SterilizationCycleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilizationCycle
     */
    select?: SterilizationCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilizationCycle
     */
    omit?: SterilizationCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizationCycleInclude<ExtArgs> | null
    /**
     * The data needed to create a SterilizationCycle.
     */
    data: XOR<SterilizationCycleCreateInput, SterilizationCycleUncheckedCreateInput>
  }

  /**
   * SterilizationCycle createMany
   */
  export type SterilizationCycleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SterilizationCycles.
     */
    data: SterilizationCycleCreateManyInput | SterilizationCycleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SterilizationCycle update
   */
  export type SterilizationCycleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilizationCycle
     */
    select?: SterilizationCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilizationCycle
     */
    omit?: SterilizationCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizationCycleInclude<ExtArgs> | null
    /**
     * The data needed to update a SterilizationCycle.
     */
    data: XOR<SterilizationCycleUpdateInput, SterilizationCycleUncheckedUpdateInput>
    /**
     * Choose, which SterilizationCycle to update.
     */
    where: SterilizationCycleWhereUniqueInput
  }

  /**
   * SterilizationCycle updateMany
   */
  export type SterilizationCycleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SterilizationCycles.
     */
    data: XOR<SterilizationCycleUpdateManyMutationInput, SterilizationCycleUncheckedUpdateManyInput>
    /**
     * Filter which SterilizationCycles to update
     */
    where?: SterilizationCycleWhereInput
    /**
     * Limit how many SterilizationCycles to update.
     */
    limit?: number
  }

  /**
   * SterilizationCycle upsert
   */
  export type SterilizationCycleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilizationCycle
     */
    select?: SterilizationCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilizationCycle
     */
    omit?: SterilizationCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizationCycleInclude<ExtArgs> | null
    /**
     * The filter to search for the SterilizationCycle to update in case it exists.
     */
    where: SterilizationCycleWhereUniqueInput
    /**
     * In case the SterilizationCycle found by the `where` argument doesn't exist, create a new SterilizationCycle with this data.
     */
    create: XOR<SterilizationCycleCreateInput, SterilizationCycleUncheckedCreateInput>
    /**
     * In case the SterilizationCycle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SterilizationCycleUpdateInput, SterilizationCycleUncheckedUpdateInput>
  }

  /**
   * SterilizationCycle delete
   */
  export type SterilizationCycleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilizationCycle
     */
    select?: SterilizationCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilizationCycle
     */
    omit?: SterilizationCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizationCycleInclude<ExtArgs> | null
    /**
     * Filter which SterilizationCycle to delete.
     */
    where: SterilizationCycleWhereUniqueInput
  }

  /**
   * SterilizationCycle deleteMany
   */
  export type SterilizationCycleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SterilizationCycles to delete
     */
    where?: SterilizationCycleWhereInput
    /**
     * Limit how many SterilizationCycles to delete.
     */
    limit?: number
  }

  /**
   * SterilizationCycle.items
   */
  export type SterilizationCycle$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilizationCycleItem
     */
    select?: SterilizationCycleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilizationCycleItem
     */
    omit?: SterilizationCycleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizationCycleItemInclude<ExtArgs> | null
    where?: SterilizationCycleItemWhereInput
    orderBy?: SterilizationCycleItemOrderByWithRelationInput | SterilizationCycleItemOrderByWithRelationInput[]
    cursor?: SterilizationCycleItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SterilizationCycleItemScalarFieldEnum | SterilizationCycleItemScalarFieldEnum[]
  }

  /**
   * SterilizationCycle without action
   */
  export type SterilizationCycleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilizationCycle
     */
    select?: SterilizationCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilizationCycle
     */
    omit?: SterilizationCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizationCycleInclude<ExtArgs> | null
  }


  /**
   * Model SterilizationCycleItem
   */

  export type AggregateSterilizationCycleItem = {
    _count: SterilizationCycleItemCountAggregateOutputType | null
    _avg: SterilizationCycleItemAvgAggregateOutputType | null
    _sum: SterilizationCycleItemSumAggregateOutputType | null
    _min: SterilizationCycleItemMinAggregateOutputType | null
    _max: SterilizationCycleItemMaxAggregateOutputType | null
  }

  export type SterilizationCycleItemAvgAggregateOutputType = {
    id: number | null
    cycle_id: number | null
    instrument_id: number | null
    department_id: number | null
  }

  export type SterilizationCycleItemSumAggregateOutputType = {
    id: number | null
    cycle_id: number | null
    instrument_id: number | null
    department_id: number | null
  }

  export type SterilizationCycleItemMinAggregateOutputType = {
    id: number | null
    short_code: string | null
    cycle_id: number | null
    instrument_id: number | null
    department_id: number | null
    success: boolean | null
  }

  export type SterilizationCycleItemMaxAggregateOutputType = {
    id: number | null
    short_code: string | null
    cycle_id: number | null
    instrument_id: number | null
    department_id: number | null
    success: boolean | null
  }

  export type SterilizationCycleItemCountAggregateOutputType = {
    id: number
    short_code: number
    cycle_id: number
    instrument_id: number
    department_id: number
    success: number
    _all: number
  }


  export type SterilizationCycleItemAvgAggregateInputType = {
    id?: true
    cycle_id?: true
    instrument_id?: true
    department_id?: true
  }

  export type SterilizationCycleItemSumAggregateInputType = {
    id?: true
    cycle_id?: true
    instrument_id?: true
    department_id?: true
  }

  export type SterilizationCycleItemMinAggregateInputType = {
    id?: true
    short_code?: true
    cycle_id?: true
    instrument_id?: true
    department_id?: true
    success?: true
  }

  export type SterilizationCycleItemMaxAggregateInputType = {
    id?: true
    short_code?: true
    cycle_id?: true
    instrument_id?: true
    department_id?: true
    success?: true
  }

  export type SterilizationCycleItemCountAggregateInputType = {
    id?: true
    short_code?: true
    cycle_id?: true
    instrument_id?: true
    department_id?: true
    success?: true
    _all?: true
  }

  export type SterilizationCycleItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SterilizationCycleItem to aggregate.
     */
    where?: SterilizationCycleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SterilizationCycleItems to fetch.
     */
    orderBy?: SterilizationCycleItemOrderByWithRelationInput | SterilizationCycleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SterilizationCycleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SterilizationCycleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SterilizationCycleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SterilizationCycleItems
    **/
    _count?: true | SterilizationCycleItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SterilizationCycleItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SterilizationCycleItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SterilizationCycleItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SterilizationCycleItemMaxAggregateInputType
  }

  export type GetSterilizationCycleItemAggregateType<T extends SterilizationCycleItemAggregateArgs> = {
        [P in keyof T & keyof AggregateSterilizationCycleItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSterilizationCycleItem[P]>
      : GetScalarType<T[P], AggregateSterilizationCycleItem[P]>
  }




  export type SterilizationCycleItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SterilizationCycleItemWhereInput
    orderBy?: SterilizationCycleItemOrderByWithAggregationInput | SterilizationCycleItemOrderByWithAggregationInput[]
    by: SterilizationCycleItemScalarFieldEnum[] | SterilizationCycleItemScalarFieldEnum
    having?: SterilizationCycleItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SterilizationCycleItemCountAggregateInputType | true
    _avg?: SterilizationCycleItemAvgAggregateInputType
    _sum?: SterilizationCycleItemSumAggregateInputType
    _min?: SterilizationCycleItemMinAggregateInputType
    _max?: SterilizationCycleItemMaxAggregateInputType
  }

  export type SterilizationCycleItemGroupByOutputType = {
    id: number
    short_code: string | null
    cycle_id: number
    instrument_id: number
    department_id: number
    success: boolean
    _count: SterilizationCycleItemCountAggregateOutputType | null
    _avg: SterilizationCycleItemAvgAggregateOutputType | null
    _sum: SterilizationCycleItemSumAggregateOutputType | null
    _min: SterilizationCycleItemMinAggregateOutputType | null
    _max: SterilizationCycleItemMaxAggregateOutputType | null
  }

  type GetSterilizationCycleItemGroupByPayload<T extends SterilizationCycleItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SterilizationCycleItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SterilizationCycleItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SterilizationCycleItemGroupByOutputType[P]>
            : GetScalarType<T[P], SterilizationCycleItemGroupByOutputType[P]>
        }
      >
    >


  export type SterilizationCycleItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    short_code?: boolean
    cycle_id?: boolean
    instrument_id?: boolean
    department_id?: boolean
    success?: boolean
    cycle?: boolean | SterilizationCycleDefaultArgs<ExtArgs>
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    usage?: boolean | SterilizationCycleItem$usageArgs<ExtArgs>
  }, ExtArgs["result"]["sterilizationCycleItem"]>



  export type SterilizationCycleItemSelectScalar = {
    id?: boolean
    short_code?: boolean
    cycle_id?: boolean
    instrument_id?: boolean
    department_id?: boolean
    success?: boolean
  }

  export type SterilizationCycleItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "short_code" | "cycle_id" | "instrument_id" | "department_id" | "success", ExtArgs["result"]["sterilizationCycleItem"]>
  export type SterilizationCycleItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cycle?: boolean | SterilizationCycleDefaultArgs<ExtArgs>
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    usage?: boolean | SterilizationCycleItem$usageArgs<ExtArgs>
  }

  export type $SterilizationCycleItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SterilizationCycleItem"
    objects: {
      cycle: Prisma.$SterilizationCyclePayload<ExtArgs>
      instrument: Prisma.$InstrumentPayload<ExtArgs>
      department: Prisma.$DepartmentPayload<ExtArgs>
      usage: Prisma.$InstrumentUsagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      short_code: string | null
      cycle_id: number
      instrument_id: number
      department_id: number
      success: boolean
    }, ExtArgs["result"]["sterilizationCycleItem"]>
    composites: {}
  }

  type SterilizationCycleItemGetPayload<S extends boolean | null | undefined | SterilizationCycleItemDefaultArgs> = $Result.GetResult<Prisma.$SterilizationCycleItemPayload, S>

  type SterilizationCycleItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SterilizationCycleItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SterilizationCycleItemCountAggregateInputType | true
    }

  export interface SterilizationCycleItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SterilizationCycleItem'], meta: { name: 'SterilizationCycleItem' } }
    /**
     * Find zero or one SterilizationCycleItem that matches the filter.
     * @param {SterilizationCycleItemFindUniqueArgs} args - Arguments to find a SterilizationCycleItem
     * @example
     * // Get one SterilizationCycleItem
     * const sterilizationCycleItem = await prisma.sterilizationCycleItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SterilizationCycleItemFindUniqueArgs>(args: SelectSubset<T, SterilizationCycleItemFindUniqueArgs<ExtArgs>>): Prisma__SterilizationCycleItemClient<$Result.GetResult<Prisma.$SterilizationCycleItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SterilizationCycleItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SterilizationCycleItemFindUniqueOrThrowArgs} args - Arguments to find a SterilizationCycleItem
     * @example
     * // Get one SterilizationCycleItem
     * const sterilizationCycleItem = await prisma.sterilizationCycleItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SterilizationCycleItemFindUniqueOrThrowArgs>(args: SelectSubset<T, SterilizationCycleItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SterilizationCycleItemClient<$Result.GetResult<Prisma.$SterilizationCycleItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SterilizationCycleItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SterilizationCycleItemFindFirstArgs} args - Arguments to find a SterilizationCycleItem
     * @example
     * // Get one SterilizationCycleItem
     * const sterilizationCycleItem = await prisma.sterilizationCycleItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SterilizationCycleItemFindFirstArgs>(args?: SelectSubset<T, SterilizationCycleItemFindFirstArgs<ExtArgs>>): Prisma__SterilizationCycleItemClient<$Result.GetResult<Prisma.$SterilizationCycleItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SterilizationCycleItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SterilizationCycleItemFindFirstOrThrowArgs} args - Arguments to find a SterilizationCycleItem
     * @example
     * // Get one SterilizationCycleItem
     * const sterilizationCycleItem = await prisma.sterilizationCycleItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SterilizationCycleItemFindFirstOrThrowArgs>(args?: SelectSubset<T, SterilizationCycleItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SterilizationCycleItemClient<$Result.GetResult<Prisma.$SterilizationCycleItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SterilizationCycleItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SterilizationCycleItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SterilizationCycleItems
     * const sterilizationCycleItems = await prisma.sterilizationCycleItem.findMany()
     * 
     * // Get first 10 SterilizationCycleItems
     * const sterilizationCycleItems = await prisma.sterilizationCycleItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sterilizationCycleItemWithIdOnly = await prisma.sterilizationCycleItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SterilizationCycleItemFindManyArgs>(args?: SelectSubset<T, SterilizationCycleItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SterilizationCycleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SterilizationCycleItem.
     * @param {SterilizationCycleItemCreateArgs} args - Arguments to create a SterilizationCycleItem.
     * @example
     * // Create one SterilizationCycleItem
     * const SterilizationCycleItem = await prisma.sterilizationCycleItem.create({
     *   data: {
     *     // ... data to create a SterilizationCycleItem
     *   }
     * })
     * 
     */
    create<T extends SterilizationCycleItemCreateArgs>(args: SelectSubset<T, SterilizationCycleItemCreateArgs<ExtArgs>>): Prisma__SterilizationCycleItemClient<$Result.GetResult<Prisma.$SterilizationCycleItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SterilizationCycleItems.
     * @param {SterilizationCycleItemCreateManyArgs} args - Arguments to create many SterilizationCycleItems.
     * @example
     * // Create many SterilizationCycleItems
     * const sterilizationCycleItem = await prisma.sterilizationCycleItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SterilizationCycleItemCreateManyArgs>(args?: SelectSubset<T, SterilizationCycleItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SterilizationCycleItem.
     * @param {SterilizationCycleItemDeleteArgs} args - Arguments to delete one SterilizationCycleItem.
     * @example
     * // Delete one SterilizationCycleItem
     * const SterilizationCycleItem = await prisma.sterilizationCycleItem.delete({
     *   where: {
     *     // ... filter to delete one SterilizationCycleItem
     *   }
     * })
     * 
     */
    delete<T extends SterilizationCycleItemDeleteArgs>(args: SelectSubset<T, SterilizationCycleItemDeleteArgs<ExtArgs>>): Prisma__SterilizationCycleItemClient<$Result.GetResult<Prisma.$SterilizationCycleItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SterilizationCycleItem.
     * @param {SterilizationCycleItemUpdateArgs} args - Arguments to update one SterilizationCycleItem.
     * @example
     * // Update one SterilizationCycleItem
     * const sterilizationCycleItem = await prisma.sterilizationCycleItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SterilizationCycleItemUpdateArgs>(args: SelectSubset<T, SterilizationCycleItemUpdateArgs<ExtArgs>>): Prisma__SterilizationCycleItemClient<$Result.GetResult<Prisma.$SterilizationCycleItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SterilizationCycleItems.
     * @param {SterilizationCycleItemDeleteManyArgs} args - Arguments to filter SterilizationCycleItems to delete.
     * @example
     * // Delete a few SterilizationCycleItems
     * const { count } = await prisma.sterilizationCycleItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SterilizationCycleItemDeleteManyArgs>(args?: SelectSubset<T, SterilizationCycleItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SterilizationCycleItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SterilizationCycleItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SterilizationCycleItems
     * const sterilizationCycleItem = await prisma.sterilizationCycleItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SterilizationCycleItemUpdateManyArgs>(args: SelectSubset<T, SterilizationCycleItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SterilizationCycleItem.
     * @param {SterilizationCycleItemUpsertArgs} args - Arguments to update or create a SterilizationCycleItem.
     * @example
     * // Update or create a SterilizationCycleItem
     * const sterilizationCycleItem = await prisma.sterilizationCycleItem.upsert({
     *   create: {
     *     // ... data to create a SterilizationCycleItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SterilizationCycleItem we want to update
     *   }
     * })
     */
    upsert<T extends SterilizationCycleItemUpsertArgs>(args: SelectSubset<T, SterilizationCycleItemUpsertArgs<ExtArgs>>): Prisma__SterilizationCycleItemClient<$Result.GetResult<Prisma.$SterilizationCycleItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SterilizationCycleItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SterilizationCycleItemCountArgs} args - Arguments to filter SterilizationCycleItems to count.
     * @example
     * // Count the number of SterilizationCycleItems
     * const count = await prisma.sterilizationCycleItem.count({
     *   where: {
     *     // ... the filter for the SterilizationCycleItems we want to count
     *   }
     * })
    **/
    count<T extends SterilizationCycleItemCountArgs>(
      args?: Subset<T, SterilizationCycleItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SterilizationCycleItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SterilizationCycleItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SterilizationCycleItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SterilizationCycleItemAggregateArgs>(args: Subset<T, SterilizationCycleItemAggregateArgs>): Prisma.PrismaPromise<GetSterilizationCycleItemAggregateType<T>>

    /**
     * Group by SterilizationCycleItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SterilizationCycleItemGroupByArgs} args - Group by arguments.
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
      T extends SterilizationCycleItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SterilizationCycleItemGroupByArgs['orderBy'] }
        : { orderBy?: SterilizationCycleItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SterilizationCycleItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSterilizationCycleItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SterilizationCycleItem model
   */
  readonly fields: SterilizationCycleItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SterilizationCycleItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SterilizationCycleItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cycle<T extends SterilizationCycleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SterilizationCycleDefaultArgs<ExtArgs>>): Prisma__SterilizationCycleClient<$Result.GetResult<Prisma.$SterilizationCyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    instrument<T extends InstrumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstrumentDefaultArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usage<T extends SterilizationCycleItem$usageArgs<ExtArgs> = {}>(args?: Subset<T, SterilizationCycleItem$usageArgs<ExtArgs>>): Prisma__InstrumentUsageClient<$Result.GetResult<Prisma.$InstrumentUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SterilizationCycleItem model
   */
  interface SterilizationCycleItemFieldRefs {
    readonly id: FieldRef<"SterilizationCycleItem", 'Int'>
    readonly short_code: FieldRef<"SterilizationCycleItem", 'String'>
    readonly cycle_id: FieldRef<"SterilizationCycleItem", 'Int'>
    readonly instrument_id: FieldRef<"SterilizationCycleItem", 'Int'>
    readonly department_id: FieldRef<"SterilizationCycleItem", 'Int'>
    readonly success: FieldRef<"SterilizationCycleItem", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * SterilizationCycleItem findUnique
   */
  export type SterilizationCycleItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilizationCycleItem
     */
    select?: SterilizationCycleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilizationCycleItem
     */
    omit?: SterilizationCycleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizationCycleItemInclude<ExtArgs> | null
    /**
     * Filter, which SterilizationCycleItem to fetch.
     */
    where: SterilizationCycleItemWhereUniqueInput
  }

  /**
   * SterilizationCycleItem findUniqueOrThrow
   */
  export type SterilizationCycleItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilizationCycleItem
     */
    select?: SterilizationCycleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilizationCycleItem
     */
    omit?: SterilizationCycleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizationCycleItemInclude<ExtArgs> | null
    /**
     * Filter, which SterilizationCycleItem to fetch.
     */
    where: SterilizationCycleItemWhereUniqueInput
  }

  /**
   * SterilizationCycleItem findFirst
   */
  export type SterilizationCycleItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilizationCycleItem
     */
    select?: SterilizationCycleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilizationCycleItem
     */
    omit?: SterilizationCycleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizationCycleItemInclude<ExtArgs> | null
    /**
     * Filter, which SterilizationCycleItem to fetch.
     */
    where?: SterilizationCycleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SterilizationCycleItems to fetch.
     */
    orderBy?: SterilizationCycleItemOrderByWithRelationInput | SterilizationCycleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SterilizationCycleItems.
     */
    cursor?: SterilizationCycleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SterilizationCycleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SterilizationCycleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SterilizationCycleItems.
     */
    distinct?: SterilizationCycleItemScalarFieldEnum | SterilizationCycleItemScalarFieldEnum[]
  }

  /**
   * SterilizationCycleItem findFirstOrThrow
   */
  export type SterilizationCycleItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilizationCycleItem
     */
    select?: SterilizationCycleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilizationCycleItem
     */
    omit?: SterilizationCycleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizationCycleItemInclude<ExtArgs> | null
    /**
     * Filter, which SterilizationCycleItem to fetch.
     */
    where?: SterilizationCycleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SterilizationCycleItems to fetch.
     */
    orderBy?: SterilizationCycleItemOrderByWithRelationInput | SterilizationCycleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SterilizationCycleItems.
     */
    cursor?: SterilizationCycleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SterilizationCycleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SterilizationCycleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SterilizationCycleItems.
     */
    distinct?: SterilizationCycleItemScalarFieldEnum | SterilizationCycleItemScalarFieldEnum[]
  }

  /**
   * SterilizationCycleItem findMany
   */
  export type SterilizationCycleItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilizationCycleItem
     */
    select?: SterilizationCycleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilizationCycleItem
     */
    omit?: SterilizationCycleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizationCycleItemInclude<ExtArgs> | null
    /**
     * Filter, which SterilizationCycleItems to fetch.
     */
    where?: SterilizationCycleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SterilizationCycleItems to fetch.
     */
    orderBy?: SterilizationCycleItemOrderByWithRelationInput | SterilizationCycleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SterilizationCycleItems.
     */
    cursor?: SterilizationCycleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SterilizationCycleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SterilizationCycleItems.
     */
    skip?: number
    distinct?: SterilizationCycleItemScalarFieldEnum | SterilizationCycleItemScalarFieldEnum[]
  }

  /**
   * SterilizationCycleItem create
   */
  export type SterilizationCycleItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilizationCycleItem
     */
    select?: SterilizationCycleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilizationCycleItem
     */
    omit?: SterilizationCycleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizationCycleItemInclude<ExtArgs> | null
    /**
     * The data needed to create a SterilizationCycleItem.
     */
    data: XOR<SterilizationCycleItemCreateInput, SterilizationCycleItemUncheckedCreateInput>
  }

  /**
   * SterilizationCycleItem createMany
   */
  export type SterilizationCycleItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SterilizationCycleItems.
     */
    data: SterilizationCycleItemCreateManyInput | SterilizationCycleItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SterilizationCycleItem update
   */
  export type SterilizationCycleItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilizationCycleItem
     */
    select?: SterilizationCycleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilizationCycleItem
     */
    omit?: SterilizationCycleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizationCycleItemInclude<ExtArgs> | null
    /**
     * The data needed to update a SterilizationCycleItem.
     */
    data: XOR<SterilizationCycleItemUpdateInput, SterilizationCycleItemUncheckedUpdateInput>
    /**
     * Choose, which SterilizationCycleItem to update.
     */
    where: SterilizationCycleItemWhereUniqueInput
  }

  /**
   * SterilizationCycleItem updateMany
   */
  export type SterilizationCycleItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SterilizationCycleItems.
     */
    data: XOR<SterilizationCycleItemUpdateManyMutationInput, SterilizationCycleItemUncheckedUpdateManyInput>
    /**
     * Filter which SterilizationCycleItems to update
     */
    where?: SterilizationCycleItemWhereInput
    /**
     * Limit how many SterilizationCycleItems to update.
     */
    limit?: number
  }

  /**
   * SterilizationCycleItem upsert
   */
  export type SterilizationCycleItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilizationCycleItem
     */
    select?: SterilizationCycleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilizationCycleItem
     */
    omit?: SterilizationCycleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizationCycleItemInclude<ExtArgs> | null
    /**
     * The filter to search for the SterilizationCycleItem to update in case it exists.
     */
    where: SterilizationCycleItemWhereUniqueInput
    /**
     * In case the SterilizationCycleItem found by the `where` argument doesn't exist, create a new SterilizationCycleItem with this data.
     */
    create: XOR<SterilizationCycleItemCreateInput, SterilizationCycleItemUncheckedCreateInput>
    /**
     * In case the SterilizationCycleItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SterilizationCycleItemUpdateInput, SterilizationCycleItemUncheckedUpdateInput>
  }

  /**
   * SterilizationCycleItem delete
   */
  export type SterilizationCycleItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilizationCycleItem
     */
    select?: SterilizationCycleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilizationCycleItem
     */
    omit?: SterilizationCycleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizationCycleItemInclude<ExtArgs> | null
    /**
     * Filter which SterilizationCycleItem to delete.
     */
    where: SterilizationCycleItemWhereUniqueInput
  }

  /**
   * SterilizationCycleItem deleteMany
   */
  export type SterilizationCycleItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SterilizationCycleItems to delete
     */
    where?: SterilizationCycleItemWhereInput
    /**
     * Limit how many SterilizationCycleItems to delete.
     */
    limit?: number
  }

  /**
   * SterilizationCycleItem.usage
   */
  export type SterilizationCycleItem$usageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentUsage
     */
    select?: InstrumentUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstrumentUsage
     */
    omit?: InstrumentUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentUsageInclude<ExtArgs> | null
    where?: InstrumentUsageWhereInput
  }

  /**
   * SterilizationCycleItem without action
   */
  export type SterilizationCycleItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilizationCycleItem
     */
    select?: SterilizationCycleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilizationCycleItem
     */
    omit?: SterilizationCycleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilizationCycleItemInclude<ExtArgs> | null
  }


  /**
   * Model InstrumentUsage
   */

  export type AggregateInstrumentUsage = {
    _count: InstrumentUsageCountAggregateOutputType | null
    _avg: InstrumentUsageAvgAggregateOutputType | null
    _sum: InstrumentUsageSumAggregateOutputType | null
    _min: InstrumentUsageMinAggregateOutputType | null
    _max: InstrumentUsageMaxAggregateOutputType | null
  }

  export type InstrumentUsageAvgAggregateOutputType = {
    id: number | null
    cycle_item_id: number | null
    doc_id: number | null
  }

  export type InstrumentUsageSumAggregateOutputType = {
    id: number | null
    cycle_item_id: number | null
    doc_id: number | null
  }

  export type InstrumentUsageMinAggregateOutputType = {
    id: number | null
    cycle_item_id: number | null
    used_by: string | null
    patient: string | null
    doc_id: number | null
    doc_status: $Enums.DocStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstrumentUsageMaxAggregateOutputType = {
    id: number | null
    cycle_item_id: number | null
    used_by: string | null
    patient: string | null
    doc_id: number | null
    doc_status: $Enums.DocStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstrumentUsageCountAggregateOutputType = {
    id: number
    cycle_item_id: number
    used_by: number
    patient: number
    doc_id: number
    doc_status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InstrumentUsageAvgAggregateInputType = {
    id?: true
    cycle_item_id?: true
    doc_id?: true
  }

  export type InstrumentUsageSumAggregateInputType = {
    id?: true
    cycle_item_id?: true
    doc_id?: true
  }

  export type InstrumentUsageMinAggregateInputType = {
    id?: true
    cycle_item_id?: true
    used_by?: true
    patient?: true
    doc_id?: true
    doc_status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstrumentUsageMaxAggregateInputType = {
    id?: true
    cycle_item_id?: true
    used_by?: true
    patient?: true
    doc_id?: true
    doc_status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstrumentUsageCountAggregateInputType = {
    id?: true
    cycle_item_id?: true
    used_by?: true
    patient?: true
    doc_id?: true
    doc_status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InstrumentUsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstrumentUsage to aggregate.
     */
    where?: InstrumentUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstrumentUsages to fetch.
     */
    orderBy?: InstrumentUsageOrderByWithRelationInput | InstrumentUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstrumentUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstrumentUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstrumentUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InstrumentUsages
    **/
    _count?: true | InstrumentUsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstrumentUsageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstrumentUsageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstrumentUsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstrumentUsageMaxAggregateInputType
  }

  export type GetInstrumentUsageAggregateType<T extends InstrumentUsageAggregateArgs> = {
        [P in keyof T & keyof AggregateInstrumentUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstrumentUsage[P]>
      : GetScalarType<T[P], AggregateInstrumentUsage[P]>
  }




  export type InstrumentUsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstrumentUsageWhereInput
    orderBy?: InstrumentUsageOrderByWithAggregationInput | InstrumentUsageOrderByWithAggregationInput[]
    by: InstrumentUsageScalarFieldEnum[] | InstrumentUsageScalarFieldEnum
    having?: InstrumentUsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstrumentUsageCountAggregateInputType | true
    _avg?: InstrumentUsageAvgAggregateInputType
    _sum?: InstrumentUsageSumAggregateInputType
    _min?: InstrumentUsageMinAggregateInputType
    _max?: InstrumentUsageMaxAggregateInputType
  }

  export type InstrumentUsageGroupByOutputType = {
    id: number
    cycle_item_id: number
    used_by: string
    patient: string
    doc_id: number
    doc_status: $Enums.DocStatus
    createdAt: Date
    updatedAt: Date
    _count: InstrumentUsageCountAggregateOutputType | null
    _avg: InstrumentUsageAvgAggregateOutputType | null
    _sum: InstrumentUsageSumAggregateOutputType | null
    _min: InstrumentUsageMinAggregateOutputType | null
    _max: InstrumentUsageMaxAggregateOutputType | null
  }

  type GetInstrumentUsageGroupByPayload<T extends InstrumentUsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstrumentUsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstrumentUsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstrumentUsageGroupByOutputType[P]>
            : GetScalarType<T[P], InstrumentUsageGroupByOutputType[P]>
        }
      >
    >


  export type InstrumentUsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cycle_item_id?: boolean
    used_by?: boolean
    patient?: boolean
    doc_id?: boolean
    doc_status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cycle_item?: boolean | SterilizationCycleItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instrumentUsage"]>



  export type InstrumentUsageSelectScalar = {
    id?: boolean
    cycle_item_id?: boolean
    used_by?: boolean
    patient?: boolean
    doc_id?: boolean
    doc_status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InstrumentUsageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cycle_item_id" | "used_by" | "patient" | "doc_id" | "doc_status" | "createdAt" | "updatedAt", ExtArgs["result"]["instrumentUsage"]>
  export type InstrumentUsageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cycle_item?: boolean | SterilizationCycleItemDefaultArgs<ExtArgs>
  }

  export type $InstrumentUsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InstrumentUsage"
    objects: {
      cycle_item: Prisma.$SterilizationCycleItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cycle_item_id: number
      used_by: string
      patient: string
      doc_id: number
      doc_status: $Enums.DocStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["instrumentUsage"]>
    composites: {}
  }

  type InstrumentUsageGetPayload<S extends boolean | null | undefined | InstrumentUsageDefaultArgs> = $Result.GetResult<Prisma.$InstrumentUsagePayload, S>

  type InstrumentUsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstrumentUsageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstrumentUsageCountAggregateInputType | true
    }

  export interface InstrumentUsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InstrumentUsage'], meta: { name: 'InstrumentUsage' } }
    /**
     * Find zero or one InstrumentUsage that matches the filter.
     * @param {InstrumentUsageFindUniqueArgs} args - Arguments to find a InstrumentUsage
     * @example
     * // Get one InstrumentUsage
     * const instrumentUsage = await prisma.instrumentUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstrumentUsageFindUniqueArgs>(args: SelectSubset<T, InstrumentUsageFindUniqueArgs<ExtArgs>>): Prisma__InstrumentUsageClient<$Result.GetResult<Prisma.$InstrumentUsagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InstrumentUsage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstrumentUsageFindUniqueOrThrowArgs} args - Arguments to find a InstrumentUsage
     * @example
     * // Get one InstrumentUsage
     * const instrumentUsage = await prisma.instrumentUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstrumentUsageFindUniqueOrThrowArgs>(args: SelectSubset<T, InstrumentUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstrumentUsageClient<$Result.GetResult<Prisma.$InstrumentUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstrumentUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentUsageFindFirstArgs} args - Arguments to find a InstrumentUsage
     * @example
     * // Get one InstrumentUsage
     * const instrumentUsage = await prisma.instrumentUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstrumentUsageFindFirstArgs>(args?: SelectSubset<T, InstrumentUsageFindFirstArgs<ExtArgs>>): Prisma__InstrumentUsageClient<$Result.GetResult<Prisma.$InstrumentUsagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstrumentUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentUsageFindFirstOrThrowArgs} args - Arguments to find a InstrumentUsage
     * @example
     * // Get one InstrumentUsage
     * const instrumentUsage = await prisma.instrumentUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstrumentUsageFindFirstOrThrowArgs>(args?: SelectSubset<T, InstrumentUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstrumentUsageClient<$Result.GetResult<Prisma.$InstrumentUsagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InstrumentUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InstrumentUsages
     * const instrumentUsages = await prisma.instrumentUsage.findMany()
     * 
     * // Get first 10 InstrumentUsages
     * const instrumentUsages = await prisma.instrumentUsage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instrumentUsageWithIdOnly = await prisma.instrumentUsage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstrumentUsageFindManyArgs>(args?: SelectSubset<T, InstrumentUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstrumentUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InstrumentUsage.
     * @param {InstrumentUsageCreateArgs} args - Arguments to create a InstrumentUsage.
     * @example
     * // Create one InstrumentUsage
     * const InstrumentUsage = await prisma.instrumentUsage.create({
     *   data: {
     *     // ... data to create a InstrumentUsage
     *   }
     * })
     * 
     */
    create<T extends InstrumentUsageCreateArgs>(args: SelectSubset<T, InstrumentUsageCreateArgs<ExtArgs>>): Prisma__InstrumentUsageClient<$Result.GetResult<Prisma.$InstrumentUsagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InstrumentUsages.
     * @param {InstrumentUsageCreateManyArgs} args - Arguments to create many InstrumentUsages.
     * @example
     * // Create many InstrumentUsages
     * const instrumentUsage = await prisma.instrumentUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstrumentUsageCreateManyArgs>(args?: SelectSubset<T, InstrumentUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InstrumentUsage.
     * @param {InstrumentUsageDeleteArgs} args - Arguments to delete one InstrumentUsage.
     * @example
     * // Delete one InstrumentUsage
     * const InstrumentUsage = await prisma.instrumentUsage.delete({
     *   where: {
     *     // ... filter to delete one InstrumentUsage
     *   }
     * })
     * 
     */
    delete<T extends InstrumentUsageDeleteArgs>(args: SelectSubset<T, InstrumentUsageDeleteArgs<ExtArgs>>): Prisma__InstrumentUsageClient<$Result.GetResult<Prisma.$InstrumentUsagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InstrumentUsage.
     * @param {InstrumentUsageUpdateArgs} args - Arguments to update one InstrumentUsage.
     * @example
     * // Update one InstrumentUsage
     * const instrumentUsage = await prisma.instrumentUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstrumentUsageUpdateArgs>(args: SelectSubset<T, InstrumentUsageUpdateArgs<ExtArgs>>): Prisma__InstrumentUsageClient<$Result.GetResult<Prisma.$InstrumentUsagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InstrumentUsages.
     * @param {InstrumentUsageDeleteManyArgs} args - Arguments to filter InstrumentUsages to delete.
     * @example
     * // Delete a few InstrumentUsages
     * const { count } = await prisma.instrumentUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstrumentUsageDeleteManyArgs>(args?: SelectSubset<T, InstrumentUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstrumentUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InstrumentUsages
     * const instrumentUsage = await prisma.instrumentUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstrumentUsageUpdateManyArgs>(args: SelectSubset<T, InstrumentUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InstrumentUsage.
     * @param {InstrumentUsageUpsertArgs} args - Arguments to update or create a InstrumentUsage.
     * @example
     * // Update or create a InstrumentUsage
     * const instrumentUsage = await prisma.instrumentUsage.upsert({
     *   create: {
     *     // ... data to create a InstrumentUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InstrumentUsage we want to update
     *   }
     * })
     */
    upsert<T extends InstrumentUsageUpsertArgs>(args: SelectSubset<T, InstrumentUsageUpsertArgs<ExtArgs>>): Prisma__InstrumentUsageClient<$Result.GetResult<Prisma.$InstrumentUsagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InstrumentUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentUsageCountArgs} args - Arguments to filter InstrumentUsages to count.
     * @example
     * // Count the number of InstrumentUsages
     * const count = await prisma.instrumentUsage.count({
     *   where: {
     *     // ... the filter for the InstrumentUsages we want to count
     *   }
     * })
    **/
    count<T extends InstrumentUsageCountArgs>(
      args?: Subset<T, InstrumentUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstrumentUsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InstrumentUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstrumentUsageAggregateArgs>(args: Subset<T, InstrumentUsageAggregateArgs>): Prisma.PrismaPromise<GetInstrumentUsageAggregateType<T>>

    /**
     * Group by InstrumentUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentUsageGroupByArgs} args - Group by arguments.
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
      T extends InstrumentUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstrumentUsageGroupByArgs['orderBy'] }
        : { orderBy?: InstrumentUsageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstrumentUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstrumentUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InstrumentUsage model
   */
  readonly fields: InstrumentUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InstrumentUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstrumentUsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cycle_item<T extends SterilizationCycleItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SterilizationCycleItemDefaultArgs<ExtArgs>>): Prisma__SterilizationCycleItemClient<$Result.GetResult<Prisma.$SterilizationCycleItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InstrumentUsage model
   */
  interface InstrumentUsageFieldRefs {
    readonly id: FieldRef<"InstrumentUsage", 'Int'>
    readonly cycle_item_id: FieldRef<"InstrumentUsage", 'Int'>
    readonly used_by: FieldRef<"InstrumentUsage", 'String'>
    readonly patient: FieldRef<"InstrumentUsage", 'String'>
    readonly doc_id: FieldRef<"InstrumentUsage", 'Int'>
    readonly doc_status: FieldRef<"InstrumentUsage", 'DocStatus'>
    readonly createdAt: FieldRef<"InstrumentUsage", 'DateTime'>
    readonly updatedAt: FieldRef<"InstrumentUsage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InstrumentUsage findUnique
   */
  export type InstrumentUsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentUsage
     */
    select?: InstrumentUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstrumentUsage
     */
    omit?: InstrumentUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentUsageInclude<ExtArgs> | null
    /**
     * Filter, which InstrumentUsage to fetch.
     */
    where: InstrumentUsageWhereUniqueInput
  }

  /**
   * InstrumentUsage findUniqueOrThrow
   */
  export type InstrumentUsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentUsage
     */
    select?: InstrumentUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstrumentUsage
     */
    omit?: InstrumentUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentUsageInclude<ExtArgs> | null
    /**
     * Filter, which InstrumentUsage to fetch.
     */
    where: InstrumentUsageWhereUniqueInput
  }

  /**
   * InstrumentUsage findFirst
   */
  export type InstrumentUsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentUsage
     */
    select?: InstrumentUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstrumentUsage
     */
    omit?: InstrumentUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentUsageInclude<ExtArgs> | null
    /**
     * Filter, which InstrumentUsage to fetch.
     */
    where?: InstrumentUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstrumentUsages to fetch.
     */
    orderBy?: InstrumentUsageOrderByWithRelationInput | InstrumentUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstrumentUsages.
     */
    cursor?: InstrumentUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstrumentUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstrumentUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstrumentUsages.
     */
    distinct?: InstrumentUsageScalarFieldEnum | InstrumentUsageScalarFieldEnum[]
  }

  /**
   * InstrumentUsage findFirstOrThrow
   */
  export type InstrumentUsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentUsage
     */
    select?: InstrumentUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstrumentUsage
     */
    omit?: InstrumentUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentUsageInclude<ExtArgs> | null
    /**
     * Filter, which InstrumentUsage to fetch.
     */
    where?: InstrumentUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstrumentUsages to fetch.
     */
    orderBy?: InstrumentUsageOrderByWithRelationInput | InstrumentUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstrumentUsages.
     */
    cursor?: InstrumentUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstrumentUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstrumentUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstrumentUsages.
     */
    distinct?: InstrumentUsageScalarFieldEnum | InstrumentUsageScalarFieldEnum[]
  }

  /**
   * InstrumentUsage findMany
   */
  export type InstrumentUsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentUsage
     */
    select?: InstrumentUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstrumentUsage
     */
    omit?: InstrumentUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentUsageInclude<ExtArgs> | null
    /**
     * Filter, which InstrumentUsages to fetch.
     */
    where?: InstrumentUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstrumentUsages to fetch.
     */
    orderBy?: InstrumentUsageOrderByWithRelationInput | InstrumentUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InstrumentUsages.
     */
    cursor?: InstrumentUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstrumentUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstrumentUsages.
     */
    skip?: number
    distinct?: InstrumentUsageScalarFieldEnum | InstrumentUsageScalarFieldEnum[]
  }

  /**
   * InstrumentUsage create
   */
  export type InstrumentUsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentUsage
     */
    select?: InstrumentUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstrumentUsage
     */
    omit?: InstrumentUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentUsageInclude<ExtArgs> | null
    /**
     * The data needed to create a InstrumentUsage.
     */
    data: XOR<InstrumentUsageCreateInput, InstrumentUsageUncheckedCreateInput>
  }

  /**
   * InstrumentUsage createMany
   */
  export type InstrumentUsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InstrumentUsages.
     */
    data: InstrumentUsageCreateManyInput | InstrumentUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InstrumentUsage update
   */
  export type InstrumentUsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentUsage
     */
    select?: InstrumentUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstrumentUsage
     */
    omit?: InstrumentUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentUsageInclude<ExtArgs> | null
    /**
     * The data needed to update a InstrumentUsage.
     */
    data: XOR<InstrumentUsageUpdateInput, InstrumentUsageUncheckedUpdateInput>
    /**
     * Choose, which InstrumentUsage to update.
     */
    where: InstrumentUsageWhereUniqueInput
  }

  /**
   * InstrumentUsage updateMany
   */
  export type InstrumentUsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InstrumentUsages.
     */
    data: XOR<InstrumentUsageUpdateManyMutationInput, InstrumentUsageUncheckedUpdateManyInput>
    /**
     * Filter which InstrumentUsages to update
     */
    where?: InstrumentUsageWhereInput
    /**
     * Limit how many InstrumentUsages to update.
     */
    limit?: number
  }

  /**
   * InstrumentUsage upsert
   */
  export type InstrumentUsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentUsage
     */
    select?: InstrumentUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstrumentUsage
     */
    omit?: InstrumentUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentUsageInclude<ExtArgs> | null
    /**
     * The filter to search for the InstrumentUsage to update in case it exists.
     */
    where: InstrumentUsageWhereUniqueInput
    /**
     * In case the InstrumentUsage found by the `where` argument doesn't exist, create a new InstrumentUsage with this data.
     */
    create: XOR<InstrumentUsageCreateInput, InstrumentUsageUncheckedCreateInput>
    /**
     * In case the InstrumentUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstrumentUsageUpdateInput, InstrumentUsageUncheckedUpdateInput>
  }

  /**
   * InstrumentUsage delete
   */
  export type InstrumentUsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentUsage
     */
    select?: InstrumentUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstrumentUsage
     */
    omit?: InstrumentUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentUsageInclude<ExtArgs> | null
    /**
     * Filter which InstrumentUsage to delete.
     */
    where: InstrumentUsageWhereUniqueInput
  }

  /**
   * InstrumentUsage deleteMany
   */
  export type InstrumentUsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstrumentUsages to delete
     */
    where?: InstrumentUsageWhereInput
    /**
     * Limit how many InstrumentUsages to delete.
     */
    limit?: number
  }

  /**
   * InstrumentUsage without action
   */
  export type InstrumentUsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentUsage
     */
    select?: InstrumentUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstrumentUsage
     */
    omit?: InstrumentUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentUsageInclude<ExtArgs> | null
  }


  /**
   * Model Printer
   */

  export type AggregatePrinter = {
    _count: PrinterCountAggregateOutputType | null
    _avg: PrinterAvgAggregateOutputType | null
    _sum: PrinterSumAggregateOutputType | null
    _min: PrinterMinAggregateOutputType | null
    _max: PrinterMaxAggregateOutputType | null
  }

  export type PrinterAvgAggregateOutputType = {
    id: number | null
    port: number | null
  }

  export type PrinterSumAggregateOutputType = {
    id: number | null
    port: number | null
  }

  export type PrinterMinAggregateOutputType = {
    id: number | null
    name: string | null
    ip_address: string | null
    port: number | null
    active: boolean | null
    created_at: Date | null
  }

  export type PrinterMaxAggregateOutputType = {
    id: number | null
    name: string | null
    ip_address: string | null
    port: number | null
    active: boolean | null
    created_at: Date | null
  }

  export type PrinterCountAggregateOutputType = {
    id: number
    name: number
    ip_address: number
    port: number
    active: number
    created_at: number
    _all: number
  }


  export type PrinterAvgAggregateInputType = {
    id?: true
    port?: true
  }

  export type PrinterSumAggregateInputType = {
    id?: true
    port?: true
  }

  export type PrinterMinAggregateInputType = {
    id?: true
    name?: true
    ip_address?: true
    port?: true
    active?: true
    created_at?: true
  }

  export type PrinterMaxAggregateInputType = {
    id?: true
    name?: true
    ip_address?: true
    port?: true
    active?: true
    created_at?: true
  }

  export type PrinterCountAggregateInputType = {
    id?: true
    name?: true
    ip_address?: true
    port?: true
    active?: true
    created_at?: true
    _all?: true
  }

  export type PrinterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Printer to aggregate.
     */
    where?: PrinterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Printers to fetch.
     */
    orderBy?: PrinterOrderByWithRelationInput | PrinterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrinterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Printers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Printers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Printers
    **/
    _count?: true | PrinterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrinterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrinterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrinterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrinterMaxAggregateInputType
  }

  export type GetPrinterAggregateType<T extends PrinterAggregateArgs> = {
        [P in keyof T & keyof AggregatePrinter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrinter[P]>
      : GetScalarType<T[P], AggregatePrinter[P]>
  }




  export type PrinterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrinterWhereInput
    orderBy?: PrinterOrderByWithAggregationInput | PrinterOrderByWithAggregationInput[]
    by: PrinterScalarFieldEnum[] | PrinterScalarFieldEnum
    having?: PrinterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrinterCountAggregateInputType | true
    _avg?: PrinterAvgAggregateInputType
    _sum?: PrinterSumAggregateInputType
    _min?: PrinterMinAggregateInputType
    _max?: PrinterMaxAggregateInputType
  }

  export type PrinterGroupByOutputType = {
    id: number
    name: string
    ip_address: string
    port: number
    active: boolean
    created_at: Date
    _count: PrinterCountAggregateOutputType | null
    _avg: PrinterAvgAggregateOutputType | null
    _sum: PrinterSumAggregateOutputType | null
    _min: PrinterMinAggregateOutputType | null
    _max: PrinterMaxAggregateOutputType | null
  }

  type GetPrinterGroupByPayload<T extends PrinterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrinterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrinterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrinterGroupByOutputType[P]>
            : GetScalarType<T[P], PrinterGroupByOutputType[P]>
        }
      >
    >


  export type PrinterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ip_address?: boolean
    port?: boolean
    active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["printer"]>



  export type PrinterSelectScalar = {
    id?: boolean
    name?: boolean
    ip_address?: boolean
    port?: boolean
    active?: boolean
    created_at?: boolean
  }

  export type PrinterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "ip_address" | "port" | "active" | "created_at", ExtArgs["result"]["printer"]>

  export type $PrinterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Printer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      ip_address: string
      port: number
      active: boolean
      created_at: Date
    }, ExtArgs["result"]["printer"]>
    composites: {}
  }

  type PrinterGetPayload<S extends boolean | null | undefined | PrinterDefaultArgs> = $Result.GetResult<Prisma.$PrinterPayload, S>

  type PrinterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrinterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrinterCountAggregateInputType | true
    }

  export interface PrinterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Printer'], meta: { name: 'Printer' } }
    /**
     * Find zero or one Printer that matches the filter.
     * @param {PrinterFindUniqueArgs} args - Arguments to find a Printer
     * @example
     * // Get one Printer
     * const printer = await prisma.printer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrinterFindUniqueArgs>(args: SelectSubset<T, PrinterFindUniqueArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Printer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrinterFindUniqueOrThrowArgs} args - Arguments to find a Printer
     * @example
     * // Get one Printer
     * const printer = await prisma.printer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrinterFindUniqueOrThrowArgs>(args: SelectSubset<T, PrinterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Printer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrinterFindFirstArgs} args - Arguments to find a Printer
     * @example
     * // Get one Printer
     * const printer = await prisma.printer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrinterFindFirstArgs>(args?: SelectSubset<T, PrinterFindFirstArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Printer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrinterFindFirstOrThrowArgs} args - Arguments to find a Printer
     * @example
     * // Get one Printer
     * const printer = await prisma.printer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrinterFindFirstOrThrowArgs>(args?: SelectSubset<T, PrinterFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Printers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrinterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Printers
     * const printers = await prisma.printer.findMany()
     * 
     * // Get first 10 Printers
     * const printers = await prisma.printer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const printerWithIdOnly = await prisma.printer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrinterFindManyArgs>(args?: SelectSubset<T, PrinterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Printer.
     * @param {PrinterCreateArgs} args - Arguments to create a Printer.
     * @example
     * // Create one Printer
     * const Printer = await prisma.printer.create({
     *   data: {
     *     // ... data to create a Printer
     *   }
     * })
     * 
     */
    create<T extends PrinterCreateArgs>(args: SelectSubset<T, PrinterCreateArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Printers.
     * @param {PrinterCreateManyArgs} args - Arguments to create many Printers.
     * @example
     * // Create many Printers
     * const printer = await prisma.printer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrinterCreateManyArgs>(args?: SelectSubset<T, PrinterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Printer.
     * @param {PrinterDeleteArgs} args - Arguments to delete one Printer.
     * @example
     * // Delete one Printer
     * const Printer = await prisma.printer.delete({
     *   where: {
     *     // ... filter to delete one Printer
     *   }
     * })
     * 
     */
    delete<T extends PrinterDeleteArgs>(args: SelectSubset<T, PrinterDeleteArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Printer.
     * @param {PrinterUpdateArgs} args - Arguments to update one Printer.
     * @example
     * // Update one Printer
     * const printer = await prisma.printer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrinterUpdateArgs>(args: SelectSubset<T, PrinterUpdateArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Printers.
     * @param {PrinterDeleteManyArgs} args - Arguments to filter Printers to delete.
     * @example
     * // Delete a few Printers
     * const { count } = await prisma.printer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrinterDeleteManyArgs>(args?: SelectSubset<T, PrinterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Printers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrinterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Printers
     * const printer = await prisma.printer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrinterUpdateManyArgs>(args: SelectSubset<T, PrinterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Printer.
     * @param {PrinterUpsertArgs} args - Arguments to update or create a Printer.
     * @example
     * // Update or create a Printer
     * const printer = await prisma.printer.upsert({
     *   create: {
     *     // ... data to create a Printer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Printer we want to update
     *   }
     * })
     */
    upsert<T extends PrinterUpsertArgs>(args: SelectSubset<T, PrinterUpsertArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Printers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrinterCountArgs} args - Arguments to filter Printers to count.
     * @example
     * // Count the number of Printers
     * const count = await prisma.printer.count({
     *   where: {
     *     // ... the filter for the Printers we want to count
     *   }
     * })
    **/
    count<T extends PrinterCountArgs>(
      args?: Subset<T, PrinterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrinterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Printer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrinterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrinterAggregateArgs>(args: Subset<T, PrinterAggregateArgs>): Prisma.PrismaPromise<GetPrinterAggregateType<T>>

    /**
     * Group by Printer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrinterGroupByArgs} args - Group by arguments.
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
      T extends PrinterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrinterGroupByArgs['orderBy'] }
        : { orderBy?: PrinterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrinterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrinterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Printer model
   */
  readonly fields: PrinterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Printer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrinterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Printer model
   */
  interface PrinterFieldRefs {
    readonly id: FieldRef<"Printer", 'Int'>
    readonly name: FieldRef<"Printer", 'String'>
    readonly ip_address: FieldRef<"Printer", 'String'>
    readonly port: FieldRef<"Printer", 'Int'>
    readonly active: FieldRef<"Printer", 'Boolean'>
    readonly created_at: FieldRef<"Printer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Printer findUnique
   */
  export type PrinterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Filter, which Printer to fetch.
     */
    where: PrinterWhereUniqueInput
  }

  /**
   * Printer findUniqueOrThrow
   */
  export type PrinterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Filter, which Printer to fetch.
     */
    where: PrinterWhereUniqueInput
  }

  /**
   * Printer findFirst
   */
  export type PrinterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Filter, which Printer to fetch.
     */
    where?: PrinterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Printers to fetch.
     */
    orderBy?: PrinterOrderByWithRelationInput | PrinterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Printers.
     */
    cursor?: PrinterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Printers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Printers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Printers.
     */
    distinct?: PrinterScalarFieldEnum | PrinterScalarFieldEnum[]
  }

  /**
   * Printer findFirstOrThrow
   */
  export type PrinterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Filter, which Printer to fetch.
     */
    where?: PrinterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Printers to fetch.
     */
    orderBy?: PrinterOrderByWithRelationInput | PrinterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Printers.
     */
    cursor?: PrinterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Printers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Printers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Printers.
     */
    distinct?: PrinterScalarFieldEnum | PrinterScalarFieldEnum[]
  }

  /**
   * Printer findMany
   */
  export type PrinterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Filter, which Printers to fetch.
     */
    where?: PrinterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Printers to fetch.
     */
    orderBy?: PrinterOrderByWithRelationInput | PrinterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Printers.
     */
    cursor?: PrinterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Printers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Printers.
     */
    skip?: number
    distinct?: PrinterScalarFieldEnum | PrinterScalarFieldEnum[]
  }

  /**
   * Printer create
   */
  export type PrinterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * The data needed to create a Printer.
     */
    data: XOR<PrinterCreateInput, PrinterUncheckedCreateInput>
  }

  /**
   * Printer createMany
   */
  export type PrinterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Printers.
     */
    data: PrinterCreateManyInput | PrinterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Printer update
   */
  export type PrinterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * The data needed to update a Printer.
     */
    data: XOR<PrinterUpdateInput, PrinterUncheckedUpdateInput>
    /**
     * Choose, which Printer to update.
     */
    where: PrinterWhereUniqueInput
  }

  /**
   * Printer updateMany
   */
  export type PrinterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Printers.
     */
    data: XOR<PrinterUpdateManyMutationInput, PrinterUncheckedUpdateManyInput>
    /**
     * Filter which Printers to update
     */
    where?: PrinterWhereInput
    /**
     * Limit how many Printers to update.
     */
    limit?: number
  }

  /**
   * Printer upsert
   */
  export type PrinterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * The filter to search for the Printer to update in case it exists.
     */
    where: PrinterWhereUniqueInput
    /**
     * In case the Printer found by the `where` argument doesn't exist, create a new Printer with this data.
     */
    create: XOR<PrinterCreateInput, PrinterUncheckedCreateInput>
    /**
     * In case the Printer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrinterUpdateInput, PrinterUncheckedUpdateInput>
  }

  /**
   * Printer delete
   */
  export type PrinterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Filter which Printer to delete.
     */
    where: PrinterWhereUniqueInput
  }

  /**
   * Printer deleteMany
   */
  export type PrinterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Printers to delete
     */
    where?: PrinterWhereInput
    /**
     * Limit how many Printers to delete.
     */
    limit?: number
  }

  /**
   * Printer without action
   */
  export type PrinterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
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


  export const InstrumentScalarFieldEnum: {
    id: 'id',
    instrument_name: 'instrument_name',
    instrument_code: 'instrument_code',
    instrument_exp: 'instrument_exp'
  };

  export type InstrumentScalarFieldEnum = (typeof InstrumentScalarFieldEnum)[keyof typeof InstrumentScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    department_name: 'department_name',
    department_code: 'department_code'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const SterilizerScalarFieldEnum: {
    id: 'id',
    sterilizer_code: 'sterilizer_code',
    sterilizer_name: 'sterilizer_name'
  };

  export type SterilizerScalarFieldEnum = (typeof SterilizerScalarFieldEnum)[keyof typeof SterilizerScalarFieldEnum]


  export const JwtScalarFieldEnum: {
    user_id: 'user_id',
    refresh_token: 'refresh_token',
    username: 'username',
    display_name: 'display_name',
    division: 'division',
    role: 'role'
  };

  export type JwtScalarFieldEnum = (typeof JwtScalarFieldEnum)[keyof typeof JwtScalarFieldEnum]


  export const SterilizationCycleScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    sterilizer_id: 'sterilizer_id',
    cycle_number: 'cycle_number',
    sterilization_date: 'sterilization_date'
  };

  export type SterilizationCycleScalarFieldEnum = (typeof SterilizationCycleScalarFieldEnum)[keyof typeof SterilizationCycleScalarFieldEnum]


  export const SterilizationCycleItemScalarFieldEnum: {
    id: 'id',
    short_code: 'short_code',
    cycle_id: 'cycle_id',
    instrument_id: 'instrument_id',
    department_id: 'department_id',
    success: 'success'
  };

  export type SterilizationCycleItemScalarFieldEnum = (typeof SterilizationCycleItemScalarFieldEnum)[keyof typeof SterilizationCycleItemScalarFieldEnum]


  export const InstrumentUsageScalarFieldEnum: {
    id: 'id',
    cycle_item_id: 'cycle_item_id',
    used_by: 'used_by',
    patient: 'patient',
    doc_id: 'doc_id',
    doc_status: 'doc_status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InstrumentUsageScalarFieldEnum = (typeof InstrumentUsageScalarFieldEnum)[keyof typeof InstrumentUsageScalarFieldEnum]


  export const PrinterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ip_address: 'ip_address',
    port: 'port',
    active: 'active',
    created_at: 'created_at'
  };

  export type PrinterScalarFieldEnum = (typeof PrinterScalarFieldEnum)[keyof typeof PrinterScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const InstrumentOrderByRelevanceFieldEnum: {
    instrument_name: 'instrument_name'
  };

  export type InstrumentOrderByRelevanceFieldEnum = (typeof InstrumentOrderByRelevanceFieldEnum)[keyof typeof InstrumentOrderByRelevanceFieldEnum]


  export const DepartmentOrderByRelevanceFieldEnum: {
    department_name: 'department_name'
  };

  export type DepartmentOrderByRelevanceFieldEnum = (typeof DepartmentOrderByRelevanceFieldEnum)[keyof typeof DepartmentOrderByRelevanceFieldEnum]


  export const SterilizerOrderByRelevanceFieldEnum: {
    sterilizer_name: 'sterilizer_name'
  };

  export type SterilizerOrderByRelevanceFieldEnum = (typeof SterilizerOrderByRelevanceFieldEnum)[keyof typeof SterilizerOrderByRelevanceFieldEnum]


  export const JwtOrderByRelevanceFieldEnum: {
    user_id: 'user_id',
    refresh_token: 'refresh_token',
    username: 'username',
    display_name: 'display_name',
    division: 'division',
    role: 'role'
  };

  export type JwtOrderByRelevanceFieldEnum = (typeof JwtOrderByRelevanceFieldEnum)[keyof typeof JwtOrderByRelevanceFieldEnum]


  export const SterilizationCycleOrderByRelevanceFieldEnum: {
    user_id: 'user_id'
  };

  export type SterilizationCycleOrderByRelevanceFieldEnum = (typeof SterilizationCycleOrderByRelevanceFieldEnum)[keyof typeof SterilizationCycleOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const SterilizationCycleItemOrderByRelevanceFieldEnum: {
    short_code: 'short_code'
  };

  export type SterilizationCycleItemOrderByRelevanceFieldEnum = (typeof SterilizationCycleItemOrderByRelevanceFieldEnum)[keyof typeof SterilizationCycleItemOrderByRelevanceFieldEnum]


  export const InstrumentUsageOrderByRelevanceFieldEnum: {
    used_by: 'used_by',
    patient: 'patient'
  };

  export type InstrumentUsageOrderByRelevanceFieldEnum = (typeof InstrumentUsageOrderByRelevanceFieldEnum)[keyof typeof InstrumentUsageOrderByRelevanceFieldEnum]


  export const PrinterOrderByRelevanceFieldEnum: {
    name: 'name',
    ip_address: 'ip_address'
  };

  export type PrinterOrderByRelevanceFieldEnum = (typeof PrinterOrderByRelevanceFieldEnum)[keyof typeof PrinterOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DocStatus'
   */
  export type EnumDocStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type InstrumentWhereInput = {
    AND?: InstrumentWhereInput | InstrumentWhereInput[]
    OR?: InstrumentWhereInput[]
    NOT?: InstrumentWhereInput | InstrumentWhereInput[]
    id?: IntFilter<"Instrument"> | number
    instrument_name?: StringFilter<"Instrument"> | string
    instrument_code?: IntFilter<"Instrument"> | number
    instrument_exp?: IntFilter<"Instrument"> | number
    items?: SterilizationCycleItemListRelationFilter
  }

  export type InstrumentOrderByWithRelationInput = {
    id?: SortOrder
    instrument_name?: SortOrder
    instrument_code?: SortOrder
    instrument_exp?: SortOrder
    items?: SterilizationCycleItemOrderByRelationAggregateInput
    _relevance?: InstrumentOrderByRelevanceInput
  }

  export type InstrumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    instrument_code?: number
    AND?: InstrumentWhereInput | InstrumentWhereInput[]
    OR?: InstrumentWhereInput[]
    NOT?: InstrumentWhereInput | InstrumentWhereInput[]
    instrument_name?: StringFilter<"Instrument"> | string
    instrument_exp?: IntFilter<"Instrument"> | number
    items?: SterilizationCycleItemListRelationFilter
  }, "id" | "instrument_code">

  export type InstrumentOrderByWithAggregationInput = {
    id?: SortOrder
    instrument_name?: SortOrder
    instrument_code?: SortOrder
    instrument_exp?: SortOrder
    _count?: InstrumentCountOrderByAggregateInput
    _avg?: InstrumentAvgOrderByAggregateInput
    _max?: InstrumentMaxOrderByAggregateInput
    _min?: InstrumentMinOrderByAggregateInput
    _sum?: InstrumentSumOrderByAggregateInput
  }

  export type InstrumentScalarWhereWithAggregatesInput = {
    AND?: InstrumentScalarWhereWithAggregatesInput | InstrumentScalarWhereWithAggregatesInput[]
    OR?: InstrumentScalarWhereWithAggregatesInput[]
    NOT?: InstrumentScalarWhereWithAggregatesInput | InstrumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Instrument"> | number
    instrument_name?: StringWithAggregatesFilter<"Instrument"> | string
    instrument_code?: IntWithAggregatesFilter<"Instrument"> | number
    instrument_exp?: IntWithAggregatesFilter<"Instrument"> | number
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: IntFilter<"Department"> | number
    department_name?: StringFilter<"Department"> | string
    department_code?: IntFilter<"Department"> | number
    items?: SterilizationCycleItemListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    department_name?: SortOrder
    department_code?: SortOrder
    items?: SterilizationCycleItemOrderByRelationAggregateInput
    _relevance?: DepartmentOrderByRelevanceInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    department_code?: number
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    department_name?: StringFilter<"Department"> | string
    items?: SterilizationCycleItemListRelationFilter
  }, "id" | "department_code">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    department_name?: SortOrder
    department_code?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _avg?: DepartmentAvgOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
    _sum?: DepartmentSumOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Department"> | number
    department_name?: StringWithAggregatesFilter<"Department"> | string
    department_code?: IntWithAggregatesFilter<"Department"> | number
  }

  export type SterilizerWhereInput = {
    AND?: SterilizerWhereInput | SterilizerWhereInput[]
    OR?: SterilizerWhereInput[]
    NOT?: SterilizerWhereInput | SterilizerWhereInput[]
    id?: IntFilter<"Sterilizer"> | number
    sterilizer_code?: IntFilter<"Sterilizer"> | number
    sterilizer_name?: StringFilter<"Sterilizer"> | string
    cycles?: SterilizationCycleListRelationFilter
  }

  export type SterilizerOrderByWithRelationInput = {
    id?: SortOrder
    sterilizer_code?: SortOrder
    sterilizer_name?: SortOrder
    cycles?: SterilizationCycleOrderByRelationAggregateInput
    _relevance?: SterilizerOrderByRelevanceInput
  }

  export type SterilizerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sterilizer_code?: number
    AND?: SterilizerWhereInput | SterilizerWhereInput[]
    OR?: SterilizerWhereInput[]
    NOT?: SterilizerWhereInput | SterilizerWhereInput[]
    sterilizer_name?: StringFilter<"Sterilizer"> | string
    cycles?: SterilizationCycleListRelationFilter
  }, "id" | "sterilizer_code">

  export type SterilizerOrderByWithAggregationInput = {
    id?: SortOrder
    sterilizer_code?: SortOrder
    sterilizer_name?: SortOrder
    _count?: SterilizerCountOrderByAggregateInput
    _avg?: SterilizerAvgOrderByAggregateInput
    _max?: SterilizerMaxOrderByAggregateInput
    _min?: SterilizerMinOrderByAggregateInput
    _sum?: SterilizerSumOrderByAggregateInput
  }

  export type SterilizerScalarWhereWithAggregatesInput = {
    AND?: SterilizerScalarWhereWithAggregatesInput | SterilizerScalarWhereWithAggregatesInput[]
    OR?: SterilizerScalarWhereWithAggregatesInput[]
    NOT?: SterilizerScalarWhereWithAggregatesInput | SterilizerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sterilizer"> | number
    sterilizer_code?: IntWithAggregatesFilter<"Sterilizer"> | number
    sterilizer_name?: StringWithAggregatesFilter<"Sterilizer"> | string
  }

  export type JwtWhereInput = {
    AND?: JwtWhereInput | JwtWhereInput[]
    OR?: JwtWhereInput[]
    NOT?: JwtWhereInput | JwtWhereInput[]
    user_id?: StringFilter<"Jwt"> | string
    refresh_token?: StringFilter<"Jwt"> | string
    username?: StringFilter<"Jwt"> | string
    display_name?: StringFilter<"Jwt"> | string
    division?: StringFilter<"Jwt"> | string
    role?: StringFilter<"Jwt"> | string
  }

  export type JwtOrderByWithRelationInput = {
    user_id?: SortOrder
    refresh_token?: SortOrder
    username?: SortOrder
    display_name?: SortOrder
    division?: SortOrder
    role?: SortOrder
    _relevance?: JwtOrderByRelevanceInput
  }

  export type JwtWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    AND?: JwtWhereInput | JwtWhereInput[]
    OR?: JwtWhereInput[]
    NOT?: JwtWhereInput | JwtWhereInput[]
    refresh_token?: StringFilter<"Jwt"> | string
    username?: StringFilter<"Jwt"> | string
    display_name?: StringFilter<"Jwt"> | string
    division?: StringFilter<"Jwt"> | string
    role?: StringFilter<"Jwt"> | string
  }, "user_id">

  export type JwtOrderByWithAggregationInput = {
    user_id?: SortOrder
    refresh_token?: SortOrder
    username?: SortOrder
    display_name?: SortOrder
    division?: SortOrder
    role?: SortOrder
    _count?: JwtCountOrderByAggregateInput
    _max?: JwtMaxOrderByAggregateInput
    _min?: JwtMinOrderByAggregateInput
  }

  export type JwtScalarWhereWithAggregatesInput = {
    AND?: JwtScalarWhereWithAggregatesInput | JwtScalarWhereWithAggregatesInput[]
    OR?: JwtScalarWhereWithAggregatesInput[]
    NOT?: JwtScalarWhereWithAggregatesInput | JwtScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"Jwt"> | string
    refresh_token?: StringWithAggregatesFilter<"Jwt"> | string
    username?: StringWithAggregatesFilter<"Jwt"> | string
    display_name?: StringWithAggregatesFilter<"Jwt"> | string
    division?: StringWithAggregatesFilter<"Jwt"> | string
    role?: StringWithAggregatesFilter<"Jwt"> | string
  }

  export type SterilizationCycleWhereInput = {
    AND?: SterilizationCycleWhereInput | SterilizationCycleWhereInput[]
    OR?: SterilizationCycleWhereInput[]
    NOT?: SterilizationCycleWhereInput | SterilizationCycleWhereInput[]
    id?: IntFilter<"SterilizationCycle"> | number
    user_id?: StringFilter<"SterilizationCycle"> | string
    sterilizer_id?: IntFilter<"SterilizationCycle"> | number
    cycle_number?: IntFilter<"SterilizationCycle"> | number
    sterilization_date?: DateTimeFilter<"SterilizationCycle"> | Date | string
    sterilizer?: XOR<SterilizerScalarRelationFilter, SterilizerWhereInput>
    items?: SterilizationCycleItemListRelationFilter
  }

  export type SterilizationCycleOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    sterilizer_id?: SortOrder
    cycle_number?: SortOrder
    sterilization_date?: SortOrder
    sterilizer?: SterilizerOrderByWithRelationInput
    items?: SterilizationCycleItemOrderByRelationAggregateInput
    _relevance?: SterilizationCycleOrderByRelevanceInput
  }

  export type SterilizationCycleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SterilizationCycleWhereInput | SterilizationCycleWhereInput[]
    OR?: SterilizationCycleWhereInput[]
    NOT?: SterilizationCycleWhereInput | SterilizationCycleWhereInput[]
    user_id?: StringFilter<"SterilizationCycle"> | string
    sterilizer_id?: IntFilter<"SterilizationCycle"> | number
    cycle_number?: IntFilter<"SterilizationCycle"> | number
    sterilization_date?: DateTimeFilter<"SterilizationCycle"> | Date | string
    sterilizer?: XOR<SterilizerScalarRelationFilter, SterilizerWhereInput>
    items?: SterilizationCycleItemListRelationFilter
  }, "id">

  export type SterilizationCycleOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    sterilizer_id?: SortOrder
    cycle_number?: SortOrder
    sterilization_date?: SortOrder
    _count?: SterilizationCycleCountOrderByAggregateInput
    _avg?: SterilizationCycleAvgOrderByAggregateInput
    _max?: SterilizationCycleMaxOrderByAggregateInput
    _min?: SterilizationCycleMinOrderByAggregateInput
    _sum?: SterilizationCycleSumOrderByAggregateInput
  }

  export type SterilizationCycleScalarWhereWithAggregatesInput = {
    AND?: SterilizationCycleScalarWhereWithAggregatesInput | SterilizationCycleScalarWhereWithAggregatesInput[]
    OR?: SterilizationCycleScalarWhereWithAggregatesInput[]
    NOT?: SterilizationCycleScalarWhereWithAggregatesInput | SterilizationCycleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SterilizationCycle"> | number
    user_id?: StringWithAggregatesFilter<"SterilizationCycle"> | string
    sterilizer_id?: IntWithAggregatesFilter<"SterilizationCycle"> | number
    cycle_number?: IntWithAggregatesFilter<"SterilizationCycle"> | number
    sterilization_date?: DateTimeWithAggregatesFilter<"SterilizationCycle"> | Date | string
  }

  export type SterilizationCycleItemWhereInput = {
    AND?: SterilizationCycleItemWhereInput | SterilizationCycleItemWhereInput[]
    OR?: SterilizationCycleItemWhereInput[]
    NOT?: SterilizationCycleItemWhereInput | SterilizationCycleItemWhereInput[]
    id?: IntFilter<"SterilizationCycleItem"> | number
    short_code?: StringNullableFilter<"SterilizationCycleItem"> | string | null
    cycle_id?: IntFilter<"SterilizationCycleItem"> | number
    instrument_id?: IntFilter<"SterilizationCycleItem"> | number
    department_id?: IntFilter<"SterilizationCycleItem"> | number
    success?: BoolFilter<"SterilizationCycleItem"> | boolean
    cycle?: XOR<SterilizationCycleScalarRelationFilter, SterilizationCycleWhereInput>
    instrument?: XOR<InstrumentScalarRelationFilter, InstrumentWhereInput>
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    usage?: XOR<InstrumentUsageNullableScalarRelationFilter, InstrumentUsageWhereInput> | null
  }

  export type SterilizationCycleItemOrderByWithRelationInput = {
    id?: SortOrder
    short_code?: SortOrderInput | SortOrder
    cycle_id?: SortOrder
    instrument_id?: SortOrder
    department_id?: SortOrder
    success?: SortOrder
    cycle?: SterilizationCycleOrderByWithRelationInput
    instrument?: InstrumentOrderByWithRelationInput
    department?: DepartmentOrderByWithRelationInput
    usage?: InstrumentUsageOrderByWithRelationInput
    _relevance?: SterilizationCycleItemOrderByRelevanceInput
  }

  export type SterilizationCycleItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    short_code?: string
    AND?: SterilizationCycleItemWhereInput | SterilizationCycleItemWhereInput[]
    OR?: SterilizationCycleItemWhereInput[]
    NOT?: SterilizationCycleItemWhereInput | SterilizationCycleItemWhereInput[]
    cycle_id?: IntFilter<"SterilizationCycleItem"> | number
    instrument_id?: IntFilter<"SterilizationCycleItem"> | number
    department_id?: IntFilter<"SterilizationCycleItem"> | number
    success?: BoolFilter<"SterilizationCycleItem"> | boolean
    cycle?: XOR<SterilizationCycleScalarRelationFilter, SterilizationCycleWhereInput>
    instrument?: XOR<InstrumentScalarRelationFilter, InstrumentWhereInput>
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    usage?: XOR<InstrumentUsageNullableScalarRelationFilter, InstrumentUsageWhereInput> | null
  }, "id" | "short_code">

  export type SterilizationCycleItemOrderByWithAggregationInput = {
    id?: SortOrder
    short_code?: SortOrderInput | SortOrder
    cycle_id?: SortOrder
    instrument_id?: SortOrder
    department_id?: SortOrder
    success?: SortOrder
    _count?: SterilizationCycleItemCountOrderByAggregateInput
    _avg?: SterilizationCycleItemAvgOrderByAggregateInput
    _max?: SterilizationCycleItemMaxOrderByAggregateInput
    _min?: SterilizationCycleItemMinOrderByAggregateInput
    _sum?: SterilizationCycleItemSumOrderByAggregateInput
  }

  export type SterilizationCycleItemScalarWhereWithAggregatesInput = {
    AND?: SterilizationCycleItemScalarWhereWithAggregatesInput | SterilizationCycleItemScalarWhereWithAggregatesInput[]
    OR?: SterilizationCycleItemScalarWhereWithAggregatesInput[]
    NOT?: SterilizationCycleItemScalarWhereWithAggregatesInput | SterilizationCycleItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SterilizationCycleItem"> | number
    short_code?: StringNullableWithAggregatesFilter<"SterilizationCycleItem"> | string | null
    cycle_id?: IntWithAggregatesFilter<"SterilizationCycleItem"> | number
    instrument_id?: IntWithAggregatesFilter<"SterilizationCycleItem"> | number
    department_id?: IntWithAggregatesFilter<"SterilizationCycleItem"> | number
    success?: BoolWithAggregatesFilter<"SterilizationCycleItem"> | boolean
  }

  export type InstrumentUsageWhereInput = {
    AND?: InstrumentUsageWhereInput | InstrumentUsageWhereInput[]
    OR?: InstrumentUsageWhereInput[]
    NOT?: InstrumentUsageWhereInput | InstrumentUsageWhereInput[]
    id?: IntFilter<"InstrumentUsage"> | number
    cycle_item_id?: IntFilter<"InstrumentUsage"> | number
    used_by?: StringFilter<"InstrumentUsage"> | string
    patient?: StringFilter<"InstrumentUsage"> | string
    doc_id?: IntFilter<"InstrumentUsage"> | number
    doc_status?: EnumDocStatusFilter<"InstrumentUsage"> | $Enums.DocStatus
    createdAt?: DateTimeFilter<"InstrumentUsage"> | Date | string
    updatedAt?: DateTimeFilter<"InstrumentUsage"> | Date | string
    cycle_item?: XOR<SterilizationCycleItemScalarRelationFilter, SterilizationCycleItemWhereInput>
  }

  export type InstrumentUsageOrderByWithRelationInput = {
    id?: SortOrder
    cycle_item_id?: SortOrder
    used_by?: SortOrder
    patient?: SortOrder
    doc_id?: SortOrder
    doc_status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cycle_item?: SterilizationCycleItemOrderByWithRelationInput
    _relevance?: InstrumentUsageOrderByRelevanceInput
  }

  export type InstrumentUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cycle_item_id?: number
    AND?: InstrumentUsageWhereInput | InstrumentUsageWhereInput[]
    OR?: InstrumentUsageWhereInput[]
    NOT?: InstrumentUsageWhereInput | InstrumentUsageWhereInput[]
    used_by?: StringFilter<"InstrumentUsage"> | string
    patient?: StringFilter<"InstrumentUsage"> | string
    doc_id?: IntFilter<"InstrumentUsage"> | number
    doc_status?: EnumDocStatusFilter<"InstrumentUsage"> | $Enums.DocStatus
    createdAt?: DateTimeFilter<"InstrumentUsage"> | Date | string
    updatedAt?: DateTimeFilter<"InstrumentUsage"> | Date | string
    cycle_item?: XOR<SterilizationCycleItemScalarRelationFilter, SterilizationCycleItemWhereInput>
  }, "id" | "cycle_item_id">

  export type InstrumentUsageOrderByWithAggregationInput = {
    id?: SortOrder
    cycle_item_id?: SortOrder
    used_by?: SortOrder
    patient?: SortOrder
    doc_id?: SortOrder
    doc_status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InstrumentUsageCountOrderByAggregateInput
    _avg?: InstrumentUsageAvgOrderByAggregateInput
    _max?: InstrumentUsageMaxOrderByAggregateInput
    _min?: InstrumentUsageMinOrderByAggregateInput
    _sum?: InstrumentUsageSumOrderByAggregateInput
  }

  export type InstrumentUsageScalarWhereWithAggregatesInput = {
    AND?: InstrumentUsageScalarWhereWithAggregatesInput | InstrumentUsageScalarWhereWithAggregatesInput[]
    OR?: InstrumentUsageScalarWhereWithAggregatesInput[]
    NOT?: InstrumentUsageScalarWhereWithAggregatesInput | InstrumentUsageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InstrumentUsage"> | number
    cycle_item_id?: IntWithAggregatesFilter<"InstrumentUsage"> | number
    used_by?: StringWithAggregatesFilter<"InstrumentUsage"> | string
    patient?: StringWithAggregatesFilter<"InstrumentUsage"> | string
    doc_id?: IntWithAggregatesFilter<"InstrumentUsage"> | number
    doc_status?: EnumDocStatusWithAggregatesFilter<"InstrumentUsage"> | $Enums.DocStatus
    createdAt?: DateTimeWithAggregatesFilter<"InstrumentUsage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InstrumentUsage"> | Date | string
  }

  export type PrinterWhereInput = {
    AND?: PrinterWhereInput | PrinterWhereInput[]
    OR?: PrinterWhereInput[]
    NOT?: PrinterWhereInput | PrinterWhereInput[]
    id?: IntFilter<"Printer"> | number
    name?: StringFilter<"Printer"> | string
    ip_address?: StringFilter<"Printer"> | string
    port?: IntFilter<"Printer"> | number
    active?: BoolFilter<"Printer"> | boolean
    created_at?: DateTimeFilter<"Printer"> | Date | string
  }

  export type PrinterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ip_address?: SortOrder
    port?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    _relevance?: PrinterOrderByRelevanceInput
  }

  export type PrinterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ip_address_port?: PrinterIp_addressPortCompoundUniqueInput
    AND?: PrinterWhereInput | PrinterWhereInput[]
    OR?: PrinterWhereInput[]
    NOT?: PrinterWhereInput | PrinterWhereInput[]
    name?: StringFilter<"Printer"> | string
    ip_address?: StringFilter<"Printer"> | string
    port?: IntFilter<"Printer"> | number
    active?: BoolFilter<"Printer"> | boolean
    created_at?: DateTimeFilter<"Printer"> | Date | string
  }, "id" | "ip_address_port">

  export type PrinterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ip_address?: SortOrder
    port?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    _count?: PrinterCountOrderByAggregateInput
    _avg?: PrinterAvgOrderByAggregateInput
    _max?: PrinterMaxOrderByAggregateInput
    _min?: PrinterMinOrderByAggregateInput
    _sum?: PrinterSumOrderByAggregateInput
  }

  export type PrinterScalarWhereWithAggregatesInput = {
    AND?: PrinterScalarWhereWithAggregatesInput | PrinterScalarWhereWithAggregatesInput[]
    OR?: PrinterScalarWhereWithAggregatesInput[]
    NOT?: PrinterScalarWhereWithAggregatesInput | PrinterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Printer"> | number
    name?: StringWithAggregatesFilter<"Printer"> | string
    ip_address?: StringWithAggregatesFilter<"Printer"> | string
    port?: IntWithAggregatesFilter<"Printer"> | number
    active?: BoolWithAggregatesFilter<"Printer"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Printer"> | Date | string
  }

  export type InstrumentCreateInput = {
    instrument_name: string
    instrument_code: number
    instrument_exp?: number
    items?: SterilizationCycleItemCreateNestedManyWithoutInstrumentInput
  }

  export type InstrumentUncheckedCreateInput = {
    id?: number
    instrument_name: string
    instrument_code: number
    instrument_exp?: number
    items?: SterilizationCycleItemUncheckedCreateNestedManyWithoutInstrumentInput
  }

  export type InstrumentUpdateInput = {
    instrument_name?: StringFieldUpdateOperationsInput | string
    instrument_code?: IntFieldUpdateOperationsInput | number
    instrument_exp?: IntFieldUpdateOperationsInput | number
    items?: SterilizationCycleItemUpdateManyWithoutInstrumentNestedInput
  }

  export type InstrumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    instrument_name?: StringFieldUpdateOperationsInput | string
    instrument_code?: IntFieldUpdateOperationsInput | number
    instrument_exp?: IntFieldUpdateOperationsInput | number
    items?: SterilizationCycleItemUncheckedUpdateManyWithoutInstrumentNestedInput
  }

  export type InstrumentCreateManyInput = {
    id?: number
    instrument_name: string
    instrument_code: number
    instrument_exp?: number
  }

  export type InstrumentUpdateManyMutationInput = {
    instrument_name?: StringFieldUpdateOperationsInput | string
    instrument_code?: IntFieldUpdateOperationsInput | number
    instrument_exp?: IntFieldUpdateOperationsInput | number
  }

  export type InstrumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    instrument_name?: StringFieldUpdateOperationsInput | string
    instrument_code?: IntFieldUpdateOperationsInput | number
    instrument_exp?: IntFieldUpdateOperationsInput | number
  }

  export type DepartmentCreateInput = {
    department_name: string
    department_code: number
    items?: SterilizationCycleItemCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: number
    department_name: string
    department_code: number
    items?: SterilizationCycleItemUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    department_name?: StringFieldUpdateOperationsInput | string
    department_code?: IntFieldUpdateOperationsInput | number
    items?: SterilizationCycleItemUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    department_name?: StringFieldUpdateOperationsInput | string
    department_code?: IntFieldUpdateOperationsInput | number
    items?: SterilizationCycleItemUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: number
    department_name: string
    department_code: number
  }

  export type DepartmentUpdateManyMutationInput = {
    department_name?: StringFieldUpdateOperationsInput | string
    department_code?: IntFieldUpdateOperationsInput | number
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    department_name?: StringFieldUpdateOperationsInput | string
    department_code?: IntFieldUpdateOperationsInput | number
  }

  export type SterilizerCreateInput = {
    sterilizer_code: number
    sterilizer_name: string
    cycles?: SterilizationCycleCreateNestedManyWithoutSterilizerInput
  }

  export type SterilizerUncheckedCreateInput = {
    id?: number
    sterilizer_code: number
    sterilizer_name: string
    cycles?: SterilizationCycleUncheckedCreateNestedManyWithoutSterilizerInput
  }

  export type SterilizerUpdateInput = {
    sterilizer_code?: IntFieldUpdateOperationsInput | number
    sterilizer_name?: StringFieldUpdateOperationsInput | string
    cycles?: SterilizationCycleUpdateManyWithoutSterilizerNestedInput
  }

  export type SterilizerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sterilizer_code?: IntFieldUpdateOperationsInput | number
    sterilizer_name?: StringFieldUpdateOperationsInput | string
    cycles?: SterilizationCycleUncheckedUpdateManyWithoutSterilizerNestedInput
  }

  export type SterilizerCreateManyInput = {
    id?: number
    sterilizer_code: number
    sterilizer_name: string
  }

  export type SterilizerUpdateManyMutationInput = {
    sterilizer_code?: IntFieldUpdateOperationsInput | number
    sterilizer_name?: StringFieldUpdateOperationsInput | string
  }

  export type SterilizerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sterilizer_code?: IntFieldUpdateOperationsInput | number
    sterilizer_name?: StringFieldUpdateOperationsInput | string
  }

  export type JwtCreateInput = {
    user_id: string
    refresh_token: string
    username: string
    display_name: string
    division: string
    role: string
  }

  export type JwtUncheckedCreateInput = {
    user_id: string
    refresh_token: string
    username: string
    display_name: string
    division: string
    role: string
  }

  export type JwtUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    division?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type JwtUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    division?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type JwtCreateManyInput = {
    user_id: string
    refresh_token: string
    username: string
    display_name: string
    division: string
    role: string
  }

  export type JwtUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    division?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type JwtUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    division?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type SterilizationCycleCreateInput = {
    user_id: string
    cycle_number: number
    sterilization_date?: Date | string
    sterilizer: SterilizerCreateNestedOneWithoutCyclesInput
    items?: SterilizationCycleItemCreateNestedManyWithoutCycleInput
  }

  export type SterilizationCycleUncheckedCreateInput = {
    id?: number
    user_id: string
    sterilizer_id: number
    cycle_number: number
    sterilization_date?: Date | string
    items?: SterilizationCycleItemUncheckedCreateNestedManyWithoutCycleInput
  }

  export type SterilizationCycleUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    cycle_number?: IntFieldUpdateOperationsInput | number
    sterilization_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sterilizer?: SterilizerUpdateOneRequiredWithoutCyclesNestedInput
    items?: SterilizationCycleItemUpdateManyWithoutCycleNestedInput
  }

  export type SterilizationCycleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    sterilizer_id?: IntFieldUpdateOperationsInput | number
    cycle_number?: IntFieldUpdateOperationsInput | number
    sterilization_date?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SterilizationCycleItemUncheckedUpdateManyWithoutCycleNestedInput
  }

  export type SterilizationCycleCreateManyInput = {
    id?: number
    user_id: string
    sterilizer_id: number
    cycle_number: number
    sterilization_date?: Date | string
  }

  export type SterilizationCycleUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    cycle_number?: IntFieldUpdateOperationsInput | number
    sterilization_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SterilizationCycleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    sterilizer_id?: IntFieldUpdateOperationsInput | number
    cycle_number?: IntFieldUpdateOperationsInput | number
    sterilization_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SterilizationCycleItemCreateInput = {
    short_code?: string | null
    success?: boolean
    cycle: SterilizationCycleCreateNestedOneWithoutItemsInput
    instrument: InstrumentCreateNestedOneWithoutItemsInput
    department: DepartmentCreateNestedOneWithoutItemsInput
    usage?: InstrumentUsageCreateNestedOneWithoutCycle_itemInput
  }

  export type SterilizationCycleItemUncheckedCreateInput = {
    id?: number
    short_code?: string | null
    cycle_id: number
    instrument_id: number
    department_id: number
    success?: boolean
    usage?: InstrumentUsageUncheckedCreateNestedOneWithoutCycle_itemInput
  }

  export type SterilizationCycleItemUpdateInput = {
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    cycle?: SterilizationCycleUpdateOneRequiredWithoutItemsNestedInput
    instrument?: InstrumentUpdateOneRequiredWithoutItemsNestedInput
    department?: DepartmentUpdateOneRequiredWithoutItemsNestedInput
    usage?: InstrumentUsageUpdateOneWithoutCycle_itemNestedInput
  }

  export type SterilizationCycleItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
    cycle_id?: IntFieldUpdateOperationsInput | number
    instrument_id?: IntFieldUpdateOperationsInput | number
    department_id?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
    usage?: InstrumentUsageUncheckedUpdateOneWithoutCycle_itemNestedInput
  }

  export type SterilizationCycleItemCreateManyInput = {
    id?: number
    short_code?: string | null
    cycle_id: number
    instrument_id: number
    department_id: number
    success?: boolean
  }

  export type SterilizationCycleItemUpdateManyMutationInput = {
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SterilizationCycleItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
    cycle_id?: IntFieldUpdateOperationsInput | number
    instrument_id?: IntFieldUpdateOperationsInput | number
    department_id?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InstrumentUsageCreateInput = {
    used_by: string
    patient: string
    doc_id: number
    doc_status?: $Enums.DocStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    cycle_item: SterilizationCycleItemCreateNestedOneWithoutUsageInput
  }

  export type InstrumentUsageUncheckedCreateInput = {
    id?: number
    cycle_item_id: number
    used_by: string
    patient: string
    doc_id: number
    doc_status?: $Enums.DocStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstrumentUsageUpdateInput = {
    used_by?: StringFieldUpdateOperationsInput | string
    patient?: StringFieldUpdateOperationsInput | string
    doc_id?: IntFieldUpdateOperationsInput | number
    doc_status?: EnumDocStatusFieldUpdateOperationsInput | $Enums.DocStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cycle_item?: SterilizationCycleItemUpdateOneRequiredWithoutUsageNestedInput
  }

  export type InstrumentUsageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cycle_item_id?: IntFieldUpdateOperationsInput | number
    used_by?: StringFieldUpdateOperationsInput | string
    patient?: StringFieldUpdateOperationsInput | string
    doc_id?: IntFieldUpdateOperationsInput | number
    doc_status?: EnumDocStatusFieldUpdateOperationsInput | $Enums.DocStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstrumentUsageCreateManyInput = {
    id?: number
    cycle_item_id: number
    used_by: string
    patient: string
    doc_id: number
    doc_status?: $Enums.DocStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstrumentUsageUpdateManyMutationInput = {
    used_by?: StringFieldUpdateOperationsInput | string
    patient?: StringFieldUpdateOperationsInput | string
    doc_id?: IntFieldUpdateOperationsInput | number
    doc_status?: EnumDocStatusFieldUpdateOperationsInput | $Enums.DocStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstrumentUsageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cycle_item_id?: IntFieldUpdateOperationsInput | number
    used_by?: StringFieldUpdateOperationsInput | string
    patient?: StringFieldUpdateOperationsInput | string
    doc_id?: IntFieldUpdateOperationsInput | number
    doc_status?: EnumDocStatusFieldUpdateOperationsInput | $Enums.DocStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrinterCreateInput = {
    name: string
    ip_address: string
    port: number
    active?: boolean
    created_at?: Date | string
  }

  export type PrinterUncheckedCreateInput = {
    id?: number
    name: string
    ip_address: string
    port: number
    active?: boolean
    created_at?: Date | string
  }

  export type PrinterUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrinterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrinterCreateManyInput = {
    id?: number
    name: string
    ip_address: string
    port: number
    active?: boolean
    created_at?: Date | string
  }

  export type PrinterUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrinterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SterilizationCycleItemListRelationFilter = {
    every?: SterilizationCycleItemWhereInput
    some?: SterilizationCycleItemWhereInput
    none?: SterilizationCycleItemWhereInput
  }

  export type SterilizationCycleItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstrumentOrderByRelevanceInput = {
    fields: InstrumentOrderByRelevanceFieldEnum | InstrumentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InstrumentCountOrderByAggregateInput = {
    id?: SortOrder
    instrument_name?: SortOrder
    instrument_code?: SortOrder
    instrument_exp?: SortOrder
  }

  export type InstrumentAvgOrderByAggregateInput = {
    id?: SortOrder
    instrument_code?: SortOrder
    instrument_exp?: SortOrder
  }

  export type InstrumentMaxOrderByAggregateInput = {
    id?: SortOrder
    instrument_name?: SortOrder
    instrument_code?: SortOrder
    instrument_exp?: SortOrder
  }

  export type InstrumentMinOrderByAggregateInput = {
    id?: SortOrder
    instrument_name?: SortOrder
    instrument_code?: SortOrder
    instrument_exp?: SortOrder
  }

  export type InstrumentSumOrderByAggregateInput = {
    id?: SortOrder
    instrument_code?: SortOrder
    instrument_exp?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DepartmentOrderByRelevanceInput = {
    fields: DepartmentOrderByRelevanceFieldEnum | DepartmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    department_name?: SortOrder
    department_code?: SortOrder
  }

  export type DepartmentAvgOrderByAggregateInput = {
    id?: SortOrder
    department_code?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    department_name?: SortOrder
    department_code?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    department_name?: SortOrder
    department_code?: SortOrder
  }

  export type DepartmentSumOrderByAggregateInput = {
    id?: SortOrder
    department_code?: SortOrder
  }

  export type SterilizationCycleListRelationFilter = {
    every?: SterilizationCycleWhereInput
    some?: SterilizationCycleWhereInput
    none?: SterilizationCycleWhereInput
  }

  export type SterilizationCycleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SterilizerOrderByRelevanceInput = {
    fields: SterilizerOrderByRelevanceFieldEnum | SterilizerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SterilizerCountOrderByAggregateInput = {
    id?: SortOrder
    sterilizer_code?: SortOrder
    sterilizer_name?: SortOrder
  }

  export type SterilizerAvgOrderByAggregateInput = {
    id?: SortOrder
    sterilizer_code?: SortOrder
  }

  export type SterilizerMaxOrderByAggregateInput = {
    id?: SortOrder
    sterilizer_code?: SortOrder
    sterilizer_name?: SortOrder
  }

  export type SterilizerMinOrderByAggregateInput = {
    id?: SortOrder
    sterilizer_code?: SortOrder
    sterilizer_name?: SortOrder
  }

  export type SterilizerSumOrderByAggregateInput = {
    id?: SortOrder
    sterilizer_code?: SortOrder
  }

  export type JwtOrderByRelevanceInput = {
    fields: JwtOrderByRelevanceFieldEnum | JwtOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type JwtCountOrderByAggregateInput = {
    user_id?: SortOrder
    refresh_token?: SortOrder
    username?: SortOrder
    display_name?: SortOrder
    division?: SortOrder
    role?: SortOrder
  }

  export type JwtMaxOrderByAggregateInput = {
    user_id?: SortOrder
    refresh_token?: SortOrder
    username?: SortOrder
    display_name?: SortOrder
    division?: SortOrder
    role?: SortOrder
  }

  export type JwtMinOrderByAggregateInput = {
    user_id?: SortOrder
    refresh_token?: SortOrder
    username?: SortOrder
    display_name?: SortOrder
    division?: SortOrder
    role?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SterilizerScalarRelationFilter = {
    is?: SterilizerWhereInput
    isNot?: SterilizerWhereInput
  }

  export type SterilizationCycleOrderByRelevanceInput = {
    fields: SterilizationCycleOrderByRelevanceFieldEnum | SterilizationCycleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SterilizationCycleCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    sterilizer_id?: SortOrder
    cycle_number?: SortOrder
    sterilization_date?: SortOrder
  }

  export type SterilizationCycleAvgOrderByAggregateInput = {
    id?: SortOrder
    sterilizer_id?: SortOrder
    cycle_number?: SortOrder
  }

  export type SterilizationCycleMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    sterilizer_id?: SortOrder
    cycle_number?: SortOrder
    sterilization_date?: SortOrder
  }

  export type SterilizationCycleMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    sterilizer_id?: SortOrder
    cycle_number?: SortOrder
    sterilization_date?: SortOrder
  }

  export type SterilizationCycleSumOrderByAggregateInput = {
    id?: SortOrder
    sterilizer_id?: SortOrder
    cycle_number?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SterilizationCycleScalarRelationFilter = {
    is?: SterilizationCycleWhereInput
    isNot?: SterilizationCycleWhereInput
  }

  export type InstrumentScalarRelationFilter = {
    is?: InstrumentWhereInput
    isNot?: InstrumentWhereInput
  }

  export type DepartmentScalarRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type InstrumentUsageNullableScalarRelationFilter = {
    is?: InstrumentUsageWhereInput | null
    isNot?: InstrumentUsageWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SterilizationCycleItemOrderByRelevanceInput = {
    fields: SterilizationCycleItemOrderByRelevanceFieldEnum | SterilizationCycleItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SterilizationCycleItemCountOrderByAggregateInput = {
    id?: SortOrder
    short_code?: SortOrder
    cycle_id?: SortOrder
    instrument_id?: SortOrder
    department_id?: SortOrder
    success?: SortOrder
  }

  export type SterilizationCycleItemAvgOrderByAggregateInput = {
    id?: SortOrder
    cycle_id?: SortOrder
    instrument_id?: SortOrder
    department_id?: SortOrder
  }

  export type SterilizationCycleItemMaxOrderByAggregateInput = {
    id?: SortOrder
    short_code?: SortOrder
    cycle_id?: SortOrder
    instrument_id?: SortOrder
    department_id?: SortOrder
    success?: SortOrder
  }

  export type SterilizationCycleItemMinOrderByAggregateInput = {
    id?: SortOrder
    short_code?: SortOrder
    cycle_id?: SortOrder
    instrument_id?: SortOrder
    department_id?: SortOrder
    success?: SortOrder
  }

  export type SterilizationCycleItemSumOrderByAggregateInput = {
    id?: SortOrder
    cycle_id?: SortOrder
    instrument_id?: SortOrder
    department_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumDocStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DocStatus | EnumDocStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocStatus[]
    notIn?: $Enums.DocStatus[]
    not?: NestedEnumDocStatusFilter<$PrismaModel> | $Enums.DocStatus
  }

  export type SterilizationCycleItemScalarRelationFilter = {
    is?: SterilizationCycleItemWhereInput
    isNot?: SterilizationCycleItemWhereInput
  }

  export type InstrumentUsageOrderByRelevanceInput = {
    fields: InstrumentUsageOrderByRelevanceFieldEnum | InstrumentUsageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InstrumentUsageCountOrderByAggregateInput = {
    id?: SortOrder
    cycle_item_id?: SortOrder
    used_by?: SortOrder
    patient?: SortOrder
    doc_id?: SortOrder
    doc_status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstrumentUsageAvgOrderByAggregateInput = {
    id?: SortOrder
    cycle_item_id?: SortOrder
    doc_id?: SortOrder
  }

  export type InstrumentUsageMaxOrderByAggregateInput = {
    id?: SortOrder
    cycle_item_id?: SortOrder
    used_by?: SortOrder
    patient?: SortOrder
    doc_id?: SortOrder
    doc_status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstrumentUsageMinOrderByAggregateInput = {
    id?: SortOrder
    cycle_item_id?: SortOrder
    used_by?: SortOrder
    patient?: SortOrder
    doc_id?: SortOrder
    doc_status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstrumentUsageSumOrderByAggregateInput = {
    id?: SortOrder
    cycle_item_id?: SortOrder
    doc_id?: SortOrder
  }

  export type EnumDocStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocStatus | EnumDocStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocStatus[]
    notIn?: $Enums.DocStatus[]
    not?: NestedEnumDocStatusWithAggregatesFilter<$PrismaModel> | $Enums.DocStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocStatusFilter<$PrismaModel>
    _max?: NestedEnumDocStatusFilter<$PrismaModel>
  }

  export type PrinterOrderByRelevanceInput = {
    fields: PrinterOrderByRelevanceFieldEnum | PrinterOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PrinterIp_addressPortCompoundUniqueInput = {
    ip_address: string
    port: number
  }

  export type PrinterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ip_address?: SortOrder
    port?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
  }

  export type PrinterAvgOrderByAggregateInput = {
    id?: SortOrder
    port?: SortOrder
  }

  export type PrinterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ip_address?: SortOrder
    port?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
  }

  export type PrinterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ip_address?: SortOrder
    port?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
  }

  export type PrinterSumOrderByAggregateInput = {
    id?: SortOrder
    port?: SortOrder
  }

  export type SterilizationCycleItemCreateNestedManyWithoutInstrumentInput = {
    create?: XOR<SterilizationCycleItemCreateWithoutInstrumentInput, SterilizationCycleItemUncheckedCreateWithoutInstrumentInput> | SterilizationCycleItemCreateWithoutInstrumentInput[] | SterilizationCycleItemUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: SterilizationCycleItemCreateOrConnectWithoutInstrumentInput | SterilizationCycleItemCreateOrConnectWithoutInstrumentInput[]
    createMany?: SterilizationCycleItemCreateManyInstrumentInputEnvelope
    connect?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
  }

  export type SterilizationCycleItemUncheckedCreateNestedManyWithoutInstrumentInput = {
    create?: XOR<SterilizationCycleItemCreateWithoutInstrumentInput, SterilizationCycleItemUncheckedCreateWithoutInstrumentInput> | SterilizationCycleItemCreateWithoutInstrumentInput[] | SterilizationCycleItemUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: SterilizationCycleItemCreateOrConnectWithoutInstrumentInput | SterilizationCycleItemCreateOrConnectWithoutInstrumentInput[]
    createMany?: SterilizationCycleItemCreateManyInstrumentInputEnvelope
    connect?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
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

  export type SterilizationCycleItemUpdateManyWithoutInstrumentNestedInput = {
    create?: XOR<SterilizationCycleItemCreateWithoutInstrumentInput, SterilizationCycleItemUncheckedCreateWithoutInstrumentInput> | SterilizationCycleItemCreateWithoutInstrumentInput[] | SterilizationCycleItemUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: SterilizationCycleItemCreateOrConnectWithoutInstrumentInput | SterilizationCycleItemCreateOrConnectWithoutInstrumentInput[]
    upsert?: SterilizationCycleItemUpsertWithWhereUniqueWithoutInstrumentInput | SterilizationCycleItemUpsertWithWhereUniqueWithoutInstrumentInput[]
    createMany?: SterilizationCycleItemCreateManyInstrumentInputEnvelope
    set?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
    disconnect?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
    delete?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
    connect?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
    update?: SterilizationCycleItemUpdateWithWhereUniqueWithoutInstrumentInput | SterilizationCycleItemUpdateWithWhereUniqueWithoutInstrumentInput[]
    updateMany?: SterilizationCycleItemUpdateManyWithWhereWithoutInstrumentInput | SterilizationCycleItemUpdateManyWithWhereWithoutInstrumentInput[]
    deleteMany?: SterilizationCycleItemScalarWhereInput | SterilizationCycleItemScalarWhereInput[]
  }

  export type SterilizationCycleItemUncheckedUpdateManyWithoutInstrumentNestedInput = {
    create?: XOR<SterilizationCycleItemCreateWithoutInstrumentInput, SterilizationCycleItemUncheckedCreateWithoutInstrumentInput> | SterilizationCycleItemCreateWithoutInstrumentInput[] | SterilizationCycleItemUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: SterilizationCycleItemCreateOrConnectWithoutInstrumentInput | SterilizationCycleItemCreateOrConnectWithoutInstrumentInput[]
    upsert?: SterilizationCycleItemUpsertWithWhereUniqueWithoutInstrumentInput | SterilizationCycleItemUpsertWithWhereUniqueWithoutInstrumentInput[]
    createMany?: SterilizationCycleItemCreateManyInstrumentInputEnvelope
    set?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
    disconnect?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
    delete?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
    connect?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
    update?: SterilizationCycleItemUpdateWithWhereUniqueWithoutInstrumentInput | SterilizationCycleItemUpdateWithWhereUniqueWithoutInstrumentInput[]
    updateMany?: SterilizationCycleItemUpdateManyWithWhereWithoutInstrumentInput | SterilizationCycleItemUpdateManyWithWhereWithoutInstrumentInput[]
    deleteMany?: SterilizationCycleItemScalarWhereInput | SterilizationCycleItemScalarWhereInput[]
  }

  export type SterilizationCycleItemCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<SterilizationCycleItemCreateWithoutDepartmentInput, SterilizationCycleItemUncheckedCreateWithoutDepartmentInput> | SterilizationCycleItemCreateWithoutDepartmentInput[] | SterilizationCycleItemUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: SterilizationCycleItemCreateOrConnectWithoutDepartmentInput | SterilizationCycleItemCreateOrConnectWithoutDepartmentInput[]
    createMany?: SterilizationCycleItemCreateManyDepartmentInputEnvelope
    connect?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
  }

  export type SterilizationCycleItemUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<SterilizationCycleItemCreateWithoutDepartmentInput, SterilizationCycleItemUncheckedCreateWithoutDepartmentInput> | SterilizationCycleItemCreateWithoutDepartmentInput[] | SterilizationCycleItemUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: SterilizationCycleItemCreateOrConnectWithoutDepartmentInput | SterilizationCycleItemCreateOrConnectWithoutDepartmentInput[]
    createMany?: SterilizationCycleItemCreateManyDepartmentInputEnvelope
    connect?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
  }

  export type SterilizationCycleItemUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<SterilizationCycleItemCreateWithoutDepartmentInput, SterilizationCycleItemUncheckedCreateWithoutDepartmentInput> | SterilizationCycleItemCreateWithoutDepartmentInput[] | SterilizationCycleItemUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: SterilizationCycleItemCreateOrConnectWithoutDepartmentInput | SterilizationCycleItemCreateOrConnectWithoutDepartmentInput[]
    upsert?: SterilizationCycleItemUpsertWithWhereUniqueWithoutDepartmentInput | SterilizationCycleItemUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: SterilizationCycleItemCreateManyDepartmentInputEnvelope
    set?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
    disconnect?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
    delete?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
    connect?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
    update?: SterilizationCycleItemUpdateWithWhereUniqueWithoutDepartmentInput | SterilizationCycleItemUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: SterilizationCycleItemUpdateManyWithWhereWithoutDepartmentInput | SterilizationCycleItemUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: SterilizationCycleItemScalarWhereInput | SterilizationCycleItemScalarWhereInput[]
  }

  export type SterilizationCycleItemUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<SterilizationCycleItemCreateWithoutDepartmentInput, SterilizationCycleItemUncheckedCreateWithoutDepartmentInput> | SterilizationCycleItemCreateWithoutDepartmentInput[] | SterilizationCycleItemUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: SterilizationCycleItemCreateOrConnectWithoutDepartmentInput | SterilizationCycleItemCreateOrConnectWithoutDepartmentInput[]
    upsert?: SterilizationCycleItemUpsertWithWhereUniqueWithoutDepartmentInput | SterilizationCycleItemUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: SterilizationCycleItemCreateManyDepartmentInputEnvelope
    set?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
    disconnect?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
    delete?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
    connect?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
    update?: SterilizationCycleItemUpdateWithWhereUniqueWithoutDepartmentInput | SterilizationCycleItemUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: SterilizationCycleItemUpdateManyWithWhereWithoutDepartmentInput | SterilizationCycleItemUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: SterilizationCycleItemScalarWhereInput | SterilizationCycleItemScalarWhereInput[]
  }

  export type SterilizationCycleCreateNestedManyWithoutSterilizerInput = {
    create?: XOR<SterilizationCycleCreateWithoutSterilizerInput, SterilizationCycleUncheckedCreateWithoutSterilizerInput> | SterilizationCycleCreateWithoutSterilizerInput[] | SterilizationCycleUncheckedCreateWithoutSterilizerInput[]
    connectOrCreate?: SterilizationCycleCreateOrConnectWithoutSterilizerInput | SterilizationCycleCreateOrConnectWithoutSterilizerInput[]
    createMany?: SterilizationCycleCreateManySterilizerInputEnvelope
    connect?: SterilizationCycleWhereUniqueInput | SterilizationCycleWhereUniqueInput[]
  }

  export type SterilizationCycleUncheckedCreateNestedManyWithoutSterilizerInput = {
    create?: XOR<SterilizationCycleCreateWithoutSterilizerInput, SterilizationCycleUncheckedCreateWithoutSterilizerInput> | SterilizationCycleCreateWithoutSterilizerInput[] | SterilizationCycleUncheckedCreateWithoutSterilizerInput[]
    connectOrCreate?: SterilizationCycleCreateOrConnectWithoutSterilizerInput | SterilizationCycleCreateOrConnectWithoutSterilizerInput[]
    createMany?: SterilizationCycleCreateManySterilizerInputEnvelope
    connect?: SterilizationCycleWhereUniqueInput | SterilizationCycleWhereUniqueInput[]
  }

  export type SterilizationCycleUpdateManyWithoutSterilizerNestedInput = {
    create?: XOR<SterilizationCycleCreateWithoutSterilizerInput, SterilizationCycleUncheckedCreateWithoutSterilizerInput> | SterilizationCycleCreateWithoutSterilizerInput[] | SterilizationCycleUncheckedCreateWithoutSterilizerInput[]
    connectOrCreate?: SterilizationCycleCreateOrConnectWithoutSterilizerInput | SterilizationCycleCreateOrConnectWithoutSterilizerInput[]
    upsert?: SterilizationCycleUpsertWithWhereUniqueWithoutSterilizerInput | SterilizationCycleUpsertWithWhereUniqueWithoutSterilizerInput[]
    createMany?: SterilizationCycleCreateManySterilizerInputEnvelope
    set?: SterilizationCycleWhereUniqueInput | SterilizationCycleWhereUniqueInput[]
    disconnect?: SterilizationCycleWhereUniqueInput | SterilizationCycleWhereUniqueInput[]
    delete?: SterilizationCycleWhereUniqueInput | SterilizationCycleWhereUniqueInput[]
    connect?: SterilizationCycleWhereUniqueInput | SterilizationCycleWhereUniqueInput[]
    update?: SterilizationCycleUpdateWithWhereUniqueWithoutSterilizerInput | SterilizationCycleUpdateWithWhereUniqueWithoutSterilizerInput[]
    updateMany?: SterilizationCycleUpdateManyWithWhereWithoutSterilizerInput | SterilizationCycleUpdateManyWithWhereWithoutSterilizerInput[]
    deleteMany?: SterilizationCycleScalarWhereInput | SterilizationCycleScalarWhereInput[]
  }

  export type SterilizationCycleUncheckedUpdateManyWithoutSterilizerNestedInput = {
    create?: XOR<SterilizationCycleCreateWithoutSterilizerInput, SterilizationCycleUncheckedCreateWithoutSterilizerInput> | SterilizationCycleCreateWithoutSterilizerInput[] | SterilizationCycleUncheckedCreateWithoutSterilizerInput[]
    connectOrCreate?: SterilizationCycleCreateOrConnectWithoutSterilizerInput | SterilizationCycleCreateOrConnectWithoutSterilizerInput[]
    upsert?: SterilizationCycleUpsertWithWhereUniqueWithoutSterilizerInput | SterilizationCycleUpsertWithWhereUniqueWithoutSterilizerInput[]
    createMany?: SterilizationCycleCreateManySterilizerInputEnvelope
    set?: SterilizationCycleWhereUniqueInput | SterilizationCycleWhereUniqueInput[]
    disconnect?: SterilizationCycleWhereUniqueInput | SterilizationCycleWhereUniqueInput[]
    delete?: SterilizationCycleWhereUniqueInput | SterilizationCycleWhereUniqueInput[]
    connect?: SterilizationCycleWhereUniqueInput | SterilizationCycleWhereUniqueInput[]
    update?: SterilizationCycleUpdateWithWhereUniqueWithoutSterilizerInput | SterilizationCycleUpdateWithWhereUniqueWithoutSterilizerInput[]
    updateMany?: SterilizationCycleUpdateManyWithWhereWithoutSterilizerInput | SterilizationCycleUpdateManyWithWhereWithoutSterilizerInput[]
    deleteMany?: SterilizationCycleScalarWhereInput | SterilizationCycleScalarWhereInput[]
  }

  export type SterilizerCreateNestedOneWithoutCyclesInput = {
    create?: XOR<SterilizerCreateWithoutCyclesInput, SterilizerUncheckedCreateWithoutCyclesInput>
    connectOrCreate?: SterilizerCreateOrConnectWithoutCyclesInput
    connect?: SterilizerWhereUniqueInput
  }

  export type SterilizationCycleItemCreateNestedManyWithoutCycleInput = {
    create?: XOR<SterilizationCycleItemCreateWithoutCycleInput, SterilizationCycleItemUncheckedCreateWithoutCycleInput> | SterilizationCycleItemCreateWithoutCycleInput[] | SterilizationCycleItemUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: SterilizationCycleItemCreateOrConnectWithoutCycleInput | SterilizationCycleItemCreateOrConnectWithoutCycleInput[]
    createMany?: SterilizationCycleItemCreateManyCycleInputEnvelope
    connect?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
  }

  export type SterilizationCycleItemUncheckedCreateNestedManyWithoutCycleInput = {
    create?: XOR<SterilizationCycleItemCreateWithoutCycleInput, SterilizationCycleItemUncheckedCreateWithoutCycleInput> | SterilizationCycleItemCreateWithoutCycleInput[] | SterilizationCycleItemUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: SterilizationCycleItemCreateOrConnectWithoutCycleInput | SterilizationCycleItemCreateOrConnectWithoutCycleInput[]
    createMany?: SterilizationCycleItemCreateManyCycleInputEnvelope
    connect?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SterilizerUpdateOneRequiredWithoutCyclesNestedInput = {
    create?: XOR<SterilizerCreateWithoutCyclesInput, SterilizerUncheckedCreateWithoutCyclesInput>
    connectOrCreate?: SterilizerCreateOrConnectWithoutCyclesInput
    upsert?: SterilizerUpsertWithoutCyclesInput
    connect?: SterilizerWhereUniqueInput
    update?: XOR<XOR<SterilizerUpdateToOneWithWhereWithoutCyclesInput, SterilizerUpdateWithoutCyclesInput>, SterilizerUncheckedUpdateWithoutCyclesInput>
  }

  export type SterilizationCycleItemUpdateManyWithoutCycleNestedInput = {
    create?: XOR<SterilizationCycleItemCreateWithoutCycleInput, SterilizationCycleItemUncheckedCreateWithoutCycleInput> | SterilizationCycleItemCreateWithoutCycleInput[] | SterilizationCycleItemUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: SterilizationCycleItemCreateOrConnectWithoutCycleInput | SterilizationCycleItemCreateOrConnectWithoutCycleInput[]
    upsert?: SterilizationCycleItemUpsertWithWhereUniqueWithoutCycleInput | SterilizationCycleItemUpsertWithWhereUniqueWithoutCycleInput[]
    createMany?: SterilizationCycleItemCreateManyCycleInputEnvelope
    set?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
    disconnect?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
    delete?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
    connect?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
    update?: SterilizationCycleItemUpdateWithWhereUniqueWithoutCycleInput | SterilizationCycleItemUpdateWithWhereUniqueWithoutCycleInput[]
    updateMany?: SterilizationCycleItemUpdateManyWithWhereWithoutCycleInput | SterilizationCycleItemUpdateManyWithWhereWithoutCycleInput[]
    deleteMany?: SterilizationCycleItemScalarWhereInput | SterilizationCycleItemScalarWhereInput[]
  }

  export type SterilizationCycleItemUncheckedUpdateManyWithoutCycleNestedInput = {
    create?: XOR<SterilizationCycleItemCreateWithoutCycleInput, SterilizationCycleItemUncheckedCreateWithoutCycleInput> | SterilizationCycleItemCreateWithoutCycleInput[] | SterilizationCycleItemUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: SterilizationCycleItemCreateOrConnectWithoutCycleInput | SterilizationCycleItemCreateOrConnectWithoutCycleInput[]
    upsert?: SterilizationCycleItemUpsertWithWhereUniqueWithoutCycleInput | SterilizationCycleItemUpsertWithWhereUniqueWithoutCycleInput[]
    createMany?: SterilizationCycleItemCreateManyCycleInputEnvelope
    set?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
    disconnect?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
    delete?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
    connect?: SterilizationCycleItemWhereUniqueInput | SterilizationCycleItemWhereUniqueInput[]
    update?: SterilizationCycleItemUpdateWithWhereUniqueWithoutCycleInput | SterilizationCycleItemUpdateWithWhereUniqueWithoutCycleInput[]
    updateMany?: SterilizationCycleItemUpdateManyWithWhereWithoutCycleInput | SterilizationCycleItemUpdateManyWithWhereWithoutCycleInput[]
    deleteMany?: SterilizationCycleItemScalarWhereInput | SterilizationCycleItemScalarWhereInput[]
  }

  export type SterilizationCycleCreateNestedOneWithoutItemsInput = {
    create?: XOR<SterilizationCycleCreateWithoutItemsInput, SterilizationCycleUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SterilizationCycleCreateOrConnectWithoutItemsInput
    connect?: SterilizationCycleWhereUniqueInput
  }

  export type InstrumentCreateNestedOneWithoutItemsInput = {
    create?: XOR<InstrumentCreateWithoutItemsInput, InstrumentUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InstrumentCreateOrConnectWithoutItemsInput
    connect?: InstrumentWhereUniqueInput
  }

  export type DepartmentCreateNestedOneWithoutItemsInput = {
    create?: XOR<DepartmentCreateWithoutItemsInput, DepartmentUncheckedCreateWithoutItemsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutItemsInput
    connect?: DepartmentWhereUniqueInput
  }

  export type InstrumentUsageCreateNestedOneWithoutCycle_itemInput = {
    create?: XOR<InstrumentUsageCreateWithoutCycle_itemInput, InstrumentUsageUncheckedCreateWithoutCycle_itemInput>
    connectOrCreate?: InstrumentUsageCreateOrConnectWithoutCycle_itemInput
    connect?: InstrumentUsageWhereUniqueInput
  }

  export type InstrumentUsageUncheckedCreateNestedOneWithoutCycle_itemInput = {
    create?: XOR<InstrumentUsageCreateWithoutCycle_itemInput, InstrumentUsageUncheckedCreateWithoutCycle_itemInput>
    connectOrCreate?: InstrumentUsageCreateOrConnectWithoutCycle_itemInput
    connect?: InstrumentUsageWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SterilizationCycleUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<SterilizationCycleCreateWithoutItemsInput, SterilizationCycleUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SterilizationCycleCreateOrConnectWithoutItemsInput
    upsert?: SterilizationCycleUpsertWithoutItemsInput
    connect?: SterilizationCycleWhereUniqueInput
    update?: XOR<XOR<SterilizationCycleUpdateToOneWithWhereWithoutItemsInput, SterilizationCycleUpdateWithoutItemsInput>, SterilizationCycleUncheckedUpdateWithoutItemsInput>
  }

  export type InstrumentUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<InstrumentCreateWithoutItemsInput, InstrumentUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InstrumentCreateOrConnectWithoutItemsInput
    upsert?: InstrumentUpsertWithoutItemsInput
    connect?: InstrumentWhereUniqueInput
    update?: XOR<XOR<InstrumentUpdateToOneWithWhereWithoutItemsInput, InstrumentUpdateWithoutItemsInput>, InstrumentUncheckedUpdateWithoutItemsInput>
  }

  export type DepartmentUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<DepartmentCreateWithoutItemsInput, DepartmentUncheckedCreateWithoutItemsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutItemsInput
    upsert?: DepartmentUpsertWithoutItemsInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutItemsInput, DepartmentUpdateWithoutItemsInput>, DepartmentUncheckedUpdateWithoutItemsInput>
  }

  export type InstrumentUsageUpdateOneWithoutCycle_itemNestedInput = {
    create?: XOR<InstrumentUsageCreateWithoutCycle_itemInput, InstrumentUsageUncheckedCreateWithoutCycle_itemInput>
    connectOrCreate?: InstrumentUsageCreateOrConnectWithoutCycle_itemInput
    upsert?: InstrumentUsageUpsertWithoutCycle_itemInput
    disconnect?: InstrumentUsageWhereInput | boolean
    delete?: InstrumentUsageWhereInput | boolean
    connect?: InstrumentUsageWhereUniqueInput
    update?: XOR<XOR<InstrumentUsageUpdateToOneWithWhereWithoutCycle_itemInput, InstrumentUsageUpdateWithoutCycle_itemInput>, InstrumentUsageUncheckedUpdateWithoutCycle_itemInput>
  }

  export type InstrumentUsageUncheckedUpdateOneWithoutCycle_itemNestedInput = {
    create?: XOR<InstrumentUsageCreateWithoutCycle_itemInput, InstrumentUsageUncheckedCreateWithoutCycle_itemInput>
    connectOrCreate?: InstrumentUsageCreateOrConnectWithoutCycle_itemInput
    upsert?: InstrumentUsageUpsertWithoutCycle_itemInput
    disconnect?: InstrumentUsageWhereInput | boolean
    delete?: InstrumentUsageWhereInput | boolean
    connect?: InstrumentUsageWhereUniqueInput
    update?: XOR<XOR<InstrumentUsageUpdateToOneWithWhereWithoutCycle_itemInput, InstrumentUsageUpdateWithoutCycle_itemInput>, InstrumentUsageUncheckedUpdateWithoutCycle_itemInput>
  }

  export type SterilizationCycleItemCreateNestedOneWithoutUsageInput = {
    create?: XOR<SterilizationCycleItemCreateWithoutUsageInput, SterilizationCycleItemUncheckedCreateWithoutUsageInput>
    connectOrCreate?: SterilizationCycleItemCreateOrConnectWithoutUsageInput
    connect?: SterilizationCycleItemWhereUniqueInput
  }

  export type EnumDocStatusFieldUpdateOperationsInput = {
    set?: $Enums.DocStatus
  }

  export type SterilizationCycleItemUpdateOneRequiredWithoutUsageNestedInput = {
    create?: XOR<SterilizationCycleItemCreateWithoutUsageInput, SterilizationCycleItemUncheckedCreateWithoutUsageInput>
    connectOrCreate?: SterilizationCycleItemCreateOrConnectWithoutUsageInput
    upsert?: SterilizationCycleItemUpsertWithoutUsageInput
    connect?: SterilizationCycleItemWhereUniqueInput
    update?: XOR<XOR<SterilizationCycleItemUpdateToOneWithWhereWithoutUsageInput, SterilizationCycleItemUpdateWithoutUsageInput>, SterilizationCycleItemUncheckedUpdateWithoutUsageInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumDocStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DocStatus | EnumDocStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocStatus[]
    notIn?: $Enums.DocStatus[]
    not?: NestedEnumDocStatusFilter<$PrismaModel> | $Enums.DocStatus
  }

  export type NestedEnumDocStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocStatus | EnumDocStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocStatus[]
    notIn?: $Enums.DocStatus[]
    not?: NestedEnumDocStatusWithAggregatesFilter<$PrismaModel> | $Enums.DocStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocStatusFilter<$PrismaModel>
    _max?: NestedEnumDocStatusFilter<$PrismaModel>
  }

  export type SterilizationCycleItemCreateWithoutInstrumentInput = {
    short_code?: string | null
    success?: boolean
    cycle: SterilizationCycleCreateNestedOneWithoutItemsInput
    department: DepartmentCreateNestedOneWithoutItemsInput
    usage?: InstrumentUsageCreateNestedOneWithoutCycle_itemInput
  }

  export type SterilizationCycleItemUncheckedCreateWithoutInstrumentInput = {
    id?: number
    short_code?: string | null
    cycle_id: number
    department_id: number
    success?: boolean
    usage?: InstrumentUsageUncheckedCreateNestedOneWithoutCycle_itemInput
  }

  export type SterilizationCycleItemCreateOrConnectWithoutInstrumentInput = {
    where: SterilizationCycleItemWhereUniqueInput
    create: XOR<SterilizationCycleItemCreateWithoutInstrumentInput, SterilizationCycleItemUncheckedCreateWithoutInstrumentInput>
  }

  export type SterilizationCycleItemCreateManyInstrumentInputEnvelope = {
    data: SterilizationCycleItemCreateManyInstrumentInput | SterilizationCycleItemCreateManyInstrumentInput[]
    skipDuplicates?: boolean
  }

  export type SterilizationCycleItemUpsertWithWhereUniqueWithoutInstrumentInput = {
    where: SterilizationCycleItemWhereUniqueInput
    update: XOR<SterilizationCycleItemUpdateWithoutInstrumentInput, SterilizationCycleItemUncheckedUpdateWithoutInstrumentInput>
    create: XOR<SterilizationCycleItemCreateWithoutInstrumentInput, SterilizationCycleItemUncheckedCreateWithoutInstrumentInput>
  }

  export type SterilizationCycleItemUpdateWithWhereUniqueWithoutInstrumentInput = {
    where: SterilizationCycleItemWhereUniqueInput
    data: XOR<SterilizationCycleItemUpdateWithoutInstrumentInput, SterilizationCycleItemUncheckedUpdateWithoutInstrumentInput>
  }

  export type SterilizationCycleItemUpdateManyWithWhereWithoutInstrumentInput = {
    where: SterilizationCycleItemScalarWhereInput
    data: XOR<SterilizationCycleItemUpdateManyMutationInput, SterilizationCycleItemUncheckedUpdateManyWithoutInstrumentInput>
  }

  export type SterilizationCycleItemScalarWhereInput = {
    AND?: SterilizationCycleItemScalarWhereInput | SterilizationCycleItemScalarWhereInput[]
    OR?: SterilizationCycleItemScalarWhereInput[]
    NOT?: SterilizationCycleItemScalarWhereInput | SterilizationCycleItemScalarWhereInput[]
    id?: IntFilter<"SterilizationCycleItem"> | number
    short_code?: StringNullableFilter<"SterilizationCycleItem"> | string | null
    cycle_id?: IntFilter<"SterilizationCycleItem"> | number
    instrument_id?: IntFilter<"SterilizationCycleItem"> | number
    department_id?: IntFilter<"SterilizationCycleItem"> | number
    success?: BoolFilter<"SterilizationCycleItem"> | boolean
  }

  export type SterilizationCycleItemCreateWithoutDepartmentInput = {
    short_code?: string | null
    success?: boolean
    cycle: SterilizationCycleCreateNestedOneWithoutItemsInput
    instrument: InstrumentCreateNestedOneWithoutItemsInput
    usage?: InstrumentUsageCreateNestedOneWithoutCycle_itemInput
  }

  export type SterilizationCycleItemUncheckedCreateWithoutDepartmentInput = {
    id?: number
    short_code?: string | null
    cycle_id: number
    instrument_id: number
    success?: boolean
    usage?: InstrumentUsageUncheckedCreateNestedOneWithoutCycle_itemInput
  }

  export type SterilizationCycleItemCreateOrConnectWithoutDepartmentInput = {
    where: SterilizationCycleItemWhereUniqueInput
    create: XOR<SterilizationCycleItemCreateWithoutDepartmentInput, SterilizationCycleItemUncheckedCreateWithoutDepartmentInput>
  }

  export type SterilizationCycleItemCreateManyDepartmentInputEnvelope = {
    data: SterilizationCycleItemCreateManyDepartmentInput | SterilizationCycleItemCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type SterilizationCycleItemUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: SterilizationCycleItemWhereUniqueInput
    update: XOR<SterilizationCycleItemUpdateWithoutDepartmentInput, SterilizationCycleItemUncheckedUpdateWithoutDepartmentInput>
    create: XOR<SterilizationCycleItemCreateWithoutDepartmentInput, SterilizationCycleItemUncheckedCreateWithoutDepartmentInput>
  }

  export type SterilizationCycleItemUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: SterilizationCycleItemWhereUniqueInput
    data: XOR<SterilizationCycleItemUpdateWithoutDepartmentInput, SterilizationCycleItemUncheckedUpdateWithoutDepartmentInput>
  }

  export type SterilizationCycleItemUpdateManyWithWhereWithoutDepartmentInput = {
    where: SterilizationCycleItemScalarWhereInput
    data: XOR<SterilizationCycleItemUpdateManyMutationInput, SterilizationCycleItemUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type SterilizationCycleCreateWithoutSterilizerInput = {
    user_id: string
    cycle_number: number
    sterilization_date?: Date | string
    items?: SterilizationCycleItemCreateNestedManyWithoutCycleInput
  }

  export type SterilizationCycleUncheckedCreateWithoutSterilizerInput = {
    id?: number
    user_id: string
    cycle_number: number
    sterilization_date?: Date | string
    items?: SterilizationCycleItemUncheckedCreateNestedManyWithoutCycleInput
  }

  export type SterilizationCycleCreateOrConnectWithoutSterilizerInput = {
    where: SterilizationCycleWhereUniqueInput
    create: XOR<SterilizationCycleCreateWithoutSterilizerInput, SterilizationCycleUncheckedCreateWithoutSterilizerInput>
  }

  export type SterilizationCycleCreateManySterilizerInputEnvelope = {
    data: SterilizationCycleCreateManySterilizerInput | SterilizationCycleCreateManySterilizerInput[]
    skipDuplicates?: boolean
  }

  export type SterilizationCycleUpsertWithWhereUniqueWithoutSterilizerInput = {
    where: SterilizationCycleWhereUniqueInput
    update: XOR<SterilizationCycleUpdateWithoutSterilizerInput, SterilizationCycleUncheckedUpdateWithoutSterilizerInput>
    create: XOR<SterilizationCycleCreateWithoutSterilizerInput, SterilizationCycleUncheckedCreateWithoutSterilizerInput>
  }

  export type SterilizationCycleUpdateWithWhereUniqueWithoutSterilizerInput = {
    where: SterilizationCycleWhereUniqueInput
    data: XOR<SterilizationCycleUpdateWithoutSterilizerInput, SterilizationCycleUncheckedUpdateWithoutSterilizerInput>
  }

  export type SterilizationCycleUpdateManyWithWhereWithoutSterilizerInput = {
    where: SterilizationCycleScalarWhereInput
    data: XOR<SterilizationCycleUpdateManyMutationInput, SterilizationCycleUncheckedUpdateManyWithoutSterilizerInput>
  }

  export type SterilizationCycleScalarWhereInput = {
    AND?: SterilizationCycleScalarWhereInput | SterilizationCycleScalarWhereInput[]
    OR?: SterilizationCycleScalarWhereInput[]
    NOT?: SterilizationCycleScalarWhereInput | SterilizationCycleScalarWhereInput[]
    id?: IntFilter<"SterilizationCycle"> | number
    user_id?: StringFilter<"SterilizationCycle"> | string
    sterilizer_id?: IntFilter<"SterilizationCycle"> | number
    cycle_number?: IntFilter<"SterilizationCycle"> | number
    sterilization_date?: DateTimeFilter<"SterilizationCycle"> | Date | string
  }

  export type SterilizerCreateWithoutCyclesInput = {
    sterilizer_code: number
    sterilizer_name: string
  }

  export type SterilizerUncheckedCreateWithoutCyclesInput = {
    id?: number
    sterilizer_code: number
    sterilizer_name: string
  }

  export type SterilizerCreateOrConnectWithoutCyclesInput = {
    where: SterilizerWhereUniqueInput
    create: XOR<SterilizerCreateWithoutCyclesInput, SterilizerUncheckedCreateWithoutCyclesInput>
  }

  export type SterilizationCycleItemCreateWithoutCycleInput = {
    short_code?: string | null
    success?: boolean
    instrument: InstrumentCreateNestedOneWithoutItemsInput
    department: DepartmentCreateNestedOneWithoutItemsInput
    usage?: InstrumentUsageCreateNestedOneWithoutCycle_itemInput
  }

  export type SterilizationCycleItemUncheckedCreateWithoutCycleInput = {
    id?: number
    short_code?: string | null
    instrument_id: number
    department_id: number
    success?: boolean
    usage?: InstrumentUsageUncheckedCreateNestedOneWithoutCycle_itemInput
  }

  export type SterilizationCycleItemCreateOrConnectWithoutCycleInput = {
    where: SterilizationCycleItemWhereUniqueInput
    create: XOR<SterilizationCycleItemCreateWithoutCycleInput, SterilizationCycleItemUncheckedCreateWithoutCycleInput>
  }

  export type SterilizationCycleItemCreateManyCycleInputEnvelope = {
    data: SterilizationCycleItemCreateManyCycleInput | SterilizationCycleItemCreateManyCycleInput[]
    skipDuplicates?: boolean
  }

  export type SterilizerUpsertWithoutCyclesInput = {
    update: XOR<SterilizerUpdateWithoutCyclesInput, SterilizerUncheckedUpdateWithoutCyclesInput>
    create: XOR<SterilizerCreateWithoutCyclesInput, SterilizerUncheckedCreateWithoutCyclesInput>
    where?: SterilizerWhereInput
  }

  export type SterilizerUpdateToOneWithWhereWithoutCyclesInput = {
    where?: SterilizerWhereInput
    data: XOR<SterilizerUpdateWithoutCyclesInput, SterilizerUncheckedUpdateWithoutCyclesInput>
  }

  export type SterilizerUpdateWithoutCyclesInput = {
    sterilizer_code?: IntFieldUpdateOperationsInput | number
    sterilizer_name?: StringFieldUpdateOperationsInput | string
  }

  export type SterilizerUncheckedUpdateWithoutCyclesInput = {
    id?: IntFieldUpdateOperationsInput | number
    sterilizer_code?: IntFieldUpdateOperationsInput | number
    sterilizer_name?: StringFieldUpdateOperationsInput | string
  }

  export type SterilizationCycleItemUpsertWithWhereUniqueWithoutCycleInput = {
    where: SterilizationCycleItemWhereUniqueInput
    update: XOR<SterilizationCycleItemUpdateWithoutCycleInput, SterilizationCycleItemUncheckedUpdateWithoutCycleInput>
    create: XOR<SterilizationCycleItemCreateWithoutCycleInput, SterilizationCycleItemUncheckedCreateWithoutCycleInput>
  }

  export type SterilizationCycleItemUpdateWithWhereUniqueWithoutCycleInput = {
    where: SterilizationCycleItemWhereUniqueInput
    data: XOR<SterilizationCycleItemUpdateWithoutCycleInput, SterilizationCycleItemUncheckedUpdateWithoutCycleInput>
  }

  export type SterilizationCycleItemUpdateManyWithWhereWithoutCycleInput = {
    where: SterilizationCycleItemScalarWhereInput
    data: XOR<SterilizationCycleItemUpdateManyMutationInput, SterilizationCycleItemUncheckedUpdateManyWithoutCycleInput>
  }

  export type SterilizationCycleCreateWithoutItemsInput = {
    user_id: string
    cycle_number: number
    sterilization_date?: Date | string
    sterilizer: SterilizerCreateNestedOneWithoutCyclesInput
  }

  export type SterilizationCycleUncheckedCreateWithoutItemsInput = {
    id?: number
    user_id: string
    sterilizer_id: number
    cycle_number: number
    sterilization_date?: Date | string
  }

  export type SterilizationCycleCreateOrConnectWithoutItemsInput = {
    where: SterilizationCycleWhereUniqueInput
    create: XOR<SterilizationCycleCreateWithoutItemsInput, SterilizationCycleUncheckedCreateWithoutItemsInput>
  }

  export type InstrumentCreateWithoutItemsInput = {
    instrument_name: string
    instrument_code: number
    instrument_exp?: number
  }

  export type InstrumentUncheckedCreateWithoutItemsInput = {
    id?: number
    instrument_name: string
    instrument_code: number
    instrument_exp?: number
  }

  export type InstrumentCreateOrConnectWithoutItemsInput = {
    where: InstrumentWhereUniqueInput
    create: XOR<InstrumentCreateWithoutItemsInput, InstrumentUncheckedCreateWithoutItemsInput>
  }

  export type DepartmentCreateWithoutItemsInput = {
    department_name: string
    department_code: number
  }

  export type DepartmentUncheckedCreateWithoutItemsInput = {
    id?: number
    department_name: string
    department_code: number
  }

  export type DepartmentCreateOrConnectWithoutItemsInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutItemsInput, DepartmentUncheckedCreateWithoutItemsInput>
  }

  export type InstrumentUsageCreateWithoutCycle_itemInput = {
    used_by: string
    patient: string
    doc_id: number
    doc_status?: $Enums.DocStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstrumentUsageUncheckedCreateWithoutCycle_itemInput = {
    id?: number
    used_by: string
    patient: string
    doc_id: number
    doc_status?: $Enums.DocStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstrumentUsageCreateOrConnectWithoutCycle_itemInput = {
    where: InstrumentUsageWhereUniqueInput
    create: XOR<InstrumentUsageCreateWithoutCycle_itemInput, InstrumentUsageUncheckedCreateWithoutCycle_itemInput>
  }

  export type SterilizationCycleUpsertWithoutItemsInput = {
    update: XOR<SterilizationCycleUpdateWithoutItemsInput, SterilizationCycleUncheckedUpdateWithoutItemsInput>
    create: XOR<SterilizationCycleCreateWithoutItemsInput, SterilizationCycleUncheckedCreateWithoutItemsInput>
    where?: SterilizationCycleWhereInput
  }

  export type SterilizationCycleUpdateToOneWithWhereWithoutItemsInput = {
    where?: SterilizationCycleWhereInput
    data: XOR<SterilizationCycleUpdateWithoutItemsInput, SterilizationCycleUncheckedUpdateWithoutItemsInput>
  }

  export type SterilizationCycleUpdateWithoutItemsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    cycle_number?: IntFieldUpdateOperationsInput | number
    sterilization_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sterilizer?: SterilizerUpdateOneRequiredWithoutCyclesNestedInput
  }

  export type SterilizationCycleUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    sterilizer_id?: IntFieldUpdateOperationsInput | number
    cycle_number?: IntFieldUpdateOperationsInput | number
    sterilization_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstrumentUpsertWithoutItemsInput = {
    update: XOR<InstrumentUpdateWithoutItemsInput, InstrumentUncheckedUpdateWithoutItemsInput>
    create: XOR<InstrumentCreateWithoutItemsInput, InstrumentUncheckedCreateWithoutItemsInput>
    where?: InstrumentWhereInput
  }

  export type InstrumentUpdateToOneWithWhereWithoutItemsInput = {
    where?: InstrumentWhereInput
    data: XOR<InstrumentUpdateWithoutItemsInput, InstrumentUncheckedUpdateWithoutItemsInput>
  }

  export type InstrumentUpdateWithoutItemsInput = {
    instrument_name?: StringFieldUpdateOperationsInput | string
    instrument_code?: IntFieldUpdateOperationsInput | number
    instrument_exp?: IntFieldUpdateOperationsInput | number
  }

  export type InstrumentUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    instrument_name?: StringFieldUpdateOperationsInput | string
    instrument_code?: IntFieldUpdateOperationsInput | number
    instrument_exp?: IntFieldUpdateOperationsInput | number
  }

  export type DepartmentUpsertWithoutItemsInput = {
    update: XOR<DepartmentUpdateWithoutItemsInput, DepartmentUncheckedUpdateWithoutItemsInput>
    create: XOR<DepartmentCreateWithoutItemsInput, DepartmentUncheckedCreateWithoutItemsInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutItemsInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutItemsInput, DepartmentUncheckedUpdateWithoutItemsInput>
  }

  export type DepartmentUpdateWithoutItemsInput = {
    department_name?: StringFieldUpdateOperationsInput | string
    department_code?: IntFieldUpdateOperationsInput | number
  }

  export type DepartmentUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    department_name?: StringFieldUpdateOperationsInput | string
    department_code?: IntFieldUpdateOperationsInput | number
  }

  export type InstrumentUsageUpsertWithoutCycle_itemInput = {
    update: XOR<InstrumentUsageUpdateWithoutCycle_itemInput, InstrumentUsageUncheckedUpdateWithoutCycle_itemInput>
    create: XOR<InstrumentUsageCreateWithoutCycle_itemInput, InstrumentUsageUncheckedCreateWithoutCycle_itemInput>
    where?: InstrumentUsageWhereInput
  }

  export type InstrumentUsageUpdateToOneWithWhereWithoutCycle_itemInput = {
    where?: InstrumentUsageWhereInput
    data: XOR<InstrumentUsageUpdateWithoutCycle_itemInput, InstrumentUsageUncheckedUpdateWithoutCycle_itemInput>
  }

  export type InstrumentUsageUpdateWithoutCycle_itemInput = {
    used_by?: StringFieldUpdateOperationsInput | string
    patient?: StringFieldUpdateOperationsInput | string
    doc_id?: IntFieldUpdateOperationsInput | number
    doc_status?: EnumDocStatusFieldUpdateOperationsInput | $Enums.DocStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstrumentUsageUncheckedUpdateWithoutCycle_itemInput = {
    id?: IntFieldUpdateOperationsInput | number
    used_by?: StringFieldUpdateOperationsInput | string
    patient?: StringFieldUpdateOperationsInput | string
    doc_id?: IntFieldUpdateOperationsInput | number
    doc_status?: EnumDocStatusFieldUpdateOperationsInput | $Enums.DocStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SterilizationCycleItemCreateWithoutUsageInput = {
    short_code?: string | null
    success?: boolean
    cycle: SterilizationCycleCreateNestedOneWithoutItemsInput
    instrument: InstrumentCreateNestedOneWithoutItemsInput
    department: DepartmentCreateNestedOneWithoutItemsInput
  }

  export type SterilizationCycleItemUncheckedCreateWithoutUsageInput = {
    id?: number
    short_code?: string | null
    cycle_id: number
    instrument_id: number
    department_id: number
    success?: boolean
  }

  export type SterilizationCycleItemCreateOrConnectWithoutUsageInput = {
    where: SterilizationCycleItemWhereUniqueInput
    create: XOR<SterilizationCycleItemCreateWithoutUsageInput, SterilizationCycleItemUncheckedCreateWithoutUsageInput>
  }

  export type SterilizationCycleItemUpsertWithoutUsageInput = {
    update: XOR<SterilizationCycleItemUpdateWithoutUsageInput, SterilizationCycleItemUncheckedUpdateWithoutUsageInput>
    create: XOR<SterilizationCycleItemCreateWithoutUsageInput, SterilizationCycleItemUncheckedCreateWithoutUsageInput>
    where?: SterilizationCycleItemWhereInput
  }

  export type SterilizationCycleItemUpdateToOneWithWhereWithoutUsageInput = {
    where?: SterilizationCycleItemWhereInput
    data: XOR<SterilizationCycleItemUpdateWithoutUsageInput, SterilizationCycleItemUncheckedUpdateWithoutUsageInput>
  }

  export type SterilizationCycleItemUpdateWithoutUsageInput = {
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    cycle?: SterilizationCycleUpdateOneRequiredWithoutItemsNestedInput
    instrument?: InstrumentUpdateOneRequiredWithoutItemsNestedInput
    department?: DepartmentUpdateOneRequiredWithoutItemsNestedInput
  }

  export type SterilizationCycleItemUncheckedUpdateWithoutUsageInput = {
    id?: IntFieldUpdateOperationsInput | number
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
    cycle_id?: IntFieldUpdateOperationsInput | number
    instrument_id?: IntFieldUpdateOperationsInput | number
    department_id?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SterilizationCycleItemCreateManyInstrumentInput = {
    id?: number
    short_code?: string | null
    cycle_id: number
    department_id: number
    success?: boolean
  }

  export type SterilizationCycleItemUpdateWithoutInstrumentInput = {
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    cycle?: SterilizationCycleUpdateOneRequiredWithoutItemsNestedInput
    department?: DepartmentUpdateOneRequiredWithoutItemsNestedInput
    usage?: InstrumentUsageUpdateOneWithoutCycle_itemNestedInput
  }

  export type SterilizationCycleItemUncheckedUpdateWithoutInstrumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
    cycle_id?: IntFieldUpdateOperationsInput | number
    department_id?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
    usage?: InstrumentUsageUncheckedUpdateOneWithoutCycle_itemNestedInput
  }

  export type SterilizationCycleItemUncheckedUpdateManyWithoutInstrumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
    cycle_id?: IntFieldUpdateOperationsInput | number
    department_id?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SterilizationCycleItemCreateManyDepartmentInput = {
    id?: number
    short_code?: string | null
    cycle_id: number
    instrument_id: number
    success?: boolean
  }

  export type SterilizationCycleItemUpdateWithoutDepartmentInput = {
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    cycle?: SterilizationCycleUpdateOneRequiredWithoutItemsNestedInput
    instrument?: InstrumentUpdateOneRequiredWithoutItemsNestedInput
    usage?: InstrumentUsageUpdateOneWithoutCycle_itemNestedInput
  }

  export type SterilizationCycleItemUncheckedUpdateWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
    cycle_id?: IntFieldUpdateOperationsInput | number
    instrument_id?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
    usage?: InstrumentUsageUncheckedUpdateOneWithoutCycle_itemNestedInput
  }

  export type SterilizationCycleItemUncheckedUpdateManyWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
    cycle_id?: IntFieldUpdateOperationsInput | number
    instrument_id?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SterilizationCycleCreateManySterilizerInput = {
    id?: number
    user_id: string
    cycle_number: number
    sterilization_date?: Date | string
  }

  export type SterilizationCycleUpdateWithoutSterilizerInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    cycle_number?: IntFieldUpdateOperationsInput | number
    sterilization_date?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SterilizationCycleItemUpdateManyWithoutCycleNestedInput
  }

  export type SterilizationCycleUncheckedUpdateWithoutSterilizerInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    cycle_number?: IntFieldUpdateOperationsInput | number
    sterilization_date?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SterilizationCycleItemUncheckedUpdateManyWithoutCycleNestedInput
  }

  export type SterilizationCycleUncheckedUpdateManyWithoutSterilizerInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    cycle_number?: IntFieldUpdateOperationsInput | number
    sterilization_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SterilizationCycleItemCreateManyCycleInput = {
    id?: number
    short_code?: string | null
    instrument_id: number
    department_id: number
    success?: boolean
  }

  export type SterilizationCycleItemUpdateWithoutCycleInput = {
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    instrument?: InstrumentUpdateOneRequiredWithoutItemsNestedInput
    department?: DepartmentUpdateOneRequiredWithoutItemsNestedInput
    usage?: InstrumentUsageUpdateOneWithoutCycle_itemNestedInput
  }

  export type SterilizationCycleItemUncheckedUpdateWithoutCycleInput = {
    id?: IntFieldUpdateOperationsInput | number
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
    instrument_id?: IntFieldUpdateOperationsInput | number
    department_id?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
    usage?: InstrumentUsageUncheckedUpdateOneWithoutCycle_itemNestedInput
  }

  export type SterilizationCycleItemUncheckedUpdateManyWithoutCycleInput = {
    id?: IntFieldUpdateOperationsInput | number
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
    instrument_id?: IntFieldUpdateOperationsInput | number
    department_id?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
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