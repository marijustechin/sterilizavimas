export type TldapUser = {
  dn: string;
  displayName: string;
  objectGUID: Buffer;
};

export type TUser = {
  accessToken: string;
  refreshToken: string;
  user: {
    userId: string;
    username: string;
    displayName: string;
    role: string;
    division: string;
  };
};
