import React, { useState } from 'react';
import { api } from '../api';

export default function FormularioJuego({ onSaved }){
  const [form, setForm] = useState({ title:'', coverUrl:'', platform:'', description:'', hoursPlayed:0, rating:0 });

  const handle = e => setForm({...form, [e.target.name]: e.target.value});
  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/games', {...form, hoursPlayed: Number(form.hoursPlayed), rating: Number(form.rating)});
      setForm({ title:'', coverUrl:'', platform:'', description:'', hoursPlayed:0, rating:0 });
      onSaved && onSaved();
    } catch (err) {
      alert('Error guardando juego');
    }
  };

  return (
    <form onSubmit={submit} className="form">
      <input name="title" value={form.title} onChange={handle} placeholder="Título" required />
      <input name="platform" value={form.platform} onChange={handle} placeholder="Plataforma" />
      <input name="coverUrl" value={form.coverUrl} onChange={handle} placeholder="URL portada" />
      <input name="hoursPlayed" value={form.hoursPlayed} onChange={handle} placeholder="Horas jugadas" type="number" min="0" />
      <input name="rating" value={form.rating} onChange={handle} placeholder="Puntuación 0-5" type="number" min="0" max="5" step="0.5" />
      <textarea name="description" value={form.description} onChange={handle} placeholder="Descripción" />
      <button>Agregar juego</button>
    </form>
  );
}
