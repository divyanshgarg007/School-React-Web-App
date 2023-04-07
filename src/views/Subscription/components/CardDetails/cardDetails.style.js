import styled from 'styled-components'

const MyDiv = styled.div`
.label_name{
    font-family: "Arial";
    font-size: 15px;
    font-weight: 400;
    color: #000000;
    margin-bottom: 8px;
}
.btn_remove{
    font-family: "Arial";
    font-size: 12px;
    font-weight: 400;
    color: #F50057;
    background-color: #FFFFFF;
    text-transform: capitalize;
    padding: 0;
    margin-bottom:20px;
    @media(max-width:767px){
        background-color: #f1f5fc;
    }
    @media(min-width:768px) and (max-width:1023px){
        background-color: #f1f5fc;
    text-align: center;
    }
}
.btn_remove span{
    display:none;
}
.btn_remove: hover{
    color: #F50057;
    background-color: #FFFFFF;
}
.label_heading{
    font-family: "Proxima Nova";
    font-size: 24px;
    font-weight: 500px;
    color: #262728;
    margin-bottom: 15px;
}
.btn_cancel{
    margin-top: 40px;
}
.btn_cancel button{
    font-family: "Arial";
    font-size: 15px;
    font-weight: 400;
    color: #F50057;
    background-color: #FFFFFF;
    text-transform: capitalize;
    border: 1px solid #F50057;
}
.btn_cancel button:hover{
    color:#ffffff;
    background-color: #F50057;
    border: 1px solid #F50057;
}
.btn_upgrade{
    margin-top: 24px;
    display: none;
    @media(max-width:767px){
        display: block;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: block;
    }
}
.btn_upgrade button{
    font-family: "Arial";
    font-size: 14px;
    font-weight: 400;
    color: #FFFFFF;
    background-color: #f0cb47;
    text-transform: capitalize;
}
.btn_upgrade button:hover{
    color: #FFFFFF;
    background-color: #f0cb47;
}
`
export default MyDiv
