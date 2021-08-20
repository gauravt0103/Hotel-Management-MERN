import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


import { roomsAllReducer, roomDetailsReducer, roomBookDetailReducer } from './reducers/roomsReducer.js'
import {
      userLoginReducer,
      userDetailsReducer,
      userRegisterReducer,
} from './reducers/userReducer'

import { restAllReducer } from './reducers/restaurentsReducer'





const reducer = combineReducers({
      roomsAll: roomsAllReducer,
      roomDetails: roomDetailsReducer,
      userLogin: userLoginReducer,
      userDetails: userDetailsReducer,
      userRegister: userRegisterReducer,
      roomBookdetails: roomBookDetailReducer,
      restaurantsAll: restAllReducer,
    
})


const middleware = [thunk]

const store = createStore(
      reducer,
      composeWithDevTools(applyMiddleware(...middleware))
)

export default store