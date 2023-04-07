/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import {Box, IconButton, Typography} from '@mui/material'
import {AccountCircle, ChatBubbleOutline, Error, HighlightOff} from '@mui/icons-material'
import {useTranslation} from 'react-i18next'
import {bindActionCreators} from 'redux'
import {connect, useSelector} from 'react-redux'
import {CustomNoDataBox, Loader} from '../../components'
import {ActionCreators} from '../../redux/actions'
import MyDiv from './dashboard.style'
import {Chart, DashboardCard} from './components'

const Dashboard = (props) => {

  const {t} = useTranslation()
  const [staticData, setStaticData] = useState()
  const [userId, setUserId] = useState()
  const [message, setMessage] = useState('')
  const userData = useSelector((state) => state.masterState)
  const globalData = useSelector((state) => state.globalState)

  const handleSnackBarClose = () => {
    setMessage('')
    props.actions.cleanUpUserState()
  }

  useEffect(() => {
    props.actions.getDetailsAction()
  }, [])

  useEffect(() => {
    props.actions.getStaticDataAction(userId)
  }, [userId])

  useEffect(() => {
    setStaticData(globalData?.getStaticData?.data?.data?.payload)
  }, [globalData?.getStaticData?.data?.data?.payload])


  useEffect(() => {
    setUserId(userData?.getIsPublish?.data?.id)
  }, [userData?.getIsPublish?.data])


  useEffect(() => {
    if (userData?.postTeacherData?.data?.status === 'success') {
      setMessage(
        <Typography className="publish_msg">
          {t('publishMessage')}
          <IconButton onClick={handleSnackBarClose} className="close_icn"><HighlightOff /></IconButton>
        </Typography>
      )
    }
  }, [userData?.postTeacherData?.data])


  return (
    <MyDiv>
      {userData?.getDetailsData?.loading &&
      <div>
        <Loader />
      </div>
      }
      <Box className="dashboard_box">
        <Typography gutterBottom variant="h5" component="div" className="text-font-arial">
          {t('Welcome')}
        </Typography>
        {message}
        <Box className="box_items">
          <DashboardCard title={t('ProfileVisits')} subtitle={staticData?.total_views} icon={<AccountCircle className="card_icons" />} />
          <DashboardCard title={t('SystemMessages')} subtitle={staticData?.total_message} icon={<ChatBubbleOutline className="card_icons" />} />
        </Box>
        <Box className="card_box">
          <Typography className="dash_texts" gutterBottom variant="h5" component="div">
            {t('Statisticstodate')}
          </Typography>
          <Box className="flex_icn">
            {staticData?.monthly_views?.length === 0 ? <CustomNoDataBox className1="icn_btn" title2={t('Nodatayet')} startIcon={<Error />} /> : <Chart dataStatic={staticData?.monthly_views} />}
          </Box>
        </Box>
      </Box>
    </MyDiv>
  )
}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(Dashboard)
