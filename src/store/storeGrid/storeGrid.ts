import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { gridComponent } from '../../interfaces/gridInterface';


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
    },
    updateComponent: (state, action: PayloadAction<{ index: number, props: object }>) => {
      state.gird.map((component: gridComponent) => {
        if (component.index === action.payload.index) {
          component.props = action.payload.props;
        }
        return component;
      })
    },
  },
})

export const { addComponent, removeComponent, updateComponent } = GridSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectGrid = (state: RootState) => state.grid;

export default GridSlice.reducer