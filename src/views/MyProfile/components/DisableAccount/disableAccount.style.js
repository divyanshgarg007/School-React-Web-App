import styled from 'styled-components'

const MyDiv = styled.div`
.btn_flex{
  column-gap: 10px;
  margin-top: 24px;
  display: flex;
}
.grid_label{
  margin-top: 16px;
}
.grid_dialog{
    border-top: 5px solid #1D3160;
    position: relative;
}
.icon_cross{
    position: absolute;
    right: 20px;
    top: 14px;
}
.text_label span {
    color: #F50057;
    padding-left:5px; 
    font-family: "Proxima Nova";  
    font-size: 14px;
    font-weight: 500px;
  }
  .text_label{
    padding-left:5px; 
    font-family: "Proxima Nova";  
    font-size: 14px;
    font-weight: 500px;
  }
  .reset_text{
    font-size: 24px;
    color: #262728;
    font-family: "Arial";
    font-weight: 400;

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
    font-family: "Arial";
    font-weight: 400;
    font-size: 15px;
    color: #0F1350;
    text-transform: capitalize;
    background-color: #fff;
    border: 1px solid #C4D2DF;
    border-radius: 5px;
  }
  .btn_cancel:hover{
    font-family: "Arial";
    font-weight: 400;
    font-size: 15px;
    color: #0F1350;
    text-transform: capitalize;
    background-color: #fff;
    border: 1px solid #C4D2DF;
    border-radius: 5px;
  }
`
export default MyDiv
