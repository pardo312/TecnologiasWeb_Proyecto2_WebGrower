import React from 'react';
import Search from './Search';

export default class Pagina2 extends React.Component {
  /**
   * Constructor del componente.
   */
  constructor(props) {
    super(props);
    this.state = { temperatura: 0, precipitacion: 0, elevmin: 0, elevmax: 0, plantas: [] };

  }
  /**
   * Componente que realiza el fetch de los datos al back.
   */
  componentDidMount() {
    
    const url = " http://localhost:3000/planta/f/tpe?";

    if (this.props.match) {
      try {
        if (this.props.match.path === "/search/:departamento") {
          const urlDepto = "http://localhost:3000/planta/departamento/";
          fetch(urlDepto + this.props.match.params.departamento + "?num_pagina=2&cantidad=2")
            .then(res => {
              return res.json();
            }).then(p => {
              this.setState({ plantas: p })    
            })
        }
        else if (this.props.match.path === "/search/:temperatura/:precipitacion/:elevacionMin/:elevacionMax") {


         
          fetch(url + "temp=" + this.props.match.params.temperatura + "&prec=" + this.props.match.params.precipitacion + "&min=" + this.props.match.params.elevacionMin + "&max=" + this.props.match.params.elevacionMax)
            .then(res => {

              return res.json();
            }).then(p => {
              
              this.setState({ plantas: p })
            })
          
        }
        
      } catch (err) {
        alert(err);
      }
    }


  }
  /**
   * Render del modulo.
   */
  render() {
    return (
      <div>
      <Search plantas={this.state.plantas} />
      </div>
      
    );
  }
}