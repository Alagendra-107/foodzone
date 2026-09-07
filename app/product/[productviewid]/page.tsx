export default async function Productview({
  params,
}: {
  params: Promise<{ productviewid: string }>;
}) {
  const { productviewid } = await params;

  return (
    <h2>
      This is the view: {productviewid}
    </h2>
  );
}