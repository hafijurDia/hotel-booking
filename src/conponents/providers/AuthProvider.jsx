import React, { createContext } from 'react';

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {

    const name = "Hafijur Rahma";

    const authInfo = {
        name,
    }
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};



export default AuthProvider;
