export default function SoupPage({ params }: Params<"id">) {
  return <div>{params.id}</div>;
}
