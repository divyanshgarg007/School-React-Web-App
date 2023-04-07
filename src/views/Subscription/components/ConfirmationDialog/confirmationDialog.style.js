import styled from 'styled-components'

const MyDiv = styled.div`
.grid_dialog{
  border-top: 5px solid #1D3160;
  position: relative;
}
.icon_cross{
  position: absolute;
  right: 20px;
  top: 14px;
}
.reset_text{
  font-size: 24px;
  color: #262728;
  font-family: "Arial";
  font-weight: 400;
}
.btn_flex{
  column-gap: 10px;
  margin-top: 24px;
  display: flex;
}
.btn_submit{
  font-family: "Arial";
  font-weight: 400;
  font-size: 15px;
  color: #0F1350;
  text-transform: capitalize;
  background-color: #fff;
  border: 1px solid #C4D2DF;
  border-radius: 5px;
}
.btn_cancel{
  font-family: "Arial";
  font-weight: 400;
  font-size: 15px;
  color: #0F1350;
  text-transform: capitalize;
  background-color: #fff;
  border: 1px solid #C4D2DF;
  border-radius: 5px;
}
.btn_submit:hover{
  color: #0F1350;
  background-color: #fff;
  border: 1px solid #C4D2DF;
}
.btn_cancel:hover{
  color: #0F1350;
  background-color: #fff;
  border: 1px solid #C4D2DF;
}
.proceed_link{
  font-family: "Arial";
  font-weight: 400;
  font-size: 15px;
  color: #0F1350;
  background-color: #fff;
  border: 1px solid #C4D2DF;
  border-radius: 5px;
  text-decoration: none;
  padding: 8px;
}
`
export default MyDiv
