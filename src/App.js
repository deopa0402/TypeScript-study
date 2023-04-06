import styled, { keyframes } from 'styled-components';

const Father = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const animation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    transform:rotate(360deg);
    border-radius:100px;
  }
  100% {
    transform:rotate(0deg);
    border-radius:0px;
  }
`;

const Emoji = styled.span`
  font-size: 100px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animation} 1s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 200px;
    }
    &:active {
      opacity: 0;
    }
  }
`;
function App() {
  return (
    <Father>
      <Box>
        <Emoji as="F">❤️</Emoji>
      </Box>
      <Emoji>💔</Emoji>
    </Father>
  );
}

export default App;
