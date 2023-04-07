import styled from 'styled-components'

const MyDiv = styled.div`

.about_box{
    margin-top: 40px;
}
.card_heading{
    font-family: "Arial";
    font-size: 18px;
    font-weight: 400;
    color: #000000;
    padding: 15px 30px;
    background-color: #EAECEF; 
    border-radius: 5px 5px 0px 0px;
}
.education_box{
    border: 1px solid #C4D2DF;
}
.education_data{
    padding: 30px;
    border-bottom: 1px solid #C4D2DF;
}
.education_data:last-child{
    border-bottom: 0;
}
// .wrap-flex{
//     display: flex;
//     column-gap: 4px;
//     align-items: center;
//     margin-top: 0!important;
//     width: 100%;
// }
.labelNameBold{
    font-family: "Proxima Nova";
    font-size: 16px;
    font-weight: 600;
    color: #000;
}
.labelNameBold_update{
    font-family: "Proxima Nova";
    font-size: 16px;
    font-weight: 600;
    color: #F50057;
}
.labelData{
    font-family: "Arial";
    font-size: 16px;
    font-weight: 400;
    color: #000;
}
.labelData_update{
    font-family: "Arial";
    font-size: 16px;
    font-weight: 400;
    color: #F50057;
}
.desc_space{
    padding: 0px 20px;
}
.underline_text{
    text-decoration: underline;
}
`
export default MyDiv
