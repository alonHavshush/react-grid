import { DivGridView } from "./DivGrid/DivGridView";
import { DivGridSetting } from "./DivGrid/DivGridSetting";
import { LinkGridSetting } from "./LinkGrid/LinkGridSetting";
import { LinkGridView } from "./LinkGrid/LinkGridView";
import { DivGrid } from "../components/DivGrid/DivGrid";
import { LinkGrid } from "../components/LinkGrid/LinkGrid";

import { gridComponent } from '../interfaces/gridInterface';
import type React from "react";
import { ConnectDragSource } from "react-dnd";
import { ParagraphGrid } from "./ParagraphGrid/ParagraphGrid";
import { ParagraphGridSetting } from "./ParagraphGrid/ParagraphGridSetting";
import { ParagraphGridView } from "./ParagraphGrid/ParagraphGridView";

const ACCEPT_TYPE_DRAG = 'GIRD_COMPONENT';
// TODO: create global interface for all components
const factoryComponentGridView = (component: gridComponent) => {

  switch (component.ComponentName) {
    case DivGridSetting:
      console.log(`enter to factory func: ${component.ComponentName.name}`);
      return createComponentStructure(DivGridView, component.index, component.props);
      break;
    case LinkGridSetting:
      return createComponentStructure(LinkGridView, component.index, component.props);
      break;
    case ParagraphGridSetting:
      return createComponentStructure(ParagraphGridView, component.index, component.props);
      break;
    default:
      return createComponentStructure(null, undefined, {});

  }
}

const getComponentsList = (): gridComponent[] => {
  return [
    { 'ComponentName': DivGrid, 'props': { 'message': 'hello divGrid' }, index: undefined },
    { 'ComponentName': LinkGrid, 'props': { 'link': 'https://dynamicyield.com' }, index: undefined },
    { 'ComponentName': ParagraphGrid, 'props': { 'title': '', 'paragraph': '' }, index: undefined }
  ]
}


const createComponentStructure = (componentName: React.FC, index: number, props: object) => {
  return { 'ComponentName': componentName, 'index': index, 'props': props } as gridComponent;
}


const templateDragComponent = (drag: ConnectDragSource, explainComponent: string) => {

  return `
  <Grid container direction='row' justifyContent='center' alignItems='center' xs={12}>
      <Grid xs={6}>
        <div
          className="div-grid"
          ref=${drag}
          style={{
            opacity: isDragging ? 0.5 : 1,
            fontSize: 25,
            fontWeight: 'bold',
            cursor: 'move',
          }}
        >
          <Typography>
            ${explainComponent}
          </Typography>
        </div>
      </Grid>
    </Grid>
  `;
}





export {
  factoryComponentGridView,
  getComponentsList,
  templateDragComponent,
  ACCEPT_TYPE_DRAG
}