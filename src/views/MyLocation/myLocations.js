/* eslint-disable */
/* eslint-disable radix */
import React, {useState, useEffect} from 'react'
import {Add, Delete, Edit, HighlightOff, LocationOnRounded} from '@mui/icons-material'
import {Box, Grid, IconButton, Typography} from '@mui/material'
import {useTranslation} from 'react-i18next'
import {bindActionCreators} from 'redux'
import {connect, useSelector} from 'react-redux'
import {isMobile} from 'react-device-detect'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import {CustomGridCard, CustomNoDataBox, CustomButton, CustomAddNew, SnackBar, Loader} from '../../components'
import {ActionCreators} from '../../redux/actions'
import CustomDialog from '../../components/CustomDialog/customDialog'
import MyDiv from './myLocations.style'
import {LocationEdit, LocationForms} from './components'

const MyLocations = (props) => {

  const {t} = useTranslation()
  const [sidebar, setSidebar] = useState(false)
  const [locationMobileEdit, setLocationMobileEdit] = useState(false)
  const [locationData, setLocationData] = useState({})
  const [locationList, setLocationList] = useState([])
  const [messageForPublish, setMessageForPublish] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [url, setUrl] = useState(null)

  const [marker, setMarker] = useState(null)
  const [errorData, setErrorData] = useState({})
  const [openDialog, setOpenDialog] = useState(false)
  const [deleteId, setDeleteId] = useState()
  const [showContent, setShowContent] = useState(true)

  const locationPost = useSelector((state) => state.locationDataState)
  const locationState = useSelector((state) => state.masterState)
  const globalState = useSelector((state) => state.globalState)

  useEffect(() => {
    setErrorData(locationPost?.postLocation?.error?.errors)
  }, [locationPost?.postLocation?.error?.errors])


  useEffect(() => {
    props.actions.getListAction()
  }, [])

  useEffect(() => {
    if (locationState?.getDetailsData?.data === null) {
      props.actions.getDetailsAction()
    }
  }, [])

  useEffect(() => {
    setLocationList(locationState?.getDetailsData?.data?.userLocation)
  }, [locationState?.getDetailsData?.data])

  // post for snackbar
  useEffect(() => {
    if (locationPost?.postLocation?.data?.status === 'success') {
      setMessage(locationPost?.postLocation?.data?.message)
        setMessageForPublish(t('messageForPublish'))
        localStorage.setItem('messageForPublish', t('messageForPublish'))
      setMessage(locationPost?.postLocation?.data?.message)
      setStatus('success')
      if (!isMobile) {
        setSidebar(!sidebar)
      } else {
        setLocationMobileEdit(!locationMobileEdit)
      }
    } else if (locationPost?.postLocation?.data?.status === 'failure') {
      setMessage(locationPost?.postLocation?.data?.message)
      setStatus('error')
      if (!isMobile) {
        setSidebar(!sidebar)
      } else {
        setLocationMobileEdit(!locationMobileEdit)
      }
    }
  }, [locationPost?.postLocation?.data?.status])

  useEffect(() => {
    if (globalState?.updateOrder?.data?.status === 'success') {
      setMessage(globalState?.updateOrder?.data?.message)
      setStatus('success')
    } else if (globalState?.updateOrder?.data?.status === 'failure') {
      setMessage(globalState?.updateOrder?.data?.message)
      setStatus('error')
    }
  }, [globalState?.updateOrder?.data])

  useEffect(() => {
    if (locationPost?.postDelete?.data?.status === 'success') {
      setMessage(locationPost?.postDelete?.data?.message)
      setStatus('success')
    } else if (locationPost?.postDelete?.data?.status === 'failure') {
      setMessage(locationPost?.postDelete?.data?.message)
      setStatus('error')
    }
  }, [locationPost?.postDelete?.data?.status])


  // handling fields

  const handleChange = (e) => {
    setLocationData({...locationData, [e.target.name]: e.target.value})
  }


  const handleMarkerPosition = (e) => {
    setMarker({lat: e.latLng.lat(), lng: e.latLng.lng()})
  }

  // eslint-disable-next-line no-unused-vars
  const decodeGeolocation = (lat, lng) => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_MAPS_API_KEY}`
    )
      .then((res) => res.json())
  }

  // handling submit button
  const handleSubmit = () => {
    props.actions.postLocationListAction({...locationData, ...marker})
    setMarker(null)
    setUrl()
  }

  // handling cancel
  const handleClick = () => {
    if (!isMobile) {
      setSidebar(!sidebar)
    } else {
      setLocationMobileEdit(!locationMobileEdit)
    }
    setMarker(null)
    setUrl()
    setLocationData({})
    setErrorData({})
  }

  // handling edit icon click
  const handleEdit = (e, item, order) => {
    if (!isMobile) {
      setSidebar(!sidebar)
    } else {
      setLocationMobileEdit(!locationMobileEdit)
    }
    const currentItem = locationList.filter((data) => data?.id === item)
    setLocationData({
      address: currentItem[0]?.address,
      google_map_url: currentItem[0]?.google_map_url,
      location_version_id: item,
      update_id: currentItem[0]?.update_id,
      order: currentItem[0]?.order,
    })
    setMarker({lat: Number(currentItem[0]?.lat), lng: Number(currentItem[0]?.long)})
    setErrorData({})
  }


  // handle delete icon
  const handleDelete = (e, Id) => {
    setOpenDialog(!openDialog)
    const currentItem = locationList.filter((data) => data.id === Id)
    setDeleteId(currentItem[0]?.id)
  }

  const handleConfirm = () => {
    setOpenDialog(!openDialog)
    let obj = {
      data_type: 'location',
      version_id: deleteId,
    }
    props.actions.postDeleteAction(obj)
  }

  // handling snackbar close
  const handleSnackBarClose = () => {
    setMessageForPublish('')
    setMessage('')
    setStatus('')
    props.actions.cleanUpUserState()
  }

  const onDragEnd = (result) => {
    const currentPosition = result.draggableId
    const finalPosition = result.destination.index

    const currentPos = parseInt(currentPosition)
    const finalPos = parseInt(finalPosition)

    const currentVersionId = locationList.filter((item) => item.order === currentPos)
    let obj = {
      data: [
        {
          version_id: currentVersionId[0]?.id,
          order: finalPos,
        },
      ],
    }

    let type = 'location'
    props.actions.updateOrderAction(obj, type)

  }


  const handleChangeSwitch = (e) => {
    setShowContent(!showContent)
  }


  const handleEmptyState = () => {
    if (!isMobile) {
      setSidebar(!sidebar)
    } else {
      setLocationMobileEdit(!locationMobileEdit)
    }
  }

  const msg = localStorage.getItem('messageForPublish')

  return (
    <MyDiv>
      {(locationPost?.postLocation?.loading ||
        locationState?.getDetailsData?.loading) && (
        <div>
          <Loader />
        </div>
      )}
      
      <Box className="location_box">
      {isMobile && <>{messageForPublish ?
          <Typography className="publish_msg">
            {messageForPublish}
          </Typography> : msg ? <Typography className="publish_msg">
            {msg}
          </Typography> : null
        }</>}
        {locationMobileEdit ? (
          <Box>
            <Typography className="page_title">{locationData.location_version_id ? 'Edit location' : t('AddLocation')}</Typography>
            <LocationEdit
              handleChangeSwitch={handleChangeSwitch}
              showContent={showContent}
              marker={marker}
              handleMapPosition={handleMarkerPosition}
              locationData={locationData}
              errorData={errorData}
              handleClick={handleClick}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              url={url}
            />
            <Box className="flex_btn">
              <CustomButton
                onClick={handleSubmit}
                className="btn_submit"
                title={t('Submit')}
              />
              <CustomButton
                onClick={() => setLocationMobileEdit(!locationMobileEdit)}
                className="btn_cancel"
                title={t('Cancel')}
              />
            </Box>
          </Box>
        ) : (
          <Box>
            <Typography className="page_title">{t('Locations')}</Typography>
            {locationList?.length <= 0 ?
              <Box>
                <CustomNoDataBox
                  handleEmptyState={handleEmptyState}
                  className1="icn_btn"
                  startIcon={<LocationOnRounded />}
                  title2={t('NoLocationsFound')}
                  title3={t('AddLocation2')}
                />
              </Box> : <>
                <Box className="card_box">
                  <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                      {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                          {locationList?.map((item) => {
                            return (
                              <Draggable index={item.order} key={item.order.toString()} draggableId={item.order.toString()}>
                                {(provided, snapshot) => (
                                  <CustomGridCard provided={provided}
                                    snapshot={snapshot}
                                  >
                                    <Grid
                                      container
                                      md={12}
                                      xs={12}
                                      sm={12}
                                      className="card_grid"
                                    >
                                      <Grid item md={2} className="icon_text1">
                                        <Typography className="title_txt">
                                          {item?.country_name}, {item?.city_name}
                                        </Typography>
                                      </Grid>
                                      <Grid item md={10} className="icon_text2">
                                        <Typography className="title_txt">
                                          {item?.state_name}
                                        </Typography>
                                        <Box className="flex_icns">
                                          <IconButton
                                            onClick={(e) => handleEdit(e, item?.id, item?.order)}
                                            className="edit_icon"
                                          >
                                            <Edit className="icn_size" />
                                          </IconButton>
                                          <IconButton
                                            onClick={(e) => handleDelete(e, item?.id)}
                                            className="delete_icon"
                                          >
                                            <Delete className="icn_size" />
                                          </IconButton>
                                        </Box>
                                      </Grid>
                                    </Grid>
                                  </CustomGridCard>
                                )}
                              </Draggable>
                            )
                          })}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>
                </Box>
                <Box className="btn_box">
                  <CustomButton
                    title={t('AddNew')}
                    startIcon={<Add />}
                    className="add_btn_mobile"
                    onClick={handleClick}
                  />
                </Box>
                <Box>
                  <CustomButton
                    title={t('AddNew')}
                    startIcon={<Add />}
                    onClick={handleClick}
                    className="add_btn"
                  />
                </Box>
              </>
            }
          </Box>
        )}
      </Box>
      <CustomAddNew
        type="locationSidebar"
        sidebar={sidebar}
        sidebarTitle={locationData.location_version_id ? t('EditLocation') : t('AddLocation')}
        handleClick={handleClick}
      >
        <LocationForms
          handleChangeSwitch={handleChangeSwitch}
          showContent={showContent}
          marker={marker}
          handleMapPosition={handleMarkerPosition}
          locationData={locationData}
          errorData={errorData}
          handleClick={handleClick}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </CustomAddNew>
      <SnackBar
        message={message}
        severity={status}
        open={message?.length > 0}
        close={handleSnackBarClose}
      />
      <CustomDialog
        title={t('Location')}
        handleConfirm={handleConfirm}
        openDialog={openDialog}
        handleDelete={handleDelete}
      />
    </MyDiv>
  )
}


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(MyLocations)
