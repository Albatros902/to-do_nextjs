import Form from "@/components/form/form";
import * as actions from "@/actions";
import Input from "@/components/input/input";
import Button from "@/components/button/Button";
import {todoProps} from "@/types";
import {FaTrash} from "react-icons/fa";

const DeleteTodo = ({todo}: {todo: todoProps}) => {
    return (
        <Form action={actions.deleteTodo}>
            <Input type="hidden" name="inputId" value={todo.id}></Input>
            <Button actionButton type="submit" bgColor="bg-red-400" text={<FaTrash />}></Button>
        </Form>
    )
}

export default DeleteTodo