/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable radix */
import {Add, Summarize, Delete, Edit} from '@mui/icons-material'
import {Box, Typography, List, Grid, IconButton, ListItem} from '@mui/material'
import {useTranslation} from 'react-i18next'
import React, {useEffect, useState} from 'react'
import {bindActionCreators} from 'redux'
import {connect, useSelector} from 'react-redux'
import moment from 'moment'
import {isMobile} from 'react-device-detect'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import {CustomNoDataBox, CustomButton, CustomAddNew, SnackBar, Loader} from '../../components'
import {ActionCreators} from '../../redux/actions'
import CustomDialog from '../../components/CustomDialog/customDialog'
import {ExperienceEdit, ListCardExperience, ExperienceForm} from './component'
import MyDiv from './experience.style'

const Experience = (props) => {
  const {t} = useTranslation()
  const [sidebar, setSidebar] = useState(false)
  const [expMobileEdit, setExpMobileEdit] = useState(false)
  const [experienceData, setExperienceData] = useState({})
  const [experienceList, setExperienceList] = useState([])
  const [messageForPublish, setMessageForPublish] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [errorData, setErrorData] = useState({})
  const [openDialog, setOpenDialog] = useState(false)
  const [deleteId, setDeleteId] = useState()

  const experienceState = useSelector((state) => state.masterState)
  const experiencePost = useSelector((state) => state.experienceDataState)
  const updateOrderState = useSelector((state) => state.globalState)

  useEffect(() => {
    props.actions.getListAction()
  }, [])

  useEffect(() => {
    if (experienceState?.getDetailsData?.data === null) {
      props.actions.getDetailsAction()
    }
  }, [])


  useEffect(() => {
    setErrorData(experiencePost?.postExperience?.error?.errors)
  }, [experiencePost?.postExperience?.error?.errors])

  useEffect(() => {
    setExperienceList(experienceState?.getDetailsData?.data?.userExperience)
  }, [experienceState?.getDetailsData?.data])

  // post for snackbar
  useEffect(() => {
    if (experiencePost?.postExperience?.data?.status === 'success') {
        setMessageForPublish(t('messageForPublish'))
        localStorage.setItem('messageForPublish', t('messageForPublish'))
      setMessage(experiencePost?.postExperience?.data?.message)
      setStatus('success')
      if (!isMobile) {
        setSidebar(!sidebar)
      } else {
        setExpMobileEdit(!expMobileEdit)
      }
    } else if (experiencePost?.postExperience?.data?.status === 'failure') {
      setMessage(experiencePost?.postExperience?.data?.message)
      setStatus('error')
      if (!isMobile) {
        setSidebar(!sidebar)
      } else {
        setExpMobileEdit(!expMobileEdit)
      }
    }
  }, [experiencePost?.postExperience?.data?.status])

  useEffect(() => {
    if (experiencePost?.postDelete?.data?.status === 'success') {
      setMessage(experiencePost?.postDelete?.data?.message)
      setStatus('success')
    } else if (experiencePost?.postDelete?.data?.status === 'failure') {
      setMessage(experiencePost?.postDelete?.data?.message)
      setStatus('error')
    }
  }, [experiencePost?.postDelete?.data?.status])


  useEffect(() => {
    if (updateOrderState?.updateOrder?.data?.status === 'success') {
      setMessage(updateOrderState?.updateOrder?.data?.message)
      setStatus('success')
    } else if (updateOrderState?.updateOrder?.data?.status === 'failure') {
      setMessage(updateOrderState?.updateOrder?.data?.message)
      setStatus('error')
    }
  }, [updateOrderState?.updateOrder?.data])

  //handling fields
  const handleChange = (e) => {
    setExperienceData({...experienceData, [e.target.name]: e.target.value})
  }
  const handleStartDateChangeLocal = (e) => {
    setExperienceData({...experienceData, start_date: moment(e).format().replace('T00:00:00+', ' ')})
  }
  const handleEndDateChangeLocal = (e) => {
    setExperienceData({...experienceData, end_date: moment(e).format().replace('T00:00:00+', ' ')})
  }

  const handleDescription = (value) => {
    setExperienceData({...experienceData, description: value})
  }

  //handling submit button
  const handleSubmit = () => {
    props.actions.postExperienceListAction(experienceData)
  }

  //handling cancel button
  const handleClick = () => {
    setSidebar(!sidebar)
    setExperienceData({})
    setErrorData({})
  }

  const handleMobileClick = () => {
    setExpMobileEdit(!expMobileEdit)
    setExperienceData({})
    setErrorData({})
  }

  //handling edit icon click
  const handleEdit = (e, item, order) => {
    if (!isMobile) {
      setSidebar(!sidebar)
    } else {
      setExpMobileEdit(!expMobileEdit)
    }
    const currentItem = experienceList.filter((data) => data?.id === item)
    setExperienceData({
      experience_name: currentItem[0]?.experience_name,
      start_date: currentItem[0]?.start_date,
      end_date: currentItem[0]?.end_date,
      description: currentItem[0]?.description,
      exp_version_id: item,
      update_id: currentItem[0]?.update_id,
      order: currentItem[0]?.order,
    })
    setErrorData({})
  }
  // handle delete icon
  const handleDelete = (e, Id) => {
    setOpenDialog(!openDialog)
    const currentItem = experienceList.filter((data) => data.id === Id)
    setDeleteId(currentItem[0]?.id)
  }

  const handleConfirm = () => {
    setOpenDialog(!openDialog)
    let obj = {
      data_type: 'experience',
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

    const currentVersionId = experienceList.filter((item) => item.order === currentPos)
    let obj = {
      data: [
        {
          version_id: currentVersionId[0]?.id,
          order: finalPos,
        },
      ],
    }

    let type = 'experience'
    props.actions.updateOrderAction(obj, type)

  }

  const handleEmptyState = () => {
    if (!isMobile) {
      setSidebar(!sidebar)
    } else {
      setExpMobileEdit(!expMobileEdit)
    }
  }

  const msg = localStorage.getItem('messageForPublish')

  return (
    <MyDiv>
      {(experiencePost?.postExperience?.loading || experienceState?.getDetailsData?.loading) &&
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
      <Box className="exp_box">
        {expMobileEdit ? <Box>
          <Typography className="page_title">{experienceData.exp_version_id ? 'Edit experience' : t('AddExperience')}</Typography>
          <ExperienceEdit
            handleDescription={handleDescription}
            experienceData={experienceData}
            errorData={errorData}
            handleChange={handleChange}
            handleStartDateChange={handleStartDateChangeLocal}
            handleEndDateChange={handleEndDateChangeLocal}
          />
          <Box className="flex_btn">
            <CustomButton onClick={handleSubmit} className="btn_submit" title={t('Submit')} />
            <CustomButton onClick={handleMobileClick} className="btn_cancel" title={t('Cancel')} />
          </Box>
        </Box> : <Box>
          <Typography className="page_title">{t('Experience')}</Typography>
          {experienceList?.length <= 0 ? <Box>
            <CustomNoDataBox handleEmptyState={handleEmptyState} className1="icn_btn" startIcon={<Summarize />}title2={t('NoExperienceFound')} title3={t('AddExperience')} />
          </Box> : <Box>
            <Box className="card_box">
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      {experienceList?.map((item) => {
                        return (
                          <Draggable index={item.order} key={item.order.toString()} draggableId={item.order.toString()}>
                            {(provided, snapshot) => (
                              <ListCardExperience provided={provided}
                                snapshot={snapshot}
                              >
                                <Grid container md={12} xs={12} sm={12} className="card_grid">
                                  <Grid item md={11} xs={9} sm={9} >
                                    <Box className="grid_card">
                                      <Typography className="title_text">{item?.experience_name}</Typography>
                                      <List>
                                        {item?.start_date ? <ListItem className="title_text2">{moment(item?.start_date).format('DD/MM/YYYY')}</ListItem> : null}
                                        {item?.end_date ? <ListItem className="title_text2">{moment(item?.end_date).format('DD/MM/YYYY')}</ListItem> : null}
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
                              </ListCardExperience>
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
      <CustomAddNew sidebar={sidebar} sidebarTitle={experienceData.exp_version_id ? t('EditExperience') : t('AddExperience')} handleClick={handleClick} >
        <ExperienceForm
          handleDescription={handleDescription}
          experienceData={experienceData} errorData={errorData} handleClick={handleClick} handleChange={handleChange} handleSubmit={handleSubmit}
          handleStartDateChange={handleStartDateChangeLocal} handleEndDateChange={handleEndDateChangeLocal}
        />
      </CustomAddNew>
      <SnackBar
        message={message}
        severity={status}
        open={message?.length > 0}
        close={handleSnackBarClose}
      />
      <CustomDialog
        title={t('Experience')}
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

export default connect(null, mapDispatchToProps)(Experience)
