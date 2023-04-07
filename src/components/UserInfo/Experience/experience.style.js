import styled from 'styled-components'

const MyDiv = styled.div`
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
.card_data{
    padding:30px;
    @media(max-width:767px){
        padding: 0px 0px 20px 0px;
        margin-top: 20px;
        border-bottom: 1px solid #eee;
    }
}
.desc_box{
    padding: 20px 0px 0px 0px;
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
.title_dark{
    font-family: "Proxima Nova";
    font-size: 15px;
    font-weight: 600;
    color: #9998a7;
}
.title_light{
    font-family: "Arial";
    font-size: 15px;
    font-weight: 400;
    color: #9998a7;
    padding-left: 30px;
    @media(max-width:767px){
        padding-left: 0px;
    }
}
.desc_name{
    font-family: "Arial";
    font-size: 15px;
    font-weight: 600;
    color: #9998a7;
    text-decoration: underline;
    @media(max-width:767px){
        color: #f0cb47;
        text-decoration: none;
    }
    @media(min-width:768px) and (max-width:1023px){
        color: #f0cb47;
        text-decoration: none;
    }
}
`
export default MyDiv
