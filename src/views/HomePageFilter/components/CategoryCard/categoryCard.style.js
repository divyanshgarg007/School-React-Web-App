import styled from 'styled-components'

const MyDiv = styled.div`
.box_card{
    position: relative;
    box-shadow: 0px 0 25px #d3d3d3;
    height: 200px;
    width: 100%;
    object-fit: cover;
}
.text_cards{
    backdrop-filter: blur(2px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    position: absolute;
    top: 0;
}
.text_style{
    color: #ffffff;
    font-family: "Arial";
    font-size: 18px;
    font-weight: 500px;
    text-align: center;
}
.text_style2{
    color: #ffffff;
    font-family: "Arial";
    font-size: 14px;
    font-weight: 400;
    text-align: center;
}
.box_card img{
    width: 100%;
    height: 200px;
    object-fit: cover;
}
`
export default MyDiv
