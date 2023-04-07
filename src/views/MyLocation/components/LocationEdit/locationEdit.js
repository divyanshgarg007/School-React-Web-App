/* eslint-disable no-unused-vars */
import React, {useCallback, useEffect, useState} from 'react'
import {Grid, Box, Switch, Typography} from '@mui/material'
import {useTranslation} from 'react-i18next'
import {Autocomplete, GoogleMap, MarkerF, useLoadScript} from '@react-google-maps/api'
import {CustomTextBox} from '../../../../components'
import MyDiv from './locationEdit.style'

const containerStyle = {
  width: '100%',
  height: '500px',
}

const LIBRARIES = ['places']
export default function LocationEdit(props) {
  const {t} = useTranslation()
  const [location, setLocation] = useState()
  const [searchResult, setSearchResult] = useState('Result: none')
  const [map, setMap] = useState(null) // set the map state to get the bounds of the map
  const [center, setCenter] = useState({lat: 35.1351148, lng: 32.9527879})
  const [mapZoom, setMapZoom] = useState(10)

  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: LIBRARIES,
  })
  const onLoad = useCallback((map) => {
    setMap(map)
  }, [])

  useEffect(() => {
    if (props.marker) {
      setCenter({...props.marker})
    }
  }, [])

  const onPlaceChanged = () => {
    if (searchResult != null) {
      const place = searchResult.getPlace()
      setLocation(place)
      setCenter({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      })
      setMapZoom(18)
      props.handleMapPosition({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      })
    }
  }

  const onPlaceLoad = (autocomplete) => {
    setSearchResult(autocomplete)
  }


  if (!isLoaded) return

  return (
    <MyDiv>
      <Box className="switch_box">
        <Switch onChange={props.handleChangeSwitch} />
        <Typography>{t('checkbox')}</Typography>
      </Box>
      {props.showContent ? <Grid className="grid_box" item xs={12} sm={12}>
        <Typography className="media_url">{t('fullAddress')}<span>*</span></Typography>
        <CustomTextBox
          name="address"
          value={props.locationData?.address}
          onChange={props.handleChange}
          className="text-style"
        />
        <Typography className="title_text">{t('LocationonGoogleMaps')}</Typography>
        <Typography mt={3} className="media_url">Search your Location</Typography>
        <Autocomplete
          className="auto_complete"
          onPlaceChanged={onPlaceChanged}
          onLoad={onPlaceLoad}
        >
          <input
            type="text"
            placeholder="Search"
          />
        </Autocomplete>
        <Typography className="media_url">{t('urlgoogle')}</Typography>
        <CustomTextBox
          name="google_map_url"
          value={props.locationData?.google_map_url}
          onChange={props.handleChange}
          className="text-style"
          fieldLabel={t('Hyperlink')}
        />
        <Typography className="map_text">{t('markertext')}</Typography>
        <GoogleMap
          center={center}
          onLoad={onLoad}
          onClick={props.handleMapPosition}
          mapContainerStyle={containerStyle}
          zoom={mapZoom}
          options={{
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            zoomControl: false,
          }}
        >
          <MarkerF position={props.marker} />
        </GoogleMap>
      </Grid> : null}
    </MyDiv>
  )
}
