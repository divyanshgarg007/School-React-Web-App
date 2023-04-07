import React, {useState, useEffect} from 'react'
import {styled} from '@mui/system'
import {Search} from '@mui/icons-material'
import {Box, Typography, MenuItem, Select} from '@mui/material'
import {connect, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import moment from 'moment'
import {CSVLink} from 'react-csv'
import {ActionCreators} from '../../../../redux/actions'
import {CustomTextBox, CustomButton} from '../../../../components/Inputs'
import {CustomDateTimePicker, CustomTable, Loader} from '../../../../components'
import CustomDialog from '../../../../components/CustomDialog/customDialog'
import SnackbarComponent from '../../../../components/SnackBar'
import MyDiv from './customers.style'

const CustomMenuItem = styled(MenuItem)(({theme}) => ({
  '&.MuiMenuItem-root': {
    backgroundColor: '#EDF2F7',
    fontFamily: 'Proxima Nova',
    fontSize: '15px',
    fontWeight: '600',
    color: '#000000',
  },
  '&.MuiMenuItem-root:first-child': {
    borderTop: '3px solid #1D3160',
    marginTop: '-8px',
  },
  '&.MuiMenuItem-root:last-child': {
    marginBottom: '-8px',
  },
}))


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
    title: 'Package',

  },
  {
    id: 6,
    title: 'Status',

  },
  {
    id: 7,
    title: 'View',

  },
  {
    id: 8,
    title: 'Delete',

  },
]

const paidStatus = [
  {
    id: 0,
    title: 'All',

  },
  {
    id: 1,
    title: 'Paid',

  },
  {
    id: 2,
    title: 'Unpaid',

  },
]

const Customers = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [show, setShow] = useState(true)
  const [customerList, setCustomerList] = useState([])
  const [filteredCustomerList, setFilteredCustomerList] = useState([])
  const [searchName, setSearchName] = useState('')
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [customerEmail, setCustomerEmail] = useState(true)
  const [openDialog, setOpenDialog] = useState(false)
  const [customerId, setCustomerId] = useState(true)
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const globalState = useSelector((state) => state.globalState)
  const masterState = useSelector((state) => state.masterState)

  useEffect(() => {
    props.actions.getUsersAction()
  }, [])

  useEffect(() => {
    setCustomerList(globalState?.getUsers?.data?.filter((item) => item.is_publish === 'Published'))
    setFilteredCustomerList(globalState?.getUsers?.data?.filter((item) => item.is_publish === 'Published'))
  }, [globalState?.getUsers])

  useEffect(() => {
    if (masterState?.postTeacherData?.data?.status === 'success') {
      setMessage(masterState?.postTeacherData?.data?.message)
      setStatus('success')
    } else {
      setMessage(masterState?.postTeacherData?.data?.message)
      setStatus('error')
    }
  }, [masterState?.postTeacherData?.data?.status])

  useEffect(() => {
    if (masterState?.deleteUser?.data?.data?.meta?.status === 'success') {
      setMessage(masterState?.deleteUser?.data?.data?.meta?.message)
      setStatus('success')
    }
  }, [masterState?.deleteUser])

  useEffect(() => {
    if (searchName !== '') {
      const result = customerList?.filter((item) => {
        return item.email.toLowerCase().includes(searchName.toLowerCase()) || item.name.toLowerCase().includes(searchName.toLowerCase())
      })
      setFilteredCustomerList(result)
    } else {
      setFilteredCustomerList(customerList)
    }
  }, [searchName])

  const handleSearch = (e) => {
    const searchValue = e.target.value
    setSearchName(searchValue)
    if (searchValue !== '') {
      const result = customerList.filter((item) => {
        return item.email.toLowerCase().includes(searchValue.toLowerCase())
      })
      setFilteredCustomerList(result)
    } else {
      setFilteredCustomerList(customerList)
    }
  }

  const handleStartDate = (date) => {
    setStartDate(date)
  }

  const handleEndDate = (date) => {
    setEndDate(date)
  }

  const handleSearchDate = () => {
    let obj = {
      start: moment(startDate).format('YYYY-MM-DD'),
      end: moment(endDate).format('YYYY-MM-DD'),
    }
    props.actions.getUsersAction(obj)
    const filterOnDate = customerList.filter((item) => {
      return (moment(item.created_at).format('YYYY-MM-DD') <= moment(endDate).format('YYYY-MM-DD'))
      && (moment(item.created_at).format('YYYY-MM-DD') >= moment(startDate).format('YYYY-MM-DD'))
    }
    )
    setCustomerList(filterOnDate)
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

  const handleSwitch = (event) => {
    if (event.target.value === 1) {
      const result = filteredCustomerList?.filter((item) => item.paid_status === 'Paid')
      setFilteredCustomerList(result)
    } else if (event.target.value === 2) {
      const result = filteredCustomerList?.filter((item) => item.paid_status === 'Unpaid')
      setFilteredCustomerList(result)
    } else {
      setFilteredCustomerList(customerList)
    }
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
      {show ? <Box className="main_box1">
        {/* <Box classname="main_box">
        </Box> */}
        <Box className="header_top">
          <Typography className="page_title">Customers</Typography>
          <Box className="flex_box">
            <CustomTextBox
              onChange={handleSearch}
              value={searchName} fieldLabel="Search" endIcon={<Search className="icn_size" />}
            />
            <Select value={0}>
              <CustomMenuItem disabled value={0}>Filter by Date</CustomMenuItem>
              <Box p={2}>
                <Typography>From</Typography>
                <CustomDateTimePicker handleDate={handleStartDate} date={startDate} />
                <Typography mt={1}>To</Typography>
                <CustomDateTimePicker handleDate={handleEndDate} date={endDate} />
                <Box mt={1}>
                  <CustomButton title="search" onClick={handleSearchDate} />
                </Box>
              </Box>
            </Select>
            <Select onChange={handleSwitch}>
              <CustomMenuItem disabled>Filter by Payment Status</CustomMenuItem>
              {paidStatus.map((item) => {
                return (
                  <CustomMenuItem value={item.id} key={item.id}>{item.title}</CustomMenuItem>
                )
              })}
            </Select>
            {(filteredCustomerList) && (
              <CSVLink
                data={filteredCustomerList}
                filename={'my-file.csv'}
                className="link_style"
                target="_blank"
              >
                <CustomButton className="btn_style" title="Export CSV" />
              </CSVLink>
            )}
          </Box>
        </Box>
        <CustomTable
          handleDeleteUser={handleDeleteUser}
          tableHeading={tableHeading}
          type="customers"
          tableData={filteredCustomerList}
        />

      </Box> : null}
      <CustomDialog
        title="Customer"
        handleDelete={handleDeleteUser}
        handleConfirm={handleConfirm}
        openDialog={openDialog}

      />
      <SnackbarComponent
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

export default connect(null, mapDispatchToProps)(Customers)
