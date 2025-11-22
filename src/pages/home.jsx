import React, { useEffect, useState } from 'react';
import BibliotecaJuegos from '..documents/game traker/frontend/src/components/BibliotecaJuegos';
import FormularioJuego from '..documents/game traker/frontend/src/components/FormularioJuego';
import EstadisticasPersonales from '..documents/game traker/frontend/src/components/EstadisticasPersonales';
import { api } from '../api';

export default function Home(){
  const [games, setGames] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(()=>{
    api.get('/games').then(r => setGames(r.data)).catch(err => console.error(err));
  }, [refresh]);

  return (
    <div>
      <h2>Mi Biblioteca</h2>
      <FormularioJuego onSaved={()=> setRefresh(s => !s)} />
      <BibliotecaJuegos games={games} onChanged={()=> setRefresh(s => !s)} />
      <EstadisticasPersonales games={games} />
    </div>
  );
}
