import React from 'react'
import {styled} from '@mui/system'
import {Drawer, IconButton, Grid, Box} from '@mui/material'
import {Close} from '@mui/icons-material'
import RightPanelTopEdit from '../RightPanelTopEdit'
import RightPanelBottomEdit from '../RightPanelBottomEdit'
import {CustomButton} from '../../../../components'
import MyDiv from './rightPanelEditLesson.style'

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
        width: '60%',
      },
    },
  }),
)
export default function RightPanelEditLesson(props) {
  const sideDrawer = (anchor) => (
    <MyDiv>
      <Box className="drawer_box">
        <IconButton className="icon_cross" onClick={props.handleClick}><Close /></IconButton>
        <Grid container md={12}>
          <RightPanelTopEdit
            text1={props.title1}
            text2={props.title2}
            value6={props.data6}
            value7={props.data7}
            value8={props.data8}
            value9={props.data9}
            getCategorydata={props.getCategoryData}
          />
          <RightPanelBottomEdit
            text3={props.title3}
            value10={props.data10}
          />
          <Box className="flex_btn">
            <CustomButton className="btn_submit" title="Submit" />
            <CustomButton onClick={props.handleClick} className="btn_cancel" title="Cancel" />
          </Box>
        </Grid>
      </Box>
    </MyDiv>
  )

  return (
    <CustomDrawer
      anchor="right"
      open={props.sidebar}
      onClose={props.handleClick}
    >
      {sideDrawer('right')}
    </CustomDrawer>
  )
}
