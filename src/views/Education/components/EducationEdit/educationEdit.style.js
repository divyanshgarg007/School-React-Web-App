import styled from 'styled-components'

const MyDiv = styled.div`
.demo_box{
    margin-bottom: 8px;
}
.edit_box{
    position: relative;
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
.text_title{
    font-family: "Arial";
    font-weight: 400;
    font-size: 14px;
    color: #000000;
}
.text_title span{
    color: #FF0000;
}

.mu_data{
    height:40px;
    width: 100%;
    font-family: "Proxima Nova";
    font-weight: 500px;
    font-size: 14px;
    color: 0F1350;
    background-color: #ffffff;
    border-radius: 2px;
}
.mu_data fieldset{
  border-color: #d9d9d9;
}

.text-style input{
    font-family: "Proxima Nova";
    font-size: 14px;
    font-weight: 400;
    height: 1.6375em;
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
