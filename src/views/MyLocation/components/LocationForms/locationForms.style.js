import styled from 'styled-components'

const MyDiv = styled.div`
.auto_complete{
  margin-bottom: 24px;
  // margin-top: 16px;
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
.fix_icon{
    position: relative;
    left: 11px;
}
.icn_size{
    width: 0.6em;
    height: 0.6em;
    color: #C4D2DF;
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
.media_url span{
    color: #FF0000;
    padding-left: 5px;
    
}
.media_url{
    font-family: "Arial";
    font-weight: "400";
    font-size: 14px;
    color: #000000;
    margin-top: 8px;
}
.mu_data{
    height:40px;
    width: 100%;
    border-radius: 2px;
}
.mu_data fieldset{
  border-color: #d9d9d9;
}
.switch_box{
    display: flex;
    margin-top: 15px;
    margin-bottom: 15px;
    align-items: center;
    font-family: "Arial";
    font-weight: 400;
    font-size: 15px;
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
.flex_btn{
    margin-top: 15px;
    display: flex;
    column-gap: 10px;
    justify-content: start;
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
  .data_box{
    // margin-top: 40px;
  }
  .sm_box{
    // margin-top: 40px;
}
.mapboxgl-ctrl-bottom-right, .mapboxgl-ctrl-logo {
  display: none
}
`
export default MyDiv
