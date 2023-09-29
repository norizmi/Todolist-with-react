import Input from "../Elements/Input/Input";
import Button from "../Elements/Button/Button";
import { useState } from "react";

const List = (props) => {
  const { items } = props;
  const [isChecked, setChecked] = useState(false);
  const handleChecked = () => {
    setChecked((check) => (!check ? true : false));
  };

  return (
    // <div className="flex justify-between mx-auto items-center gap-x-9 mt-9 bg-slate-200 w-2/5 p-5 rounded-md shadow-lg">
    //   <Input type="checkbox" name="check" onchange={handleChecked} />
    //   <h2 className={`text-xl ${isChecked ? "line-through" : "no-underline"}`}>
    //     memasak indomie
    //   </h2>
    //   <Button
    //     variant="bg-rose-500"
    //     hoverbg="hover:bg-rose-800"
    //     radius="rounded-lg"
    //   >
    //     X
    //   </Button>
    // </div>

    <ul>
      {
        items.map((item, index) => (
            <li key={index}>{item}</li>
        ))
      }
    </ul>
  );
};

export default List;
