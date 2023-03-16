import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { removeAllFromCart, removeOneFromCart } from "../../store/system/systemSlice"



export const SideBar = ({ drawerWidth = 240 }) => {
    const cart = useSelector((state) => state.system.cart)
    const dispatch = useDispatch()

    const clearCart = () => {
        dispatch(clearCart)
    }
    const removeFromCart = (id, all = false) => {
        console.log(id, all)
        if (all) {
            dispatch(removeAllFromCart(id))
        } else {
            dispatch(removeOneFromCart(id))
        }
    }


    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent'//temporary
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MiuDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >

                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>Shopping Cart</Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                        cart.map((text,index) => (
                            <div className="itemCart" key={index}>
                                <ListItemText  primary={text.name} />
                                <h5>${text.price}.00 </h5>
                                <h5>X{text.quantity} Units</h5>
                                <h2>Total=${text.price * text.quantity}.00 </h2>
                                <button onClick={()=>removeFromCart(text.id)}>Delete One</button>
                                <button onClick={()=>removeFromCart(text.id,true)}>Delete All</button>

                            </div>
                        ))
                    }
                </List>
                {/*<h5>Total $</h5>*/}
                {/*<button onClick={clearCart}>Clear Shopping Cart</button>*/}

            </Drawer>

        </Box>
    )
}
