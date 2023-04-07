/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import {Box, Typography} from '@mui/material'
import ReCAPTCHA from 'react-google-recaptcha'
import PhoneInput from 'react-phone-input-2'
import {useTranslation} from 'react-i18next'
import {CustomTextBox, CustomTextArea, CustomButton} from '../../../../components/Inputs'
import MyDiv from './contactUs.style'

export default function ContactUs(props) {
  const {t} = useTranslation()
  const [verified, setVerified] = useState(false)

  function handleCaptcha() {
    setVerified(true)
  }

  return (
    <MyDiv>
      <Box className="main_box">
        <Box className="card_box">
          <Typography className="heading_name">{t('ContactForm')}</Typography>
          <Box className="cont_box">
            <Box mb={3}>
              <Typography className="text_label">{t('Name')}<span> *</span></Typography>
              <CustomTextBox error={props?.errorData?.name?.[0]}
                fieldLabel="Your full name" name="name" onChange={props.handleChangeMessage} value={props.inputValue.name ?? ''}
              />
            </Box>
            <Box mb={3}>
              <Typography className="text_label">{t('Email')}<span> *</span></Typography>
              <CustomTextBox error={props?.errorData?.email?.[0]}
                fieldLabel="You email so I can reply" name="email" onChange={props.handleChangeMessage} value={props.inputValue.email ?? ''}
              />
              {props.emailErr && <div style={{color: 'red', fontSize: '12px'}}>{t('invalidEmail')}</div>}
            </Box>
            <Box mb={3}>
              <Typography className="text_label">{t('phoneNumber')}<span> *</span></Typography>
              <PhoneInput value={props.inputValue.mobile} onChange={props.handlePhone} inputClass="phone_box" country={'us'} />
              <div style={{color: 'red', fontSize: '12px'}}>{props?.errorData?.mobile?.[0]}</div>
              {/* <CustomTextBox error={props?.errorData?.mobile?.[0]}
                fieldLabel="Your phone number" name="mobile" onChange={props.handleChangeMessage} value={props.inputValue.mobile ?? ''}
              />
              {props.mobileErr && <div style={{color: 'red', fontSize: '12px'}}>Your phone number is invalid.</div>} */}
            </Box>
            <Box mb={3}>
              <Typography className="text_label">{t('Subject')}<span> *</span></Typography>
              <CustomTextBox error={props?.errorData?.subject?.[0]}
                fieldLabel="Subject" name="subject" onChange={props.handleChangeMessage} value={props.inputValue.subject ?? ''}
              />
            </Box>
            <Box mb={3}>
              <Typography className="text_label">{t('Message')}<span> *</span></Typography>
              <CustomTextArea
                fieldlabel="The topic we need to talk about" name="description" onChange={props.handleChangeMessage ?? ''} className="text_area"
                value={props.inputValue.description ?? ''}
              />
              <div style={{color: 'red', fontSize: '12px'}}>{props?.errorData?.description?.[0]}</div>
            </Box>
            <ReCAPTCHA
              sitekey="6LemTS8jAAAAABfFIyFichx894kk0LWuJZlGiD3f"
              onChange={handleCaptcha}
            />
            <CustomButton onClick={props.handleSubmit} className="btn-green" title={t('Submit')} />
          </Box>
        </Box>
      </Box>
    </MyDiv>
  )
}
