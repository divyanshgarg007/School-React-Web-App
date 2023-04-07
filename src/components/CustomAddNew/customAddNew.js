/* eslint-disable no-unused-vars */
import React from 'react'
import {styled} from '@mui/system'
import {Drawer, Box, Typography, Select, Divider, MenuItem, Grid, IconButton} from '@mui/material'
import {Close} from '@mui/icons-material'
import MyDiv from './customAddNew.style'

const CustomDrawer = styled(Drawer)(
  ({theme, open}) => ({
    '& .MuiDrawer-paperAnchorRight': {
      width: '100%',
      [theme.breakpoints.up('xs')]: {
        width: '100%',
      },
      [theme.breakpoints.up('sm')]: {
        width: '100%',
      },
      [theme.breakpoints.up('md')]: {
        width: '50%',
      },
    },
  }),
)
const CustomDrawerWidth = styled(Drawer)(
  ({theme, open}) => ({
    '& .MuiDrawer-paperAnchorRight': {
      width: '100%',
      [theme.breakpoints.up('xs')]: {
        width: '100%',
      },
      [theme.breakpoints.up('sm')]: {
        width: '100%',
      },
      [theme.breakpoints.up('md')]: {
        width: '70%',
      },
    },
  }),
)

export default function CustomAddNew(props) {

  const sideDrawer = (anchor) => (
    <MyDiv>
      <Box className="drawer_box">
        <IconButton className="icon_cross" onClick={props.handleClick}><Close /></IconButton>
        {props.type === 'lessonSidebar' &&
          <Grid container>
            <Grid item md={4} className="left_card">
              <Typography mb={1} className="title_text">{props.sidebarTitle}</Typography>
              <Divider style={{background: '#1D3160'}} />
            </Grid>
            <Grid item md={8} className="right_card">
              <Typography mb={1} className="title_text">{props.sidebarTitleDesc}</Typography>
              <Divider style={{background: '#1D3160'}} />
            </Grid>
          </Grid>
          || props.type === 'locationSidebar' && <>
            <Typography mb={1} className="title_text">{props.sidebarTitle}</Typography>
            <Divider style={{background: '#1D3160'}} />
          </>
          || props.type === 'educationSidebar' && <>
            <Typography mb={1} className="title_text">{props.sidebarTitle}</Typography>
            <Divider style={{background: '#1D3160'}} />
          </>
          || !props.type && <>
            <Typography mb={1} className="title_text">{props.sidebarTitle}</Typography><Divider style={{background: '#1D3160'}} /></>
        }
        {props.children}
      </Box>
    </MyDiv>
  )

  return (
    <>
      {!props.type ?
        <CustomDrawer
          anchor="right"
          open={props.sidebar}
          onClose={props.handleClick}
        >
          {sideDrawer('right')}
        </CustomDrawer> : <CustomDrawerWidth
          anchor="right"
          open={props.sidebar}
          onClose={props.handleClick}
        >
          {sideDrawer('right')}
        </CustomDrawerWidth>
      }
    </>
  )
}

