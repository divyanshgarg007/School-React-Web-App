import styled from 'styled-components'

const MyDiv = styled.div`
.quill_style{
    height: 350px;
    width: 100%;
    @media(max-width:767px){
      height: 350px;
        width: 100%; 
    }
    @media(min-width:768px) and (max-width:1023px){
        width: 100%;
        height: 350px;
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
.euro_icn{
    width: 0.6em;
    height: 0.6em;
    color: #000000;
}
.div_grid{
    margin-bottom: 24px;
}
.edit_lesson{
    positon: relative;
    margin-top: 24px;
}
.icn_fix{
    position: absolute;
    right: 3px;
}
.icn_fix2{
    position: absolute;
    left: -5px;
}
.icn_size{
    width: 0.6em;
    height: 0.6em;
    color: #C4D2DF;
}
.title_text{
    font-family: "Arial";
    font-weight: 400;
    font-size: 24px;
    color: #262728;
}
.menu_items{
    height:40px;
    width: 100%;
    // margin-bottom: 10px;
    font-family: "Proxima Nova";
    font-weight: 500px;
    font-size: 14px;
    color: #0F1350;
    border-radius: 2px;
}
.menu_items fieldset{
    border-color: #d9d9d9;
  }
.select_title span{
    font-family: "Proxima Nova";
    font-weight: 500px;
    font-size: 14px;
    color: #FF0000;

}
.select_title{
    font-family: "Arial";
    font-weight: 500px;
    font-size: 14px;
    color: #000000;
    margin-top:10px;
}
.text-style input{
    font-family: "Proxima Nova";
    font-size: 14px;
    font-weight: 400;
    height: 1.6375em;
  }
.text_area3{
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    width: 100%;
    height: 395px!important;
    resize: none;
    font-family: "Arial";
    font-size: 14px;
    font-weight: 400;
}
.text_area3: hover{
    border: 1px solid blue;
}
.text_area3: focus-visible{
    border: 1px solid blue;
    outline: 0!important;
}




.divider_grid{
    margin-bottom: 10px;
}
.check_box{
    display: flex;
    align-items: center;
}
.title_text{
    font-family: "Arial";
    font-weight: 400;
    font-size: 24px;
    color: #262728;
}
.avail_text{
    font-family: "Proxima Nova";
    font-weight:400;
    font-size: 15px;
    color: #F50057;
    padding-top:10px;
}
.tbl_txt{
    font-family: "Proxima Nova";
    font-weight: 600;
    font-size: 15px;
    color: #000000;
}
.tbl_txt2{
    font-family: "Proxima Nova";
    font-weight: 400;
    font-size: 15px;
    color: #000000;
}
.MuiTableCell-root{border-bottom: none}

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
  .no-space{
    padding: 0;
  }
.empty_cell{
    width:40%;
}
.right_card{
    padding: 0px 0px 0px 30px
}
.left_card{
    padding: 0px 30px 0px 0px
}
#language_list{
    font-size: 15px;
    color: #000;
    padding: 9px 14px !important;
}
`
export default MyDiv
