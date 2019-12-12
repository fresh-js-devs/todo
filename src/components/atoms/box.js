import styled from "@emotion/styled";

const Box = styled.div(
  {
    display: "flex"
  },
  props => {
    const {
      flexDirection,
      alignItems,
      width,
      marginLeft,
      justifyContent
    } = props;

    return {
      flexDirection,
      alignItems,
      width,
      marginLeft,
      justifyContent
    };
  }
);

export default Box;
