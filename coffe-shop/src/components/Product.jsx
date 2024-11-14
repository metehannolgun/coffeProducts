import React from 'react'
import { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';
import { Box, Stack, CircularProgress, Alert } from '@mui/material';
import StatusCode from '../utils/StatusCode';


function Product() {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector(state => state.products);


    useEffect(() => {
        //dispatch an action for fetchProducts
        dispatch(getProducts());
        //fetch("https://fake-coffee-api.vercel.app/api")
        //   .then(data => data.json())
        //    .then(result => {

        //      getProducts(result);
        //    })

    }, []);

    if (status === StatusCode.LOADING) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <Stack
                    sx={{ color: 'grey.500' }}
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <CircularProgress color="secondary" />
                    <CircularProgress color="success" />
                    <CircularProgress color="inherit" />
                </Stack>
            </Box>
        );


    }
    if (status === StatusCode.ERROR) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <Stack sx={{ width: '50%' }} spacing={2}>
                    <Alert variant="outlined" severity="error" sx={{ textAlign: 'center' }}>
                        Something went wrong. Please try again!!
                    </Alert>
                </Stack>
            </Box>


        )

    }


    const addToCard = (product => {
        //dispatch an add action

        dispatch(add(product))


    })


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
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {product.flavor_profile}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between', padding: '8px' }}>
                    <Button size="small" color="primary" onClick={() => addToCard(product)}>
                        Add to Cart
                    </Button>

                </CardActions>
            </Card>





        </div>



    ))





    return (
        <div>
            <h1>Product Dashboard</h1>
            <div className='row'>
                {cards}
            </div>

        </div>

    )
}

export default Product;