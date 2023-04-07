import React from 'react'
import {Grid, Typography, MenuItem, Select, FormControl, Checkbox} from '@mui/material'
import {styled} from '@mui/system'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {useTranslation} from 'react-i18next'
import {ActionCreators} from '../../../../redux/actions'
import {CustomTextBox} from '../../../../components'
import MyDiv from './languagesEdit.style'
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

const LanguagesEdit = (props) => {
  const {t} = useTranslation()
  return (
    <MyDiv>
      <Grid className="main_grid">
        <Grid>
          <Typography className="media_url">{t('Language')}<span>*</span></Typography>
          <FormControl fullWidth>
            <Select
              MenuProps={{...Menu, autoFocus: false}}
              id="language_list"
              value={props.languageData?.language || 0}
              name="language"
              onChange={props.handleChange}
              className="mu_data"
            >
              <Placeholder value={0}>{t('languagePlaceholder')}</Placeholder>
              <CustomTextBox
                onKeyDown={(e) => {e.stopPropagation()}}
                autoFocus
                value={props.value}
                onChange={props.handleSearch}
                fieldLabel="Search"
              />
              {props?.languageList?.map((data) => {
                return (
                  <CustomMenuItem key={data.language_id} value={data.language_id}>{data.language_name}</CustomMenuItem>
                )
              })}
            </Select>
            <div style={{color: 'red', fontSize: '12px'}}>{props?.errorData?.language?.[0]}</div>
          </FormControl>
        </Grid>
        <Grid mt={2}>
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
        <Grid item md={12} className="flex_check">
          <Checkbox className="check_item" onChange={props.handleCheckBox} checked={props.isChecked} value={props.languageData?.isNative} />
          <Typography className="label_text">{t('NativeLanguage')}</Typography>
        </Grid>
      </Grid>
    </MyDiv>
  )
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(LanguagesEdit)

