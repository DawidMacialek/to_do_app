import React from "react";

const Task = (props) => {
  const { text, date, active, id, important, finishDate } = props.tasks;
  const style = {
    color: "red",
  };
  if (active) {
    return (
      <li>
        <p style={important ? style : null}>{text} </p>
        <span>
          should be done by:<em> {date}</em>
        </span>{" "}
        <button onClick={() => props.change(id)}>Done</button>
        <button onClick={() => props.delateTask(id)}>X</button>
      </li>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <li>
        <p>{text}</p>
        <span>
          {" "}
          planed at:
          <em> {date} </em> finished at <em> {finish} </em>
        </span>
        <button onClick={() => props.delateTask(id)}>X</button>
      </li>
    );
  }
};

export default Task;
