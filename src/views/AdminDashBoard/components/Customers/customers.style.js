import styled from 'styled-components'

const MyDiv = styled.div`
.link_style{
    text-decoration: none;
}
.main_box1{
    padding: 0px 50px;
}
.icn_fix{
    position: relative;
    left: 13px;
}

.header_top{
    display:flex;
    padding:30px 0px;
    align-items: center;
    column-gap: 50px;
}
.page_title{
    font-family: "Arial";
    font-size: 18px;
    font-weight: 400;
    color: #1D3160;
    @media(max-width:767px){
        text-align: center;
        color: #000000;
    }
    @media(min-width:768px) and (max-width:1023px){
        text-align: center;
        color: #000000;
    }
}
.flex_box{
    display: flex;
    column-gap: 10px;
}
.btn_style{
    width: 100%;
    height: 30px;
    font-family: "Arial";
    font-size: 11px;
    font-weight: 400;
    text-transform: capitalize;
    background-color: #f0cb47;
    color: #FFFFFF;
    border-radius: 2px;
}
.btn_style:hover{
    background-color: #f0cb47;
    color: #FFFFFF;
    border-radius: 2px;
}
.MuiOutlinedInput-root{
    width: 150px;
    height: 30px;
    padding-left: 0px;
    padding-right: 5px;
    font-size: 12px;
    border-radius: 0;
}
.btn_return{
    margin-bottom: 30px;
    color: #f0cb47;
}
.icn_size{
    width: 16px;
    height: 16px;
}

`
export default MyDiv
