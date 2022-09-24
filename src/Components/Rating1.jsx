import React, { useState, useRef,useEffect } from 'react';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
// import CartContext from "../store/cart/store";
import { rating } from '../store/cart/actions';
import { useDispatch } from 'react-redux';
import zIndex from '@mui/material/styles/zIndex';
const Rating1 = ({
  precision = 1,
  totalStars = 5,
  emptyIcon = StarBorderIcon,
  filledIcon = StarIcon,
  id
}) => {
    // const { rating } = useContext(CartContext);
  const dispatch= useDispatch()
  const [activeStar, setActiveStar] = useState(-1);
  const [hoverActiveStar, setHoverActiveStar] = useState(-1);
  const [isHovered, setIsHovered] = useState(false);
  const ratingContainerRef = useRef(null);
//   console.log(activeStar,"activeStar")

  const calculateRating = (e) => {
    const { width, left } = ratingContainerRef.current.getBoundingClientRect();
    let percent = (e.clientX - left) / width;
    const numberInStars = percent * totalStars;
    const nearestNumber = Math.round((numberInStars + precision / 2) / precision) * precision;

    return Number(nearestNumber.toFixed(precision.toString().split('.')[1]?.length || 0));
  };

  const handleClick = (e) => {
    setIsHovered(false);
    setActiveStar(calculateRating(e));
    console.log("....", id,(calculateRating(e) ) )
    dispatch(rating(id,(calculateRating(e) )))
  };

  const handleMouseMove = (e) => {
    setIsHovered(true);
    setHoverActiveStar(calculateRating(e));
  };

  const handleMouseLeave = (e) => {
    setHoverActiveStar(-1); // Reset to default state
    setIsHovered(false);
  };
  const EmptyIcon = emptyIcon;
  const FilledIcon = filledIcon;

  return (
    <Box
      sx={{
        display: 'inline-flex',
        position: 'relative',
        cursor: 'pointer',
        textAlign: 'left',
        // zIndex:-1
      }}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={ratingContainerRef}
    >
      {[...new Array(totalStars)].map((arr, index) => {
        const activeState = isHovered ? hoverActiveStar : activeStar;

        const showEmptyIcon = activeState === -1 || activeState < index + 1;

        const isActiveRating = activeState !== 1;
        const isRatingWithPrecision = activeState % 1 !== 0;
        const isRatingEqualToIndex = Math.ceil(activeState) === index + 1;
        const showRatingWithPrecision =
          isActiveRating && isRatingWithPrecision && isRatingEqualToIndex;

        return (
          <Box
            position={'relative'}
            
            sx={{
              cursor: 'pointer',zIndex:-1
            }}
            key={index}
          >
            <Box
              sx={{
                width: showRatingWithPrecision ? `${(activeState % 1) * 100}%` : '0%',
                overflow: 'hidden',
                position: 'absolute',
              }}
            >
              <FilledIcon />
            </Box>
            {/*Note here */}
            <Box
              sx={{
                color: showEmptyIcon ? 'gray' : 'inherit'
              }}
            >
              {showEmptyIcon ? <EmptyIcon /> : <FilledIcon />}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Rating1;