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
.aboutme_box{
  // border-left: 5px solid #262728;
  //   margin: 20px 0px;
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
.info_text{
  font-family: "Arial";
  font-weight: 400;
  font-size: 15px;
  color: #000000;
  margin-bottom: 8px;
}
.quill_style{
    height: 400px;
    width: 100%;
    @media(max-width:767px){
      height: 487px;
        width: 100%; 
    }
    @media(min-width:768px) and (max-width:1023px){
        width: 100%;
        height: 487px;
    }
}
.quill_style .ql-editor{
    background: #FFFFFF;
    @media(max-width:767px){
        border: 1px solid #ccc;
        width: 100%;
    }
    @media(min-width:768px) and (max-width:1023px){
        width: 100%;
        border: 1px solid #ccc;
    }
}
.ql-toolbar.ql-snow {
    background: #ffffff;
}
.ql-container.ql-snow{ 
    @media(max-width:767px){
      border: none !important;
      background: #FFFFFF;
    }
    @media(min-width:768px) and (max-width:1023px){
      border: none !important;
      background: #FFFFFF;
    }
}
.btn_submit{
    font-family: "Arial";
    font-weight: 400;
    font-size: 15px;
    color: #0F1350;
    text-transform: capitalize;
    background-color: #fff;
    border: 1px solid #C4D2DF;
    border-radius: 5px;
  }
  .btn_cancel{
    font-family: "Arial";
    font-weight: 400;
    font-size: 15px;
    color: #0F1350;
    text-transform: capitalize;
    background-color: #fff;
    border: 1px solid #C4D2DF;
    border-radius: 5px;
  }
  .btn_submit:hover{x_btn
    color: #0F1350;
    background-color: #fff;
    border: 1px solid #C4D2DF;
  }
  .btn_cancel:hover{
    color: #0F1350;
    background-color: #fff;
    border: 1px solid #C4D2DF;
  }
  .flex_btn{
    display: flex;
    column-gap: 10px;
    justify-content: start;
    padding-bottom:30px;
  }

`
export default MyDiv
