import Input from "../Elements/Input/Input";
import Button from "../Elements/Button/Button";
import { useState } from "react";

const List = (props) => {
  const { items, handleItemClose} = props;
  const [isChecked, setChecked] = useState({});
  const handleChecked = (itemId) => {
    setChecked((checkedItems) => ({
      ...checkedItems,
      [itemId]: !checkedItems[itemId]
    }));
  };

  const handleClose = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    handleItemClose(updatedItems);
  };
  

  

  return (
    <ul className="text-center mt-8">
      {items.map((item) => (
          <li
          className="bg-slate-200 w-2/5 mx-auto rounded-md shadow-lg mt-4 p-5 text-xl hover:bg-slate-400 flex justify-between items-center"
          key={item.id}
        >  
         <Input type="checkbox" name="check"  checked={isChecked[item.id] || false} onchange={() => handleChecked(item.id)}/>
          <h2 className={`text-xl ${isChecked[item.id] ? "line-through" : "no-underline"}`}>{item.addToDo}</h2>
          <Button variant="bg-rose-500" hoverbg="hover:bg-rose-800" radius="rounded-lg" onclick={() => handleClose(item.id)}>x</Button> 
        </li>

      ))}
    </ul>
  );
};

export default List;
