import { Button, Text, View } from 'react-native';
import React from 'react';
import styles from './Login.module.css';
import { useAppDispatch, useAppSelector } from '../../../../Redux';
import { validateUser } from '../../Thunks';
// import AuthSelectors from '../../AuthSelectors';
export const Login = ({ navigation }: {navigation: any}) => {
  const dispatch = useAppDispatch();
  const test = useAppSelector(state => state.auth);
  return (
    <View style={ styles.container }>
      <Text>Login page</Text>
      <Text>{ JSON.stringify(test.loading) }</Text>
      <Text>{ JSON.stringify(test.users) }</Text>

      <Button onPress={ () => navigation.navigate('dial') } title="navigate" />
      <Button
        onPress={ () => dispatch(validateUser({})) }
        title="test redux thunk"
      />
    </View>
  );
};
