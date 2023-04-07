import styled from 'styled-components'

const MyDiv = styled.div`
.text_boxes{
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
.title_text2{
  font-family: "Arial";
  font-weight: 400;
  font-size: 14px;
  color: #000000;
}
.title_text2 span{
  color: #FF0000;
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
.upload_box{
  display: flex;
  column-gap: 10px;
}
.img_style{
  width: 100px;
  height: 100px;
  object-fit:contain;
}

.upload_btn{
  padding: 10px 15px;
  width: 100%;
  background-color: #f0cb47;
  text-transform: capitalize;
  color: #000;
}
.upload_btn: hover {
  background-color: #f0cb47;
  color: #000;
}
`
export default MyDiv
