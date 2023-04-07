/* eslint-disable */
import {Box, Typography} from '@mui/material'
import React, {useState, useEffect} from 'react'
import {connect, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {CustomButton, Loader} from '../../../../components'
import SnackbarComponent from '../../../../components/SnackBar'
import {ActionCreators} from '../../../../redux/actions'
import {AboutCard, LocationCard, LessonCard, EducationCard, ExperienceCard, ImageCard, VideoCard} from '../../components'
import MyDiv from './approvalsPublish.style'
import * as routesNames from '../../../../constants/routes'

const ApprovalsPublish = (props) => {
  const history = useHistory()
  const [customerEditData, setCustomerEditData] = useState([])
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  // const [marker, setMarker] = useState({})
  const masterState = useSelector((state) => state.masterState)
  const userId = masterState?.getTeacherFinal?.data?.id

  useEffect(() => {
    setCustomerEditData(masterState?.getTeacherFinal?.data)
    const locationData = masterState?.getTeacherFinal?.data?.location
    // const latlngObject = locationData?.is_changed ? locationData?.version[0] : locationData?.live[0]
    // setMarker(latlngObject)
  }, [masterState?.getTeacherFinal])

  // useEffect(() => {
  //   if (masterState?.postTeacherData?.data?.status === 'success') {
  //     setMessage(masterState?.postTeacherData?.data?.message)
  //     setStatus('success')
  //   } else {
  //     setMessage(masterState?.postTeacherData?.data?.message)
  //     setStatus('error')
  //   }
  // }, [masterState?.postTeacherData?.data?.status])

  const handleSubmit = () => {
    let ApprovedData = {
      user_type: 'admin',
      user_id: userId,
    }
    props.actions.postTeacherAction(ApprovedData)
    history.push(routesNames.CUSTOMER)
  }

  const handleSnackBarClose = () => {
    setMessage('')
    setStatus('')
    props.actions.cleanUpUserState()
  }


  return (
    <MyDiv>
      {(masterState?.getTeacherFinal?.loading || masterState?.postTeacherData?.loading) ? (
        <div>
          <Loader />
        </div>
      ) :
        <>
          <Typography className={customerEditData?.user_detail?.is_changed && customerEditData?.user_detail?.version[0]?.name !==
          customerEditData?.user_detail?.live[0]?.name || customerEditData?.user_detail?.version[0]?.surname !== customerEditData?.user_detail?.live[0]?.surname
            ? 'userName_update' : 'userName'}
          >
            {
              customerEditData?.user_detail?.is_changed ? `${customerEditData?.user_detail?.version[0]?.name}${' '}${customerEditData?.user_detail?.version[0]?.surname}`
                : `${customerEditData?.user_detail?.live[0]?.name}${' '}${customerEditData?.user_detail?.live[0]?.surname}`
            }
          </Typography>
          <Box className="wrap-flex">
            <Typography className="pending_label">Pending</Typography>
            <CustomButton className="publish_btn" title="Publish Now" onClick={handleSubmit} />
          </Box>
          <Box className="user-info">
            <Typography className={customerEditData?.location?.is_changed && customerEditData?.location?.version[0]?.country_name !==
          customerEditData?.location?.live[0]?.country_name || customerEditData?.location?.version[0]?.city_name !== customerEditData?.location?.live[0]?.city_name
          || customerEditData?.location?.version[0]?.state_name !== customerEditData?.location?.live[0]?.state_name ? 'user_location_update' : 'user_location'}
            >
              {customerEditData?.location?.version.length && customerEditData?.location?.live.length !== 0 ? <>
              {
                customerEditData?.location?.is_changed ? `${customerEditData?.location?.version[0]?.country_name}${' '}${customerEditData?.location?.version[0]?.city_name}
                ${' '}${customerEditData?.location?.version[0]?.state_name}`
                  : `${customerEditData?.location?.live[0]?.country_name}${' '}${customerEditData?.location?.live[0]?.city_name}${' '}${customerEditData?.location?.live[0]?.state_name}`
              }
              </> : null}
              
            </Typography>
            <Box className="wrap-flex">
              <Typography className={customerEditData?.user_detail?.is_changed && customerEditData?.user_detail?.version[0]?.phone_number !==
              customerEditData?.user_detail?.live[0]?.phone_number ? 'labelName_update' : 'labelName'}
              >Phone Number: </Typography>
              <Typography className={customerEditData?.user_detail?.is_changed && customerEditData?.user_detail?.version[0]?.phone_number !==
              customerEditData?.user_detail?.live[0]?.phone_number ? 'labelData_update' : 'labelData'}
              >
                {
                  customerEditData?.user_detail?.is_changed ? `${customerEditData?.user_detail?.version[0]?.phone_number}`
                    : `${customerEditData?.user_detail?.live[0]?.phone_number}`
                }
              </Typography>
            </Box>
            <Box className="wrap-flex">
              <Typography className={customerEditData?.lesson?.is_changed && customerEditData?.lesson?.version[0]?.category_name !==
          customerEditData?.lesson?.live[0]?.category_name || customerEditData?.lesson?.version[0]?.sub_category_name !== customerEditData?.lesson?.live[0]?.sub_category_name
                ? 'labelName_update' : 'labelName'}
              >Category: </Typography>
              <Typography className={customerEditData?.lesson?.is_changed && customerEditData?.lesson?.version[0]?.category_name !==
          customerEditData?.lesson?.live[0]?.category_name || customerEditData?.lesson?.version[0]?.sub_category_name !== customerEditData?.lesson?.live[0]?.sub_category_name
                ? 'labelData_update' : 'labelData'}
              >{
                  customerEditData?.lesson?.is_changed ? `${customerEditData?.lesson?.version[0]?.category_name}${', '}${customerEditData?.lesson?.version[0]?.sub_category_name}`
                    : `${customerEditData?.lesson?.live[0]?.category_name}${', '}${customerEditData?.lesson?.live[0]?.sub_category_name}`
                }</Typography>
            </Box>
          </Box>
          <AboutCard customerEditData={customerEditData} />
          <LocationCard customerEditData={customerEditData} />
          <LessonCard customerEditData={customerEditData} />
          <EducationCard customerEditData={customerEditData} />
          <ExperienceCard customerEditData={customerEditData} />
          <ImageCard customerEditData={customerEditData} />
          <VideoCard customerEditData={customerEditData} />
        </>
      }
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

export default connect(null, mapDispatchToProps)(ApprovalsPublish)
