import styled from 'styled-components'

const MyDiv = styled.div`
.img_grid{
    display: block;
    @media(max-width:767px){
        display: none;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: none;
    }
}
.main_body{
    background-color: #F9FBFD;
    padding-bottom: 70px;
    @media(max-width:767px){
        background-color: #fff;
    }
}
.img_style{
    width: 100%;
    height: 500px;
    object-fit: cover;
}
.card_style{
    width: 80%;
    margin: 0 auto;
    margin-top: -70px;
    z-index: 111;
    position: relative;
    @media(max-width:767px){
        margin-top: 0px;
        width: 100%;
    }
    @media(min-width:768px) and (max-width:1023px){
        margin-top: 0px;
        width: 100%;
    }
}
.bg_white{
    border-radius: 5px 5px 0px 0px;
    box-shadow: 0px 3px 6px #00000029;
    background-color: #FFFFFF;
    padding: 40px 40px 40px 100px;
    display: block;
    margin-bottom: 0px;
    @media(max-width:767px){
        display: none;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: none;
    }
}
.bg_white1{
    border-radius: 5px 5px 0px 0px;
    box-shadow: 0px 3px 6px #00000029;
    background-color: #FFFFFF;
    padding-left: 44px;
    padding-right: 44px;
    @media(max-width:767px){
        padding-left: 0px;
        padding-right: 0px;
    }
    @media(min-width:768px) and (max-width:1023px){
        padding-left: 0px;
        padding-right: 0px;
    }
}
.bg_white2{
    // border-radius: 5px 5px 0px 0px;
    // box-shadow: 0px 3px 6px #00000029;
    // background-color: #FFFFFF;
    // margin-top: 70px;
    @media(max-width:767px){
        margin-top: 0px;
    }
    @media(min-width:768px) and (max-width:1023px){
        margin-top: 0px;
    }
}
.flex_box{
    display: flex;
    column-gap: 5px;
    align-items: center;
}
.flex_box2{
    display: flex;
    column-gap: 15px;
    align-items: center;
}
.text1_label{
    font-family: "Arial";
    font-size: 32px;
    font-weight: 400;
    color: #1D3160;
}
.btn1_text{
    font-family: "Arial";
    font-size: 10px;
    font-weight: 400;
    color: #FFFFFF;
    background-color: #f0cb47;
    text-transform: capitalize;
    width: 55px; 
    height: 20px;
}
.btn1_text:hover{
    font-family: "Arial";
    font-size: 10px;
    font-weight: 400;
    color: #FFFFFF;
    background-color: #f0cb47;
    text-transform: capitalize;
    width: 55px; 
    height: 20px;
}
.text2_label{
    font-family: "Arial";
    font-size: 14px;
    font-weight: 400;
    color: #000000;
}
.icn_btn svg{
    color: #f0cb47;
    width: 15px;
    height: 15px;
}
.text3_label{
    font-family: "Arial";
    font-size: 14px;
    font-weight: 400;
    color: #f0cb47;
}
.text4_label{
    font-family: "Arial";
    font-size: 14px;
    font-weight: 400;
    color: #9998A7;
}
.grid_box{
    display: grid;
    row-gap: 10px;
    justify-content: end;
}

.btn3_text{
    font-family: "Arial";
    font-size: 14px;
    font-weight: 400;
    color: #FFFFFF;
    background-color: #f0cb47;
    text-transform: capitalize;
    border: 1px solid #f0cb47;
    width: 100%;
    border-radius: 5px;
}
.reply_icn{
    transform: rotateY(180deg);
}
.btn3_text:hover{
    color: #FFFFFF;
    background-color: #f0cb47;
}
.btn4_text{
    font-family: "Arial";
    font-size: 14px;
    font-weight: 400;
    color: #F50057;
    background-color: #FFFFFF;
    text-transform: capitalize;
    width: 100%;
    border: 1px solid #F50057;
    border-radius: 5px;
}
.btn4_text: hover{
    color: #F50057;
    background-color: #FFFFFF;
}
.tab_container{
    min-height: auto;
}
.tab_names{
    font-family: "Arial";
    font-size: 15px;
    font-weight: 400;
    color: #9998A7;
    text-transform: capitalize;
    text-align: center;
    border-radius: 3px;
    min-height: auto;
    margin: 0px 1px;
    @media(max-width:767px){
        color: #000000;
    }
    @media(min-width:768px) and (max-width:1023px){
        color: #000000;
    }
}
.tab_names: hover{
    color: #FFFFFF;
    background-color: #f0cb47;
}
.tab_names svg{
    color: #f0cb47;
}
.tab_names:hover svg{
    color: #FFFFFF;
}
.tab_container .Mui-selected{ 
    font-size: 15px;
    background-color: #f0cb47;
    color: #FFFFFF;
    @media(max-width:767px){
        color: #f0cb47;
        background-color: #FFFFFF;
    }
    @media(min-width:768px) and (max-width:1023px){
        color: #f0cb47;
        background-color: #FFFFFF;
    }
}
.tab_container .Mui-selected svg{ 
    background-color: #f0cb47;
    color: #FFFFFF;
}

.tab_box{
    margin-top: 24px;
    @media(max-width:767px){
        margin-top: 0px;
    }
    @media(min-width:768px) and (max-width:1023px){
        margin-top: 0px;
    }
}
.icn_style{
    display: block;
    @media(max-width:767px){
        display: none;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: none;
    }
}
.NoBackground{
    width: 100%;
    height: 300px;
    background-color: #0F1350;
}
.tab_panel{
    padding:0;
}
`
export default MyDiv
