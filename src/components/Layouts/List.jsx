import Input from "../Elements/Input/Input";
import Button from "../Elements/Button/Button";

const List = (props) => {
  const { items } = props;
  // const [isChecked, setChecked] = useState(false);
  // const handleChecked = () => {
  //   setChecked((check) => (!check ? true : false));
  // };

  // return (
  //   <div className="flex justify-between mx-auto items-center gap-x-9 mt-9 bg-slate-200 w-2/5 p-5 rounded-md shadow-lg">
  //     <Input type="checkbox" name="check" onchange={handleChecked} />
  //     <h2 className={`text-xl ${isChecked ? "line-through" : "no-underline"}`}>
  //       memasak indomie
  //     </h2>
  //     <Button
  //       variant="bg-rose-500"
  //       hoverbg="hover:bg-rose-800"
  //       radius="rounded-lg"
  //     >
  //       X
  //     </Button>
  //   </div>

  // );

  return (
    <ul className="text-center mt-8">
      {items.map((item) => (
        <li
          className="bg-slate-200 w-2/5 mx-auto rounded-md shadow-lg mt-4 p-5 text-xl hover:bg-slate-400"
          key={item.id}
        >
          {/* <Input type="checkbox" name="check" onchange={handleChecked} /> */}
          {item.addToDo}
          {/* <Button
            variant="bg-rose-500"
            hoverbg="hover:bg-rose-800"
            radius="rounded-lg"
          >
            X
          </Button> */}
        </li>
      ))}
    </ul>
  );
};

export default List;
