import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Container = styled.header`
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const Link = styled(NavLink)`
  color: black;
`;

const Title = styled.h1`
  flex: 1;
  font-size: 24px;
  margin-right: 16px;
  text-transform: uppercase;
  word-spacing: 100vw;

  @media (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
    margin-right: 0;
    text-align: center;
    word-spacing: 0;
  }
`;

export {Container, Link, Title};
