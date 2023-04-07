import styled from 'styled-components'

const MyDiv = styled.div`
.list_users {
    padding: 15px;
    background: #F9F9F9;
    margin-bottom: 25px;
    display: block;
    text-decoration: none;
    border-radius: 6px;
  }
  .inner_list {
    display: flex;
    align-items: center;
    column-gap: 10px;
  }
  .inner_list img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
  }
  .list_row {
    display: flex;
    // align-items: center;
    padding-bottom: 5px;
  }
  .list_label {
    color: #f0cb47;
    font-size: 15px;
  }
  .list_data {
    color: #000;
    font-size: 15px;
    font-weight: 500;
  }
  .username {
    color: #122348;
    font-size: 18px;
    font-weight: 500;
  }
  .list_row svg{
    color: #f0cb47;
    font-size: 18px;
    margin-right: 5px;
  }
  .flex_box{
    margin-top: 15px;
    display: flex;
    align-items: center;
    column-gap: 30px;
  }
  .view_btn{
    background: #E3E3E3;
    border-radius: 6px;
    color: #122348;
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    width: 100%;
    display: block;
    text-align: center;
    padding: 8px 0px;
    margin-top: 20px;
  }
  .category_box{
    margin-top:20px;
  }
  .category_items{
    background: #f0cb47;
    color: #fff;
    font-size: 15px;
    font-family: "Proxima Nova";
    border-radius: 2px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
`
export default MyDiv
