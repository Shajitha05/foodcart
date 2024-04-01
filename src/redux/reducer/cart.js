import { createSlice } from "@reduxjs/toolkit";

export const cartslice =createSlice({
    name:'cart',
    initialState:{
        list:[],
    },
    reducers:{
        addItem :(state,{payload})=> {
            state.list =[...state.list,{...payload, count: 1 }];
        },
        removeItem: (state, {payload}) =>{
            const Index = state.list.findIndex(product => product.id ===payload.id);
            state.list = [
                ...state.list.slice(0,Index),
                ...state.list.slice(Index+1),
            ];
        },
        modifyItem: (state, { payload }) => {
            const Index = state.list.findIndex(product => product.id ===payload.id);
            state.list = [
                ...state.list.slice(0,Index),
                { ...state.list[Index], count:payload.count},
                ...state.list.slice(Index+1),
            ];
        },
    
    },
});

export const { addItem,removeItem,modifyItem }=cartslice.actions;
export default cartslice.reducer;