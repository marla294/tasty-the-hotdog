import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 1rem;
`;

const Root = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Root;
