import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"


export const NoteView = () => {
    return (
        <Grid container direction='row' justifyContent='space-between' sx={{ mb: 1 }} alignItems='center'>
            <Grid>
                <Typography fontSize={39} fontWeight='light'>Product 1</Typography>
            </Grid>
            <Grid item>
                <Button color="primary" sx={{padding:2}}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />                    
                    Buy
                </Button>
            </Grid>

            <Grid container>
            <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="Description Product 1"
            label="Description"
            sx={{border:'none',mb:1}}
            />
            <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="How many units do you want to buy"
            label="Units"
            sx={{border:'none',mb:1}}
            />
            </Grid>
            <ImageGallery/>

        </Grid>
    )
}
