import React from "react";
import { useDrag } from 'react-dnd';
import { LinkGridSetting } from "./LinkGridSetting";
import { ACCEPT_TYPE_DRAG } from "../GirdService";
import { LinkGridProps } from "../../interfaces/gridInterface";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

const LinkGrid: React.FC<LinkGridProps> = ({ link, index }) => {

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ACCEPT_TYPE_DRAG,
    canDrag: index === undefined,
    item: { 'ComponentName': LinkGridSetting, index, 'props': { 'link': link, 'isDragged': false } },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    })
  }))

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' xs={12}>
      <Grid xs={6}>
        <div
          className="link-grid"
          ref={drag}
          style={{
            opacity: isDragging ? 0.5 : 1,
            fontSize: 25,
            fontWeight: 'bold',
            cursor: 'move',
          }}
        >

          <Typography>
            create link
          </Typography>

        </div >
      </Grid>
    </Grid >
  )
}


export {
  LinkGrid
}