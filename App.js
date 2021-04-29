import React from 'react';
import { View, Text } from 'react-native';

import Users from './src/Users';
import { UsersProvider } from './src/UserContext';

function App() {
  return (
    <UsersProvider>
      <Users />
    </UsersProvider>
  );
}

export default App;
