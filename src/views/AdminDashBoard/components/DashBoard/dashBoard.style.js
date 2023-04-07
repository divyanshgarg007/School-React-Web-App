import styled from 'styled-components'

const MyDiv = styled.div`
.main_box{
    padding: 0px 50px;
}
.page_title{
    font-family: "Arial";
    font-size: 18px;
    font-weight: 400;
    color: #1D3160;
    padding:30px 0px;
    @media(max-width:767px){
        text-align: center;
        color: #000000;
    }
    @media(min-width:768px) and (max-width:1023px){
        text-align: center;
        color: #000000;
    }
}
.text_typo2{
    font-family: "Arial";
    font-size: 24px;
    font-weight: 400;
    color: #000000;
    margin-bottom:22px
}

`
export default MyDiv
