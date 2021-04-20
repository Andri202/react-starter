// racp
import PropTypes from "prop-types";
import Task from "./Task"

// const tasks = [
//   {
//     id: 1,
//     text: "doctors appoitment",
//     day: "feb 5th at 2.30pm",
//     reminder: true,
//   },

//   {
//     id: 2,
//     text: "go to toilet",
//     day: "feb 5th at 6.30pm",
//     reminder: true,
//   },

//   {
//     id: 3,
//     text: "Eat",
//     day: "feb 5th at 7.30pm",
//     reminder: false,
//   },
// ];

const Tasks = ({tasks}) => {
  return (
    <>
      {tasks.map((task) => (
        //<h3 key = {task.id} task = {task} >{task.id}</h3>
        <Task key = {task.id} task = {task} />
      ))}
    </>
  );
};

export default Tasks;
