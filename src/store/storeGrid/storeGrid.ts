import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import React from 'react'
import { RootState } from '../store';

interface gridComponent {
  'ComponentName': React.FC;
  index: number;
  'props': object;
}

// Define a type for the slice state
interface gridState {
  gird: Array<object>
}

// Define the initial state using that type
const initialState: gridState = {
  gird: [],
}


export const GridSlice = createSlice({
  name: 'grid',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addComponent: (state, action: PayloadAction<gridComponent>) => {
      state.gird.push(action.payload);
    },
    removeComponent: (state, action: PayloadAction<gridComponent>) => {
      console.log(state, action.payload.index, 'need to remove');
    },
  },
})

export const { addComponent, removeComponent } = GridSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectGrid = (state: RootState) => state.grid;

export default GridSlice.reducer