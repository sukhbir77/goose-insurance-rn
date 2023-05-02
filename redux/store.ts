import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import productReducer from './slicers/productSlicer';
import userReducer from './slicers/userSlicer';

// Configuration To Persist the REDUX State using Asyncstorage.
const persistConfig = {
    key: "root",
    version: 1,
    storage: AsyncStorage
}

// Combing Product and User Reducer.
const rootReducer = combineReducers({
    userData: userReducer,
    productsData: productReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Default Store to be used in the APP.
export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;