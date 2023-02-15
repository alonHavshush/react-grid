import React, { useState, ChangeEvent, FC, useEffect } from "react";
import { useAppDispatch } from '../../hooks';
import { updateComponent } from '../../store/';
import { DivGridProps } from '../../interfaces/gridInterface';
import Grid from '@mui/material/Unstable_Grid2';
import { Card } from "@mui/material";
import { TextareaAutosize } from '@mui/base';

const DivGridSetting: FC<DivGridProps> = (props, index) => {
  const [divGridSettingItem, setDivGridSettingItem] = useState<DivGridProps>({ ...props });
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateComponent({ index: divGridSettingItem.index, props: { message: divGridSettingItem.message } }));
  }, [divGridSettingItem, dispatch]);

  const handleChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setDivGridSettingItem(item => ({
      ...item,
      message: value
    }));
  }

  return (

    <Grid className="div-grid-setting-wrap" >
      <Card >
        <label>Insert You Message:</label>
        <TextareaAutosize className="textarea-setting" minRows={2} onChange={handleChangeMessage} />
      </Card>
    </Grid >

  )
}

export {
  DivGridSetting
}