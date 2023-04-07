import styled from 'styled-components'

const MyDiv = styled.div`
.layout_body{
  background-color: #EDF2F7;
}
.parent_bg{
  // background-color: #EDF2F7;
}
  .site-layout-background {
    background: #fff;
    border-left: 5px solid #262728;
    height: 100%;
    @media(max-width:767px){
      border-left: 0;
    }
  }
  .app_layout{
    clear: both;
    padding: 20px 24px;
    height: 100%;
    background-color: #EDF2F7;
    @media(max-width:767px){
      padding: 10px 20px;
      // background-color: transparent;
    }
    @media(min-width:768px) and (max-width:1023px){
      border-left: 0px;
      background-color:#F1F5FC;
      padding: 20px;
  }
}
  .mobile_layout{
    position: absolute;
    height: 100%;
    @media(max-width:767px){
      display:block;
      background: #EDF2F7;
  }
  @media(min-width:768px) and (max-width:1023px){
    display:block;
}
}
`
export default MyDiv
