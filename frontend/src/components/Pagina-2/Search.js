import React, { Component } from 'react';
import Planta from './Planta';
import Background from '../img/background.jpg';
const Search = props => {
  
    console.log(props.plantas)

    return (
        <div>
                <div className="container-fluid " style={{ height: "90vh", backgroundImage: `url(${Background})`, backgroundSize: 'cover' ,backgroundRepeat: `repeat-y`}}>
                    <div className="row" style={{ height: '10%' }} align="center"></div>
                    <div className="row" style={{ height: '20%' }} align="center">
                        <div className="h3" style={{ color: "white", flex: 1, alignItems: "center" }} >Lista de plantas:</div>
                        <div className="container-fluid" style={{ height: "90vh" }}>

                            <div className="row">
                                
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title" align="center">Plantas para adecuadas para tu cultivo:</h5>
                                            <div id="accordion">{props.plantas.map((t, i) =>(<Planta key={i} planta={t} id={t.id}/>))}</div>    
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
    
}
 
export default Search;