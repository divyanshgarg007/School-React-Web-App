/*eslint-disable  */
import {Box, Checkbox, Divider, FormControl, Grid, IconButton, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from '@mui/material'
import React, {useState} from 'react'
import {styled} from '@mui/system'
import {useTranslation} from 'react-i18next'
import {Done, Edit, Euro} from '@mui/icons-material'
import {CustomTextBox} from '../../../../components'
import {CustomButton, CustomTextArea} from '../../../../components/Inputs'
import MyDiv from './lessonsForm.style'
import { toolbarOptions } from '../../../../constants/constant'
import ReactQuill from 'react-quill'
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
    justifyContent: 'space-between'
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
export default function LessonsForm(props) {

  
  const {t} = useTranslation()
  return (
    <MyDiv>
      <Grid container className="edit_lesson">
        <Grid md={4} className="left_card">
          <Box>
            <Typography className="select_title">
              {t("LessonCategory")}
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
                <Placeholder  value={0}>{t('categoryPlaceholder')}</Placeholder>
                {props?.category?.map((data) => {
                  return (
                    <CustomMenuItem key={data.id} value={data.id}>
                      {data.category_name}
                    </CustomMenuItem>
                  );
                })}
              </Select>
              <div style={{ color: "red", fontSize: "12px" }}>
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
                <Placeholder  value={0}>{t('subCategoryPlaceholder')}</Placeholder>
                {props?.subCategory?.map((data) => {
                  return (
                    <CustomMenuItem key={data.id} value={data.id}>
                      {data.sub_category_name}
                    </CustomMenuItem>
                  );
                })}
              </Select>
              <div style={{ color: "red", fontSize: "12px" }}>
                {props?.errorData?.lesson_sub_category?.[0]}
              </div>
            </FormControl>
            <Typography className="select_title">
              {t("Providedto")}
              <span> *</span>
            </Typography>
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
                <Placeholder  value={0}>{t("levelPlaceholder")}</Placeholder>
                {props?.globalData?.provided_to?.map((data) => {
                  return (
                    <CustomMenuItem
                      sx={{fontWeight: props.level.indexOf(data.provided_to_id) > -1 ? '600' : '400'}}
                      key={data.provided_to_id}
                      value={data.provided_to_id}
                    >{data.provided_to}
                    </CustomMenuItem>

                  );
                })}
              </Select>
              <div style={{ color: "red", fontSize: "12px" }}>
                {props?.errorData?.provided_to?.[0]}
              </div>
            </FormControl>
            <Typography className="select_title">
              {t("LessonisProvided")}
              <span> *</span>
            </Typography>
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
                <Placeholder  value={0}>{t("modePlaceholder")}</Placeholder>
                {props?.globalData?.provided_via?.map((data) => {
                  return (
                    <CustomMenuItem
                    sx={{fontWeight: props.mode.indexOf(data.provided_to_id) > -1 ? '600' : '400'}}
                      key={data.provided_to_id}
                      value={data.provided_to_id}
                    >{data.provided_via}
                    </CustomMenuItem>
                  );
                })}
              </Select>
              <div style={{ color: "red", fontSize: "12px" }}>
                {props?.errorData?.lesson_is_provided?.[0]}
              </div>
            </FormControl>
            <Typography className="select_title">
              {t("LessonisProvided")}
              <span> *</span>
            </Typography>
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
                <Placeholder value={0}>{t("packagePlaceholder")}</Placeholder>
                {props?.globalData?.provided_member_type?.map((data) => {
                  return (
                    <CustomMenuItem
                    sx={{fontWeight: props.packages.indexOf(data.member_type_id) > -1 ? '600' : '400'}}
                      key={data.member_type_id}
                      value={data.member_type_id}
                    >{data.member_type}
                    </CustomMenuItem>
                  );
                })}
              </Select>
              <div style={{ color: "red", fontSize: "12px" }}>
                {props?.errorData?.lesson_provided_to_place?.[0]}
              </div>
            </FormControl>
            <Grid container columnSpacing={0.5}>
              <Grid item md={6}>
                <Typography className="select_title">
                  {t("Cost")}
                  <span> *</span>
                </Typography>
                <CustomTextBox
                  value={props.lessonsData?.cost}
                  name="cost"
                  onChange={props.handleChange}
                  className="text-style"
                  error={props?.errorData?.cost?.[0]}
                  startIcon={<Euro className="euro_icn" />}
                  // endIcon={
                  //   <IconButton tabIndex="-1" className="icn_fix">
                  //     <Edit className="icn_size" />
                  //   </IconButton>
                  // }
                />
              </Grid>
              <Grid item md={6}>
                <Typography className="select_title">
                  {t("Costper")}
                  <span> *</span>
                </Typography>
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
                        <CustomMenuItem
                          placeholder="Per Hour/Minutes/Day"
                          key={data.cost_per_rule_id}
                          value={data.cost_per_rule_id}
                        >
                          {data.name}
                        </CustomMenuItem>
                      );
                    })}
                  </Select>
                  <div style={{ color: "red", fontSize: "12px" }}>
                    {props?.errorData?.cost_per?.[0]}
                  </div>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid md={8} className="right_card">
          <Box>
            <Typography className="select_title">{t("Description")}</Typography>
            <ReactQuill value={props.lessonsData.description}
            onChange={(e) => props.handleDescription(e)} className="quill_style" theme="snow" modules={{toolbar: toolbarOptions}}
          />
          </Box>
        </Grid>
      </Grid>
      <Grid container mt={2}>
        <Grid item md={12}>
          <Typography className="title_text">{t('Availability')}</Typography>
          <Divider sx={{ background: "#1D3160" }} />
        </Grid>
        <Typography className="avail_text">
          {t("Avail")}
          <span>*</span>
        </Typography>
        <Grid item md={12}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="no-space empty_cell" />
                  <TableCell className="tbl_txt no-space">
                    Morning
                  </TableCell>
                  <TableCell className="tbl_txt no-space">
                    Afternoon
                  </TableCell>
                  <TableCell className="tbl_txt no-space">
                    Evening
                  </TableCell>
                </TableRow>
              </TableHead>
              <Box className="check_box">
                <Typography className="tbl_txt no-space">
                  {t('check/uncheck')}
                </Typography>
                <Checkbox onChange={props.handleCheckAll} checked={props.allChecked ?? false}/>
              </Box>
              <TableBody>
                {props.globalData?.days?.map((item) => (
                  <TableRow key={item?.day_id}>
                    <TableCell className="tbl_txt2 no-space">
                      {item?.day}
                    </TableCell>
                    <TableCell className="no-space">
                      <Checkbox
                        onChange={props.handleCheckBox}
                        value={item.day.toLowerCase() + '-morning'}
                        checked={props.checkedSlots.find(
                          (slot) =>
                            slot.day === item?.day.toLowerCase() &&
                            slot.lot === "morning" &&
                            slot.is_available
                        ) ?? false}
                      />
                    </TableCell>
                    <TableCell className="no-space">
                      <Checkbox
                        onChange={props.handleCheckBox}
                        value={item.day.toLowerCase() + '-afternoon'}
                        checked={props.checkedSlots.find(
                          (slot) =>
                            slot.day === item?.day.toLowerCase() &&
                            slot.lot === "afternoon" &&
                            slot.is_available
                        ) ?? false}
                      />
                    </TableCell>
                    <TableCell className="no-space">
                      <Checkbox
                        onChange={props.handleCheckBox}
                        value={item.day.toLowerCase() + '-evening'}
                        checked={props.checkedSlots.find(
                          (slot) =>
                            slot.day === item?.day.toLowerCase() &&
                            slot.lot === "evening" &&
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
      </Grid>
      <Box className="flex_btn">
        <CustomButton
          onClick={props.handleSubmit}
          className="btn_submit"
          title={t("Submit")}
        />
        <CustomButton
          onClick={props.handleClick}
          className="btn_cancel"
          title={t("Cancel")}
        />
      </Box>
    </MyDiv>
  );
}
