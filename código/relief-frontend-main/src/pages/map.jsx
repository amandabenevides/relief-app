import React, { Component } from "react";
import MapComponent from "../components/MapComponent";

export class Map extends Component {
  render() {
    return (
      <div id="map">
        <div className="container">
          <div className="section-title text-center">
            <h2>Mapa de doações</h2>
            <h3> ☑️ Faça uma busca utilizando os filtros de pesquisa </h3>
            <h3> ☑️  Clique em um marcador para saber os detalhes </h3>
            <br></br><br></br>
            <MapComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default Map;
