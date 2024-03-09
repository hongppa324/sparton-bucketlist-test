import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 20px;
  width: 300px;
  margin: 10px;
  background-color: #c6a1cf;
  border-radius: 10px;
`;
const StyledTitle = styled.p`
  font-size: 20px;
  padding: 10px;
`;
const StyledContent = styled.p`
  font-size: 20px;
  padding: 10px;
`;
const TodoButton = styled.button`
  background-color: black;
  margin: 5px;
  color: white;
  width: 60px;
  height: 20px;
  border-radius: 5px;
`;

export { StyledDiv, StyledTitle, StyledContent, TodoButton };
