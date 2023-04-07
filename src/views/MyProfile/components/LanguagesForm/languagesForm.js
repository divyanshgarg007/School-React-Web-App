/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
import React from 'react'
import {styled} from '@mui/system'
import {Box, Typography, Select, MenuItem, Grid, FormControl, Checkbox, TextField, Autocomplete} from '@mui/material'
import {useTranslation} from 'react-i18next'
import {CustomButton, CustomTextBox} from '../../../../components'
import MyDiv from './languagesForm.style'

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


export default function LanguagesForm(props) {
  const {t} = useTranslation()
  return (
    <MyDiv>
      <Box className="sm_box">
        <Box className="data_box">
          <Grid container md={12} className="data_grid">
            <Grid item md={7}>
              <Typography className="media_url">{t('Language')}<span>*</span></Typography>
              <FormControl fullWidth>
                <Select
                  value={props.languageData?.language || 0}
                  name="language"
                  onChange={props.handleChange}
                  className="mu_data"
                  MenuProps={{...Menu, autoFocus: false}}
                  id="language_list"
                >
                  <CustomTextBox
                    onKeyDown={(e) => {e.stopPropagation()}}
                    autoFocus
                    value={props.value}
                    onChange={props.handleSearch}
                    fieldLabel="Search"
                  />
                  <Placeholder value={0}>{t('languagePlaceholder')}</Placeholder>
                  {props?.languageList?.map((data) => {
                    return (
                      <CustomMenuItem key={data.language_id} value={data.language_id}>{data.language_name}</CustomMenuItem>
                    )
                  })}
                </Select>
                <div style={{color: 'red', fontSize: '12px'}}>{props?.errorData?.language?.[0]}</div>
              </FormControl>

            </Grid>
            <Grid item md={5} />
            <Grid item md={7}>
              <Typography className="media_url2">{t('Level')}<span>*</span></Typography>
              <FormControl fullWidth>
                <Select
                  value={props.languageData?.level || 0}
                  name="level"
                  onChange={props.handleChange}
                  className="mu_data"
                  MenuProps={Menu}
                  id="language_list"
                >
                  <Placeholder value={0}>{t('levelPlaceholder')}</Placeholder>
                  {props?.proficiencyList?.map((data) => {
                    return (
                      <CustomMenuItem key={data.proficiency_id} value={data.proficiency_id}>{data.proficiency}</CustomMenuItem>
                    )
                  })}
                </Select>
                <div style={{color: 'red', fontSize: '12px'}}>{props?.errorData?.level?.[0]}</div>
              </FormControl>
            </Grid>
            <Grid item md={5} />
            <Grid item md={12} className="flex_check">
              <Checkbox className="check_item" onChange={props.handleCheckBox} checked={props.isChecked} value={props.languageData?.isNative} />
              <Typography className="label_text">{t('NativeLanguage')}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className="flex_box">
        <CustomButton onClick={props.handleSubmit} className="btn_submit" title={t('Submit')} />
        <CustomButton className="btn_cancel" title={t('Cancel')} onClick={props.handleClick} />
      </Box>
    </MyDiv>
  )
}

