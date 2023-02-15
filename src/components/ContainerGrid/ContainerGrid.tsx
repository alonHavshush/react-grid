import React, { FC } from "react";
import { useState } from "react";
import { useDrop } from 'react-dnd'
import './ContainerGrid.css';
import { factoryComponentGridView, ACCEPT_TYPE_DRAG } from '../GirdService';


import { useAppDispatch } from '../../hooks'
import { addComponent } from '../../store/'
import Grid from "@mui/material/Unstable_Grid2/Grid2";



const ContainerGrid: FC = () => {
  const [items, setItems] = useState([]);
  const dispatch = useAppDispatch()

  const [{ result }, drop] = useDrop(() => ({
    accept: ACCEPT_TYPE_DRAG,
    drop: (item) => item,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      result: monitor.getItem(),
    }),
  }))

  /// TODO: change any of item props
  const handleDrop = (item: any) => {
    handleDropAddItem(item);
  };

  const handleDropAddItem = (item: any) => {
    item.index = items.length;
    const viewComponent = factoryComponentGridView(item);
    if (viewComponent.ComponentName) {
      setItems(arr => [...arr, item]);
      dispatch(addComponent(viewComponent));
    } else {
      throw Error('miss definition in factoryComponentGridView ')
    }
  }



  return (
    <Grid container p={3} alignContent={"flex-start"} className="container-grid" ref={drop} onDrop={() => handleDrop(result)} >
      {items.length === 0 ? <div className="c-white">Drag a box here</div> : ''}
      {
        items.map((item, index) => {
          return (
            <Grid xs={12} key={index} p={1}  >
              <item.ComponentName  {...item.props} index={item.index} />
            </Grid>

          )
        })
      }
    </Grid >
  )
}

export {
  ContainerGrid
}