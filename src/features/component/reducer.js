import aaa from './BookSlice'
const BookList=[
    {
        type:"chinese",
        list:[
            {name:"红楼梦",count:3},
            {name:"三国演义",count:3},
            {name:"西游记",count:3},
        ]
    },
    {
        type:"english",
        list:[
            {name:"茶花女",count:3},
        ]
    }
]


function BookReducer(state = BookList, action) {
    console.log(aaa,action,'action');
    // 检查 reducer 是否关心这个 action
    // 返回原来的 state 不变
    return state
}
export default BookReducer