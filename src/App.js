import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Father = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  backgroundcolor: ${(props) => props.theme.backgroundColor};
`;

function App() {
  return (
    <Father>
      <Title>안녕하세요</Title>
    </Father>
  );
}

export default App;
