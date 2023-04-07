/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable radix */
import {Description, Add, Delete, Edit} from '@mui/icons-material'
import {Box, Typography, Grid, IconButton} from '@mui/material'
import {useTranslation} from 'react-i18next'
import React, {useEffect, useState} from 'react'
import {bindActionCreators} from 'redux'
import {isMobile} from 'react-device-detect'
import {connect, useSelector} from 'react-redux'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import {CustomAddNew, CustomButton, CustomNoDataBox, SnackBar, Loader} from '../../components'
import {LessonEdit, ListCardLesson, LessonsForm} from '../MyLessons/components'
import {ActionCreators} from '../../redux/actions'
import CustomDialog from '../../components/CustomDialog/customDialog'
import MyDiv from './myLessons.style'

const MyLessons = (props) => {

  const {t} = useTranslation()
  const [packages, setPackages] = useState([])
  const [mode, setMode] = useState([])
  const [level, setLevel] = useState([])
  const [sidebar, setSidebar] = useState(false)
  const [lessonsMobileEdit, setLessonsMobileEdit] = useState(false)
  const [lessonsData, setLessonsData] = useState({})
  const [lessonsList, setLessonsList] = useState([])
  const [messageForPublish, setMessageForPublish] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [globalData, setGlobalData] = useState()
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [errorData, setErrorData] = useState({})
  const [openDialog, setOpenDialog] = useState(false)
  const [deleteId, setDeleteId] = useState()
  const [allChecked, setAllChecked] = useState(false)
  const [checkedSlots, setCheckedSlots] = useState([
    {
      day: 'wednesday',
      lot: 'morning',
      is_available: 0,
      update_id: null,
      id: null,
    },
    {
      day: 'monday',
      lot: 'morning',
      is_available: 0,
      update_id: null,
      id: null,
    },
    {
      day: 'tuesday',
      lot: 'morning',
      is_available: 0,
      update_id: null,
      id: null,
    },
    {
      day: 'thursday',
      lot: 'morning',
      is_available: 0,
      update_id: null,
      id: null,
    },
    {
      day: 'friday',
      lot: 'morning',
      is_available: 0,
      update_id: null,
      id: null,
    },
    {
      day: 'saturday',
      lot: 'morning',
      is_available: 0,
      update_id: null,
      id: null,
    },
    {
      day: 'sunday',
      lot: 'morning',
      is_available: 0,
      update_id: null,
      id: null,
    },
    {
      day: 'sunday',
      lot: 'afternoon',
      is_available: 0,
      update_id: null,
      id: null,
    },
    {
      day: 'saturday',
      lot: 'afternoon',
      is_available: 0,
      update_id: null,
      id: null,
    },
    {
      day: 'friday',
      lot: 'afternoon',
      is_available: 0,
      update_id: null,
      id: null,
    },
    {
      day: 'thursday',
      lot: 'afternoon',
      is_available: 0,
      update_id: null,
      id: null,
    },
    {
      day: 'wednesday',
      lot: 'afternoon',
      is_available: 0,
      update_id: null,
      id: null,
    },
    {
      day: 'tuesday',
      lot: 'afternoon',
      is_available: 0,
      update_id: null,
      id: null,
    },
    {
      day: 'monday',
      lot: 'afternoon',
      is_available: 0,
      update_id: null,
      id: null,
    },
    {
      day: 'monday',
      lot: 'evening',
      is_available: 0,
      update_id: null,
      id: null,
    },
    {
      day: 'tuesday',
      lot: 'evening',
      is_available: 0,
      update_id: null,
      id: null,
    },
    {
      day: 'wednesday',
      lot: 'evening',
      is_available: 0,
      update_id: null,
      id: null,
    },
    {
      day: 'thursday',
      lot: 'evening',
      is_available: 0,
      update_id: null,
      id: null,
    },
    {
      day: 'friday',
      lot: 'evening',
      is_available: 0,
      update_id: null,
      id: null,
    },
    {
      day: 'saturday',
      lot: 'evening',
      is_available: 0,
      update_id: null,
      id: null,
    },
    {
      day: 'sunday',
      lot: 'evening',
      is_available: 0,
      update_id: null,
      id: null,
    },
  ])
  const globalState = useSelector((state) => state.globalState)
  const categoryState = useSelector((state) => state.categoryState)
  const lessonsState = useSelector((state) => state.masterState)
  const lessonsPost = useSelector((state) => state.lessonsDataState)

  useEffect(() => {
    props.actions.getListAction()
  }, [])

  useEffect(() => {
    props.actions.getCategoryAction()
  }, [])

  useEffect(() => {
    setGlobalData(globalState?.getList?.data?.payload)
  }, [globalState?.getList?.data])

  useEffect(() => {
    setCategory(categoryState?.getCategorySubCategory?.data)
  }, [categoryState?.getCategorySubCategory?.data])


  useEffect(() => {
    props.actions.getListAction()
  }, [])

  useEffect(() => {
    if (lessonsState?.getDetailsData?.data === null) {
      props.actions.getDetailsAction()
    }
  }, [])

  useEffect(() => {
    setLessonsList(lessonsState?.getDetailsData?.data?.userLesson)
  }, [lessonsState?.getDetailsData?.data])

  useEffect(() => {
    setErrorData(lessonsPost?.postLessons?.error?.errors)
  }, [lessonsPost?.postLessons?.error?.errors])


  // post
  useEffect(() => {
    if (lessonsPost?.postLessons.data?.status === 'success') {
      setMessageForPublish(t('messageForPublish'))
      localStorage.setItem('messageForPublish', t('messageForPublish'))
      setMessage(lessonsPost?.postLessons?.data?.message)
      setStatus('success')
      if (!isMobile) {
        setSidebar(!sidebar)
      } else {
        setLessonsMobileEdit(!lessonsMobileEdit)
      }
    } else if (lessonsPost?.postLessons?.data?.status === 'failure') {
      setMessage(lessonsPost?.postLessons?.data?.message)
      setStatus('error')
      if (!isMobile) {
        setSidebar(!sidebar)
      } else {
        setLessonsMobileEdit(!lessonsMobileEdit)
      }
    }
  }, [lessonsPost?.postLessons?.data?.status])

  useEffect(() => {
    if (checkedSlots?.filter((elem) => elem.is_available === 0).length === 0) {
      setAllChecked(true)
    } else {
      setAllChecked(false)
    }
  }, [checkedSlots])

  useEffect(() => {
    if (lessonsPost?.postDelete?.data?.status === 'success') {
      setMessage(lessonsPost?.postDelete?.data?.message)
      setStatus('success')
    } else if (lessonsPost?.postDelete?.data?.status === 'failure') {
      setMessage(lessonsPost?.postDelete?.data?.message)
      setStatus('error')
    }
  }, [lessonsPost?.postDelete?.data?.status])


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
    setLessonsData({...lessonsData, [e.target.name]: e.target.value})
  }

  const handleDescription = (value) => {
    setLessonsData({...lessonsData, description: value})
  }

  const handlePackage = (e) => {
    setPackages(e.target.value)
  }
  const handleMode = (e) => {
    setMode(e.target.value)
  }
  const handleLevel = (e) => {
    setLevel(e.target.value)
  }

  const setCategoryId = (id) => {
    const subcategories = category.filter((cat) => cat.id === parseInt(id))[0]?.admin_sub_category
    setSubCategory(subcategories)
  }
  const handleChangeCategory = (e) => {
    setCategoryId(e.target.value)
    setLessonsData({...lessonsData, [e.target.name]: e.target.value})
  }

  // handling submit button
  const handleSubmit = () => {
    setPackages([])
    setMode([])
    setLevel([])
    setAllChecked(false)
    setLessonsData({})
    setCheckedSlots((checkedSlots) => checkedSlots.map((slot) => {
      return {...slot, is_available: 0}
    }))
    props.actions.postLessonsListAction({...lessonsData, availability: checkedSlots, lesson_is_provided: packages.toString(), lesson_provided_to_place: mode.toString(), provided_to: level.toString()})
  }

  const handleCancel = () => {
    setPackages([])
    setMode([])
    setLevel([])
    setAllChecked(false)
    setLessonsData({})
    setCheckedSlots((checkedSlots) => checkedSlots.map((slot) => {
      return {...slot, is_available: 0}
    }))
    setLessonsMobileEdit(!lessonsMobileEdit)
  }

  const handleCheckBox = (e) => {
    const {value} = e.target
    // getting the day and lot from the entire value string
    const day = value.split('-')[0]
    const lot = value.split('-')[1]
    // checking if the current value already exists in the state and then filtering it out
    if (checkedSlots.find((slot) => slot.day === day && slot.lot === lot && slot.is_available === 1)) {
      const updatedSlot = checkedSlots?.find((obj) => {
        return (obj.day === day && obj.lot === lot)
      })
      const otherSlots = checkedSlots?.filter((obj) => {
        return obj.day !== day || obj.lot !== lot
      })
      setCheckedSlots([...otherSlots, {...updatedSlot, is_available: 0}])
    } else {
      const updatedSlot = checkedSlots?.find((obj) => {
        return (obj.day === day && obj.lot === lot)
      })
      const otherSlots = checkedSlots?.filter((obj) => {
        return obj.day !== day || obj.lot !== lot
      })
      setCheckedSlots([...otherSlots, {...updatedSlot, is_available: 1}])
    }
  }
  const handleCheckAll = (e) => {
    setAllChecked(e.target.checked)
    setCheckedSlots(
      checkedSlots.map((elem) => {
        return {...elem, is_available: e.target.checked ? 1 : 0}
      })
    )
  }


  // handling cancel button
  const handleClick = () => {
    setAllChecked(false)
    setSidebar(!sidebar)
    setCheckedSlots((checkedSlots) => checkedSlots.map((slot) => {
      return {...slot, is_available: 0}
    }))
    setLessonsData({})
    setErrorData({})
    setPackages([])
    setMode([])
    setLevel([])
  }

  //handling edit icon click
  const handleEdit = (e, item, order) => {
    if (!isMobile) {
      setSidebar(!sidebar)
    } else {
      setLessonsMobileEdit(!lessonsMobileEdit)
    }
    const currentItem = lessonsList.filter((data) => data?.id === item)
    setCategoryId(currentItem[0]?.lesson_category)
    setLessonsData({
      lesson_category: currentItem[0]?.lesson_category,
      lesson_sub_category: currentItem[0]?.lesson_sub_category,
      cost_per: currentItem[0]?.cost_per,
      cost: currentItem[0]?.cost,
      description: currentItem[0]?.description,
      lesson_version_id: item,
      update_id: currentItem[0]?.update_id,
      order: currentItem[0]?.order,
    })
    setPackages(JSON.parse(`[${currentItem[0].lesson_is_provided}]`))
    setMode(JSON.parse(`[${currentItem[0].lesson_provided_to_place}]`))
    setLevel(JSON.parse(`[${currentItem[0].provided_to}]`))

    setCheckedSlots(currentItem[0]?.availability)
    setErrorData({})
  }

  // handle delete icon
  const handleDelete = (e, Id) => {
    setOpenDialog(!openDialog)
    const currentItem = lessonsList.filter((data) => data.id === Id)
    setDeleteId(currentItem[0]?.id)
  }

  const handleConfirm = () => {
    setOpenDialog(!openDialog)
    let obj = {
      data_type: 'lesson',
      version_id: deleteId,
    }
    props.actions.postDeleteAction(obj)
  }
  //handling snackbar close
  const handleSnackBarClose = () => {
    setMessage('')
    setStatus('')
    props.actions.cleanUpUserState()
  }


  const onDragEnd = (result) => {
    const currentPosition = result.draggableId
    const finalPosition = result.destination.index

    const currentPos = parseInt(currentPosition)
    const finalPos = parseInt(finalPosition)

    const currentVersionId = lessonsList.filter((item) => item.order === currentPos)
    let obj = {
      data: [
        {
          version_id: currentVersionId[0]?.id,
          order: finalPos,
        },
      ],
    }

    let type = 'lesson'
    props.actions.updateOrderAction(obj, type)

  }

  const handleEmptyState = () => {
    if (!isMobile) {
      setSidebar(!sidebar)
    } else {
      setLessonsMobileEdit(!lessonsMobileEdit)
    }
  }

  const msg = localStorage.getItem('messageForPublish')

  return (
    <MyDiv>
      {(lessonsPost?.postLessons?.loading || lessonsState?.getDetailsData?.loading) &&
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
      <Box className="mylessons_box">
        {lessonsMobileEdit ? <Box>
          <Typography className="page_title">
            {lessonsData.lesson_version_id ? 'Edit lessons' : t('AddLesson')}
          </Typography>
          <LessonEdit
            handleDescription={handleDescription}
            packages={packages}
            mode={mode}
            level={level}
            handlePackage={handlePackage}
            handleMode={handleMode}
            handleLevel={handleLevel}
            handleChangeCategory={handleChangeCategory}
            handleCheckBox={handleCheckBox}
            handleCheckAll={handleCheckAll}
            checkedSlots={checkedSlots}
            allChecked={allChecked}
            lessonsData={lessonsData}
            category={category}
            subCategory={subCategory}
            description={t('Description')}
            availability={t('Availability')}
            globalData={globalData}
            errorData={errorData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <Box className="flex_btn">
            <CustomButton onClick={handleSubmit} className="btn_submit" title={t('Submit')} />
            <CustomButton onClick={handleCancel} className="btn_cancel" title={t('Cancel')} />
          </Box>
        </Box> : <Box>
          <Typography className="page_title">{t('Lessons')}</Typography>
          {lessonsList?.length <= 0 ?
            <Box>
              <CustomNoDataBox handleEmptyState={handleEmptyState} className1="icn_btn" startIcon={<Description />} title2={t('NoLessonsFound')} title3={t('AddLesson')} />
            </Box> : <Box><Box className="card_box">
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      {lessonsList?.map((item) => {
                        return (
                          <Draggable index={item.order} key={item.order.toString()} draggableId={item.order.toString()}>
                            {(provided, snapshot) => (
                              <ListCardLesson provided={provided}
                                snapshot={snapshot}
                              >
                                <Grid container md={12} xs={12} sm={12} className="card_grid">
                                  <Grid item md={11} xs={9} sm={9}>
                                    <Box className="grid_card">
                                      <Box className="flex_box" mb={2}>
                                        <Typography className="title_text">{item?.category_name}{','}&nbsp;</Typography>
                                        <Typography className="title_text1">{item?.sub_category_name}</Typography>
                                      </Box>
                                      <Box className="left-space">
                                        <Typography className="title_text2">{item?.provided_to_list[0]?.provided_to_name}</Typography>
                                        <Typography className="title_text2">{item?.provided_to_list[1]?.provided_to_name}</Typography>
                                        <Typography className="title_text2">{item?.provided_to_list[2]?.provided_to_name}</Typography>
                                      </Box>
                                    </Box>
                                  </Grid>
                                  <Grid item md={1} xs={3} sm={3} className="icon_text2">
                                    <Box className="flex_icns">
                                      <IconButton onClick={(e) => handleEdit(e, item?.id, item?.order)} className="edit_icon"><Edit className="icn_size" /></IconButton>
                                      <IconButton onClick={(e) => handleDelete(e, item?.id)} className="delete_icon"><Delete className="icn_size" /></IconButton>
                                    </Box>
                                  </Grid>
                                </Grid>
                              </ListCardLesson>
                            )}
                          </Draggable>
                        )
                      })}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </Box><Box className="btn_box">
              <CustomButton title={t('AddNew')} startIcon={<Add />} className="add_btn_mobile" onClick={() => setLessonsMobileEdit(!lessonsMobileEdit)} />
            </Box><Box>
              <CustomButton title={t('AddNew')} startIcon={<Add />} onClick={handleClick} className="add_btn" />
            </Box></Box>
          }
        </Box>
        }
      </Box>
      <CustomAddNew
        sidebarTitle={lessonsData.lesson_version_id ? t('EditLessons') : t('AddLesson')}
        sidebarTitleDesc={lessonsData.lesson_version_id ? t('EditDescription') : t('AddDescription')}
        sidebar={sidebar} handleClick={handleClick}
        type="lessonSidebar"
      >
        <LessonsForm
          handleDescription={handleDescription}
          handleChangeCategory={handleChangeCategory}
          handleClick={handleClick}
          category={category}
          subCategory={subCategory}
          addlesson={t('AddLesson')}
          description={t('Description')}
          availability={t('Availability')}
          sidebar={sidebar}
          globalData={globalData}
          errorData={errorData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleCheckBox={handleCheckBox}
          handleCheckAll={handleCheckAll}
          checkedSlots={checkedSlots}
          allChecked={allChecked}
          lessonsData={lessonsData}
          packages={packages}
          mode={mode}
          level={level}
          handlePackage={handlePackage}
          handleMode={handleMode}
          handleLevel={handleLevel}
        />
      </CustomAddNew>
      <SnackBar
        message={message}
        severity={status}
        open={message?.length > 0}
        close={handleSnackBarClose}
      />
      <CustomDialog
        title={t('Lesson')}
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

export default connect(null, mapDispatchToProps)(MyLessons)

