import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Form from "./componenets/Form/Form";
import Card from "./componenets/Card/Card";
import AdjustCard from "./componenets/Card/AdjustCard";
import { addButtonStyle } from "./styles/Styles";
import Tasks from "./componenets/mocks/tasks.json";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { useScrollTrigger } from "@material-ui/core";
import SoundEffect from "./mp3Sounds/short.mp3";

const renderTime = value => {
  if (value === 0) {
    document.getElementById("my_audio").play();
    return <div className="timer">Have a break !</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{value}</div>
      <div className="text">second</div>
      <div className="text">{Math.round(value / 60)}</div>
      <div className="text">minuts</div>
    </div>
  );
};

function App() {
  const [tasks, setTasks] = useState(Tasks);
  const [editID, setEditId] = useState(0);
  const [timerStarted, SetTimerStarter] = useState([0, false]);

  const onClickUpdateTask = (id, name, description, priority) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.name = name;
        task.description = description;
        task.priority = priority;
      }
      return task;
    });
    setEditId(0);
  };

  const renderTaskCards = () =>
    tasks.map(({ id, name, description, priority }) => {
      if (editID === id) {
        return (
          <AdjustCard
            key={id}
            id={id}
            name={name}
            description={description}
            handleDeleteCard={() => handleDeleteCard(id)}
            onClickUpdateTask={onClickUpdateTask}
          />
        );
      }
      return (
        <Card
          key={id}
          id={id}
          name={name}
          description={description}
          priority={priority}
          handleDeleteCard={() => handleDeleteCard(id)}
          handleAdjustCard={() => handleAdjustCard(id)}
          handleStartTimer={() => handleStartTimer(id)}
          timerState={timerStarted}
        />
      );
    });

  const handleAddNewTask = () => {
    const newTask = {
      id: tasks.length + 10,
      name: "Write some name",
      description: "Write some discription",
      priority: 1
    };
    setTasks([newTask, ...tasks]);
    setEditId(newTask.id);
  };

  const handleDeleteCard = id => {
    const newTasks = tasks.filter(card => card.id != id);
    setTasks(newTasks);
  };

  const handleAdjustCard = id => setEditId(id);

  const handleStartTimer = id =>
    timerStarted[1] ? SetTimerStarter([0, false]) : SetTimerStarter([id, true]);

  return (
    <div className="App">
      <audio src={SoundEffect} id="my_audio" loop="loop"></audio>
      <h1>To-Do List - Pomodoro</h1>
      <br />
      <CountdownCircleTimer
        isPlaying={timerStarted[1]}
        durationSeconds={1500}
        colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
        renderTime={renderTime}
        onComplete={() => {
          document.getElementById("my_audio").loop = false;
          document.getElementById("my_audio").play();
          return [true, 300000];
        }}
      />
      <Form>{renderTaskCards()}</Form>
      <div style={addButtonStyle}>
        <Fab color="primary" aria-label="add" onClick={handleAddNewTask}>
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}

export default App;
