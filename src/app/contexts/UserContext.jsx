import { createContext } from 'node:vm';
import React from 'react';

export const UserContext = createContext(null);

const userProvider = ({ children }) => {
  return <UserContext.Provider value="Tomato">{children}</UserContext.Provider>;
};

export default userProvider;
