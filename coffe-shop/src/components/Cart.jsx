import { useSelector } from 'react-redux'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice'
import { remove } from '../store/cartSlice';






const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart);
    const removeToCart = (id) => {
        //dispatch a remove action
        dispatch(remove(id));
    }
    const cards = products.map(product => (
        <div className='col-md-4' key={product.id}>
            <Card sx={{ maxWidth: 345, marginBottom: '50px' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={product.image_url}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.name}
                            <div>{product.price} $ </div>
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {product.flavor_profile}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between', padding: '8px' }}>
                    <Button size="small" color="primary" onClick={() => removeToCart(product.id)}>
                        Remove Item
                    </Button>

                </CardActions>
            </Card>





        </div >


    ))




    return (
        <div>
            <div className='row'>
                {cards}
            </div>
        </div>
    )

}




export default Cart