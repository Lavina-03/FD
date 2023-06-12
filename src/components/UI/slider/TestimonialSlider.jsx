import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../../assets/images/ava-1.jpg';
import ava02 from '../../../assets/images/ava-2.jpg';
import ava03 from '../../../assets/images/ava-3.jpg';
import ava04 from '../../../assets/images/ava-4.jpg';
import '../../../styles/slider.css';

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoPlay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className='review__text'>
          "I had a special dietary request, and the food delivery website accommodated it without any issues. Fantastic service!" 
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava01} alt='avatar' className=' rounded' />
          <h6>Grateful customer</h6>
        </div>
      </div>
      <div>
        <p className='review__text'>
          "The tracking feature was a game-changer. I could see exactly when my food would arrive.!"
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava02} alt='avatar' className='rounded' />
          <h6>Impressed customer</h6>
        </div>
      </div>
      <div>
        <p className='review__text'>
        "I love how easy it is to order from this food delivery website. It saves me so much time!"
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava03} alt='avatar' className=' rounded' />
          <h6>Happy customer</h6>
        </div>
      </div>
      <div>
        <p className='review__text'>
         "The customer service was exceptional. They went above and beyond to ensure my order was perfect."
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava04} alt='avatar' className=' rounded' />
          <h6>Delighted customer</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
