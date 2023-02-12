import React from "react";
import { DivGrid } from "./components/DivGrid/DivGrid";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { ContainerGrid } from './components/ContainerGrid/ContainerGrid';

const config = [
  { 'ComponentName': DivGrid, 'props': { 'message': 'hello divGrid' } },
  { 'ComponentName': DivGrid, 'props': { 'message': 'hiiiii' } },
  { 'ComponentName': DivGrid, 'props': { 'message': 'start know React' } },
];

const App: React.FC = () => {
  return (
    <>
      <h1> Build Grid </h1>
      <DndProvider backend={HTML5Backend}>
        {config.map((Component, index) => {
          console.log(Component);

          return <Component.ComponentName {...Component.props} key={index} />;
        })}

        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <ContainerGrid />
        </div>
      </DndProvider>

    </>
  )
};

export {
  App
}