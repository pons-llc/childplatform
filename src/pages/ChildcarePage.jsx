import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import dummyData from '../data/dummy.json';
import { MapPin, Calculator, Calendar } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in React Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const ChildcarePage = () => {
    const { childcare } = dummyData;
    const center = [35.6895, 139.6917]; // Default center (Tokyo)
    return (
        <div>
            <h1 style={{ marginBottom: '1.5rem' }}>保育園・入園手続き</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <Link to="/childcare/points" style={{ padding: '1.5rem', backgroundColor: '#e0ffff', borderRadius: 'var(--radius-sm)', color: '#008b8b', display: 'block' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Calculator />
                        <span style={{ fontWeight: 'bold' }}>点数シミュレーション</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.9rem' }}>あなたの持ち点を計算してみましょう</p>
                </Link>
                <div style={{ padding: '1.5rem', backgroundColor: '#fff0f5', borderRadius: 'var(--radius-sm)', color: '#d48795' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Calendar />
                        <span style={{ fontWeight: 'bold' }}>入園相談予約</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.9rem' }}>専門員に相談できます</p>
                </div>
            </div>

            <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#7d5a5a' }}>周辺の保育園・空き状況</h2>

            <div style={{ height: '500px', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', marginBottom: '2rem' }}>
                <MapContainer center={center} zoom={14} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {childcare.nurseries.map(nursery => (
                        <Marker key={nursery.id} position={[nursery.coordinates.lat, nursery.coordinates.lng]}>
                            <Popup>
                                <div style={{ minWidth: '200px' }}>
                                    <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: '#333' }}>{nursery.name}</h3>
                                    <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.8rem', color: '#666' }}>{nursery.address}</p>

                                    <div style={{ display: 'flex', gap: '0.2rem', marginTop: '0.5rem' }}>
                                        {Object.entries(nursery.vacancy).map(([age, count]) => (
                                            <div key={age} style={{
                                                flex: 1,
                                                textAlign: 'center',
                                                padding: '0.2rem',
                                                backgroundColor: count > 0 ? '#f0fff0' : '#fff0f0',
                                                borderRadius: '4px',
                                                border: count > 0 ? '1px solid #90ee90' : '1px solid #ffb6c1'
                                            }}>
                                                <div style={{ fontSize: '0.7rem', color: '#666' }}>{age.replace('yr', '歳')}</div>
                                                <div style={{ fontWeight: 'bold', fontSize: '0.8rem', color: count > 0 ? '#2e8b57' : '#cd5c5c' }}>
                                                    {count > 0 ? count : '×'}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div >
    );
};

export default ChildcarePage;
