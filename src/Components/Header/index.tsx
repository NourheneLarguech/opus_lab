import * as React from "react";
import styled from "styled-components";
import { UserContext } from "../../Context/UserListContext";
import { getUsersData, IUser } from "../../MockData/Users";

const Header: React.FunctionComponent = () => {
  const { remainingUsers, currentUser, showTable, start } =
    React.useContext(UserContext);

  const [showButton, setShowButton] = React.useState<boolean>(true);
  const [data, setdata] = React.useState<IUser[]>({} as IUser[]);

  const handleStart = () => {
    start(data);
    setShowButton(false);
  };
  React.useEffect(() => {
    getUsersData().then((data) => setdata(data));
  }, []);
  return (
    <>
      {!showTable && (
        <Container>
          <Counter>
            {remainingUsers && remainingUsers - 1}{" "}
            {remainingUsers && "remaining"}
          </Counter>
          <Display>
            {showButton ? (
              <Button onClick={handleStart}> Commencer </Button>
            ) : (
              <UserInfo>{currentUser?.Name}</UserInfo>
            )}
          </Display>
        </Container>
      )}
    </>
  );
};

export default Header;

const Container = styled.div`
  width: 60vw;
  border-radius: 10px;
  border: 3px;
  border-color: red;
  border-style: solid;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Counter = styled.div`
  display: flex;
  float: left;
`;

const Display = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserInfo = styled.div`
  margin: 1rem;
  padding: 1rem;
`;
const Button = styled.button`
  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;
  border-width: 0;
  color: white;
  background-color: red;
`;
