'use client';

import {Button, Typography} from '@mui/material';
import {decrement, increment, reset} from '@/redux/features/counterSlice';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {useGetUsersQuery} from '@/redux/services/userApi';

export default function Counter() {
  const count = useAppSelector(state => state.counterReducer.value);
  const dispatch = useAppDispatch();

  const {isLoading, isFetching, data, error} = useGetUsersQuery(null);

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
      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gap: 20,
          }}
        >
          {data.map(user => (
            <div key={user.id} style={{border: '1px solid #ccc', textAlign: 'center'}}>
              <img
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                style={{height: 180, width: 180}}
              />
              <h3>{user.name}</h3>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
