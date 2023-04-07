import styled from 'styled-components'

const MyDiv = styled.div`
.table_heading{
    font-family: "Proxima Nova";
    font-size: 18px;
    font-weight: 500;
    color: #262728;
}
.table_data{
    font-family: "Arial";
    font-size: 15px;
    font-weight: 400;
    color: #000;
}
.table_box{
    width: 100%;
    height: 100%;
    @media(max-width:767px){
        width: 100%; 
    }
    @media(min-width:768px) and (max-width:1023px){
        width: 100%;
    }
}
`
export default MyDiv
