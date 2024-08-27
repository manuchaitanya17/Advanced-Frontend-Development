import React from "react";
import UserContext from "./UserContext";

//Step-4: Create a Provider Component:
const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null);
    return(

        /* Step-5: Wrap the children with the Provider Component using Context.Provider and will pass the user Object in the
        Context Object, where user will be initialised with null and setUser with a reference to change it: */
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider