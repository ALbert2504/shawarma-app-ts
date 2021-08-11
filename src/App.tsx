import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { supabase } from './client';
import CreateShawarma from './pages/CreateShawarma';
import ShawarmaList from './pages/ShawarmaList';
import { Fields } from './pages/CreateShawarma/CreateShawarma.interface';
import {Shawarma} from './pages/ShawarmaList/ShawarmaList.interface';

function App() {
  // TODO find solution for any
  const [shawarmas, setShawarmas] = useState<Shawarma[] | any>([]); 

  const fetchShawarmas = async () => {
    const { data } = await supabase.from('shawarmas').select();
    setShawarmas(data);
  };

  const createShawarma = async (e: any, fields: Fields) => {
    e.preventDefault();
    await supabase.from('shawarmas').insert([fields]).single();
    fetchShawarmas();
  }

  useEffect(() => {
    fetchShawarmas();
  }, []);

  console.log(shawarmas);

  return (
    <div className="App">
      <Container>
        <CreateShawarma createShawarma={createShawarma} />
        <hr />
        <ShawarmaList data={shawarmas} />
      </Container>
    </div>
  );
}

export default App;
