import styled from "@emotion/styled";
import React from "react";
import { Typography } from 'antd';
const { Paragraph } = Typography;

const TaskWrap = styled.div({
    width: "80%",
    height: "100px",
    border: "1px solid",
    backgroundColor: "gray",
    height: "100%",
    margin: "0 auto",
    marginTop: "5px",
   
})



const Task = ({Title, Description, setEditable}) => {
   
      
    return (
         <TaskWrap>
             {Title}
             
                
                <Paragraph editable={{ onChange: setEditable }}>{Description}</Paragraph>
                
    </TaskWrap>
    )   
}

export default Task;