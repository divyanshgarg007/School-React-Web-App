import {Box, Typography} from '@mui/material'
import React, {useEffect, useState} from 'react'
import {connect, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import {CustomTable} from '../../../../components'
import {ActionCreators} from '../../../../redux/actions'
import MyDiv from './registrations.style'

const tableHeading = [
  {
    id: 1,
    title: 'ID',

  },
  {
    id: 2,
    title: 'Customer Name',

  },
  {
    id: 3,
    title: 'Email',

  },
  {
    id: 4,
    title: 'Registration',

  },
  {
    id: 5,
    title: 'Customer',

  },
  {
    id: 6,
    title: 'Package',

  },
  {
    id: 7,
    title: 'Status',

  },
]


const Registrations = (props) => {

  const [customers, setCustomers] = useState()
  const globalState = useSelector((state) => state.globalState)

  useEffect(() => {
    props.actions.getUsersAction()
  }, [])

  useEffect(() => {
    setCustomers(globalState?.getUsers?.data)
  }, [globalState?.getUsers?.data])


  return (
    <MyDiv>
      <Box className="main_box">
        <Box className="header_top">
          <Typography mb={3} className="page_title">Registrations</Typography>
          <CustomTable
            tableHeading={tableHeading}
            type="registrations"
            tableData={customers}
          />
        </Box>
      </Box>
    </MyDiv>
  )
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(Registrations)
