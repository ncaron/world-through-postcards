import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  border-left: 1px solid black;
  display: flex;
  flex: 1;
  flex-direction: row;

  @media (min-width: 768px) {
    margin-left: 0;
    border-left: none;
  }
`;

const Link = styled(NavLink)`
  color: black;
  flex: 1;
  line-height: 30px;
  padding: 0 16px;
  text-align: center;

  & + & {
    border-top: 1px solid black;
  }

  &:hover {
    background-color: #f7f7f7;
  }

  &.active {
    background-color: #eee;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    line-height: 50px;

    & + & {
      border-top: none;
      border-left: 1px solid black;
    }
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export {Container, Link, LinkContainer};
