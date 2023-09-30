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
    if (isAddTodo != "") {
      setItems((prevItems) => [
        ...prevItems,
        {
          id: Math.random(),
          addToDo: isAddTodo.addToDo,
        },
      ]);
    } else {
      alert("Kolom input wajib diisi!");
    }

    console.log(isItems);
  };

  const handleAddTodo = (event) => {
    setAddTodo({
      addToDo: event.target.value,
    });
  };

  return (
    <div>
      <form className="flex justify-center gap-x-4" onSubmit={handleForm}>
        <Input type="text" size="w-2/5" name="form" onchange={handleAddTodo} />
        <Button>Add To do</Button>
      </form>

      {/* <ul className="text-center mt-8">
        {isItems.map((item) => (
          <li
            className="bg-slate-200 w-2/5 mx-auto rounded-md shadow-lg mt-4 p-5 text-xl hover:bg-slate-400"
            key={item.id}
          >
            {item.addToDo}
          </li>
        ))}
      </ul> */}
 
      <List  items={isItems} />
    
    </div>
  );
};

export default Form;
