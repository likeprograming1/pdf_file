import React from "react";
import MyPDF from "./MyPDF";
import styled from "styled-components";

const Box = styled.div`
  .title {
    width: 1388px;
  }
`;

function App() {
  return (
    <Box>
      <MyPDF />
    </Box>
  );
}

export default App;
