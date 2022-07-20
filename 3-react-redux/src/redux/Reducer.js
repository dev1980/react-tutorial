import { createReducer } from "@reduxjs/toolkit";



const initialState = {
    count: 0,
};

export const reducer = createReducer(initialState, {
    increment: (state)=>{
        state.count += 1;
    },

    decrement: (state)=>{
        state.count -= 1;
    },

    increaseByAmount: (state, action) =>{
        state.count += action.payload;
    },
})
