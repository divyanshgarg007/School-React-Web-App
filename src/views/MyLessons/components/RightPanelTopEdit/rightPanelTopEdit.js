import React, {useState} from 'react'
import {styled} from '@mui/system'
import {Grid, Typography, Divider, Select, MenuItem, IconButton} from '@mui/material'
import {Edit} from '@mui/icons-material'
import {useTranslation} from 'react-i18next'
import {CustomTextBox} from '../../../../components'
import {CustomTextArea} from '../../../../components/Inputs'
import MyDiv from './rightPanelTopEdit.style'

const CustomMenuItem = styled(MenuItem)(({theme}) => ({
  '&.MuiMenuItem-root': {
    backgroundColor: '#EDF2F7',
    fontFamily: 'Proxima Nova',
    fontSize: '15px',
    fontWeight: '600px',
    color: '#000000',
  },
  '&.MuiMenuItem-root:first-child': {
    borderTop: '3px solid #1D3160',
  },
}))

export default function RightPanelTopEdit(props) {
  const {t} = useTranslation()
  const [category, setCategory] = useState('')
  const handleCategoryChange = (event) => {
    setCategory(event.target.value)
  }
  return (
    <MyDiv>
      <Grid container md={12} className="edit_lesson">
        <Grid container md={6}>
          <Typography className="title_text">{props.text1}</Typography>
          <Grid item md={12} className="div_grid">
            <Divider sx={{background: '#1D3160'}} />
          </Grid>
          <Grid item md={12}>
            <Typography className="select_title">{t('LessonCategory')}<span> *</span></Typography>
            <Select value={category} className="menu_items" onChange={handleCategoryChange}>
              {props.getCategorydata?.data?.map((item, index) => {
                return (
                  <CustomMenuItem value={item.attributes.name} key={index}>
                    {item.attributes.name}
                  </CustomMenuItem>
                )
              })
              }
            </Select>
            <Typography className="select_title">{t('Providedto')}<span> *</span></Typography>
            <Select className="menu_items">
              {props.value6.map((name) => (
                <CustomMenuItem key={name} value={name}>
                  {name}
                </CustomMenuItem>
              ))}
            </Select>
            <Typography className="select_title">{t('LessonisProvided')}<span> *</span></Typography>
            <Select className="menu_items">
              {props.value7.map((name) => (
                <CustomMenuItem key={name} value={name}>
                  {name}
                </CustomMenuItem>
              ))}
            </Select>
            <Typography className="select_title">{t('LessonisProvided')}<span> *</span></Typography>
            <Select className="menu_items">
              {props.value8.map((name) => (
                <CustomMenuItem key={name} value={name}>
                  {name}
                </CustomMenuItem>
              ))}
            </Select>
            <Grid container md={12} columnSpacing={0.5}>
              <Grid item md={6}>
                <Typography className="select_title">{t('Cost')}<span> *</span></Typography>
                <CustomTextBox className="text-style" startIcon={<IconButton tabIndex="-1" className="icn_fix"><Edit className="icn_size" /></IconButton>} />
              </Grid>
              <Grid item md={6}>
                <Typography className="select_title">{t('Costper')}<span> *</span></Typography>
                <Select className="menu_items">
                  {props.value9.map((name) => (
                    <CustomMenuItem key={name} value={name}>
                      {name}
                    </CustomMenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
        <Grid container md={1} />
        <Grid container md={5}>
          <Typography className="title_text">{props.text2}</Typography>
          <Grid item md={12}>
            <Divider sx={{background: '#1D3160'}} />
          </Grid>
          <Grid item md={12}>
            <Typography className="select_title">{t('Description')}</Typography>
            <CustomTextArea className="text_area3" />
          </Grid>
        </Grid>
      </Grid>
    </MyDiv>
  )
}

