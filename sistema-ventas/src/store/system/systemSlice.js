import { createSlice } from "@reduxjs/toolkit";

export const systemSlice=createSlice({
    name:'system',
    initialState:{
        isSaving:true,
        saveProduct:'',
        products:[
            {id:1,name:"Product1",price:100},
            {id:2,name:"Product2",price:200},
            {id:3,name:"Product3",price:300},
            {id:4,name:"Product4",price:400},
            {id:5,name:"Product5",price:500},
            {id:6,name:"Product6",price:600},
        ],
        cart:[        
        ],
        activeProduct:null
    },
    reducers:{
        addProducts:(state,action)=>{
            console.log(state)
        },
        removeOneFromCart:(state,action)=>{
            
        },
        removeAllFromCart:(state,action)=>{

        },
        clearCart:(state)=>{

        }
    }
});

export const {addProducts,removeOneFromCart,removeAllFromCart,clearCart}=systemSlice.actions;

