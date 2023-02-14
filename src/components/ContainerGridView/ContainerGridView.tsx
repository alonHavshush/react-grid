import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React, { FC } from "react";
import { useAppSelector } from '../../hooks'
import { gridComponent } from "../../interfaces/gridInterface";
import './ContainerGridView.css';

const ContainerGridView: FC = () => {
  const gridSelector = useAppSelector((state) => state.grid);

  console.log(gridSelector);
  return (
    <div className="container-view">
      <Grid container xs={12} alignContent={"flex-start"} >
        {
          gridSelector.gird.length > 0 ?
            (
              gridSelector.gird.map((item: gridComponent) => {
                return (
                  <>
                    <Grid xs={12} m={1} >
                      <item.ComponentName  {...item.props} />
                    </Grid>
                  </>
                )
              })
            ) :
            ('empty view')
        }

      </Grid>
    </div>
  );
}




export {
  ContainerGridView
}