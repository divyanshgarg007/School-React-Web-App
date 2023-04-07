/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
import {TabContext, TabList, TabPanel} from '@mui/lab'
import {Box, FormControl, Grid, MenuItem, Select, Tab, Typography} from '@mui/material'
import {styled} from '@mui/system'
import {Autocomplete, useJsApiLoader} from '@react-google-maps/api'
import React, {lazy, Suspense, useCallback, useEffect, useState} from 'react'
import {isMobile} from 'react-device-detect'
import {useTranslation} from 'react-i18next'
import {connect, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {AuthTopPanel, CustomButton, CustomTextBox, Loader, SnackBar} from '../../components'
import {ActionCreators} from '../../redux/actions'
import MyDiv from './homePageFilter.style'

const CategoriesTab = lazy(() => import('./components/CategoriesTab'))
const DistanceTab = lazy(() => import('./components/DistanceTab'))
const FiltersTab = lazy(() => import('./components/FiltersTab'))
const ListviewTab = lazy(() => import('./components/ListviewTab'))
const MapFilter = lazy(() => import('./components/MapFilter'))
const MapViewTab = lazy(() => import('./components/MapViewTab'))
const RegistrationCard = lazy(() => import('./components/RegistrationCard'))
const CategoryCard = lazy(() => import('./components/CategoryCard'))
const AuthBottomPanelMain = lazy(() => import('../MainDashboard/components/AuthBottomPanelMain'))
const AuthTopPanelMain = lazy(() => import('../MainDashboard/components/AuthTopPanelMain'))

const containerStyle = {
  width: '100%',
  height: '90vh',
}

const ITEM_HEIGHT = 60
const Menu = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5,
    },
  },
}
const CustomMenuItem = styled(MenuItem)(({theme}) => ({
  '&.MuiMenuItem-root': {
    backgroundColor: '#EDF2F7',
    fontFamily: 'Proxima Nova',
    fontSize: '15px',
    fontWeight: '600',
    color: '#000000',
  },
  '&.MuiMenuItem-root:nth-child(2)': {
    borderTop: '3px solid #1D3160',
    marginTop: '-8px',
  },
  '&.MuiMenuItem-root:last-child': {
    marginBottom: '-8px',
  },
}))

const Placeholder = styled(MenuItem)(({theme}) => ({
  '&.MuiMenuItem-root': {
    display: 'none',
  },
}))

const center = {lat: 35.1351148, lng: 32.9527879}

const LIBRARIES = ['places']


