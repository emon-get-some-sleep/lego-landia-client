import React, { createContext } from 'react';

export const AuthContext = createContext('');
const AuthProvider = ({children}) => {

    const authBank = {

    }
    return (
        <AuthContext.Provider value={authBank}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;