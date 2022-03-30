import {createSlice} from '@reduxjs/toolkit';
export const chineseBookSlice=createSlice({
    name:"chineseBook",
    initialState:[
        {name:"红楼梦",count:3},
        {name:"西游记",count:3},
        {name:"三国演义",count:3},
    ],
    reducers:{
        add:(state,action)=>{
             state.map(item=>{
                console.log(action,item,'namename',state);
                if(item.name===action.payload){
                    item.count+=1;
                }
                return item;
            })
          
        },
        remove:(state,action)=>{
            state.map(item=>{
                console.log(action,item,'namename');
                if(item.name===action.payload){
                    item.count-=1;
                }
                return item;
            })
            
        }
    }
})
export const { add,remove} = chineseBookSlice.actions
export default chineseBookSlice.reducer

