import React, { useState } from 'react'
import './Complete.css'
import { useNavigate } from 'react-router-dom'



function Complete() {
  const [completeTaskList, setCompleteTaskList] = useState(JSON.parse(localStorage.getItem("completedTask")) ?? [])

  const navigate = useNavigate()
  return (
    <div class="maincontainer">

      <div class="main">
        <div class="container">

          <div class="menu">
            <nav>
              <a onClick={() => navigate("/")}>My Tasks</a>
              <a onClick={() => navigate("/Complete")}>Completed Tasks</a>
            </nav>
          </div>

          <div class="task">
            {
              completeTaskList.map((item, index) => {
                return (
                  <div class='input'>
                    <p>{item.description}</p>
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default Complete