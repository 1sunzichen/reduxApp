import { configureStore } from '@reduxjs/toolkit';
import BookReducer from '../features/component/reducer';
import chineseBookSlice from '../features/component/BookSlice'
export const store = configureStore({
  reducer: {
    book: chineseBookSlice,
  },
});
//获取片段
// const chineseBook= state => state.book.filter(item=>item.type==="chinese")
// const EnglishBook= state => state.book.filter(item=>item.type==="english")
// console.log(chineseBook(store.getState()))

// console.log(EnglishBook(store.getState()))