import ChangeTodo from "@/components/todos/ChangeTodo";
import {todoProps} from "@/types";
import EditTodo from "@/components/todos/EditTodo";
import DeleteTodo from "@/components/todos/DeleteTodo";

const Todo = ({todo}: {todo: todoProps}) => {
    const TodoStyle = {
        textDecoration: todo.isCompleted ? 'line-through' : 'none',
        opacity: todo.isCompleted ? 0.5 : 1
    };

    return (
        <div style={TodoStyle} className="w-10/12 mx-auto flex items-center justify-between bg-slate-900 py-4 px-20 rounded-2xl">
            {/*ChangeTodo*/}
            <ChangeTodo todo={todo} />
            <span className="text-center font-bold uppercase grow">{todo.title}</span>

            <div className="flex items-center mx-2">
                <EditTodo todo={todo}/>
            </div>

            <div className="flex items-center mx-2">
                <DeleteTodo todo={todo}/>
            </div>
        </div>
    )
}

export default Todo