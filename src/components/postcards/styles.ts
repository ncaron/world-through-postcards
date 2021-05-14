import styled from 'styled-components';

const CardContainer = styled.div`
  & + & {
    border-top: 1px solid black;
    margin-top: 15px;
    padding-top: 15px;
  }
`;

const City = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
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

export {
  CardContainer,
  City,
  Container,
  Image,
  ImageContainer,
  ImagesContainer,
  Link
};
