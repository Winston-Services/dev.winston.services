import { Button, Grid } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/counter";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Grid container spacing={4}>
      <Grid item>
        <Button onClick={() => dispatch(increment())} variant="contained">
          Increment
        </Button>
      </Grid>
      <Grid item>
        <span>{count}</span>
      </Grid>
      <Grid item>
        <Button onClick={() => dispatch(decrement())} variant="contained">
          Decrement
        </Button>
      </Grid>
    </Grid>
  );
}
