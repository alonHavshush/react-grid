import React from "react";


interface LinkGridViewProps {
  index: number;
  link: string;
  title: string;
}



const LinkGridView: React.FC<LinkGridViewProps> = ({ link, title, index }) => {

  return (
    <div>

      <a href={link} target="_blank" rel="noreferrer"> {title} </a>
    </div>
  )

}


export {
  LinkGridView
}