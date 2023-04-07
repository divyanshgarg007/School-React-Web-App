import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import {Container, Grid, Tab} from '@mui/material'
import {TabContext, TabList} from '@mui/lab'
import {Link, useLocation} from 'react-router-dom'
import * as routesNames from '../../../constants/routes'
import {AuthTopPanel} from '../../../components'
import MyDiv from './admin.style'

const AdminLayout = (props) => {
  // const history = useHistory()
  const location = useLocation()
  const {pathname} = location
  const splitLocation = pathname?.split('/zunpakaloudela/')
  return (
    <MyDiv>
      <CssBaseline />
      <AuthTopPanel />
      <TabContext>
        <Grid container className="mobile_layout">
          <Grid item md={2} className="sidebar-navs">
            <TabList
              orientation="vertical"
              variant="scrollable"
              className="custom-tablist"
              TabIndicatorProps={{
                style: {
                  backgroundColor: '#FFFFFF',
                },
              }}
            >
              <Tab
                label="Dashboard"
                value={routesNames.ADMINDASHBOARD}
                component={Link}
                to={routesNames.ADMINDASHBOARD}
                className={splitLocation[1] === 'dashboard' ? 'active_menu' : 'nav-tabs'}
              />
              <Tab
                label="Sales"
                value={routesNames.SALES}
                component={Link}
                to={routesNames.SALES}
                className={splitLocation[1] === 'sales' ? 'active_menu' : 'nav-tabs'}
              />
              <Tab
                label="Customers"
                value={routesNames.CUSTOMER}
                component={Link}
                to={routesNames.CUSTOMER}
                className={splitLocation[1] === 'customer' ? 'active_menu' : 'nav-tabs'}
              />
              <Tab
                label="Packages"
                value={routesNames.PACKAGES}
                component={Link}
                to={routesNames.PACKAGES}
                className={splitLocation[1] === 'packages' ? 'active_menu' : 'nav-tabs'}
              />
              <Tab
                label="Approvals"
                value={routesNames.APPROVALS}
                component={Link}
                to={routesNames.APPROVALS}
                className={splitLocation[1] === 'approvals' ? 'active_menu' : 'nav-tabs'}
              />
              <Tab
                label="Categories"
                value={routesNames.CATEGORIES}
                component={Link}
                to={routesNames.CATEGORIES}
                className={splitLocation[1] === 'categories' ? 'active_menu' : 'nav-tabs'}
              />
              <Tab
                label="Registrations"
                value={routesNames.REGISTRATIONS}
                component={Link}
                to={routesNames.REGISTRATIONS}
                className={splitLocation[1] === 'registrations' ? 'active_menu' : 'nav-tabs'}
              />
            </TabList>
          </Grid>
          <Grid item md={10} className="right_grid">
            <Container maxWidth={false} className="admin_layout">
              <div className="site-admin-background">
                {props.children}
              </div>
            </Container>
            {/* {props.children} */}
          </Grid>
        </Grid>
      </TabContext>
    </MyDiv>
  )
}

export default AdminLayout
