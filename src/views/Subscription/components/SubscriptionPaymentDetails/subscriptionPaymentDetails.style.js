import styled from 'styled-components'

const MyDiv = styled.div`
.sub_box .tabs_box .MuiTabs-flexContainer {
    column-gap: 40px;
}
.tab_names{
    text-transform: capitalize;
    font-family: "Arial";
    font-weight: 400;
    font-size: 18px;
    color: #262728;
    padding: 0;
}
.sub_box{
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
.tab_panels{
    padding: 0;
    margin-top: 30px;
}

`
export default MyDiv
