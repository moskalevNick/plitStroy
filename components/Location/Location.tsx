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
import Loader from '../ReusableComponents/Loader/Loader';

const mapLocation = {
  lat: 53.352542,
  lng: 32.101521,
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
          title='Наш адрес: Могилевская обл., Костюковичский р-н, Демидовичский с/с, д. Прусино, д. 1'
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
              <h2>ООО &quot;Плит-строй&quot;</h2>
              <h2>Наш адрес:</h2>
              <h3>
                Могилевская обл., Костюковичский р-н, Демидовичский с/с, д.
                Прусино, д. 1
              </h3>
              <a
                target='_blank'
                href='https://www.google.com/maps/@53.352542,32.101521,21z?hl=ru-RU'
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
    <Loader />
  );
};

export default Location;
