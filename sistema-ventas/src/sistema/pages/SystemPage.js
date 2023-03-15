
import { useDispatch, useSelector } from 'react-redux'
import { AddOutlined } from "@mui/icons-material"
import { Box, Grid, IconButton } from "@mui/material"
import { SystemLayout } from "../layout/SystemLayout"
import { NoteView } from "../views"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { startNewProduct } from '../../store/system/thunks'

export const SystemPage = () => {

  const products = useSelector((state) => state.system.products)

  const addToCart = (id) => { 
    console.log(id)
  }




  return (
    <SystemLayout>

      {/*<NothingSelectedView />*/}
      <article className="grid-responsive">
        {products.map(product => (
          <NoteView key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>

      <IconButton

        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </SystemLayout>
  )
}

