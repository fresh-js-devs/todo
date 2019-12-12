import React, { useState } from "react";
import {
  Layout,
  Button,
  Modal,
  Typography,
  Input,
  Card,
  Checkbox,
  DatePicker
} from "antd";
import moment from "moment";
import "antd/dist/antd.css";
import Box from "./components/atoms/box.js";
import Data from "./mocks/data.json";

const { Header, Content } = Layout;
const { Title } = Typography;

const App = () => {
  const [items, setitems] = useState(Data);
  const [itemTitle, setitemTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [visible, setvisible] = useState(false);
  const [checkedItems, setCheckedItems] = useState([""]);

  const showModal = () => setvisible(!visible);

  const handleCheck = id => setCheckedItems([...checkedItems, id]);

  const handleUncheck = id => {
    const filteredItems = checkedItems.filter(i => i !== id);
    setCheckedItems(filteredItems);
  };

  const handleCancel = () => setvisible(!visible);

  const handleDeleteClicked = id => {
    const filteredItems = items.filter(i => i.id !== id);
    setitems(filteredItems);
  };

  const handleAddItemClicked = () => {
    const newItem = {
      id: items.length + 1,
      itemTitle,
      deadline
    };
    setitems([...items, newItem]);
    setvisible(!visible);
    setitemTitle("");
  };

  const renderItems = () =>
    items.map(item => {
      const { id, itemTitle, deadline } = item;
      return (
        <Card
          key={id}
          style={{
            width: "100%"
          }}
        >
          <Box justifyContent="space-between">
            <Box>
              <Checkbox
                style={{ marginRight: "15px" }}
                onChange={
                  checkedItems.includes(id)
                    ? () => handleUncheck(id)
                    : () => handleCheck(id)
                }
                checked={checkedItems.includes(id)}
              />
              <Title
                style={
                  checkedItems.includes(id)
                    ? {
                        fontSize: "20px",
                        marginRight: "100px",
                        textDecoration: "line-through"
                      }
                    : { fontSize: "20px", marginRight: "100px" }
                }
              >
                {itemTitle}
              </Title>
            </Box>
            <Box>
              <DatePicker
                showTime
                placeholder="Deadline"
                format="YY-MM-DD HH:mm"
                defaultValue={moment(deadline)}
                style={{
                  minWidth: "100px",
                  width: "150px",
                  height: "33px",
                  marginRight: "10px"
                }}
              />
              <Button
                onClick={() => handleDeleteClicked(id)}
                style={{ width: "100px" }}
              >
                Delete
              </Button>
            </Box>
          </Box>
        </Card>
      );
    });

  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ color: "white", fontSize: "48px" }}>To Do </Header>
      <Content
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <Box flexDirection="column" width="65%">
          {renderItems()}
          <Button
            type="primary"
            style={{ marginTop: "25px", width: "100px" }}
            onClick={() => showModal()}
          >
            + Add Item
          </Button>
          <Modal
            title="ToDo Form"
            visible={visible}
            onOk={() => handleAddItemClicked()}
            onCancel={() => handleCancel()}
            footer={[
              <Button key="Back" onClick={() => handleCancel()}>
                Back
              </Button>,
              <Button
                key="Add"
                type="primary"
                onClick={() => handleAddItemClicked()}
              >
                Add
              </Button>
            ]}
          >
            <Box flexDirection="column">
              <Title>ToDo Form</Title>
              <Input
                placeholder="ToDo item name"
                value={itemTitle}
                onChange={e => setitemTitle(e.target.value)}
              />
              <DatePicker
                showTime
                placeholder="Deadline"
                format="YY-MM-DD HH:mm"
                defaultValue={deadline}
                onChange={e => setDeadline(e._d)}
                style={{
                  minWidth: "100px",
                  width: "150px",
                  height: "33px",
                  marginRight: "10px"
                }}
              />
            </Box>
          </Modal>
        </Box>
      </Content>
    </Layout>
  );
};

export default App;
