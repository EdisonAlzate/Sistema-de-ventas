import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"



export const SideBar = ({ drawerWidth = 240 }) => {
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
                        [
                            { id: "1", name: "Product1", descriptcion: "Description", cost: "5.0" },
                            { id: "2", name: "Product2", descriptcion: "Description", cost: "7.0" }
                        ].map(text => (
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

            </Drawer>

        </Box>
    )
}
