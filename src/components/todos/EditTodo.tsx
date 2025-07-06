"use client";

import { useState } from "react";
import Button from "@/components/button/Button";
import {MdEdit} from "react-icons/md";
import Form from "@/components/form/form";
import Input from "@/components/input/input";
import * as actions from "@/actions";
import {todoProps} from "@/types";

const EditTodo = ({ todo }: {todo: todoProps}) => {
    const [editTodoState, setEditTodoState] = useState(false)

    const handleEdit = () => {
        if(todo.isCompleted){
            return;
        }
        setEditTodoState(!editTodoState);
    };
    const handleSubmit = () => {
        setEditTodoState(!editTodoState)
    }
    return (
        <div className="flex gap-5 items-center">
            <Button onClick={handleEdit} text={<MdEdit />} actionButton />
            {editTodoState ? (
                <Form action={actions.editTodo} onSubmit={handleSubmit}>
                    <Input name="inputId" value={todo.id} type="hidden"></Input>
                    <div className="flex justify-center ">
                        <Input type="text" name="newTitle" placeholder="Изменить задачу ..." />
                        <Button type="submit" text="save"></Button>
                    </div>
                </Form>
            ) : null}
        </div>
    );
};


export default EditTodo