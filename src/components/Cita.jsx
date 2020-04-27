import React from "react";
import PropTypes from 'prop-types';

const Cita = ({ cita, eliminarCita }) => {
  const {id, mascota, dueño, fecha, hora, sintoma } = cita;
  return (
    <div className="cita">
      <p>Mascota : <span>{mascota}</span></p>
      <p>Dueño : <span>{dueño}</span></p>
      <p>Fecha : <span>{fecha}</span></p>
      <p>Hora : <span>{hora}</span></p>
      <p>Sintomas : <span>{sintoma}</span></p>      

      <button
        className="button eliminar u-full-width"
        onClick = {() => eliminarCita(id)} // con arrow function para esperar el onclick
      >
          Eliminar &times;
      </button>
    </div>
  );
};

Cita.propTypes = {
    // el key no se documenta
   cita: PropTypes.object.isRequired,
   eliminarCita: PropTypes.func.isRequired 
}

export default Cita;
