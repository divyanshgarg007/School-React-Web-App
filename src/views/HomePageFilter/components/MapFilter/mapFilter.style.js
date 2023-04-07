import styled from 'styled-components'

const MyDiv = styled.div`
.icon_box{
  position: absolute;
  top: 0px;
  right: 0px;
}
.icn_btn svg{
  width: 14px;
}
.view_btn{
  background: #fffff;
  color: #000000;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  width: 95%;
  font-family: "Arial";
  display: block;
  padding: 8px 0px;
  margin-left: auto;
  margin-right: auto;
}
.flex_child{
  display: flex;
  align-items: center;
  column-gap: 5px;
}
.flex_box{
  text-decoration: none;
  display: flex;
  align-items: center;
  column-gap: 30px;
  padding: 10px;
}
.category_items{
  background: #f0cb47;
  color: #000000;
  font-size: 15px;
  font-family: "Proxima Nova";
  border-radius: 2px;
  margin-right: 10px;
  margin-bottom: 10px;
}
.category_box{
  padding: 10px;
}
.btn_hide{
  top: 8px;
    right: 8px;
  position: absolute;
}
.btn_hide svg{
  color: #f0cb47;
}
.filter_items span{
  font-size: 15px;
  font-weight: 500;
}
.filter_items .Mui-checked {
  color: #f0cb47;
}
.filter_items span{
  font-size: 15px;
  font-weight: 500;
}
.filter_items .Mui-checked {
  color: #f0cb47;
}
  .icn_btn {
    color: #f0cb47;
    width: 25px;
    height: 25px;
  }
  .main_grid {
    margin-bottom: 24px;
    height: 95vh;
  }
  .list_users {
    border-bottom: 1px solid #eee;
    padding: 15px;
    display: block;
    text-decoration: none;
  }
  .profile_img{
    width:30%;
  }
  .inner_list {
    width: 100%;
  }
  .list_items{
    width: 70%;
  }
  .list_users2 {
    position: relative;
    margin-bottom: 0;
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
  .map_list {
    padding: 15px;
    display: block;
    text-decoration: none;
    display: grid;
    align-items: center;
    column-gap: 10px;
  }
  .map_list img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
  }
  .flex_details{
    display: flex;
    column-gap: 16px;
  }
  .list_row {
    display: flex;
    align-items: center;
    padding-bottom: 5px;
  }
    .list_row svg{
    color: #f0cb47;
    font-size: 18px;
    margin-right: 5px;
  }
  .list_row2 {
    display: flex;
    align-items: center;
    column-gap: 250px;
  }
    .list_row2 svg{
    color: #f0cb47;
    font-size: 18px;
    margin-right: 5px;
  }
  .list_label {
    color: #000000;
    font-size: 14px;
    font-weight: 600;
  }
  .list_data {
    color: #000;
    font-size: 14px;
    font-weight: 400;
    padding-left: 5px;
  }
  .username {
    color: #000!important;
    font-size: 18px;
    padding-bottom: 6px;
  }
  .user_count {
    border-bottom: 1px solid #eee;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .count {
    color: #000;
    font-size: 24px;
    font-weight: 500;
  }
  .user_count svg {
    color: #f0cb47;
  }
  .select_menu {
    height: 40px;
    background-color: #ffffff;
    border-radius: 2px;
  }
  .filter_wrapper {
    display: flex;
    align-items: center;
    column-gap: 10px;
        padding: 12px 12px;
  }
  .text_box{
    width: 100%;
  }
  .select_menu .MuiSelect-select {
    color: #000;
    font-size: 12px;
    padding: 0 0 0 8px;
  }
  .select_menu svg {
    right: 0 !important;
  }
  .search input {
    color: #000;
    font-size: 14px;
    padding: 11px 0px 11px 8px;
  }
  .search svg {
    color: #f0cb47;
    margin-right: -7px;
  }
  .h-100 {
    height: 100%;
  }
  .overflow {
    overflow-y: scroll;
    height: 100%;
  }
  .d-none {
    display: none;
  }
  .expand {
    position: absolute;
    z-index: 1111;
    background: #fff;
    color: #f0cb47;
    top: 115px;
    left: 5px;
  }
  .expand:hover {
    background: #fff;
  }
  .map_container {
    position: relative;
    height: 100%;
  }
  .map_styles {
    width: 100%;
    height: 100vh;
  }
  .mapboxgl-ctrl-logo {
    display: none;
  }
  .mapboxgl-ctrl,
  .mapboxgl-ctrl-attrib {
    display: none;
  }
  .active_list_users {
    // background-color: #e0f0ff;
    border-bottom: 1px solid #eee;
    padding: 15px;
    display: block;
    text-decoration: none;
  }
  .filter_btn{
    font-family: "Arial";
    font-size: 15px;
    font-weight: 400;
    color: #ffffff;
    background-color: #f0cb47;
    border-radius: 5px;
    text-transform: capitalize;
    width: 100%;
}
.filter_btn: hover{
    color: #ffffff;
    background-color: #f0cb47;
}
.nav_btn{
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
  color: #000000;
  background-color: #f0cb47;
}
.nav_btn: hover{
  color: #000000;
  background-color: #f0cb47;
  color: #ffffff;
}
.menu_container{
  position: absolute;
  width:100%;
  z-index: 1111;
  right: 0;
  top: 0;
}
.menu_wrapper{
    background-color: rgba(0,0,0,0.9);
    color: #FFFFFF;
    padding: 60px 100px;
    height: 90vh;
    overflow-y: auto;
    overflow-x: hidden;
}
.btn-close{
  font-family: Arial;
      font-size: 14px;
      font-weight: 400;
      color: #f0cb47;
      background-color: transparent;
      border: 1px solid #fff;
      border-radius: 5px;
      text-transform: capitalize;
}
.btn-close:hover{
      background-color: transparent;
      text-transform: capitalize;
}
.btn-green{

  font-family: Arial;
  font-size: 14px;
  font-weight: 400;
  color: #FFFFFF;
  background-color: #f0cb47;
  border-radius: 5px;
  text-transform: capitalize;
}
.btn-green:hover{
  color: #FFFFFF;
  background-color: #f0cb47;
} 
.selected_items{
  display:flex;
  align-items:center;
  column-gap: 4px;
}
.category_list{
  width: 100%;
  margin: 35px 10px;
}
.menu_box{
  padding: 0px;
  margin-bottom:50px;
}
.subctegory_items{
  padding: 0px 5px!important;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 8px;
  display: inline-block;
}
.subctegory_items:hover {
  color: #FFFFFF;
  background-color: #f0cb47;
}
.menu_items{
  font-family: "Proxima Nova";
  font-weight: 500px;
  font-size: 14px;
  color: #0F1350;
  border-radius: 0px;
  background-color: #ffffff;
  width: 128px;
  height: 32px;
  margin: 8px;
}
.menu_items fieldset{
  border-color: #d9d9d9;
  border-radius: 0px;
}
.filters_box{
  display: flex;
  align-items: center;
}
`
export default MyDiv
