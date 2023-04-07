import {Grid, Box, Typography} from '@mui/material'
import React from 'react'
import {useTranslation} from 'react-i18next'
import MyDiv from './categoryCard.style'
export default function CategoryCard(props) {
  const {t} = useTranslation()
  return (
    <MyDiv>
      <Box mt={4}>
        <Grid container rowSpacing={4} columnSpacing={{sm: 4, md: 4}}>
          {props?.teacherCardList?.map((item, index) => {
            return (
              <Grid item md={3} key={index}>
                <Box className="box_card">
                  <img src={process.env.REACT_APP_IMAGE_BASE_URL + item.sub_category_image} />
                  <Box className="text_cards">
                    <Typography className="text_style2">{item?.sub_category_name}</Typography>
                    <Typography className="text_style2">{item?.usercount} {t('Teachers')}</Typography>
                  </Box>
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </MyDiv>
  )
}
