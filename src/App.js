import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";
import NuevaCita from "./components/NuevaCita";
import ListaCitas from "./components/ListaCitas";

class App extends Component {
  state = {
    citas: []
  };

  // cuando la aplicación carga
  componentDidMount(){
    const citasLS = localStorage.getItem('citas');
    if(citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }

  // cuando eliminamos o agregamos una nueva cita
  componentDidUpdate(){
    // local storage es limitado, sólo acepta strings
    localStorage.setItem('citas', JSON.stringify(this.state.citas)); // combierte un arreglo de objetos a un string
  }

  crearNuevaCita = datos => {
    // copiar el state actual
    const citas = [...this.state.citas, datos];

    // agregar el nuevo state
    this.setState({
      citas
    });
  };

  // elimina las citas del state
  eliminarCita = id => {
    console.log(id);
    console.log("Diste click");

    // tomar una copia del state ( siempre se debe guardar una copia al hacer cambios al state )
    const citasActuales = [...this.state.citas];

    // utilizar filter para sacar el elemento @id del arreglo
    const citas = citasActuales.filter(cita => cita.id !== id); // crea una nueva copia para agregarlo a citas

    // const productos = [
    //   {id : 1, producto: 'Libro React'},
    //   {id : 2, producto: 'Libro Node'}
    // ]

    // actualizar el state
    this.setState({
      citas
    })
  }

  render() {
    return (
      <div className="container">
        <Header 
          titulo="Administrador Pacientes Veterinaria" />

        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita 
              crearNuevaCita={this.crearNuevaCita} />

            <div>
              <ListaCitas
                citas={this.state.citas}
                eliminarCita={this.eliminarCita}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
