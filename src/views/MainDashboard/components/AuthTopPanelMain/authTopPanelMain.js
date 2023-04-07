/* eslint-disable no-unused-vars */
import {Close, Logout, Menu as MenuIcon, Person, Search} from '@mui/icons-material'
import {AppBar, Box, createTheme, Divider, Drawer, Grid, IconButton, Link, ListItemButton, Menu, MenuItem, Select, ThemeProvider, Toolbar, Typography} from '@mui/material'
import React, {useEffect, useState} from 'react'
import {NavLink, useHistory, useLocation} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect, useSelector} from 'react-redux'
import {useTranslation} from 'react-i18next'
import {styled} from '@mui/system'
import ReactFlagsSelect from 'react-flags-select'
import MobSidebar from '../MobSidebar'
import {CustomButton, CustomTextBox} from '../../../../components/Inputs'
import {getToken, removeToken} from '../../../../utilities/authUtils'
import {ActionCreators} from '../../../../redux/actions'
import * as routesNames from '../../../../constants/routes'
import logo from '../../../../images/logo.png'
import i18n from '../../../../i18n'
import MyDiv from './authTopPanelMain.style'

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
const AuthTopPanelMain = (props) => {
  const {t} = useTranslation()
  const [sidebar, setSidebar] = useState(false)
  const [selectedFlag, setSelectedFlag] = useState()
  const history = useHistory()
  const [lang, setLang] = useState(localStorage.getItem('lang'))
  const location = useLocation()
  const [popUp, setPopUp] = useState(false)
  const {pathname} = location
  const splitLocation = pathname?.split('/')
  const [selected, setSelected] = useState('')
  const isLoggedIn = getToken('token') || getToken('adminToken')

  useEffect(() => {
    props.actions.getSummaryAction()
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
    localStorage.setItem('lang', getLanguage)
    if (getLanguage === 'EN') {
      i18n.changeLanguage('en')
      localStorage.setItem('lang', 'EN')
      setSelectedFlag('US')
    } else if (getLanguage === 'GK') {
      i18n.changeLanguage('el')
      localStorage.setItem('lang', 'GK')
      setSelectedFlag('GR')
    }
  }, [getLanguage])


  const handleSidebarOpen = () => {
    setSidebar(!sidebar)
  }
  const handleLogout = () => {
    removeToken('token')
    removeToken('adminToken')
    props.actions.logOutUser()
    history.push('/login')
  }

  const handleLink = () => {
    history.push('/')
  }

  const handlePopUp = () => {
    setPopUp(!popUp)
    props.setSearchName('')
  }

  const handleLang = (e) => {
    const selectedLang = e.target.value
    setLang(selectedLang)
    i18n.changeLanguage(selectedLang)
    localStorage.setItem('lang', selectedLang)
  }


  const handleFlagChange = (lng) => {
    if (lng === 'US') {
      i18n.changeLanguage('en')
      localStorage.setItem('lang', 'EN')
      setSelectedFlag('US')
    } else if (lng === 'GR') {
      i18n.changeLanguage('el')
      localStorage.setItem('lang', 'GK')
      setSelectedFlag('GR')
    }
    setSelected(lng)
  }

  const handleMyProfile = () => {
    if (getToken('adminToken')) {
      history.push('/zunpakaloudela')
    } else if (getToken('token')) {
      history.push('/dashboard')
    }
  }


  return (
    <MyDiv>
      <AppBar elevation={0} position="static" className="app_bar">
        <Toolbar className="tool_bar">
          <Box className="btn_flex">
            <IconButton onClick={handleSidebarOpen}><MenuIcon className="icn_btn" /></IconButton>
            <Drawer anchor="left" open={sidebar} onClose={handleSidebarOpen} transitionDuration={500}>
              <MobSidebar onClose={handleSidebarOpen} />
            </Drawer>
            <Link onClick={handleLink}><img src={logo} /></Link>
          </Box>
          <Box className="btn_gap">
            <MenuItem className={splitLocation[1] === 'home' ? 'active_menu' : 'main-menu'}>
              <NavLink className="link_names" to={routesNames.HOME} style={{textDecoration: 'none'}}>{props.title1}
              </NavLink>
            </MenuItem>
            <MenuItem className={splitLocation[1] === 'blog' ? 'active_menu' : 'main-menu'}>
              <Link className="link_names" style={{textDecoration: 'none'}}>{props.title3}
              </Link>
            </MenuItem>
            <MenuItem className={splitLocation[1] === 'contact' ? 'active_menu' : 'main-menu'}>
              <NavLink className="link_names" to={routesNames.CONTACT} style={{textDecoration: 'none'}}>{props.title4}
              </NavLink>
            </MenuItem>
          </Box>
          <Box className="btn_gap">
            {isLoggedIn ?
              <>
                <Select value={lang} className="menu_item" onChange={handleLang} MenuProps={Menus}>
                  {languages.map((item) => {
                    return (
                      <CustomMenuItem value={item.key} key={item.id}>
                        {item.title}
                      </CustomMenuItem>
                    )
                  })}
                </Select>
                <CustomButton title={t('Logout')} onClick={handleLogout} className="btn-logout" />
                <CustomButton title={getToken('adminToken') ? t('Dashboard') : t('MyProfile')} onClick={handleMyProfile} className="btn_profile" startIcon={<Person />} />
              </>
              : (
                <>
                  <Select value={lang} className="menu_item" onChange={handleLang} MenuProps={Menus}>
                    {languages.map((item) => {
                      return (
                        <CustomMenuItem value={item.key} key={item.id}>{item.title}</CustomMenuItem>
                      )
                    })}
                  </Select>
                  <CustomButton title={props.title5} onClick={() => history.push('/login')} className="btn-logout" />
                  <CustomButton title={props.title6} onClick={() => history.push('/signup')} className="btn-logout" />
                </>
              )}
          </Box>
          {isLoggedIn ?
            <Box className="mobile_btn">
              {popUp && <CustomTextBox
                onChange={props.handleSearch}
                value={props.searchName}
                fieldLabel="Search"
                className="text_search"
              />}
              <Box className="flex_box">
                <ReactFlagsSelect
                  countries={['GR', 'US']}
                  customLabels={{GR: '', US: ''}} // Remove the labels for menu items
                  selected={selectedFlag}
                  showSelectedLabel={false} // Hide the label for the selected item
                  showOptionLabel={false} // Hide the labels for the menu items
                  onSelect={handleFlagChange}
                />
                <IconButton onClick={handlePopUp}><Search className="icn_btn" /></IconButton>
                <IconButton onClick={handleLogout}><Logout className="icn_btn" /></IconButton>
                <IconButton onClick={() => history.push('/dashboard')}><Person className="icn_btn" /></IconButton></Box>
            </Box> :
            <Box className="mobile_btn">
              {popUp && <CustomTextBox
                onChange={props.handleSearch}
                value={props.searchName}
                fieldLabel="Search"
                className="text_search"
              />}
              <Box className="flex_box">
                <ReactFlagsSelect
                  countries={['GR', 'US']}
                  customLabels={{GR: '', US: ''}} // Remove the labels for menu items
                  selected={selectedFlag}
                  showSelectedLabel={false} // Hide the label for the selected item
                  showOptionLabel={false} // Hide the labels for the menu items
                  onSelect={handleFlagChange}
                />
                <IconButton onClick={handlePopUp}><Search className="icn_btn" /></IconButton>
                <IconButton onClick={() => history.push('/login')}><Person className="icn_btn" /></IconButton>
              </Box>
            </Box>
          }
        </Toolbar>
      </AppBar>
    </MyDiv>
  )
}


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(AuthTopPanelMain)
