'use client'

import { notFound } from 'next/navigation'

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

function Page({ params }: { params: { productId: string; reviewId: string } }) {
  // const random = getRandomInt(2)
  // if (random === 1) {
  //   throw new Error('Something went wrong')
  // }
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
