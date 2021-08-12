import { GET_SHAWARMAS } from "../actionTypes/shawarma.actionType";
import { ShawarmaState } from "../interfaces/shawarma.interface";

const initialState: ShawarmaState = {
  orders: []
}

const shawarmaReducer = (state: ShawarmaState = initialState, action: {type: string, payload: any}): ShawarmaState => {
  switch(action.type) {
    case GET_SHAWARMAS:
      return {
        ...state,
        orders: action.payload
      }
    default:
      return state;
  }
};

export default shawarmaReducer;