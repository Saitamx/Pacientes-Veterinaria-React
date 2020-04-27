import React, { useState, useEffect } from "react";
import "./index.css";
import Formulario from "./components/Formulario.jsx";
import Cita from "./components/Cita.jsx";
function App() {
  // Citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem("arrayCitas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  // Arreglo de citas
  const [arrayCitas, setArrayCitas] = useState(citasIniciales);

  // useEffect para realizar operaciones cuando el state cambia
  useEffect(() => {
    // redeclaramos para evitar el warning de dependencia
    let citasIniciales = JSON.parse(localStorage.getItem("arrayCitas"));

    if (citasIniciales) {
      localStorage.setItem("arrayCitas", JSON.stringify(arrayCitas));
    } else {
      localStorage.setItem("arrayCitas", JSON.stringify([]));
    }
  }, [arrayCitas]); // dependencias

  // Funcion que tome las citas actuales y agregue la nueva
  const crearCita = (cita) => {
    setArrayCitas([...arrayCitas, cita]);
  };

  // Funcion que elimina una cita por su id
  const eliminarCita = (id) => {
    const nuevasCitas = arrayCitas.filter((cita) => cita.id !== id);
    setArrayCitas(nuevasCitas);
  };

  // mensaje condicional
  const titulo =
    arrayCitas.length === 0 ? "No hay citas" : "Administra tus citas";

  return (
    <>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {arrayCitas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
