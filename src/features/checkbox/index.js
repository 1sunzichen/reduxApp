import { TextField,Button, List,ListItem } from '@mui/material';
import React,{useState} from 'react';
import SendIcon from '@mui/icons-material/Send';
import ListItemText from '@mui/material/ListItemText';

import { Delete } from '@mui/icons-material';
const TODOList=()=>{
    const [inputValue,setInputValue]=useState('');
    const [todoList,setTodoList]=useState([]);
    return(
        <div>      
            <TextField value={inputValue}  size="small" onChange={(e)=>{
                console.log(e.target.value);
                setInputValue(e.target.value);
                
            }}/>
            <Button variant="outlined" startIcon={<SendIcon />} onClick={()=>{
                setTodoList([inputValue,...todoList])
                setInputValue([]);
            }}>
                Sended
            </Button>
            <List>
                {todoList.map((item,index)=>{
                  return  <ListItem key={index} >
                                <ListItemText primary={item} style={{textIndent:"10px",width:"190px"}}/>
                                <Button variant="outlined" startIcon={<Delete />}
                                    onClick={()=>{
                                        setTodoList(todoList.filter((todo,i)=>i!==index))
                                    }}
                                >
                                    Delete
                                </Button>
                        </ListItem>
                })}
            </List>
        </div>

    )
}
export default TODOList;