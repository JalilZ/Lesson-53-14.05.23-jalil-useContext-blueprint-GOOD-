import React, { useContext, useEffect } from 'react';
import UserContextProvider from './user-context';
import { UserContext } from './user-context';

const First = () => {
  const { someValue, setsomeValue } = useContext(UserContext); // 'useContext' hook
  
  
  


  return (
    <div style={{backgroundColor:'green'}}>
      
        <button onClick={() => setsomeValue('you clicked first')}>First</button>
        {someValue}
    </div>
  );
}

export default First;
