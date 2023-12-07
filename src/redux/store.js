import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { catalogReducer } from './catalog/CatalogSlice';

// import { filterReducer } from './filter/filterSlice';

// const persistConfig = {
//   key: 'catalog',
//   version: 1,
//   storage,
//   whitelist: ['isLiked'],
// };

// const persistedReducer = persistReducer(persistConfig, catalogReducer);

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    // filter: filterReducer,
  },
});

// export const persistor = persistStore(store);
