'use client';

import {Button, Typography} from '@mui/material';
import {decrement, increment, reset} from '@/redux/features/counterSlice';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {useGetNewsfeedQuery} from '@/redux/services/userApi';

export default function Counter() {
  const count = useAppSelector(state => state.counterReducer.value);
  const dispatch = useAppDispatch();

  const {isLoading, isFetching, data, error} = useGetNewsfeedQuery(null);

  return (
    <div style={{marginBottom: '4rem', textAlign: 'center'}}>
      <Typography component="h1" variant="h4">
        {count}
      </Typography>
      <Button onClick={() => dispatch(increment())}>increment</Button>
      <Button onClick={() => dispatch(decrement())} style={{marginInline: 16}}>
        decrement
      </Button>
      <Button onClick={() => dispatch(reset())}>reset</Button>
    </div>
  );
}
