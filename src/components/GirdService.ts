import { DivGridView } from "./DivGrid/DivGridView";
import { DivGridSetting } from "./DivGrid/DivGridSetting";
import { LinkGridSetting } from "./LinkGrid/LinkGridSetting";
import { LinkGridView } from "./LinkGrid/LinkGridView";
import { DivGrid } from "../components/DivGrid/DivGrid";
import { LinkGrid } from "../components/LinkGrid/LinkGrid";

import { gridComponent } from '../interfaces/gridInterface';
import type React from "react";

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

  }
}

const getComponentsList = (): gridComponent[] => {
  return [
    { 'ComponentName': DivGrid, 'props': { 'message': 'hello divGrid' }, index: undefined },
    { 'ComponentName': LinkGrid, 'props': { 'link': 'https://dynamicyield.com' }, index: undefined }
  ]
}


const createComponentStructure = (componentName: React.FC, index: number, props: object) => {
  return { 'ComponentName': componentName, 'index': index, 'props': props } as gridComponent;
}






export {
  factoryComponentGridView,
  getComponentsList,
  ACCEPT_TYPE_DRAG
}