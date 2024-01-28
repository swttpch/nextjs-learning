import { Metadata } from 'next'

type PageProps = { params: { productId: string } }

export const generateMetadata = async ({
  params
}: PageProps): Promise<Metadata> => {
  const title = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`Product ${params.productId}`)
    }, 1000)
  })
  return {
    title
  }
}
function Page({ params }: { params: { productId: string } }) {
  return (
    <>
      <h1>Details about product {params.productId}</h1>
    </>
  )
}

export default Page
