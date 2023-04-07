import {Typography, Box, IconButton} from '@mui/material'
import React, {useEffect, useState} from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import {connect, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import {CustomTable, Loader, SnackBar} from '../../../../components'
import {ActionCreators} from '../../../../redux/actions'
import ApprovalsPublish from '../ApprovalsPublish'
import CustomDialog from '../../../../components/CustomDialog/customDialog'
import MyDiv from './approvals.style'

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
  {
    id: 8,
    title: 'Edit',

  },
  {
    id: 9,
    title: 'Delete',

  },
]

const Approvals = (props) => {
  const [show, setShow] = useState(true)
  const [customerId, setCustomerId] = useState(true)
  const [customerEmail, setCustomerEmail] = useState(true)
  const [openDialog, setOpenDialog] = useState(false)
  const [customerList, setCustomerList] = useState([])
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const globalState = useSelector((state) => state.globalState)
  const masterState = useSelector((state) => state.masterState)

  useEffect(() => {
    props.actions.getUsersAction()
  }, [])

  useEffect(() => {
    props.actions.getTeacherFinalAction()
  }, [])

  useEffect(() => {
    if (masterState?.deleteUser?.data?.data?.meta?.status === 'success') {
      setMessage(masterState?.deleteUser?.data?.data?.meta?.message)
      setStatus('success')
    }
  }, [masterState?.deleteUser])

  useEffect(() => {
    const filterCustomers = globalState?.getUsers?.data?.filter((item) => item.is_publish === 'Pending')
    setCustomerList(filterCustomers)
  }, [globalState?.getUsers])

  const handleEditClick = (id) => {
    setShow(!show)
    props.actions.getTeacherFinalAction(id)
  }

  const handleDeleteUser = (id, email) => {
    setCustomerId(id)
    setCustomerEmail(email)
    setOpenDialog(!openDialog)
  }
  const handleConfirm = () => {
    setOpenDialog(!openDialog)
    let obj = {
      user_id: customerId,
      email: customerEmail,
    }
    props.actions.deleteUserAction(obj)
  }

  const handleSnackBarClose = () => {
    setMessage('')
    setStatus('')
    props.actions.cleanUpUserState()
  }

  return (
    <MyDiv>
      {(globalState?.getUsers?.loading) && (
        <div>
          <Loader />
        </div>
      )}
      <Box className="main_box">
        <Box className="header_top">
          {!show &&
          <IconButton className="back_btn" onClick={handleEditClick}>
            <ArrowBackIosNewIcon />
          </IconButton>
          }
          <Typography className="page_title">Approvals</Typography>
        </Box>
        {show ? <CustomTable
          tableHeading={tableHeading}
          type="approvals"
          tableData={customerList}
          handleEditClick={handleEditClick}
          handleDeleteUser={handleDeleteUser}
        /> : <ApprovalsPublish handleEditClick={handleEditClick} />}

      </Box>
      <CustomDialog
        title="Customer"
        handleDelete={handleDeleteUser}
        handleConfirm={handleConfirm}
        openDialog={openDialog}

      />
      <SnackBar
        message={message}
        severity={status}
        open={message?.length > 0}
        close={handleSnackBarClose}
      />
    </MyDiv>
  )
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(Approvals)
