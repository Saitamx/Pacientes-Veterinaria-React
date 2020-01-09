import React from "react";
import Cita from "./Cita";
import PropTypes from 'prop-types'; // para documentar la aplicación

const ListaCitas = ({ citas, eliminarCita }) => {
  // Imprimir un mensaje en base a si hay citas o ono
  const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra las citas aquí';

  return (
    <div className="card mt-2 py-5">
      <div className="cardbody">
        <h2 className="card-tittle text-center">{mensaje}</h2>
  
        <div className="lista-citas">
          {citas.map(cita => (
              // con uuid
            <Cita 
              key={cita.id} 
              cita={cita} 
              eliminarCita={eliminarCita}
            />
          ))}
        </div>
      </div>
    </div>
  );
  
}
ListaCitas.propTypes = {
  citas: PropTypes.array.isRequired,
  eliminarCita : PropTypes.func.isRequired
}

export default ListaCitas;
