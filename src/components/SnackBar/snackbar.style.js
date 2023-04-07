import styled from 'styled-components'

const MyDiv = styled.div `
.custom_snack{
    width: 96%!important;
    text-align: left;
    @media(max-width:767px){
        width: 100%;
    }
}
.custom_snack_alert{
    justify-content:center;
    color:#000;
    font-weight:500;
    font-size:1rem;
    background-color: '#fff!important';
    box-shadow: 0px 10px 30px #64646426;
    border: 1px solid #eeeeee;
    background-color: #fff;
    text-transform: none;
    padding: 20px 20px;
    border-radius: 8px;
}
.custom_snack_alert .MuiAlert-message{
    position: relative;
}
.close_icon{
    position: absolute;
    right: 0;
    top: 0;
}
.notification{
    font-size:1rem;
    text-transform: none;
    color:#000;
    font-weight:500;
}
`

export default MyDiv
