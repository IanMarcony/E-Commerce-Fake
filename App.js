import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from "react-redux"
import {PersistGate} from "redux-persist/es/integration/react"
import NavigationApp from './src/navigation/NavigationApp';

import {store,persistor} from "./src/store"

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationApp/>
      </PersistGate>
    </Provider>
  );
}

