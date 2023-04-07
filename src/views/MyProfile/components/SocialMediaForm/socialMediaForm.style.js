import styled from 'styled-components'

const MyDiv = styled.div`
.flex_items{
    display: flex;
    position: relative;
}
.data_grid{
    align-items: end;
}
.sm_box{
    margin-top: 40px;
    width: 60%;
}
.flex_box{
    margin-top: 30px;
    display: flex;
    column-gap: 10px;
}
.drawer_box{
    border-top: 5px solid #1D3160;
    padding: 50px;
    position: relative;
}
.icon_cross{
    position: absolute;
    right: 20px;
    top: 14px;
}
.title_text{
    font-family: "Arial";
    font-weight: 400;
    font-size: 24px;
    color: #262728;
}
.sm_name{
    font-family: "Arial";
    font-weight: 400;
    font-size: 15px;
    color: #000000;
}
.sm_name::after{
    content: "";
    border-bottom: 3px solid #1D3160;   
    display: block;
    width: 67px;
}
.media_url span{
    color: #FF0000;
    padding-left: 5px;
}
.media_url{
    font-family: "Arial";
    font-weight: "400";
    font-size: 14px;
    color: #000000;
}
.media_url2 span{
    color: #FF0000;
    padding-left: 5px;
}
.media_url2{
    font-family: "Arial";
    font-weight: "400";
    font-size: 14px;
    color: #000000;
    margin-top: 24px;
}
.mu_data{
    height:40px;
    border-radius: 2px;
}
.mu_data fieldset{
    border-color: #d9d9d9;
  }
.help_icn{
    right: -30px;
    top: 28px;
    position: absolute;
    color: #1D3160;
    margin-left:10px;
    margin-top: -16px;
    width: 16px;
    height: 16px;
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
  .text-style input{
    font-family: "Proxima Nova";
    font-size: 14px;
    font-weight: 400;
    height: 1.6375em;
  }

  #language_list{
    font-size: 15px;
    color: #000;
    padding: 9px 14px !important;
}
`
export default MyDiv
