import React, { useContext } from 'react';
import './App.css';
import UserContextProvider, { UserContext } from './user-context';
import First from './First';
import Second from './Second';

const App = () => {

  // const { someValue, setsomeValue } = useContext(UserContext); // 'useContext' hook
  const someValue = 'in APP (where we use <UserContextProvider>, we dont useContext again, we can just override these values, but we we do want to use the global someValue, then refer to the hashed code here'
  return (
    <div className="App">
      <UserContextProvider>

        Main App
        <First />
        <Second />
        
        {/* someValue below will not be updated because we are inside UserContextProvider,
        if we want to control {someValue} here then replace this return block with return <AppContent/> and have the app code inside AppContent */}
        APP: {someValue} 
      </UserContextProvider>
    </div>
  );
}

// function AppContent() {
//   const { someValue } = useContext(UserContext); // 'useContext' hook

//   return (
//     <div>
//       Main App
//       <First />
//       <Second />
//       APP: {someValue}
//     </div>
//   );
// }

export default App;
