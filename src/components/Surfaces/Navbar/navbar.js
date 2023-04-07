/* eslint-disable max-len */
/* eslint-disable prefer-template */
import React, {useState, useEffect} from 'react'
import {ArrowDropDown, PersonAddAltSharp, Menu as MenuIcon, CloudUpload, Chat, SendToMobile} from '@mui/icons-material'
import {Drawer, AppBar, Badge, Box, IconButton, Toolbar, Grid, MenuItem, Menu, Typography, Divider, Select} from '@mui/material'
import styled from 'styled-components'
import {Link, useHistory} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {bindActionCreators} from 'redux'
import {connect, useSelector} from 'react-redux'
import {isMobile} from 'react-device-detect'
import moment from 'moment'
import SnackbarComponent from '../../SnackBar/snackbar'
import {CustomButton} from '../../Inputs'
import i18n from '../../../i18n'
import {getToken, removeToken} from '../../../utilities/authUtils'
import {ActionCreators} from '../../../redux/actions'
import logo from '../../../images/logo.png'
import Loader from '../../Loader'
import MyDiv from './navbar.style'
import MobSidebar from './components/MobSidebar'
import PublishDialog from './components/PublishDialog'


const ITEM_HEIGHT = 60
const Menus = {
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
    color: '#000000',
    display: 'flex',
    justifyContent: 'space-between',
  },
  '&.MuiMenuItem-root:nth-child(1)': {
    borderTop: '3px solid #1D3160',
    marginTop: '-8px',
  },
  '&.MuiMenuItem-root:last-child': {
    marginBottom: '-8px',
  },
}))


const languages = [
  {
    id: 1,
    title: 'En',
    value: 'English',
    key: 'EN',

  },
  {
    id: 2,
    title: 'Ελ',
    value: 'Ελληνικά',
    key: 'GK',

  },
]
const StyledMenuItem = styled(MenuItem)(() => ({
  '&.MuiMenuItem-root': {
    backgroundColor: '#1D3160',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontFamily: 'Proxima Nova',
    fontWeight: '600',
    fontSize: '16px',
    characterSpacing: '0',
    lineSpacing: '19px',
  },
  '&.MuiMenuItem-root:hover': {
    backgroundColor: '#1D3160',
    textAlign: 'center',
  },
}))
const StyledMenuItem2 = styled(MenuItem)(() => ({
  '&.MuiMenuItem-root': {
    'backgroundColor': '#FFFFFF',
    'justifyContent': 'start',
    'color': '#000000',
    'fontFamily': 'Proxima Nova',
    'fontWeight': '400',
    'fontSize': '16px',
    '&:hover': {
      backgroundColor: '#fbfcfd',
    },
  },
}))

const StyledBox = styled(Box)(() => ({
  'paddingTop': '8px',
  'paddingBottom': '8px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'backgroundColor': '#FFFFFF',
  'color': '#000000',
  'fontFamily': 'Proxima Nova',
  'fontWeight': '400',
  'fontSize': '16px',
  '&:hover': {
    backgroundColor: '#fbfcfd',
  },
}))

