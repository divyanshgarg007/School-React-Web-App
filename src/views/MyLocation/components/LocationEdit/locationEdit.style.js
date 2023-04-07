import styled from 'styled-components'

const MyDiv = styled.div`
.auto_complete{
    margin-bottom: 24px;
  }
  .auto_complete input{
    width: 100%;
    font-family: "Proxima Nova";
    font-size: 14px;
    font-weight: 400;
    padding: 0px 20px;
    height: 40px;
    border: 1px solid #d9d9d9;
  }
  .auto_complete input:hover{
    border: 1px solid blue;
  }
  .auto_complete input:focus-visible{
    outline: none;
    border-radius: 0px!important;
  }
.grid_box{
    margin-bottom: 20px;
}
.icn_size{
    width: 0.6em;
    height: 0.6em;
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
    font-size: 18px;
    color: #262728;
    text-align: center;
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
.mu_data{
    height:40px;
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 2px;
}
.mu_data fieldset{
    border-color: #d9d9d9;
  }
.switch_box{
    display: flex;
    margin-top: 35px;
    align-items: center;
    font-family: "Arial";
    font-weight: "400";
    font-size: 15px;
    margin-bottom: 35px;
}
.grid_containers{
    margin-bottom: 15px;
    display: flex;
    column-gap: 10px;
}
.map_text{
    color: #F50057;
    margin-bottom: 10px;
    font-weight: 500;
}
.btn_text{
    border: 1px solid #00000029;
    font-family: "Arial";
    font-weight: 400;
    font-size: 15px;
    color: #000000;
}
.edit_icon{
    color: #000000;
    @media(max-width:767px){
        position: relative;
        top:0px;
        left:13px;
    }
    @media(min-width:768px) and (max-width:1023px){
        position: relative;
        top:0px;
        left:13px;
    }
}
.fix-icon{
    @media(max-width:767px){
        position: absolute;
    }
    @media(min-width:768px) and (max-width:1023px){
        position: absolute;
    }
    
}
.text-style{
    margin-bottom: 24px;
    width: 100%;
  }
  .text-style input{
    font-family: "Proxima Nova";
    font-size: 14px;
    font-weight: 400;
    height: 1.6375em;
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
  .flex_box{
    margin-top: 30px;
    display: flex;
    column-gap: 10px;
}
.btn_submit:hover{
    color: #0F1350;
    background-color: #fff;
  }
  .btn_cancel:hover{
    color: #0F1350;
    background-color: #fff;
  }
`
export default MyDiv
