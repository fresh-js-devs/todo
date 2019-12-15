import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, Modal, Form, Input } from "antd";
import styled from "@emotion/styled";
import PageLayoutWrapper from "./components/atoms/PageLayoutWrapper";
import HeaderOfmine from "./components/molecules/HeaderOfMine";
import BodyOfMine from "./components/molecules/BodyOfMine";
import WorkTasks from "./components/molecules/WorkTasks";
import PersonalTasks from "./components/molecules/PersonalTasks";
import Logo from "./components/atoms/Logo";
import HeadingOfMine from "./components/atoms/HeadingOfMine";
import Task from "./components/atoms/Task";
import TaskHeader from "./components/atoms/TaskHeader";
import AddTaskButton from "./components/atoms/AddTaskButton";
import { Typography } from 'antd';

import mock from "./components/mocks/mock.json";
import mock2 from "./components/mocks/mock2.json";

const App = () => {
  const [workTasks, setWorkTasks] = useState([]);
  const [personalTasks, setPersonalTasks] = useState([]);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [workTaskTitle, setWorkTasksTitle] = useState("");
  const [workTaskDescription, setWorkTaskDescription] = useState("");
  const [personalTaskTitle, setPersonalTaskTitle] = useState("");
  const [personalTaskDescription, setPersonalTaskDescription] = useState("");
  const [editable, setEditable] = useState("");

  const { TextArea } = Input;
  const { Paragraph } = Typography;

    
  const showModal = () => {
    setVisible(true);
  };

  const showModal2 = () => {
    setVisible2(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleOk2 = () => {
    setVisible2(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleCancel2 = () => {
    setVisible2(false);
  };

  useEffect(() => {
    setWorkTasks(mock);
  }, []);

  useEffect(() => {
    setPersonalTasks(mock2);
  }, []);

  const renderWorkTasks = workTasks.map(task => {
    const { id, workTaskTitle, workTaskDescription } = task;
    return <Task Title={workTaskTitle} Description={workTaskDescription} />;
  });

  const renderPersonalTasks = personalTasks.map(personaltask => {
    const { id, personalTaskTitle, personalTaskDescription } = personaltask;
    return <Task Title={personalTaskTitle} Description={personalTaskDescription} />;
  });

  const addWorkTask = () => {
    const newWorkTask = {
      workTaskTitle,
      workTaskDescription,
      id: workTasks.length + 1
    };
    setWorkTasks([newWorkTask, ...workTasks]);
    setWorkTaskDescription("");
    setWorkTasksTitle("");
  };

  const addPersonalTask = () => {
    const newPersonalTask = {
      personalTaskTitle,
      personalTaskDescription,
      id: personalTasks.length + 1
    };
    setPersonalTasks([newPersonalTask, ...personalTasks]);
    setPersonalTaskTitle("");
    setPersonalTaskDescription("");
  };

  return (
    <PageLayoutWrapper>
      <HeaderOfmine>
        <Logo>To Do</Logo>
      </HeaderOfmine>

      <BodyOfMine>
        <WorkTasks>
          <TaskHeader>
            <HeadingOfMine>Work Tasks</HeadingOfMine>
            <AddTaskButton>
              <Button type="primary" onClick={() => showModal2()}>
                Add Work Task
              </Button>
              <Modal
                title="Add Work Task"
                visible={visible2}
                // onOk={() => handleOk2()}
                onOk={() => addWorkTask()}
                onCancel={() => handleCancel2()}
              >
                <Form layout="vertical">
                  <Form.Item label="Title">
                    <Input placeholder="Name of you task" value={workTaskTitle} onChange={event => setWorkTasksTitle(event.target.value)} />
                  </Form.Item>
                  <Form.Item label="Description">
                    <TextArea placeholder="Describe it" value={workTaskDescription} onChange={event => setWorkTaskDescription(event.target.value)} />
                  </Form.Item>
                </Form>
              </Modal>
            </AddTaskButton>
          </TaskHeader>
          {renderWorkTasks}
        </WorkTasks>
        <PersonalTasks>
          <TaskHeader>
            <HeadingOfMine>Personal Tasks</HeadingOfMine>
            <AddTaskButton>
              <Button type="primary" onClick={() => showModal()}>
                Add Personal Task
              </Button>
              <Modal
                title="Add Personal Task"
                visible={visible}
                // onOk={() => handleOk()}
                onOk={() => addPersonalTask()}
                onCancel={() => handleCancel()}
              >
                <Form layout="vertical">
                  <Form.Item label="Title">
                    <Input placeholder="Name of you task" value={personalTaskTitle} onChange={event => setPersonalTaskTitle(event.target.value)} />
                  </Form.Item>
                  <Form.Item label="Description">
                    <TextArea placeholder="Describe it" value={personalTaskDescription} onChange={event => setPersonalTaskDescription(event.target.value)} />
                  </Form.Item>
                </Form>
              </Modal>
            </AddTaskButton>
          </TaskHeader>
          {renderPersonalTasks}
        </PersonalTasks>
      </BodyOfMine>
    </PageLayoutWrapper>
  );
};

export default App;
