import { useFetch } from "../hooks/useFetch";

export const SelectList = ({ manejadorCambio, title, url }) => {
  const key = `select-${title}`;
  const label = title.toUpperCase();

  const { data, error, loading } = useFetch(url);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Ha ocurrido un error: {error.message}</p>;
  if (!data || !Array.isArray(data)) return <p>No hay datos disponibles</p>;

  return (
    <div className="container-select">
      <label className="label-select" htmlFor={key}>
        {label}
      </label>
      <select name={key} id={key} onChange={manejadorCambio}>
        <option value="">Seleccione un {title}</option>
        {data.map((option) => (
          <option key={option.id} value={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};
