import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"



export const SideBar = ({ drawerWidth = 240 }) => {
    const cart = useSelector((state) => state.system.cart)
    
    const clearCart = () => { 

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
                        cart.map(text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                    <ListItemText primary={text.name}/>
                                    <ListItemText secondary={'somehting'}/>
                                  

                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
                <button onClick={clearCart}>Clear Shopping Cart</button>

            </Drawer>

        </Box>
    )
}
