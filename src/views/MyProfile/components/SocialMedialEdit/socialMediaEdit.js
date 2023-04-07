import React from 'react'
import {styled} from '@mui/system'
import {Typography, Select, Grid, MenuItem, FormControl} from '@mui/material'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {useTranslation} from 'react-i18next'
import {CustomTextBox} from '../../../../components'
import {ActionCreators} from '../../../../redux/actions'
import MyDiv from './socialMediaEdit.style'


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

const SocialMediaEdit = (props) => {
  const {t} = useTranslation()
  return (
    <MyDiv>
      <Grid className="main_grid">
        <Grid>
          <Typography className="media_url">{t('Media')}<span>*</span></Typography>
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
        </Grid>
        <Grid>
          <Typography className="media_url">{t('URL')}<span>*</span></Typography>
          <CustomTextBox value={props.socialMediaData?.url} onChange={props.handleChange} name="url"
            error={props?.errorData?.url?.[0]} className="text-style" fieldLabel="URL"
          />
        </Grid>
      </Grid>

    </MyDiv>
  )
}


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(SocialMediaEdit)
