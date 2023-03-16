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
                <h5>
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


// <Grid>
//                 <Typography fontSize={39} fontWeight='light'>Product 1</Typography>
//             </Grid>
//             <Grid item>
//                 <Button color="primary" sx={{ padding: 2 }}>
//                     <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
//                     Buy
//                 </Button>
//             </Grid>

//             <Grid container>



//                 <TextField
//                     type="text"
//                     variant="filled"
//                     fullWidth
//                     placeholder="Description Product 1"
//                     label="Description"
//                     sx={{ border: 'none', mb: 1 }}
//                 />
//                 <TextField
//                     type="text"
//                     variant="filled"
//                     fullWidth
//                     placeholder="How many units do you want to buy"
//                     label="Units"
//                     sx={{ border: 'none', mb: 1 }}
//                 />

               
//             </Grid>
//             <ImageGallery />