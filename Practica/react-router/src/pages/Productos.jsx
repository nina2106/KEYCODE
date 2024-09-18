/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const Productos = ({ Productos }) => {
  return (
    <div>
      Productos
      <ul>
        {Productos.map((producto) => (
          <li key={producto.id}>
            <Link to={`/productos/${producto.id}`}>{producto.nombre} - $ {producto.precio}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};