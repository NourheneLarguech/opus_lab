import * as React from "react";
import styled from "styled-components";
import { UserContext } from "../../Context/UserListContext";

const Buttons: React.FunctionComponent = () => {
  const { showTable, setUserState } = React.useContext(UserContext);
  return (
    <Container>
      {!showTable && (
        <div>
          <Button color={"green"} onClick={() => setUserState("PRESENT")}>
            Present
          </Button>
          <Button color={"orange"} onClick={() => setUserState("EXCUSED")}>
            Excused
          </Button>
          <Button color={"red"} onClick={() => setUserState("ABSCENT")}>
            Abscent
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Buttons;

const Container = styled.div`
  margin: 2rem;
`;

const Button = styled.button<{ color: string }>`
  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;
  border-width: 0;
  background-color: ${(props) => props.color};
`;
