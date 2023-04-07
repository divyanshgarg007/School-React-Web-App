/* eslint-disable radix */
/* eslint-disable no-unneeded-ternary */
import React, {useEffect, useRef, useState} from 'react'
import {Box, Grid, Typography, Select, MenuItem, IconButton, FormControl, Avatar, Checkbox} from '@mui/material'
import {CameraAltOutlined, Edit} from '@mui/icons-material'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import {useTranslation} from 'react-i18next'
import {bindActionCreators} from 'redux'
import {connect, useSelector} from 'react-redux'
import {styled} from '@mui/system'
import {isMobile} from 'react-device-detect'
import {CustomButton, CustomTextBox, SnackBar, Loader, CustomDateTimePicker} from '../../../../components'
import ResetPassword from '../ResetPassword'
import ResetPasswordMobile from '../ResetPasswordMobile'
import {ActionCreators} from '../../../../redux/actions'
import DisableAccount from '../DisableAccount/disableAccount'
import ImageUploadDialog from '../ImageUploadDialog/imageUploadDialog'
import MyDiv from './profile.style'
const ITEM_HEIGHT = 60
const Menu = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5,
    },
  },
}
const CustomMenuItem = styled(MenuItem)(({theme}) => ({
  '&.MuiMenuItem-root': {
    backgroundColor: '#EDF2F7',
    fontFamily: 'Proxima Nova',
    fontSize: '15px',
    fontWeight: '600',
    color: '#000000',
  },
  '&.MuiMenuItem-root:nth-child(2)': {
    borderTop: '3px solid #1D3160',
    marginTop: '-8px',
  },
  '&.MuiMenuItem-root:last-child': {
    marginBottom: '-8px',
  },
}))

const Placeholder = styled(MenuItem)(({theme}) => ({
  '&.MuiMenuItem-root': {
    display: 'none',
  },
}))

