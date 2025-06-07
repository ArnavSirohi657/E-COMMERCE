import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';

export default function AmazonProduct({image,para,price}) {
  const [value, setValue] = React.useState(4.3);

  return (
    <Card
      sx={{
        width: 220,
        p: 1.5,
        borderRadius: 2,
        border: '1px solid #ddd',
        boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
        '&:hover': {
          boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
        },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 'auto',
        bgcolor: '#fff',
      }}
    >
      {/* Bestseller Badge */}
      <Box
        sx={{
          position: 'absolute',
          top: 8,
          left: 8,
          backgroundColor: '#ffa41c',
          color: '#111',
          px: 1,
          py: 0.3,
          fontSize: '12px',
          borderRadius: 1,
          fontWeight: 600,
        }}
      >
        #1 Best Seller
      </Box>

      {/* Product Image */}
      <CardMedia
        component="img"
        image={image}
        alt="Product"
        sx={{
          height: 160,
          objectFit: 'contain',
          mt: 3,
          mb: 2, // ⬅ Add space between image and text
        }}
      />

      {/* Product Info */}
      <CardContent sx={{ p: 0 }}>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            fontSize: '0.9rem',
            lineHeight: 1.4,
            color: '#007185',
            cursor: 'pointer',
            transition: '0.2s',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          {para}
        </Typography>

        {/* Rating */}
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.8 }}>
          <Rating
            name="read-only"
            value={value}
            precision={0.1}
            readOnly
            size="small"
            sx={{ color: '#ffa41c' }}
          />
          <Typography variant="caption" sx={{ ml: 0.6, fontSize: '12px', color: '#555' }}>
            ({value}) 1,245
          </Typography>
        </Box>

        {/* Price */}
        <Typography
          variant="body1"
          sx={{
            fontWeight: 600,
            mt: 1,
            color: '#B12704',
            fontSize: '1rem',
          }}
        >
          {price}
        </Typography>
      </CardContent>

      {/* Add to Cart */}
      <Box sx={{ mt: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton
          aria-label="add to cart"
          size="small"
          sx={{
            color: '#555',
            transition: '0.2s',
            '&:hover': { color: '#111' },
          }}
        >
          <ShoppingCartIcon fontSize="small" />
        </IconButton>
      </Box>
    </Card>
  );
}
