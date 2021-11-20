import * as React from "react";
import styled from "styled-components";
import { UserContext } from "../../Context/UserListContext";
import { userState } from "../../MockData/Users";

interface UserListProps {}

const UserList: React.FunctionComponent<UserListProps> = () => {
  const { updatedUsersList } = React.useContext(UserContext);
  const [filterState, setFilterState] = React.useState<userState | undefined>();

  return (
    <Container>
      <FilterContainer>
        <Button onClick={() => setFilterState(undefined)}>All</Button>
        <Button onClick={() => setFilterState("PRESENT")}>Present</Button>
        <Button onClick={() => setFilterState("EXCUSED")}>Excused</Button>
        <Button onClick={() => setFilterState("ABSCENT")}>Abscent</Button>
      </FilterContainer>
      <List>
        {updatedUsersList &&
          updatedUsersList
            .filter((user) => !filterState || user.State === filterState)
            .map((item, _key) => {
              return (
                <ListItem key={_key}>
                  <Cell>{item.Name}</Cell>
                  <Cell>{item.State}</Cell>
                </ListItem>
              );
            })}
      </List>
    </Container>
  );
};

export default UserList;

const Container = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const List = styled.ul`
  display: contents;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

const ListItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: gray;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const Cell = styled.h3`
  font-size: 20px;
  font-weight: 550;
  font-family: Arial, Helvetica, sans-serif;
`;

const FilterContainer = styled.div`
  align-self: center;
  margin-bottom: 1rem;
  border-radius: 25px;
  border-style: solid;
  border-width: 0;
`;

const Button = styled.button`
  padding: 1rem;
  border-width: 0;
  color: white;
  background-color: gray;
`;
