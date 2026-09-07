export default async function ProductView({
  params,
}: {
  params: { productviewid: string };
}) {
  const { productviewid } = await params;

  return (
    <section>
      <h3> This product view page {productviewid}</h3>
    </section>
  );
}
