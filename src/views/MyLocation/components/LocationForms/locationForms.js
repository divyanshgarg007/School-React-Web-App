/* eslint-disable */
import React, { useCallback, useRef, useState, useEffect } from "react";
import { styled } from "@mui/system";
import {
  Box,
  Typography,
  MenuItem,
  Switch,
  Divider,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  GoogleMap,
  MarkerF,
  Autocomplete,
  useLoadScript,
} from "@react-google-maps/api";
import { CustomButton, CustomTextBox } from "../../../../components";
import MyDiv from "./locationForms.style";


const containerStyle = {
  width: "100%",
  height: "450px",
};

const LIBRARIES = ["places"];


export default function LocationForms(props) {
  const { t } = useTranslation();
  const [location, setLocation] = useState()
  const [searchResult, setSearchResult] = useState("Result: none");
  const [map, setMap] = useState(null); // set the map state to get the bounds of the map
  const [center, setCenter] = useState({ lat: 35.1351148, lng: 32.9527879 });
  const [mapZoom, setMapZoom] = useState(10);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: LIBRARIES,
  });
  const onLoad = useCallback((map) => {
    setMap(map)
  }, []);

  useEffect(() => {
    if(props.marker){
      setCenter({...props.marker})
    }
  }, [])

  const onPlaceChanged = () => {
    if (searchResult != null) {
      const place = searchResult.getPlace();
      setLocation(place)
      setCenter({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
      setMapZoom(18);
      props.handleMapPosition({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
    }
  };

  const onPlaceLoad = (autocomplete) => {
    setSearchResult(autocomplete);
  };

  
  if (!isLoaded) return;

  return (
    <MyDiv>
      <Box className="sm_box">
        <Box className="switch_box">
          <Switch onChange={props.handleChangeSwitch} />
          <Typography>{t("checkbox")}</Typography>
        </Box>
        {props.showContent ? (
          <Box className="data_box">
            <Box>
            <Typography className="media_url">{t("fullAddress")}<span>*</span></Typography>
              <CustomTextBox
              name="address"
                value={props.locationData?.address}
                onChange={props.handleChange}
                className="text-style"
              />
              <Typography mb={1} className="title_text">{t('LocationonGoogleMaps')}</Typography>
              <Divider style={{background: '#000000'}} />
              <Box mt={2}>
              <Typography mt={1} className="media_url">Search your Location</Typography>
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
              </Box>
              <Typography className="media_url">{t("urlgoogle")}</Typography>
              <CustomTextBox
              name="google_map_url"
              value={props.locationData?.google_map_url}
                onChange={props.handleChange}
                className="text-style"
                fieldLabel={t("Hyperlink")}
              />
              <Typography className="map_text">{t("markertext")}</Typography>
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
            </Box>
          </Box>
        ) : (
          null
        )}

        <Box className="flex_btn">
          <CustomButton
            onClick={props.handleSubmit}
            className="btn_submit"
            title={t("Submit")}
          />
          <CustomButton
            onClick={props.handleClick}
            className="btn_cancel"
            title={t("Cancel")}
          />
        </Box>
      </Box>
    </MyDiv>
  );
}