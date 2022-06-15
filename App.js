import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootsStack from './screens/RootsStack';
import {LogContextProvider} from './contexts/LogContext';
import {SearchContextProvider} from './contexts/SearchContext';

function App() {
  return (
    <NavigationContainer>
      <SearchContextProvider>
        <LogContextProvider>
          <RootsStack />
        </LogContextProvider>
      </SearchContextProvider>
    </NavigationContainer>
  );
}

export default App;
