import styled from 'styled-components'

const MyDiv = styled.div`
.grid_dialog{
    border-top: 5px solid #F50057;
    position: relative;
    text-align: center;
    padding: 20px;
    width: 100%;
    display: block;
}
.icon_cross{
    position: absolute;
    right: 20px;
    top: 14px;
}
.label_text{
    width: 100%;
    font-size: 24px;
    color: #262728;
    font-family: "Arial";
    font-weight: 400;
    margin-bottom: 24px;
}
    

  .icn_btn2 svg{
    width: 100px;
    height: 100px;
    padding: 20px;
    color: #F50057;
    background-color: #FFFFFF;
    border-radius: 170px;
    border: 1px solid #F50057;
}
// .flex_box{
//     text-align: center;
//     width: fit-content;
// }
.btn_one{ 
    width: 140px;
    height: 40px;
    border: 1px solid #f50057;
    background-color: #FFFFFF;
    text-transform: capitalize;
    font-size: 15px;
    font-family: "Arial";
    font-weight: 400;
    color: #F50057;
    margin-bottom: 10px;
}
.btn_two{
    width: 140px;
    height: 40px;
    background-color: #f0cb47;
    text-transform: capitalize;
    font-size: 15px;
    font-family: "Arial";
    font-weight: 400;
    color: #FFFFFF;
}
.btn_one: hover{
    background-color: #FFFFFF;
    color: #F50057;
}
.btn_two: hover{
    background-color: #f0cb47;
    color: #FFFFFF;
}
`
export default MyDiv
