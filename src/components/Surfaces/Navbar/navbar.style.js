import styled from 'styled-components'

const MyDiv = styled.div`
.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root:hover{
    background-color: red!important;
}
.avatar_name{
    padding: 15px;
    border: 1px solid #000000;
    border-radius: 27px;
}
.menu_item{
    height: 32px;
    @media(max-width:767px){
        display: none!important;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: none!important;
    }
}
.navbar_wrapper{
    background-color: #FFFFFF;
}
.nav_bar{
    display: block;
    @media(max-width:767px){
        display: none;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: none;
    }
}
.side_bar{
    display: none;
    @media(max-width:767px){
        display: block;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: block;
    }
}
.button_green{
    background-color: #f0cb47;
    text-transform: capitalize;
    font-family: "Proxima Nova";
    font-size: 15px;
    font-weight: 400;
    character-spacing:0;
    line-spacing: 18px;
    padding: 5px 20px;
    color: #000000;
}
.button_dark{
    background-color: #0F4E50;
    font-family: "Proxima Nova";
    text-transform: capitalize;
    font-size: 15px;
    font-weight: 400;
    character-spacing:0;
    line-spacing: 18px;
    color: #FFFFFF;
    padding: 5px 20px;
}
.button_green: hover{
    background-color: #f0cb47;
    color: #000000;
}
.button_dark: hover{
    background-color: #0F4E50;
    color: #FFFFFF;
}
.right_bar{
    display:flex;
    align-items:center;
    justify-content: end!important;
}
.right_bar .button_dark{
    margin-right: 2rem;
}
.d-flex{
    align-items:center;
    display:flex;
    justify-content: end;
}
.separator{
    border-right: 1px solid #000;
}
.text_renew{
    color:black;
    text-align:end;
    font-size: 12px;
    font-family:"Proxima Nova";
    font-weight: 400;
    width: 35%;
    margin-right: 8px;
}
.text_publish{
    color: red;
    font-size: 13px;
    font-family: "Proxima Nova";
    font-weight: 500;
    margin-left: 8px;
    margin-top: 8px;
    @media(max-width:767px){
        display: none;
    font-size: 10px;
    width: 200%;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: none;
    font-size: 10px;
    width: 200%;
    }
}
.menuitems_all{
    font-family: "Proxima Nova";
    font-weight: 300;
    font-size: 16px;
    color: #000000;
    character-spacing:0px;
    line-spacing:19px;
}

.user_name{
    font-family: "Proxima Nova";
    font-weight: 400;
    font-size: 18px;
    color: #000000;
    background-color: transparent;
    text-transform: capitalize;
}
.user_name:hover{
    background-color: transparent;
}
.grid_wrapper{
    box-shadow: 0px 3px 6px #00000029;
    opacity: 1;
    align-items: center;
    justify-content:space-between;
    background-color: #FFFFFF;
}
.text_logo{
    font-family: "Proxima Nova";
    font-weight: 400;
    font-size: 22px;
    color: #000000;
}
.grid_items{
    padding: 10px;
    @media(max-width:767px){
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    @media(min-width:768px) and (max-width:1023px){
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
}
.avatar_cam{
    font-family: "Arial";
    font-weight: 400;
    font-size: 15px;
    background-color: #FFFFFF;
    border: 1px solid #1D3160;
    color: #1D3160;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    object-fit: cover;
}
.title_cam{
    text-align: center;
    line-height: 45px;
}
.avatar_box{
    position:relative;
}
.menu_item{
    font-family: "Proxima Nova";
    font-weight: 400;
    font-size: 16px;
    color: #000000;
}
.icn_clr{
    color: #f0cb47;
}
.logo_style{
    width: 50%!important;
    height: 100%!important;
}
`
export default MyDiv
