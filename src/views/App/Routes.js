/* eslint-disable no-unused-vars */
import React from 'react'
import {
  Switch, Route, BrowserRouter,
  Redirect,
} from 'react-router-dom'
import AppLayout from '../../config/layouts/default'
import AdminLayout from '../../config/layouts/admin'
import {getToken} from '../../utilities/authUtils'
import * as routesNames from '../../constants/routes'
import {
  ThankYou,
  EmailVerification,
  Register,
  SignUp,
  LogIn,
  Dashboard,
  MyProfile,
  MyLocations,
  MyLessons,
  AboutMe,
  Education,
  Experience,
  SkillsInterests,
  Feedback,
  Messages,
  Gallery,
  Subscription,
  SubscriptionPaymentDetails,
  MainDashboard,
  Invoice,
  HomePageFilter,
  Contact,
  UpdatePassword,
  AccountDisabled,
} from '..'
import {Sales, Customers, Packages, Approvals, Categories, DashBoard, SubCategories, Registrations} from '../AdminDashBoard/components'
import {PageNotFound} from '../../components'
import {PaymentSuccess} from '../Subscription/components'

const Routes = () => {
  const AdminRoute = ({component: Component, ...rest}) => {
    return (<Route
      {...rest}
      render={(props) => getToken('adminToken') ? (
        <AdminLayout> <Component {...props} /> </AdminLayout>
      ) : (
        <Redirect to={{pathname: routesNames.LOGIN}} />
      )}
    />)
  }
  const PrivateRoute = ({component: Component, ...rest}) => {
    return (<Route
      {...rest}
      render={(props) => getToken('token') ? (
        <AppLayout> <Component {...props} /> </AppLayout>
      ) : (
        <Redirect to={{pathname: routesNames.LOGIN}} />
      )}
    />)
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routesNames.HOME} component={HomePageFilter} />
        <Route exact path={routesNames.LOGIN} component={LogIn} />
        <Route exact path={routesNames.SIGNUP} component={SignUp} />
        <Route exact path={routesNames.REGISTER} component={Register} />
        <Route exact path={routesNames.EMAILVERIFICATION} component={EmailVerification} />
        <Route exact path={routesNames.THANKYOU} component={ThankYou} />
        <Route exact path={routesNames.INVOICE} component={Invoice} />
        <Route exact path="/teacher/:id" component={MainDashboard} />
        <Route exact path={routesNames.CONTACT} component={Contact} />
        <Route exact path={routesNames.UPDATEPASSWORD} component={UpdatePassword} />
        <Route exact path={routesNames.VERIFYPAYMENT} component={PaymentSuccess} />
        <Route exact path={routesNames.DISABLEACCOUNT} component={AccountDisabled} />

        {/* Teacher Routes */}
        <PrivateRoute exact path={routesNames.DASHBOARD} component={Dashboard} />
        <PrivateRoute exact path={routesNames.MYPROFILE} component={MyProfile} />
        <PrivateRoute exact path={routesNames.MYLOCATIONS} component={MyLocations} />
        <PrivateRoute exact path={routesNames.ABOUTME} component={AboutMe} />
        <PrivateRoute exact path={routesNames.MYLESSONS} component={MyLessons} />
        <PrivateRoute exact path={routesNames.EDUCATIONS} component={Education} />
        <PrivateRoute exact path={routesNames.EXPERIENCE} component={Experience} />
        <PrivateRoute exact path={routesNames.SKILLSINTEREST} component={SkillsInterests} />
        <PrivateRoute exact path={routesNames.GALLERY} component={Gallery} />
        <PrivateRoute exact path={routesNames.MESSAGES} component={Messages} />
        <PrivateRoute exact path={routesNames.FEEDBACK} component={Feedback} />
        <PrivateRoute exact path={routesNames.SUBSCRIPTION} component={Subscription} />
        <PrivateRoute exact path={routesNames.PAYMENTDETAILS} component={SubscriptionPaymentDetails} />

        {/* Admin Routes */}
        <Redirect from="/zunpakaloudela" exact to={{pathname: routesNames.ADMINDASHBOARD}} />
        <AdminRoute exact path={routesNames.ADMINDASHBOARD} component={DashBoard} />
        <AdminRoute exact path={routesNames.SALES} component={Sales} />
        <AdminRoute exact path={routesNames.CUSTOMER} component={Customers} />
        <AdminRoute exact path={routesNames.PACKAGES}component={Packages} />
        <AdminRoute exact path={routesNames.APPROVALS} component={Approvals} />
        <AdminRoute exact path={routesNames.CATEGORIES} component={Categories} />
        <AdminRoute exact path="/zunpakaloudela/subcategories/:category" component={SubCategories} />
        <AdminRoute exact path={routesNames.REGISTRATIONS} component={Registrations} />

        {/* wildcard redirect */}
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
