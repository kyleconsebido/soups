declare module "server-only" {}

type Params<T extends string> = { params: { [K in T]: string } };

type FormState<T> =
  | { data?: null; error?: string }
  | { data?: T; error?: null };
