/* eslint-disable no-use-before-define */
/* eslint-disable radix */
import React, {useState, useEffect} from 'react'
import {Add, Delete, Edit, Group} from '@mui/icons-material'
import {Box, Grid, IconButton, Typography} from '@mui/material'
import {useTranslation} from 'react-i18next'
import {connect, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import {isMobile} from 'react-device-detect'
import {CustomGridCard, CustomAddNew, CustomButton, Loader, CustomNoDataBox} from '../../../../components'
import SocialMediaEdit from '../SocialMedialEdit'
import {ActionCreators} from '../../../../redux/actions'
import {SocialMediaForm} from '..'
import SnackbarComponent from '../../../../components/SnackBar'
import CustomDialog from '../../../../components/CustomDialog/customDialog'
import MyDiv from './socialMedia.style'

const SocialMedia = (props) => {

  const {t} = useTranslation()
  const [openDialog, setOpenDialog] = useState(false)
  const [deleteId, setDeleteId] = useState()
  const [sidebar, setSidebar] = useState(false)
  const [socialM, setSocialM] = useState(false)
  const [socialMediaData, setSocialMediaData] = useState({})
  const [socialMediaList, setSocialMediaList] = useState([])
  const [socialMediaStaticList, setSocialMediaStaticList] = useState()
  const [messageForPublish, setMessageForPublish] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [errorData, setErrorData] = useState({})

  const socialState = useSelector((state) => state.masterState)
  const socialData = useSelector((state) => state.socialMediaListState)
  const globalState = useSelector((state) => state.globalState)

  useEffect(() => {
    props.actions.getListAction()
  }, [])

  useEffect(() => {
    if (socialState?.getDetailsData?.data === null) {
      props.actions.getDetailsAction()
    }
  }, [])

  useEffect(() => {
    setSocialMediaStaticList(globalState?.getList?.data?.payload?.social)
  }, [globalState?.getList?.data?.payload?.social])

  useEffect(() => {
    setSocialMediaList(socialState?.getDetailsData?.data?.userSocialMedia)
  }, [socialState?.getDetailsData?.data])

  // post for snackbar
  useEffect(() => {
    setErrorData(socialData?.postSocialMediaList?.error?.errors)
    if (socialData?.postSocialMediaList?.data?.status === 'success') {
      setMessageForPublish(t('messageForPublish'))
      localStorage.setItem('messageForPublish', t('messageForPublish'))
      setMessage(socialData?.postSocialMediaList?.data?.message)
      setStatus('success')
      if (!isMobile) {
        setSidebar(!sidebar)
      } else {
        setSocialM(!socialM)
      }
    } else if (socialData?.postSocialMediaList?.data?.status === 'failure') {
      setMessage(socialData?.postSocialMediaList?.data?.message)
      setStatus('error')
      if (!isMobile) {
        setSidebar(!sidebar)
      } else {
        setSocialM(!socialM)
      }
    }
  }, [socialData?.postSocialMediaList])

  useEffect(() => {
    if (socialData?.postDelete?.data?.status === 'success') {
      setMessage(socialData?.postDelete?.data?.message)
      setStatus('success')
    } else if (socialData?.postDelete?.data?.status === 'failure') {
      setMessage(socialData?.postDelete?.data?.message)
      setStatus('error')
    }
  }, [socialData?.postDelete?.data?.status])


  useEffect(() => {
    if (globalState?.updateOrder?.data?.status === 'success') {
      setMessage(globalState?.updateOrder?.data?.message)
      setStatus('success')
    } else if (globalState?.updateOrder?.data?.status === 'failure') {
      setMessage(globalState?.updateOrder?.data?.message)
      setStatus('error')
    }
  }, [globalState?.updateOrder?.data])

  // handling fields
  const handleChange = (e) => {
    setSocialMediaData({...socialMediaData, [e.target.name]: e.target.value})
  }

  // handling submit button
  const handleSubmit = () => {
    props.actions.postSocialMediaListAction(socialMediaData)
  }

  // handling cancel button
  const handleClick = () => {
    setSocialMediaData({})
    setSidebar(!sidebar)
    setErrorData({})
  }

  const handleMobileClick = () => {
    setSocialMediaData({})
    setSocialM(!socialM)
    setErrorData({})
  }


  // handling edit icon button
  const handleEdit = (e, item, order) => {
    if (!isMobile) {
      setSidebar(!sidebar)
    } else {
      setSocialM(!socialM)
    }
    const currentItem = socialMediaList.filter((data) => data?.id === item)
    setSocialMediaData({
      social_media_id: currentItem[0]?.social_media_id,
      url: currentItem[0]?.url,
      sm_version_id: item,
      update_id: currentItem[0]?.update_id,
      order: currentItem[0]?.order,
    })
    setErrorData({})
  }

  // handle delete icon
  const handleDelete = (e, Id) => {
    setOpenDialog(!openDialog)
    const currentItem = socialMediaList.filter((data) => data.id === Id)
    setDeleteId(currentItem[0]?.id)
  }

  const handleConfirm = () => {
    setOpenDialog(!openDialog)
    let obj = {
      data_type: 'social-media',
      version_id: deleteId,
    }
    props.actions.postDeleteAction(obj)
  }

  // handling snackbar close
  const handleSnackBarClose = () => {
    // setMessageForPublish('')
    setMessage('')
    setStatus('')
    props.actions.cleanUpUserState()
  }


  const onDragEnd = (result) => {
    const currentPosition = result.draggableId
    const finalPosition = result.destination.index

    const currentPos = parseInt(currentPosition)
    const finalPos = parseInt(finalPosition)

    const currentVersionId = socialMediaList.filter((item) => item.order === currentPos)
    let obj = {
      data: [
        {
          version_id: currentVersionId[0]?.id,
          order: finalPos,
        },
      ],
    }

    let type = 'social-media'
    props.actions.updateOrderAction(obj, type)

  }


  const handleEmptyState = () => {
    if (!isMobile) {
      setSidebar(!sidebar)
    } else {
      setSocialM(!socialM)
    }
  }

  const msg = localStorage.getItem('messageForPublish')

  return (
    <MyDiv>
      {(socialData?.postSocialMediaList?.loading || socialState?.getDetailsData?.loading) &&
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
      {socialM ? <Box>
        <SocialMediaEdit
          socialmedialist={socialMediaStaticList}
          socialMediaData={socialMediaData}
          handleChange={handleChange}
          errorData={errorData}
        />
        <Box className="flex_btn">
          <CustomButton onClick={handleSubmit} className="btn_submit" title={t('Submit')} />
          <CustomButton onClick={handleMobileClick} className="btn_cancel" title={t('Cancel')} />
        </Box>
      </Box> : <Box>
        {socialMediaList?.length <= 0 ? <Box>
          <CustomNoDataBox handleEmptyState={handleEmptyState} className1="icn_btn" startIcon={<Group />} title2={t('NoSocialMediafound')} title3={t('AddSocialMedia2')} />
        </Box> : <Box className="card_box">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {socialMediaList?.map((item) => {
                    return (
                      <Draggable index={item.order} key={item.order.toString()} draggableId={item.order.toString()}>
                        {(provided, snapshot) => (
                          <CustomGridCard provided={provided}
                            snapshot={snapshot}
                          >
                            <Grid container md={12} xs={12} sm={12} className="card_grid">
                              <Grid item md={2} className="icon_text1">
                                <img className="sm_icn" src={item?.social_media_icon} />
                                <Typography className="title_txt">{item?.social_media_name}</Typography>
                              </Grid>
                              <Grid item md={10} className="icon_text2">
                                <Typography ml={3} className="text_box">{item?.url}</Typography>
                                <Box className="flex_icns">
                                  <IconButton
                                    onClick={(e) => handleEdit(e, item?.id, item?.order)}
                                    className="edit_icon"
                                  ><Edit className="icn_size" /></IconButton>
                                  <IconButton className="delete_icon" onClick={(e) => handleDelete(e, item?.id)}>
                                    <Delete className="icn_size" /></IconButton>
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
          <Box className="btn_box">
            <CustomButton title={t('AddNew')} startIcon={<Add />} className="add_btn_mobile" onClick={handleMobileClick} />
          </Box>
          <Box>
            <CustomButton title={t('AddNew')} startIcon={<Add />} onClick={handleClick} className="add_btn" />
          </Box>
        </Box>}
      </Box>}
      <CustomAddNew
        sidebarTitle={socialMediaData.social_media_id ? t('EditSocialMedia') : t('AddSocialMedia')}
        sidebar={sidebar}
        handleClick={handleClick}
      >
        <SocialMediaForm
          socialmedialist={socialMediaStaticList}
          socialMediaData={socialMediaData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleClick={handleClick}
          errorData={errorData}
        />
      </CustomAddNew>
      <SnackbarComponent
        message={message}
        severity={status}
        open={message?.length > 0}
        close={handleSnackBarClose}
      />
      <CustomDialog
        title={t('SocialMedia')}
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

export default connect(null, mapDispatchToProps)(SocialMedia)

