import {supabase} from "../../client";
import store from 'store';
import {GET_USER, SIGN_IN} from "../actionTypes/auth.actionTypes";

// TODO change any type for user
export const signUp = (sentUser: any) => async () => {
  const {user}: any = await supabase.auth.signUp({
    email: sentUser.email,
    password: sentUser.password
  }); // TODO take ID[auth_id] and email[email]

  const data = {
    name: sentUser.name,
    auth_id: user.id,
    email: user.email,
    role: sentUser.role
  };

  await supabase.from('profiles').insert([data]).single();
};

// TODO change any type of data
export const signIn = (sentData: { email: string, password: string }, history: any) => async (dispatch: any) => {
  const _data: any = await supabase.auth.signIn(sentData);
  const {user} = _data;

  const {data}: any = await supabase.from('profiles').select().eq('auth_id', user.id).single();

  console.log(user);

  dispatch({
    type: SIGN_IN,
    payload: {
      user: data,
      access_token: _data.data.access_token
    }
  });

  history.push('/');
};

export const getUser = (id: string) => async (dispatch: any) => {
  console.log(id);
  const {data}: any = await supabase.from('profiles').select().eq('auth_id', id).single();
  store.set('user', data);
  dispatch({
    type: GET_USER,
    payload: data
  });
}