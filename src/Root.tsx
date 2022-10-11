import 'react-native-gesture-handler';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import App from './App';
import i18n from './I18n/i18n.config';
import { NavigationContainer } from '@react-navigation/native';

const Root = () => {
  return (
    <Provider store={ store }>
      <I18nextProvider i18n={ i18n }>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </I18nextProvider>
    </Provider>
  );
};

export default Root;
