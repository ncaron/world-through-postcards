import styled from 'styled-components';

const BuiltWithContainer = styled.div`
  width: 200px;
  margin: 50px auto;
`;

const BuiltWithList = styled.ul`
  margin-left: 40px;
  list-style-type: disc;
`;

const Container = styled.div``;

const Description = styled.div`
  margin-bottom: 50px;
  text-align: justify;

  @media (min-width: 768px) {
    width: 75%;
    margin: 0 auto 50px auto;
  }

  @media (min-width: 1000px) {
    width: 50%;
  }
`;

const Link = styled.a`
  color: red;
  text-decoration: underline;
`;

const ListItem = styled.li`
  padding: 7px 0;
`;

const Text = styled.div``;

export {
  BuiltWithList,
  BuiltWithContainer,
  Container,
  Description,
  Link,
  ListItem,
  Text
};
