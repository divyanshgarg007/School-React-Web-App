import React, {useEffect, useState} from 'react'
import {Grid, Typography, Divider, TableContainer, Table, TableHead, TableCell, TableRow, TableBody, Checkbox, Box} from '@mui/material'
import {useTranslation} from 'react-i18next'
import MyDiv from './rightPanelBottomEdit.style'

export default function RightPanelBottomEdit(props) {
  const [checkedAll, setCheckedAll] = useState(false)
  const [checked, setChecked] = useState({
    nr1: false,
    nr2: false,
    nr3: false,
  })
  const toggleCheck = (inputName) => {
    setChecked((prevState) => {
      const newState = {...prevState}
      newState[inputName] = !prevState[inputName]
      return newState
    })
  }
  const selectAll = (value) => {
    setCheckedAll(value)
    setChecked((prevState) => {
      const newState = {...prevState}
      // eslint-disable-next-line guard-for-in
      for (const inputName in newState) {
        newState[inputName] = value
      }
      return newState
    })
  }

  useEffect(() => {
    let allChecked = true
    for (const inputName in checked) {
      if (checked[inputName] === false) {
        allChecked = false
      }
    }
    if (allChecked) {
      setCheckedAll(true)
    } else {
      setCheckedAll(false)
    }
  }, [checked])
  const {t} = useTranslation()
  return (
    <MyDiv>
      <Grid container md={12}>
        <Grid item md={12}>
          <Typography className="title_text">{props.text3}</Typography>
        </Grid>
        <Grid className="divider_grid" item md={12}>
          <Divider sx={{background: '#1D3160'}} />
        </Grid>
        <Typography className="avail_text">{t('Avail')}<span>*</span></Typography>
        <Grid item md={12}>
          <Grid item md={7}>
            <TableContainer>
              <Table>
                <Box className="check_box">
                  <Typography>Check All/Uncheck All</Typography>
                  <Checkbox onChange={(event) => selectAll(event.target.checked)} checked={checkedAll} />
                </Box>
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell className="tbl_txt">{t('Morning')}</TableCell>
                    <TableCell className="tbl_txt">{t('Afternoon')}</TableCell>
                    <TableCell className="tbl_txt">{t('Evening')}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.value10.map((value) => (
                    <TableRow key={value.id}>
                      <TableCell className="tbl_txt">
                        {value.name}
                      </TableCell>
                      <TableCell>
                        <Checkbox onChange={() => toggleCheck('nr1')}
                          checked={checked.nr1}
                        />
                      </TableCell>
                      <TableCell>
                        <Checkbox onChange={() => toggleCheck('nr2')}
                          checked={checked.nr2}
                        />
                      </TableCell>
                      <TableCell>
                        <Checkbox onChange={() => toggleCheck('nr3')}
                          checked={checked.nr3}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item md={5} />
        </Grid>
      </Grid>
    </MyDiv>
  )
}

