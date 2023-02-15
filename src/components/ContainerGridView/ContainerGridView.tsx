import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React, { FC } from "react";
import { useAppSelector } from '../../hooks'
import { gridComponent } from "../../interfaces/gridInterface";
import './ContainerGridView.css';

const ContainerGridView: FC = () => {
  const gridSelector = useAppSelector((state) => state.grid);


  if (gridSelector.gird.length === 0) {
    return <div>empty view</div>;
  }

  return (
    <div className="container-view">
      <Grid container xs={12} alignContent={"flex-start"} >
        {

          gridSelector.gird.map((item: gridComponent, index) => {
            return (
              <Grid xs={12} m={1} key={index} >
                <item.ComponentName  {...item.props} />
              </Grid>
            )
          })

        }

      </Grid>
    </div>
  );
}




export {
  ContainerGridView
}