import { useState } from 'react';
import './App.css';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Form } from './Form';
import { Task } from './Task';

function App() {

  const [tasks, setTasks] = useState([])

  const onDelete = (id) => {
    console.log('fui deletado', )
    setTasks(tasks.filter(task => task.id !== id))
  }

  console.log(tasks)

  return (
    <div className="App">
      <Banner />
      <Form tasks={tasks} setTasks={setTasks} />
      {tasks.length > 0 && <h1 className='task-title' >Tasks</h1>}
      <section className='tasks-boxes' >
      {tasks.map((task) => {
        return (
          <Task key={task.id} name={task.name} description={task.description} onDelete={onDelete} id={task.id} />
        )
      })}
      </section>
      <Footer />
    </div>
  );
}

export default App;
