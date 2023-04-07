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
.label_name{
    font-family: "Arial";
    font-weight: 400;
    font-size: 12px;
    color: #000000;
    margin-top: 15px;
    margin-bottom:5px;
}
.add_btn{
    background-color: transparent;
    color: #000000;
    font-size: 16px;
    font-weight: 500;
    font-family: "Proxima Nova";
    text-transform: capitalize;
    border: 1px solid transparent;
    margin-top:15px;
    padding: 0;
}
.add_btn:hover{
    background-color: transparent;
    color: #000000;
}
.textbox_value{
    width:60%;
    @media(max-width:767px){
        width:100%;
    }
}
.textbox_value input{
    font-family: "Proxima Nova";
    font-size: 14px;
    font-weight: 400;
}
.textbox_value fieldset{
    border-radius: 4px;
}
.video_links{
    width:60%;
    margin-top: 30px;
    @media(max-width:767px){
        width:100%;
    }
}
.link_box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
}
.link_label{
    display: flex;
    column-gap:10px;
    align-items: center;
    background: #fff;
    box-shadow: 0px 0 8px #ccc;
    padding: 10px;
    border-radius: 5px;
    width: auto;
    margin-right:10px;
}
.link_label svg{
    color: #f0cb47;
}
.delete_icon{
    background: #F50057;
    color: #fff;
    padding: 3px;
}
.delete_icon:hover{
    background-color: #F50057;
}
.label_name span {
    color: #F50057;
    padding-left: 5px;
}
`
export default MyDiv
