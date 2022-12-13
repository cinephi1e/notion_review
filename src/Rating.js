import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { newReiviewFB } from './redux/modules/review'; 
export default function HalfRating() {
  
  const dispatch = useDispatch();
  const rating_ref = React.useRef(null);

  const addReview = () => {
      dispatch(newReiviewFB({rating: rating_ref.current.value}));
  };

  return (
    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={0.0} precision={0.5} size="small"
      style={{margin: '0 0 10px 0' }} onClick={addReview}
      ref={rating_ref} />
    </Stack>
  );
}