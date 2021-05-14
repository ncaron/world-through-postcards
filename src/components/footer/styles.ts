import styled, {keyframes} from 'styled-components';

const beat = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0.75);
  }
  100% {
    transform: scale(0);
  }
`;

const Container = styled.footer`
  border-top: 1px solid black;
  margin-top: 20px;
  text-align: center;
`;

const Heart = styled.i`
  animation: ${beat} 1s infinite ease-in-out;
  color: red;
  font-size: 40px;
  vertical-align: middle;
`;

const Link = styled.a`
  color: black;
  margin: 0 25px;
  text-decoration: underline;

  &.name {
    margin: 0;
  }
`;

const Social = styled.i`
  font-size: 30px;

  &.fa-instagram:hover {
    color: #f92c01;
  }
  &.fa-github:hover {
    color: #582879;
  }
  &.fa-linkedin:hover {
    color: #0274b3;
  }
`;

const Text = styled.p`
  padding: 10px 0;
`;

export {Container, Heart, Link, Social, Text};
