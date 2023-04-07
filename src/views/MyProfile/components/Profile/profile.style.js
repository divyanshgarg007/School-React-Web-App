import styled from 'styled-components'

const MyDiv = styled.div`
.close_icn{
    position: absolute;
    top: -6px;
    right: -10px;
}
.close_icn svg{
    height: 16px;
    color: #ffffff;
}

.publish_msg{
    position: relative;
    color: #FFFFFF;
    background-color: #F50057;
    padding: 5px;
    width: 100%;
    border-radius: 8px;
    font-family: "Proxima Nova";
    font-weight: 300;
    font-size: 18px;
    text-align: left;
}
.form_grid{
    margin-top: 16px;
}
.gender_box{
    @media(max-width:767px){
        display: block;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: block;
    }
}
.user_name{
    font-family: "Arial";
    font-weight: 500;
    font-size: 24px;
    color: #1D3160;
}
.user_id{
    font-family: "Arial";
    font-weight: 400;
    font-size: 14px;
    color: #000000;
    padding: 7px 0px;
    text-align: left;
    @media(max-width:767px){
        text-align: center;
    }
}
.verified_box{
    display:flex;
    align-items:center;
    column-gap: 0px;
    position: absolute;
    right: 37px;
    top: 34px;
}
.verified{
    position:relative;
}
.verified_box h5{
    font-size: 0.8rem;
    color: #008039;
    font-weight: 600;
}
.verified_box svg{
    color: #008039;
    width: 0.7em;
    height: 0.7em;
}
.phone_box{
    width: 100%;
    height: 42px;
}
.react-tel-input{
    border-radius: 0!important;
}
.react-tel-input .phone_box{
    border-color: #d9d9d9;
    border-radius: 2px;
    border-width: 1px;
}
.react-tel-input .flag-dropdown {
    border-color: #d9d9d9;;
    border-radius: 2px;
    border-width: 1px;
}
.react-tel-input:hover .phone_box{
    border-color: blue;
    border-radius: 2px;
    border-width: 1px;
}
.react-tel-input:hover .flag-dropdown {
    border-color: blue;
    border-radius: 2px;
    border-width: 1px;
}
.avatar_cam{
    font-family: "Arial";
    font-weight: 400;
    font-size: 42px;
    background-color: #FFFFFF;
    border: 2px solid #1D3160;
    color: #1D3160;
    height: 150px;
    width: 150px;
    border-radius:50%;
    object-fit: cover;
}
.avatar_user{
    font-family: "Arial";
    font-weight: 400;
    font-size: 42px;
    background-color: #FFFFFF;
    border: 2px solid #1D3160;
    color: #1D3160;
    height: 150px;
    width: 150px;
    border-radius:50%;
}
.avatar_box{
    position:relative;
}
.camera_upload{
    position: absolute;
    right: 5px;
    bottom: 5px;
    box-shadow: 0px 3px 6px #00000029;
    background-color: #fff!important;
}
.text_labels{
    font-family: "Arial";
    font-weight: 400;
    font-size: 14px;
    color: #000000;
}
.text_labels span {
    color: #F50057;
    padding-left:5px;   
  }
.camera_icon{
    color: #41516C;
}
.select_menu{
    height: 40px;
    background-color: #FFFFFF;
    border-radius: 2px;
}
.edit_icon{
    position: absolute;
    right: 5px;
    color: #000000;
}
.icn_size{
    width: 0.6em;
    height: 0.6em;
}
.edit_num{
    position: absolute;
    right: 5px;
    top:27px;  
    color: #C4D2DF; 
}
.text-style input{
    font-family: "Proxima Nova";
    font-size: 14px;
    font-weight: 400;
    height: 1.6375em;
  }
.title_cam{
    text-align: center;
    line-height: 145px;
}
.flex_btn{
    display: flex;
    column-gap: 10px;
    justify-content: start;
  }
  .flex_btn2{
    display: flex;
    column-gap: 10px;
    justify-content: start;
    @media(max-width:767px){
        display: none;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: none;
    }
  }
.btn_submit{
    font-family: "Proxima Nova";
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
  .btn_cancel{
    font-family: "Proxima Nova";
    font-weight: 400;
    font-size: 15px;
    color: #0F1350;
    text-transform: capitalize;
    background-color: #fff;
    border: 1px solid #C4D2DF;
    border-radius: 5px;
  }
  .btn_cancel:hover{
    color: #0F1350;
    background-color: #fff;
    border: 1px solid #C4D2DF;
  }
  .btn_red{
    background-color: #F50057;
    color: #FFFFFF;
    font-family: "Proxima Nova";
    font-size: 15px;
    font-weight: 400;
    text-transform: capitalize;
    border: 1px solid #F50057;
}
.btn_red:hover{
    background-color: #F50057;
    color: #fff;
    border: 1px solid #F50057;
}

.mobile_btn{
    display: none;
    border: 1px solid #ddd!important;
    color: #000000!important;
    background-color: #F1F5FC;
    font-family: "Proxima Nova";
    font-size: 14px;
    padding: 5px 20px;
    font-weight: 400;
    text-transform: capitalize;
    @media(max-width:767px){
        display: block;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: block;
    }
}

.d-flex{
    display:flex;
    align-items:center;
    column-gap: 40px;
}
// .css-12yjm75-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled{
//     opacity: 1;
//     -webkit-text-fill-color: #000000;
// }
.disabled_text input.Mui-disabled{
    opacity: 1;
    -webkit-text-fill-color: rgba(0,0,0,1)!important;
}

.flex_check{
    display: flex;
    align-items: center;
}

`
export default MyDiv
