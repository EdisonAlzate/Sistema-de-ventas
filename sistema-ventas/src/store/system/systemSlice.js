import { createSlice, current } from "@reduxjs/toolkit";

export const systemSlice = createSlice({
    name: 'system',
    initialState: {
        products: [
            { id: 1, name: "Product:1", price: 100 },
            { id: 2, name: "Product:2", price: 200 },
            { id: 3, name: "Product:3", price: 300 },
            { id: 4, name: "Product:4", price: 400 },
            { id: 5, name: "Product:5", price: 500 },
            { id: 6, name: "Product:6", price: 600 },
        ],
        cart: [
        ]

    },
    reducers: {
        addProducts: (state, action) => {
            let newItem = current(state).products.find(product => product.id === action.payload)

            let itemInCart = current(state).cart.find(item => item.id === newItem.id)
            return itemInCart ? {
                ...state,
                cart: [...state.cart.map((item) =>
                    item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item)]
            } :
                {
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: 1 }],
                }

        },
        removeOneFromCart: (state, action) => {
            let itemToDelete = current(state).cart.find(item => item.id === action.payload)
            return itemToDelete.quantity > 1 ? {
                ...state,
                cart: state.cart.map(item => item.id === action.payload
                    ? { ...item, quantity: item.quantity - 1 }
                    : item)
            } : {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        },
        removeAllFromCart: (state, action) => {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        },
        clearCart: (state) => {
            // return current(state)
            // return {               
            //     cart: [],
            // }
        }
    }
});

export const { addProducts, removeOneFromCart, removeAllFromCart, clearCart } = systemSlice.actions;

