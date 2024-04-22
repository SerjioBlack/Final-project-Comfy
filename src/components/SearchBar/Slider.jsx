import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={30}
      autoplay={true}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src="src/assets/33.PNG" /></SwiperSlide>
      <SwiperSlide><img src="src/assets/22.PNG" /></SwiperSlide>
      <SwiperSlide><img src="src/assets/11.PNG" /></SwiperSlide>
      <SwiperSlide><img src="src/assets/44.PNG" /></SwiperSlide>
      <SwiperSlide><img src="src/assets/55.PNG" /></SwiperSlide>
      <SwiperSlide><img src="src/assets/66.PNG" /></SwiperSlide>
      ...
    </Swiper>
  );
};