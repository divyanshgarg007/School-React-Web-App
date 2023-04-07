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
    @media(max-width:767px){
        text-align: center;
        color: #000000;
    }
    @media(min-width:768px) and (max-width:1023px){
        text-align: center;
        color: #000000;
    }
}

.icn_size{
    width: 0.6em;
    height: 0.6em;
}
.back_btn{
    background: #fff;
    color: #f0cb47;
}
.header_top{
    display:flex;
    padding:30px 0px;
    align-items: center;
    column-gap: 10px;
}
`
export default MyDiv
