import React from "react";
import Header from "./Components/Header";
import styled from "styled-components";
import UserContextProvider from "./Context/UserListContext";
import Buttons from "./Components/Buttons";
import UserList from "./Components/List";

function App() {
  return (
    <Container>
      <UserContextProvider>
        <Header />
        <Buttons />
        <UserList />
      </UserContextProvider>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
