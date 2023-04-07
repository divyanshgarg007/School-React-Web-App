import styled from 'styled-components'

const MyDiv = styled.div`
.sidebar_wrapper{
    background-color: #262728;
    height: 100vh;
    padding-top: 25px;
    display: none;
    @media(max-width:767px){
        display: block;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: block;
    }
}
.menuitem{
    margin-left:0px;
    border-radius: 4px 0 0 4px;
    
}
.menuitem a{
    color: #fff;   
    padding-left:15px; 
}
.active_menu{
    margin-left: 25px;
    border-radius: 4px 0 0 4px;
}
.active_menu a{
    padding-left: 15px;
} 
.menuitem:hover{
    background-color: #EDF2F7;
    border-radius: 4px 0 0 4px;
}
.menuitem:hover a{
    color: #1D3160;    
}
.active_menu a {
    color: #1D3160;
}
.active_menu{
    background-color: #EDF2F7;
}
.menu_divider2{
    background-color: #EDF2F7;
    margin-top: 20px;
    margin-bottom: 20px;
}
.menu_divider1{
    background-color: #EDF2F7;
    margin-top: 20px;
    margin-bottom: 20px;
}
.link_names{
    font-family: "Proxima Nova";
    font-weight: 400;
    font-size: 18px;
    color: #1D3160;
    character-spacing:0px;
    line-spacing:48px;
    width: 14%;
}
.link_names2{
    font-family: "Proxima Nova";
    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF;
    character-spacing:0px;
    line-spacing:48px;
    width: 14%;
}
`
export default MyDiv
