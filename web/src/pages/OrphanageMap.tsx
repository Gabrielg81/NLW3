import React, {useEffect, useState} from 'react';

import { Link } from 'react-router-dom';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';
import { FiPlus, FiArrowDownRight } from 'react-icons/fi';
import MapIcon from '../utils/mapIcon';
import api from '../services/api';

import '../styles/pages/orphanage-map.css';

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrphanageMap() {;
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(()=> {
        api.get('orphanages').then(response => {
            setOrphanages (response.data);
        });
    }, []);  //O que faz aparecer no mapa todas as marcações.

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa!</h2>
                    <p>Muitas crianças estão esperando sua visita! :)</p>
                </header>
                <footer>
                    <strong>Alagoinhas</strong>
                    <span>Bahia</span>
                </footer>
            </aside>

            <Map
                center={[-12.1342798,-38.4324061]}
                zoom={16}
                style={{width:'100%', height: '100%'}}
            >
                {/* pode utilizar o MAPBox também */}
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {orphanages.map(orphanage=>{
                        return (
                            <Marker
                            key={orphanage.id}
                            icon={MapIcon}
                            position={[orphanage.latitude,orphanage.longitude]}
                            >
                            <Popup closeButton={false} minWidth={240} maxHeight={240} className="map-popup">
                                {orphanage.name}
                                <Link to={`orphanages/${orphanage.id}`}>
                                    <FiArrowDownRight size={32} color="#FFF"/>
                                </Link>
                            </Popup>
                        </Marker>
                        )
                })}
            </Map>
            
        <Link to="/orphanages/create" className="create-orphanage">
            <FiPlus size={32} color="#FFF" />
        </Link>
        
        </div>
    );
}

export default OrphanageMap;