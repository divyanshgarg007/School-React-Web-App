import {Add, KeyboardReturn} from '@mui/icons-material'
import {Box, IconButton, Typography} from '@mui/material'
import React, {useEffect, useState} from 'react'
import {connect, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import {CustomAddNew, CustomButton, CustomTable, Loader, SnackBar} from '../../../../components'
import CustomDialog from '../../../../components/CustomDialog/customDialog'
import {ActionCreators} from '../../../../redux/actions'
import PackageForm from '../PackageForm'
import PackagesEdit from '../PackagesEdit'
import MyDiv from './packages.style'

const tableHeading = [
  {
    id: 1,
    title: 'Name',

  },
  {
    id: 2,
    title: 'Amount',

  },
  {
    id: 3,
    title: 'Date Modified',

  },
  {
    id: 4,
    title: 'Edit',

  },
  {
    id: 5,
    title: 'Delete',

  },
]

const Packages = (props) => {
  const [openDialog, setOpenDialog] = useState(false)
  const [deleteId, setDeleteId] = useState()
  const [show, setShow] = useState(true)
  const [sidebar, setSidebar] = useState(false)
  const [packageData, setPackageData] = useState({})
  const [packagesList, setPackagesList] = useState([])
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const globalState = useSelector((state) => state.globalState)
  const tableData = globalState.getList.data?.payload?.packages
  const [errorData, setErrorData] = useState()


  useEffect(() => {
    props.actions.getListAction()
  }, [])

  useEffect(() => {
    setPackagesList(tableData)
  }, [tableData])

  useEffect(() => {
    setErrorData(globalState?.postPackage?.error?.errors)
  }, [globalState?.postPackage?.error?.errors])

  useEffect(() => {
    if (globalState?.postPackage?.data?.status === 'success') {
      setMessage(globalState?.postPackage?.data?.message)
      setStatus('success')
      setSidebar(!sidebar)
    } else if (globalState?.postPackage?.error?.meta?.status === 'failure') {
      setMessage(globalState?.postPackage?.error?.meta?.message)
      setStatus('error')
    }
  }, [globalState?.postPackage])

  useEffect(() => {
    if (globalState?.deletePackage?.data?.status === 'success') {
      setMessage(globalState?.deletePackage?.data?.message)
      setStatus('success')
    }
  }, [globalState?.deletePackage])

  const handleClick = () => {
    setSidebar(!sidebar)
    setErrorData()
  }

  const handleChange = (e) => {
    setPackageData({...packageData, [e.target.name]: e.target.value})
  }
  const handleSubmit = () => {
    props.actions.postPackageAction(packageData)
    setPackageData({})
    // setSidebar(!sidebar)
  }


  // handle delete icon
  const handleDelete = (item) => {
    setOpenDialog(!openDialog)
    setDeleteId(item)
  }

  const handleConfirm = () => {
    setOpenDialog(!openDialog)
    let obj = {
      package_id: deleteId,
    }
    props.actions.deletePackageAction(obj)
  }

  const handleEditPackage = (e, item) => {
    setSidebar(!sidebar)
    const currentCategory = packagesList.filter((data) => data.package_id === item)
    setPackageData({
      package_id: item,
      name: currentCategory[0]?.name,
      amount: currentCategory[0]?.amount,
    })
  }

  const handleSnackBarClose = () => {
    setMessage('')
    setStatus('')
    props.actions.cleanUpUserState()
  }
  return (
    <MyDiv>
      {(globalState?.postPackage?.loading || globalState?.getList?.loading) &&
      <div>
        <Loader />
      </div>
      }
      <Box className="main_box">
        <Box className="header_top">
          <Typography className="page_title">Packages</Typography>
          <CustomButton startIcon={<Add />} title="Add New" onClick={handleClick} className="add_btn" />
        </Box>
        {!show ? <Box><IconButton className="btn_return" onClick={() => setShow(!show)}><KeyboardReturn /></IconButton><PackagesEdit /></Box> : null}
        {show ? <CustomTable
          tableHeading={tableHeading}
          type="packages"
          tableData={tableData}
          handleDelete={handleDelete}
          handleEditPackage={handleEditPackage}
        /> : null}
        <CustomAddNew sidebar={sidebar} sidebarTitle="Add Packages" handleClick={handleClick}>
          <PackageForm
            errorData={errorData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleClick={handleClick}
            packageData={packageData}
          />
        </CustomAddNew>
      </Box>
      <SnackBar
        message={message}
        severity={status}
        open={message?.length > 0}
        close={handleSnackBarClose}
      />
      <CustomDialog
        title="Package"
        handleConfirm={handleConfirm}
        openDialog={openDialog}
        handleDelete={handleDelete}
      />
    </MyDiv>
  )
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(Packages)
