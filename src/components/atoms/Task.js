import styled from "@emotion/styled";
import React from "react";

const TaskWrap = styled.div({
    width: "80%",
    height: "100px",
    border: "1px solid",
    backgroundColor: "gray",
    height: "100%",
    margin: "0 auto",
    marginTop: "5px",
   
})

const Task = ({Title, Description}) => {
    return (
         <TaskWrap>
             {Title}
                {Description}
    </TaskWrap>
    )   
}

export default Task;