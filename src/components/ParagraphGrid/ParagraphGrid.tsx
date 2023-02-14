import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React, { FC } from "react";
import { useDrag } from "react-dnd";
import { ParagraphGridProps } from "../../interfaces/gridInterface";
import { templateDragComponent, ACCEPT_TYPE_DRAG } from "../GirdService";
import { ParagraphGridSetting } from './ParagraphGridSetting';

const ParagraphGrid: React.FC<ParagraphGridProps> = ({ title, paragraph }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ACCEPT_TYPE_DRAG,
    item: { 'ComponentName': ParagraphGridSetting, index: null, 'props': {} },
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
            create Paragraph
          </Typography>
        </div>
      </Grid>
    </Grid>
  )
}


export {
  ParagraphGrid
}