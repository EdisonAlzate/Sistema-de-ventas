import { createSlice, current } from "@reduxjs/toolkit";

export const systemSlice=createSlice({
    name:'system',
    initialState:{
            products:[
            {id:1,name:"Product1",price:100},
            {id:2,name:"Product2",price:200},
            {id:3,name:"Product3",price:300},
            {id:4,name:"Product4",price:400},
            {id:5,name:"Product5",price:500},
            {id:6,name:"Product6",price:600},
        ],
        cart:[     
        ]
      
    },
    reducers:{
        addProducts:(state,action)=>{      
           let newItem=current(state).products.find(product=>product.id===action.payload)
           console.log("newItem",newItem);
           return{
            ...state,
            cart:[...state.cart,newItem],
           }
      
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

