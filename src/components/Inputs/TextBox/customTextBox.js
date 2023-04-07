import React from 'react'
// import {InputAdornment} from '@mui/material'
import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'
// import styled from 'styled-components'

// const CustomTextField = styled(TextField)({
//   '& .MuiOutlinedInput-root': {
//     '&:hover fieldset': {
//       borderColor: 'blue',
//       borderRadius: '1px',
//       borderWidth: '1px',
//     },
//     '& fieldset': {
//       borderColor: '#d9d9d9',
//       borderRadius: '1px',
//     },
//   },
// })
export default function CustomTextBox(props) {
  return (
    <div className="text-field">
      <TextField
        onInput={props.onInput}
        onKeyDown={props.onKeyDown}
        onKeyUp={props.onKeyUp}
        autoFocus={props.autoFocus}
        disabled={props.disabled}
        sx={{backgroundColor: '#FFFFFF'}}
        placeholder={props.fieldLabel}
        type={props.type}
        value={props.value}
        error={props.error}
        name={props?.name}
        onChange={props.onChange}
        fullWidth
        className={props.className}
        autoComplete={props.autoComplete}
        size="small"
        // InputProps={{
        //   endAdornment: <InputAdornment position="end">{props.endIcon}</InputAdornment>,
        //   startAdornment: <InputAdornment position="start">{props.startIcon}</InputAdornment>,
        // }}
      />
      {props.error && <div style={{color: 'red', fontSize: '12px'}}>{props.error}</div>}
    </div>

  )
}
CustomTextBox.propTypes = {
  fieldLabel: PropTypes.string,
  type: PropTypes.string,
}
