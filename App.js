import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootsStack from './screens/RootsStack';
import {LogContextProvider} from './contexts/LogContext';

function App() {
  return (
    <NavigationContainer>
      <LogContextProvider>
        <RootsStack />
      </LogContextProvider>
    </NavigationContainer>
  );
}

export default App;
