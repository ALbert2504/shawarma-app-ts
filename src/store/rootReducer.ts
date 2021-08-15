import {combineReducers} from 'redux';
import shawarmaReducer from './reducers/shawarma.reducer';
import authReducer from "./reducers/auth.reducer";

const reducers = combineReducers({
  shawarma: shawarmaReducer,
  auth: authReducer
})

export type RootState = ReturnType<typeof reducers>

export default reducers;