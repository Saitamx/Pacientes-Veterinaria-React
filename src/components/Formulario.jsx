import React, { useState } from "react";
import { v4 as uuid } from "uuid"; // nueva sintaxis
import PropTypes from 'prop-types';

const Formulario = ({ crearCita }) => {
  // Crear State de Citas
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, setError] = useState(false);

  // Función que se ejecuta cada vez que el usuario escribe en el input
  const actualizarState = (e) => {
    setCita({
      // copia de la cita
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  // Extraer valores, para evitar cita.mascota, cita.propietario, etc
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // Cuando el usuario envia el formulario presionando "agregar cita"
  const submitCita = (e) => {
    e.preventDefault();

    // Validación, trim para borrar espacios en blanco
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);
      return;
    }

    // Eliminar el mensaje previo
    setError(false);

    // Asignar un ID
    cita.id = uuid();

    // Crear Cita (ponerla en el state principal)
    crearCita(cita);

    // Reiniciar el form
    setCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <>
      <h1>Crear Cita</h1>

      {error ? (
        <p className="alerta-error">Todos los campos son obligagorios</p>
      ) : null}
      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          autoComplete="off"
          onChange={actualizarState}
          value={mascota}
        />

        <label>Nombre del Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño de la Mascota"
          autoComplete="off"
          onChange={actualizarState}
          value={propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label>Síntomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
};

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}

export default Formulario;
