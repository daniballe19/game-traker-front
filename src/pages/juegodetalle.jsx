import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../api';
import ListaReseñas from '..documents/game traker/frontend/src/components/ListaReseñas';
import FormularioReseña from '..documents/game traker/frontend/src/components/FormularioReseña';

export default function JuegoDetalle(){
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [reviews, setReviews] = useState([]);

  const load = () => {
    api.get(`/games/${id}`).then(r => {
      setGame(r.data.game);
      setReviews(r.data.reviews);
    }).catch(console.error);
  };

  useEffect(()=> load(), [id]);

  if(!game) return <div>Cargando...</div>;
  return (
    <div>
      <h2>{game.title}</h2>
      <img src={game.coverUrl || '/placeholder.png'} alt={game.title} style={{maxWidth:200}} />
      <p>{game.description}</p>
      <p>Horas jugadas: {game.hoursPlayed}</p>
      <p>Puntuación: {game.rating}</p>
      <FormularioReseña gameId={id} onSaved={load} />
      <ListaReseñas reviews={reviews} onChanged={load} />
    </div>
  );
}
