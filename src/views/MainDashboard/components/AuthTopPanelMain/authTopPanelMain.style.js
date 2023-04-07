import styled from 'styled-components'

const MyDiv = styled.div`
.ReactFlagsSelect-module_selectBtn__19wW7{
    border: none;
    padding-top: 8px;
}
.ReactFlagsSelect-module_selectBtn__19wW7:after{
    display: none;
}
.flex_box{
    display: flex;
}
.menu_item{
    height: 45px;
}
.btn_flex{
    display: flex;
    coulmn-gap: 10px;
    align-items: center;
}
.icn_btn{
    display: none;
    @media(max-width:767px){
        display: block;
        color: #000000;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: block;
        color: #000000;
    }
}
.text_logo{
    font-family: "Proxima Nova";
    font-weight: 400;
    font-size: 22px;
    color: #000000;
    @media(max-width:767px){
        color: #FFFFFF;
        font-weight: 500;
    }
    @media(min-width:768px) and (max-width:1023px){
        color: #FFFFFF;
        font-weight: 500;
    }
}
.app_bar{
    background-color: #FFFFFF;
    // height: 72px;
    width: 100%;
    @media(max-width:767px){
        background-color: #FFFFFF;
        height: 60px;
    }
    @media(min-width:768px) and (max-width:1023px){
        background-color: #FFFFFF;
        height: 60px;
    }
}
.tool_bar{
    display: flex;
    justify-content: space-between;
    box-shadow: none;
    // box-shadow: 0px 3px 6px #00000029;
}

.app_bar img{
    max-width:175px;
    
}

.btn_text2{
    font-family: "Arial";
    font-size: 14px;
    font-weight: 400;
    text-transform: capitalize;
    color: #FFFFFF;
    background-color: #f0cb47;
    width: 139px;
    height: 40px;
}
.btn_text2: hover{
    font-family: "Arial";
    font-size: 14px;
    font-weight: 400;
    text-transform: capitalize;
    color: #FFFFFF;
    background-color: #f0cb47;
    width: 139px;
    height: 40px;
}
.btn_gap{
    display: flex;
    column-gap: 10px;
    @media(max-width:767px){
        display: none;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: none;
    }
}
.title_text1{
    font-family: "Arial";
    font-size: 16px;
    font-weight: 400;
}
.title_text2{
    font-family: "Arial";
    font-size: 15px;
    font-weight: 400;
}
.title_text2:hover{
    background-color: #f0cb47;
    border-radius: 3px;
}

.main-menu:hover{
    background-color: transparent;
}
.active_menu:hover{
    background-color: transparent;
}
.main-menu .link_names{
    font-family: "Proxima Nova";
    font-weight: 400;
    font-size: 16px;
    color: #000;
    padding: 2px 10px;
    border-radius:4px;
}
.active_menu .link_names{
    font-family: "Proxima Nova";
    font-size: 16px;
    // background-color: #160647;
    padding: 2px 10px;
    // border-radius:4px;
    color: #160647;
    font-weight: 700;
}
.main-menu:hover .link_names{
    color: #f0cb47;
    background-color: #ffffff; 
}
.nav_btn{
    font-size: 16px;
    font-weight: 400;
    text-transform: capitalize;
    color: #000000;
    background-color: transparent;
}
.nav_btn: hover{
    color: #000000;
    background-color: transparent;
    color: #f0cb47;
}
.btn-logout{
    background-color: #f0cb47; 
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    font-family: "Proxima Nova";
    text-transform: capitalize;
    border: 1px solid transparent;
}
.btn-logout:hover{
    color: #FFFFFF;
    background-color: #f0cb47;
}
.btn_profile{
    background-color: transparent; 
    color: #f0cb47;
    font-size: 16px;
    font-family: "Proxima Nova";
    font-weight: 500;
    text-transform: capitalize;
    border: 1px solid #f0cb47;
}
.btn_profile:hover{
    color: #f0cb47;
    background-color: transparent;
}

.mobile_btn{
    position: relative;
    display: none;
    @media(max-width:767px){
        display: block;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: block;
    }
}
.text_search{
    right: 125px;
    top: 3px;
    position: absolute;
    width: 225px;
    z-index: 1;
}
`
export default MyDiv
