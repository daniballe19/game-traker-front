import React from 'react';

export default function EstadisticasPersonales({ games = [] }){
  const total = games.length;
  const completed = games.filter(g => g.completed).length;
  const avgRating = total ? (games.reduce((s,g)=> s + (g.rating || 0), 0) / total).toFixed(2) : 0;
  const totalHours = games.reduce((s,g)=> s + (g.hoursPlayed || 0), 0);

  return (
    <div className="stats">
      <h3>Estadísticas</h3>
      <p>Total juegos: {total}</p>
      <p>Completados: {completed}</p>
      <p>Horas totales: {totalHours}</p>
      <p>Puntuación media: {avgRating}</p>
    </div>
  );
}
