import { createContext, useState } from 'react';

// Define the type for the context value
interface UserContextValue {
  someValue: string;
  setsomeValue: (value: string) => void;
}

// Create the initial context value
const initialUserContextValue: UserContextValue = {
  someValue: "nothing",
  setsomeValue: () => {},
};

// Create the context
export const UserContext = createContext(initialUserContextValue);


// Create the provider component
const UserContextProvider = (props:any) => {
    const [someValue, setsomeValue] = useState("")
   



const usercontextValue =
  {
    someValue,
    setsomeValue,

  };

  return (
    <UserContext.Provider value={usercontextValue}>{props.children}</UserContext.Provider>

    )
}

export default UserContextProvider