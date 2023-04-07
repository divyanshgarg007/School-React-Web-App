import React, {useState} from 'react'
import {LocalizationProvider, DesktopDatePicker} from '@mui/x-date-pickers'
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns'
import {Stack, TextField} from '@mui/material'
import {ArrowDropDown} from '@mui/icons-material'
import MyDiv from './customDateTimePicker.style'
export default function CustomDateTimePicker({handleDate, date, views, onError, minDate, maxDate}) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <MyDiv>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3} className="stack_clr">
          <DesktopDatePicker
            onError={onError}
            views={views}
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            value={date}
            minDate={minDate ? new Date(minDate) : new Date('1930-01-01')}
            maxDate={maxDate ? new Date(maxDate) : new Date()}
            inputFormat="dd-MM-yyyy"
            onChange={(e) => handleDate(e)}
            components={{
              OpenPickerIcon: ArrowDropDown,
            }}
            renderInput={(params) => <TextField onClick={handleOpen} className="date_box" {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </MyDiv>
  )
}
