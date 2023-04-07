import styled from 'styled-components'

const MyDiv = styled.div`
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
.check_box{
    margin: 24px;
    display: flex;
}
.table_box{
    background-color: #FFFFFF;
    margin-bottom: 15px;
    margin-top:15px;
}
.title1_text{
    font-family: "Arial";
    font-weight: 400;
    font-size: 24px;
    color: #262728;
    text-align:center;
}
.menu_items{
    height:40px;
    width: 100%;
    font-family: "Proxima Nova";
    font-weight: 500;
    font-size: 14px;
    color: #0F1350;
    border-radius: 2px;
    background-color: #fff;
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
}
.text_area3{
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    width: 100%;
    height: 344px!important;
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
.mb-10{
    margin-bottom: 16px;
}
#language_list{
    font-size: 15px;
    color: #000;
    padding: 9px 14px !important;
}
`
export default MyDiv
