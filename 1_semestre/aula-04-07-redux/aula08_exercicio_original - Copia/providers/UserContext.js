import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
    const [name, setName] = useState(null);
    const [idade, setIdade] = useState(0);

    return (
        <UserContext.Provider value={{ name, setName, idade, setIdade }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;

export const useUser = () => useContext(UserContext);