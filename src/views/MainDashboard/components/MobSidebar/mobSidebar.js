/* eslint-disable no-unused-vars */
import {Email, ErrorOutline, FormatListBulletedOutlined, Home, Newspaper, Close} from '@mui/icons-material'
import {Box, Divider, IconButton, MenuItem} from '@mui/material'
import React from 'react'
import {useTranslation} from 'react-i18next'
import {Link, NavLink, useHistory, useLocation} from 'react-router-dom'
import {CustomButton} from '../../../../components'
import * as routesNames from '../../../../constants/routes'
import {getToken, removeToken} from '../../../../utilities/authUtils'
import MyDiv from './mobSidebar.style'

export default function MobSidebar(props) {
  const {t} = useTranslation()
  const history = useHistory()

  const handleSignUp = () => {
    removeToken('token')
    removeToken('adminToken')
    history.push('/signup')
  }

  return (
    <MyDiv>
      <Box className="main_box" width={200}>
        <IconButton className="close_btn" onClick={props.onClose}><Close /></IconButton>
        <Box onClick={props.onClose}>
          <MenuItem className="flex_menu">
            <Home />
            <NavLink className="link_style" to={routesNames.HOME} style={{textDecoration: 'none'}}>{t('Home')}
            </NavLink>
          </MenuItem>
          <MenuItem className="flex_menu">
            <FormatListBulletedOutlined />
            <NavLink className="link_style" to={routesNames.HOME} style={{textDecoration: 'none'}}>{t('Categories')}
            </NavLink>
          </MenuItem>
          <MenuItem className="flex_menu">
            <Newspaper />
            <Link className="link_style" style={{textDecoration: 'none'}}>{t('Blog')}
            </Link>
          </MenuItem>
          <MenuItem className="flex_menu">
            <Email />
            <NavLink className="link_style" to={routesNames.CONTACT} style={{textDecoration: 'none'}}>{t('ContactUs')}
            </NavLink>
          </MenuItem>
          <Divider />
          <MenuItem className="flex_menu">
            <ErrorOutline />
            <NavLink className="link_style" to={routesNames.CONTACT} style={{textDecoration: 'none'}}>{t('Report')}
            </NavLink>
          </MenuItem>
        </Box>
        {!getToken('token') ? <CustomButton className="signup_btn" onClick={handleSignUp} title={t('signUp')} /> : null}

      </Box>
    </MyDiv>
  )
}
