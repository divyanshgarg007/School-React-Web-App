/* eslint-disable no-use-before-define */
/* eslint-disable radix */
import React, {useEffect, useState} from 'react'
import {Add, Delete, Edit, Language} from '@mui/icons-material'
import {Box, Grid, IconButton, Typography} from '@mui/material'
import {useTranslation} from 'react-i18next'
import {connect, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import {isMobile} from 'react-device-detect'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import {CustomNoDataBox, CustomGridCard, CustomAddNew, CustomButton, SnackBar, Loader} from '../../../../components'
import LanguagesEdit from '../LanguagesEdit'
import {LanguagesForm} from '..'
import {ActionCreators} from '../../../../redux/actions'
import CustomDialog from '../../../../components/CustomDialog/customDialog'
import MyDiv from './languages.style'

const Languages = (props) => {
  const {t} = useTranslation()
  const [openDialog, setOpenDialog] = useState(false)
  const [deleteId, setDeleteId] = useState()
  const [searchName, setSearchName] = useState('')
  const [sidebar, setSidebar] = useState(false)
  const [languagesM, setLanguagesM] = useState(false)
  const [languageData, setLanguageData] = useState({})
  const [languageList, setLanguageList] = useState([])
  const [staticLanguageList, setStaticLanguageList] = useState()
  const [staticLanguageListFilter, setStaticLanguageListFilter] = useState()
  const [staticProficiencyList, setStaticProficiencyList] = useState()
  const [isChecked, setIsChecked] = useState(false)
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [messageForPublish, setMessageForPublish] = useState('')
  const [errorData, setErrorData] = useState({})
  const languagesState = useSelector((state) => state.masterState)
  const languagePost = useSelector((state) => state.languagesListState)
  const globalState = useSelector((state) => state.globalState)

  useEffect(() => {
    props.actions.getListAction()
  }, [])

  useEffect(() => {
    if (languagesState?.getDetailsData?.data === null) {
      props.actions.getDetailsAction()
    }
  }, [])

  useEffect(() => {
    setStaticLanguageListFilter(globalState?.getList?.data?.payload?.languages)
    setStaticLanguageList(globalState?.getList?.data?.payload?.languages)
  }, [globalState?.getList?.data?.payload?.languages])

  useEffect(() => {
    setStaticProficiencyList(globalState?.getList?.data?.payload?.proficiency_list)
  }, [globalState?.getList?.data?.payload?.proficiency_list])

  useEffect(() => {
    setLanguageList(languagesState?.getDetailsData?.data?.userLanguage)
  }, [languagesState?.getDetailsData?.data])

  // post
  useEffect(() => {
    setErrorData(languagePost?.postLanguagesList?.error?.errors)
    if (languagePost?.postLanguagesList?.data?.status === 'success') {
      setMessageForPublish(t('messageForPublish'))
      localStorage.setItem('messageForPublish', t('messageForPublish'))
      setMessage(languagePost?.postLanguagesList?.data?.message)
      setStatus('success')
      if (!isMobile) {
        setSidebar(!sidebar)
      } else {
        setLanguagesM(!languagesM)
      }
    } else if (languagePost?.postLanguagesList?.data?.status === 'failure') {
      setMessage(languagePost?.postLanguagesList?.data?.message)
      setStatus('error')
      if (!isMobile) {
        setSidebar(!sidebar)
      } else {
        setLanguagesM(!languagesM)
      }
    }
  }, [languagePost?.postLanguagesList])

  useEffect(() => {
    if (globalState?.updateOrder?.data?.status === 'success') {
      setMessage(globalState?.updateOrder?.data?.message)
      setStatus('success')
    } else if (globalState?.updateOrder?.data?.status === 'failure') {
      setMessage(globalState?.updateOrder?.data?.message)
      setStatus('error')
    }
  }, [globalState?.updateOrder?.data])

  useEffect(() => {
    if (languagePost?.postDelete?.data?.status === 'success') {
      setMessage(languagePost?.postDelete?.data?.message)
      setStatus('success')
    } else if (languagePost?.postDelete?.data?.status === 'failure') {
      setMessage(languagePost?.postDelete?.data?.message)
      setStatus('error')
    }
  }, [languagePost?.postDelete?.data?.status])

  // handling checkbox
  const handleCheckBox = (e) => {
    setIsChecked(!isChecked)
  }

  // handling fields
  const handleChange = (e) => {
    setLanguageData({...languageData, [e.target.name]: e.target.value})
    setStaticLanguageList(staticLanguageListFilter)
  }

  // handling submit button
  const handleSubmit = () => {
    props.actions.postLanguagesListAction({...languageData, isNative: isChecked})
  }

  // handling cancel button
  const handleClick = () => {
    setSidebar(!sidebar)
    setLanguageData({})
    setErrorData({})
    setIsChecked(false)
    setStaticLanguageList(staticLanguageListFilter)
  }


  const handleMobileView = () => {
    setLanguagesM(!languagesM)
    setLanguageData({})
    setErrorData({})
    setIsChecked(false)
    setStaticLanguageList(staticLanguageListFilter)
  }


  // handling edit icon button click
  const handleEdit = (e, item, order) => {
    if (!isMobile) {
      setSidebar(!sidebar)
    } else {
      setLanguagesM(!languagesM)
    }
    const currentItem = languageList.filter((data) => data?.id === item)
    setLanguageData({
      language: currentItem[0]?.language,
      level: currentItem[0]?.level,
      language_version_id: item,
      update_id: currentItem[0]?.update_id,
      order: currentItem[0]?.order,
    })
    setIsChecked(currentItem[0]?.isNative)
    setErrorData({})
  }

  // handle delete icon
  const handleDelete = (e, Id) => {
    setOpenDialog(!openDialog)
    const currentItem = languageList.filter((data) => data.id === Id)
    setDeleteId(currentItem[0]?.id)
  }

  const handleConfirm = () => {
    setOpenDialog(!openDialog)
    let obj = {
      data_type: 'language',
      version_id: deleteId,
    }
    props.actions.postDeleteAction(obj)
  }

  const handleSearch = (e) => {
    const searchValue = e.target.value
    setSearchName(searchValue)
    if (searchValue !== '') {
      const result = staticLanguageListFilter.filter((item) => {
        return item.language_name.toLowerCase().startsWith(searchValue.toLowerCase())
      })
      setStaticLanguageList(result)
    } else {
      setStaticLanguageList(staticLanguageListFilter)
    }
  }

  // handling snackbar close
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

    const currentVersionId = languageList.filter((item) => item.order === currentPos)
    let obj = {
      data: [
        {
          version_id: currentVersionId[0]?.id,
          order: finalPos,
        },
      ],
    }

    let type = 'language'
    props.actions.updateOrderAction(obj, type)

  }


  const handleEmptyState = () => {
    if (!isMobile) {
      setSidebar(!sidebar)
    } else {
      setLanguagesM(!languagesM)
    }
  }

  const msg = localStorage.getItem('messageForPublish')

  return (
    <MyDiv>
      {(languagePost?.postLanguagesList?.loading || languagesState?.getDetailsData?.loading) &&
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
      {languagesM ? <Box>
        <LanguagesEdit
          value={searchName}
          handleSearch={handleSearch}
          languageList={staticLanguageList}
          proficiencyList={staticProficiencyList}
          languageData={languageData}
          handleChange={handleChange}
          errorData={errorData}
          handleCheckBox={handleCheckBox}
          isChecked={isChecked}
        />
        <Box className="flex_btn">
          <CustomButton onClick={handleSubmit} className="btn_submit" title={t('Submit')} />
          <CustomButton onClick={handleMobileView} className="btn_cancel" title={t('Cancel')} />
        </Box>
      </Box> : <Box>
        {languageList?.length <= 0 ? <Box>
          <CustomNoDataBox handleEmptyState={handleEmptyState} className1="icn_btn" startIcon={<Language />}title2={t('NoLanguagesfound')} title3={t('AddLanguage2')} />
        </Box> : <Box className="card_box">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {languageList?.map((item) => {
                    return (
                      <Draggable index={item.order} key={item.order.toString()} draggableId={item.order.toString()}>
                        {(provided, snapshot) => (
                          <CustomGridCard provided={provided}
                            snapshot={snapshot}
                          >
                            <Grid container md={12} xs={12} sm={12} className="card_grid">
                              <Grid item md={2} className="icon_text1">
                                <Typography className="title_txt">{item?.language_name}</Typography>
                              </Grid>
                              <Grid item md={10} className="icon_text2">
                                <Typography className="title_txt">{item?.proficiency_name}</Typography>
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
          <Box className="btn_box">
            <CustomButton title={t('AddNew')} startIcon={<Add />} className="add_btn_mobile" onClick={handleMobileView} />
          </Box>
          <Box>
            <CustomButton title={t('AddNew')} startIcon={<Add />} onClick={handleClick} className="add_btn" />
          </Box>
        </Box> }
      </Box>}
      <CustomAddNew
        sidebarTitle={languageData.language_version_id ? t('EditLanguage') : t('AddLanguage')}
        sidebar={sidebar}
        handleClick={handleClick}
      >
        <LanguagesForm
          value={searchName}
          handleSearch={handleSearch}
          languageList={staticLanguageList}
          proficiencyList={staticProficiencyList}
          languageData={languageData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errorData={errorData}
          handleClick={handleClick}
          handleCheckBox={handleCheckBox}
          isChecked={isChecked}
        />
      </CustomAddNew>
      <SnackBar
        message={message}
        severity={status}
        open={message?.length > 0}
        close={handleSnackBarClose}
      />
      <CustomDialog
        title={t('Language')}
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

export default connect(null, mapDispatchToProps)(Languages)

