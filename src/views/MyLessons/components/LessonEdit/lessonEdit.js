/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
import React from 'react'
import {styled} from '@mui/system'
import {Grid, Typography, Select, MenuItem, TableContainer, TableHead, Table, TableCell, TableRow, TableBody, Checkbox, Box, FormControl, IconButton} from '@mui/material'
import {useTranslation} from 'react-i18next'
import {Edit, Euro} from '@mui/icons-material'
import ReactQuill from 'react-quill'
import {CustomTextArea, CustomTextBox} from '../../../../components/Inputs'
import {toolbarOptions} from '../../../../constants/constant'
import MyDiv from './lessonEdit.style'
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
    color: '#000000',
    display: 'flex',
    justifyContent: 'space-between',
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
export default function LessonEdit(props) {

  const {t} = useTranslation()
  return (
    <MyDiv>
      <Grid container>
        <Grid item xs={12} sm={12}>
          <Typography className="select_title">
            {t('LessonCategory')}
            <span> *</span>
          </Typography>
          <FormControl fullWidth>
            <Select
              className="menu_items"
              name="lesson_category"
              value={props.lessonsData?.lesson_category || 0}
              onChange={props.handleChangeCategory}
              MenuProps={Menu}
              id="language_list"
            >
              <Placeholder value={0}>{t('categoryPlaceholder')}</Placeholder>
              {props?.category?.map((data) => {
                return (
                  <CustomMenuItem key={data.id} value={data.id}>
                    {data.category_name}
                  </CustomMenuItem>
                )
              })}
            </Select>
            <div style={{color: 'red', fontSize: '12px'}}>
              {props?.errorData?.lesson_category?.[0]}
            </div>
          </FormControl>
          <Typography className="select_title">
            {t('LessonSubCategory')}<span> *</span>
          </Typography>
          <FormControl fullWidth>
            <Select
              MenuProps={Menu}
              id="language_list"
              className="menu_items"
              name="lesson_sub_category"
              value={props.lessonsData?.lesson_sub_category || 0}
              onChange={props.handleChange}
            >
              <Placeholder value={0}>{t('subCategoryPlaceholder')}</Placeholder>
              {props?.subCategory?.map((data) => {
                return (
                  <CustomMenuItem key={data.id} value={data.id}>
                    {data.sub_category_name}
                  </CustomMenuItem>
                )
              })}
            </Select>
            <div style={{color: 'red', fontSize: '12px'}}>
              {props?.errorData?.lesson_sub_category?.[0]}
            </div>
          </FormControl>
          <Typography className="select_title">{t('Providedto')}<span> *</span></Typography>
          <FormControl fullWidth>
            <Select
              MenuProps={Menu}
              id="language_list"
              className="menu_items"
              name="provided_to"
              value={props.level || 0}
              onChange={props.handleLevel}
              multiple
            >
              <Placeholder value={0}>{t('levelPlaceholder')}</Placeholder>
              {props?.globalData?.provided_to?.map((data) => {
                return (
                  <CustomMenuItem
                    sx={{fontWeight: props.level.indexOf(data.provided_to_id) > -1 ? '600' : '400'}}
                    key={data.provided_to_id}
                    value={data.provided_to_id}
                  >{data.provided_to}
                  </CustomMenuItem>

                )
              })}
            </Select>
            <div style={{color: 'red', fontSize: '12px'}}>
              {props?.errorData?.provided_to?.[0]}
            </div>
          </FormControl>
          <Typography className="select_title">{t('LessonisProvided')}<span> *</span></Typography>
          <FormControl fullWidth>
            <Select
              MenuProps={Menu}
              id="language_list"
              className="menu_items"
              name="lesson_provided_to_place"
              value={props.mode || 0}
              onChange={props.handleMode}
              multiple
            >
              <Placeholder value={0}>{t('modePlaceholder')}</Placeholder>
              {props?.globalData?.provided_via?.map((data) => {
                return (
                  <CustomMenuItem
                    sx={{fontWeight: props.mode.indexOf(data.provided_to_id) > -1 ? '600' : '400'}}
                    key={data.provided_to_id}
                    value={data.provided_to_id}
                  >{data.provided_via}
                  </CustomMenuItem>
                )
              })}
            </Select>
            <div style={{color: 'red', fontSize: '12px'}}>
              {props?.errorData?.lesson_is_provided?.[0]}
            </div>
          </FormControl>
          <Typography className="select_title">{t('LessonisProvided')}<span> *</span></Typography>
          <FormControl fullWidth>
            <Select
              MenuProps={Menu}
              id="language_list"
              className="menu_items"
              name="lesson_is_provided"
              value={props?.packages || 0}
              onChange={props.handlePackage}
              multiple
            >
              <Placeholder value={0}>{t('packagePlaceholder')}</Placeholder>
              {props?.globalData?.provided_member_type?.map((data) => {
                return (
                  <CustomMenuItem
                    sx={{fontWeight: props.packages.indexOf(data.member_type_id) > -1 ? '600' : '400'}}
                    key={data.member_type_id}
                    value={data.member_type_id}
                  >{data.member_type}
                  </CustomMenuItem>
                )
              })}
            </Select>
            <div style={{color: 'red', fontSize: '12px'}}>
              {props?.errorData?.lesson_provided_to_place?.[0]}
            </div>
          </FormControl>
          <Grid container columnSpacing={2}>
            <Grid item md={6} xs={6}>
              <Typography className="select_title">{t('Cost')}<span> *</span></Typography>
              <CustomTextBox value={props.lessonsData?.cost} name="cost" onChange={props.handleChange}
                className="text-style" error={props?.errorData?.cost?.[0]}
                startIcon={<Euro className="euro_icn" />}
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <Typography className="select_title">{t('Costper')}<span> *</span></Typography>
              <FormControl fullWidth>
                <Select
                  MenuProps={Menu}
                  id="language_list"
                  className="menu_items"
                  name="cost_per"
                  value={props.lessonsData?.cost_per || 0}
                  onChange={props.handleChange}
                >
                  <Placeholder value={0}>{t('costPerPlaceholder')}</Placeholder>
                  {props?.globalData?.cost_per_rule?.map((data) => {
                    return (
                      <CustomMenuItem placeholder="Per Hour/Minutes/Day" key={data.cost_per_rule_id} value={data.cost_per_rule_id}>{data.name}</CustomMenuItem>
                    )
                  })}
                </Select>
                <div style={{color: 'red', fontSize: '12px'}}>{props?.errorData?.cost_per?.[0]}</div>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} mt={4}>
          <Typography className="title1_text">{t('Availability')}</Typography>
          <TableContainer className="table_box">
            <Table>
              <Box className="check_box">
                <Typography>{t('check/uncheck')}</Typography>
                <Checkbox onChange={props.handleCheckAll} checked={props.allChecked} />
              </Box>
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell className="tbl_txt">Morning</TableCell>
                  <TableCell className="tbl_txt">Afternoon</TableCell>
                  <TableCell className="tbl_txt">Evening</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.globalData?.days?.map((value) => (
                  <TableRow key={value.day_id}>
                    <TableCell className="tbl_txt2">
                      {value.day}
                    </TableCell>
                    <TableCell>
                      <Checkbox
                        onChange={props.handleCheckBox}
                        value={value.day.toLowerCase() + '-morning'}
                        checked={props.checkedSlots.find(
                          (slot) =>
                            slot.day === value?.day.toLowerCase() &&
                            slot.lot === 'morning' &&
                            slot.is_available
                        ) ?? false}
                      />
                    </TableCell>
                    <TableCell>
                      <Checkbox
                        onChange={props.handleCheckBox}
                        value={value.day.toLowerCase() + '-afternoon'}
                        checked={props.checkedSlots.find(
                          (slot) =>
                            slot.day === value?.day.toLowerCase() &&
                            slot.lot === 'afternoon' &&
                            slot.is_available
                        ) ?? false}
                      />
                    </TableCell>
                    <TableCell>
                      <Checkbox
                        onChange={props.handleCheckBox}
                        value={value.day.toLowerCase() + '-evening'}
                        checked={props.checkedSlots.find(
                          (slot) =>
                            slot.day === value?.day.toLowerCase() &&
                            slot.lot === 'evening' &&
                            slot.is_available
                        ) ?? false}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className="select_title">{t('Description')}</Typography>
          <ReactQuill value={props.lessonsData.description}
            onChange={(e) => props.handleDescription(e)} className="quill_style" theme="snow" modules={{toolbar: toolbarOptions}}
          />
        </Grid>
      </Grid>
    </MyDiv>
  )
}
