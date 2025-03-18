import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <div class="maincontainer">

        <div class="main">
          <div class="container">
            <div class="menu">
              <nav>
                <a>My Tasks</a>
                <a onClick={() => navigate("/complete")}>Completed Tasks</a>
              </nav>

            </div>

            <div class="content">
              <div class="taskbox">
                <input class='inp' type="text" placeholder='Enter your Task'></input>

                <button class="addtask">Add Task</button>
              </div>

              <div class="task">
                
              </div>
            </div>





          </div>

        </div>


      </div>
    </div>

  )
}

export default Home