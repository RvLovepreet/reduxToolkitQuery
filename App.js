/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {store} from './src/store/store';
import {Provider} from 'react-redux';
import Main from './src';
const App = () => {
  return (
    <>
      <SafeAreaView>
        <Provider store={store}>
          <View>
            <Main />
          </View>
        </Provider>
      </SafeAreaView>
    </>
  );
};
export default App;
