import styled from 'styled-components'

const MyDiv = styled.div`
.area_box{
  margin-top: 24px;
}
.edit_sni{
  position: relative;
  margin-top: 24px;
}
.icn_fix{
  position: absolute;
  right: 3px;
}
.icn_size{
  width: 0.6em;
  height: 0.6em;
  color: #C4D2DF;
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
    font-family: "Arial";
    font-weight: 400;
    font-size: 12px;
    color: #0F1350;
    text-transform: capitalize;
    background-color: #fff;
    border: 1px solid #C4D2DF;
    border-radius: 5px;
  }
  .btn_cancel:hover{
    font-family: "Arial";
    font-weight: 400;
    font-size: 12px;
    color: #0F1350;
    text-transform: capitalize;
    background-color: #fff;
    border: 1px solid #C4D2DF;
    border-radius: 5px;
  }
  .flex_btn{
    margin-top: 15px;
    display: flex;
    column-gap: 10px;
    justify-content: start;
  }
  .title3_text{
    font-family: "Arial";
    font-size: 14px;
    font-weight: 400;
    color: #00000;
}
.title_text2{
  font-family: "Arial";
  font-weight: 400;
  font-size: 14px;
  color: #000000;
}
.title_text2 span{
  color: #FF0000;
}
.text-style input{
  font-family: "Proxima Nova";
  font-size: 14px;
  font-weight: 400;
  height: 1.6375em;
}
.text_area2: focus-visible{
  border: 1px solid blue;
  outline: 0!important;
}
.text_area2: hover{
  border: 1px solid blue;
}
.text_area2{
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  width: 100%;
  height: 100px!important;
  resize: none;
  font-family: "Arial";
  font-size: 14px;
  font-weight: 400;
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
.flex_btn{
  margin-top: 50px;
  display: flex;
  column-gap: 10px;
}
.btn_submit:hover{
  color: #0F1350;
  background-color: #fff;
}
.btn_cancel:hover{
  color: #0F1350;
  background-color: #fff;
}
.quill_style{
  width: 100%;
  @media(max-width:767px){
      width: 100%; 
  }
  @media(min-width:768px) and (max-width:1023px){
      height: 100%
  }
}
.quill_style .ql-editor{
  background: #FFFFFF;
  @media(max-width:767px){
      border: 1px solid #ccc;
      width: 100%;
      height: 300px!important;
  }
  @media(min-width:768px) and (max-width:1023px){
      width: 100%;
      border: 1px solid #ccc;
      height: 300px!important;
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
`
export default MyDiv
