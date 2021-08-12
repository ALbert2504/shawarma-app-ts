import {combineReducers} from 'redux';
import shawarmaReducer from './reducers/shawarma.reducer';

const reducers = combineReducers({
  shawarma: shawarmaReducer
})

export type RootState = ReturnType<typeof reducers>

export default reducers;