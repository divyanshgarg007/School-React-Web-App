import {Box} from '@mui/material'
import React, {useState, useEffect} from 'react'
import {useTranslation} from 'react-i18next'
import {connect, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../../redux/actions'
import {AuthTopPanelMain} from '../MainDashboard/components'
import MyDiv from './contact.style'

const Contact = (props) => {
  const {t} = useTranslation()
  const [categoryList, setCategoryList] = useState()

  const categoryState = useSelector((state) => state.categoryState)

  useEffect(() => {
    props.actions.getCategoryAction()
  }, [])

  useEffect(() => {
    setCategoryList(categoryState?.getCategorySubCategory?.data)
  }, [categoryState?.getCategorySubCategory?.data])

  return (
    <MyDiv>
      <AuthTopPanelMain categoryList={categoryList} title1={t('Home')} title2={t('allCategories')} title3={t('Blog')} title4={t('ContactUs')} title5={t('Login')} title6={t('Register')} />
      <Box>
        CONTACT US
      </Box>
    </MyDiv>
  )
}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(Contact)
