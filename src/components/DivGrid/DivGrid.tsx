import React from "react";
import { useDrag } from 'react-dnd';
import { DivGridSetting } from "./DivGridSetting";
import { ACCEPT_TYPE_DRAG } from "../GirdService";
import { DivGridProps } from '../../interfaces/gridInterface';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import './DivGrid.css'


const DivGrid: React.FC<DivGridProps> = ({ message, index }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ACCEPT_TYPE_DRAG,
    canDrag: index === undefined,
    item: { 'ComponentName': DivGridSetting, index, 'props': { 'message': message, 'isDragged': false } },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    })
  }))


  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' xs={12}>
      <Grid xs={6}>
        <div
          className="div-grid"
          ref={drag}
          style={{
            opacity: isDragging ? 0.5 : 1,
            fontSize: 25,
            fontWeight: 'bold',
            cursor: 'move',
          }}
        >
          <Typography>
            create div
          </Typography>
        </div>
      </Grid>
    </Grid>
  );

}


export {
  DivGrid
}