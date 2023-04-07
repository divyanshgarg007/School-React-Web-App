import styled from 'styled-components'

const MyDiv = styled.div`
.main_box{
    padding: 0px;
    @media(max-width:767px){
        padding: 24px;
    }
    @media(min-width:768px) and (max-width:1023px){
        padding: 24px;
    }
}
.card_box{
    border-radius: 5px 5px 0px 0px;
    box-shadow: 0px 3px 6px #00000029;
    background-color: #FFFFFF;
    margin-top: 70px;
    @media(max-width:767px){
        margin-top: 30px;
        box-shadow: none;
        background-color: transparent;
    }
}
.cont_box{
    padding: 40px 100px;
    width: 40%;
    @media(max-width:767px){
        width: 100%;
        padding: 0;
    }
}
.heading_name{
    font-family: "Arial";
    font-size: 18px;
    font-weight: 400;
    padding: 15px 30px;
    border-radius: 5px 5px 0px 0px; 
    border-bottom: 1px solid rgb(224, 224, 224);
    background-color: white;
    color: #5a72a2;
    @media(max-width:767px){
        font-size: 15px;
        color: #f0cb47;
        padding: 0px;
        background-color: transparent; 
        border-bottom: none;
    }
    @media(min-width:768px) and (max-width:1023px){
        font-size: 15px;
        color: #f0cb47;
        padding: 0px;
        background-color: transparent; 
    }
}
.text_label{
    font-family: "Arial";
    font-size: 12px;
    font-weight: 400;
    color: #000000;
}
.text_label span{
    font-family: "Proxima Nova";
    font-size: 12px;
    font-weight: 500px;
    color: #FF0000;
}
.text_area{
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    width: 99%;
    height: 100px!important;
    resize: none;
    margin-bottom: 24px;
}
.text_area: hover{
    border: 1px solid blue;
}

.text_area: focus-visible{
    border: 1px solid blue;
    outline: 0!important;
}
.btn-green{
    margin-top:20px;
    font-family: Arial;
    font-size: 14px;
    font-weight: 400;
    color: #FFFFFF;
    background-color: #f0cb47;
    border-radius: 5px;
    text-transform: capitalize;
}
.btn-green:hover{
color: #FFFFFF;
background-color: #f0cb47;
}
.bottom_actions{
    margin-left: 20px;
}
.phone_box{
    width: 100%;
    height: 42px;
}
.react-tel-input{
    border-radius: 0!important;
}
.react-tel-input .phone_box{
    border-color: #d9d9d9;
    border-radius: 2px;
    border-width: 1px;
}
.react-tel-input .flag-dropdown {
    border-color: #d9d9d9;;
    border-radius: 2px;
    border-width: 1px;
}
.react-tel-input:hover .phone_box{
    border-color: blue;
    border-radius: 2px;
    border-width: 1px;
}
.react-tel-input:hover .flag-dropdown {
    border-color: blue;
    border-radius: 2px;
    border-width: 1px;
}
`
export default MyDiv
