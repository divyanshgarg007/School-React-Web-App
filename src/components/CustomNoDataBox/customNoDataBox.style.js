import styled from 'styled-components'

const MyDiv = styled.div`
.main_box{
    margin: 15px;
    height: 100vh;
}
.title2_text{
    font-family: "Arial";
    font-size: 24px;
    font-weight: 400;
    color: #262728;
}
.title3_text{
    margin-top: 50px;
    font-family: "Proxima Nova";
    font-size: 24px;
    font-weight: 600px;
    color: #f0cb47;
}
.alert_box{
    display: grid;
    justify-content: center;
    text-align: center;
}
.icn_btn svg{
    width: 200px;
    height: 200px;
    padding: 50px;
    color: #D4D9DD;
    background-color: #EFF0F5;
    border-radius: 170px;
}

.btn_box{
    display: grid;
    row-gap: 25px;
}
.btn_text{
    font-family: "Arial";
    font-size: 15px;
    font-weight: 400;
    color: #FFFFFF;
    background-color: #f0cb47; 
    text-transform: capitalize;  
    width: 100%;
}
.btn_info{
    font-family: "Arial";
    font-size: 18px;
    font-weight: 400;
    color: #000000;   
}
.btn_text:hover{
    font-family: "Arial";
    font-size: 15px;
    font-weight: 400;
    color: #FFFFFF;
    background-color: #f0cb47;  
    text-transform: capitalize;  
}
.btn_info:hover{
    font-family: "Arial";
    font-size: 18px;
    font-weight: 400;
    color: #000000;   
}
`
export default MyDiv
