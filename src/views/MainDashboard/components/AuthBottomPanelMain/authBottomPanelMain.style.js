import styled from 'styled-components'

const MyDiv = styled.div`
.flex_boxes{
    display: flex;
    justify-content: space-around;
    background-color: #F1F3F8;
    padding: 50px;
    @media(max-width:767px){
        display: grid;
        background-color: #fff;
        padding: 0px;
        margin: 24px;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: grid;
        background-color: #fff;
        padding: 0px;
        margin: 24px;
    }
}
.main_headings{
    font-family: "Arial";
    font-size: 18px;
    font-weight: 600px;
    color: #1D3160;
    @media(max-width:767px){
        color: #000000;
        font-weight: 600;
        line-height: 56px;
    }
    @media(min-width:768px) and (max-width:1023px){
        color: #000000;
        font-weight: 600;
        line-height: 56px;
    }
}
.grid_boxes{
    display: grid;
}
.link_text{
    font-family: "Arial";
    font-size: 14px;
    font-weight: 400;
    color: #9998A7;
    text-decoration: none; 
    padding-top: 5px;
    @media(max-width:767px){
        color: #000000;
        line-height: 36px;
    }
    @media(min-width:768px) and (max-width:1023px){
        color: #000000;
        line-height: 36px;
    }
}
.link_text2{
    font-family: "Arial";
    font-size: 14px;
    font-weight: 400;
    color: #9998A7;
    text-decoration: none; 
    padding-top: 5px;
    width: 70%;
    margin-bottom: 8px;
    @media(max-width:767px){
        color: #000000;
    }
    @media(min-width:768px) and (max-width:1023px){
        color: #000000;
    }
}
.btn_style{
    margin-top: 10px;
    font-family: "Proxima Nova";
    font-size: 14px;
    font-weight: 300px;
    background-color: #f0cb47;
    color: #FFFFFF;
    text-transform: capitalize;
    width: 100%;
}
.btn_style:hover{
    background-color: #f0cb47;
    color: #FFFFFF;
}
.box_style{
    width: 70%;
    @media(max-width:767px){
        width: 100%;
    }
    @media(min-width:768px) and (max-width:1023px){
        width: 100%;
    }
}
`
export default MyDiv
