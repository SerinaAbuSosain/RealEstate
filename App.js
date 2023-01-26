import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AppNavigator from './app/Navigation';
import {Provider} from 'react-redux';
import store from './app/store';
import {ModalPortal} from 'react-native-modals';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <Provider store={store}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          hidden={false}
        />
        <View style={{height: '100%'}}>
          <AppNavigator />
        </View>
        <ModalPortal />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
