import Link from "next/link";
import { useRouter } from "next/router";

function Comment() {
    const router = useRouter()

    const todoId = router.query.todoId
    const commentsId = router.query.commentsId
    return (<>
        <Link href={`/todos/${todoId}`}>Voltar</Link>
        <h1>Comentário: {commentsId}</h1>
    </>);
}

export default Comment;