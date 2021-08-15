import {stateType} from "../interfaces/auth.interface";
import {SIGN_IN, GET_USER} from "../actionTypes/auth.actionTypes";

const initialState = {
  user: null,
  access_token: null
};


const authReducer = (state: stateType = initialState, action: any): any => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: action.payload.user,
        access_token: action.payload.access_token
      }
    case GET_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}

export default authReducer;