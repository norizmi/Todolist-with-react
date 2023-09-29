import Input from "../Elements/Input/Input";
import Button from "../Elements/Button/Button";
import { useState } from "react";
import List from "./List";

const Form = () => {
  const [isAddToDo, setIsToDo] = useState("")
  const [isItems, setItems] = useState([])

  const handleForm = (event) => {
    event.preventDefault();
    localStorage.setItem("form", event.target.form.value);
    setItems(
      {
          isItems: [...isItems, isAddToDo]
      },
    )
  };

  const handleAddTodo = (event) => {
    setIsToDo(
      {
        isAddToDo: event.target.value
      }
    )
  }
  return (
    <div>
      <form className="flex justify-center gap-x-4" onSubmit={handleForm}>
        <Input type="text" size="w-2/5" name="form" onchange={handleAddTodo} value={isAddToDo}/>
        <Button>Add To do</Button>
      </form>

      <List items={isItems}/>
    </div>
  );
};

export default Form;
