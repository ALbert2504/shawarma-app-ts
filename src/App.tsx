import {Route} from 'react-router-dom';
import CreateItem from "./pages/CreateItem";
import ShawarmaList from './pages/ShawarmaList';
import Auth from "./pages/Auth";
import Header from "./components/shared/Header";
import {useSelector} from "react-redux";
import {RootState} from "./store/rootReducer";

function App() {
  const {user = null} = useSelector((state: RootState) => state.auth);


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
