import { configureStore } from '@reduxjs/toolkit';
import reducer from './contacts/reduser';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// import storage from 'redux-persist/lib/storage';
// import reduser from './contacts/reduser';

// const PersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// const persistedContactsReducer = persistReducer(
//     PersistConfig,
//     reduser
// );

export const store = configureStore({
  reducer: {
    contacts: reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export let persistor = persistStore(store);

export default store;