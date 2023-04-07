import styled from 'styled-components'

const MyDiv = styled.div`
.tab_labels{
    font-family: "Arial";
    font-size: "18px";
    font-weight: 400;
    color: #000000;
    text-transform: capitalize;
    background-color: #FFFFFF;
    text-align: start;
}
.tab_labels:hover{
    font-family: "Arial";
    font-size: "18px";
    font-weight: 400;
    color: #000000;
    text-transform: capitalize;
    background-color: #F1F5FC;
}
.tabpanel_content{
    width: 100%;
}
.main_grid{
    background-color: #EDF2F7;
}
.right_grid{
    background-color: #FFFFFF;
    border-left: 5px solid #262728;
    height: 500vh;
    margin-left: 20px;
}
.left_grid{
    background-color: #FFFFFF;
}
.panel_cont{
    margin-top: 16px;
    margin-bottom: 8px;
}
`
export default MyDiv
