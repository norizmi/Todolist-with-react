import Input from "../Elements/Input/Input";
import Button from "../Elements/Button/Button";
import List from "./List";
import { useState } from "react";

const Form = () => {
  const [isAddTodo, setAddTodo] = useState("");
  const [isItems, setItems] = useState([
    {
      id: 1,
      addToDo: "memberikan pakan ikan",
    },

    {
      id: 2,
      addToDo: "bermain mobile legend selepas pulang"
    }
  ]);

  const handleForm = (event) => {
    event.preventDefault();
    localStorage.setItem("form", event.target.form.value);
    if(event.target.form.value !== "") {
      setItems((prevItems) => [
        ...prevItems,
        {
          id: Math.random(),
          addToDo: isAddTodo.addToDo,
        },
      ]);
    } else {
      alert("kolom wajib diisi")
    }
    document.getElementById("cleared").reset();
  };

  const handleAddTodo = (event) => {

      setAddTodo({
        addToDo: event.target.value,
      }); 
      
  };

  const handleItemClose = (deleteItem) => {
    localStorage.removeItem("form")
    setItems(deleteItem)
  }


  return (
    <div>
      <form className="flex justify-center gap-x-4" onSubmit={handleForm} id="cleared">
        <Input type="text" size="w-2/5" name="form" onchange={handleAddTodo} />
        <Button>Add To do</Button>
      </form>
      
      <List items={isItems} handleItemClose={handleItemClose}/>
    
    </div>
  );
};

export default Form;
