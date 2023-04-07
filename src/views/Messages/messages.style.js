import styled from 'styled-components'

const MyDiv = styled.div`
.messages_box{
    // border-left: 5px solid #262728;
    // margin: 20px 0px;
    padding-left: 50px;
    padding-right: 50px;
    height: 100%;
    @media(max-width:767px){
      border-left: none;
      padding-right: 0;
      padding-left: 0;
      margin-top: 0px;
      height: 100%;
    background-color: #EDF2F7;
    }
    @media(min-width:768px) and (max-width:1023px){
      border-left: none;
      padding-right: 0;
      padding-left: 0;
      margin-top: 0px;
      height: 100%;
    background-color: #EDF2F7;
    }
}
.page_title{
    font-family: "Arial";
    font-size: 18px;
    font-weight: 400;
    color: #1D3160;
    padding:30px 0px;
    @media(max-width:767px){
        text-align: center;
        color: #000000;
    }
    @media(min-width:768px) and (max-width:1023px){
        text-align: center;
        color: #000000;
    }
  }
.icon_style{
    color: #F50057;
}
.icon_style2{
  color: #f0cb47;
}
.title_style{
    font-family: "Arial";
    font-size: 18px;
    font-weight: 500;
}
`
export default MyDiv
