import styled from '@emotion/styled';

export const Wrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100vh;
  width: 100vw;

  & * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
`;
