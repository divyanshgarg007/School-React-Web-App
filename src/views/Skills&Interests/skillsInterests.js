/* eslint-disable no-use-before-define */
/* eslint-disable no-alert */
/* eslint-disable radix */
import React, {useEffect, useState} from 'react'
import {Box, Grid, IconButton, Typography} from '@mui/material'
import {Add, Delete, Edit, Grade} from '@mui/icons-material'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import {useTranslation} from 'react-i18next'
import {bindActionCreators} from 'redux'
import {isMobile} from 'react-device-detect'
import {connect, useSelector} from 'react-redux'
import {CustomButton, CustomNoDataBox, CustomGridCard, CustomAddNew, SnackBar, Loader} from '../../components'
import {ActionCreators} from '../../redux/actions'
import CustomDialog from '../../components/CustomDialog/customDialog'
import MyDiv from './skillsInterests.style'
import {SkillsInterestsEdit, SkillsInterestsForm} from './components'

const SkillsInterests = (props) => {


  const textHandle = (text) => {
    const regex = /(<([^>]+)>)/ig
    return text?.replace(regex, '')
  }
  const {t} = useTranslation()
  // const [items, setItems] = useState(elements)
  const [openDialog, setOpenDialog] = useState(false)
  const [deleteId, setDeleteId] = useState()
  const [sidebar, setSidebar] = useState(false)
  const [errorData, setErrorData] = useState({})
  const [skillsInterestsEdit, setSkillsInterestsEdit] = useState(false)
  const [skillsInterestsData, setSkillsInterestsData] = useState({
    order: null,
  })
  const [skillsInterestsList, setSkillsInterestsList] = useState([])
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [messageForPublish, setMessageForPublish] = useState('')

  const skillsInterestsState = useSelector((state) => state.masterState)
  const skillsInterestsPost = useSelector((state) => state.skillsInterestsDataState)
  const updateOrderState = useSelector((state) => state.globalState)

  useEffect(() => {
    props.actions.getListAction()
  }, [])

  useEffect(() => {
    setErrorData(skillsInterestsPost?.postSkillsInterests?.error?.errors)
  }, [skillsInterestsPost?.postSkillsInterests?.error?.errors])

  useEffect(() => {
    if (skillsInterestsState?.getDetailsData?.data === null) {
      props.actions.getDetailsAction()
    }
  }, [])

  useEffect(() => {
    setSkillsInterestsList(skillsInterestsState?.getDetailsData?.data?.userSkillInterest)
  }, [skillsInterestsState?.getDetailsData?.data])


  // post for snackbar
  useEffect(() => {
    if (skillsInterestsPost?.postSkillsInterests?.data?.status === 'success') {
      setMessageForPublish(t('messageForPublish'))
      localStorage.setItem('messageForPublish', t('messageForPublish'))
      setMessage(skillsInterestsPost?.postSkillsInterests?.data?.message)
      setStatus('success')
      if (!isMobile) {
        setSidebar(!sidebar)
      } else {
        setSkillsInterestsEdit(!skillsInterestsEdit)
      }
    } else if (skillsInterestsPost?.postSkillsInterests?.error?.status === 'failure') {
      // setMessage(skillsInterestsPost?.postSkillsInterests?.error?.message)
      alert('wrong')
      setStatus('error')
      if (!isMobile) {
        setSidebar(!sidebar)
      } else {
        setSkillsInterestsEdit(!skillsInterestsEdit)
      }
    }
  }, [skillsInterestsPost?.postSkillsInterests?.data])

  useEffect(() => {
    if (skillsInterestsPost?.postDelete?.data?.status === 'success') {
      setMessage(skillsInterestsPost?.postDelete?.data?.message)
      setStatus('success')
    } else if (skillsInterestsPost?.postDelete?.data?.status === 'failure') {
      setMessage(skillsInterestsPost?.postDelete?.data?.message)
      setStatus('error')
    }
  }, [skillsInterestsPost?.postDelete?.data?.status])

  useEffect(() => {
    if (updateOrderState?.updateOrder?.data?.status === 'success') {
      setMessage(updateOrderState?.updateOrder?.data?.message)
      setStatus('success')
    } else if (updateOrderState?.updateOrder?.data?.status === 'failure') {
      setMessage(updateOrderState?.updateOrder?.data?.message)
      setStatus('error')
    }
  }, [updateOrderState?.updateOrder?.data])

  const handleChange = (e) => {
    setSkillsInterestsData({...skillsInterestsData, [e.target.name]: e.target.value})
  }

  const handleDescription = (value) => {
    setSkillsInterestsData({...skillsInterestsData, description: value})
  }

  //handling submit button
  const handleSubmit = () => {
    props.actions.postSkillsInterestsListAction(skillsInterestsData)
  }

  //handling cancel button
  const handleClick = () => {
    setSidebar(!sidebar)
    setSkillsInterestsData({})
    setErrorData({})
  }

  const handleMobileClick = () => {
    setSkillsInterestsEdit(!skillsInterestsEdit)
    setSkillsInterestsData({})
    setErrorData({})
  }

  //handling edit icon click
  const handleEdit = (e, item, order) => {
    if (!isMobile) {
      setSidebar(!sidebar)
    } else {
      setSkillsInterestsEdit(!skillsInterestsEdit)
    }
    const currentItem = skillsInterestsList.filter((data) => data?.id === item)
    setSkillsInterestsData({
      skill_interest_name: currentItem[0]?.skill_interest_name,
      description: currentItem[0]?.description,
      skill_version_id: item,
      update_id: currentItem[0]?.update_id,
      order: currentItem[0]?.order,
    })
    setErrorData({})
  }

  // handle delete icon
  const handleDelete = (e, Id) => {
    setOpenDialog(!openDialog)
    const currentItem = skillsInterestsList.filter((data) => data.id === Id)
    setDeleteId(currentItem[0]?.id)
  }

  const handleConfirm = () => {
    setOpenDialog(!openDialog)
    let obj = {
      data_type: 'skill-interest',
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

    const currentVersionId = skillsInterestsList.filter((item) => item.order === currentPos)
    let obj = {
      data: [
        {
          version_id: currentVersionId[0]?.id,
          order: finalPos,
        },
      ],
    }

    let type = 'skill-interest'
    props.actions.updateOrderAction(obj, type)

  }

  const handleEmptyState = () => {
    if (!isMobile) {
      setSidebar(!sidebar)
    } else {
      setSkillsInterestsEdit(!skillsInterestsEdit)
    }
  }

  const msg = localStorage.getItem('messageForPublish')
  return (
    <MyDiv>
      {(skillsInterestsPost?.postSkillsInterests?.loading || skillsInterestsPost?.getDetailsData?.loading) &&
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
      <Box className="skillsinterests_box">
        {skillsInterestsEdit ? <Box>
          <Typography className="page_title">{skillsInterestsData.skill_version_id ? 'Edit Skills & Interests' : t('AddSkills&Interests')}</Typography>
          <SkillsInterestsEdit
            handleDescription={handleDescription}
            skillsInterestsData={skillsInterestsData}
            handleChange={handleChange}
            errorData={errorData}
          />
          <Box className="flex_btn">
            <CustomButton onClick={handleSubmit} className="btn_submit" title={t('Submit')} />
            <CustomButton onClick={handleMobileClick} className="btn_cancel" title={t('Cancel')} />
          </Box>
        </Box> : <Box>
          <Typography className="page_title">{t('Skills&Interests')}</Typography>
          {skillsInterestsList?.length <= 0 ? <Box>
            <CustomNoDataBox handleEmptyState={handleEmptyState} className1="icn_btn" startIcon={<Grade />} title2={t('NoSkillsInterestsfound')} title3={t('AddSkillsInterests')} />
          </Box> : <Box>
            <Box className="card_box">
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      {skillsInterestsList?.map((item) => {
                        return (
                          <Draggable index={item.order} key={item.order.toString()} draggableId={item.order.toString()}>
                            {(provided, snapshot) => (
                              <CustomGridCard provided={provided}
                                snapshot={snapshot}
                              >
                                <Grid container md={12} xs={12} sm={12} className="card_grid">
                                  <Grid item md={2} className="icon_text1">
                                    <Typography className="title_txt">{item?.skill_interest_name}</Typography>
                                  </Grid>
                                  <Grid item md={10} className="icon_text2">

                                    <Typography className="title_txt">{textHandle(
                                      item?.description
                                    )}</Typography>
                                    <Box className="flex_icns">
                                      <IconButton
                                        onClick={(e) => handleEdit(e, item?.id, item?.order)}
                                        className="edit_icon"
                                      ><Edit className="icn_size" /></IconButton>
                                      <IconButton onClick={(e) => handleDelete(e, item?.id)} className="delete_icon"><Delete className="icn_size" /></IconButton>
                                    </Box>
                                  </Grid>
                                </Grid>
                              </CustomGridCard>
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
              <CustomButton title={t('AddNew')} startIcon={<Add />} className="add_btn_mobile" onClick={handleMobileClick} />
            </Box>
            <Box>
              <CustomButton title={t('AddNew')} startIcon={<Add />} onClick={handleClick} className="add_btn" />
            </Box>
          </Box>}
        </Box>}
      </Box>
      <CustomAddNew sidebar={sidebar} sidebarTitle={skillsInterestsData.skill_version_id ? t('EditSkillInterests') : t('AddSkills&Interests')} handleClick={handleClick} >
        <SkillsInterestsForm
          handleDescription={handleDescription}
          skillsInterestsData={skillsInterestsData}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleClick={handleClick}
          errorData={errorData}
        />
      </CustomAddNew>
      <SnackBar
        message={message}
        severity={status}
        open={message?.length > 0}
        close={handleSnackBarClose}
      />
      <CustomDialog
        title={t('Skills&Interests')}
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

export default connect(null, mapDispatchToProps)(SkillsInterests)
