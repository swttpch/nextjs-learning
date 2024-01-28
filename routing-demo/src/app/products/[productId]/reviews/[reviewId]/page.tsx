function Page({ params }: { params: { productId: string; reviewId: string } }) {
  return (
    <>
      <h1>
        Details about review {params.reviewId} for product {params.productId}
      </h1>
    </>
  )
}

export default Page
