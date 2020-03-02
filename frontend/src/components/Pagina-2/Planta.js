import React, { Component } from 'react';


class Planta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planta: this.props.planta
        }

    }

    render() {
        console.log(this.state.planta);
        return (

            
                <div className="card">
                    <div className="card-header" id={`heading${this.state.planta.id}`}>
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target={`#collapse${this.state.planta.id}`} aria-expanded="false" aria-controls={`collapse${this.state.planta.id}`}>
                            {this.state.planta.nombre}
                            </button>
                        </h5>
                    </div>

                    <div id={`collapse${this.state.planta.id}`} className="collapse" aria-labelledby={`heading${this.state.planta.id}`} data-parent="#accordion">
                        <div className="card-body">
                            <img src={this.state.planta.img_src} alt="planta" />
                            <h2>{this.state.planta.nombre}</h2>
                            <div>
                                <h3>{this.state.planta.sinonimos}</h3>
                                <p>Tipo de planta: {this.state.planta.habitad}</p>
                                <p>Temperatura: ({this.state.planta.temperatura.min}-{this.state.planta.temperatura.max})</p>
                                <p>Precipitacion: ({this.state.planta.presipitacion.min}-{this.state.planta.presipitacion.max})</p>
                                <p>Elevacio n: ({this.state.planta.elevacion_minima}-{this.state.planta.elevacion_maxima})</p>
                                <p>Provenencia: {this.state.planta.origen}</p>
                                <p>Estado de Conservacion: {this.state.planta.estado_de_conservacion}</p>
                                <p>Region de Habitad: {this.state.planta.regiones_biogeograficas}</p>
                                <p>Distribucion Global: {this.state.planta.distribucion_global}</p>
                                <p>Departamentos donde se encuentra: {this.state.planta.departamentos}</p>
                            </div>                       
                         </div>
                    </div>
                </div>
                );
            }
        }
        
export default Planta;