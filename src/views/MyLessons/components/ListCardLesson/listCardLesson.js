/* eslint-disable no-unused-vars */
import React from 'react'
import {Card, List, Grid, IconButton, Box, Typography, ListItem} from '@mui/material'
import {Delete, DragIndicator, Edit} from '@mui/icons-material'
// import {useTranslation} from 'react-i18next'
import MyDiv from './listCardLesson.style'

export default function ListCardLesson(props) {
  // const {t} = useTranslation()
  return (
    <MyDiv ref={props.provided.innerRef}
      snapshot={props.snapshot}
      {...props.provided.draggableProps}
    >
      <Grid container md={12} xs={12} sm={12} className="main_grid" >
        <Grid item md={11} xs={11} sm={11}>
          <Card className="main_card">
            {props.children}
          </Card>
        </Grid>
        <Grid item md={1} xs={1} sm={1}>
          <IconButton {...props.provided.dragHandleProps}>
            <DragIndicator className="icn_prop" />
          </IconButton>
        </Grid>
      </Grid>
    </MyDiv>
  )
}
