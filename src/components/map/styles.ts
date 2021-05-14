import styled from 'styled-components';

const Container = styled.div`
  height: 200px;
  width: 100%;

  @media (min-width: 600px) {
    height: 500px;
  }

  @media (min-width: 768px) {
    height: 700px;
  }
`;

export {Container};
