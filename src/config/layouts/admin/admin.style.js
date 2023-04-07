import styled from 'styled-components'

const MyDiv = styled.div`

.custom-tablist{
  background: #fff;
  height: 100%;
  padding-top: 20px;
  position: fixed;
  width: 16.666667%;
}
.custom-tablist .MuiTabs-scroller{
  width:100%;
}
.sidebar-navs{
  background: #F1F5FC;
}
.nav-tabs{
  align-items: flex-start;
  color: #000;
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 400;
  padding: 12px 24px;
  margin-right: 1px;
}
.nav-tabs:hover{
  background-color: #F1F5FC;
}
.active_menu{
  align-items: flex-start;
  background-color: #F1F5FC;
  color: #000;
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 400;
  padding: 12px 24px;
  margin-right: 1px;
}
.active_menu:hover{
  background-color: #F1F5FC;
}
.mobile_layout {
  position: absolute;
  height: 100%;
  top: 66px;
}
.admin_layout{
  clear: both;
  padding: 0px 50px;
  height: 100%;
  background-color: #EDF2F7;
}
.site-admin-background{
  background: #fff;
  border-left: 5px solid #262728;
  height: 100%;
}
`
export default MyDiv
