import React, { FC } from "react";
import { useState } from "react";
import { useDrop } from 'react-dnd'
import './ContainerGrid.css';
import { factoryComponentGridView, ACCEPT_TYPE_DRAG } from '../GirdService';

import { useAppSelector, useAppDispatch } from '../../hooks'
import { addComponent } from '../../store/'



const ContainerGrid: FC = () => {
  const [items, setItems] = useState([]);
  const dispatch = useAppDispatch()

  const [{ canDrop, isOver, result }, drop] = useDrop(() => ({
    accept: ACCEPT_TYPE_DRAG,
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
    item.index = items.length;
    setItems(arr => [...arr, item]);
    console.log(`list of items: ${items.length} : item: ${JSON.stringify(item.props)}`);
    dispatch(addComponent(factoryComponentGridView(item)));
  }

  const handleDropAddSort = (item: any) => {

    console.log(`sort item ${item.props.index} called: ${item.props.message}`);

  }


  return (
    <div className="container-grid" ref={drop} onDrop={() => handleDrop(result)} >
      {isActive ? 'Release to drop' : 'Drag a box here'}

      <div className="items" >
        {
          items.map((item, index) => {
            return (
              <>
                <span key={index} >

                  <item.ComponentName key={index}  {...item.props} index={item.index} />
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