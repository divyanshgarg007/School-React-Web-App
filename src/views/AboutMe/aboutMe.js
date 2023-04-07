/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import React, {useState, useEffect} from 'react'
import ReactQuill from 'react-quill'
import {HighlightOff, PersonRounded} from '@mui/icons-material'
import {Box, IconButton, Typography} from '@mui/material'
import {useTranslation} from 'react-i18next'
import {connect, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import {isMobile} from 'react-device-detect'
import {CustomNoDataBox, CustomButton, SnackBar, Loader} from '../../components'
import {ActionCreators} from '../../redux/actions'
import {toolbarOptions} from '../../constants/constant'
import MyDiv from './aboutMe.style'
import 'react-quill/dist/quill.bubble.css'

const AboutMe = (props) => {

  const {t} = useTranslation()
  const textdata = t('textdatanew')

  const [aboutMe, setAboutMe] = useState({})
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [messageForPublish, setMessageForPublish] = useState('')
  const [errorState, setErrorState] = useState(null)

  const userGet = useSelector((state) => state.masterState)
  const userPost = useSelector((state) => state.userDataState)

  useEffect(() => {
    if (userGet?.getDetailsData?.data === null) {
      props.actions.getDetailsAction()
    }
  }, [])

  useEffect(() => {
    setAboutMe(userGet?.getDetailsData?.data?.userAboutMe[0]?.about_me)
  }, [userGet?.getDetailsData?.data])

  // post state
  useEffect(() => {
    if (userPost?.postAboutMe?.data?.status === 'success') {
      setMessageForPublish(t('messageForPublish'))
      localStorage.setItem('messageForPublish', t('messageForPublish'))
      setMessage(userPost?.postAboutMe?.data?.message)
      setStatus('success')
      setAboutMe({})
    } else {
      setMessage(userPost?.postAboutMe?.data?.message)
      setStatus('error')
    }
  }, [userPost?.postAboutMe?.data?.status])

  const handleChange = (e) => {
    setAboutMe(e)
  }

  const handleSubmit = () => {
    if (!aboutMe?.length <= 0) {
      setErrorState(null)
      props.actions.postAboutMeAction({description: aboutMe})
    } else {
      setErrorState('Please provide more details for your about')
    }
  }

  const handleSnackBarClose = () => {
    setMessageForPublish('')
    setMessage('')
    setStatus('')
    props.actions.cleanUpUserState()
  }


  const msg = localStorage.getItem('messageForPublish')
  const data = true
  return (
    <MyDiv>
      {(userPost?.postAboutMe?.loading || userGet?.getDetailsData?.loading) &&
      <div>
        <Loader />
      </div>
      }
      <SnackBar
        message={message}
        severity={status}
        open={message?.length > 0}
        close={handleSnackBarClose}
      />
      <Box className="aboutme_box">
        {isMobile && <>{messageForPublish ?
          <Typography className="publish_msg">
            {messageForPublish}
          </Typography> : msg ? <Typography className="publish_msg">
            {msg}
          </Typography> : null
        }</>}
        <Typography className="page_title">{t('AboutMe')}</Typography>
        {!data && <Box>
          <CustomNoDataBox className1="icn_btn" startIcon={<PersonRounded />} title2="No Information found" title3="Add your Information" />
        </Box>
        }
        {data && <Box>
          <Typography className="info_text">{textdata}</Typography>
          <ReactQuill value={aboutMe} onChange={handleChange} className="quill_style" theme="snow" modules={{toolbar: toolbarOptions}} />
          <div style={{color: 'red', fontSize: '12px', paddingLeft: '15px'}}>{userPost?.postAboutMe?.error?.errors?.description?.[0] || errorState}</div>
        </Box>
        }
        <Box mt={17} className="flex_btn">
          <CustomButton onClick={handleSubmit} className="btn_submit" title={t('Submit')} />
          <CustomButton className="btn_cancel" title={t('Cancel')} />
        </Box>
      </Box>
    </MyDiv>
  )
}


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(AboutMe)
