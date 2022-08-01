import React, { useState } from 'react';
import { StyledWrapperLocation, StyledInfoMap } from './StyledLocation';
import {
  Marker,
  GoogleMap,
  useJsApiLoader,
  InfoWindow,
} from '@react-google-maps/api';
import FeedbackForm from '../ReusableComponents/FeedBackForm/FeedBackForm';
import { useIsMediaQuery } from '../../utils/hooks/isMediaQuery';
import theme from '../../utils/styledTheme';

const mapLocation = {
  lat: 53.86103290756254,
  lng: 30.367554940372184,
};

const Location: React.FC = () => {
  const isDesktop = useIsMediaQuery(theme.breakpoints.desktop);

  const containerStyle = {
    width: isDesktop ? '60vw' : '100vw',
    height: '86vh',
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: String(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY),
  });

  const [selectedCenter, setSelectedCenter] = useState(false);

  return isLoaded ? (
    <StyledWrapperLocation>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapLocation}
        zoom={16}
      >
        <Marker
          position={mapLocation}
          icon='./img/iconSmall.webp'
          title='Наш адрес: г.Могилёв, ул.Академика Павлова, д.7/7'
          onClick={() => {
            setSelectedCenter(true);
          }}
        />
        {selectedCenter && (
          <InfoWindow
            position={mapLocation}
            onCloseClick={() => {
              setSelectedCenter(false);
            }}
          >
            <StyledInfoMap>
              <h2>ООО" Плитстройторг"</h2>
              <h2>Наш адрес:</h2>
              <h3>г.Могилёв, ул.Академика Павлова, д.7/7</h3>
              <a
                target='_blank'
                href='https://www.google.com/maps/@53.8610162,30.3676476,21z?hl=ru-RU'
                tab-index='0'
                rel='noreferrer'
              >
                <span>Показать на Google Картах</span>
              </a>
            </StyledInfoMap>
          </InfoWindow>
        )}
      </GoogleMap>
      <FeedbackForm />
    </StyledWrapperLocation>
  ) : (
    <></>
  );
};

export default Location;
