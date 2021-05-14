import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled(NavLink)`
  align-items: center;
  border: 1px solid black;
  border-radius: 4px;
  color: black;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 2%;
  padding: 5px;
  text-align: center;
  width: 45%;

  &:hover {
    h2 {
      background-color: #eee;
      font-weight: bold;
    }
  }

  @media (min-width: 768px) {
    width: 29%;
  }

  @media (min-width: 1200px) {
    width: 21%;
  }
`;

const Flag = styled.img`
  margin: 15px 0;
  border-radius: 4px;
`;

const Title = styled.h2`
  border-bottom: 1px solid #ddd;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 5px;
  width: 100%;
`;

export {Container, Flag, Title};
