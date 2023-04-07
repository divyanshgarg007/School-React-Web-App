/* eslint-disable prefer-template */
import {Box, Checkbox, Chip, Divider, FormControlLabel, Grid, IconButton, ListItemButton, MenuItem, Pagination, Select, Typography} from '@mui/material'
import React, {useEffect, useState} from 'react'
import SearchIcon from '@mui/icons-material/Search'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'
import {GoogleMap, InfoWindowF, MarkerF, Marker} from '@react-google-maps/api'
import {useTranslation} from 'react-i18next'
import {styled} from '@mui/system'
import {AccountCircle, ArrowBackIos, ArrowForwardIos, LocationOn} from '@mui/icons-material'
import {ActionCreators} from '../../../../redux/actions'
import {CustomButton, CustomTextBox, Loader} from '../../../../components'
import marker from '../../../../images/marker.png'
import MyDiv from './mapFilter.style'

const Placeholder = styled(MenuItem)(({theme}) => ({
  '&.MuiMenuItem-root': {
    display: 'none',
  },
}))

const OPTIONS = {
  streetViewControl: false,
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

const CustomMenuItem = styled(MenuItem)(({theme}) => ({
  '&.MuiMenuItem-root': {
    backgroundColor: '#ffffff',
    fontFamily: 'Proxima Nova',
    fontSize: '14px',
    fontWeight: '600',
    color: '#000000',
  },

  '&.MuiMenuItem-root:nth-child(2)': {
    marginTop: '-8px',
  },
}))

const buttonStyle = {
  backgroundColor: '#f0cb47',
  color: '#fff',
  fontSize: '16px',
  fontWeight: '500',
  fontFamily: 'Proxima Nova',
  textTransform: 'capitalize',
  border: '1px solid transparent',
  height: '32px',
  width: '90%',
}

const boxStyle = {
  textAlign: 'center',
  margin: '8px',
}

const distance = [
  {
    id: 1,
    label: '500m',
    value: 500,
  },
  {
    id: 2,
    label: '1km',
    value: 1000,
  },
  {
    id: 3,
    label: '2km',
    value: 2000,
  },
  {
    id: 4,
    label: '3km',
    value: 3000,
  },
  {
    id: 5,
    label: '4km',
    value: 4000,
  },
  {
    id: 6,
    label: '5km',
    value: 5000,
  },
]
const MapFilter = (props) => {
  const {t} = useTranslation()
  const [data, setData] = useState()

  useEffect(() => {
    setData(props.filteredTeachers?.slice(0, 15))
  }, [props.filteredTeachers])

  useEffect(() => {
    props.actions.getSummaryAction()
  }, [])

  const handleChange = (e, value) => {
    const startIndex = value * 15 - 15
    const lastIndex = value * 15
    setData(props.filteredTeachers?.slice(startIndex, lastIndex))
  }

  return (
    <MyDiv>
      {props.masterState?.getTeacherSummary?.loading && (
        <div>
          <Loader />
        </div>
      )}
      <Grid className="main_grid" container>
        <Grid item md={3} className={props.show ? 'd-none' : '-100 overflow'}>
          <Box className="filter_wrapper">
            <CustomButton
              onClick={props.handleMenu}
              className="nav_btn"
              title={t('Categories')}
            />
            {props.openMenu && (
              <div className="menu_container">
                <Box className="menu_wrapper">
                  <Box
                    sx={{
                      display: 'flex',
                      columnGap: '20px',
                      alignItems: 'center',
                      margin: '10px',
                    }}
                  >
                    <CustomButton
                      title="Close"
                      className="btn-close"
                      onClick={props.handleMenu}
                    />
                    <CustomButton
                      onClick={props.handleSubmit}
                      title="View Results"
                      className="btn-green"
                    />
                    <Box className="selected_items">
                      {Object.keys(props.valueListItem)?.map((value) => {
                        return (
                          <Typography key={value}>
                            {props.valueListItem[value]}
                            { Object.keys(props.valueListItem).indexOf(value) < Object.keys(props.valueListItem).length - 1 ? ',' : null}
                          </Typography>
                        )
                      })}
                    </Box>
                  </Box>
                  <Grid container className="category_list">
                    {props?.categoryList?.map((item) => {
                      return (
                        <Grid
                          item
                          md={2}
                          className="menu_box"
                          key={item.id}
                        >
                          <Typography
                            sx={{
                              fontFamily: 'Arial',
                              fontSize: '18px',
                              fontWeight: '400',
                            }}
                          >
                            {item.category_name}
                          </Typography>
                          <Divider
                            sx={{
                              width: '150px',
                              backgroundColor: '#FFFFFF',
                            }}
                          />
                          <Box mt={2}>
                            {item.admin_sub_category?.map((subItem) => {
                              return (
                                <Box className="" key={subItem.category_id}>
                                  <ListItemButton
                                    onClick={props.onSelectButton(
                                      subItem.sub_category_name,
                                      subItem.id
                                    )}
                                    className="subctegory_items"
                                  >
                                    {subItem.sub_category_name}
                                  </ListItemButton>
                                </Box>
                              )
                            })}
                          </Box>
                        </Grid>
                      )
                    })}
                  </Grid>
                </Box>
              </div>
            )}
            <Box className="text_box">
              <CustomTextBox
                onChange={props.handleSearch}
                value={props.searchName}
                fieldLabel="Search"
                className="search"
                startIcon={<SearchIcon />}
              />
            </Box>
          </Box>
          <Box className="user_count">
            {props.filteredTeachers?.length === 0 && (
              <Typography className="count">
                {props.filteredTeachers?.length} {t('Results')}
              </Typography>
            )}
            {props.filteredTeachers?.length === 1 && (
              <Typography className="count">
                {props.filteredTeachers?.length} {t('Result')}
              </Typography>
            )}
            {props.filteredTeachers?.length >= 2 && (
              <Typography className="count">
                {props.filteredTeachers?.length} {t('Results')}
              </Typography>
            )}
            <IconButton onClick={props.hideSidebar}>
              <ArrowBackIosNewIcon />
            </IconButton>
          </Box>
          {data?.map((item, index) => {
            return (
              // eslint-disable-next-line prefer-template
              <Box
                className={
                  props.selectedLocation ? 'active_list_users' : 'list_users'
                }
                onClick={() => props.handleClickProfile(item.teacher_id)}
                key={index}
                component={Link}
                target="_blank"
                to={'/teacher/' + item?.name + item?.surname + item?.teacher_id}
              >
                <Typography className="username">
                  {item?.name} {item?.surname}
                </Typography>
                <Box className="inner_list">
                  <div className="profile_img">
                    <img src={item.profile_image} />
                  </div>
                  <Box className="list_items">
                    <Box className="list_row">
                      <Typography className="list_label">
                        {t('Category')}:
                      </Typography>
                      <Typography className="list_data">
                        {item?.sub_category_name}
                      </Typography>
                    </Box>
                    <Box className="list_row">
                      <Typography className="list_label">
                        {t('Address')}:
                      </Typography>
                      <Typography className="list_data">
                        {item?.address}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )
          })}
          <Box className="user_count">
            <Pagination
              count={Math.ceil(props.filteredTeachers?.length / 15)}
              onChange={handleChange}
            />
          </Box>
        </Grid>
        <Grid item md={props.show ? 12 : 9} className="h-100">
          <Box className="map_container">
            <IconButton
              onClick={props.hideSidebar}
              className={!props.show ? 'd-none' : 'expand'}
            >
              <ArrowForwardIosIcon />
            </IconButton>
            <Box className="filters_box">
              <Select open={props.selectIsOpen} className="menu_items" multiple value={[0]}>
                <Placeholder value={0}>For Ages</Placeholder>
                {props?.filterData?.provided_to?.map((item) => {
                  return (
                    <CustomMenuItem
                      key={item.provided_to_id}
                      value={item.provided_to_id}
                    >
                      <FormControlLabel value={item.provided_to_id} name="providedTo" control={<Checkbox onChange={(e) =>
                        props.handleCheckBox(e)
                      } checked={props.filterProvidedTo[item?.provided_to_id]}
                      />} label={
                        <Typography variant="body1" style={{fontSize: '0.9rem'}}>
                          {item?.provided_to}
                        </Typography>
                      }
                      />
                    </CustomMenuItem>
                  )
                })}
                <Divider />
                <Box style={boxStyle}>
                  <CustomButton
                    onClick={props.handleSubmit}
                    style={buttonStyle}
                    title="Apply"
                  />
                </Box>
              </Select>
              <Select className="menu_items" multiple value={[0]}>
                <Placeholder value={0}>Availability</Placeholder>
                {props?.filterData?.lot?.map((item, index) => {
                  return (
                    <CustomMenuItem key={index}>
                      <FormControlLabel value={item} name="slot" control={<Checkbox onChange={(e) =>
                        props.handleCheckBox(e)
                      } checked={props.filterSlot[item]}
                      />} label={
                        <Typography variant="body1" style={{fontSize: '0.9rem'}}>
                          {item}
                        </Typography>
                      }
                      />
                    </CustomMenuItem>
                  )
                })}
                <Divider />
                <Box style={boxStyle}>
                  <CustomButton
                    onClick={props.handleSubmit}
                    style={buttonStyle}
                    title="Apply"
                  />
                </Box>
              </Select>
              <Select className="menu_items" multiple value={[0]}>
                <Placeholder value={0}>Day</Placeholder>
                {props?.filterData?.days.map((item) => {
                  return (
                    <CustomMenuItem key={item?.day_id}>
                      <FormControlLabel value={item?.day} name="day" control={<Checkbox onChange={(e) =>
                        props.handleCheckBox(e)
                      } checked={props.filterDay[item?.day]}
                      />} label={
                        <Typography variant="body1" style={{fontSize: '0.9rem'}}>
                          {item.day}
                        </Typography>
                      }
                      />
                    </CustomMenuItem>
                  )
                })}
                <Divider />
                <Box style={boxStyle}>
                  <CustomButton
                    onClick={props.handleSubmit}
                    style={buttonStyle}
                    title="Apply"
                  />
                </Box>
              </Select>
              <Select className="menu_items" multiple value={[0]}>
                <Placeholder value={0}>Where</Placeholder>
                {props?.filterData?.provided_via?.map((item) => {
                  return (
                    <CustomMenuItem
                      key={item.provided_to_id}
                      value={item.provided_to_id}
                    >
                      <FormControlLabel value={item.provided_to_id} name="providedType" control={<Checkbox onChange={(e) =>
                        props.handleCheckBox(e)
                      } checked={props.filterProvidedType[item?.provided_to_id]}
                      />} label={
                        <Typography variant="body1" style={{fontSize: '0.9rem'}}>
                          {item?.provided_via}
                        </Typography>
                      }
                      />
                    </CustomMenuItem>
                  )
                })}
                <Divider />
                <Box style={boxStyle}>
                  <CustomButton
                    onClick={props.handleSubmit}
                    style={buttonStyle}
                    title="Apply"
                  />
                </Box>
              </Select>
              <Select className="menu_items" multiple value={[0]}>
                <Placeholder value={0}>Type</Placeholder>
                {props?.filterData?.provided_member_type?.map((item) => {
                  return (
                    <CustomMenuItem
                      key={item.member_type_id}
                      value={item.member_type_id}
                    >
                      <FormControlLabel value={item.member_type_id} name="providedWhere" control={<Checkbox onChange={(e) =>
                        props.handleCheckBox(e)
                      } checked={props.filterProvidedWhere[item?.member_type_id]}
                      />} label={
                        <Typography variant="body1" style={{fontSize: '0.9rem'}}>
                          {item?.member_type}
                        </Typography>
                      }
                      />
                    </CustomMenuItem>
                  )
                })}
                <Divider />
                <Box style={boxStyle}>
                  <CustomButton
                    onClick={props.handleSubmit}
                    style={buttonStyle}
                    title="Apply"
                  />
                </Box>
              </Select>
              <Select className="menu_items" value={[0]} onClose={props.handleSelect} open={props.selectOpen} onOpen={props.handleSelect}>
                <Placeholder value={0}>Distance</Placeholder>
                {distance?.map((item) => {
                  return (
                    <CustomMenuItem
                      key={item.id}
                      value={item.value}
                    >
                      <FormControlLabel value={item.id}
                        control={<Checkbox
                          checked={props.distanceValue?.includes(item.value)}
                          onChange={(e) => props.handleDistanceCheck(e, item.value)}
                        />} label={
                          <Typography variant="body1" style={{fontSize: '0.9rem'}}>
                            {item?.label}
                          </Typography>
                        }
                      />
                    </CustomMenuItem>
                  )
                })}
                <Divider />
                <Box style={boxStyle}>
                  <CustomButton
                    style={buttonStyle}
                    title="Apply"
                    onClick={props.filterPlacesByDistance}
                  />
                </Box>
                <Divider />
                <Box style={boxStyle}>
                  <CustomButton
                    style={buttonStyle}
                    title="Clear"
                    onClick={props.handleClearDistance}
                  />
                </Box>
              </Select>
              <CustomButton
                style={buttonStyle}
                title="Clear"
                onClick={props.handleClearFilters}
              />
            </Box>
            <GoogleMap
              center={props.center}
              onLoad={props.onLoad}
              onBoundsChanged={props.handleMapPosition}
              mapContainerStyle={props.containerStyle}
              onClick={props.handleMarkerPosition}
              zoom={3}
              options={OPTIONS}
            >
              <Marker position={props.marker} icon={marker} />
              {props.filteredTeachers?.map((item, index) => {
                console.log('itemmm', item)
                return (
                  <MarkerF
                    onClick={props.handleActiveMarker(item.teacher_id)}
                    key={index}
                    position={{
                      lat: parseFloat(item.latitude),
                      lng: parseFloat(item.longitude),
                    }}
                  >
                    {props.theCurrentTeacher && +props.theCurrentTeacher?.latitude ===
                      +item.latitude &&
                    +props.theCurrentTeacher?.longitude ===
                      +item.longitude ? (
                        <InfoWindowF position={{
                          lat: parseFloat(item.latitude),
                          lng: parseFloat(item.longitude),
                        }} onCloseClick={props.handleInfoWindowClose}
                        >
                          <Box className="list_users2" key={index}>
                            <Box className="inner_list">
                              <img src={props.theCurrentTeacher?.profile_image} />
                              <Box>
                                <Typography className="username">
                                  {props.theCurrentTeacher?.name} {props.theCurrentTeacher?.surname}
                                </Typography>
                                <Typography className="list_data">
                                  {props.theCurrentTeacher?.experience_name}+ years of experience
                                </Typography>
                              </Box>
                            </Box>
                            <Box className="category_box">
                              <Chip
                                label={props.theCurrentTeacher?.sub_category_name}
                                className="category_items"
                              />
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
                                  <Link
                                    target="_blank"
                                    className="view_btn"
                                    to={
                                      '/teacher/' +
                                    props.theCurrentTeacher?.name +
                                    props.theCurrentTeacher?.surname +
                                    props.theCurrentTeacher?.teacher_id
                                    }
                                  >
                                    {t('ViewProfile')}
                                  </Link>
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
                        </InfoWindowF>
                      ) : null}
                  </MarkerF>
                )
              })}
            </GoogleMap>
          </Box>
        </Grid>
      </Grid>
    </MyDiv>
  )
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(MapFilter)
