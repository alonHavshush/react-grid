import React from "react";
import { LinkGridProps } from "../../interfaces/gridInterface";


const LinkGridView: React.FC<LinkGridProps> = ({ link, title, index }) => {

  return (
    <div>

      <a href={link} target="_blank" rel="noreferrer"> {title} </a>
    </div>
  )

}


export {
  LinkGridView
}