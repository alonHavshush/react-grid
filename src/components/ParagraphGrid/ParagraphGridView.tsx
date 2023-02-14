import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { ParagraphGridProps } from "../../interfaces/gridInterface";


const ParagraphGridView: React.FC<ParagraphGridProps> = ({ title, paragraph }) => {

  return (
    <Grid container direction={'column'}>
      <Grid>
        <h3>{title}</h3>
      </Grid>
      <Grid>
        <p>{paragraph}</p>
      </Grid>
    </Grid>
  )
}


export {
  ParagraphGridView
}