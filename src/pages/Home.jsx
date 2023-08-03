import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import ErrorBoundary from "../components/ErrorBoundary";
import { Videos } from "../components/Videos";

const Container = styled.div`
  display: grid;
`;

const Home = () => {
  return (
    <Container>
      <Videos>
        <h1>Videos</h1>
      </Videos>
      <ErrorBoundary>
        <Card />
      </ErrorBoundary>
    </Container>
  );
};

export default Home;
