import { supabase } from "../../client";
import { GET_SHAWARMAS } from "../actionTypes/shawarma.actionType";
import { Fields } from "../../pages/CreateShawarma/CreateShawarma.interface";

export const getShawarmas = () => async (dispatch: any) => {
  const { data } = await supabase.from('shawarmas').select();

  dispatch({
    type: GET_SHAWARMAS,
    payload: data
  });
};

export const createShawarma = (fields: Fields) => async (dispatch: any) => {
  await supabase.from('shawarmas').insert([fields]).single();
  const { data } = await supabase.from('shawarmas').select();
  
  dispatch({
    type: GET_SHAWARMAS,
    payload: data
  });
};