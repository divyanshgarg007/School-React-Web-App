import styled from 'styled-components'

const MyDiv = styled.div`
.NoBackground{
    width: 100%;
    height: 200px;
    background-color: #1D3160;
}
.cover_image{
    height: 200px;
    width: 100%;
    object-fit: cover;
}
.main_card{
    position: relative;
    box-shadow: 0px 0 25px #d3d3d3;
    // margin: 10px;
    height: 100%;
    width: 100%;
}
.custom_content{
    position: relative;
}
.new_btn{
    background-color: #f0cb47;
    font-family: "Arial";
    font-size: 10px;
    font-weight: 400;
    color: #FFFFFF;
    text-transform: capitalize;
    position: absolute;
    top: -12px;
    right: 16px;
    padding: 5px 12px;
    border-radius: 3px;
}
.new_btn: hover{
    background-color: #f0cb47;
    color: #FFFFFF;
}
.icn_btn{
    position: absolute;
    top: 3px;
    right: 3px;
}
.icn_btn svg{
    width: 20px;
    height: 20px;
    padding: 5px;
    color: #ffffff;
    background-color: #f0cb47;
    border-radius: 50%;
}
.flex_box2{
    display: flex;
    margin-bottom: 8px;
}
.flex_box{
    display: flex;
    margin-top: 8px;
}
.text_label1{
    color: #000000;
    font-family: "Arial";
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
}
.text_label2{
    color: #f0cb47;
    font-family: "Arial";
    font-size: 14px;
    font-weight: 400;
}
.text_label3{
    color: #9998A7;
    font-family: "Arial";
    font-size: 14px;
    font-weight: 400;
    padding-left:5px;
}
  .list_users {
    text-decoration: none;
  }
`
export default MyDiv
