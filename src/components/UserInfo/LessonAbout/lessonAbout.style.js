import styled from 'styled-components'

const MyDiv = styled.div`
.css-1ex1afd-MuiTableCell-root {
    padding: 5px;
}
.card_data{
    padding:30px;
    @media(max-width:767px){
        padding:0px;
    }
}
.category_name{
    font-family: "Arial";
    font-size: 20px;
    font-weight: 400;
    color: #f0cb47;
    @media(max-width:767px){
    font-size: 20px;
    }
}
.category_data{
    font-family: "Arial";
    font-size: 20px;
    font-weight: 600;
    color: #f0cb47;
    @media(max-width:767px){
        font-size: 20px;
        }
}
.flex_wrapper{
    display: flex;
    column-gap: 20px;
    margin-top: 16px;
}
.list_icons svg {
    width: 0.8em;
    height: 0.8em;
    @media(max-width:767px){
        width: 1em;
        height: 1em;
        }
}
.list_icons{
    width: 35px;
    height: 35px;
    background-color: #fff;
    border: 1px solid #f0cb47;
    color: #f0cb47;
    @media(max-width:767px){
    width: 40px;
    height: 40px;
    }
}
.data_label{
    font-family: "Arial";
    font-size: 16px;
    font-weight: 600;
    color: #9998A7;
    @media(max-width:767px){
        color: #f0cb47;
        font-size: 15px;
    }
}
.data_name{
    font-family: "Arial";
    font-size: 16px;
    font-weight: 400;
    color: #9998A7;
    @media(max-width:767px){
        color: #000000;
        font-size: 15px;
    }
}
`
export default MyDiv
