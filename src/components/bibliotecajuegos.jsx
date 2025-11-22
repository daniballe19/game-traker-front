import React from 'react';
import TarjetaJuego from '.documents/game traker/frontend/src/components/TarjetaJuego';

export default function BibliotecaJuegos({ games = [], onChanged }) {
  return (
    <div className="grid">
      {games.map(g => (
        <TarjetaJuego key={g._id} game={g} onChanged={onChanged} />
      ))}
      {games.length === 0 && <p>No hay juegos cargados aún.</p>}
    </div>
  );
}
