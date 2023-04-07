/* eslint-disable prefer-template */
import {Box, Chip, Divider, IconButton, Typography} from '@mui/material'
import {GoogleMap, Marker, MarkerF} from '@react-google-maps/api'
import {Link} from 'react-router-dom'
import React from 'react'
import {useTranslation} from 'react-i18next'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {AccountCircle, ArrowBackIos, ArrowForwardIos, Close, LocationOn} from '@mui/icons-material'
import marker from '../../../../images/marker.png'
import MyDiv from './ mapViewTab.style'

const OPTIONS = {
  streetViewControl: false,
  zoomControl: false,
  styles: [
    {
      featureType: 'poi',
      stylers: [{visibility: 'off'}],
    },
    {
      featureType: 'transit',
      elementType: 'labels.icon',
      stylers: [{visibility: 'off'}],
    },
  ],
}

export default function MapViewTab(props) {
  const {t} = useTranslation()

  return (
    <MyDiv>
      <Box className="h-100">
        <Box className="map_container">
          <GoogleMap
            center={props.center}
            onLoad={props.onLoad}
            onClick={props.handleMarkerPosition}
            onBoundsChanged={props.handleMapPosition}
            mapContainerStyle={props.containerStyle}
            zoom={2}
            options={OPTIONS}
          >
            <Marker position={props.marker} icon={marker} />
            {props.filteredTeachers?.map(
              (item, index) => {
                return (
                  <>
                    <MarkerF
                      onClick={props.handleActiveMarker(item.teacher_id)}
                      key={index}
                      position={{
                        lat: parseFloat(item.latitude),
                        lng: parseFloat(item.longitude),
                      }}
                    />
                    {props.theCurrentTeacher && +props.theCurrentTeacher?.latitude ===
                      +item.latitude &&
                    +props.theCurrentTeacher?.longitude ===
                      +item.longitude ? <Slider>
                        <Box className="list_users" key={index}>
                          <IconButton className="btn_hide" onClick={() => props.setCurrentTeacher(null)}><Close /></IconButton>
                          <Box className="inner_list">
                            <img src={props.theCurrentTeacher?.profile_image} />
                            <Box className="list_items">
                              <Typography className="username">
                                {props.theCurrentTeacher?.name} {props.theCurrentTeacher?.surname}
                              </Typography>
                              <Typography className="list_data">
                                {props.theCurrentTeacher?.experience_name}+ years of experience
                              </Typography>
                            </Box>
                          </Box>
                          <Box className="category_box">
                            <Chip label={props.theCurrentTeacher?.sub_category_name} className="category_items" />
                          </Box>
                          <Divider />
                          <Box className="flex_box">
                            <Box className="list_row">
                              <LocationOn />
                              <Typography className="list_data">
                                {props.theCurrentTeacher?.address}
                              </Typography>
                            </Box>
                          </Box>
                          <Divider />
                          <Box className="flex_box">
                            <Box className="list_row2">
                              <Box className="flex_child">
                                <AccountCircle />
                                <Link target="_blank" className="view_btn"
                                  to={'/teacher/' + props.theCurrentTeacher?.name + props.theCurrentTeacher?.surname + props.theCurrentTeacher?.teacher_id}
                                >{t('ViewProfile')}</Link>
                              </Box>
                              <Box>
                                <ArrowForwardIos />
                              </Box>
                            </Box>
                          </Box>
                          {props.hasNext || props.hasPrevious ?
                            <Box className="icon_box"><IconButton
                              className="icn_btn"
                              variant="text"
                              disabled={!props.hasPrevious}
                              onClick={props.handlePreviousClick}
                              color="primary"
                            >
                              <ArrowBackIos />
                            </IconButton><IconButton
                              className="icn_btn"
                              variant="text"
                              disabled={!props.hasNext}
                              onClick={props.handleNextClick}
                              color="primary"
                            >
                              <ArrowForwardIos />
                            </IconButton></Box>
                            : null }
                        </Box>
                      </Slider> : null
                    }
                  </>
                )
              }
            )}
          </GoogleMap>
        </Box>
      </Box>
    </MyDiv>
  )
}
