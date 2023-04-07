import React, {useState, useEffect, useRef} from 'react'
import {Add} from '@mui/icons-material'
import {Box, Typography} from '@mui/material'
import {bindActionCreators} from 'redux'
import {connect, useSelector} from 'react-redux'
import {CustomAddNew, CustomButton, CustomTable, Loader, SnackBar} from '../../../../components'
import CategoryForm from '../CategoryForm'
import {ActionCreators} from '../../../../redux/actions'
import MyDiv from './categories.style'

const tableHeading = [
  {
    id: 1,
    title: 'Categories',

  },
  {
    id: 2,
    title: 'Edit',

  },
  {
    id: 3,
    title: 'View',

  },
]

const Categories = (props) => {

  const [sidebar, setSidebar] = useState(false)
  const [categoryData, setCategoryData] = useState({})
  const [categoryList, setCategoryList] = useState([])
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const [file, setFile] = useState()
  const imageRef = useRef()
  const imageUrl = useSelector((state) => state.categoryState?.postCategoryImage?.data)
  const categoryState = useSelector((state) => state.categoryState)
  const [errorData, setErrorData] = useState()

  useEffect(() => {
    props.actions.getAdminCategoryAction()
  }, [])

  useEffect(() => {
    if (!file) {
      return
    }
    props.actions.postCategoryImageAction(file)
  }, [file])

  useEffect(() => {
    setErrorData(categoryState?.postCategoryList?.error?.errors)
  }, [categoryState?.postCategoryList])

  useEffect(() => {
    if (!imageUrl) return
    setCategoryData({...categoryData, category_image: imageUrl})
  }, [imageUrl])


  useEffect(() => {
    setMessage(categoryState?.postCategoryList?.error?.errors?.category_name_EN?.[0])
    setStatus('error')
  }, [categoryState?.postCategoryList?.error?.errors])

  useEffect(() => {
    setCategoryList(categoryState?.getAdminCategorySubCategory?.data)
  }, [categoryState?.getAdminCategorySubCategory?.data])

  useEffect(() => {
    if (categoryState?.postCategoryList?.data?.status === 'success') {
      setMessage(categoryState?.postCategoryList?.data?.message)
      setStatus('success')
      setSidebar(false)
    } else if (categoryState?.postCategoryList?.error?.status === 'failure') {
      setMessage(categoryState?.postCategoryList?.error?.message)
      setStatus('error')
      setSidebar(true)
    }
  }, [categoryState?.postCategoryList?.data?.status])

  const handleChange = (e) => {
    setCategoryData({...categoryData, [e.target.name]: e.target.value})
  }
  const handleSubmit = () => {
    setCategoryData({})
    props.actions.postCategoryListAction(categoryData)
  }

  const handleClick = () => {
    setSidebar(!sidebar)
    setCategoryData({})
    setErrorData()
  }

  const handleEdit = (e, item) => {
    setSidebar(!sidebar)
    const currentCategory = categoryList.filter((data) => data.id === item)
    setCategoryData({
      id: item,
      category_name_GK: currentCategory[0]?.category_name_GK,
      category_name_EN: currentCategory[0]?.category_name_EN,
      description: currentCategory[0]?.description,
      category_image: currentCategory[0]?.category_image,
    })
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
      {(categoryState?.postCategoryList?.loading || categoryState?.getAdminCategorySubCategory?.loading) &&
      <div>
        <Loader />
      </div>
      }
      <Box className="main_box">
        <Box className="header_top">
          <Typography className="page_title">Categories</Typography>
          <CustomButton startIcon={<Add />} title="Add New" onClick={handleClick} className="add_btn" />
        </Box>
        <CustomTable
          tableHeading={tableHeading}
          tableData={categoryList}
          type="category_name"
          handleEdit={handleEdit}
        />
        <CustomAddNew sidebar={sidebar} sidebarTitle="Add Category" handleClick={handleClick}>
          <CategoryForm
            showOpenFileDialog={showOpenFileDialog}
            handleChangeCategoryImage={handleChangeCategoryImage}
            imageRef={imageRef}
            file={categoryData.category_image}
            errorData={errorData} categoryData={categoryData}
            handleSubmit={handleSubmit} handleChange={handleChange} handleClick={handleClick}
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

export default connect(null, mapDispatchToProps)(Categories)
