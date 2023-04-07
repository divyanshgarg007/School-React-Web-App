import React from 'react'
import {ErrorOutline, KeyboardReturn} from '@mui/icons-material'
import {Box, IconButton, Typography} from '@mui/material'
import {useHistory} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import * as routesNames from '../../constants/routes'
import MyDiv from './pageNotFound.style'


const PageNotFound = () => {
  const {t} = useTranslation()
  const history = useHistory()
  const handleBackToHome = () => {
    history.push(routesNames.HOME)
  }
  return (
    <MyDiv>
      <Box className="main_box">
        <ErrorOutline className="icn_style" />
        <Typography className="text_style" variant="h2">
          {t('404')}
        </Typography>
        <Typography className="text_style" mt={1} variant="h7">
          {t('notFound')}
        </Typography>
        <IconButton onClick={handleBackToHome}><KeyboardReturn className="icn_style2" /></IconButton>
        <Typography className="text_style" mt={1} variant="h7">
          {t('backtohome')}
        </Typography>
      </Box>
    </MyDiv>
  )
}

export default PageNotFound
