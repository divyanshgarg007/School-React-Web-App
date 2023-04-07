import {Add} from '@mui/icons-material'
import {Box, Typography} from '@mui/material'
import React, {useEffect, useRef, useState} from 'react'
import {connect, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {CustomAddNew, CustomButton, CustomTable, Loader, SnackBar} from '../../../../components'
import {ActionCreators} from '../../../../redux/actions'
import SubCategoryForm from '../SubCategoryForm'
import MyDiv from './subCategories.style'

const tableHeading = [
  {
    id: 1,
    title: 'Sub-Categories',

  },
  {
    id: 2,
    title: 'Edit',

  },
]

const SubCategories = (props) => {
  const [categoryList, setCategoryList] = useState([])
  const [subCategoryData, setSubCategoryData] = useState({})
  const [subCategoryList, setSubCategoryList] = useState([])
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [sidebar, setSidebar] = useState(false)
  const [errorData, setErrorData] = useState()
  const [file, setFile] = useState()
  const imageRef = useRef()

  const categoryState = useSelector((state) => state.categoryState)
  const imageUrl = useSelector((state) => state.categoryState?.postSubCategoryImage?.data)
  const languageState = useSelector((state) => state.globalState.getList.data?.payload?.languages)

  useEffect(() => {
    setErrorData(categoryState?.postSubCategoryList?.error?.errors)
  }, [categoryState?.postSubCategoryList?.error])

  useEffect(() => {
    props.actions.getListAction()
  }, [])

  useEffect(() => {
    setSubCategoryList(categoryState?.getAdminCategorySubCategory?.data)
  }, [categoryState?.getAdminCategorySubCategory?.data])
  // we will filter the category list based on the below Id

  useEffect(() => {
    if (!file) {
      return
    }
    props.actions.postSubCategoryImageAction(file)
  }, [file])

  useEffect(() => {
    if (!imageUrl) return
    setSubCategoryData({...subCategoryData, sub_category_image: imageUrl})
  }, [imageUrl])

  let {category} = useParams()


  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    const filteredList = categoryState?.getAdminCategorySubCategory?.data?.filter((item) => item.id == category)
    setCategoryList(filteredList)
  }, [categoryState?.getAdminCategorySubCategory?.data])

  useEffect(() => {
    if (categoryState.postSubCategoryList?.data?.data?.meta?.status === 'success') {
      setMessage(categoryState.postSubCategoryList?.data?.data?.meta?.message)
      setStatus('success')
      setSidebar(false)
    } else if (categoryState?.postSubCategoryList?.error?.status === 'failure') {
      setMessage(categoryState?.postSubCategoryList?.error?.message)
      setStatus('error')
      setSidebar(true)
    }
  }, [categoryState?.postSubCategoryList])

  const handleChange = (e) => {
    setSubCategoryData({...subCategoryData, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    setSubCategoryData({})
    props.actions.postSubCategoryListAction(subCategoryData)
  }

  const handleClick = () => {
    setSidebar(!sidebar)
    setSubCategoryData({})
    setErrorData()
  }

  const handleEditSubcategory = (e, item) => {
    const currentCategory = subCategoryList?.filter((data) => data.id === item.category_id)
    const filtered = currentCategory[0].admin_sub_category.filter((e) => e.id === item.id)
    setSubCategoryData({
      category_id: item.category_id,
      sub_category_id: filtered?.[0]?.id,
      sub_category_name_EN: filtered?.[0]?.sub_category_name_EN,
      sub_category_name_GK: filtered?.[0]?.sub_category_name_GK,
      description: filtered?.[0]?.description,
      sub_category_image: filtered?.[0]?.sub_category_image,
    })
    setSidebar(!sidebar)
  }

  const showOpenFileDialog = () => {
    imageRef.current.click()
  }

  const handleChangeCategoryImage = (event) => {
    let fileObject = event.target.files[0]
    setFile(fileObject)
  }

  const handleSnackBarClose = () => {
    setMessage('')
    setStatus('')
    props.actions.cleanUpUserState()
  }

  return (
    <MyDiv>
      {(categoryState?.postSubCategoryList?.loading || categoryState?.getAdminCategorySubCategory?.loading) &&
      <div>
        <Loader />
      </div>
      }
      <Box className="main_box">
        <Box className="header_top">
          <Typography className="page_title">Sub-Categories</Typography>
          <CustomButton startIcon={<Add />} title="Add New" className="add_btn" onClick={handleClick} />
        </Box>
        <CustomTable handleEditSubcategory={handleEditSubcategory} tableHeading={tableHeading} tableData={categoryList} type="sub_category_name" />
        <CustomAddNew sidebar={sidebar} sidebarTitle="Add Sub-Category" handleClick={handleClick}>
          <SubCategoryForm
            languageState={languageState}
            showOpenFileDialog={showOpenFileDialog}
            handleChangeCategoryImage={handleChangeCategoryImage}
            imageRef={imageRef}
            file={subCategoryData.sub_category_image}
            subCategoryData={subCategoryData}
            handleClick={handleClick}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formData={categoryList}
            errorData={errorData}
          />
        </CustomAddNew>
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

export default connect(null, mapDispatchToProps)(SubCategories)
