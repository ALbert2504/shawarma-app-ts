import { supabase } from "../../client";
import { GET_SHAWARMAS } from "../actionTypes/shawarma.actionType";
import store from 'store';
import { Fields } from "../../components/CreateItem/CreateShawarma/CreateShawarma.interface";

export const getShawarmas = () => async (dispatch: any, getState: any) => {
  const user = store.get('user') ?? getState().auth.user;
  let _data: any;

  if(user.role === 'organizer') {
    const { data } = await supabase.from('shawarmas').select();
    _data = data;
  } else {
    const { data } = await supabase.from('shawarmas').select().eq('user_id', user.id);
    _data = data;
  }

  dispatch({
    type: GET_SHAWARMAS,
    payload: _data
  });
};

export const createShawarma = (fields: Fields) => async (dispatch: any) => {
  await supabase.from('shawarmas').insert([fields]).single();
  const { data } = await supabase.from('shawarmas').select();

  alert('Ձեր պատվերը հաջողությամբ գրանցված է։')
  
  dispatch({
    type: GET_SHAWARMAS,
    payload: data
  });
};