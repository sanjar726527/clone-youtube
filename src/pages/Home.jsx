import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  display: grid;
`;

const Home = () => {
  return (
    <Container>
      <Card />
    </Container>
  );
};

export default Home;
