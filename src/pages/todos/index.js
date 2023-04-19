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
                <li key={todo.id}>{todo.title}</li>
            ))}
            <li>Todo 1</li>
            <li>Todo 2</li>
            <li>Todo 3</li>
        </ul>
    </>);
}

export default Todos;