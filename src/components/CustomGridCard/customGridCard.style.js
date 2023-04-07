import styled from 'styled-components'

const MyDiv = styled.div`
margin-bottom: 40px;
@media(max-width:767px){
    margin-bottom: 20px;
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
        position: relative;
    }
    @media(min-width:768px) and (max-width:1023px){
        position: relative;
    }
}
.text_box input{
    border-radius: 0px;
    font-family: "Arial";
    font-size: 14px;
    font-weight: 400;
    @media(max-width:767px){
        border-radius: 0px;
    }
    @media(min-width:768px) and (max-width:1023px){
        border-radius: 0px;
    }
}


.title_txt{
    font-family: "Arial"; 
    font-weight: 400;
    font-size: 15px;
}
.icon_text1{
    display: flex;
    column-gap:5px;
    align-items: center;
    border: none;
    border-right: 1px solid #C4D2DF;
    padding: 15px;
    @media(max-width:767px){
        border-right: none;
        padding: 0px;
    }
    @media(min-width:768px) and (max-width:1023px){
        border-right: none;
    }
}
.icon_text2{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    @media(max-width:767px){
        margin-top: 10px;
        padding: 0;
    }
}
.flex_icns{
    display: flex;
    @media(max-width:767px){
        position: absolute;
        right: 5px;
        top: 32px;
    }
    @media(min-width:768px) and (max-width:1023px){
        position: absolute;
        right: 5px;
        top: 32px;
    }

}
.icon_text2 .MuiTextField-root fieldset{
    border: none;
}

.drag_icon{
    color: #000000;
}
.drag_grid{
    display: flex;
    align-items: center;
}
.edit_icon{
    color: #000000;
}
.delete_icon{
    color:#F50057;
}
.card_grid{
    @media(max-width:767px){
        flex-direction: column;
        padding: 20px 25px;
    }
    @media(min-width:768px) and (max-width:1023px){
        flex-direction: column;
    }
}
`
export default MyDiv
