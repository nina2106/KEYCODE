import { useState, useEffect } from "react";
import { SelectList } from "./SelectList";

export const Selects = () => {
  const TOKEN = "39afb11d-2dd4-4500-bcd3-01c7ce6a1b18";
  
  // Estados para almacenar los datos de departamentos, municipios y ciudades
  const [departamentos, setDepartamentos] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [ciudades, setCiudades] = useState();
  // console.log(departamentos)
  // console.log(municipios)
 
  // Estados para almacenar las selecciones actuales
  const [selectedDepartamento, setSelectedDepartamento] = useState("");
  const [selectedMunicipio, setSelectedMunicipio] = useState("");

  // Obtener departamentos al cargar el componente
  useEffect(() => {
    fetch("https://api-colombia.com/api/v1/Department", {
      headers: {
        'Authorization': `Bearer ${TOKEN}`
      }
    })
    .then(response => response.json())
    .then(data => setDepartamentos(data || []))
    .catch(error => console.error("Error fetching departamentos:", error));
  }, [selectedDepartamento]);

  // Obtener municipios cuando se selecciona un departamento
  useEffect(() => {
    if (selectedDepartamento) {
      fetch(`https://api-colombia.com/api/v1/Department/${selectedDepartamento}/cities`, {
        headers: {
          'Authorization': `Bearer ${TOKEN}`
        }
      })
      .then(response => response.json())
      .then(data => setMunicipios(data || []))
      .catch(error => console.error("Error fetching municipios:", error));
    } else {
      setMunicipios([]);
    }
  }, [selectedDepartamento]);
  console.log(selectedDepartamento)
  console.log(selectedMunicipio)

  //Obtener ciudades cuando se selecciona un municipio
  useEffect(() => {
    if (selectedMunicipio) {
      fetch(`https://api-colombia.com/api/v1/City/${selectedMunicipio}`, {
        headers: {
          'Authorization': `Bearer ${TOKEN}`
        }
      })
      .then(response => response.json())
      .then(data => setCiudades(data))
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

      {selectedMunicipio && (
        <div className="ciudad-card">
          <h2>Información de la Ciudad</h2>
          <p><strong>Código Postal:</strong> {ciudades.postalCode}</p>
          <p><strong>Área:</strong> {ciudades.area} km²</p>
          <p><strong>Población:</strong> {ciudades.population}</p>
          <p><strong>Latitud:</strong> {ciudades.latitude}</p>
          <p><strong>Longitud:</strong> {ciudades.longitude}</p>
          <p><strong>Altitud:</strong> {ciudades.altitude} m</p>
          <p><strong>Clima:</strong> {ciudades.climate}</p>
        </div>
      )}
    </div>
  );
};