const HomePageFilter = (props) => {
  const {t} = useTranslation()
  const history = useHistory()
  const [value, setValue] = useState('1')
  const [teacherSummary, setTeacherSummary] = useState([])
  const [categoryList, setCategoryList] = useState()
  const [filterData, setFilterData] = useState()
  const [filterSubcategory, setfilterSubCategory] = useState({})
  const [filterProvidedTo, setFilterProvidedTo] = useState({})
  const [filterProvidedType, setFilterProvidedType] = useState({})
  const [filterProvidedWhere, setFilterProvidedWhere] = useState({})
  const [filterDay, setFilterDay] = useState({})
  const [filterSlot, setFilterSlot] = useState({})
  const [teacherCardList, setTeacherCardList] = useState()
  const [marker, setMarker] = useState(null)
  const [distanceValue, setDistanceValue] = useState([])
  const [selectOpen, setSelectOpen] = useState(false) // needed because we have a single select which we don't want to close
  const [valueListItem, setValueListItem] = useState([])
  const [openMenu, setOpenMenu] = useState(false)
  const masterState = useSelector((state) => state.masterState)
  const categoryState = useSelector((state) => state.categoryState)
  const globalState = useSelector((state) => state.globalState)
  const [updateBounds, setUpdateBounds] = useState(false)
  const [hasChangedBounds, setHasChangedBounds] = useState(false)
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [currentTeacherList, setCurrentTeacherList] = useState([])

  const [show, setShow] = useState(false)
  const [teacherList, setTeacherList] = useState(null) // this will be the computed list after the user drags the map
  const [filteredTeachers, setFilteredTeachers] = useState([]) // this list will be displayed in the drawer
  const [selectedLocation, setSelectedLocation] = useState(null) // this will be used to show the popup
  const [currentIndex, setCurrentIndex] = useState(null)
  const [map, setMap] = useState(null) // set the map state to get the bounds of the map
  const [searchName, setSearchName] = useState('')
  const [searchCat, setSearchCat] = useState('')
  const [hasNext, setHasNext] = useState(true)
  const [hasPrevious, setHasPrevious] = useState(true)
  const [theCurrentTeacher, setCurrentTeacher] = useState(null)
  const [categoryValue, setCategoryValue] = useState('')
  const [searchResult, setSearchResult] = useState('Result: none')
  const [location, setLocation] = useState()
  const [country, setCountry] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [mapFlag, setMapFlag] = useState(false)

  const [allSubCategories, setAllSubCategories] = useState([])
  const [allSubCategoriesCopy, setAllSubCategoriesCopy] = useState([])

  useEffect(() => {
    props.actions.getTeacherAction()
    // props.actions.getSummaryAction()
    props.actions.getListAction()
    props.actions.getTeachersCardListAction()
    props.actions.getCategoryAction()
  }, [])

  useEffect(() => {
    setTeacherCardList(masterState?.getTeachersCardList?.data?.data?.payload)
  }, [masterState?.getTeachersCardList?.data?.data?.payload])
  useEffect(() => {
    setCategoryList(categoryState?.getCategorySubCategory?.data)
  }, [categoryState?.getCategorySubCategory?.data])

  useEffect(() => {
    setTeacherSummary(masterState?.getTeacherSummary?.data)
  }, [masterState?.getTeacherSummary?.data])

  useEffect(() => {
    setFilterData(globalState?.getList?.data?.payload)
  }, [globalState?.getList?.data])

  useEffect(() => {
    if (masterState?.getTeacherSummary?.data?.length === 0) {
      setMessage('No Teachers found.')
      setStatus('error')
    }
  }, [masterState?.getTeacherSummary?.data])

  useEffect(() => {
    const subCategories = categoryList?.flatMap((category) => category.admin_sub_category)
    setAllSubCategories(subCategories)
    setAllSubCategoriesCopy(subCategories)
  }, [categoryList])


  useEffect(() => {
    if (filteredTeachers?.length > 0) {
      setMapFlag(true)
    }
  }, [filteredTeachers])

  useEffect(() => {
    location?.address_components?.map((item) => {
      if (item.types[0] === 'country') {
        setCountry(item.long_name)
      } else if (item.types[0] === 'administrative_area_level_1') {
        setState(item.long_name)
      } else if (item.types[0] === 'locality') {
        setCity(item.long_name)
      }
    })
  }, [location?.address_components])

  useEffect(() => {
    if (!selectedLocation) return
    const filteredList = filteredTeachers?.filter(
      (item) =>
        +item.latitude === +theCurrentTeacher?.latitude &&
        +item.longitude === +theCurrentTeacher?.longitude
    )
    const nextIndex = (currentIndex + 1) % filteredList.length
    const previousIndex =
      (currentIndex - 1 + filteredList.length) % filteredList.length
    if (
      filteredList[currentIndex]?.longitude ===
        filteredList[nextIndex]?.longitude &&
      filteredList[currentIndex]?.latitude === filteredList[nextIndex]?.latitude && nextIndex < currentIndex
    ) {
      setHasNext(true)
    } else {
      setHasNext(false)
    }
    if (
      filteredList[currentIndex]?.longitude ===
        filteredList[previousIndex]?.longitude &&
      filteredList[currentIndex]?.latitude ===
        filteredList[previousIndex]?.latitude &&
      nextIndex > currentIndex
    ) {
      setHasPrevious(true)
    } else {
      setHasPrevious(false)
    }
  }, [selectedLocation, theCurrentTeacher])

  useEffect(() => {
    if (!masterState?.getTeacherSummary?.data) return
    setTeacherList(masterState?.getTeacherSummary?.data)
    if (currentTeacherList?.length > 0) {
      const filteredList = masterState?.getTeacherSummary?.data?.filter(
        (obj1) =>
          currentTeacherList.some((obj2) => obj1.teacher_id === obj2.teacher_id)
      )
      setFilteredTeachers(filteredList)
      setCurrentTeacherList([])
      if (isMobile) setUpdateBounds(true)
      handleMapBounds()
      return
    }
    setFilteredTeachers(masterState?.getTeacherSummary?.data)
    handleMapBounds()
  }, [masterState?.getTeacherSummary?.data])


  const handleChange = (event, newValue) => {
    hideSlider()
    setValue(newValue)
  }

  const handleClearDistance = () => {
    setDistanceValue([])
    let payload = `subCategory=${categoryValue}&country=${country === undefined ? '' : country}&state=${state === undefined ? '' : state}&city=${city === undefined ? '' : city}`
    if ((categoryValue) && (country || state || city)) {
      props.actions.getSummaryAction(payload)
    } else {
      setMessage('Please select all fileds.')
      setStatus('error')
    }
  }
  const handleClearFilters = () => {
    setfilterSubCategory({})
    setFilterProvidedTo({})
    setFilterProvidedType({})
    setFilterProvidedWhere({})
    setFilterDay({})
    setFilterSlot({})
    let payload = `subCategory=${categoryValue}&country=${country === undefined ? '' : country}&state=${state === undefined ? '' : state}&city=${city === undefined ? '' : city}`
    if ((categoryValue) && (country || state || city)) {
      props.actions.getSummaryAction(payload)
    }
  }


  const handleCheckBox = (e, id) => {
    switch (e.target.name) {
      case 'subCategory':
        setfilterSubCategory({...filterSubcategory, [id]: e.target.checked})
        break
      case 'providedTo':
        setFilterProvidedTo({...filterProvidedTo, [e.target.value]: e.target.checked})
        break
      case 'providedType':
        setFilterProvidedType({...filterProvidedType, [e.target.value]: e.target.checked})
        break
      case 'providedWhere':
        setFilterProvidedWhere({...filterProvidedWhere, [e.target.value]: e.target.checked})
        break
      case 'day':
        setFilterDay({...filterDay, [e.target.value]: e.target.checked})
        break
      case 'slot':
        setFilterSlot({...filterSlot, [e.target.value]: e.target.checked})
        break
      default:
        break
    }
  }

  const onSelectButton = (name, id) => (event) => {
    event.preventDefault()
    const updatedValueListItem = {...valueListItem}
    if (updatedValueListItem[id] === name) {
      delete updatedValueListItem[id]
    } else {
      updatedValueListItem[id] = name
    }
    setValueListItem(updatedValueListItem)
  }

  const handleMenu = () => {
    setOpenMenu(!openMenu)
    setValueListItem([])
  }


  const handleClickProfile = (id) => {
    let obj = {
      teacher_id: id,
    }
    props.actions.postProfileClickCountAction(obj)
  }

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: LIBRARIES,
  })

  const onLoad = useCallback((map) => setMap(map), [])

  const handleMapBounds = () => {
    setHasChangedBounds(false)
    if (updateBounds) {
      if (!map) return
      if (!filteredTeachers || filteredTeachers.length === 0) {
        setHasChangedBounds(false)
        return
      }
      const bounds = new window.google.maps.LatLngBounds(center)
      filteredTeachers.forEach(({latitude, longitude}) => bounds.extend({lat: +latitude, lng: +longitude}))
      map.fitBounds(bounds)
      setHasChangedBounds(true)
    }
  }


  const handleSubmit = () => {
    setValue('1')// display map on phone
    setCurrentTeacherList(filteredTeachers)
    // getting all the keys that have the value true and converting the returned array to a string
    let subCategories = Object.keys(filterSubcategory).filter((key) => filterSubcategory[key] === true).toString()
    let providedTo = Object.keys(filterProvidedTo).filter((key) => filterProvidedTo[key] === true).toString()
    let providedType = Object.keys(filterProvidedType).filter((key) => filterProvidedType[key] === true).toString()
    let providedWhere = Object.keys(filterProvidedWhere).filter((key) => filterProvidedWhere[key] === true).toString()
    let day = Object.keys(filterDay).filter((key) => filterDay[key] === true)
    let slot = Object.keys(filterSlot).filter((key) => filterSlot[key] === true)

    //using the returned string above and concatenating the param name to it
    subCategories = subCategories && `&subCategory=${subCategories}`
    providedTo = providedTo && `&ages=${providedTo}`
    providedType = providedType && `&providedType=${providedType}`
    providedWhere = providedWhere && `&providedWhere=${providedWhere}`
    day = day && `&day=${day}`
    slot = slot && `&lot=${slot}`
    const params = `subCategory=${Object.keys(valueListItem).toString()}`
    //concatenating all the parameters above into one string

    const payload = `${params === 'subCategory=' ? subCategories : params}${providedTo}${providedType}${providedWhere}${day.toLowerCase()}${slot.toLowerCase()}&country=${country === undefined ? '' : country}&state=${state === undefined ? '' : state}&city=${city === undefined ? '' : city}`
    props.actions.getSummaryAction(payload)
    setOpenMenu(false)
  }


  const handleMapPosition = () => {
    if (!map) return
    if (distanceValue.length > 0) return
    if (hasChangedBounds) return
    const ne = map.getBounds().getNorthEast(),
      sw = map.getBounds().getSouthWest()

    setFilteredTeachers(
      teacherList?.filter(
        (item) =>
          parseFloat(item.latitude) >= sw?.lat() &&
          parseFloat(item.latitude) <= ne?.lat() &&
          parseFloat(item.longitude) >= sw?.lng() &&
          parseFloat(item.longitude) <= ne?.lng()
      )
    )
  }


  const handleDistanceCheck = (e, value) => {
    setSelectOpen(true)
    if (isMobile) {
      setSelectOpen(false)
    }
    setDistanceValue([value])
  }


  const filterPlacesByDistance = () => {
    if (isMobile) {
      setValue('1')
    }
    if (marker === null) {
      setMessage('Please set the marker first.')
      setStatus('error')
    }
    if (!isMobile) {
      setSelectOpen(!selectOpen)
    }
    if (!isLoaded) return
    const circle = new window.google.maps.Circle({
      center: marker || center, // we will provide the center by default if we do not have a marker.
      radius: distanceValue[0], // If we do not have a radius set by the user, use a custom value if needed.
    })
    const filteredPlaces = teacherList?.filter((place) => {
      return circle.getBounds()?.contains({lat: parseFloat(place.latitude), lng: parseFloat(place.longitude)})
    })
    setFilteredTeachers(filteredPlaces) // this will be the updated list according to the distance filter
  }


  const handleMarkerPosition = (e) => {
    setMarker({lat: e.latLng.lat(), lng: e.latLng.lng()})
  }

  const handleActiveMarker = (teacherId) => (e) => {
    if (teacherId === selectedLocation) {
      return setSelectedLocation(null)
    }
    const currentTeacher = filteredTeachers.filter((item) => +item.teacher_id === +teacherId)
    const index = filteredTeachers?.findIndex(
      (m) => +m.latitude === +currentTeacher[0].latitude &&
      +m.longitude === +currentTeacher[0].longitude
    )
    setCurrentIndex(index)
    setCurrentTeacher(currentTeacher[0])
    // setSelectedLocation(teacherId)
  }

  const handleNextClick = () => {
    const filteredList = filteredTeachers?.filter(
      (item) =>
        +item.latitude === +theCurrentTeacher?.latitude &&
            +item.longitude === +theCurrentTeacher?.longitude
    )
    const nextIndex = (currentIndex + 1) % filteredList.length
    setCurrentIndex(nextIndex)

    setSelectedLocation(filteredList[nextIndex].teacher_id)
    setCurrentTeacher(filteredList[nextIndex])
  }

  const handlePreviousClick = () => {
    const filteredList = filteredTeachers?.filter(
      (item) =>
        +item.latitude === +theCurrentTeacher?.latitude &&
            +item.longitude === +theCurrentTeacher?.longitude
    )
    const previousIndex =
      (currentIndex - 1 + filteredList.length) % filteredList.length
    setCurrentIndex(previousIndex)
    setSelectedLocation(filteredList[previousIndex].teacher_id)
    setCurrentTeacher(filteredList[previousIndex])
  }

  const hideSlider = () => {
    setSelectedLocation(null)
  }

  const hideSidebar = () => {
    setShow(!show)
  }

  const handleSearch = (e) => {
    const searchValue = e.target.value
    setSearchName(searchValue)
    if (searchValue !== '') {
      const result = teacherList.filter((item) => {
        return item.name.toLowerCase().startsWith(searchValue.toLowerCase()) || item.surname.toLowerCase().startsWith(searchValue.toLowerCase())
      })
      setFilteredTeachers(result)
      setUpdateBounds(true)
      handleMapBounds()
    } else {
      setFilteredTeachers(teacherList)
    }
  }

  if (!isLoaded) return

  const handleSelect = () => {
    if (!isMobile) {
      setSelectOpen(!selectOpen)
    }
  }

  const data = false


  const handleSnackBarClose = () => {
    setMessage('')
    setStatus('')
    props.actions.cleanUpUserState()
  }

  const handleSearchSubCat = (e) => {
    const searchValue = e.target.value
    setSearchCat(searchValue)
    if (searchValue !== '') {
      const result = allSubCategoriesCopy.filter((item) => {
        return item.sub_category_name.toLowerCase().startsWith(searchValue.toLowerCase())
      })
      setAllSubCategories(result)
    } else {
      setAllSubCategories(allSubCategoriesCopy)
    }
  }

  const handleInfoWindowClose = () => {
    setCurrentTeacher(null)
  }

  const onPlaceChanged = () => {
    if (searchResult != null) {
      const place = searchResult.getPlace()
      setLocation(place)
    }
  }

  const onPlaceLoad = (autocomplete) => {
    setSearchResult(autocomplete)
  }

  const handleSubCategoryChange = (event) => {
    setCategoryValue(event.target.value)
  }

  const handleWebSearch = () => {
    let payload = `subCategory=${categoryValue}&country=${country === undefined ? '' : country}&state=${state === undefined ? '' : state}&city=${city === undefined ? '' : city}`
    if ((categoryValue) || (country || state || city)) {
      props.actions.getSummaryAction(payload)
    } else if (!(categoryValue) || (country || state || city)) {
      setMessage('Please choose all fileds.')
      setStatus('error')
    }
  }

  return (
    <MyDiv>
      {(masterState?.getTeacherSummary?.loading ||
        masterState?.getTeacherData?.loading ||
        masterState?.getCategorySubCategory?.loading) && (
        <div>
          <Loader />
        </div>
      )}
      <Suspense fallback={<Loader />}>
        <AuthTopPanelMain
          setSearchName={setSearchName}
          handleSearch={handleSearch}
          searchName={searchName}
          categoryList={categoryList}
          title1={t('Home')}
          title2={t('allCategories')}
          title3={t('Blog')}
          title4={t('ContactUs')}
          title5={t('Login')}
          title6={t('Register')}
        />
        {data === true && (
          <AuthTopPanel
            handleSearch={handleSearch}
            searchName={searchName}
            setSearchName={setSearchName}
          />
        )}
        <Box className="main_box1">
          {mapFlag === true ? (
            <>
              {!isMobile && (
                <MapFilter
                  handleClearFilters={handleClearFilters}
                  handleClearDistance={handleClearDistance}
                  handleInfoWindowClose={handleInfoWindowClose}
                  openMenu={openMenu}
                  valueListItem={valueListItem}
                  onSelectButton={onSelectButton}
                  handleMenu={handleMenu}
                  currentIndex={currentIndex}
                  handleNextClick={handleNextClick}
                  hasNext={hasNext}
                  hasPrevious={hasPrevious}
                  theCurrentTeacher={theCurrentTeacher}
                  handlePreviousClick={handlePreviousClick}
                  filterPlacesByDistance={filterPlacesByDistance}
                  setSelectedLocation={setSelectedLocation}
                  selectedLocation={selectedLocation}
                  handleActiveMarker={handleActiveMarker}
                  teacherList={teacherList}
                  containerStyle={containerStyle}
                  show={show}
                  hideSidebar={hideSidebar}
                  center={center}
                  onLoad={onLoad}
                  handleMapPosition={handleMapPosition}
                  handleMarkerPosition={handleMarkerPosition}
                  marker={marker}
                  searchName={searchName}
                  filteredTeachers={filteredTeachers}
                  handleSearch={handleSearch}
                  handleClickProfile={handleClickProfile}
                  handleCheckBox={handleCheckBox}
                  handleSubmit={handleSubmit}
                  masterState={masterState}
                  teacherSummary={teacherSummary}
                  filterData={filterData}
                  categoryList={categoryList}
                  filterSubcategory={filterSubcategory}
                  filterProvidedTo={filterProvidedTo}
                  filterProvidedType={filterProvidedType}
                  filterProvidedWhere={filterProvidedWhere}
                  filterDay={filterDay}
                  filterSlot={filterSlot}
                  handleDistanceCheck={handleDistanceCheck}
                  distanceValue={distanceValue}
                  selectOpen={selectOpen}
                  handleSelect={handleSelect}
                />
              )}
            </>
          ) : (
            <>
              <Box className="home_box">
                <Typography className="web_heading">
                  Your journey to success starts with local teachers on
                  Academbee
                </Typography>
                <Box className="flex_bar" mt={1}>
                  <FormControl fullWidth className="select_box">
                    <Select
                      value={categoryValue || 0}
                      onChange={handleSubCategoryChange}
                      className="mu_data"
                      MenuProps={{...Menu, autoFocus: false}}
                    >
                      <CustomTextBox
                        onKeyDown={(e) => {
                          e.stopPropagation()
                        }}
                        autoFocus
                        value={searchCat}
                        onChange={handleSearchSubCat}
                        fieldLabel="Search"
                      />
                      <Placeholder value={0}>Select Category</Placeholder>
                      {allSubCategories?.map((data) => {
                        return (
                          <CustomMenuItem key={data.id} value={data.id}>
                            {data.sub_category_name}
                          </CustomMenuItem>
                        )
                      })}
                    </Select>
                    <div style={{color: 'red', fontSize: '12px'}}>
                      {props?.errorData?.language?.[0]}
                    </div>
                  </FormControl>
                  <Box className="w-40">
                    <Autocomplete
                      className="auto_complete"
                      onPlaceChanged={onPlaceChanged}
                      onLoad={onPlaceLoad}
                    >
                      <input type="text" placeholder="Country or City" />
                    </Autocomplete>
                  </Box>
                  <Box className="btn_search_main">
                    <CustomButton
                      onClick={handleWebSearch}
                      title="Search"
                      className="btn-search"
                    />
                  </Box>
                </Box>
                <Typography className="web_subheading1">
                  Are you a teacher?
                </Typography>
                <Typography className="web_subheading2">
                  Share your passion for teaching and make a positive impact on
                  students by registering on Academbee with a few simple step
                </Typography>
                <CustomButton
                  onClick={() => history.push('/signup')}
                  className="register_btn"
                  title="Register now"
                />
              </Box>
              <Box className="popular_box" mt={7}>
                <Typography className="text_title">{t('regText2')}</Typography>
                <CategoryCard teacherCardList={teacherCardList} />
                <Box className="btn_box">
                  <CustomButton
                    title={t('allCategoriesText')}
                    className="btn_style"
                  />
                </Box>
              </Box>
              <Box className="popular_box" mt={5}>
                <Typography className="text_title">{t('regText')}</Typography>
                <RegistrationCard
                  handleClickProfile={handleClickProfile}
                  teacherSummary={teacherSummary}
                />
              </Box>
              <Grid className="img_grid" container md={12}>
                <Box className="text_img">
                  <Box className="width_style">
                    <Typography className="img_text1">
                      {t('imageText1')}
                    </Typography>
                    <Typography className="img_text2">
                      {t('imageText2')}
                    </Typography>
                    <Typography className="img_text3">
                      {t('imageText3')}
                    </Typography>
                    <CustomButton
                      title={t('Register')}
                      className="btn_style2"
                    />
                  </Box>
                </Box>
              </Grid>
            </>
          )}
        </Box>
        {mapFlag === true ? (
          <Box className="tab_box">
            {isMobile ? (
              <TabContext value={value}>
                <TabList
                  className="tab_container"
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons
                  allowScrollButtonsMobile
                  TabIndicatorProps={{
                    style: {
                      display: 'none',
                      backgroundColor: '#FFFFFF',
                    },
                  }}
                >
                  {value === '1' ? (
                    <Tab
                      className="tab_names"
                      label={t('ListView')}
                      value="2"
                    />
                  ) : (
                    <Tab className="tab_names" label={t('MapView')} value="1" />
                  )}
                  <Tab
                    className="tab_names"
                    label={t('Categories')}
                    value="3"
                  />
                  <Tab className="tab_names" label={t('Filters')} value="4" />
                  <Tab className="tab_names" label={t('Distance')} value="5" />
                </TabList>
                <TabPanel value="2">
                  <ListviewTab filteredTeachers={filteredTeachers} />
                </TabPanel>
                <TabPanel value="1" className="no-space-mobile">
                  <MapViewTab
                    hideSlider={hideSlider}
                    marker={marker}
                    handleMarkerPosition={handleMarkerPosition}
                    filteredTeachers={filteredTeachers}
                    center={center}
                    onLoad={onLoad}
                    handleActiveMarker={handleActiveMarker}
                    handleMapPosition={handleMapPosition}
                    containerStyle={containerStyle}
                    filterData={filterData}
                    teacherList={teacherList}
                    selectedLocation={selectedLocation}
                    setSelectedLocation={setSelectedLocation}
                    distanceValue={distanceValue}
                    selectOpen={selectOpen}
                    handleSelect={handleSelect}
                    theCurrentTeacher={theCurrentTeacher}
                    hasNext={hasNext}
                    hasPrevious={hasPrevious}
                    handlePreviousClick={handlePreviousClick}
                    handleNextClick={handleNextClick}
                    setCurrentTeacher={setCurrentTeacher}
                  />
                </TabPanel>
                <TabPanel value="3">
                  <CategoriesTab
                    handleCheckBox={handleCheckBox}
                    filterSubcategory={filterSubcategory}
                    categoryList={categoryList}
                  />
                </TabPanel>
                <TabPanel value="4">
                  <FiltersTab
                    handleCheckBox={handleCheckBox}
                    filterProvidedType={filterProvidedType}
                    filterProvidedTo={filterProvidedTo}
                    filterProvidedWhere={filterProvidedWhere}
                    filterData={filterData}
                    filterSlot={filterSlot}
                  />
                </TabPanel>
                <TabPanel value="5">
                  <DistanceTab
                    handleCheckBox={handleCheckBox}
                    filterData={filterData}
                    filterPlacesByDistance={filterPlacesByDistance}
                    handleDistanceCheck={handleDistanceCheck}
                  />
                </TabPanel>
              </TabContext>
            ) : null}
            {!(value === '1' || value === '2' || value === '5') && (
              <Box className="filter_actions">
                <CustomButton
                  className="btn_submit"
                  onClick={handleSubmit}
                  title="Submit"
                />
              </Box>
            )}
          </Box>
        ) : (
          <>
            {isMobile ? (
              <Box className="home_box">
                <Typography className="web_heading">
                  Your journey to success starts with local teachers on
                  Academbee
                </Typography>
                <Box className="flex_bar" mt={1}>
                  <FormControl fullWidth className="select_box">
                    <Select
                      value={categoryValue || 0}
                      onChange={handleSubCategoryChange}
                      className="mu_data"
                      MenuProps={{...Menu, autoFocus: false}}
                    >
                      <Placeholder value={0}>Select Category</Placeholder>
                      {allSubCategories?.map((data) => {
                        return (
                          <CustomMenuItem key={data.id} value={data.id}>
                            {data.sub_category_name}
                          </CustomMenuItem>
                        )
                      })}
                    </Select>
                    <div style={{color: 'red', fontSize: '12px'}}>
                      {props?.errorData?.language?.[0]}
                    </div>
                  </FormControl>
                  <Box className="w-40">
                    <Autocomplete
                      className="auto_complete"
                      onPlaceChanged={onPlaceChanged}
                      onLoad={onPlaceLoad}
                    >
                      <input type="text" placeholder="Country or City" />
                    </Autocomplete>
                  </Box>
                  <Box className="btn_search_main">
                    <CustomButton
                      onClick={handleWebSearch}
                      title="Search"
                      className="btn-search"
                    />
                  </Box>
                </Box>
                <Typography className="web_subheading1">
                  Are you a teacher?
                </Typography>
                <Typography className="web_subheading2">
                  Share your passion for teaching and make a positive impact on
                  students by registering on Academbee with a few simple step
                </Typography>
                <CustomButton
                  onClick={() => history.push('/signup')}
                  className="register_btn"
                  title="Register now"
                />
                <Box className="category_box">
                  <Typography className="text_title">
                    {t('regText2')}
                  </Typography>
                  <CategoryCard teacherCardList={teacherCardList} />
                </Box>
                <Box className="category_box">
                  <Typography className="text_title">{t('regText')}</Typography>
                  <RegistrationCard
                    handleClickProfile={handleClickProfile}
                    teacherSummary={teacherSummary}
                  />
                </Box>
              </Box>
            ) : null}
          </>
        )}
        {!mapFlag === true ? <AuthBottomPanelMain /> : null}
      </Suspense>
      <SnackBar
        message={message}
        severity={status}
        open={message?.length > 0}
        close={handleSnackBarClose}
      />
    </MyDiv>
  )
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(HomePageFilter)
