import styled from 'styled-components'

const MyDiv = styled.div`
.top_panel{
position:absolute;
width: 100%;
z-index: 1;
// top:20px;
@media(max-width:767px){
    top:0px; 
}
@media(min-width:768px) and (max-width:1023px){
    top:0px;
}

}
.auth-container{
    height:100vh;
    align-items:center;
    justify-content:center;
    background-color: #ffffff;
    @media(max-width:767px){
        background-color: #ffffff;
    }
    @media(min-width:768px) and (max-width:1023px){
        background-color: #ffffff;
    }
  }
.login_box{
    padding: 0px 70px 0px 70px;
    @media(max-width:767px){
        padding: 0px 20px 0px 20px; 
    }
    @media(min-width:768px) and (max-width:1023px){
        padding: 0px 20px 0px 20px
    }
     
}
.welcome_text{
    font-family: "Arial";
    font-weight: 400;
    font-size: 50px;
    margin-bottom: 10px;
        @media(max-width:767px){
            display: flex;
            justify-content: center;
        }
        @media(min-width:768px) and (max-width:1023px){
            display: flex;
            justify-content: center;
        }
    }
}
.common_text{
    font-family: "Arial";
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 10px;
    @media(max-width:767px){
        display: flex;
        justify-content: center;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: flex;
        justify-content: center;
    }
}
}
.icn_btn{
    display: flex;
    justify-content:space-between;
}
.icn_btns{
    margin-bottom: 10px;
    text-align: center;
}
.break_text{
    max-width:220px;
    @media(max-width:767px){
        max-width:100px;
    }
    @media(min-width:768px) and (max-width:1023px){
        max-width:100px;
    }
    
}
.thankyou_icons{
    width: 120px;
    height: 120px;
    background-color: #fff;
    border: 1px solid #C4D2DF;
}
.thankyou_icons:hover{
    background-color: #fff;
    border: 1px solid #f0cb47;
}

.thankyou_icons svg{
    width: 80px;
    height: 80px;
    color: #C4D2DF;
}
.thankyou_icons:hover svg{

    color: #f0cb47;
}
}
.custom_btn{
    border-radius: 5px;
    font-family: "Arial";
    font-weight: 400;
    font-size: 18px;
    width: 100%;
    background-color: #f0cb47;
    color: #fff;
    text-transform: capitalize;
}
.custom_btn:hover{
    border-radius: 5px;
    font-family: "Arial";
    font-weight: 400;
    font-size: 18px;
    width: 100%;
    background-color: #f0cb47;
    color: #fff;
    text-transform: capitalize;
}
`
export default MyDiv
