// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

// function
function App() {
  const name  = 'Andri'
  const x     = true
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: "doctors appoitment",
            day: "feb 5th at 2.30pm",
            reminder: true,
        },
    
        {
            id: 2,
            text: "go to toilet",
            day: "feb 5th at 6.30pm",
            reminder: true,
        },
    
        {
            id: 3,
            text: "Eat",
            day: "feb 5th at 7.30pm",
            reminder: false,
        },
    ]
  )

  // Delete Task
  const deleteTask = (id) => {
    // console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id))
  };

  return (
    // components harus punya parent kalo ga ada bisa kae notasi "<>"
    // <>
    //   <h1>Hello From React</h1>
    //   <h2>Hello</h2>
    // </>

    // return() hanya bisa return satu parent element
    <div className="container">
       {/* call Header.js */}
       {/* pass tittel prop to header.js, this will offeride the default props */}
       {/* <Header tittle='Hai' /> */}
       <Header />
       <Tasks tasks = {tasks} onDelete = {deleteTask}/>
      <h1>Hello From React</h1>
      <h2>Hello {name}</h2>
      <h2>Hello {1 + 1}</h2>
      <h2>hello {x ?  'Yes' : 'No'}</h2>
    </div>
  );
}

// class
// class App extends React.Component{
//   render(){
//     return <h1>Hallo from from class</h1>
//   }
// }

export default App;
