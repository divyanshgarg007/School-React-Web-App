/* eslint-disable max-len */
/* eslint-disable */
/* eslint-disable radix */
import {AccountBalance, Add, Delete, Edit, HighlightOff} from '@mui/icons-material'
import {Box, Typography, List, Grid, IconButton, ListItem} from '@mui/material'
import {useTranslation} from 'react-i18next'
import React, {useEffect, useState} from 'react'
import {connect, useSelector} from 'react-redux'
import {isMobile} from 'react-device-detect'
import {bindActionCreators} from 'redux'
import moment from 'moment'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import {CustomNoDataBox, CustomButton, CustomAddNew, SnackBar, Loader} from '../../components'
import {ActionCreators} from '../../redux/actions'
import CustomDialog from '../../components/CustomDialog/customDialog'
import {EducationEdit, EducationForm, ListCardEducation} from './components'
import MyDiv from './education.style'


const Education = (props) => {

  const textHandle = (text) => {
    const regex = /(<([^>]+)>)/ig
    return text?.replace(regex, '')
  }

  const {t} = useTranslation()
  const data = true
  const [sidebar, setSidebar] = useState(false)
  const [educationMobileEdit, setEducationMobileEdit] = useState(false)
  const [educationData, setEducationData] = useState({})
  const [educationList, setEducationList] = useState([])
  const [messageForPublish, setMessageForPublish] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [errorData, setErrorData] = useState({})
  const [country, setCountry] = useState(null)
  const [openDialog, setOpenDialog] = useState(false)
  const [deleteId, setDeleteId] = useState()
  const educationState = useSelector((state) => state.masterState)
  const educationPost = useSelector((state) => state.educationDataState)
  const globalState = useSelector((state) => state.globalState)

  useEffect(() => {
    setErrorData(educationPost?.postEducation?.error?.errors)
  }, [educationPost?.postEducation?.error?.errors])

  useEffect(() => {
    props.actions.getListAction()
  }, [])


  useEffect(() => {
    if (educationState?.getDetailsData?.data === null) {
      props.actions.getDetailsAction()
    }
  }, [])

  useEffect(() => {
    setEducationList(educationState?.getDetailsData?.data?.userEducation)
  }, [educationState?.getDetailsData?.data])

  // post for snackbar
  useEffect(() => {
    if (educationPost?.postEducation?.data?.status === 'success') {
        setMessageForPublish(t('messageForPublish'))
        localStorage.setItem('messageForPublish', t('messageForPublish'))
      setMessage(educationPost?.postEducation?.data?.message)
      setStatus('success')
      if (!isMobile) {
        setSidebar(!sidebar)
      } else {
        setEducationMobileEdit(!educationMobileEdit)
      }
    } else if (educationPost?.postEducation?.data?.status === 'failure') {
      setMessage(educationPost?.postEducation?.data?.message)
      setStatus('error')
      if (!isMobile) {
        setSidebar(!sidebar)
      } else {
        setEducationMobileEdit(!educationMobileEdit)
      }
    }
  }, [educationPost?.postEducation?.data?.status])

  useEffect(() => {
    if (educationPost?.postDelete?.data?.status === 'success') {
      setMessage(educationPost?.postDelete?.data?.message)
      setStatus('success')
    } else if (educationPost?.postDelete?.data?.status === 'failure') {
      setMessage(educationPost?.postDelete?.data?.message)
      setStatus('error')
    }
  }, [educationPost?.postDelete?.data?.status])

  useEffect(() => {
    if (globalState?.updateOrder?.data?.status === 'success') {
      setMessage(globalState?.updateOrder?.data?.message)
      setStatus('success')
    } else if (globalState?.updateOrder?.data?.status === 'failure') {
      setMessage(globalState?.updateOrder?.data?.message)
      setStatus('error')
    }
  }, [globalState?.updateOrder?.data])


  //handling fields
  const handleCountry = (e) => {
    const country = e.target.value
    // setCountry(countryId)
    setEducationData({...educationData, country})
    setStaticLocationList(staticLocationListFilter)
  }

  const handleChange = (e) => {
    setEducationData({...educationData, [e.target.name]: e.target.value})
  }
  const handleStartDateChangeLocal = (e) => {
    setEducationData({...educationData, start_date: moment(e).format().replace('T00:00:00+', ' ')})
  }
  const handleEndDateChangeLocal = (e) => {
    setEducationData({...educationData, end_date: moment(e).format().replace('T00:00:00+', ' ')})
  }


  const handleDescription = (value) => {
    setEducationData({...educationData, description: value})

  }

  //handling submit buttons
  const handleSubmit = () => {
    props.actions.postEducationListAction({...educationData})
  }

  //handling cancel button
  const handleClick = () => {
    setSidebar(!sidebar)
    setEducationData({})
    setErrorData({})
  }

  const handleMobileClick = () => {
    setEducationMobileEdit(!educationMobileEdit)
    setEducationData({})
    setErrorData({})
  }


  //handling edit icon click
  const handleEdit = (e, item, order) => {
    if (!isMobile) {
      setSidebar(!sidebar)
    } else {
      setEducationMobileEdit(!educationMobileEdit)
    }
    const currentItem = educationList.filter((data) => data?.id === item)
    setEducationData({
      institute_name: currentItem[0]?.institute_name,
      country: currentItem[0]?.country,
      degree_title: currentItem[0]?.degree_title,
      start_date: currentItem[0]?.start_date,
      end_date: currentItem[0]?.end_date,
      description: currentItem[0]?.description,
      education_version_id: item,
      update_id: currentItem[0]?.update_id,
      order: currentItem[0]?.order,
    })
    setErrorData({})
  }

  // handle delete icon
  const handleDelete = (e, Id) => {
    setOpenDialog(!openDialog)
    const currentItem = educationList.filter((data) => data.id === Id)
    setDeleteId(currentItem[0]?.id)
  }

  const handleConfirm = () => {
    setOpenDialog(!openDialog)
    let obj = {
      data_type: 'education',
      version_id: deleteId,
    }
    props.actions.postDeleteAction(obj)
  }

  //handling snackbar close
  const handleSnackBarClose = () => {
    setMessageForPublish('')
    setMessage('')
    setStatus('')
    props.actions.cleanUpUserState()
  }

  const onDragEnd = (result) => {
    const currentPosition = result.draggableId
    const finalPosition = result.destination.index

    const currentPos = parseInt(currentPosition)
    const finalPos = parseInt(finalPosition)

    const currentVersionId = educationList.filter((item) => item.order === currentPos)
    let obj = {
      data: [
        {
          version_id: currentVersionId[0]?.id,
          order: finalPos,
        },
      ],
    }

    let type = 'education'
    props.actions.updateOrderAction(obj, type)

  }


  const [searchName, setSearchName] = useState('')
  const [staticLocationList, setStaticLocationList] = useState()
  const [staticLocationListFilter, setStaticLocationListFilter] = useState()

  useEffect(() => {
    setStaticLocationListFilter(globalState.getList?.data?.payload?.country)
    setStaticLocationList(globalState?.getList?.data?.payload?.country)
  }, [globalState?.getList?.data])

  const handleSearch = (e) => {
    const searchValue = e.target.value
    setSearchName(searchValue)
    if (searchValue !== '') {
      const result = staticLocationListFilter.filter((item) => {
        return item.country_name.toLowerCase().startsWith(searchValue.toLowerCase())
      })
      setStaticLocationList(result)
    } else {
      setStaticLocationList(staticLocationListFilter)
    }
  }

  const handleEmptyState = () => {
    if (!isMobile) {
      setSidebar(!sidebar)
    } else {
      setEducationMobileEdit(!educationMobileEdit)
    }
  }

  const msg = localStorage.getItem('messageForPublish')
  return (
    <MyDiv>
      {(educationPost?.postEducation?.loading || educationState?.getDetailsData?.loading) &&
      <div>
        <Loader />
      </div>
      }
       {isMobile && <>{messageForPublish ?
        <Typography className="publish_msg">
          {messageForPublish}
        </Typography> : msg ? <Typography className="publish_msg">
          {msg}
        </Typography> : null
      }</>}
      <Box className="education_box">
        {educationMobileEdit ? <Box>
          <Typography className="page_title">{educationData.education_version_id ? 'Edit education' : t('AddEducation')}</Typography>
          <EducationEdit
            value={searchName}
            handleSearch={handleSearch}
            countries={staticLocationList}
            handleDescription={handleDescription}
            handleCountry={handleCountry}
            educationData={educationData}
            handleStartDateChange={handleStartDateChangeLocal}
            handleEndDateChange={handleEndDateChangeLocal}
            errorData={errorData}
            handleChange={handleChange}
          />
          <Box className="flex_btn">
            <CustomButton onClick={handleSubmit} className="btn_submit" title={t('Submit')} />
            <CustomButton onClick={handleMobileClick} className="btn_cancel" title={t('Cancel')} />
          </Box>
        </Box> : <Box>
          <Typography className="page_title">{t('Education')}</Typography>
          {educationList?.length <= 0 ? <Box>
            <CustomNoDataBox handleEmptyState={handleEmptyState} className1="icn_btn" startIcon={<AccountBalance />} title2={t('NoEducationFound')} title3={t('AddEducation')} />
          </Box> :  <Box>
            <Box className="card_box">
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      {educationList?.map((item) => {
                        return (
                          <Draggable index={item.order} key={item.order.toString()} draggableId={item.order.toString()}>
                            {(provided, snapshot) => (
                              <ListCardEducation provided={provided}
                                snapshot={snapshot}
                              >
                                <Grid container md={12} xs={12} sm={12} className="card_grid">
                                  <Grid item md={11} xs={9} sm={9}>
                                    <Box className="grid_card">
                                      <Box className="flex_box">
                                        <Typography className="title_text1">{item?.institute_name}{','}&nbsp;</Typography>
                                        <Typography className="title_text">{item?.country_name}</Typography>
                                      </Box>
                                      <List>
                                        <ListItem className="title_text2">{item?.degree_title}</ListItem>
                                        {item?.start_date ? <ListItem className="title_text2">{moment(item?.start_date).format('DD/MM/YYYY')}</ListItem> : null}
                                        {item?.end_date ? <ListItem className="title_text2">{moment(item?.end_date).format('DD/MM/YYYY')}</ListItem> : null}
                                        {!isMobile ? <ListItem className="title_text2">{textHandle(
                                          item?.description
                                        )}</ListItem> : null}
                                      </List>
                                    </Box>
                                  </Grid>
                                  <Grid item md={1} xs={3} sm={3} className="icon_text2">
                                    <Box>
                                      <IconButton
                                        onClick={(e) => handleEdit(e, item?.id, item?.order)}
                                        className="edit_icon"
                                      ><Edit className="icn_size" /></IconButton>
                                      <IconButton onClick={(e) => handleDelete(e, item?.id)} className="delete_icon"><Delete className="icn_size" /></IconButton>
                                    </Box>
                                  </Grid>
                                </Grid>
                              </ListCardEducation>
                            )}
                          </Draggable>
                        )
                      })}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </Box>
            <Box className="btn_box">
              <CustomButton title={t('AddNew')} startIcon={<Add />} onClick={handleMobileClick} className="add_btn_mobile" />
            </Box>
            <Box>
              <CustomButton title={t('AddNew')} startIcon={<Add />} onClick={handleClick} className="add_btn" />
            </Box>
          </Box>}
        </Box>}
      </Box>
      <CustomAddNew type="educationSidebar" sidebar={sidebar} sidebarTitle={educationData.education_version_id ? t('EditEducation') : t('AddEducation')} handleClick={handleClick} >
        <EducationForm
          value={searchName}
          handleSearch={handleSearch}
          countries={staticLocationList}
          handleDescription={handleDescription}
          handleCountry={handleCountry}
          educationData={educationData} handleStartDateChange={handleStartDateChangeLocal} handleEndDateChange={handleEndDateChangeLocal}
          errorData={errorData} handleClick={handleClick} handleChange={handleChange} handleSubmit={handleSubmit}
        />
      </CustomAddNew>
      <SnackBar
        message={message}
        severity={status}
        open={message?.length > 0}
        close={handleSnackBarClose}
      />
      <CustomDialog
        title={t("Education")}
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

export default connect(null, mapDispatchToProps)(Education)
