declare module "server-only" {}

type Params<T extends string> = { params: { [K in T]: string } };
