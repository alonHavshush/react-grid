import React, { FC } from "react";
interface DivGridViewProps {
  index: number;
  message: string;
}

const DivGridView: FC<DivGridViewProps> = ({ message }) => {

  return (
    <div className="div-grid-view">
      {message}
    </div>
  )
}


export {
  DivGridView
}