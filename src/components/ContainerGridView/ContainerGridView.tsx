import React, { FC } from "react";
import { useAppSelector } from '../../hooks'
import { gridComponent } from "../../interfaces/gridInterface";
import './ContainerGridView.css';

const ContainerGridView: FC = () => {
  const gridSelector = useAppSelector((state) => state.grid);

  console.log(gridSelector);
  return (
    <div className="container-view">
      {
        gridSelector.gird.length > 0 ?
          (
            gridSelector.gird.map((item: gridComponent) => {
              return <item.ComponentName  {...item.props} />
            })
          ) :
          ('empty view')
      }

    </div>
  );
}




export {
  ContainerGridView
}