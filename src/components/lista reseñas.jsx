import React from 'react';
import { api } from '../api';

export default function ListaReseñas({ reviews = [], onChanged }) {
  const remove = async (id) => {
    if (!confirm('Eliminar reseña?')) return;
    await api.delete(`/reviews/${id}`);
    onChanged && onChanged();
  };

  return (
    <div>
      <h3>Reseñas</h3>
      {reviews.length === 0 && <p>No hay reseñas.</p>}
      {reviews.map(r => (
        <div key={r._id} className="review">
          <strong>{r.author}</strong> — ⭐ {r.rating}
          <p>{r.content}</p>
          <button onClick={()=> remove(r._id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}
