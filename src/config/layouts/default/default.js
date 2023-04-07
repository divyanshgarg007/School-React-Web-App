import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import {Container, Grid} from '@mui/material'
// import {useHistory} from 'react-router-dom'
import Header from '../../../components/Surfaces/Header/header'
import Navbar from '../../../components/Surfaces/Navbar/navbar'
import MyDiv from './default.style'

const AppLayout = (props) => {
  // const history = useHistory()
  return (
    <MyDiv>
      <CssBaseline />
      <Grid container className="mobile_layout">
        <Grid item md={2}>
          <Header />
        </Grid>
        <Grid item md={10} className="parent_bg">
          <Navbar />
          <Container maxWidth={false} className="app_layout">
            <div className="site-layout-background">
              {props.children}
            </div>
          </Container>
        </Grid>
      </Grid>
    </MyDiv>
  )
}

export default AppLayout
