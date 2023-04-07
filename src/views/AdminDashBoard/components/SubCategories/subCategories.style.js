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
.header_top{
    display:flex;
    padding:30px 0px;
    align-items: center;
    justify-content:space-between;
}

.add_btn{
    color: #f0cb47;
    background-color: #FFFFFF;
    font-weight: 600px;
    font-family: "Proxima Nova";
    text-transform: capitalize;
    font-size: 15px;
}
.add_btn: hover{
    color: #f0cb47;
    background-color: #FFFFFF;
}
`
export default MyDiv
