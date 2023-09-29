import Todo from "./components/pages/todo"

function App() {
return (
    <div className="mt-9" >
      <h1 className="text-3xl font-bold text-center">My To Do List</h1>
      <div className="pt-8 text-center">
       <Todo />
      </div>
    </div>
  )
}

export default App
