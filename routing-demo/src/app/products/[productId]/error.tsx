'use client'

function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <>
      <h1>error in products id ...</h1>
      <p>{error.message}</p>
      <button type="button" onClick={reset}>
        Reinvolke{' '}
      </button>
    </>
  )
}

export default Error
