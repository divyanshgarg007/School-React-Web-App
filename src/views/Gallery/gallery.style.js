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
.box_cont{
    display: block;
    @media(max-width:767px){
       display: none; 
    }
    @media(min-width:768px) and (max-width:1023px){
        display: none;
    }
}
.gallery_box{
    // border-left: 5px solid #262728;
    // margin: 20px 0px;
    padding-left: 50px;
    padding-right: 50px;
    height: 100%;
    @media(max-width:767px){
        border-left: 0px;
    margin-top: 0px;
    background-color: #EDF2F7;
    height: 100%;
    padding-left: 0;
    padding-right: 0;
    }
    @media(min-width:768px) and (max-width:1023px){
        border-left: 0px;
    margin-top: 0px;
    background-color: #EDF2F7;
    height: 100%;
    padding-left: 0;
    padding-right: 0;
    }
}

.page_title{
    font-family: "Arial";
    font-size: 18px;
    font-weight: 400;
    color: #1D3160;
    padding:30px 0px;
    @media(max-width:767px){
        text-align: center;
        color: #000000;
    }
    @media(min-width:768px) and (max-width:1023px){
        text-align: center;
        color: #000000;
    }
}
.right_space{
    padding-right: 40px;
    @media(max-width:767px){
        padding-right: 0px;
    }
}
.left_space{
    padding-left: 40px;
    @media(max-width:767px){
        padding-left: 0px;
    }
}
`
export default MyDiv
