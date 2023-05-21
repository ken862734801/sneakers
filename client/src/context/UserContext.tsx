import React, { createContext, useEffect, useState } from 'react';

import { UserInformation } from '../components/common/types';

interface UserContextProps {
  userInformation: UserInformation | undefined;
  setUserInformation: (userInformation: UserInformation | undefined) => void;
}

export const UserContext = createContext<UserContextProps>({
  userInformation: undefined,
  setUserInformation: () => {},
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userInformation, setUserInformation] = useState<UserInformation | undefined>(() => {
    // Retrieve user information from localStorage on initial render
    const storedUserInformation = localStorage.getItem('userInformation');
    if (storedUserInformation) {
      return JSON.parse(storedUserInformation);
    }
    return undefined;
  });

  // Update localStorage whenever userInformation changes
  useEffect(() => {
    if (userInformation) {
      localStorage.setItem('userInformation', JSON.stringify(userInformation));
    } else {
      localStorage.removeItem('userInformation');
    }
  }, [userInformation]);

  return (
    <UserContext.Provider value={{ userInformation, setUserInformation }}>
      {children}
    </UserContext.Provider>
  );
};