import React, {
  useState,
  useContext,
  createContext,
  useReducer,
  useEffect,
} from 'react';
import { Alert, View, TextInput, StyleSheet, Text, Button } from 'react-native';
import {
  useUsersState,
  useUsersDispatch,
  getUsers,
  getUser,
} from './UserContext';
import User from './User';
import axios from 'axios';

function Users() {
  const [userId, setUserId] = useState(null);
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  const { data: users, loading, error } = state.users;
  const fetchData = () => {
    getUsers(dispatch);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <Text>로딩중..</Text>;
  if (error) return <Text>에러가 발생했습니다</Text>;
  if (!users)
    return (
      <Button
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        onPress={() => {
          fetchData();
        }}
        title="fetch"
      />
    );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {users.map((user) => (
        <Text
          key={user.id}
          onPress={() => {
            setUserId(user.id);
          }}
        >
          {user.username} ({user.name})
        </Text>
      ))}
      <Button onPress={fetchData} title="fetch" />
      {userId && <User id={userId} />}
    </View>
  );
}

export default Users;
