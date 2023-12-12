import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 1rem;
`;

const RootParent = styled.div`
  height: auto;
`;

const Root = () => {
  return (
    <RootParent>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </RootParent>
  );
};

export default Root;
