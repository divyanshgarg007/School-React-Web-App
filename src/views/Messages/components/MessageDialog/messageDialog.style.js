import styled from 'styled-components'

const MyDiv = styled.div`
.grid_dialog{
    border-top: 5px solid #1D3160;
    position: relative;
}
.icon_cross{
    position: absolute;
    right: 20px;
    top: 14px;
}
.heading_name{
  font-family: "Arial";
    font-size: 18px;
    font-weight: 400;
}
.heading_name1{
  font-family: "Arial";
    font-size: 32px;
    font-weight: 500;
    text-align: left;
    padding-bottom: 15px;
}
.subheading_name{
  font-family: "Arial";
    font-size: 16px;
    font-weight: 400;
}
.wrap_box{
  display: flex;
  align-items: center;
  column-gap: 5px;
  padding-bottom: 10px;
}
`
export default MyDiv
