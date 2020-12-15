import React, { useState, useEffect } from "react";
import api from '../services/api';
import Select from 'react-select';
import ReactWhatsapp from 'react-whatsapp';


import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";

import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
    height: "60vh",
    width: "100%",
};
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
};

export default function App() {
    const { isLoaded, loadError } = useLoadScript({
        //chave removida por questões de segurança, para gerar uma chave pessoal -> https://console.cloud.google.com/apis/
        googleMapsApiKey: " ",
        libraries,
    });
    const [markers, setMarkers] = useState([]);
    const [selected, setSelected] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedValue, setSelectedValue] = useState([]);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const options = [
        { value: 'alimentos', label: 'Alimentos' },
        { value: 'roupas', label: 'Roupas' },
        { value: 'remedios', label: 'Remédios' },
        { value: 'higiene', label: 'Itens de higiene' }
    ]

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
                timeout: 3000,
            }
        )

    }, []);
    const handleChange = (e) => {
        setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
    }


    async function loadDevs() {
        setLoading(true);
        const response = await api.get('/search', {
            params: {
                latitude: latitude,
                longitude: longitude,
                msg: selectedValue.toString()
            }
        });
        setMarkers(response.data.users);
        setLoading(false);
    }

    const center = {
        lat: latitude,
        lng: longitude,
    };

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";


    return (
        <div>
            <Select className="reactSelect" options={options} isMulti="true" onChange={handleChange} />
            <p></p>
            <button className="btn btn-custom btn-lg" onClick={() => { loadDevs(); }} >Buscar</button>
            <p></p>
            {loading ? <img src={require('../assets/icons/loading.gif')} style={{ height: "40px" }} /> : (

                <GoogleMap
                    id="map"
                    mapContainerStyle={mapContainerStyle}
                    zoom={15}
                    center={center}
                    options={options}
                >

                    {markers && markers.map(users => (
                        <Marker
                            key={`${users.location.coordinates[1]}-${users.location.coordinates[0]}`}
                            position={{ lat: users.location.coordinates[1], lng: users.location.coordinates[0] }}
                            onClick={() => {
                                setSelected(users);
                            }}
                            icon={{
                                url: `/img/donation.png`,
                                origin: new window.google.maps.Point(0, 0),
                                anchor: new window.google.maps.Point(15, 15),
                                scaledSize: new window.google.maps.Size(40, 40),
                            }}
                        >

                        </Marker>
                    ))}

                    {selected ? (
                        <InfoWindow
                            position={{ lat: selected.location.coordinates[1], lng: selected.location.coordinates[0] }}
                            onCloseClick={() => {
                                setSelected(null);
                            }}
                        >
                            <div>
                                <h3>
                                    <span role="img" aria-label="donation">

                                    </span>{" "}
                                    <p>  Oferta(s): </p>

                                    {selected.msg.map((item, i) => {

                                        return <img src={require('../assets/icons/' + `${item}` + '.png')} style={{ height: "40px" }} />;

                                    })}
                                </h3>
                                <p><b>"{selected.inform}"</b></p>
                                {<p><ReactWhatsapp number={"" + selected.whatsapp} message='Hello World!!!' >
                                    <img src={require('../assets/icons/whatsapp.png')} style={{ height: "40px" }} />
                                </ReactWhatsapp>
                                </p>
                                }

                            </div>
                        </InfoWindow>
                    ) : null}
                </GoogleMap>
            )}
        </div>
    );
}

