import { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]); // Estado para almacenar la lista de usuarios
  const [loading, setLoading] = useState(false); // Estado para manejar el estado de carga
  const [error, setError] = useState(null); // Estado para manejar errores

  // Función para obtener usuarios de la API
  const obtenerUsuarios = async () => {
    setLoading(true); // Iniciar la carga
    setError(null); // Limpiar cualquier error previo

    try {
      const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!respuesta.ok) {
        throw new Error("Error en la respuesta de la API");
      }
      const data = await respuesta.json(); // Esperar la conversión a JSON
      setUsers(data); // Guardar la lista de usuarios en el estado
    } catch (error) {
      setError(error.message); // Guardar el error en el estado
      console.log('Error:', error);
    } finally {
      setLoading(false); // Finalizar la carga
    }
  };

  return (
    <>
      <h1>Programación Asincrona</h1>
      <p>Promesas</p>
      <p>En consola</p>
      <hr />
      <p>Async / Await</p>
      <button onClick={obtenerUsuarios}>
        Consumir API
      </button>

      {loading && <p>Cargando...</p>} {/* Mensaje de carga */}
      {error && <p>Error: {error}</p>} {/* Mostrar error si hay */}

      <h2>Lista de usuarios</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li> // Mostrar el nombre de cada usuario
          ))}
        </ul>
      ) : (
        <p>No hay usuarios disponibles.</p>
      )}
    </>
  );
}

export default App;
