import React, { useState, ChangeEvent, FC } from "react";

interface DivGridSettingProps {
  index: number;
  message: string
}

const DivGridSetting: FC<DivGridSettingProps> = (props) => {
  const [divGridSettingItem, setDivGridSettingItem] = useState<DivGridSettingProps>({ ...props });

  const handleChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setDivGridSettingItem((item) => {
      item.message = '';
      return item;
    });
  }
  return (
    <div>
      <input type="text" defaultValue={divGridSettingItem.message} onChange={handleChangeMessage} />
    </div>
  )
}

export {
  DivGridSetting
}