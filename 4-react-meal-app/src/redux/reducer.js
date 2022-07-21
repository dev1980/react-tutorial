import { createReducer } from "@reduxjs/toolkit";



const initialState = {
    meals: [],
};

export const reducer = createReducer(initialState, {
    
    addMeal: (state, action)=>{
      state.meals = [...action.payload]
      
    }

    // increment: (state)=>{
    //     state.count += 1;
    // },

    // decrement: (state)=>{
    //     state.count -= 1;
    // },

    // increaseByAmount: (state, action) =>{
    //     state.count += action.payload;
    // },
})
