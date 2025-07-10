export type TUser = {
  userId: string | null;
  username: string | null;
  displayName: string | null;
  role: string | null;
  division: string | null;
};

export type TLoginAxiosResponse = {
  accessToken: string;
  user: TUser;
};
