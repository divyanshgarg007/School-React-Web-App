import styled from 'styled-components'

const MyDiv = styled.div`
height: 450px;
    overflow-y: scroll;
.filter_box{
    margin:20px 0px;
}
.filter_box:first-child{
    margin:0px 0px 20px 0px;
}
.label_name {
    font-size: 18px;
    font-weight: 600;
    border-bottom: 2px solid #f0cb47;
    display: inline;
    padding-bottom:4px;
}
.category_name{
    font-size: 18px;
    font-weight: 500;
    background: #F7F8FA;
    padding: 7px 10px;
    color: #f0cb47;
}
.filter_items span{
    font-size: 15px;
    font-weight: 500;
}
.filter_items .Mui-checked {
    color: #f0cb47;
}
.data_list{
    padding-left: 10px;
}
`
export default MyDiv
