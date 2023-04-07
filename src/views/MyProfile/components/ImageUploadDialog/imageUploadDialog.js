import React, {useState} from 'react'
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide'
import {Box} from '@mui/material'
import Cropper from 'react-easy-crop'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ActionCreators} from '../../../../redux/actions'
import {CustomButton} from '../../../../components'
import MyDiv from './imageUploadDialog.style'
import {getCroppedImg} from './cropImage'


const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />
})

const ImageUploadDialog = (props) => {
  const [crop, setCrop] = useState({x: 0, y: 0})
  const [zoom, setZoom] = useState(1)
  const [croppedImage, setCroppedImage] = useState(null)
  const onCropComplete = async(_, croppedAreaPixels) => {
    const myCroppedImage = await getCroppedImg(props.file, croppedAreaPixels)
    setCroppedImage(myCroppedImage)
  }

  const handleImageUpload = () => {
    props.actions.postProfilePictureAction(croppedImage)
    props.handleImageUploadDialog()
  }

  const popup = (popupbox) => (
    <MyDiv>
      <Box container className="grid_dialog">
        <Cropper
          image={props.file}
          crop={crop}
          zoom={zoom}
          aspect={4 / 3}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
        <CustomButton className="upload_btn" title="Upload" onClick={handleImageUpload} />
      </Box>
    </MyDiv>
  )
  return (
    <Dialog
      popupbox="imageUploadDialog"
      open={props.imageUploadDialog}
      TransitionComponent={Transition}
      onClose={props.handleImageUploadDialog}
      fullWidth
    >
      {popup('imageUploadDialog')}
    </Dialog>
  )
}


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(ImageUploadDialog)
