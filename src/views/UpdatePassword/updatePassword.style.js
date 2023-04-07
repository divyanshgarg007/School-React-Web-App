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
            padding: 100px 18px;
        }
        @media(min-width:768px) and (max-width:1023px){
            padding: 0px 30px 200px 30px;
        }
    }
    .welcome_text{
        font-family: "Arial";
        font-weight: 400;
        font-size: 30px;
        margin-bottom: 10px;
        @media(max-width:767px){
            display: flex;
            text-align : center;
        }
        @media(min-width:768px) and (max-width:1023px){
            display: flex;
            text-align: center;
        }
    }
    .custom_button{
        margin-top: 16px;
        border-radius: 5px;
        font-family: "Arial";
        font-weight: 400;
        font-size: 18px;
        width: 100%;
        background-color: #f0cb47;
        color: #fff;
        text-transform: capitalize;
        margin-bottom: 16pxpx; 
    }
    .custom_button:hover{
        background-color: #f0cb47;
        color: #fff;
    }
    .link_text{
        color: #f0cb47;
        font-weight: 600;
    }
    .heading_text{
        margin-top: 16px;
        font-family: "Arial";
        font-weight: 400;
        font-size: 14px;
    }
`
export default MyDiv
