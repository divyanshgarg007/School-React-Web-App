import styled from 'styled-components'

const MyDiv = styled.div`
.close_icn{
    position: absolute;
    top: -6px;
    right: -10px;
}
.close_icn svg{
    height: 16px;
    color: #ffffff;
}
.publish_msg{
    position: relative;
    color: #FFFFFF;
    background-color: #F50057;
    padding: 5px;
    width: 100%;
    border-radius: 8px;
    font-family: "Proxima Nova";
    font-weight: 300;
    font-size: 18px;
    text-align: left;
}
.education_box{
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
.card_box{
    padding-top: 40px;
    padding-bottom: 0px;
    @media(max-width:767px){
        padding-top: 24px;
        padding-bottom: 24px;
    }
    @media(min-width:768px) and (max-width:1023px){
        padding-top: 24px;
        padding-bottom: 24px;
    }
}
.add_btn{
    color: #000000;
    font-weight: 600;
    font-family: "Proxima Nova";
    text-transform: capitalize;
    font-size: 15px;
    background-color: transparent;
    padding: 0;
    margin-bottom:40px;
    @media(max-width:767px){
       display: none;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: none;
    }
}
.add_btn .MuiTouchRipple-root{
    display:none;
}
.add_btn: hover{
    color: #000000;
    background-color: transparent;
}
.add_btn_mobile{
    color: #000000;
    font-weight: 600;
    font-family: "Proxima Nova";
    text-transform: capitalize;
    font-size: 15px;
    background-color: #EDF2F7;   
}
.btn_box{
    display: none;
    @media(max-width:767px){
        display: block;
     }
     @media(min-width:768px) and (max-width:1023px){
         display: block;
     }
}

.flex_btn{
    margin-top: 15px;
    display: flex;
    column-gap: 10px;
    justify-content: start;
  }

  .btn_submit{
    font-family: "Arial";
    font-weight: 400;
    font-size: 12px;
    color: #0F1350;
    text-transform: capitalize;
    background-color: #fff;
    border: 1px solid #C4D2DF;
    border-radius: 5px;
  }
  .btn_cancel{
    font-family: "Arial";
    font-weight: 400;
    font-size: 12px;
    color: #0F1350;
    text-transform: capitalize;
    background-color: #fff;
    border: 1px solid #C4D2DF;
    border-radius: 5px;
  }
  .btn_submit:hover{
    color: #0F1350;
    border: 1px solid #C4D2DF;
    background-color: #fff;
  }
  .btn_cancel:hover{
    color: #0F1350;
    border: 1px solid #C4D2DF;
    background-color: #fff;
  }
  .title_text1{
    font-family: "Proxima Nova";
    font-weight: 600;
    font-size: 15px;
    color: #000000;
}
.title_text{
    font-family: "Proxima Nova";
    font-weight: 400;
    font-size: 15px;
    color: #000000;
}
.title_text2{
    font-family: "Arial";
    font-weight: 400;
    font-size: 15px;
    color: #000000;
    @media(max-width:767px){
    padding: 10px 0 0 0;
    }
}
`
export default MyDiv
