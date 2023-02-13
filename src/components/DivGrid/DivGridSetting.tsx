import React, { useState, ChangeEvent, FC, useEffect } from "react";
import { useAppDispatch } from '../../hooks'
import { updateComponent } from '../../store/'
interface DivGridSettingProps {
  index: number;
  message: string
}

const DivGridSetting: FC<DivGridSettingProps> = (props, index) => {
  const [divGridSettingItem, setDivGridSettingItem] = useState<DivGridSettingProps>({ ...props });
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(divGridSettingItem, 'change state');
    dispatch(updateComponent({ index: divGridSettingItem.index, props: { message: divGridSettingItem.message } }));
  }, [divGridSettingItem, dispatch]);

  const handleChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setDivGridSettingItem(item => ({
      ...item,
      message: value
    }));
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