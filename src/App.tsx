import {Route} from 'react-router-dom';
import CreateItem from "./pages/CreateItem";
import ShawarmaList from './pages/ShawarmaList';
import Auth from "./pages/Auth";
import Header from "./components/shared/Header";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store/rootReducer";
import {useEffect} from "react";
import store from "store";
import {getUser} from "./store/actions/auth.action";

function App() {
  const dispatch = useDispatch();
  const {user = null} = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if(store.get('supabase.auth.token')) {
      const auth_id = store.get('supabase.auth.token').currentSession.user.id;
      dispatch(getUser(auth_id));
    }
  }, []);


  return (
    <div className="App">
      {user && <Header/>}
      <main className="py-4">
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={CreateItem} />
        <Route path="/shawarma-list" component={ShawarmaList} />
      </main>
    </div>
  );
}

export default App;
