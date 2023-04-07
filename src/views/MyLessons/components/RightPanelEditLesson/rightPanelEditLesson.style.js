import styled from 'styled-components'

const MyDiv = styled.div`
.drawer_box{
    display: flex;
    justify-content: space-between;
    border-top: 5px solid #1D3160;
    padding: 50px;
    position: relative;
    width: 100%;
}
.icon_cross{
    position: absolute;
    right: 20px;
    top: 14px;
}
.btn_submit{
    font-family: "Arial";
    font-weight: 400;
    font-size: 12px;
    color: #0F1350;
    text-transform: capitalize;
    background-color: #fff;
    border: 1px solid #C4D2DF;
    border-radius: 5px;
  }
  .btn_cancel{
    font-family: "Arial";
    font-weight: 400;
    font-size: 12px;
    color: #0F1350;
    text-transform: capitalize;
    background-color: #fff;
    border: 1px solid #C4D2DF;
    border-radius: 5px;
  }
  .btn_submit:hover{
    color: #0F1350;
    background-color: #fff;
  }
  .btn_cancel:hover{
    color: #0F1350;
    background-color: #fff;
  }
  .flex_btn{
    margin-top: 30px;
    display: flex;
    column-gap: 10px;
  }
`
export default MyDiv
