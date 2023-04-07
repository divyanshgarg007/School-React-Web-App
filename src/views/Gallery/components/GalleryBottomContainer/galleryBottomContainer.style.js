import styled from 'styled-components'

const MyDiv = styled.div`
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
    margin-top: 50px;
    width: 100%
}
.delete_icon{
    position: absolute;
    right: 5px;
    top: 5px;
    background: #F50057;
    padding: 3px;
}
.delete_icon:hover{
    background-color: #F50057;
}
.delete_icon svg{
    color: #fff;
}
`
export default MyDiv
