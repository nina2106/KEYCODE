import { useState, useEffect } from "react";
import { SelectList } from "./SelectList";

export const Selects = () => {
  const TOKEN = "39afb11d-2dd4-4500-bcd3-01c7ce6a1b18";

  const [departamentos, setDepartamentos] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [ciudades, setCiudades] = useState([]);
  const [selectedDepartamento, setSelectedDepartamento] = useState("");
  const [selectedMunicipio, setSelectedMunicipio] = useState("");
  const [selectedCiudad, setSelectedCiudad] = useState(null);

  useEffect(() => {
    fetch("https://api-colombia.com/api/v1/Department", {
      headers: {
        'Authorization': `Bearer ${TOKEN}`
      }
    })
    .then(response => response.json())
    .then(data => {
      setDepartamentos(data || []);
    })
    .catch(error => console.error("Error fetching departamentos:", error));
  }, []);

  useEffect(() => {
    if (selectedDepartamento) {
      fetch(`https://api-colombia.com/api/v1/Department/${selectedDepartamento}/cities`, {
        headers: {
          'Authorization': `Bearer ${TOKEN}`
        }
      })
      .then(response => response.json())
      .then(data => {
        setMunicipios(data || []);
      })
      .catch(error => console.error("Error fetching municipios:", error));
    } else {
      setMunicipios([]);
    }
  }, [selectedDepartamento]);

  useEffect(() => {
    if (selectedMunicipio) {
      fetch(`https://api-colombia.com/api/v1/City/${selectedMunicipio}`, {
        headers: {
          'Authorization': `Bearer ${TOKEN}`
        }
      })
      .then(response => response.json())
      .then(data => {
        setCiudades(data || []);
      })
      .catch(error => console.error("Error fetching ciudades:", error));
    } else {
      setCiudades([]);
    }
  }, [selectedMunicipio]);

  return (
    <div className="container">
      <SelectList
        title="Departamentos"
        items={departamentos}
        manejadorCambio={(event) => setSelectedDepartamento(event.target.value)}
      />
      <SelectList
        title="Municipios"
        items={municipios}
        manejadorCambio={(event) => setSelectedMunicipio(event.target.value)}
      />
      <SelectList
        title="Ciudades"
        items={ciudades}
        manejadorCambio={(event) => setSelectedCiudad(event.target.value)}
      />
      {selectedCiudad && (
        <div className="ciudad-info">
          <h2>Información de la Ciudad</h2>
          <p><strong>Nombre:</strong> {selectedCiudad.name || "N/A"}</p>
          <p><strong>Código Postal:</strong> {selectedCiudad.zipCode || "N/A"}</p>
          <p><strong>Departamento:</strong> {selectedCiudad.department || "N/A"}</p>
          <p><strong>Municipio:</strong> {selectedCiudad.municipality || "N/A"}</p>
          <p><strong>Área:</strong> {selectedCiudad.area || "N/A"} km²</p>
          <p><strong>Población:</strong> {selectedCiudad.population || "N/A"}</p>
          <p><strong>Latitud:</strong> {selectedCiudad.latitude || "N/A"}</p>
          <p><strong>Longitud:</strong> {selectedCiudad.longitude || "N/A"}</p>
          <p><strong>Altitud:</strong> {selectedCiudad.altitude || "N/A"} m</p>
          <p><strong>Clima:</strong> {selectedCiudad.climate || "N/A"}</p>
        </div>
      )}
    </div>
  );
};
