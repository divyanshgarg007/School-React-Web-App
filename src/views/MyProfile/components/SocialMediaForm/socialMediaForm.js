import React from 'react'
import {styled} from '@mui/system'
import {Box, Typography, Select, MenuItem, IconButton, FormControl} from '@mui/material'
import {Help} from '@mui/icons-material'
import {useTranslation} from 'react-i18next'
import {CustomTextBox, CustomButton} from '../../../../components'
import MyDiv from './socialMediaForm.style'

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

export default function SocialMediaForm(props) {
  const {t} = useTranslation()
  return (
    <MyDiv>
      <Box className="sm_box">
        <Box className="data_box">
          <Typography className="media_url">{t('Media')}<span>*</span></Typography>
          <Box className="flex_items">
            <FormControl fullWidth>
              <Select
                value={props.socialMediaData.social_media_id || 0}
                name="social_media_id"
                onChange={props.handleChange}
                className="mu_data"
                MenuProps={Menu}
                id="language_list"
              >
                <Placeholder value={0}>{t('mediaPlaceholder')}</Placeholder>
                {props?.socialmedialist?.map((data) => {
                  return (
                    <CustomMenuItem key={data.social_media_id} value={data.social_media_id}>{data.social_media_name}</CustomMenuItem>
                  )
                })}
              </Select>
              <div style={{color: 'red', fontSize: '12px'}}>{props?.errorData?.social_media_id?.[0]}</div>
            </FormControl>
            <IconButton className="help_icn">
              <Help />
            </IconButton>
          </Box>
          <Typography className="media_url2">{t('URL')}<span>*</span></Typography>
          <Box className="flex_items">
            <Box sx={{width: '100%'}}>
              <CustomTextBox value={props.socialMediaData?.url} onChange={props.handleChange} name="url"
                error={props?.errorData?.url?.[0]} className="text-style" fieldLabel="URL"
              />
            </Box>
            <IconButton className="help_icn">
              <Help />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box className="flex_box">
        <CustomButton onClick={props.handleSubmit} className="btn_submit" title={t('Submit')} />
        <CustomButton className="btn_cancel" title={t('Cancel')} onClick={props.handleClick} />
      </Box>
    </MyDiv>
  )
}
