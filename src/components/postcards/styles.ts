import styled from 'styled-components';

const CardContainer = styled.div`
  & + & {
    border-top: 1px solid black;
    margin-top: 15px;
    padding-top: 15px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
`;

const City = styled.p`
  font-size: 18px;
`;

const Close = styled.div`
  cursor: pointer;
  height: 20px;
  opacity: 0.3;
  position: absolute;
  right: 16px;
  top: 8px;
  width: 20px;
  z-index: 9999;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    background-color: #333;
    content: ' ';
    height: 20px;
    left: 15px;
    position: absolute;
    width: 2px;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
`;

const ImageContainer = styled.div`
  & + & {
    margin-top: 16px;
  }

  @media (min-width: 1000px) {
    & + & {
      margin-left: 16px;
      margin-top: 0;
    }
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

const Link = styled.a`
  color: red;
  display: block;
  margin-top: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

const Modal = styled.div`
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  transform: translate(-50%, -50%);
  z-index: 9999;

  @media (min-width: 500px) {
    height: 400px;
    width: 400px;
  }

  @media (min-width: 600px) {
    height: 500px;
    width: 500px;
  }

  @media (min-width: 900px) {
    height: 800px;
    width: 800px;
  }
`;

const ViewMap = styled.div`
  cursor: pointer;
  font-size: 14px;
  margin-left: 10px;
  opacity: 0.5;
  text-decoration: underline;

  &:hover {
    opacity: 1;
  }
`;

export {
  CardContainer,
  CardHeader,
  City,
  Close,
  Container,
  Image,
  ImageContainer,
  ImagesContainer,
  Link,
  Modal,
  ViewMap
};
