import styled from 'styled-components'

const MyDiv = styled.div`
.box_card{
    @media(max-width:767px){
        margin: -15px 27px 0px 27px;
}
    }
    @media(min-width:768px) and (max-width:1023px){
        margin: -15px 27px 0px 27px;
}
    }
}
.category_box{
    background-color: #ffffff;
    margin: 0px -15px 0px -15px;
}
  .auto_complete input{
    width: 90%;
    font-family: "Proxima Nova";
    font-size: 14px;
    font-weight: 400;
    padding: 0px 20px;
    border-radius: 3px;
    height: 38px;
    border: 1px solid rgb(217, 217, 217);
    @media(max-width:767px){
        width: 100%;
    }
    @media(min-width:768px) and (max-width:1023px){
        width: 100%;
    }
  }
  .auto_complete input:hover{
    border: 1px solid blue;
  }
  .auto_complete input:focus-visible{
    outline: none;
    border-radius: 0px!important;
  }
.register_btn{
    margin-top: 8px;
    background-color: #000;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    font-family: "Proxima Nova";
    text-transform: capitalize;
    border: 1px solid transparent;
    height: 40px;
    border-radius: 5px;
    @media(max-width:767px){
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    }
}
.register_btn:hover{
    background-color: #000;
    color: #fff;
}
.web_heading{
    font-family: "Proxima Nova";
    font-size: 45px;
    font-weight: 600;
    width: 75%;
    line-height: 50px;
    @media(max-width:767px){
        font-size: 30px;
    font-weight: 600;
    text-align: center;
    width: 100%;
    line-height: 40px;
    }
}
.web_subheading1{
    font-family: "Proxima Nova";
    font-size: 18px;
    font-weight: 600;
    margin-top: 16px;
    @media(max-width:767px){
    text-align: center;
    margin-top: 30px;
    }
}
.web_subheading2{
    font-family: "Proxima Nova";
    font-size: 18px;
    font-weight: 400;
    margin-top: 16px;
    width: 75%;
    line-height: 20px;
    @media(max-width:767px){
        font-size: 18px;
    font-weight: 400;
    width: 100%;
    text-align: center;
    }
}
.flex_bar{
    display: flex;
    column-gap: 10px;
    background: #fff;
    padding: 10px;
    border-radius: 5px;
    @media(max-width:767px){
        flex-direction: column;
        row-gap: 10px;
    }
    @media(min-width:768px) and (max-width:1023px){
        flex-direction: column;
    }
}
.home_box{
    background-color: #F0CB47;
    padding: 100px;
    @media(max-width:767px){
        padding: 24px 15px 8px 15px;
    }
    @media(min-width:768px) and (max-width:1023px){
        padding: 24px 15px 8px 15px;
    }
}
.btn_search_main{
    width: 20%;
    @media(max-width:767px){
        width: 100%;
    }
}
.btn_search_main .btn-search{
    width: 100%;
    background-color: #F0CB47;
}
.mu_data{
    height:40px;
    width: 100%;
    border-radius: 2px;
}
.mu_data fieldset{
    border-color: #d9d9d9;
  }
  .select_box{
    width: 40%;
    @media(max-width:767px){
        width: 100%;
    }
    @media(min-width:768px) and (max-width:1023px){
        width: 100%;
    }
  }
  .w-40{
    width: 40%; 
    @media(max-width:767px){
        width: 88%; 
    }
  }
  .btn-search {
    background-color: #F0CB47;
    color: #000;
    font-size: 16px;
    font-weight: 600;
    font-family: "Proxima Nova";
    text-transform: capitalize;
    border: 1px solid transparent;
    height: 40px;
    border-radius: 10px;
}
.btn-search :hover{
    background-color: #F0CB47;
    color: #000;
}
.tab_box{
    display: none;
    @media(max-width:767px){
        display: block;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: block;
    }
}
.btn_box{
    margin-top: 30px;
    display:flex;
    justify-content:center;
}
.main_box1{
    background-color: #F9FBFD;
    display: block;
    @media(max-width:767px){
        display:none;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: none;
    }
}
.tab_container .Mui-selected{ 
    background-color: #FFFFFF;
    color: #f0cb47;
}
.tab_names{
    font-family: "Arial";
    font-size: 15px;
    font-weight: 400;
    color: #26325D;
    text-transform: capitalize;
}
.img_text1{
    font-family: "Proxima Nova";
    font-size: 18px;
    font-weight: 400;
}
.img_text2{
    font-family: "Arial";
    font-size: 32px;
    font-weight: 600px;
    margin-top: 8px;
}
.img_text3{
    font-family: "Proxima Nova";
    font-size: 18px;
    font-weight: 400;
    margin-top: 8px;
    margin-bottom: 24px;
}
.width_style{
    width: 63%;
}
.btn_style2{
    font-family: "Arial";
    font-size: 18px;
    font-weight: 400;
    color: #ffffff;
    background-color: #f0cb47;
    border-radius: 5px;
    text-transform: capitalize;
    width: 40%;
    height: 40px;
}
.btn_style2: hover{
    color: #ffffff;
    background-color: #f0cb47;
}
.text_img{
    position: absolute;
    color: #FFFFFF;
    background: rgb(0 0 0 / 37%);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
}
.img_grid{
    position: relative;
    width: 100%;
    height: 455px;
    background: url(https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)
}
.main_box{
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 50px;
}
.text_title{
    color: #000000;
    font-family: "Proxima Nova";
    font-size: 42px;
    font-weight: 500px;
    text-align: center;
}
.btn_style{
    font-family: "Arial";
    font-size: 18px;
    font-weight: 400;
    color: #ffffff;
    background-color: #f0cb47;
    border-radius: 5px;
    text-transform: capitalize;
}
.btn_style: hover{
    color: #ffffff;
    background-color: #f0cb47;
}
.popular_box{
    padding: 0px 100px;
    margin-bottom:60px;
}

.filter_actions{
    padding: 0px 24px;
}
.btn_submit{
    font-family: "Arial";
    font-weight: 400;
    font-size: 15px;
    text-transform: capitalize;
    color: #ffffff;
      background-color: #f0cb47;
    border: 1px solid #f0cb47;
    border-radius: 5px;
    width: 100%;
    margin-bottom:15px;
  }
  .btn_submit:hover{
      color: #ffffff;
      background-color: #f0cb47;
    border: 1px solid #f0cb47;
  }
  .btn_cancel{
    font-family: "Arial";
    font-weight: 400;
    font-size: 15px;
    color: #26325D;
    text-transform: capitalize;
    background-color: #E3E3E3;
    border: 1px solid #E3E3E3;
    border-radius: 5px;
    width: 100%;
  }
  
  .btn_cancel:hover{
    color: #26325D;
    background-color: #E3E3E3;
    border: 1px solid #E3E3E3;
  }

  .no-space-mobile{
    @media(max-width: 767px){
        padding: 0px!important;
    }
  }
  
`
export default MyDiv
