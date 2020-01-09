import React from "react";
import PropTypes from 'prop-types'; // para documentar la aplicación

const Cita = ({ cita, eliminarCita }) => (
  <div className="media mt-3">
    <div className="media-body">
      <h3 className="mt-0">{cita.mascota}</h3>
        <p className="card-text"> <span> Nombre Dueño: {cita.propietario} </span></p>
        <p className="card-text"> <span> Fecha {cita.fecha} </span></p>
        <p className="card-text"> <span> Hora:  {cita.hora} </span></p>
        <p className="card-text"> <span> Síntomas: </span></p>
        <p className="card-text"> <span> {cita.sintomas} </span></p>

        <button 
            className="btn btn-danger"
            // para esperar al click y pasarle el id que se requiere
            onClick={() => eliminarCita(cita.id)}>Borrar &times;
        </button>
    </div>
  </div>
);

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  eliminarCita : PropTypes.func.isRequired
}

export default Cita;
