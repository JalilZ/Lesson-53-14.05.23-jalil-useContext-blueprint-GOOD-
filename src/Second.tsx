import React, { useContext, useEffect } from 'react';
import UserContextProvider from './user-context';
import { UserContext } from './user-context';

const Second = () => {
  const { someValue, setsomeValue } = useContext(UserContext); // 'useContext' hook
  

  return (
    <div style={{backgroundColor:'cyan'}}>
      

      <button onClick={() => {setsomeValue('you clicked second')}}>Second</button>
      {someValue}

    </div>
  );
}

export default Second;
