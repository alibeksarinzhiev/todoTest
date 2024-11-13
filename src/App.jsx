import {useDispatch,useSelector} from 'react-redux'
import {add,done,del} from "./store/todoSlice/todoSlice"



function App() {


  const todos = useSelector((state)=>state.todo.todos)
 const dispatch = useDispatch()
 const addTask = (e)=>{
  e.preventDefault()
 }



  return (
    <div className="App">
<p>все</p>
          <p>выполнено</p>
        <form onSubmit={(e)=>{
          addTask(e)
          dispatch(add(e))

        }}>
          <input type="text" />
          <button>ДОБАВИТЬ</button>
        </form>
        <ul>
  
      {todos.map((el)=>(
        <li  key={el.id}>{el.text} 
        <button style={{background:`${el.isDone?'green':''}`}} onClick={()=>dispatch(done(el.id))}>Выполнить</button>
        <button onClick={()=>dispatch(del(el.id))}>удалить</button>
        </li>
      ))}
        </ul>
    </div>
  );
}

export default App;

 

