import React from 'react';
import { useGetProductsByCategoryQuery } from '../../redux/apiSlice';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Typography } from '@mui/material';

const CategoryPage = ({ category }) => {
  const { data: products, error, isLoading } = useGetProductsByCategoryQuery(category);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Typography variant="h2">{category.toUpperCase()}</Typography>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={10}
        autoplay={true}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {products.map(product => (
          <SwiperSlide key={product.id}>
            <div style={{ maxWidth: '350px', maxHeight: 'auto', margin: '0 auto', border:'1px solid lightgray', padding:'40px', borderRadius:'10px' }}>
              <img src={product.image} alt={product.title} style={{ maxWidth: '100%', maxHeight: '200px' }} />
              <Typography variant="subtitle1" style={{fontWeight:'700', color:'green'}}>{product.title}</Typography>
              <Typography variant="body2" style={{fontWeight:'700', color:'red'}}>{product.price} $</Typography>
              <Typography variant="body2">{product.description}</Typography>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryPage;
