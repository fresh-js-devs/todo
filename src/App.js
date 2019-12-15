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

import mock from "./components/mocks/mock.json";
import mock2 from "./components/mocks/mock2.json";

const App = () => {
  const [workTasks, setWorkTasks] = useState([]);
  const [personalTasks, setPersonalTasks] = useState([]);
  const [visible, setVisible] = useState(false);

  const { TextArea } = Input;

  
  
  

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  useEffect(() => {
    setWorkTasks(mock);
  }, []);

  useEffect(() => {
    setPersonalTasks(mock2);
  }, []);

  const renderWorkTasks = workTasks.map(task => {
    const { id, Title, Description } = task;
    return <Task Title={Title} Description={Description} />;
  });

  const renderPersonalTasks = personalTasks.map(task => {
    const { id, Title, Description } = task;
    return <Task Title={Title} Description={Description} />;
  });

  const addWorkTask = () => {
    const newWorkTask = {
      title: Title,
      description: Description,
      id: workTasks.length +1
    }
    setWorkTasks([newWorkTask, ...workTasks])
  }
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
              <Button type="primary" onClick={() => showModal()}>
                Add Work Task
              </Button>
              <Modal
                title="Add Work Task"
                visible={visible}
                onOk={() => handleOk()}
                onCancel={() => handleCancel()}
              >
                <Form layout="vertical">
                  <Form.Item label="Title">
                  <Input placeholder="Name of you task"  />
                  </Form.Item>
                  <Form.Item label="Description">
                  <TextArea placeholder="Describe it"  />
                  </Form.Item>
                  <Form.Item className="collection-create-form_last-form-item">
                    
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
            <AddTaskButton>Button</AddTaskButton>
          </TaskHeader>
          {renderPersonalTasks}
        </PersonalTasks>
      </BodyOfMine>
    </PageLayoutWrapper>
  );
};

export default App;
