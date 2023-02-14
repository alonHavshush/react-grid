import React, { FC } from "react";
import { DivGridProps } from '../../interfaces/gridInterface';


const DivGridView: FC<DivGridProps> = ({ message }) => {

  return (
    <div className="div-grid-view">
      {message}
    </div>
  )
}


export {
  DivGridView
}