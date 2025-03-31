import React, { useState } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
import { BsTrash3Fill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";


function Home() {
  const [taskValue, setTaskValue] = useState("")
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("tasklist")) ?? [])
  const [completedTask, setCompletedTask] = useState(JSON.parse(localStorage.getItem("completedTask")) ?? [])


  


  function onAddTaskClicked() {
    let newTask = {
      description: taskValue,
      isCompleted: false
    }

    let list = taskList
    list.push(newTask)
    setTaskList(list)
    setTaskValue("")

    localStorage.setItem("tasklist", JSON.stringify(list))

  }

  function onDeleteClick(index) {
    let dupArray = taskList.filter((item, i) => i !== index)
    setTaskList(dupArray)

    localStorage.setItem("tasklist", JSON.stringify(dupArray))
  }

  function onCompleteClicked(index, item) {
    const removeTaskList = [...taskList];
    removeTaskList.splice(index, 1);
    setTaskList(removeTaskList);

    localStorage.setItem("tasklist", JSON.stringify(removeTaskList))

    let complete = completedTask
    complete.push(item)
    setCompletedTask(complete)

    localStorage.setItem("completedTask", JSON.stringify(complete))


  }
  
  const navigate = useNavigate()
  return (
    <div>
      <div class="maincontainer">

        <div class="main">
          <div class="container">
            <div class="menu">
              <nav>
                <a onClick={() => navigate("/")}>My Tasks</a>
                <a onClick={() => navigate("/Complete")}>Completed Tasks</a>
              </nav>
            </div>

            <div className="content">

              <div class="taskbox">
                <input class='inp' value={taskValue} type="text" placeholder='Enter your Task' onChange={(event) => {
                  setTaskValue(event.target.value)
                }} />

                <button class="addtask" onClick={onAddTaskClicked}>Add Task</button>
              </div>

              <div class="task">
                {
                  taskList.map((item, index) => {
                    return (
                      <div class='input'>
                        <p>{item.description}</p>
                        <div class="icons">
                          <TiTick onClick={() => onCompleteClicked(index, item)} />
                          <BsTrash3Fill onClick={() => onDeleteClick(index)} />
                        </div>
                      </div>
                    )
                  })
                }

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>

  )
}

export default Home

