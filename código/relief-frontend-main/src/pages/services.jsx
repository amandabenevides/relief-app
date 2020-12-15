import React, { Component } from "react";
import mask from '../assets/mask.png';
import cold from '../assets/cold.png';

export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Sobre</h2>
              <br></br>
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-6" style={{ float: "right" }}> <img src={cold} className="img-responsive" alt="" /> </div>
                <div className="col-xs-12 col-md-6" style={{ float: "right" }} >
                  <div className="about-text">
                    <h2>O projeto</h2>
                    <p> A pandemia de Covid-19, causada pelo vírus SARS-CoV-2 ou Novo Coronavírus, vem produzindo repercussões
                    não apenas de ordem
                    biomédica em escala global, mas também repercussões e impactos sociais, econômicos,
                    políticos, culturais e históricos sem precedentes na história
                    recente das epidemias.</p>
                    <br></br>
                    <p> A estimativa de infectados e mortos concorre diretamente com o impacto sobre os sistemas de saúde, com a
                    exposição de populações e grupos vulneráveis, a sustentação econômica do sistema financeiro e da população, a saúde mental das pessoas em
                    tempos de confinamento e
                    temor pelo risco de adoecimento, acesso a bens essenciais como alimentação, medicamentos, transporte, entre outros.
                    <br></br><br></br>
                    (Fiocruz, outubro de 2020) </p>
                    <br></br>
                  </div>
                </div>
              </div>
              <br></br><br></br><br></br><br></br>
              <div className="row">
                <div className="col-xs-12 col-md-6"> <img src={mask} className="img-responsive" alt="" /> </div>
                <div className="col-xs-12 col-md-6">
                  <div className="about-text">
                    <h2>Como participar?</h2>
                    <p className="align-text">
                      A fim de ajudar a combater esse cenário, criamos o Relief, um aplicativo que promove doações entre usuários,
                      com o objetivo de amenizar os impactos
                      sofridos pela população durante a pandemia.
                      <br></br>
                      Para contribuir, é necessário apenas cadastrar a doação a ser feita no mapa e esperar que pessoas interessadas entrem em contato!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
