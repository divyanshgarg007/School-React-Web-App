/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
import React, {useEffect, useRef, useState} from 'react'
import {Box, Typography, Grid} from '@mui/material'
import {Panorama} from '@mui/icons-material'
import {useTranslation} from 'react-i18next'
import {bindActionCreators} from 'redux'
import {connect, useSelector} from 'react-redux'
import {isMobile} from 'react-device-detect'
import CustomNoDataBox from '../../components/CustomNoDataBox'
import {ActionCreators} from '../../redux/actions'
import {Loader, SnackBar} from '../../components'
import {GalleryTopLeftContainer, GalleryTopRightContainer, GalleryBottomContainer} from './components'
import MyDiv from './gallery.style'

const Gallery = (props) => {
  const {t} = useTranslation()
  const data = true

  const [coverImage, setCoverImage] = useState()
  const [videoLink, setVideoLink] = useState()
  const [imageGallery, setImageGallery] = useState()
  const [messageForPublish, setMessageForPublish] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const [coverImageList, setCoverImageList] = useState([])
  const [videoLinkList, setVideoLinkList] = useState([])
  const [imageGalleryList, setImageGalleryList] = useState()
  const [videoLinkData, setVideoLinkData] = useState({})

  const galleryState = useSelector((state) => state.galleryState)
  const masterState = useSelector((state) => state.masterState)

  useEffect(() => {
    props.actions.getDetailsAction()
  }, [])


  useEffect(() => {
    setCoverImage(masterState.getDetailsData?.data?.gallery?.coverimage?.[0]?.media_url)
  }, [masterState.getDetailsData?.data?.gallery?.coverimage?.[0]?.media_url])

  useEffect(() => {
    setImageGallery(masterState.getDetailsData?.data?.gallery?.images)
  }, [masterState.getDetailsData?.data?.gallery?.images])

  useEffect(() => {
    setVideoLink(masterState.getDetailsData?.data?.gallery?.video)
  }, [masterState.getDetailsData?.data?.gallery?.video])

  useEffect(() => {
    setCoverImageList(masterState.getDetailsData?.data?.gallery?.coverimage)
  }, [masterState.getDetailsData?.data?.gallery?.coverimage])

  useEffect(() => {
    setVideoLinkList(masterState.getDetailsData?.data?.gallery?.video)
  }, [masterState.getDetailsData?.data?.gallery?.video])

  useEffect(() => {
    setImageGalleryList(masterState.getDetailsData?.data?.gallery?.images)
  }, [masterState.getDetailsData?.data?.gallery?.images])


  // post for snackbar status
  useEffect(() => {
    if (galleryState?.postCoverImage?.data?.status === 'success') {
      setMessageForPublish(t('messageForPublish'))
      localStorage.setItem('messageForPublish', t('messageForPublish'))
      setMessage(galleryState?.postCoverImage?.data?.message)
      setStatus('success')
    } else if (galleryState?.postCoverImage?.data?.status === 'failure') {
      setMessage(galleryState?.postCoverImage?.data?.message)
      setStatus('error')
    }
  }, [galleryState?.postCoverImage?.data?.status])

  useEffect(() => {
    if (galleryState?.postVideoLink?.data?.status === 'success') {
      setVideoLinkData({})
      setMessageForPublish(t('messageForPublish'))
      localStorage.setItem('messageForPublish', t('messageForPublish'))
      setMessage(galleryState?.postVideoLink?.data?.message)
      setStatus('success')
    } else if (galleryState?.postVideoLink?.error?.meta?.status === 'failure') {
      setMessage(galleryState?.postVideoLink?.error?.meta?.message)
      setStatus('error')
    }
  }, [galleryState?.postVideoLink?.data, galleryState?.postVideoLink?.error])

  useEffect(() => {
    if (galleryState?.postImageGallery?.data?.status === 'success') {
      setMessageForPublish(t('messageForPublish'))
      localStorage.setItem('messageForPublish', t('messageForPublish'))
      setMessage(galleryState?.postImageGallery?.data?.message)
      setStatus('success')
    } else if (galleryState?.postImageGallery?.error?.meta?.status === 'failure') {
      setMessage(galleryState?.postImageGallery?.error?.meta?.message)
      setStatus('error')
    }
  }, [galleryState?.postImageGallery?.data, galleryState?.postImageGallery?.error])

  useEffect(() => {
    if (galleryState?.postDelete?.data?.status === 'success') {
      setMessage(galleryState?.postDelete?.data?.message)
      setStatus('success')
    } else if (galleryState?.postDelete?.data?.status === 'failure') {
      setMessage(galleryState?.postDelete?.data?.message)
      setStatus('error')
    }
  }, [galleryState?.postDelete?.data?.status])


  //-------------------top left container-------------------//

  const [file, setFile] = useState()
  const imageRef = useRef()

  // cover image upload
  const showOpenFileDialog = () => {
    imageRef.current.click()
  }
  const handleChange = (event) => {
    let fileObject = event.target.files[0]
    setFile(fileObject)
  }

  useEffect(() => {
    if (!file) {
      return
    }
    props.actions.postCoverImageAction(file)
  }, [file])

  // handle delete icon
  const handleDeleteCoverImage = () => {
    const currentItem = coverImageList.filter((data) => data)
    const id = currentItem[0]?.id
    let obj = {
      data_type: 'gallery-coverimage',
      version_id: id,
    }
    props.actions.postDeleteAction(obj)
  }

  //----------------------top right container------------------------//


  const handleChangeUrl = (e) => {
    setVideoLinkData({...videoLinkData, [e.target.name]: e.target.value})
  }

  const handleAddNew = () => {
    if (!videoLinkData?.video_url) {
      setMessage('Please provide a Video URL.')
      setStatus('error')
    } else {
      props.actions.postVideoLinkAction(videoLinkData)
    }
  }

  // handle delete icon
  const handleDeleteVideoLink = (e, Id) => {
    const currentItem = videoLinkList.filter((data) => data.id === Id)
    const id = currentItem[0]?.id
    let obj = {
      data_type: 'gallery-video',
      version_id: id,
    }
    props.actions.postDeleteAction(obj)
  }

  //----------------------bottom container-----------------------//

  const imageRefMultiple = useRef()

  const showOpenFileDialogMultiple = () => {
    imageRefMultiple.current.click()
  }

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files
    props.actions.postImageGalleryAction(selectedFiles)
  }

  // snackbar close
  const handleSnackBarClose = () => {
    setMessageForPublish('')
    setMessage('')
    setStatus('')
    props.actions.cleanUpUserState()
  }

  // handle delete icon
  const handleDeleteImage = (e, Id) => {
    const currentItem = imageGalleryList.filter((data) => data.id === Id)
    const id = currentItem[0]?.id
    let obj = {
      data_type: 'gallery-images',
      version_id: id,
    }
    props.actions.postDeleteAction(obj)
  }

  const msg = localStorage.getItem('messageForPublish')
  return (
    <MyDiv>
      {(galleryState?.postCoverImage?.loading || masterState?.getDetailsData?.loading ||
      galleryState?.postVideoLink?.loading || masterState?.getDetailsData?.loading ||
      galleryState?.postImageGallery?.loading || masterState?.getDetailsData?.loading)
      &&
      <div>
        <Loader />
      </div>
      }
      {isMobile && <>{messageForPublish ?
        <Typography className="publish_msg">
          {messageForPublish}
        </Typography> : msg ? <Typography className="publish_msg">
          {msg}
        </Typography> : null
      }</>}
      <Box className="gallery_box">
        <Typography className="page_title">{t('Gallery')}</Typography>
        {!data && <CustomNoDataBox
          className1="icn_btn"
          className2="btn_text"
          startIcon={<Panorama />}
          title2={t('NoImagesFound')}
          title4={t('AddCover')}
          title5={t('AddImage')}
          text1={t('text1')}
          text2={t('text2')}
        />}
        {data &&
        <Box>
          <Grid container md={12}>
            <Grid md={6} className="right_space">
              <Grid md={12}>
                <GalleryTopLeftContainer
                  showOpenFileDialog={showOpenFileDialog}
                  handleChange={handleChange}
                  imageRef={imageRef}
                  file={coverImage}
                  handleDeleteCoverImage={handleDeleteCoverImage}
                />
              </Grid>
              <Grid md={12}>
                <GalleryBottomContainer
                  imageRefMultiple={imageRefMultiple}
                  onSelectFile={onSelectFile}
                  showOpenFileDialogMultiple={showOpenFileDialogMultiple}
                  imageGallery={imageGallery}
                  handleDeleteImage={handleDeleteImage}
                />
              </Grid>
            </Grid>
            {/* <Grid container md={1} /> */}
            <Grid md={6} className="box_cont left_space">
              <GalleryTopRightContainer
                handleChangeUrl={handleChangeUrl}
                handleAddNew={handleAddNew}
                videoLinkData={videoLinkData}
                videoLink={videoLink}
                handleDeleteVideoLink={handleDeleteVideoLink}
              />
            </Grid>
          </Grid>
        </Box>
        }
      </Box>
      <SnackBar
        message={message}
        severity={status}
        open={message?.length > 0}
        close={handleSnackBarClose}
      />
    </MyDiv>
  )
}


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(Gallery)
