import styled from 'styled-components'

const MyDiv = styled.div`
.demo_box{
    margin-top: 80px;
}
.text_box{
    margin-top: 24px;
}
.feed_box{
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
.flex_box{
    @media(max-width:767px){
        display: grid;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: grid;
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
.title2_text{
    font-family: "Proxima Nova";
    font-size: 24px;
    font-weight: 500;
    color: #000;
}
.title3_text{
    font-family: "Arial";
    font-size: 14px;
    font-weight: 400;
    color: #000000;
}
.title3_text span{
    color: #FF0000;
}
.text_area1{
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    width: 100%;
    height: 40px!important;
    resize: none;
    font-family: "Arial";
    font-size: 14px;
    font-weight: 400;
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
.text_area1: hover{
    border: 1px solid blue;
}
.text_area2: hover{
    border: 1px solid blue;
}
.text_area1: focus-visible{
    border: 1px solid blue;
    outline: 0!important;
}
.text_area2: focus-visible{
    border: 1px solid blue;
    outline: 0!important;
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
  .btn_submit:hover{
    color: #0F1350;
    background-color: #fff;
    border: 1px solid #C4D2DF;
  }
`
export default MyDiv
