'use client'
import { useRouter } from 'next/navigation'

function OrderProduct() {
  const router = useRouter()
  const handleClick = () => {
    console.log('Placing your order')
    // router.push('/')
    // router.replace('/')
    router.back()
  }
  return (
    <>
      <h1>Order Product</h1>
      <button type="button" onClick={() => handleClick()}>
        Place order
      </button>
    </>
  )
}

export default OrderProduct
