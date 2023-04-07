/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import {Box, Typography, Grid} from '@mui/material'
import {useTranslation} from 'react-i18next'
import {bindActionCreators} from 'redux'
import {connect, useSelector} from 'react-redux'
import {CustomTextArea, CustomButton} from '../../components/Inputs'
import {ActionCreators} from '../../redux/actions'
import {Loader, SnackBar} from '../../components'
import MyDiv from './feedback.style'

const Feedback = (props) => {
  const {t} = useTranslation()
  const [inputValue, setInputValue] = useState({})
  const [message, setMessage] = useState('')
  const [userData, setUserData] = useState()
  const [status, setStatus] = useState('')
  const [errorData, setErrorData] = useState({})
  const feedbackState = useSelector((state) => state.feedbackState)

  const masterState = useSelector((state) => state.masterState)

  useEffect(() => {
    props.actions.getDetailsAction()
  }, [])

  useEffect(() => {
    setUserData(masterState?.getDetailsData?.data?.userDetails[0])
  }, [masterState?.getDetailsData?.data?.userDetails[0]])

  useEffect(() => {
    setErrorData(feedbackState?.postFeedback?.error?.errors)
  }, [feedbackState?.postFeedback?.error?.errors])

  useEffect(() => {
    if (feedbackState?.postFeedback?.data?.status === 'success') {
      setMessage(feedbackState?.postFeedback?.data?.message)
      setStatus('success')
      setInputValue({})
      setErrorData({})
    } else {
      setMessage(feedbackState?.postFeedback?.data?.message)
      setStatus('error')
    }
  }, [feedbackState?.postFeedback?.data?.status])

  const handleChange = (e) => {
    setInputValue({...inputValue, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    props.actions.postFeedbackAction({...inputValue,
      name: `${userData?.name} ${userData?.surname}`,
      id: userData?.user_id,
      email: userData?.email,
      phone: userData?.phone_number,
    })
  }

  const handleSnackBarClose = () => {
    setMessage('')
    setStatus('')
    props.actions.cleanUpUserState()
  }


  return (
    <MyDiv>
      {(feedbackState?.postFeedback?.loading) &&
      <div>
        <Loader />
      </div>
      }
      <Box className="feed_box">
        <Typography className="page_title">{t('Feedback')}</Typography>
        <Box className="main_box">
          <Typography className="title2_text">{t('helptext')}</Typography>
          <Grid container md={6} className="flex_box">
            <Grid className="text_box" item md={12}>
              <Typography className="title3_text">{t('Subject')}<span>*</span></Typography>
              <CustomTextArea value={inputValue.subject ?? ''} name="subject" onChange={handleChange} className="text_area1" />
              <div style={{color: 'red', fontSize: '12px'}}>{errorData?.subject?.[0]}</div>
            </Grid>
            <Grid className="text_box" item md={12}>
              <Typography className="title3_text">{t('Message')}<span>*</span></Typography>
              <CustomTextArea value={inputValue.message ?? ''} name="message" onChange={handleChange} className="text_area2" />
              <div style={{color: 'red', fontSize: '12px'}}>{errorData?.message?.[0]}</div>
            </Grid>
            <Box mt={2} pb={4}>
              <CustomButton onClick={handleSubmit} className="btn_submit" title={t('Submit')} />
            </Box>
          </Grid>
        </Box>
      </Box>
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

export default connect(null, mapDispatchToProps)(Feedback)
