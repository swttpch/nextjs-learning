function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-[100px] m-[10px] shadow-sm border-2 flex justify-center align-middle">
      {children}
    </div>
  )
}

export default Card
