
import { Button, List,ListItem } from '@mui/material';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import {add,remove} from './BookSlice';
// 还书
const addBook=(text)=>{
    return {
        type:'addChineseBook',
        payload:text
    }
}
//借书
const deleBook=(text)=>{
    return {
        type:'removeChineseBook',
        payload:text
    }
}
//获取中国书的列表
const getBookList=()=>{
    return {
        type:'chinese',
    }
}

function Booklist() {
    // State: a counter value
    const dispatch = useDispatch()
    // const [bookList,setBookList]=React.useState(
    //     [
    //         {name:"红楼梦",count:3},
    //         {name:"西游记",count:3},
    //         {name:"三国演义",count:3}
    //     ]);
    // const bookList=useSelector(state=>state.book.filter(item=>item.type==="chinese"))[0].list
    const bookList=useSelector(state=>state.book)
    // View: UI 定义
    console.log(bookList,'bookList');
    return (
      <div>
        <List>
            {bookList.map((item,index)=>{
               return  <ListItem key={index}><Button  onClick={()=>{
                   dispatch(remove(item.name))
               }}>借书-</Button>{item.name} {item.count}<Button onClick={()=>{ dispatch(add(item.name))}}>还书+</Button></ListItem>
            })}
        </List>
      </div>
    )
  }
  export default Booklist