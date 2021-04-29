import React, { useEffect } from 'react';
import { useUsersState, useUsersDispatch, getUser } from './UserContext';
import { Alert, View, TextInput, StyleSheet, Text, Button } from 'react-native';

function User({ id }) {
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  useEffect(() => {
    getUser(dispatch, id);
  }, [dispatch, id]);

  const { data: user, loading, error } = state.user;

  if (loading) return <Text>로딩중..</Text>;
  if (error) return <Text>에러가 발생했습니다</Text>;
  if (!user) return null;
  return (
    <View>
      <Text>{user.username}</Text>
      <Text>Email: {user.email}</Text>
    </View>
  );
}

export default User;
