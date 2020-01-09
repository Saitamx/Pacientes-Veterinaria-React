import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types'; // para documentar la aplicación

const stateInicial = {
    cita : {
        mascota : '',
        propietario : '',
        fecha : '',
        hora : '',
        sintomas : ''
    },
    error : false
}

class NuevaCita extends Component {
    state = { ...stateInicial }

    // cuando el usuario escribe en los input
    handleChange = e => {
        // para acceder a los valores del input
        console.log("e.target.name + ': " +e.target.value)

        // poner lo que escribe el usuario en el state
        this.setState({
             cita : {
                 // tomamos una copia del state
                 ...this.state.cita,
                 // para reescribir
                 [e.target.name] : e.target.value
             }
        })
    }

    // cuando el usuario envia el formulario
    handleSubmit = e => {
        e.preventDefault();

        // extraer valores del state
        const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;

        // validar que todos los campos esten llenos
        if (mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === ''){
            this.setState({
                error : true
            });

            // detener la ejecución
            return;
        }

        // generar objeto con los datos
        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();

        // agregar la cita al state de app
        this.props.crearNuevaCita(nuevaCita)

        // colocar en el state el stateInicial
        this.setState({
            ...this.stateInicial
        })
    }

    render() {
        // extraer valores del state
        const { error } = this.state;

        return (
            <div className = "card mt-5 py-5">
                <div className = "card-body">
                    <h2 className = "card-tittle text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>

                    { error ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obiligatorios</div> : null }
                    
                    <form
                        onSubmit = {this.handleSubmit}
                    >
                        <div className="form-group row">
                            <label className = "col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className = "col-sm-8 col-lg-10">
                                <input 
                                    type = "text"
                                    className = "form-control"
                                    placeholder = "Nombre Mascota"
                                    name = "mascota"
                                    onChange = {this.handleChange}
                                    value ={this.state.cita.mascota}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className = "col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className = "col-sm-8 col-lg-10">
                                <input 
                                    type = "text"
                                    className = "form-control"
                                    placeholder = "Nombre Dueño Mascota"
                                    name = "propietario"
                                    onChange = {this.handleChange}
                                    value ={this.state.cita.propietario}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className = "col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className = "col-sm-8 col-lg-4">
                                <input 
                                    type = "date"
                                    className = "form-control"
                                    name = "fecha"
                                    onChange = {this.handleChange}
                                    value ={this.state.cita.fecha}
                                />
                            </div>

                            <label className = "col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className = "col-sm-8 col-lg-4">
                                <input 
                                    type = "time"
                                    className = "form-control"
                                    name = "hora"
                                    onChange = {this.handleChange}
                                    value ={this.state.cita.hora}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className = "col-sm-4 col-lg-2 col-form-label">Síntomas</label>
                            <div className = "col-sm-8 col-lg-10">
                                <textarea
                                className = "form-control"
                                 placeholder = "Describe los Síntomas"
                                 name = "sintomas"
                                onChange = {this.handleChange}
                                value ={this.state.cita.sintomas}
                                ></textarea>

                                <input type="submit" className = "py-3 mt-2 btn-success btn-block" value = "Agregar Nueva Cita" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

// para documentar el código
NuevaCita.propType = {
    crearNuevaCita : PropTypes.func.isRequired
}

export default NuevaCita;