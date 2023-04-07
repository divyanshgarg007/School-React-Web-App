import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {IconButton, Slide, Snackbar, Typography} from '@mui/material'
import Alert from '@mui/material/Alert'
import CloseIcon from '@mui/icons-material/Close'
import {isMobile} from 'react-device-detect'
import {ErrorTimeOut} from '../../constants/constant'
import MyDiv from './snackbar.style'

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />
}

export default function SnackbarComponent(props) {
  const {message, severity, open} = props
  const [transition, setTransition] = React.useState(undefined)

  const handleClose = (Transition) => {
    setTransition(() => Transition)
    props.close()
  }

  useEffect(() => {
    if (open === true) {
      setTransition(() => TransitionLeft)
    }
  })

  const anchorOrigin = {
    vertical: 'top',
    horizontal: 'right',
  }

  const anchorOriginM = {
    vertical: 'top',
    horizontal: 'center',
  }


  return (
    <MyDiv>
      <Snackbar open={open}
        autoHideDuration={ErrorTimeOut}
        anchorOrigin={!isMobile ? anchorOrigin : anchorOriginM}
        className="custom_snack"
        TransitionComponent={transition}
        key={transition ? transition.name : ''}
      >
        <Alert severity={severity} className="text-font custom_snack_alert">
          <Typography className="notification">Notifications</Typography>
          <Typography>{message}</Typography>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => handleClose(TransitionLeft)}
            className="close_icon"
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Alert>
      </Snackbar>
    </MyDiv>
  )
}

SnackbarComponent.propTypes = {
  message: PropTypes.string,
  severity: PropTypes.string,
  duration: PropTypes.number,
  open: PropTypes.bool,
  close: PropTypes.func,
}

