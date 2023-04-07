import styled from 'styled-components'

const MyDiv = styled.div`

.text_logo{
    margin-left: 40px;
    padding: 15px;
    font-family: "Proxima Nova";
    font-weight: 400;
    font-size: 22px;
    color: #FFFFFF;
}
.sidebar_wrapper{
    background-color: #262728;
    height: 100%;
    position: fixed;
    width: 16.666667%;
    overflow: hidden;
    display: block;
    @media(max-width:767px){
        display: none;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: none;
    }
}
.sidebar_wrapper img{
    width: 100%;
    padding: 23px;
    height: 77px;

}
.menuitem{
    margin-left:25px;
    border-radius: 4px 0 0 4px;
    margin-bottom: 5px;
}
.menuitem a{
    color: #fff;   
    padding-left:40px;
    width:100%;
}
.menuitem svg{
    position: absolute;
    color: #fff;
}
// .menuitem:hover{
//     background-color: #EDF2F7;
// }
// .menuitem:hover a{
//     color: #1D3160; 
//     background-color: #EDF2F7; 
// }
// .menuitem:hover svg{
//     color: #f0cb47;
// }
.active_menu{
    margin-left: 25px;
    border-radius: 4px 0 0 4px;
    background-color: #f0cb47;
    margin-bottom: 5px;
}
.active_menu a{
    padding-left: 40px;
    color: #000000;
    width:100%;
} 
.active_menu svg{
    position: absolute;
    color: #000000;
}

.active_menu:hover{
    margin-left: 25px;
    border-radius: 4px 0 0 4px;
    background-color: #f0cb47;
    margin-bottom: 5px;
} 
.menu_divider2{
    background-color: #EDF2F7;
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
