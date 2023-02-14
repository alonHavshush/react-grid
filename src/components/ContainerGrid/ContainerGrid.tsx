import React, { FC } from "react";
import { useState } from "react";
import { useDrop } from 'react-dnd'
import './ContainerGrid.css';
import { factoryComponentGridView, ACCEPT_TYPE_DRAG } from '../GirdService';


import { useAppSelector, useAppDispatch } from '../../hooks'
import { addComponent } from '../../store/'
import Grid from "@mui/material/Unstable_Grid2/Grid2";



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
    const viewComponent = factoryComponentGridView(item);
    if (viewComponent.ComponentName) {
      setItems(arr => [...arr, item]);
      console.log(`list of items: ${items.length} : item: ${JSON.stringify(item.props)}`);
      dispatch(addComponent(viewComponent));
    } else {
      throw Error('miss definition in factoryComponentGridView ')
    }
  }

  const handleDropAddSort = (item: any) => {

    console.log(`sort item ${item.props.index} called: ${item.props.message}`);

  }


  return (
    <Grid container p={3} alignContent={"flex-start"} className="container-grid" ref={drop} onDrop={() => handleDrop(result)} >
      {items.length === 0 ? 'Drag a box here' : ''}
      {
        items.map((item, index) => {
          return (
            <>
              <Grid xs={12} key={index} p={1} >
                <item.ComponentName key={index}  {...item.props} index={item.index} />
              </Grid>
            </>
          )
        })
      }
    </Grid >
  )
}

export {
  ContainerGrid
}