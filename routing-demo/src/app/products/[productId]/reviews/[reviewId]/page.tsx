import { notFound } from 'next/navigation'

function Page({ params }: { params: { productId: string; reviewId: string } }) {
  if (parseInt(params.reviewId) > 1000) {
    notFound()
  }
  return (
    <>
      <h1>
        Details about review {params.reviewId} for product {params.productId}
      </h1>
    </>
  )
}

export default Page
