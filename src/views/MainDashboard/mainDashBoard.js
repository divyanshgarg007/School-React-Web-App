/* eslint-disable max-len */
import React, {useState, useEffect} from 'react'
import {Article, Email, Error, Image, List, ListAlt, LocationOn, Reply, School, Videocam} from '@mui/icons-material'
import {Box, Grid, IconButton, Tab, Typography} from '@mui/material'
import {TabContext, TabList, TabPanel} from '@mui/lab'
import {connect, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import moment from 'moment'
import {useParams} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {ActionCreators} from '../../redux/actions'
import {CustomButton} from '../../components/Inputs'
import {Loader, SnackBar} from '../../components'
// import * as routesNames from '../../constants/routes'
import {About, EduExp, Lessons, Images, Video, ContactUs, AuthBottomPanelMain, AuthTopPanelMain, SkillsInterests} from './components'
import MyDiv from './mainDashBoard.style'

const MainDashBoard = (props) => {
  const {t} = useTranslation()
  // const history = useHistory()
  const [categoryList, setCategoryList] = useState()
  const [teachersData, setTeachersData] = useState([])
  const [value, setValue] = useState('1')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [accountStatus, setAccountStatus] = useState()
  const [inputValue, setInputValue] = useState({})
  const [errorData, setErrorData] = useState({})
  const masterState = useSelector((state) => state.masterState)
  const globalState = useSelector((state) => state.globalState)
  const categoryState = useSelector((state) => state.categoryState)
  const [emailErr, setEmailErr] = useState(false)
  const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')

  // eslint-disable-next-line no-invalid-regexp, no-useless-escape
  const teacherId = useParams()

  useEffect(() => {
    props.actions.getCategoryAction()
  }, [])

  const id = teacherId?.id

  useEffect(() => {
    setCategoryList(categoryState?.getCategorySubCategory?.data)
  }, [categoryState?.getCategorySubCategory?.data])

  let result = id.replace(/[^0-9]/g, '')

  useEffect(() => {
    props.actions.getTeacherAction(Number(result))
  }, [])

  useEffect(() => {
    // const filteredTeachers = masterState?.getTeacherData?.data?.filter((item) => item.id === Number(teacherId.id))
    // if (filteredTeachers && filteredTeachers.length === 0) {
    //   history.push(routesNames.PAGENOTFOUND)
    // }
    setTeachersData(masterState?.getTeacherData?.data)

  }, [masterState?.getTeacherData?.data])

  useEffect(() => {
    let obj = {
      user_id: Number(result),
    }
    props.actions.postAccountStatusAction(obj)
  }, [result])

  useEffect(() => {
    setAccountStatus(masterState?.postAccountStatus?.data?.data?.payload?.status)
  }, [masterState?.postAccountStatus?.data?.data?.payload?.status])


  useEffect(() => {
    if (globalState?.postMessage?.data?.status === 'success') {
      setMessage(globalState?.postMessage?.data?.message)
      setStatus('success')
      setInputValue({})
    } else {
      setMessage(globalState?.postMessage?.data?.message)
      setStatus('error')
    }
  }, [globalState?.postMessage?.data])

  useEffect(() => {
    setErrorData(globalState?.postMessage?.error?.errors)
  }, [globalState?.postMessage])


  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handlePhone = (val) => {
    setInputValue({...inputValue, mobile: val})
  }
  const handleChangeMessage = (e) => {
    setInputValue({...inputValue, [e.target.name]: e.target.value, user_id: Number(teacherId.id)})
  }

  const handleSubmit = () => {
    if (!validEmail.test(inputValue.email)) {
      setEmailErr(true)
    } else {
      props.actions.postMessageAction(inputValue)
      setInputValue({})
      setEmailErr(false)
    }
  }

  const handleSnackBarClose = () => {
    setMessage('')
    setStatus('')
    props.actions.cleanUpUserState()
  }


  return (
    <MyDiv>
      {(masterState?.getTeacherData?.loading || globalState?.postMessage?.loading) && (
        <div>
          <Loader />
        </div>
      )}
      <AuthTopPanelMain categoryList={categoryList} title1={t('Home')} title2={t('allCategories')} title3={t('Blog')} title4={t('ContactUs')} title5={t('Login')} title6={t('Register')} />
      {accountStatus === 1 && <Box>
        <Grid className="img_grid" container>
          {teachersData?.data?.gallery?.coverimage?.[0]?.media_url ?
            <img className="img_style" src={teachersData?.data?.gallery?.coverimage?.[0]?.media_url} alt="pic" />
            : <div className="NoBackground" />}
        </Grid>
        <Box className="main_body">
          <Box className="card_style">
            <Box className="bg_white">
              <Grid container md={12}>
                <Box className="flex_box2">
                  <Typography className="text1_label">{teachersData?.data?.userDetails?.[0]?.name} {teachersData?.data?.userDetails?.[0]?.surname}</Typography>
                  <CustomButton title="New" className="btn1_text" />
                </Box>
              </Grid>
              <Grid container md={12}>
                <Grid item md={3}>
                  <Box className="flex_box">
                    <IconButton className="icn_btn"><LocationOn /></IconButton>
                    <Typography className="text2_label">{teachersData?.data?.userLocation?.[0]?.address} {teachersData?.data?.userLocation?.[0]?.city} {teachersData?.[0]?.data?.userLocation?.[0]?.state} {teachersData?.[0]?.data?.userLocation?.[0]?.country}
                    </Typography>
                  </Box>
                  <Box className="flex_box">
                    <Typography className="text3_label">{t('Category')}:&nbsp;</Typography>
                    <Typography className="text4_label">
                      {teachersData?.data?.userLesson?.[0]?.sub_category_name}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={3}>
                  <Box className="flex_box">
                    <Typography className="text3_label">{t('membersince')}:&nbsp;</Typography>
                    <Typography className="text4_label">{teachersData?.created_at ? moment(teachersData?.created_at).format('DD-MM-YYYY') : ''}</Typography>
                  </Box>
                  <Box className="flex_box">
                    <Typography className="text3_label">{t('views')}:&nbsp;</Typography>
                    <Typography className="text4_label">{teachersData?.views}</Typography>
                  </Box>
                  <Box className="flex_box">
                    <Typography className="text3_label">{t('Cost')}:&nbsp;</Typography>
                    <Typography className="text4_label">{t('StartingCost')} {teachersData?.data?.userLesson?.[0]?.cost}</Typography>
                  </Box>
                </Grid>
                <Grid item md={6}>
                  <Box className="grid_box">
                    <CustomButton title={t('Share')} startIcon={<Reply className="reply_icn" />} className="btn3_text" />
                    <CustomButton title={t('Report')} startIcon={<Error />} className="btn4_text" />
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box className="tab_box">
              <TabContext value={value}>
                <Box className="bg_white1">
                  <TabList className="tab_container"
                    textColor="#262728"
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    TabIndicatorProps={{
                      style: {
                        display: 'none',
                        backgroundColor: '#FFFFFF',
                      },
                    }}
                  >
                    <Tab className="tab_names" icon={<Article className="icn_style" />} iconPosition="start" label={t('About')} value="1" />
                    <Tab className="tab_names" icon={<ListAlt className="icn_style" />} iconPosition="start" label={t('Lessons')} value="2" />
                    <Tab className="tab_names" icon={<School className="icn_style" />} iconPosition="start" label={t('eduExp')} value="3" />
                    <Tab className="tab_names" icon={<List className="icn_style" />} iconPosition="start" label={t('Skills&Interests')} value="4" />
                    <Tab className="tab_names" icon={<Image className="icn_style" />} iconPosition="start" label={t('Images')} value="5" />
                    <Tab className="tab_names" icon={<Videocam className="icn_style" />} iconPosition="start" label={t('Videos')} value="6" />
                    <Tab className="tab_names" icon={<Email className="icn_style" />} iconPosition="start" label={t('ContactMe')} value="7" />
                  </TabList>
                </Box>
                <Box className="bg_white2">
                  <TabPanel value="1" className="tab_panel"><About teachersData={teachersData} /></TabPanel>
                  <TabPanel value="2" className="tab_panel"><Lessons teachersData={teachersData} /></TabPanel>
                  <TabPanel value="3" className="tab_panel"><EduExp teachersData={teachersData} /></TabPanel>
                  <TabPanel value="4" className="tab_panel"><SkillsInterests teachersData={teachersData} /></TabPanel>
                  <TabPanel value="5" className="tab_panel"><Images teachersData={teachersData} /></TabPanel>
                  <TabPanel value="6" className="tab_panel"><Video teachersData={teachersData} /></TabPanel>
                  <TabPanel value="7" className="tab_panel"><ContactUs handlePhone={handlePhone} emailErr={emailErr} handleSubmit={handleSubmit} handleChangeMessage={handleChangeMessage} inputValue={inputValue} errorData={errorData} /></TabPanel>
                </Box>
              </TabContext>
            </Box>
          </Box>
        </Box>
      </Box>}
      {accountStatus === 2 && <Typography sx={{display: 'flex', justifyContent: 'center', margin: '300px'}}>Your Account is disabled. Please Enable your Account.</Typography>}
      <AuthBottomPanelMain />
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

export default connect(null, mapDispatchToProps)(MainDashBoard)
