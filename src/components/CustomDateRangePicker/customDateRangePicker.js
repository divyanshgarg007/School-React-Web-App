import React from 'react'
import {DateRange} from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
export default function CustomDateRangePicker(props) {

  return (
    <DateRange
      editableDateInputs
      onChange={props.handleDateFilter}
      moveRangeOnFirstSelection={false}
      ranges={props.state}
    />
  )
}
