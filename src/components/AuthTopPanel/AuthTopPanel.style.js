import styled from 'styled-components'

const MyDiv = styled.div`
.flag_style{
    display: none;
    @media(max-width:767px){
        display: flex;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: flex;
    }
}
.ReactFlagsSelect-module_selectBtn__19wW7{
    border: none;
}
.ReactFlagsSelect-module_selectBtn__19wW7:after{
    display: none;
}
// .flex_box{
//     display: flex;
// }
.text_logo{
    font-family: "Proxima Nova";
    font-weight: 400;
    font-size: 22px;
    color: #000000;
    @media(max-width:767px){
        color: #FFFFFF;
    }
    @media(min-width:768px) and (max-width:1023px){
        color: #FFFFFF;
    }
}
.app_bar{
    background-color: #FFFFFF;
    width: 100%;
    border: 1px solid #eee;
    box-shadow: none!important;
    position: fixed;
    z-index: 1111;
    @media(max-width:767px){
        color: #FFFFFF;
        background-color: #FFFFFF;
    }
    @media(min-width:768px) and (max-width:1023px){
        background-color: #FFFFFF;
        color: #FFFFFF;
    }
}
.tool_bar{
    display: flex;
    justify-content: space-between;
    @media(max-width:767px){
        // justify-content: space-between;
    }
    @media(min-width:768px) and (max-width:1023px){
        // justify-content: space-between;
    }
}

.flex_box{
    align-items: center;
    display: flex;
}

.app_bar img{
    max-width:175px;
    
}
.custom_button1{
    border-radius: 5px;
    font-family: "Arial";
    font-weight: 400;
    font-size: 18px;
    width: 100%;
    background-color: #f0cb47;
    color: #fff;
    text-transform: capitalize;
}
.mobile_hide{
    @media(max-width:767px){
        display: none;
    }
}
.custom_button1:hover{
    background-color: #f0cb47;
    color: #fff;
}
.icn_btn{
    display: none!important;
    @media(max-width:767px){
        display: block!important;
        color: #000000;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: block!important;
        color: #000000;
    }
}
.text_search{
    right: 100px;
    position: absolute;
    width: 255px;
    z-index: 1;
    top: 7px;
}
.menu_item{
    height: 45px;
    @media(max-width:767px){
        display: none!important;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: none!important;
    }
}
`
export default MyDiv
