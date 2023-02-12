import React, { FC } from "react";
import { ChangeEvent } from "react";
import { useState } from "react";

interface DivGridViewProps {
  index: number;
  message: string;
}

const DivGridView: FC<DivGridViewProps> = (props) => {
  const [divGridViewItem, setDivGridViewItem] = useState<DivGridViewProps>({ ...props });

  const handleChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setDivGridViewItem((item) => {
      item.message = '';
      return item;
    });
  }
  return (
    <div>
      <input type="text" defaultValue={divGridViewItem.message} onChange={handleChangeMessage} />
    </div>
  )
}


export {
  DivGridView
}