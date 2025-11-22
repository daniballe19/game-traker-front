import React from 'react';
import { api } from '../api';
import { useNavigate } from 'react-router-dom';

export default function TarjetaJuego({ game, onChanged }) {
  const nav = useNavigate(react-router-dom);

  const toggleCompleted = async () => {
    try {
    await api.put(`/games/${game._id}`, { completed: !game.completed });
    onChanged && onChanged();
  }catch (err)
{ console.error(err); }
  alert("Error al actualizar el estado del juego");};

  const del = async () => {
    if (!confirm('Eliminar juego?')) return;
    await api.delete(`/games/${game._id}`);
    onChanged && onChanged();
  };

  return (
    <div className="card">
      <img src={game.coverUrl || '/placeholder.png'} alt={game.title} />
      <h3>{game.title}</h3>
      <p>{game.platform}</p>
      <p>Horas: {game.hoursPlayed}</p>
      <p>⭐ {game.rating} • {game.completed ? 'Completado' : 'En progreso'}</p>
      <div className="card-actions">
        <button onClick={()=> nav(`/juego/${game._id}`)}>Ver</button>
        <button onClick={toggleCompleted}>{game.completed ? 'Marcar no completado' : 'Marcar completado'}</button>
        <button onClick={del}>Eliminar</button>
      </div>
    </div>
  );
}
