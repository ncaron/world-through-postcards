import styled from 'styled-components';

const Container = styled.div``;

const RadioContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Text = styled.p``;

const TextContainer = styled.div`
  margin-bottom: 50px;
  text-align: justify;

  @media (min-width: 768px) {
    width: 75%;
    margin: 0 auto 50px auto;
  }

  @media (min-width: 1000px) {
    margin-bottom: 50px;
    width: 50%;
  }
`;

export {Container, RadioContainer, Text, TextContainer};
