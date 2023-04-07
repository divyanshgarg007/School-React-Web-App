import styled from 'styled-components'

const MyDiv = styled.div`
.main_box{
    padding: 0px;
    @media(max-width:767px){
        padding: 0px 24px;
    }
}
.main_grid{
    margin-top: 24px;
    @media(max-width:767px){
        margin-top: 0px;
    }
    @media(min-width:768px) and (max-width:1023px){
        margin-top: 0px;
    }
}
.card_box{
    border-radius: 5px 5px 0px 0px;
    box-shadow: 0px 3px 6px #00000029;
    background-color: #FFFFFF;
    margin-top: 70px;
    @media(max-width:767px){
        margin-top: 30px;
        box-shadow: none;
        background-color: transparent;
    }
}
.heading_name{
    font-family: "Arial";
    font-size: 18px;
    font-weight: 400;
    padding: 15px 30px;
    border-radius: 5px 5px 0px 0px; 
    border-bottom: 1px solid rgb(224, 224, 224);
    background-color: white;
    color: #5a72a2;
    @media(max-width:767px){
        font-size: 15px;
        color: #f0cb47;
        padding: 0px;
        background-color: transparent; 
        border-bottom: none;
    }
    @media(min-width:768px) and (max-width:1023px){
        font-size: 15px;
        color: #f0cb47;
        padding: 0px;
        background-color: transparent; 
    }
}
.title_light{
    font-family: "Arial";
    font-size: 16px;
    font-weight: 400;
    color: #9998A7;
    @media(max-width:767px){
        font-size: 15px;
    }
}
.data_grid{
    padding: 24px;
    @media(max-width:767px){
        margin-top: 15px;
        padding: 0;
    }
}
.label_name{
    font-family: "Arial";
    font-size: 16px;
    font-weight: 400;
    color: #f0cb47;  
    padding-bottom:15px;
    @media(max-width:767px){
        font-size: 15px;
        padding-bottom:5px;
    }
}
.box_space{
    margin-top: 20px;
    @media(max-width:767px){
        margin-top: 30px;
    }
}
.title_fade{
    font-family: "Arial";
    font-size: 16px;
    font-weight: 600;
    color: #9998A7;
    @media(max-width:767px){
        font-size: 15px;
    }
}
.flex_wrapper{
    display: flex;
    column-gap: 10px;
    margin-bottom: 8px;
    @media(max-width:767px){
        column-gap: 3px;
    }
}
.flex_items{
    display: flex;
    column-gap: 20px;
    align-items: center;
    margin-top: 8px;
    @media(max-width:767px){
        column-gap: 10px;
    }
}
.data_label{
    font-family: "Arial";
    font-size: 16px;
    font-weight: 400;
    color: #f0cb47;
    @media(max-width:767px){
        color: #f0cb47;
        font-size: 15px;
    }
}
.data_name{
    font-family: "Arial";
    font-size: 16px;
    font-weight: 400;
    color: #9998A7;
    @media(max-width:767px){
        color: #000000;
        font-size: 15px;
    }
}
.text_mobile{
    display: none;
    @media(max-width:767px){
        display: block;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: block;
    }
}
.list_icons{
    width: 53px;
    height: 53px;
    background-color: #fff;
    border: 1px solid #f0cb47;
    @media(max-width:767px){
        display: none;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: none;
    }
}
.list_icons svg{
    color: #f0cb47;
}
.avatar_size{
    width: 90px;
    height: 90px;
        object-fit:cover;
        border-radius: 50%;
    @media(max-width:767px){
        width: 60px;
        height: 60px;
    }
    @media(min-width:768px) and (max-width:1023px){
        width: 60px;
        height: 60px;
    }
}
.NoBackground{
    display: none;
    @media(max-width:767px){
        display: block;
        width: 100%;
        height: 100px!important;
        background-color: #0F1350;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: block;
        width: 100%;
        height: 100px!important;
        background-color: #0F1350;
    }
}
.img_style{
    display: none;
    @media(max-width:767px){
        display: block;
        width: 100%;
        height: 100px!important;
        object-fit: cover;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: block;
        width: 100%;
        height: 100px!important;
        object-fit: cover;
    }
}

.img_style{
    display: none;
    @media(max-width:767px){
        display: block;
        width: 100%;
        height: 500px;
        object-fit: cover;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: block;
        width: 100%;
        height: 500px;
        object-fit: cover;
    }
}
.icon_btn{
    width:30px;
    height: 30px;
}
`
export default MyDiv
