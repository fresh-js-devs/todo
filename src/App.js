import React, { useState } from "react";
import { Layout, Button, Modal, Typography, Input, Checkbox } from "antd";
import "antd/dist/antd.css";
import styled from "@emotion/styled";
import Item from "./components/organism/item.js";
import Data from "./mocks/data.json";

const { Header, Content } = Layout;
const { Title } = Typography;

const ContentWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});

const FormWrapper = styled.div({
  display: "flex",
  flexDirection: "column"
});

const ModalWrapper = styled.div({
  marginLeft: 'auto'
})

const App = () => {
  const [items, setitems] = useState(Data);
  const [itemTitle, setitemTitle] = useState("");
  const [checked, setChecked] = useState(false);
  const [visible, setvisible] = useState(false);

  const showModal = () => {
    setvisible(!visible);
  };

  const handleCancel = () => {
    setvisible(!visible);
  };

  const handleDeleteClicked = id => {
    const filteredItems = items.filter(i => i.id !== id);
    setitems(filteredItems);
  };

  const handleAddItemClicked = () => {
    const newItem = {
      id: items.length + 1,
      itemTitle,
      checked
    };
    setitems([...items, newItem]);
    setvisible(!visible);
  };

  const renderItems = () =>
    items.map(item => {
      const { id, itemTitle, checked } = item;
      return (
        <Item
          key={id}
          itemTitle={itemTitle}
          onClickDelete={() => handleDeleteClicked(id)}
          checked={checked}
        />
      );
    });

  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ color: "white", fontSize: "48px" }}>To Do </Header>
      <Content>
        <ContentWrapper>
          {renderItems()}
          <ModalWrapper>
            <Button type="primary" onClick={() => showModal()}>
              + Add Item
            </Button>
            <Modal
              title="Item Form"
              visible={visible}
              onOk={() => handleAddItemClicked()}
              onCancel={() => handleCancel()}
              footer={[
                <Button key="Back" onClick={() => handleCancel()}>
                  Back
                </Button>,
                <Button key="Add" type="primary" onClick={() => handleAddItemClicked()}>
                  Add
                </Button>,
              ]}
            >
              <FormWrapper>
                <Title>Item Form</Title>
                <Input placeholder="Item name" value={itemTitle} onChange={e => setitemTitle(e.target.value)} />
                <Checkbox value={checked} onChange={e => setChecked(!checked)} />
              </FormWrapper>
            </Modal>
          </ModalWrapper>
        </ContentWrapper>
      </Content>
    </Layout>
  );
};

export default App;
