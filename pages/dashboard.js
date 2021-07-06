import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

import { useState } from "react";

import styles from "../styles/Dashboard.module.scss";
import { BsXCircleFill } from "react-icons/bs";

import Modal from "../components/Modal/component";

const TaskList = ({ tasks, handleDeleteTask }) => {
  return (
    <div className={styles.TaskList}>
      <h2>Task List</h2>
      {tasks.map((task, index) => {
        return (
          <li key={index} className={styles.TaskListItem}>
            {task.title}
            <BsXCircleFill onClick={() => handleDeleteTask(task.title)} />
          </li>
        );
      })}
    </div>
  );
};

const CreateTaskForm = ({ createTask }) => {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const removeLastChars = (text, n) => {
    n *= -1;
    return text.slice(0, n);
  };

  const prepDefaultDate = (d) => {
    return removeLastChars(d.toISOString(), 5);
  };

  return (
    <div>
      <label>
        Title
        <input
          type="text"
          label="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Start
        <input
          type="datetime-local"
          label="start"
          name="start"
          value={prepDefaultDate(start)}
          onChange={(e) => setStart(e.target.value)}
        />
      </label>
      <label>
        End
        <input
          type="datetime-local"
          label="end"
          name="end"
          value={prepDefaultDate(end)}
          onChange={(e) => setEnd(e.target.value)}
        />
      </label>
      <button onClick={() => createTask(title, start, end)}>Create</button>
    </div>
  );
};

const Dashboard = () => {
  const { user, error, isLoading } = useUser();
  const [tasks, setTasks] = useState([
    {
      title: "Day Job",
      start: new Date(2021, 7, 5, 9, 30, 0, 0),
      end: new Date(2021, 7, 5, 5, 0, 0, 0),
    },
    {
      title: "React Stuffs",
      start: new Date(2021, 7, 5, 9, 30, 0, 0),
      end: new Date(2021, 7, 5, 5, 0, 0, 0),
    },
    {
      title: "Bed Time",
      start: new Date(2021, 7, 5, 9, 30, 0, 0),
      end: new Date(2021, 7, 5, 5, 0, 0, 0),
    },
  ]);
  const [showTaskModal, setShowTaskModal] = useState(false);

  const createTask = (title, start, end) => {
    setTasks([...tasks, { title, start, end }]);
  };

  return (
    <div className={styles.Dashboard}>
      {user.name}
      <TaskList
        handleDeleteTask={(title) => {
          setTasks(tasks.filter((task) => task.title !== title));
        }}
        tasks={tasks}
      />

      <button onClick={() => setShowTaskModal(true)}>Add Task</button>

      <Modal show={showTaskModal} handleClose={() => setShowTaskModal(false)}>
        <CreateTaskForm createTask={createTask} />
      </Modal>

      <button onClick={() => console.log(tasks)}>TaskStateDebug</button>
    </div>
  );
};

export default withPageAuthRequired(Dashboard);
