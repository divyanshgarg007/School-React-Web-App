import {Box, Typography} from '@mui/material'
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {GoogleMap, MarkerF, useJsApiLoader} from '@react-google-maps/api'
import {useTranslation} from 'react-i18next'
import {ActionCreators} from '../../../redux/actions'
import MyDiv from './location.style'

const containerStyle = {
  width: '100%',
  height: '500px',
}
const LIBRARIES = ['places']

const Location = (props) => {

  const {t} = useTranslation()

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: LIBRARIES,
  })
  if (!isLoaded) return

  return (
    <MyDiv>
      <Box className="main_box">
        <Box className="card_box">
          <Typography className="heading_name">{t('MyLocation')}</Typography>
        </Box>
        {props?.teachersData?.data?.userLocation.length !== 0 ?

          <GoogleMap
            center={{lat: Number(props?.teachersData?.data?.userLocation[0].lat), lng: Number(props?.teachersData?.data?.userLocation[0].long)}}
            mapContainerStyle={containerStyle}
            zoom={5}
            options={{
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
              zoomControl: true,
            }}
          >
            {props?.teachersData?.data?.userLocation?.map((item, index) => {
              return (<MarkerF key={index} position={{lat: Number(item.lat), lng: Number(item.long)}} />)
            })}
          </GoogleMap> : null
        }
      </Box>
    </MyDiv>
  )
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(Location)
