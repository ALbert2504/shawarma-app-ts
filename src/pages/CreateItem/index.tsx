import {FC, useEffect} from 'react';
import CreateShawarma from "../../components/CreateItem/CreateShawarma";
import RequireAuthentication from "../../HOC/IsAuthenticated";
import {useDispatch} from "react-redux";
import store from "store";
import {getUser} from "../../store/actions/auth.action";

export const CreateItem :FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if(store.get('supabase.auth.token')) {
      const auth_id = store.get('supabase.auth.token').currentSession.user.id;
      dispatch(getUser(auth_id));
    }
  }, []);

  return (
    <div>
      <CreateShawarma />
    </div>
  );
};

export default RequireAuthentication(CreateItem);