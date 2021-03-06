import React from "react";
import Task from "./Task.js";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  done.sort((a, b) => {
    return b.finishDate - a.finishDate;
  });
  if (active.length > 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }
  const activeTasks = active.map((task) => {
    return (
      <Task
        key={task.id}
        tasks={task}
        change={props.changeActive}
        delateTask={props.delateTask}
      />
    );
  });

  const doneTasks = done.map((task) => {
    return (
      <Task
        key={task.id}
        tasks={task}
        change={props.changeActive}
        delateTask={props.delateTask}
      />
    );
  });

  return (
    <>
      <div className="active">
        <h3>Tasks to do</h3>
        <ul>
          {activeTasks.length > 0 ? (
            activeTasks
          ) : (
            <p>Congratulations! You have done all tasks!</p>
          )}
        </ul>
      </div>
      <hr />
      <div className="done">
        <h3>
          Tasks done (<em>{doneTasks.length} </em>)
        </h3>
        {done.length > 5 && (
          <span style={{ fontSize: 12 }}>
            Wyswietlonych jest jedynie 5 ostatnich zadań
          </span>
        )}
        <ul>{doneTasks.slice(0, 5)}</ul>
      </div>
    </>
  );
};

export default TaskList;
