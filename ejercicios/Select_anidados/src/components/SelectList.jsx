export const SelectList = ({ title, items, manejadorCambio }) => (
  <div>
    <label>{title}:</label>
    <select onChange={manejadorCambio}>
      <option value="">Seleccione</option>
      {items.map(item => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  </div>
);