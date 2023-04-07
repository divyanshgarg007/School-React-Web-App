/* eslint-disable no-unused-vars */
import React from 'react'
import {Card, List, Grid, IconButton, Box, Typography, ListItem} from '@mui/material'
import {Delete, Edit, DragIndicator} from '@mui/icons-material'
import MyDiv from './listCardEducation.style'

export default function ListCardEducation(props) {
  return (
    <MyDiv
      ref={props.provided.innerRef}
      snapshot={props.snapshot}
      {...props.provided.draggableProps}
    >
      <Grid container md={12} xs={12} sm={12} className="grid_cont" >
        <Grid item md={11} xs={11} sm={11}>
          <Card className="main_card">
            {props.children}
          </Card>
        </Grid>
        <Grid item md={1} xs={1} sm={1}>
          <IconButton {...props.provided.dragHandleProps}>
            <DragIndicator sx={{color: '#000000'}} />
          </IconButton>
        </Grid>
      </Grid>
    </MyDiv>
  )
}
