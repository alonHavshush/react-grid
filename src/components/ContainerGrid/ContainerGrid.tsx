import React, { FC } from "react";
import { useState } from "react";
import { useDrop } from 'react-dnd'
import './ContainerGrid.css';

import { useAppSelector, useAppDispatch } from '../../hooks'

import { addComponent } from '../../store/'

const TypeDivGrid = "DivGrid";

const ContainerGrid: FC = () => {
  const [items, setItems] = useState([]);
  const gridStoreSelect = useAppSelector((state) => state.grid)
  const dispatch = useAppDispatch()

  const [{ canDrop, isOver, result }, drop] = useDrop(() => ({
    accept: TypeDivGrid,
    drop: (item) => item,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      result: monitor.getItem(),
    }),
  }))

  const isActive = canDrop && isOver

  /// TODO: change any of item props
  const handleDrop = (item: any) => {
    handleDropAddItem(item);
    // if (item.props.index) {
    //   handleDropAddSort(item);
    // } else {
    //   handleDropAddItem(item);
    // }

  };

  const handleDropAddItem = (item: any) => {

    setItems(arr => [...arr, item]);
    console.log(`list of items: ${items.length} : item: ${JSON.stringify(item.props)}`);
    dispatch(addComponent(item));
  }

  const handleDropAddSort = (item: any) => {

    console.log(`sort item ${item.props.index} called: ${item.props.message}`);

  }



  console.log(gridStoreSelect);

  return (
    <div className="container-grid" ref={drop} onDrop={() => handleDrop(result)} >
      {isActive ? 'Release to drop' : 'Drag a box here'}

      <div className="items" >
        {
          items.map((item, index) => {
            return (
              <>
                <span key={index} >
                  <item.ComponentName key={index} {...item.props} />
                </span>
                <br />
              </>
            )
          })
        }
      </div >
    </div >
  )
}

export {
  ContainerGrid
}