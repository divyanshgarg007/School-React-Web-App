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
.flex_btn{
    display: flex;
    margin-top: 8px;
    justify-content: center;
    column-gap: 8px;
}
.label_text{
    font-size: 18px;
    font-family: "Arial";
    font-weight: 400;
    color: #000000;
}
`
export default MyDiv
