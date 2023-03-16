import { ConstructionOutlined, SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography,Box } from "@mui/material"
import { useEffect, useReducer } from "react"
import { useDispatch, useSelector } from "react-redux"
import { systemSlice } from "../../store/system/systemSlice"
import { startNewProduct } from "../../store/system/thunks"
import { ImageGallery } from "../components/ImageGallery"
import {
    createSlice,
    current
} from '@reduxjs/toolkit';



export const NoteView = ({data,addToCart}) => {

    const {id,name,price}=data
   

    return (
        <>
        <div className="box">
        
        <Grid container direction='row' justifyContent='space-between' sx={{ mb: 1 }} alignItems='center'>
            <Grid item>
            <Box>
                <h4>
                {name}
                </h4>
                <h5>Price:
                ${price}.00            
                </h5>
                </Box>
            </Grid>
        </Grid>
                  
           
        <button onClick={()=>addToCart(id)}>
        Add To Shopping Cart
        </button>
        </div>

        </>
    )
}

