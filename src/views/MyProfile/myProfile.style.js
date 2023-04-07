import styled from 'styled-components'

const MyDiv = styled.div`
.myprofile_box{
    // margin:20px 0px;
    // border-left: 5px solid #262728;
    padding: 30px 50px;
    height: 100%;
    @media(max-width:767px){
        margin-top:0px;
        background-color: #EDF2F7;
        border-left: none;
        padding: 0px;
        height: 100%;
    @media(min-width:768px) and (max-width:1023px){
        margin-top:0px;
        background-color: #EDF2F7;
        border-left: none;
        padding: 15px;
        height: 100%;
    }
}
.tab_child{
    padding: 0px;
    margin-top: 35px;
}
.tab_names{
    color: #262728;
    font-size: 20px;
    font-family: "Arial";
    font-weight: 400;
    text-transform: capitalize;
    padding: 0;
}
.MuiTabs-scrollButtons{
display:none;
@media(max-width:767px){
    display:flex;
}
}
.tabs_box .MuiTabs-flexContainer{
    column-gap: 50px;
    @media(max-width:767px){
        column-gap: 40px;
}
`
export default MyDiv
