import React from 'react';

export const SelectList = ({ title, items, manejadorCambio }) => {
  return (
    <div className="select-list">
      <br />
      <br />
      <label>{title}</label>
      <br />
      <br />
      <select onChange={manejadorCambio}>
        <option value="">Selecciona</option>
        {items.map(item => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};