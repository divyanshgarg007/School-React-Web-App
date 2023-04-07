import React from 'react'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'
export default function CustomButton(props) {
  return (
    <div>
      <Button
        variant="contained"
        className={props.className}
        startIcon={props.startIcon}
        endIcon={props.endIcon}
        // fullWidth
        borderRadius={20}
        size="large"
        type={props?.type}
        disableElevation
        onClick={props.onClick}
        onMouseEnter={props.onMouseEnter}
        disabled={props.disabled}
        style={props.style}
      >
        {props.title}
      </Button>
    </div>
  )
}
CustomButton.propTypes = {
  fieldLabel: PropTypes.string,
}

