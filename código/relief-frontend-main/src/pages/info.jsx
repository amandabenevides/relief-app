import React, { Component } from "react";
import food from '../assets/food.png';
import clothes from '../assets/clothes.png';
import meds from '../assets/meds.png';
import clean from '../assets/clean.png';

export class Info extends Component {
  render() {
    return (
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Quais tipos de itens podem ser doados?</h2>
          </div>
          <div className="row">
            <div className="col-xs-6 col-md-3">
              {" "}
              <i ></i>
              <img className="donation-icons" src={food} alt=""></img>
              <h3>Alimentos</h3>
              <p>Todos os tipos de alimentos</p>
            </div>
            <div className="col-xs-6 col-md-3">
              {" "}
              <i ></i>
              <img className="donation-icons" src={clothes} alt=""></img>
              <h3>Roupas</h3>
              <p>Roupas de todos os tamanhos</p>
            </div>
            <div className="col-xs-6 col-md-3">
              {" "}
              <i ></i>
              <img className="donation-icons" src={meds} alt=""></img>
              <h3>Remédios</h3>
              <p>Apenas remédios de venda livre</p>
            </div>
            <div className="col-xs-6 col-md-3">
              {" "}
              <i ></i>
              <img className="donation-icons" src={clean} alt=""></img>
              <h3>Itens de higiene pessoal</h3>
              <p>Máscaras e itens de limpeza</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
