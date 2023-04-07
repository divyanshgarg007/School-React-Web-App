import styled from 'styled-components'

const MyDiv = styled.div`
.grid_boxes{
    display: grid;
    width: 100%;
    margin-top: 24px;
}
.desc_box{
    margin-top: 24px;
}
.text_boxes{
    margin-top: 24px;
}
.icn_fix{
    position: absolute;
    right: 0px;
}
.icn_size{
    width: 0.6em;
    height: 0.6em;
    color: #C4D2DF;
}
.drawer_box{
    border-top: 0px solid #1D3160;
    padding: 0px;
    position: relative;
}
.icon_cross{
    position: absolute;
    right: 20px;
    top: 14px;
}
.title_text{
    font-family: "Arial";
    font-weight: 400;
    font-size: 24px;
    color: #262728;
}

.mu_data{
    height:40px;
    width: 100%;
    font-family: "Proxima Nova";
    font-weight: 500px;
    font-size: 14px;
    color: 0F1350;
    border-radius: 2px;
}
.mu_data fieldset{
    border-color: #d9d9d9;
  }
.ql-container.ql-snow{ 
    border: none !important;
    @media(max-width:767px){
        border: none !important;
        background: #FFFFFF;
      }
      @media(min-width:768px) and (max-width:1023px){
        border: none !important;
        background: #FFFFFF;
      }
}

.quill_style{
    height: 350px;
    width: 100%;
    @media(max-width:767px){
      height: 350px;
        width: 100%; 
    }
    @media(min-width:768px) and (max-width:1023px){
        width: 350px;
        height: 100%
    }
}
.quill_style .ql-editor{
    background: #FFFFFF;
    height: 300px;
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
.grid_box{
    border: 1px solid #C4D2DF;
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
  .btn_submit:hover{
    font-family: "Arial";
    font-weight: 400;
    font-size: 15px;
    color: #0F1350;
    text-transform: capitalize;
    background-color: #fff;
    border: 1px solid #C4D2DF;
    border-radius: 5px;
  }
  .btn_cancel:hover{
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
    margin-top: 30px;
    display: flex;
    column-gap: 10px;
  }
  .text-style input{
    font-family: "Proxima Nova";
    font-size: 14px;
    font-weight: 400;
    height: 1.6375em;
  }
`
export default MyDiv
