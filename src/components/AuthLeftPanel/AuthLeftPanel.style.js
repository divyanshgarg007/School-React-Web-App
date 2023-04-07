import styled from 'styled-components'

const MyDiv = styled.div`
.authleft_panel{
    background-color: #5a72a2;
    height: 100vh;
    @media(max-width:767px){
        display:none;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: none;
    }
}
`
export default MyDiv
