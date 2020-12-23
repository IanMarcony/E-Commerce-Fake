import {createStore,applyMiddleware} from "redux"
import createSagaMiddleware from "redux-saga"
import {persistStore,persistReducer} from "redux-persist"
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from "./ducks/rootReducer"
import rootSagas from "./ducks/rootSagas"

const persistConfig={
  key:"root",storage:AsyncStorage
}

const sagaMiddleware= createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = createStore(persistedReducer,applyMiddleware(sagaMiddleware))
const persistor = persistStore(store)

sagaMiddleware.run(rootSagas)

export  {store,persistor}