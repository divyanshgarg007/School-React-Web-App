import React from 'react'
import {Box, MenuItem, Divider} from '@mui/material'
import {NavLink} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import * as routesNames from '../../../../../constants/routes'
import MyDiv from './mobSidebar.style'

const MobSidebar = (props) => {
  const {t} = useTranslation()
  return (
    <MyDiv>
      <Box className="sidebar_wrapper" onClick={props.onClick}>
        <MenuItem className="menuitem">
          <NavLink className="link_names" to={routesNames.DASHBOARD} style={{textDecoration: 'none'}}>{t('Dashboard')}
          </NavLink>
        </MenuItem>
        <MenuItem className="menuitem">
          <NavLink className="link_names" to={routesNames.MYPROFILE} style={{textDecoration: 'none'}}>{t('MyProfile')}
          </NavLink>
        </MenuItem>
        <MenuItem className="menuitem">
          <NavLink className="link_names" to={routesNames.MYLOCATIONS} style={{textDecoration: 'none'}}>{t('MyLocations')}
          </NavLink>
        </MenuItem>
        <MenuItem className="menuitem">
          <NavLink className="link_names" to={routesNames.ABOUTME} style={{textDecoration: 'none'}}>{t('AboutMe')}
          </NavLink>
        </MenuItem>
        <MenuItem className="menuitem">
          <NavLink className="link_names" to={routesNames.MYLESSONS} style={{textDecoration: 'none'}}>{t('MyLessons')}
          </NavLink>
        </MenuItem>
        <MenuItem className="menuitem">
          <NavLink className="link_names" to={routesNames.EDUCATIONS} style={{textDecoration: 'none'}}>{t('Education')}
          </NavLink>
        </MenuItem>
        <MenuItem className="menuitem">
          <NavLink className="link_names" to={routesNames.EXPERIENCE} style={{textDecoration: 'none'}}>{t('Experience')}
          </NavLink>
        </MenuItem>
        <MenuItem className="menuitem">
          <NavLink className="link_names" to={routesNames.SKILLSINTEREST} style={{textDecoration: 'none'}}>{t('Skills&Interests')}
          </NavLink>
        </MenuItem>
        <MenuItem className="menuitem">
          <NavLink className="link_names" to={routesNames.GALLERY} style={{textDecoration: 'none'}}>{t('Gallery')}
          </NavLink>
        </MenuItem>
        <Divider className="menu_divider1" />
        <MenuItem className="menuitem">
          <NavLink className="link_names2" to={routesNames.MESSAGES} style={{textDecoration: 'none'}}>{t('Messages')}
          </NavLink>
        </MenuItem>
        <MenuItem className="menuitem">
          <NavLink className="link_names2" to={routesNames.FEEDBACK} style={{textDecoration: 'none'}}>{t('Feedback')}
          </NavLink>
        </MenuItem>
      </Box>
    </MyDiv>
  )
}

export default MobSidebar
