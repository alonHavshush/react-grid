import React from "react";
import { useDrag } from 'react-dnd';
import { LinkGridSetting } from "./LinkGridSetting";
import { ACCEPT_TYPE_DRAG } from "../GirdService";

interface LinkGridProps {
  index?: number;
  link: string
}


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
    <div
      className="link-grid"
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    > {link} </div>
  )
}


export {
  LinkGrid
}