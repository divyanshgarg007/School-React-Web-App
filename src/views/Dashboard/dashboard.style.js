import styled from 'styled-components'

const MyDiv = styled.div`
.close_icn{
    position: absolute;
    top: -6px;
    right: -10px;
}
.close_icn svg{
    height: 16px;
    color: #ffffff;
}

.publish_msg{
    position: relative;
    color: #FFFFFF;
    background-color: #F50057;
    padding: 5px;
    width: 100%;
    border-radius: 8px;
    font-family: "Proxima Nova";
    font-weight: 300;
    font-size: 18px;
    text-align: left;
}
.box_items{
    display: flex;
    column-gap:50px;
    flex-direction: row;
    padding:20px 0px;
    @media(max-width:767px){
        flex-direction: column;
        padding: 0;
        row-gap: 20px;
    }
    @media(min-width:768px) and (max-width:1023px){
        flex-direction: row;
        padding: 0px;
        row-gap: 20px;
    }
        
    
}
.card_icons{
    color: #f0cb47;
    font-size: 70px;
    margin: 15px; 
}
.dashboard_box{
    // margin-top:20px;
    padding:30px 50px;
    // border-left: 5px solid #262728;
    @media(max-width:767px){
        border-left: 0px;
        background-color:#EDF2F7;
        padding: 0;
        margin-top:0px;
        height: 100%;
    }
    @media(min-width:768px) and (max-width:1023px){
        border-left: 0px;
        background-color:#EDF2F7;
        padding: 40px;
        margin-top:0px;
        height: 100;
    }
}
.flex_icn{
    display: flex;
    justify-content: start;
    @media(max-width:767px){
        display: flex;
    justify-content: center;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: flex;
    justify-content: center;
    }
}


.text-font-arial {
    font-family: "Arial";
    font-weight: 300;
    font-size: 18px;
    color: #1D3160;
    character-spacing:0px;
    line-spacing:37px;
    margin-bottom: 24px;
    @media(max-width:767px){
        display:none;
    }
    @media(min-width:768px) and (max-width:1023px){
        display:none;
    }
   }

.dash_texts{
    font-family: "Proxima Nova";
    font-weight: 500;
    font-size: 24px;
    color: #262728;
    character-spacing:0px;
    line-spacing:21px;
}
.dash_texts2{
    font-family: "Arial";
    font-weight: 300;
    font-size: 18px;
    color: #262728;
    character-spacing:0px;
    line-spacing:21px;
}
.card_box{
    margin-top: 24px;
}
`
export default MyDiv
