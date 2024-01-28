function Page({ params }: { params: { productId: string } }) {
  return (
    <>
      <h1>Details about product {params.productId}</h1>
    </>
  )
}

export default Page
