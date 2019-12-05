import React from "react";
import { Button, Typography, DatePicker, Checkbox } from "antd";
import "antd/dist/antd.css";
import styled from "@emotion/styled";

const { Title } = Typography;

const ItemWrapper = styled.div({
  display: "flex",
  justifyContent: "space-between",
  width: "700px",
  border: "1px solid #EDEDED",
  transition: "box-shadow 300ms",
  margin: "5px",
  padding: "15px",
  boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",

  "&:hover": {
    boxShadow: " 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
  }
});

const DetailsWrapper = styled.div({
  display: "flex"
});

const ButtonsWrapper = styled.div({
  display: "flex"
});

const Item = ({ itemTitle, onClickDelete, checked }) => {
  return (
    <ItemWrapper>
      <DetailsWrapper>
        {/* ToDo: implement onChange={} */}
        <Checkbox style={{ marginRight: "15px" }} checked={checked} />
        <Title style={{ fontSize: "20px", marginRight: "100px" }}>
          {itemTitle}
        </Title>
      </DetailsWrapper>
      <ButtonsWrapper>
        {/* ToDo: implement onChange={} */}
        <DatePicker
          showTime
          placeholder="Deadline"
          format="YY-MM-DD HH:mm"
          style={{
            minWidth: "100px",
            width: "150px",
            height: "33px",
            marginRight: "10px"
          }}
        />
        <Button onClick={onClickDelete} style={{ width: "100px" }}>
          Delete
        </Button>
      </ButtonsWrapper>
    </ItemWrapper>
  );
};

export default Item;
