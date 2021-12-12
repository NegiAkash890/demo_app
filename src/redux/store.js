import { createStore } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducers/rootReducer';

const persistConfig = {
  key:'store',
  storage: storage,
}

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  pReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const persistor = persistStore(store)

export default store;