const Profile = (props) => {
  const {t} = useTranslation()
  const [showReset, setShowReset] = useState(false)
  const [file, setFile] = useState()
  const [status, setStatus] = useState()
  const [accountStatus, setAccountStatus] = useState()
  const [inputValue, setInputValue] = useState({})
  const [message, setMessage] = useState('')
  const [messageForPublish, setMessageForPublish] = useState('')
  const [openDisableAccount, setOpenDisableAccount] = useState(false)
  const [inputEmail, setInputEmail] = useState({})
  const [repeatPassword, setRepeatPassword] = useState()
  const [openResetPassword, setOpenResetPassword] = useState(false)
  const [inputPassword, setInputPassword] = useState({})
  const [gender, setGender] = useState()
  const [isChecked, setIsChecked] = useState(false)
  const [experience, setExperience] = useState()
  const [imageUploadDialog, setImageUploadDialog] = useState(false)
  const imageRef = useRef()

  const globalState = useSelector((state) => state.globalState)
  const authState = useSelector((state) => state.authState)
  const userData = useSelector((state) => state.masterState)
  const userPost = useSelector((state) => state.userDataState)


  useEffect(() => {
    setAccountStatus(userData?.getIsPublish?.data?.status)
  }, [userData?.getIsPublish?.data])

  useEffect(() => {
    setGender(globalState?.getList?.data?.payload?.gender)
    setExperience(globalState?.getList?.data?.payload?.experience)
  }, [globalState?.getList?.data?.payload])

  useEffect(() => {
    props.actions.getListAction()
  }, [])

  useEffect(() => {
    if (userData?.getDetailsData?.data === null) {
      props.actions.getDetailsAction()
    }
  }, [])

  // useEffect(() => {
  //   if (!file) {
  //     return
  //   }
  //   props.actions.postProfilePictureAction(file)
  // }, [file])

  useEffect(() => {
    setInputValue({...inputValue, profile_image: `${process.env.REACT_APP_IMAGE_BASE_URL}${userPost.postProfilePicture?.data}`})
  }, [userPost.postProfilePicture?.data])

  useEffect(() => {
    setInputValue(userData?.getDetailsData?.data?.userDetails[0])
  }, [userData?.getDetailsData?.data?.userDetails[0]])

  useEffect(() => {
    if (authState?.disableUser?.data?.data?.meta?.status === 'success') {
      setMessage(authState?.disableUser?.data?.data?.meta?.message)
      setStatus('success')
    } else if (authState?.disableUser?.error?.meta?.status === 'failure') {
      setMessage(authState?.disableUser?.error?.meta?.message)
      setStatus('error')
    }
  }, [authState?.disableUser])


  useEffect(() => {
    if (authState?.enableUser?.data?.data?.meta?.status === 'success') {
      setMessage(authState?.enableUser?.data?.data?.meta?.message)
      setStatus('success')
    } else if (authState?.enableUser?.error?.meta?.status === 'failure') {
      setMessage(authState?.enableUser?.error?.meta?.message)
      setStatus('error')
    }
  }, [authState?.enableUser])

  // post for snackbar
  useEffect(() => {
    if (userPost?.postUserProfileData?.data?.status === 'success') {
      setMessageForPublish(t('messageForPublish'))
      localStorage.setItem('messageForPublish', t('messageForPublish'))
      setMessage(userPost?.postUserProfileData?.data?.message)
      setStatus('success')
    } else {
      setMessage(userPost?.postUserProfileData?.data?.message)
      setStatus('error')
    }
  }, [userPost?.postUserProfileData?.data?.status])


  useEffect(() => {
    if (authState?.authResetPassword?.data?.status === 'success') {
      setMessage(authState?.authResetPassword?.data?.message)
      setStatus('success')
      setOpenResetPassword(!openResetPassword)
    } else if (authState?.authResetPassword?.error?.meta?.status === 'failure') {
      setMessage(authState?.authResetPassword?.error?.meta?.message)
      setStatus('error')
    } else if (authState?.authResetPassword?.error?.status === 'failure') {
      setMessage(authState?.authResetPassword?.error?.errors?.password?.[0])
      setStatus('error')
    } else if (authState?.authResetPassword?.error?.status === 'failure') {
      setMessage(authState?.authResetPassword?.error?.message)
      setStatus('error')
    }
  }, [authState?.authResetPassword])

  useEffect(() => {
    setIsChecked(userData?.getDetailsData?.data?.userDetails[0]?.promotional_email === 1 ? true : false)
  }, [userData?.getDetailsData?.data?.userDetails[0]?.promotional_email])


  // handling fields
  const handleEmail = (e) => {
    setInputEmail({...inputEmail, [e.target.name]: e.target.value})
  }
  const handleChange = (e) => {
    setInputValue({...inputValue, [e.target.name]: e.target.value})
  }
  const handleSecondaryPhone = (val) => {
    setInputValue({...inputValue, secondary_phone_number: val})
  }
  const handlePrimaryPhone = (val) => {
    setInputValue({...inputValue, phone_number: val})
  }

  // disable account
  const handleDisable = () => {
    setOpenDisableAccount(!openDisableAccount)
  }

  const handleDisableAccountConfirmation = () => {
    setOpenDisableAccount(!openDisableAccount)
    setInputEmail('')
    if (accountStatus === 1) {
      props.actions.postDisableUserAction(inputEmail)
    } else if (accountStatus === 2) {
      props.actions.postEnableAccountAction({email: inputValue?.email, is_active: true, disable_account_token: null})
    }
  }

  const handleCheckBox = (e) => {
    setIsChecked(e.target.checked)
  }

  //handlimg submit button
  const handleSubmit = () => {
    let url = inputValue.profile_image
    const modifiedUrl = url.replace(`${process.env.REACT_APP_IMAGE_BASE_URL}`, '')
    const regex = new RegExp('^[a-zA-Z]+$')
    const isValidName = regex.test(inputValue?.name)
    const isValidSurname = regex.test(inputValue?.surname)
    if (isValidName === false || isValidSurname === false) {
      setMessage('name & surname field contains alphabets only, no spaces or any other character')
      setStatus('error')
    } else {
      props.actions.postProfileDataAction({...inputValue, promotional_email: isChecked, profile_image: userPost.postProfilePicture?.data !== null ? userPost.postProfilePicture?.data : modifiedUrl})

    }
  }

  // handling cancel button
  const handleClick = () => {
    setOpenResetPassword(!openResetPassword)
    setInputPassword({})
    setRepeatPassword('')

  }

  // reset password
  const handleRepeatpassword = (e) => {
    setRepeatPassword(e.target.value)
  }
  const handlePassword = (e) => {
    setInputPassword({...inputPassword, [e.target.name]: e.target.value})
  }

  const handleSubmitPassword = () => {
    const regex = new RegExp('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}')
    const isValid = regex.test(inputPassword?.password)

    if (!inputPassword?.password || !repeatPassword || !inputPassword.old_password) {
      setMessage('please enter all fields.')
      setStatus('error')
      return
    }

    if (inputPassword?.password !== repeatPassword) {
      setMessage('Passwords do not match.')
      setStatus('error')
      return
    }

    if (!isValid) {
      setMessage(t('passwordValidation'))
      setStatus('error')
      return
    }
    props.actions.postResetPasswordAction({...inputPassword, email: inputValue.email})
  }

  const handleDateChange = (e) => {
    setInputValue({...inputValue, dob: e})
  }

  // chnage profile picture
  const showOpenFileDialog = () => {
    imageRef.current.click()
  }
  const handleChangeImage = (event) => {
    let fileObject = event.target.files[0]
    setFile(URL.createObjectURL(fileObject))
    if (fileObject) {
      setImageUploadDialog(true)
    }
  }

  // handling snackbar close
  const handleSnackBarClose = () => {
    setMessage('')
    setStatus('')
    props.actions.cleanUpUserState()
  }

  const msg = localStorage.getItem('messageForPublish')

  const handleImageUploadDialog = () => {
    setImageUploadDialog(!imageUploadDialog)
  }
  return (
    <MyDiv>
      {(userPost?.postUserProfileData?.loading || userData?.getDetailsData?.loading || userPost?.postProfilePicture?.loading || globalState?.getList?.loading) &&
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
      <Box>
        {isMobile && <>{messageForPublish ?
          <Typography className="publish_msg">
            {messageForPublish}
          </Typography> : msg ? <Typography className="publish_msg">
            {msg}
          </Typography> : null
        }</>}
        <Grid mt={1}>
          {showReset ? <Box>
            <ResetPasswordMobile
              repeatPassword={repeatPassword}
              handleRepeatpassword={handleRepeatpassword}
              inputPassword={inputPassword}
              handlePassword={handlePassword}
            />
            <Box className="flex_btn" mt={1}>
              <CustomButton onClick={handleSubmitPassword} className="btn_submit" title={t('Submit')} />
              <CustomButton onClick={() => setShowReset(!showReset)} className="btn_cancel" title={t('Cancel')} />
            </Box>
          </Box> : null}
        </Grid>
        {!showReset ? <Grid container>
          <Box className="d-flex">
            <Box className="avatar_box">
              {inputValue?.profile_image ?
                <Avatar src={inputValue?.profile_image} className="avatar_cam" /> :
                <Typography className="avatar_cam title_cam" >{inputValue?.name?.substring(0, 1)}{inputValue?.surname?.substring(0, 1)}</Typography>
              }
              <IconButton onClick={showOpenFileDialog} className="camera_upload">
                <CameraAltOutlined className="camera_icon" />
              </IconButton>
              <input
                ref={imageRef}
                type="file"
                style={{display: 'none'}}
                accept="image/*"
                onChange={handleChangeImage}
              />
            </Box>
            <Box>
              <Typography className="user_name">{inputValue?.name}{' '}{inputValue?.surname}</Typography>
              <CustomButton onClick={() => setShowReset(!showReset)} className="mobile_btn" title={t('ResetPassword')} />
              <Typography className="user_id">{t('UserID')} : {inputValue?.user_id}</Typography>
              <Box className="flex_btn2">
                <CustomButton onClick={handleClick} className="btn_submit" title={t('ResetPassword')} />
                {accountStatus === 2 && <CustomButton onClick={handleDisable} className="btn_red" title={t('enableText')} />}
                {accountStatus === 1 && <CustomButton onClick={handleDisable} className="btn_red" title={t('TemporarilyDisable')} />}
              </Box>
            </Box>
          </Box>
          <Grid container className="form_grid">
            <Grid item md={6} xs={12} sm={6}>
              <Box mt={2}>
                <Typography className="text_labels">{t('Name')}<span>*</span></Typography>
                <CustomTextBox value={inputValue?.name} onChange={handleChange} name="name"
                  error={userPost?.postUserProfileData?.error?.errors?.name?.[0]}
                  className="text-style" startIcon={<IconButton tabIndex="-1" className="edit_icon"><Edit className="icn_size" /></IconButton>} fieldLabel={t('Name')}
                />
              </Box>
              <Box mt={2}>
                <Typography className="text_labels">{t('Surname')}<span>*</span></Typography>
                <CustomTextBox value={inputValue?.surname} onChange={handleChange} name="surname"
                  error={userPost?.postUserProfileData?.error?.errors?.surname?.[0]}
                  className="text-style" startIcon={<IconButton tabIndex="-1" className="edit_icon"><Edit className="icn_size" /></IconButton>} fieldLabel={t('Surname')}
                />
              </Box>
              <Box className="verified" mt={2}>
                <Typography className="text_labels">{t('Email')}<span>*</span></Typography>
                <CustomTextBox disabled value={inputValue?.email} onChange={handleChange} name="email"
                  error={userPost?.postUserProfileData?.error?.errors?.email?.[0]}
                  className="text-style disabled_text" startIcon={<IconButton tabIndex="-1" className="edit_icon"><Edit className="icn_size" /></IconButton>} fieldLabel={t('Email')}
                />
                <Box className="verified_box">
                  <CheckCircleIcon />
                  <Typography variant="h5">{t('Verified')}</Typography>
                </Box>
              </Box>
              <Box className="verified" mt={2}>
                <Typography className="text_labels">{t('Phone1')}<span>*</span></Typography>
                <PhoneInput value={inputValue?.phone_number} onChange={handlePrimaryPhone} inputClass="phone_box" country={'us'} />
                <div style={{color: 'red', fontSize: '12px'}}>{userPost?.postUserProfileData?.error?.errors?.phone_number?.[0]}</div>
                <IconButton tabIndex="-1" className="edit_num"><Edit className="icn_size" /></IconButton>
              </Box>
              <Box className="date_box" mt={2}>
                <Typography className="text_labels">{t('DOB')}</Typography>
                <CustomDateTimePicker handleDate={handleDateChange} date={inputValue?.dob} />
              </Box>
              <Box className="gender_box" mt={2}>
                <Typography className="text_labels">{t('Gender')}</Typography>
                <FormControl fullWidth>
                  <Select MenuProps={Menu} className="select_menu" name="gender" value={parseInt(inputValue?.gender) || 0} onChange={handleChange}>
                    <Placeholder value={0}>{t('genderPlaceholder')}</Placeholder>
                    {gender?.map((item) => {
                      return (
                        <CustomMenuItem key={item.gender_id} value={item.gender_id}>
                          {item.gender}
                        </CustomMenuItem>
                      )
                    })}
                  </Select>
                </FormControl>
              </Box>
              <Box mt={2}>
                <Typography className="text_labels">{t('Phone2')}</Typography>
                <PhoneInput value={inputValue?.secondary_phone_number} onChange={handleSecondaryPhone} inputClass="phone_box" country={'us'} />
                <div style={{color: 'red', fontSize: '12px'}}>{userPost?.postUserProfileData?.error?.errors?.secondary_phone_number?.[0]}</div>
              </Box>
              <Box mt={2}>
                <Typography className="text_labels">{t('Website')}</Typography>
                <CustomTextBox value={inputValue?.website} name="website" onChange={handleChange}
                  error={userPost?.postUserProfileData?.error?.errors?.website?.[0]}
                  className="text-style" startIcon={<IconButton tabIndex="-1" className="edit_icon"><Edit className="icn_size" /></IconButton>} fieldLabel={t('Website')}
                />
              </Box>
              <Box mt={2}>
                <Typography className="text_labels">{t('Experience')}<span>*</span></Typography>
                <FormControl fullWidth>
                  <Select MenuProps={Menu} className="select_menu" name="experience" value={parseInt(inputValue?.experience) || 0} onChange={handleChange}>
                    <Placeholder value={0}>{t('expPlaceholder')}</Placeholder>
                    {experience?.map((item) => {
                      return (
                        <CustomMenuItem key={item.experience_id} value={item.experience_id}>
                          {item.experience}
                        </CustomMenuItem>
                      )
                    })}
                  </Select>
                </FormControl>
              </Box>
              <Grid mt={3} item md={12} className="flex_check">
                <Checkbox className="check_item" onChange={handleCheckBox} checked={isChecked} />
                <Typography className="label_text">{t('promotionalMaterial')}</Typography>
              </Grid>
              <Box className="flex_btn" mt={3}>
                <CustomButton onClick={handleSubmit} className="btn_submit" title={t('Submit')} />
                <CustomButton className="btn_cancel" title={t('Cancel')} />
              </Box>
            </Grid>
          </Grid>
        </Grid> : null}
      </Box>
      <ResetPassword repeatPassword={repeatPassword} handleRepeatpassword={handleRepeatpassword}
        inputPassword={inputPassword} handlePassword={handlePassword} handleSubmitPassword={handleSubmitPassword} openResetPassword={openResetPassword} handleClick={handleClick}
      />
      <DisableAccount
        handleDisableAccountConfirmation={handleDisableAccountConfirmation}
        inputEmail={inputEmail}
        handleEmail={handleEmail}
        openDisableAccount={openDisableAccount}
        handleDisable={handleDisable}
        accountStatus={accountStatus}
      />
      <ImageUploadDialog
        handleImageUploadDialog={handleImageUploadDialog}
        imageUploadDialog={imageUploadDialog}
        file={file}
      />
    </MyDiv>
  )
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(Profile)

