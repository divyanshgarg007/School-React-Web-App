import styled from 'styled-components'

const MyDiv = styled.div`
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
.sub_box{
    // border-left: 5px solid #262728;
    // margin-top: 20px;
    padding-left: 50px;
    padding-right: 50px;
    height: 100%;
    @media(max-width:767px){
        border-left: 0px;
    margin-top: 0px;
    background-color: #EDF2F7;
    height: 100%;
    padding-left: 0;
    padding-right: 0;
    }
    @media(min-width:768px) and (max-width:1023px){
        border-left: 0px;
    margin-top: 0px;
    background-color: #EDF2F7;
    height: 100%;
    padding-left: 0;
    padding-right: 0;
    }
}
.billing_details{
    display: flex;
    align-items:center;
    justify-content:space-between;
    @media(max-width:767px){
        flex-direction: column;
    }
}

.card_flex{
    width: 70%;
    display: flex;
    column-gap: 40px;
    margin-top: 45px;
  @media(max-width:767px){
    margin-top: 50px;
    display: block;
    width: 100%;
    }
    @media(min-width:768px) and (max-width:1023px){
        margin-top: 15px;
        display: block;
        width: 100%;
    }
}
.card_prop{
    width: 100%;
  text-align: center;
  box-shadow: 0px 3px 6px #00000029;
 @media(max-width:767px){
     width: 100%;
    height: 100%;
    margin-bottom:30px;
  }
  @media(min-width:768px) and (max-width:1023px){
      width: 100%;
    height: 100%;
  }
}
.subs_icons{
    width: 120px;
    height: 120px;
    background-color: #fff;
    border: 1px solid #C4D2DF;
}
.subs_icons:hover{
   background-color: #fff;
   border: 1px solid #f0cb47;
}

.subs_icons svg{
   width: 80px;
   height: 80px;
   color: #C4D2DF;
}
.subs_icons:hover svg{
  color: #f0cb47;
}
.card_heading{
    font-family: "Arial";
    font-size: 18px;
    font-weight: 400;
}
.card_heading4{
    font-family: "Arial";
    font-size: 15px;
    font-weight: 400;
    height: 45px;
}
.card_heading3{
    font-family: "Arial";
    font-size: 15px;
    font-weight: 400;
}
.card_heading2{
    font-family: "Arial";
    font-size: 40px;
    font-weight: 400;

}
.card_heading2 span{
   font-size: 18px;
   font-family: "Arial";
   font-weight: 400;
}
.action_btns{
    justify-content:center;
    padding-bottom:40px;
}
.btn_subs{
    width: 100%;
   color: #fff;
   background-color: #f0cb47;
   border-radius: 5px;
   border: 1px solid #f0cb47;
   font-family: "Arial";
   font-size: 18px;
   font-weight: 400;
   text-transform: capitalize;
}
.btn_subs: hover{
   color: #FFFFFF;
   background-color: #f0cb47;
}
`
export default MyDiv
