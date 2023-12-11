declare module "server-only" {}

type Params<T extends string> = Readonly<{ params: { [K in T]: string } }>;

type SearchParams<T extends string> = Readonly<{
  [K in T]?: string | string[] | undefined;
}>;

type FormState<T> =
  | { data?: null; error?: string }
  | { data?: T; error?: null };
