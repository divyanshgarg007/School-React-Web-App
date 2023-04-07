import styled from 'styled-components'

const MyDiv = styled.div`
.text_box{
    margin-bottom: 15px;
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
    padding: 0px 100px;  
    @media(max-width:767px){
        padding: 100px 18px; 
        text-align: center;
    }
    @media(min-width:768px) and (max-width:1023px){
        padding: 100px 50px 200px 50px; 
        text-align: center;
    }
}
.welcome_text{
    font-family: "Arial";
    font-weight: 400;
    font-size: 32px;
    margin-bottom: 25px;
    color: #1D3160;
    @media(max-width:767px){
        display:none;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: none;
    }
}
.signup_text{
    display: none;
    @media(max-width:767px){
        font-weight: 500;
        font-size: 30px;
        margin-bottom: 10px;
        display: block;
        text-align: center;
        color: #122348;
    }
    @media(min-width:768px) and (max-width:1023px){
        font-weight: 500;
        font-size: 30px;
        margin-bottom: 10px;
        display: block;
        text-align: center;
        color: #122348;
    }
}
.btn-continue{
    border-radius: 5px;
    font-family: "Arial";
    font-weight: 400;
    font-size: 18px;
    width: 100%;
    background-color: #f0cb47;
    color: #fff;
    text-transform: capitalize;
    margin-bottom: 20px; 
    margin-top: 20px;
}
.btn-continue:hover{
    background-color: #f0cb47;
    color: #fff;
}
.custom_button2{
    // font-family: "Arial";
    font-weight: 600;
    font-size: 15px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid #6A94F4;
    border-radius: 5px;
    width: 100%;
    background-color: transparent;
    color: #2067FF;
    text-transform: capitalize;
}
.custom_button2:hover{
    background-color: transparent;
    color: #2067FF;
}
.register_text{
    font-family: "Arial";
    font-weight: 400;
    font-size: 15px;
}
.divider_prop{
    color: #1D3160;
    font-family: "Arial";
    font-weight: 700px;
    font-size: 14px;
}
.check_field{
    font-family: "Arial";
    font-weight: 400;
    font-size: 15px;
}
.link_text{
    color: #f0cb47;
    font-weight: 600;
}
.google_icon{
    width: 24px;
    height: 24px;
}
`
export default MyDiv
