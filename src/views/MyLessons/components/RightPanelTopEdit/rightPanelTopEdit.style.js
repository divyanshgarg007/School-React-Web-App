import styled from 'styled-components'

const MyDiv = styled.div`
.div_grid{
    margin-bottom: 24px;
}
.edit_lesson{
    positon: relative;
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
.title_text{
    font-family: "Arial";
    font-weight: 400;
    font-size: 24px;
    color: #262728;
}
.menu_items{
    height:40px;
    width: 100%;
    margin-bottom: 10px;
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
}
.text-style input{
    font-family: "Proxima Nova";
    font-size: 14px;
    font-weight: 400;
    height: 1.6375em;
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
`
export default MyDiv
