import { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const todayDate = new Date().toISOString().slice(0, 10);
class App extends Component {
  counter = 4;
  state = {
    tasks: [
      {
        id: 0,
        text: "Zrobic papa",
        date: todayDate,
        active: true,
        important: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "Nakarmic kota",
        date: todayDate,
        active: true,
        important: false,
        finishDate: null,
      },
      {
        id: 2,
        text: "Nakarmic słonia",
        date: todayDate,
        active: true,
        important: false,
        finishDate: null,
      },
      {
        id: 3,
        text: "Nakarmic słonia",
        date: todayDate,
        active: true,
        important: false,
        finishDate: null,
      },
    ],
  };
  handleChangeActive = (id) => {
    console.log("done elementu o id " + id);
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };
  handleDelateTask = (id) => {
    let tasks = Array.from(this.state.tasks);
    console.log(tasks);

    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };
  addTasks = (text, date, important) => {
    if (text.length > 3) {
      const task = {
        id: this.counter,
        text,
        date,
        active: true,
        important,
        finishDate: null,
      };
      this.counter++;
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, task],
      }));
    } else {
      alert(
        "Your task which you inputed is too short. Please provide more than 3 letters. Thank you!"
      );
    }
    return true;
  };
  render() {
    return (
      <div className="App">
        <h1>to do app</h1>
        <AddTask addTask={this.addTasks} />
        <TaskList
          tasks={this.state.tasks}
          changeActive={this.handleChangeActive}
          delateTask={this.handleDelateTask}
        />
      </div>
    );
  }
}

export default App;
