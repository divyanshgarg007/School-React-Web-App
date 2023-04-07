import React, {useEffect, useState} from 'react'
import {Box, Typography} from '@mui/material'
import {GoogleMap, MarkerF, useJsApiLoader} from '@react-google-maps/api'
import MyDiv from './locationCard.style'

const containerStyle = {
  width: '100%',
  height: '500px',
}
const LIBRARIES = ['places']

export default function LocationCard(props) {

  const [marker, setMarker] = useState()

  useEffect(() => {
    setMarker({lat: Number(props?.customerEditData?.location?.version[0]?.lat), lng: Number(props?.customerEditData?.location?.version[0]?.long)})
  }, [props.customerEditData?.location?.version])

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: LIBRARIES,
  })

  if (!isLoaded) return

  return (
    <MyDiv>
      <Box className="about_box">
        <Typography className="card_heading">Location</Typography>
        <GoogleMap
          center={marker}
          mapContainerStyle={containerStyle}
          zoom={5}
        >
          {props?.customerEditData?.location?.version?.map((item, index) => {
            return (
              <MarkerF key={index} position={{lat: Number(item?.lat), lng: Number(item?.long)}} />
            )
          })}
        </GoogleMap>
      </Box>
    </MyDiv>
  )
}
