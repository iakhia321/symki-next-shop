import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export const ProductCard = ({ product }) => {
 return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <CardMedia
        component="img"
        height="300"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to cart
        </Button>
      </CardActions>
    </Card>
 );
};

const ProductList = ({ products }) => {
 return (
    <div style={{ display: 'flex', gap: '16px', marginLeft: '10px' }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
 );
};

export default ProductList;