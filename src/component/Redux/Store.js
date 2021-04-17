import { createStore,combineReducers,applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 



import formReducer from './Reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist:['formReducer']
}
const rootReducer = combineReducers({
    formReducer: formReducer
  })
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const  store = createStore(persistedReducer)
export const  persistor = persistStore(store)
export  default {store, persistor}