export default function ProfilePage({ params }: Params<"id">) {
  return <div>{params.id}</div>;
}
