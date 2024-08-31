// src/components/MapPage.jsx
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import '../../Styles/leaflet-popup.css'; // Your custom styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import icon7 from "../../Assets/icon7.png";
import icon8 from "../../Assets/icon8.png";
import icon9 from "../../Assets/icon9.png";
import download from "../../Assets/download.avif";
import { useTranslation } from 'react-i18next';

const MapPage = () => {
  const { t } = useTranslation('MapPage'); 
  const mapRef = useRef(null);

  // Get query parameters from URL
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const lat = query.get('lat');
  const lng = query.get('lng');

  useEffect(() => {
    if (mapRef.current) {
      // Map already initialized
      return;
    }

    // Parse lat and lng to ensure they are numbers
    const latNum = lat ? parseFloat(lat) : null;
    const lngNum = lng ? parseFloat(lng) : null;

    if (isNaN(latNum) || isNaN(lngNum)) {
      console.error('Invalid coordinates:', lat, lng);
      return;
    }


    // Create the map
    const map = L.map('map').setView([30.1117872, 31.398683], 8); // Cairo's coordinates

    // Add base map layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Custom icons for start and end points
    const startIcon = L.icon({
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/7720/7720736.png', // Replace with your custom start icon
      iconSize: [32, 32],
      iconAnchor: [16, 32],
    });

    const endIcon = L.icon({
      iconUrl: 'https://png.pngtree.com/png-clipart/20230123/original/pngtree-flat-red-location-sign-png-image_8927579.png', // Replace with your custom end icon
      iconSize: [32, 32],
      iconAnchor: [16, 32],
    });

    // Define the routing control using the parameters from URL
    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(30.1117872, 31.398683), // Cairo Airport coordinates
        L.latLng(lngNum, latNum), // Destination coordinates from URL parameters
      ],
      lineOptions: {
        styles: [{ color: 'blue', weight: 3 }], // Line style
      },
      createMarker: function (i, waypoint) {
        // Custom markers for start and end points
        if (i === 0) {
          return L.marker(waypoint.latLng, { icon: startIcon });
        } else if (i === 1) {
          return L.marker(waypoint.latLng, { icon: endIcon });
        }
      },
      routeWhileDragging: true,
    }).addTo(map);


    // Store references
    mapRef.current = map;
    mapRef.routingControl = routingControl;

    // L.marker([30.1219, 31.4061], { icon: airportIcon })
    //   .addTo(map)
    //   .bindPopup(`
    //     <div class="custom-popup">
    //       <h3>Cairo Airport</h3>
    //       <p><strong>Address:</strong> Cairo, Egypt</p>
    //       <p><strong>Facilities:</strong> Restaurants, Shops, Lounges</p>
    //       <img src="../Assets/airplane.png" alt="Cairo Airport" style="width: 100%; border-radius: 8px;" />
    //     </div>
    //   `)
    //   .openPopup();

    // Cleanup function
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
      if (mapRef.routingControl) {
        mapRef.routingControl.remove();
        mapRef.routingControl = null;
      }
    };
  }, [lat, lng]);

  const [transportType, setTransportType] = useState('');

  const handleTransportTypeChange = (e) => {
    setTransportType(e.target.value);
  };

  return (
    <div className="row mx-0 p-0 " style={{ marginTop: '4.5rem' }}>
      <div className="col-md-2 p-0">
        <div className='px-1 h-100 containerMapContent'>
          <h6 className='text-center fw-bold main-colors pt-3'>{t('transportation.select_type')}</h6>
          <div className='px-2'>
            <label className='d-block pb-3 fs-6 fw-bold'>
              <input
                type="radio"
                name="transportType"
                value="private"
                checked={transportType === 'private'}
                onChange={handleTransportTypeChange}
                className='me-2'
              />
              {t('transportation.private')}
            </label>
            <label className='fs-6 fw-bold'>
              <input
                type="radio"
                name="transportType"
                value="public"
                className='me-2'
                checked={transportType === 'public'}
                onChange={handleTransportTypeChange}
              />
              {t('transportation.public')}
            </label>
          </div>

          {transportType === 'private' && (
            <div className='mt-3'>
              <hr />
              <h3 className='main-colors'>{t('transportation.private_transportation')}</h3>
              <ul className='p-0'>
                <div className='borderContent2 mb-3'>
                  <div className="d-flex align-items-center">
                    <img src={icon8} alt="" width={22} height={20} />
                    <a className='text-black fs-5 px-2' href="https://www.uber.com" target="_blank" rel="noopener noreferrer">{t('transportation.links.uber')}</a>
                  </div>
                </div>
                <div className='borderContent2 mb-3'>
                  <div className="d-flex align-items-center">
                    <img src={download} alt="" width={35} />
                    <a className='text-black fs-5 px-2' href="https://www.careem.com" target="_blank" rel="noopener noreferrer">{t('transportation.links.careem')}</a>
                  </div>
                </div>
                <div className='borderContent2 mb-3'>
                  <div className="d-flex align-items-center">
                    <img src={icon9} alt="" width={35} />
                    <a className='text-black fs-5 px-2' href="https://www.didiglobal.com" target="_blank" rel="noopener noreferrer">{t('transportation.links.didi')}</a>
                  </div>
                </div>
                <div className='borderContent2 mb-3'>
                  <div className="d-flex align-items-center">
                    <img src={icon7} alt="" width={38} />
                    <a className='text-black fs-5 px-2' href="https://indrive.com/en-us" target="_blank" rel="noopener noreferrer">{t('transportation.links.indriver')}</a>
                  </div>
                </div>
              </ul>
            </div>
          )}

          {transportType === 'public' && (
            <div className='mt-3'>
              <hr />
              <h3 className='main-colors'>{t('transportation.public_transportation')}</h3>
              <div>
                <div className='borderContent px-2 mb-2'>
                  <h5 className='text-white'>{t('transportation.stations.station1.name')}</h5>
                  <p>{t('transportation.stations.station1.address')}</p>
                  <p>{t('transportation.stations.station1.time')}</p>
                </div>
              </div>
              <div className='borderContent px-2 mb-2'>
                <h5 className='text-white'>{t('transportation.stations.station2.name')}</h5>
                <p>{t('transportation.stations.station2.address')}</p>
                <p>{t('transportation.stations.station2.time')}</p>
              </div>
              <div className='borderContent px-2 mb-2'>
                <h5 className='text-white'>{t('transportation.stations.station3.name')}</h5>
                <p>{t('transportation.stations.station3.address')}</p>
                <p>{t('transportation.stations.station3.time')}</p>
              </div>
              <div className='borderContent px-2 mb-2'>
                <h5 className='text-white'>{t('transportation.stations.station4.name')}</h5>
                <p>{t('transportation.stations.station4.address')}</p>
                <p>{t('transportation.stations.station4.time')}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="col-md-10 p-0">
        <div id="map" style={{ height: '90vh', width: '100%' }}></div>
      </div>
    </div>
  );
};

export default MapPage;
