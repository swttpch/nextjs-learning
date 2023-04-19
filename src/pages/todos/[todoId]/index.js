import Link from "next/link";

import { useRouter } from "next/router";

export default function Todo() {
    const router = useRouter()

    const todoId = router.query.todoId

    return(<>
        <Link href="/">Voltar</Link>
        <h1>Exibindo o todo: {todoId}</h1>
        <p>Comentário: lalala1 <Link href={`/todos/${todoId}/comments/1`}>Detalhes</Link></p>
        <p>Comentário: lalala2 <Link href={`/todos/${todoId}/comments/2`}>Detalhes</Link></p>
        <p>Comentário: lalala3 <Link href={`/todos/${todoId}/comments/3`}>Detalhes</Link></p>
        <p>Comentário: lalala4 <Link href={`/todos/${todoId}/comments/4`}>Detalhes</Link></p>
        <p>Comentário: lalala5 <Link href={`/todos/${todoId}/comments/5`}>Detalhes</Link></p>
    </>)
}