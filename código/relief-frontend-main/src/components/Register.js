import React, { useState, useEffect } from "react";
import api from '../services/api';
import Select from 'react-select';
import { useAlert } from 'react-alert';

export default function App() {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const alert = useAlert();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);

      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [inform, setInform] = useState('');
  const [selectedValue, setSelectedValue] = useState([]);
  const [sent, setSent] = useState(false);

  const colourStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      // const color = chroma(data.color);
      console.log({ data, isDisabled, isFocused, isSelected });
      return {
        ...styles,
        backgroundColor: isFocused ? "#999999" : null,
        color: "#333333"
      };
    }
  };

  const options = [
    { value: 'alimentos', label: 'Alimentos' },
    { value: 'roupas', label: 'Roupas' },
    { value: 'remedios', label: 'Remédios' },
    { value: 'higiene', label: 'Itens de higiene' }
  ]

  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
  }

  async function handleRegister(e) {
    e.preventDefault();

    var msg = selectedValue.toString();

    const data = {
      name,
      whatsapp,
      latitude,
      longitude,
      msg,
      inform
    };

    try {
      const response = await api.post('users', data);

      alert.show("Cadastro efetuado com sucesso!");
      setSent(true);

    } catch (err) {
      alert.error("Erro no cadastro, tente novamente!");
    }

    console.log(data);
  }

  return (
    <div id="contact">
      <div className="container">
        <div className="section-title text-center">
          <div className="row">
            <div className="section-title">
              <h2>Cadastre-se</h2>
              <p>
                Cadastre uma nova oferta de doação
        </p>
            </div>
            <form onSubmit={handleRegister} name="sentMessage" id="contactForm" noValidate>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">

                    <input
                      type="text"
                      id="Nome"
                      className="form-control"
                      placeholder="Nome"
                      required="required"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />

                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input

                      id="Whatsapp"
                      className="form-control"
                      placeholder="Whatsapp"
                      required="required"
                      value={whatsapp}
                      onChange={e => setWhatsapp(e.target.value)}
                      type="number"
                    />

                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <Select styles={colourStyles} options={options} isMulti="true" onChange={handleChange} />
                <p className="help-block text-danger"></p>
              </div>

              <div className="form-group">
                <textarea
                  name="mensagem"
                  id="mensagem"
                  className="form-control"
                  rows="4"
                  placeholder="Mensagem"
                  value={inform}
                  onChange={e => setInform(e.target.value)} />
                <p className="help-block text-danger"></p>
              </div>


              <div id="success"></div>

              {sent ? <img src={require('../assets/icons/confirm.gif')} style={{ height: "40px" }} /> : (
                <button type="submit" className="btn btn-custom btn-lg">
                  Enviar
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}