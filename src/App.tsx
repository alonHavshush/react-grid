import React from "react";

import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { ContainerGrid } from './components/ContainerGrid/ContainerGrid';
import { ContainerGridView } from "./components/ContainerGridView/ContainerGridView";
import { getComponentsList } from "./components/GirdService";

const config = getComponentsList();

const App: React.FC = () => {
  return (
    <>
      <h1> Build Grid </h1>
      <DndProvider backend={HTML5Backend}>
        {config.map((Component, index) => {
          return <Component.ComponentName {...Component.props} key={index} />;
        })}

        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <ContainerGrid />
          <ContainerGridView />
        </div>
      </DndProvider>

    </>
  )
};

export {
  App
}