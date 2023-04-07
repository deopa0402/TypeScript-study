import styled from 'styled-components';

const Title = styled.h1`
  color: darkviolet;
  &:hover {
    color: purple;
  }
`;

const Father = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  ${Title}:hover {
    font-size: 99px;
  }
`;

function App() {
  return (
    <Father>
      <Title>안녕하세요</Title>
    </Father>
  );
}

export default App;
