import { useState, useEffect } from "react";
import { SelectList } from "./SelectList";

export const Selects = () => {
  const TOKEN = "39afb11d-2dd4-4500-bcd3-01c7ce6a1b18";

  const [departamentos, setDepartamentos] = useState("");
  const [municipios, setMunicipios] = useState("");
  const [ciudades, setCiudades] = useState("");

  // Fetch municipalities when department changes
  useEffect(() => {
    if (departamentos) {
      fetch(`https://api-colombia.com/api/v1/Department/${departamentos}/cities`, {
        headers: {
          'Authorization': `Bearer ${TOKEN}`
        }
      })
      .then(response => response.json())
      .then(data => {
        // Asumiendo que data es una lista de municipios
        setMunicipios(data);
      })
      .catch(error => console.error("Error fetching municipalities:", error));
    } else {
      setMunicipios(""); // Limpia los municipios si no hay departamento seleccionado
    }
  }, [departamentos]);

  // Fetch cities when municipality changes
  useEffect(() => {
    if (municipios) {
      fetch(`https://api-colombia.com/api/v1/City/${municipios}`, {
        headers: {
          'Authorization': `Bearer ${TOKEN}`
        }
      })
      .then(response => response.json())
      .then(data => {
        // Asumiendo que data es una lista de ciudades
        setCiudades(data);
      })
      .catch(error => console.error("Error fetching cities:", error));
    } else {
      setCiudades(""); // Limpia las ciudades si no hay municipio seleccionado
    }
  }, [municipios]);

  return (
    <div className="container">
      <SelectList
        title="Departamentos"
        url="https://api-colombia.com/api/v1/Department"
        manejadorCambio={(event) => setDepartamentos(event.target.value)}
      />
      <SelectList
        title="Municipios"
        url={`https://api-colombia.com/api/v1/Department/${departamentos}/cities`}
        manejadorCambio={(event) => setMunicipios(event.target.value)}
      />
      <SelectList
        title="Ciudades"
        url={`https://api-colombia.com/api/v1/City/${municipios}`}
        manejadorCambio={(event) => setCiudades(event.target.value)}
      />
    </div>
  );
};
