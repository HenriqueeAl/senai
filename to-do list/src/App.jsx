import reactLogo from './assets/react.svg'
import './App.css'
import { AiFillDelete } from 'react-icons/ai';
import { useEffect, useState } from 'react';

const Task = (props)=>{
  const [complete, setComplete] = useState(false)

  return (
    <div className='task'>
      <div className='tasknocomplete'>
        <input type='checkbox' onClick={()=>setComplete(!complete)}></input>
        {complete == true ? <p className='taskname-complete'> {props.task}  </p> : <p className='taskname-incomplete'> {props.task} </p>}
      </div>
      {complete == true ? <></> : <AiFillDelete className='delete' onClick={()=>{props.test()}}></AiFillDelete>}
    </div>
  )
}

function App() {

  const [tasks,setTasks] = useState([])

  const [taskfilter,setTaskfilter] = useState([])

  const [inputdigit, setIputdigit] = useState('')

  const [num,setNum] = useState(0)

  const remove = (e)=>{
    setTaskfilter(tasks.splice(e.num, 1))
  }

  useEffect(()=>{
    setTaskfilter(tasks)
  }, [remove,setTasks])

  useEffect(()=>{
    console.log('add')
  }, [setTasks])

  useEffect(()=>{
    console.log('remove')
  }, [remove])

  return (
    <div className="App">
      <h1>To-do List</h1>
      <form className='form-addtask' onSubmit={(e)=>{
        e.preventDefault();
        setTasks( [...tasks, {name:inputdigit, num: num}])
        setNum(num + 1)
        taskslist()
        }}>
        <input type='text' className='input-addtask' placeholder='Tarefa' onChange={(e)=>{setIputdigit(e.target.value)}}></input>
        <input type='submit' className='inputsubmit-addtask'></input>
      </form>
      <div className='tasks'>
        {taskfilter.map((e)=>{
          return <Task task={e.name} test={()=>remove(e)}></Task>
        })}
      </div>
    </div>
  )
}

export default App
