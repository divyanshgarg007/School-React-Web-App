import styled from 'styled-components'

const MyDiv = styled.div`
.text_box{
    margin-bottom: 8px;
}
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
    padding: 30px 140px 0px 140px;  
    @media(max-width:767px){
        padding: 0px 18px;   
    }
    @media(min-width:768px) and (max-width:1023px){
        padding: 0px 30px 60px 30px;
    }
}
.welcome_text{
    width: 100%;
    // font-family: "Arial";
    font-weight: 500;
    line-height: 40px;
    font-size: 32px;
    @media(max-width:767px){
        display: flex;
        justify-content: center;
        font-weight: 500;
        font-size: 30px;
        display: block;
        text-align: center;
        color: #122348;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: flex;
        justify-content: center;
        font-weight: 500;
        font-size: 30px;
        display: block;
        text-align: center;
        color: #122348;
    }
}
.common_text1{
    font-family: "Arial";
    font-weight: 400;
    font-size: 15px;
    color: #000;
    margin: 25px 0px;
    @media(max-width:767px){
        display: flex;
        text-align: center;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: flex;
        text-align: center;
    }
}
.common_text2{
    font-family: "Arial";
    font-weight: 400;
    font-size: 15px;
    margin-top: 25px;
}
.common_text3{
    font-family: "Arial";
    font-weight: 400;
    font-size: 15px;

}
.custom_button{
    border-radius: 5px;
    font-family: "Arial";
    font-weight: 400;
    font-size: 18px;
    width: 100%;
    background-color: #f0cb47;
    color: #fff;
    text-transform: capitalize;
}
.custom_button:hover{
    border-radius: 5px;
    font-family: "Arial";
    font-weight: 400;
    font-size: 18px;
    width: 100%;
    background-color: #f0cb47;
    color: #fff;
    text-transform: capitalize; 
}
.check_item{
    padding: 0;
    margin-right:10px;
}
`
export default MyDiv
