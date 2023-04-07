/* eslint-disable no-unused-vars */
import {AppBar, Box, Drawer, IconButton, MenuItem, Select, Toolbar} from '@mui/material'
import {Logout, Menu as MenuIcon, Person, Search} from '@mui/icons-material'
import React, {useEffect, useState} from 'react'
import {bindActionCreators} from 'redux'
import {Link, useHistory, useLocation} from 'react-router-dom'
import {connect} from 'react-redux'
import {useTranslation} from 'react-i18next'
import ReactFlagsSelect from 'react-flags-select'
import {styled} from '@mui/system'
import {CustomButton, CustomTextBox} from '../Inputs'
import {getToken, removeToken} from '../../utilities/authUtils'
import {ActionCreators} from '../../redux/actions'
import MobSidebar from '../../views/MainDashboard/components/MobSidebar'
import logo from '../../images/logo.png'
import i18n from '../../i18n'
import MyDiv from './AuthTopPanel.style'


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
const AuthTopPanel = (props) => {
  const {t} = useTranslation()
  const [sidebar, setSidebar] = useState(false)
  const location = useLocation()
  const [selectedFlag, setSelectedFlag] = useState()
  const [lang, setLang] = useState(localStorage.getItem('lang'))
  const history = useHistory()
  const [popUp, setPopUp] = useState(false)
  const [selected, setSelected] = useState('')
  const isLoggedInAdmin = getToken('adminToken') || getToken('token')


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

  const handleLogout = () => {
    removeToken('adminToken')
    removeToken('token')
    props.actions.logOutUser()
    history.push('/login')
  }

  const handleSidebarOpen = () => {
    setSidebar(!sidebar)
  }


  const isLoggedIn = getToken('token') || getToken('adminToken')

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

  return (
    <MyDiv>
      <AppBar position="static" className="app_bar">
        <Toolbar className="tool_bar">
          <Box className="flex_box">
            <IconButton onClick={handleSidebarOpen}><MenuIcon className="icn_btn" /></IconButton>
            <Drawer anchor="left" open={sidebar} onClose={handleSidebarOpen} transitionDuration={500}>
              <MobSidebar onClose={handleSidebarOpen} />
            </Drawer>
            <Link onClick={handleLink}><img src={logo} /></Link>
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
                  className="flag_style"
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
            <><Box className="mobile_btn">
              {popUp && <CustomTextBox
                onChange={props.handleSearch}
                value={props.searchName}
                fieldLabel="Search"
                className="text_search"
              />}
              <Box className="flex_box">
                <ReactFlagsSelect
                  className="flag_style"
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
            </Box><Select value={lang} className="menu_item" onChange={handleLang} MenuProps={Menus}>
              {languages.map((item) => {
                return (
                  <CustomMenuItem value={item.key} key={item.id}>{item.title}</CustomMenuItem>
                )
              })}
            </Select></>
          }
          {isLoggedInAdmin && location?.pathname !== '/login' ?
            <Box className="mobile_hide">
              <CustomButton onClick={handleLogout} type="submit" className="custom_button1" title={t('Logout')} />
            </Box>
            : null }
        </Toolbar>
      </AppBar>
    </MyDiv>
  )
}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(AuthTopPanel)
