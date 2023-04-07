import styled from 'styled-components'

const MyDiv = styled.div`
margin-bottom: 40px;
@media(max-width:767px){
    margin-bottom: 20px;      
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
    width: 100%;
}
 
.icon_text2{
        display: flex;
        justify-content: end;
        align-items: center;
        padding: 5px;
    }
    
.edit_icon{
    color: #000000;
}
.delete_icon{
    color:#F50057;
}

.icn_prop{
    color: #000000;
}
.main_grid{
    align-items: center;
}
`
export default MyDiv
