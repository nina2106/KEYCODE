import { useState, useEffect } from "react";

const User = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const obtenerUsuarios = async () => {
    try {
      const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!respuesta.ok) {
        throw new Error(`Error en la API: ${respuesta.status}`);
      }
      const data = await respuesta.json();
      setUsuarios(data);
    } catch (error) {
      setError(error.message);
      console.error("Hubo un error al obtener los usuarios:", error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  if (cargando) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Lista de usuarios</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;
