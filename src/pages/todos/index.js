import Link from 'next/link';
import styles from '../../styles/Todos.module.css'

export async function getStaticProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')

    const todos = await data.json()

    return { props: { todos } }
}


function Todos({ todos }) {
    return (<>
        <h1>Tarefas para fazer:</h1>
        <ul className={styles.todolist}>
            {todos.map((todo) => (
                <Link key={todo.id} href={`/todos/${todo.id}`}><li >{todo.title}</li></Link>
            ))}
        </ul>
    </>);
}

export default Todos;