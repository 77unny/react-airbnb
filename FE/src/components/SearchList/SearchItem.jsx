import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ItemWrapDiv = styled.div`
  width: ${props => `calc(${props.width} - 10px)`};
  margin: 10px 0 0 10px;
`;

const SearchItem = ({ contents, width }) => {
  const { thumbnailImages, superHost, location, grade, title, originalPrice, finalPrice } = contents;
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <ItemWrapDiv width={width}>
      <Slider {...settings}>
        {thumbnailImages.map((thumbnail, index) => (
          <img src={thumbnail} alt={title} key={index} />
        ))}
      </Slider>
      <div>
        <div>
          {superHost && <span>슈퍼호스트</span>}
          {location},{grade}
        </div>
        <div>{title}</div>
        <div>
          {originalPrice}
          {finalPrice}
        </div>
      </div>
    </ItemWrapDiv>
  );
};

export default SearchItem;
