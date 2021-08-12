import {Route} from 'react-router-dom';
import CreateShawarma from './pages/CreateShawarma';
import ShawarmaList from './pages/ShawarmaList';
import Header from "./components/shared/Header";
import useLocalStorage from "./hooks/useLocalStorage";
import {useEffect} from "react";

function App() {
  const [name, setName] = useLocalStorage('name', null);

  useEffect(() => {
    if(!name) {
      const typedName = prompt('Ի՞նչ է Ձեր անունը։', '');
      setName(typedName);
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="py-4">
        <Route path="/" exact component={CreateShawarma} />
        <Route path="/shawarma-list" component={ShawarmaList} />
      </main>
    </div>
  );
}

export default App;
