import Form from "@/components/form/form";
import Input from "@/components/input/input";
import Button from "@/components/button/Button";
import * as actions from "@/actions";

const AddTodo = () => {
    return (
        <div>
            <Form action={actions.createTodo}>
                <div className="flex gap-5 items-center">
                    <Input name="input" type="text" placeholder="Добавить задачи ..."/>
                    <Button type="submit" text="Добавить" bgColor="bg-blue-600"/>
                </div>
            </Form>
        </div>
    )
}

export default AddTodo