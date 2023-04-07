import styled from 'styled-components'

const MyDiv = styled.div`
.cell_table{
    padding: 14px;
}
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
.table_title2{
    font-family: "Proxima Nova";
    font-weight: 600;
    font-size: 16px;
    color: #000000;
}
.table_title{
    font-family: "Proxima Nova";
    font-weight: 500;
    font-size: 16px;
    color: #000000;
}
.check_select .Mui-checked{
    color: #f0cb47;
}
.w-100{
    width: 100%;
}
.parent_box{
   display: flex;
    @media(max-width: 767px){
        width: 100%;
        flex-direction: row;
        overflow-y: auto;
    }
}
`
export default MyDiv
