import React from "react";

import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { ContainerGrid } from './components/ContainerGrid/ContainerGrid';
import { ContainerGridView } from "./components/ContainerGridView/ContainerGridView";
import { getComponentsList } from "./components/GirdService";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Unstable_Grid2';

import './App.css';
const config = getComponentsList();

const App: React.FC = () => {
  return (
    <>
      <h1>  Grid Builder  </h1>
      <DndProvider backend={HTML5Backend}>
        <Grid container spacing={2} className="components-list">
          {config.map((Component, index) => {
            return (
              <Grid key={`${Component.ComponentName.name}-${index}`}>
                <Card >
                  <CardActions>
                    <Component.ComponentName {...Component.props} />
                  </CardActions>
                </Card>
              </Grid>
            )
          })}
        </Grid>
        <Grid container xs={12} >
          <Grid xs={6} p={1} >
            <ContainerGrid />
          </Grid>
          <Grid xs={6} p={1} >
            <ContainerGridView />
          </Grid>
        </Grid>
      </DndProvider>

    </>
  )
};

export {
  App
}