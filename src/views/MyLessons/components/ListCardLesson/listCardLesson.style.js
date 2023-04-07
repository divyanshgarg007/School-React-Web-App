import styled from 'styled-components'

const MyDiv = styled.div`
.icn_prop{
    color: #000000;
}
margin-bottom: 40px;
@media(max-width:767px){
    margin-bottom: 20px;      
}
.flex_box{
    display: flex;
}
.card_grid{
    padding: 20px 25px;
}

.icn_size{
    width: 0.6em;
    height: 0.6em;  
}
.main_card{
    box-shadow: none;
    border-radius: 0px;
    border: 1px solid #C4D2DF;
    @media(max-width:767px){
        width: 100%;
    }
    @media(min-width:768px) and (max-width:1023px){
        width: 100%; 
    }
} 
.icon_text2{
    display: flex;
    align-items: center;
    justify-content: end;
}
.edit_icon{
    color: #000000;
}
.delete_icon{
    color:#F50057;
}
.title_text{
    font-family: "Proxima Nova";
    font-weight: 600;
    font-size: 15px;
    color: #000000;
}
.title_text1{
    font-family: "Proxima Nova";
    font-weight: 400;
    font-size: 15px;
    color: #000000;
}
.title_text2{
    font-family: "Arial";
    font-weight: 400;
    font-size: 15px;
    color: #000000;
}
.main_grid{
    align-items: center;
}
`
export default MyDiv
