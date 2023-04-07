import {Box, Checkbox, FormControlLabel, FormGroup, Grid, Typography} from '@mui/material'
import React from 'react'
import MyDiv from './categoryTab.style'
export default function CategoriesTab(props) {

  return (
    <MyDiv>
      <Box className="filter_box">
        <Grid container columnSpacing={{sm: 4, md: 4}} mt={1}>
          {props?.categoryList?.map((item, index) => {
            return (
              <Grid item xs={12} key={index} mb={2}>
                <Typography className="category_name">{item.category_name}</Typography>
                {item?.admin_sub_category?.map((subItem, index) => {
                  return (
                    <FormGroup key={index} className="sub_category">
                      <FormControlLabel
                        className="filter_items"
                        control={<Checkbox checked={!!props.filterSubcategory[subItem?.id]}
                          onChange={(e) => props.handleCheckBox(e, subItem?.id)}
                          name="subCategory"
                          value={subItem?.id}
                        />}
                        label={subItem.sub_category_name}
                      />
                    </FormGroup>
                  )
                })}
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </MyDiv>
  )
}
