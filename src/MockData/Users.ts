export type userState = "ABSCENT" | "PRESENT" | "EXCUSED";
export interface IUser {
  UserID: number;
  Name: string;
  State?: userState;
}

const UserListData: IUser[] = [
  { UserID: 0, Name: "Franquelin Benjamin" },
  { UserID: 1, Name: "Dunord Caroline" },
  { UserID: 2, Name: "Reacher Jack" },
  { UserID: 3, Name: "Wilson Wade" },
  { UserID: 4, Name: "Pool Francis" },
  { UserID: 5, Name: "Cesar Alex" },
  { UserID: 6, Name: "Ten Ben" },
  { UserID: 7, Name: "Guetta David" },
  { UserID: 8, Name: "Kennedy John" },
  { UserID: 9, Name: "Robert Julia" },
];

export const getUsersData = async (): Promise<IUser[]> => {
  return UserListData;
};