const Navbar = (props) => {
  const [openDialog, setOpenDialog] = useState(false)
  const {t} = useTranslation()
  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorElMobile, setAnchorElMobile] = useState(null)
  const open = Boolean(anchorEl)
  const openMobile = Boolean(anchorElMobile)
  const [sidebar, setSidebar] = useState(false)
  const [flag, setFlag] = useState(false)
  const [message, setMessage] = useState('')
  const [messageLength, setMessageLength] = useState('')
  const [status, setStatus] = useState('')
  const [name, setName] = useState()
  const history = useHistory()
  const [lang, setLang] = useState(localStorage.getItem('lang'))
  // const [openRenewSubscription, setOpenRenewSubscription] = useState(false)
  // const handleClick = () => {
  //   setOpenRenewSubscription(!openRenewSubscription)
  // }

  const masterState = useSelector((state) => state.masterState)
  const globalState = useSelector((state) => state?.globalState)
  const paymentState = useSelector((state) => state.paymentState)
  const userPost = useSelector((state) => state.userDataState)
  const socialData = useSelector((state) => state.socialMediaListState)
  const languagePost = useSelector((state) => state.languagesListState)
  const locationPost = useSelector((state) => state.locationDataState)
  const lessonsPost = useSelector((state) => state.lessonsDataState)
  const educationPost = useSelector((state) => state.educationDataState)
  const experiencePost = useSelector((state) => state.experienceDataState)
  const skillsInterestsPost = useSelector((state) => state.skillsInterestsDataState)
  const galleryState = useSelector((state) => state.galleryState)
  const userId = masterState?.getDetailsData?.data?.[0]?.user_id

  const expiryDate = masterState?.getIsPublish?.data?.expiry_date

  useEffect(() => {
    if (userPost?.postUserProfileData?.data?.status === 'success' ||
     userPost?.postAboutMe?.data?.status === 'success' ||
     socialData?.postSocialMediaList?.data?.status === 'success' ||
     languagePost?.postLanguagesList?.data?.status === 'success' ||
     locationPost?.postLocation?.data?.status === 'success' ||
     userPost?.postAboutMe?.data?.status === 'success' ||
     lessonsPost?.postLessons.data?.status === 'success' ||
     educationPost?.postEducation?.data?.status === 'success' ||
     experiencePost?.postExperience?.data?.status === 'success' ||
     skillsInterestsPost?.postSkillsInterests?.data?.status === 'success' ||
     galleryState?.postCoverImage?.data?.status === 'success' ||
     galleryState?.postVideoLink?.data?.status === 'success' ||
     galleryState?.postImageGallery?.data?.status === 'success') {
      setFlag(true)
      localStorage.setItem('flag', JSON.stringify(true))
    }
  }, [userPost,
    socialData,
    languagePost,
    locationPost,
    lessonsPost,
    educationPost,
    experiencePost,
    skillsInterestsPost,
    galleryState])

  useEffect(() => {
    const storedFlag = localStorage.getItem('flag')
    if (storedFlag) {
      setFlag(JSON.parse(storedFlag))
    }
  }, [])

  useEffect(() => {
    props.actions.getListAction()
  }, [])

  useEffect(() => {
    props.actions.getMessageAction()
  }, [])

  useEffect(() => {
    if (getToken('token')) {
      props.actions.getDetailsAction()
    }
  }, [])

  const getLanguage = localStorage.getItem('lang')
  useEffect(() => {
    localStorage.setItem('lang', getLanguage)
    if (getLanguage === 'EN') {
      i18n.changeLanguage('en')
    } else if (getLanguage === 'GK') {
      i18n.changeLanguage('el')
    }
  }, [getLanguage])

  useEffect(() => {
    setMessageLength(globalState?.getMessage?.data?.data?.payload?.unread)
  }, [globalState?.getMessage?.data?.data?.payload])

  useEffect(() => {
    setName(masterState?.getDetailsData?.data?.userDetails)
  }, [masterState?.getDetailsData?.data?.userDetails])

  useEffect(() => {
    if (masterState?.postTeacherData?.data?.status === 'success') {
      setMessage(masterState?.postTeacherData?.data?.message)
      setStatus('success')
    } else {
      setMessage(masterState?.postTeacherData?.data?.message)
      setStatus('error')
    }
  }, [masterState?.postTeacherData?.data?.status])

  useEffect(() => {
    if (paymentState?.postRenewSubscription?.data?.data?.meta?.status === 'success') {
      setMessage(paymentState?.postRenewSubscription?.data?.data?.meta?.message)
      setStatus('success')
    } else if (paymentState?.postRenewSubscription?.data?.data?.meta?.status === 'failure') {
      setMessage(paymentState?.postRenewSubscription?.data?.data?.meta?.message)
      setStatus('error')
    }
  }, [paymentState?.postRenewSubscription?.data?.data])


  const handleDialog = () => {
    setOpenDialog(!openDialog)
  }

  const handleClickDialog = () => {
    setOpenDialog(!openDialog)
  }

  const handleMenuMobile = (event) => {
    setAnchorElMobile(event.currentTarget)
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleCloseMobile = () => {
    setAnchorElMobile(null)
  }

  const handleSidebarOpen = () => {
    setSidebar(true)
  }

  const handleLanguage = (lng) => {
    if (lng === 'EN') {
      i18n.changeLanguage('en')
    } else if (lng === 'GK') {
      i18n.changeLanguage('el')
    }
    localStorage.setItem('lang', lng)
  }


  const handleLogout = () => {
    removeToken('token')
    removeToken('adminToken')
    props.actions.logOutUser()
    history.push('/')
  }

  const handleSubmit = (item) => {
    setOpenDialog(!openDialog)
    if (item === true) {
      let teacherData = {
        user_type: 'teacher',
        user_id: userId,
      }
      props.actions.postTeacherAction(teacherData)
      setFlag(false)
      localStorage.removeItem('flag')
      localStorage.setItem('messageForPublish', '')
    }
    history.push('/dashboard')
  }

  const handleSnackBarClose = () => {
    setMessage('')
    setStatus('')
    props.actions.cleanUpUserState()
  }

  const handleBellIconClick = () => {
    history.push('/messages')
  }


  const handleSubscriptionPush = () => {
    history.push('/subscription')
    if (!isMobile) {
      setAnchorEl(null)
    } else {
      setAnchorElMobile(null)
    }
  }

  const handleFeedback = () => {
    history.push('/feedback')
    if (!isMobile) {
      setAnchorEl(null)
    } else {
      setAnchorElMobile(null)
    }
  }

  const handleNotify = () => {
    history.push('/messages')
    if (!isMobile) {
      setAnchorEl(null)
    } else {
      setAnchorElMobile(null)
    }
  }

  const getDaysToExpire = (date) => {
    let current = moment().startOf('day')
    let given = moment(date, 'YYYY-MM-DD')
    return !!((moment.duration(given.diff(current)).asDays() > 0) && (moment.duration(given.diff(current)).asDays() < 31))
  }

  const handleLink = () => {
    history.push('/')
  }

  const handleClick = () => {
    history.push('/subscription')
  }

  const handleLang = (e) => {
    const selectedLang = e.target.value
    setLang(selectedLang)
    i18n.changeLanguage(selectedLang)
    localStorage.setItem('lang', selectedLang)
  }

  const styleTypography = {
    fontSize: '16px', fontWeight: '600', fontFamily: 'Proxima Nova',
    padding: '11px',
    border: '2px solid #667082',
    borderRadius: '50%',
    lineHeight: '18px',
  }

  const flexBox = {
    display: 'flex',
    columnGap: '10px',
    padding: '3px 15px',
  }
  const linkStyle = {
    textDecoration: 'none',
    color: '#000000',
    fontFamily: 'Proxima Nova',
    fontSize: '15px',
    fontWeight: '400',
  }

  const mainHeadings = {fontSize: '16px', fontWeight: '600', fontFamily: 'Proxima Nova', color: '#000000'}

  return (
    <MyDiv>
      {(masterState?.postTeacherData?.loading) && (masterState?.getDetailsData?.loading) &&
      <div>
        <Loader />
      </div>
      }
      <SnackbarComponent
        message={message}
        severity={status}
        open={message?.length > 0}
        close={handleSnackBarClose}
      />
      <Box className="nav_bar">
        <AppBar elevation={0} className="navbar_wrapper" position="static">
          <Toolbar>
            <Grid container spacing={3}>
              <Grid item md={6}>
                <Box sx={{display: 'flex'}}>
                  <CustomButton startIcon={<PersonAddAltSharp />} onClick={handleClickDialog} className="button_green" title={t('Publish')} />
                  {flag ? <Typography className="text_publish">{t('messageForPublish')}</Typography> : null}
                </Box>
              </Grid>
              <Grid item md={6} className="right_bar">
                {getDaysToExpire(expiryDate) &&
                  <>
                    <Typography className="text_renew">{t('renewText')}</Typography>
                    <CustomButton onClick={handleClick} className="button_dark" title={t('Renew')} />
                    <Divider orientation="vertical" />
                  </>
                }
                <Select value={lang} className="menu_item" onChange={handleLang} MenuProps={Menus}>
                  {languages.map((item) => {
                    return (
                      <CustomMenuItem value={item.key} key={item.id}>{item.title}</CustomMenuItem>
                    )
                  })}
                </Select>
                <IconButton onClick={handleBellIconClick}>
                  <Badge badgeContent={messageLength} color="success">
                    <Chat sx={{color: '#000000'}} />
                  </Badge>
                </IconButton>
                {name?.map((item, index) => {
                  return (
                    <><CustomButton key={index} onClick={handleMenu} className="user_name" title={item?.name} endIcon={<ArrowDropDown />} />
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                        PaperProps={{
                          elevation: 0,
                          sx: {
                            'overflow': 'visible',
                            'filter': 'drop-shadow(0px 2px 25px #00000029)',
                            'mt': 0,
                            '& .MuiAvatar-root': {
                              width: 32,
                              height: 32,
                              ml: -0.5,
                              mr: 1,
                            },
                            '&:before': {
                              content: '""',
                              display: 'block',
                              position: 'absolute',
                              top: 0,
                              right: 14,
                              width: 10,
                              height: 10,
                              bgcolor: 'background.paper',
                              transform: 'translateY(-50%) rotate(45deg)',
                              zIndex: 0,
                            },
                          },
                        }}
                      >
                        <Typography ml={2} mb={1} style={mainHeadings}>Account</Typography>
                        <Box style={flexBox}>
                          <Box>
                            <Typography style={styleTypography}>{item?.name?.substring(0, 1)}{item?.surname?.substring(0, 1)}</Typography>
                          </Box>
                          <Box>
                            <Typography style={mainHeadings}>{item?.name}{' '}{item?.surname}</Typography>
                            <Typography style={{fontSize: '14px', fontWeight: '500', color: '#667082', fontFamily: 'Proxima Nova'}}>{item?.email}</Typography>
                          </Box>
                        </Box>
                        <Divider style={{marginTop: '8px'}} />
                        <StyledBox>
                          <Typography style={linkStyle} target="_blank" component={Link} to={'/teacher/' + item?.name + item?.surname + item?.user_id}>View Profile as a Visitor</Typography>
                          <SendToMobile style={{width: '2rem', height: '1rem'}} />
                        </StyledBox>
                        <Divider />
                        <Typography ml={2} style={mainHeadings}>Account Details</Typography>
                        <Box pl={2}>
                          <StyledMenuItem2 onClick={() => history.push('/invoice')}>Billing</StyledMenuItem2>
                          <StyledMenuItem2 onClick={handleSubscriptionPush}>Subscription</StyledMenuItem2>
                        </Box>
                        <Divider />
                        <StyledMenuItem2 onClick={handleLogout}>{t('Logout')}</StyledMenuItem2>
                      </Menu></>
                  )
                })}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Mobile Header */}

      <Box className="side_bar">
        <Grid container xs={12} sm={12} className="grid_wrapper">
          <Grid className="grid_items" item xs={1} sm={1}>
            <IconButton onClick={handleSidebarOpen}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={sidebar} onClose={() => setSidebar(false)} transitionDuration={500}>
              <Box>
                <MobSidebar onClick={() => setSidebar(false)} />
              </Box>
            </Drawer>
          </Grid>
          <Grid className="grid_items" item xs={8} sm={8}>
            <Link onClick={handleLink}><img className="logo_style" src={logo} /></Link>
            {flag ? <Typography className="text_publish">{t('messageForPublish')}</Typography> : null}
          </Grid>
          <Grid className="grid_items" item xs={1} sm={1}>
            <IconButton onClick={handleClickDialog}>
              <CloudUpload className="icn_clr" />
            </IconButton>
          </Grid>
          {name?.map((item, index) => {
            return (
              <Grid className="grid_items" item xs={2} sm={2} key={index}>
                <Box className="avatar_box">
                  {!name?.profile_image ?
                    <img src={name[0]?.profile_image} className="avatar_cam" onClick={handleMenuMobile} /> :
                    <Typography className="avatar_cam title_cam" onClick={handleMenuMobile} >
                      {name[0]?.name?.substring(0, 1)}{name[0]?.surname?.substring(0, 1)}</Typography>
                  }
                </Box>
                <Menu
                  id="basic-menu-mobile"
                  anchorEl={anchorElMobile}
                  open={openMobile}
                  onClose={handleCloseMobile}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <StyledMenuItem className="menuitem_name" >{item?.name}{' '}{item?.surname}</StyledMenuItem>
                  <StyledMenuItem2 onClick={() => handleLanguage('EN')}>{t('ChangeLangEN')}</StyledMenuItem2>
                  <StyledMenuItem2 onClick={() => handleLanguage('GK')}>{t('ChangeLangEL')}</StyledMenuItem2>
                  <StyledMenuItem2 target="_blank" component={Link} to={'/teacher/' + item?.name + item?.surname + item?.user_id} >{t('MyProfile')}</StyledMenuItem2>
                  <StyledMenuItem2 onClick={handleSubscriptionPush}>{t('SubscriptionDetails')}</StyledMenuItem2>
                  <StyledMenuItem2 onClick={() => history.push('/invoice')}>{t('Invoice')}</StyledMenuItem2>
                  <StyledMenuItem2 onClick={handleFeedback}>{t('Feedback')}</StyledMenuItem2>
                  <StyledMenuItem2 onClick={handleNotify}>{t('Notifications')}</StyledMenuItem2>
                  <StyledMenuItem2 onClick={handleLogout}>{t('Logout')}</StyledMenuItem2>
                </Menu>
              </Grid>
            )
          })}
        </Grid>
      </Box>
      <PublishDialog expiryDate={expiryDate} getDaysToExpire={getDaysToExpire} handleSubmit={handleSubmit} openDialog={openDialog} handleDialog={handleDialog} handleClickDialog={handleClickDialog} />
      {/* <RenewDialog handleRenewSubscription={handleRenewSubscription} openRenewSubscription={openRenewSubscription} handleClick={handleClick} /> */}
    </MyDiv>
  )
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(Navbar)

