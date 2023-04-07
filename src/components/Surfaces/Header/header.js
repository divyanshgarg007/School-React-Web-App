/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import {Box, MenuItem, Divider, Typography} from '@mui/material'
import {Link, NavLink, useHistory, useLocation} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import {useTranslation} from 'react-i18next'
import {AccountCircle, Article, Chat, Email, Image, List, ListAlt, LocationOn, School, Work} from '@mui/icons-material'
import {connect, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as routesNames from '../../../constants/routes'
import {ActionCreators} from '../../../redux/actions'
import logo from '../../../images/logoDark.png'
import MyDiv from './header.style'


const Header = (props) => {

  const history = useHistory()
  const {t} = useTranslation()
  const location = useLocation()
  const {pathname} = location
  const splitLocation = pathname?.split('/')


  const handleLink = () => {
    history.push('/')
  }
  return (
    <MyDiv>
      <Box className="sidebar_wrapper">
        <Link onClick={handleLink}><img src={logo} /></Link>
        {/* <Divider className="menu_divider2" /> */}
        <MenuItem className={splitLocation[1] === 'dashboard' ? 'active_menu' : 'menuitem text-font'}>
          <HomeIcon />
          <NavLink className="link_names" to={routesNames.DASHBOARD} style={{textDecoration: 'none'}}>
            {t('Dashboard')}
          </NavLink>
        </MenuItem>
        <MenuItem className={splitLocation[1] === 'myprofile' ? 'active_menu' : 'menuitem text-font'}>
          <AccountCircle />
          <NavLink className="link_names" to={routesNames.MYPROFILE} style={{textDecoration: 'none'}}>{t('MyProfile')}
          </NavLink>
        </MenuItem>
        <MenuItem className={splitLocation[1] === 'mylocations' ? 'active_menu' : 'menuitem text-font'}>
          <LocationOn />
          <NavLink className="link_names" to={routesNames.MYLOCATIONS} style={{textDecoration: 'none'}}>{t('MyLocations')}
          </NavLink>
        </MenuItem>
        <MenuItem className={splitLocation[1] === 'aboutme' ? 'active_menu' : 'menuitem text-font'}>
          <Article />
          <NavLink className="link_names" to={routesNames.ABOUTME} style={{textDecoration: 'none'}}>{t('AboutMe')}
          </NavLink>
        </MenuItem>
        <MenuItem className={splitLocation[1] === 'mylessons' ? 'active_menu' : 'menuitem text-font'}>
          <ListAlt />
          <NavLink className="link_names" to={routesNames.MYLESSONS} style={{textDecoration: 'none'}}> {t('MyLessons')}
          </NavLink>
        </MenuItem>
        <MenuItem className={splitLocation[1] === 'educations' ? 'active_menu' : 'menuitem text-font'}>
          <School />
          <NavLink className="link_names" to={routesNames.EDUCATIONS} style={{textDecoration: 'none'}}>{t('Education')}
          </NavLink>
        </MenuItem>
        <MenuItem className={splitLocation[1] === 'experience' ? 'active_menu' : 'menuitem text-font'}>
          <Work />
          <NavLink className="link_names" to={routesNames.EXPERIENCE} style={{textDecoration: 'none'}}>{t('Experience')}
          </NavLink>
        </MenuItem>
        <MenuItem className={splitLocation[1] === 'skills&interest' ? 'active_menu' : 'menuitem text-font'}>
          <List />
          <NavLink className="link_names" to={routesNames.SKILLSINTEREST} style={{textDecoration: 'none'}}>{t('Skills&Interests')}
          </NavLink>
        </MenuItem>
        <MenuItem className={splitLocation[1] === 'gallery' ? 'active_menu' : 'menuitem text-font'}>
          <Image />
          <NavLink className="link_names" to={routesNames.GALLERY} style={{textDecoration: 'none'}}>{t('Gallery')}
          </NavLink>
        </MenuItem>
        <Divider className="menu_divider1" />
        <MenuItem className={splitLocation[1] === 'messages' ? 'active_menu' : 'menuitem text-font'}>
          <Chat />
          <NavLink className="link_names2" to={routesNames.MESSAGES} style={{textDecoration: 'none'}}>{t('Messages')}
          </NavLink>
        </MenuItem>
        <MenuItem className={splitLocation[1] === 'feedback' ? 'active_menu' : 'menuitem text-font'}>
          <Email />
          <NavLink className="link_names2" to={routesNames.FEEDBACK} style={{textDecoration: 'none'}}>{t('Feedback')}
          </NavLink>
        </MenuItem>
      </Box>
    </MyDiv>
  )
}


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(Header)

