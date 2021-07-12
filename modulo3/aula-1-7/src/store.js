import React from 'react'
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import Reducers from './reducers'

const persistConfing = {
   key: 'root',
   storage,
   whitelist: ['usuario']
}

const pReducer = persistReducer(persistConfing, Reducers)

const store = createStore(pReducer)
const persistor = persistStore(store)

export {store, persistor}