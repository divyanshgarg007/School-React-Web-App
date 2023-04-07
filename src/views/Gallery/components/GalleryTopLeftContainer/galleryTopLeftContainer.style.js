import styled from 'styled-components'

const MyDiv = styled.div`
.icn_btn svg{
    width: 100px;
    height: 100px;
    padding: 18px;
    color: #D4D9DD;
    background-color: #EFF0F5;
    border-radius: 170px;
}

.main_title{
    font-family: "Arial";
    font-weight: 400;
    font-size: 18px;
    color: #000000;
    padding-bottom: 8px;
}
.description{
    font-family: "Arial";
    font-weight: 400;
    font-size: 18px;
    color: #000000;
    margin-top: 10px;
}
.remove_btn{
    color: #F50057;
    background-color: transparent;
    text-transform: capitalize;
    font-family: "Proxima Nova";
    font-weight: 500;
    font-size: 18px;
    padding: 0;
}
.remove_btn:hover{
    color: #F50057;
    background-color: transparent;
}
.remove_btn span{
    display:none;
}
.img_style {
    object-fit: cover;
    width: 100%;
    height: 200px;
}
.input_btn{
    border-radius: 7px;
    border: px dotted #F50057;
    padding: 20px;
}
.icn_size{
    width: 2.6em;
    height: 2.6em;
    color: #f0cb47;
}
.upload_btn{
    background-color: #f0cb47;
    color: #000000;
    font-size: 16px;
    font-weight: 500;
    font-family: "Proxima Nova";
    text-transform: capitalize;
    border: 1px solid transparent;
    margin-top:30px;
}
.upload_btn:hover{
    background-color: #f0cb47;
    color: #000000;
}
.image_box{
    width: 60%;
    margin-top: 30px;
}
`
export default MyDiv
