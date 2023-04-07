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
.sm_icn{
    width: 23px;
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
.add_btn:hover{
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
.text_box{
    font-family: "Arial";
    font-size: 14px;
    font-weight: 400;
    @media(max-width:767px){
       margin-left: 0;
     }
}
.flex_btn{
    margin-top: 16px;
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
    background-color: #fff;
  }
  .btn_cancel:hover{
    color: #0F1350;
    background-color: #fff;
  }
  .icon_text1{
    -webkit-justify-content: start;
    // justify-content: center;
    @media(max-width:767px){
        justify-content: start;
     }
  }
`
export default MyDiv
