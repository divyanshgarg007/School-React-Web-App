import React from 'react'
import {Card, Grid, IconButton} from '@mui/material'
import {DragIndicator} from '@mui/icons-material'
import MyDiv from './customGridCard.style'

export default function CustomGridCard(props) {
  return (
    <MyDiv
      ref={props.provided.innerRef}
      snapshot={props.snapshot}
      {...props.provided.draggableProps}
    >
      <Grid container md={12} xs={12} sm={12}>
        <Grid item md={11} xs={11} sm={11}>
          <Card className="main_card">
            {props?.children}
          </Card>
        </Grid>
        <Grid className="drag_grid" item md={1} xs={1} sm={1}>
          <IconButton {...props.provided.dragHandleProps} className="drag_icon">
            <DragIndicator />
          </IconButton>
        </Grid>
      </Grid>
    </MyDiv>
  )
}
