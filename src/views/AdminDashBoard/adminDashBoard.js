import {TabContext, TabPanel} from '@mui/lab'
import {Box} from '@mui/material'
import React from 'react'
import {DashBoard, Packages, Customers, Sales, Approvals, Categories, Registrations} from './components'
import MyDiv from './adminDashBoard.style'

export default function AdminDashBoard() {
  return (
    <MyDiv>
      <Box>
        <TabContext>
          <TabPanel><DashBoard /></TabPanel>
          <TabPanel><Sales /></TabPanel>
          <TabPanel><Customers /></TabPanel>
          <TabPanel><Packages /></TabPanel>
          <TabPanel><Approvals /></TabPanel>
          <TabPanel><Categories /></TabPanel>
          <TabPanel><Registrations /></TabPanel>
        </TabContext>
      </Box>
    </MyDiv>
  )
}
