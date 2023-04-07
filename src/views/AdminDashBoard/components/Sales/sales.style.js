import styled from 'styled-components'

const MyDiv = styled.div`
.main_box{
    padding: 0px 50px;
    margin-bottom:100px;
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

.grid_cards{
    background-color: #F1F5FC;
    text-align: center;
}

.card_title{
    font-family: "Arial";
    font-size: 24px;
    font-weight: 400;
    color: #000000;
    padding: 20px 5px;
}
.chart_box{
    background-color: #F1F5FC;
    margin-bottom: 50px;
    margin-top: 30px;
    align-items: center;
}
`
export default MyDiv
