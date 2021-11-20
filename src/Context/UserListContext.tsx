import * as React from "react";
import { IUser, userState } from "../MockData/Users";

export interface IUserListContext {
  remainingUsers?: number;
  currentUser?: IUser;
  updatedUsersList?: IUser[];
  showTable: boolean;
  start: (data: IUser[]) => void;
  setUserState: (state: userState) => void;
}

export const UserContext = React.createContext<IUserListContext>(
  {} as IUserListContext
);

const UserContextProvider: React.FunctionComponent = ({ children }) => {
  const [_remainingUsers, setRemainingUsers] = React.useState<number>();
  const [_currentUser, setCurrentUser] = React.useState<IUser>();
  const [_usersList, setUsersList] = React.useState<IUser[]>();
  const [_updatedUsersList, setUpdatedUsersList] = React.useState<IUser[]>(
    [] as IUser[]
  );
  const [_showTable, setShowTable] = React.useState<boolean>(false);

  const Start = (data: IUser[]) => {
    setUsersList(data);
    setRemainingUsers(data.length);
    setCurrentUser(data[0]);
  };

  const SetUserState = (state: userState) => {
    if (_usersList && _currentUser) {
      const UserIndex = _usersList.findIndex(
        (user) => user.UserID === _currentUser?.UserID
      );
      _usersList[UserIndex].State = state;
      setUpdatedUsersList((oldArray) => [...oldArray, _usersList[UserIndex]]);
      const remaining = _usersList.filter((user) => user.State === undefined);
      console.log(remaining);
      setRemainingUsers(remaining.length);
      if (remaining.length === 0) {
        setShowTable(true);
      } else {
        setCurrentUser(remaining[0]);
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        remainingUsers: _remainingUsers,
        currentUser: _currentUser,
        updatedUsersList: _updatedUsersList,
        showTable: _showTable,
        start: Start,
        setUserState: SetUserState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
