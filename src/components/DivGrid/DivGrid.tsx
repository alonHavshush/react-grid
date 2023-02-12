import React from "react";
import { useDrag } from 'react-dnd';
import { DivGridSetting } from "./DivGridSetting";

import './DivGrid.css'

interface DivGridProps {
  index?: number;
  message: string
}


const TypeDivGrid = "DivGrid";



const DivGrid: React.FC<DivGridProps> = ({ message, index }) => {
  console.log(Boolean(index));
  const [{ isDragging }, drag] = useDrag(() => ({
    type: TypeDivGrid,
    canDrag: index === undefined,
    item: { 'ComponentName': DivGridSetting, 'props': { 'message': message, 'isDragged': false } },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    })
  }))


  return (
    <div
      className="div-grid"
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    > {message} </div>
  );

}


export {
  DivGrid
}